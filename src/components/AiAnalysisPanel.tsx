import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, Button } from './ui';
import { BrainCircuit, Loader2 } from 'lucide-react';
import Markdown from 'react-markdown';

interface AiAnalysisPanelProps {
  phaseId: string;
  phaseName: string;
  category: string;
}

export function AiAnalysisPanel({ phaseId, phaseName, category }: AiAnalysisPanelProps) {
  const [analysisContent, setAnalysisContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/analyze-planner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phaseName, category })
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setAnalysisContent(data.text);
      } else {
        setError(data.error || 'Terjadi kesalahan saat memuat analisis.');
      }
    } catch (err: any) {
      setError(`Gagal menghubungi server: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Reset content when phase ID changes
  React.useEffect(() => {
    setAnalysisContent(null);
    setError(null);
  }, [phaseId]);

  return (
    <Card className="mt-8 border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-white dark:border-indigo-900/50 dark:from-indigo-950/20 dark:to-zinc-950 shadow-sm animate-in fade-in duration-500">
      <CardHeader className="pb-3 border-b border-indigo-100/50 dark:border-indigo-900/30">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold flex items-center gap-2 text-indigo-900 dark:text-indigo-100">
            <BrainCircuit className="h-5 w-5 text-indigo-500" />
            Analisis AI Neurologi & Kesehatan
          </CardTitle>
          {!analysisContent && !isLoading && (
            <Button 
              onClick={handleAnalyze}
              className="px-3 py-1 text-sm bg-indigo-600 hover:bg-indigo-700 text-white shrink-0"
            >
              Mulai Analisis
            </Button>
          )}
        </div>
        <p className="text-xs text-indigo-700/70 dark:text-indigo-300/60 mt-1">
          Dihasilkan menggunakan RAG berdasarkan Jurnal Medis dan Psikiatri mengenai ADHD.
        </p>
      </CardHeader>
      
      <CardContent className="pt-4">
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-8 text-indigo-500 space-y-3">
            <Loader2 className="h-8 w-8 animate-spin" />
            <p className="text-sm font-medium animate-pulse">Menghubungkan ke database jurnal ...</p>
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-md text-sm">
            {error}
          </div>
        )}

        {analysisContent && !isLoading && (
          <div className="prose prose-indigo dark:prose-invert max-w-none prose-sm sm:prose-base prose-p:leading-relaxed prose-headings:font-semibold">
            <div className="markdown-body">
              <Markdown>{analysisContent}</Markdown>
            </div>
          </div>
        )}

        {!analysisContent && !isLoading && !error && (
          <div className="text-center py-8 text-zinc-500 dark:text-zinc-400 text-sm">
            Klik tombol &quot;Mulai Analisis&quot; untuk mendapatkan pandangan medis mengenai strategi rutinitas fase ini.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
