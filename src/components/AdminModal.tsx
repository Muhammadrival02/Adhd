import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, Input, Button, Textarea } from './ui';
import { X, Lock, Key, User, Download, Save, Loader2, Database, LogIn } from 'lucide-react';

export function AdminModal({ onClose }: { onClose: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  const [csvData, setCsvData] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) return;

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/admin/get-csv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setIsAuthenticated(true);
        setCsvData(result.data || 'No data');
      } else {
        setErrorMsg(result.error || 'Authentication failed');
      }
    } catch (err) {
      setErrorMsg('Gagal terhubung ke server');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSaveToCSV = async () => {
    setIsSaving(true);
    setSaveSuccessMsg('');
    try {
      const response = await fetch('/api/admin/save-csv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setSaveSuccessMsg(result.message);
      } else {
        setErrorMsg(result.error || 'Gagal menyimpan database');
      }
    } catch (err) {
      setErrorMsg('Error saat menghubungi server');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 p-4 backdrop-blur-md">
      <div className="absolute inset-0" onClick={onClose}></div>
      <Card className="w-full max-w-lg shadow-2xl relative z-10 animate-in fade-in zoom-in-95 duration-200 bg-zinc-900 border-zinc-800 text-zinc-100">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-100 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Lock className="h-6 w-6 text-red-500" />
            Admin Database Console
          </CardTitle>
          <p className="text-sm text-zinc-400">
            Akses khusus administrator.
          </p>
        </CardHeader>
        
        <CardContent>
          {!isAuthenticated ? (
            <form onSubmit={handleLogin} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-red-900/50 text-red-200 text-sm rounded-lg border border-red-800">
                  {errorMsg}
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-bold text-zinc-300">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                  <Input 
                    id="username" 
                    type="text" 
                    placeholder="Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-9 bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-bold text-zinc-300">
                  Password
                </label>
                <div className="relative">
                  <Key className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-9 bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                    required
                  />
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white border-none"
                  disabled={isSubmitting || !username || !password}
                >
                  {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <LogIn className="mr-2 h-4 w-4" />}
                  {isSubmitting ? 'Verifikasi...' : 'Login Admin'}
                </Button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              {saveSuccessMsg && (
                <div className="p-3 bg-emerald-900/50 text-emerald-200 text-sm rounded-lg border border-emerald-800 whitespace-pre-line">
                  {saveSuccessMsg}
                </div>
              )}
              {errorMsg && (
                <div className="p-3 bg-red-900/50 text-red-200 text-sm rounded-lg border border-red-800">
                  {errorMsg}
                </div>
              )}

              <div className="rounded-md border border-zinc-800 bg-zinc-950 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="h-4 w-4 text-emerald-400" />
                  <h4 className="font-medium text-sm text-zinc-200">Database Registration (CSV Preview)</h4>
                </div>
                <Textarea 
                  value={csvData} 
                  readOnly 
                  className="font-mono text-xs h-40 bg-zinc-900 text-zinc-300 border-zinc-800 focus-visible:ring-0" 
                />
              </div>

              <Button 
                onClick={handleSaveToCSV}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                disabled={isSaving}
              >
                {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                {isSaving ? 'Menyimpan...' : 'Simpan Database di Server (CSV)'}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
