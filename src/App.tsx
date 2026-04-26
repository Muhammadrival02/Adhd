import React, { useState, useRef, useEffect } from 'react';
import { LIFE_PHASES } from './data/phases';
import { Brain, Menu, X, Download, Loader2, UserPlus, LogOut, User } from 'lucide-react';
import { Button } from './components/ui';

import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';

import { ChildPlanner, TeenPlanner } from './components/planners/PlannersChild';
import { AdultPlanner, ProSinglePlanner, FreelanceSinglePlanner } from './components/planners/PlannersAdult';
import { MarriedPlanner, FreelanceMarriedPlanner, WorkingParentPlanner } from './components/planners/PlannersMarried';
import { StudentWorkerPlanner, StudentMarriedPlanner, StudentFreelancePlanner } from './components/planners/PlannersStudent';
import { Triage3DPlanner, Survival4StarPlanner } from './components/planners/PlannersExtreme';
import { AuthModal } from './components/RegisterModal';
import { AdminModal } from './components/AdminModal';
import { AiAnalysisPanel } from './components/AiAnalysisPanel';

export interface LocalUser {
  email: string;
}

export default function App() {
  const [activePhaseId, setActivePhaseId] = useState(LIFE_PHASES[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [user, setUser] = useState<LocalUser | null>(null);
  const plannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('localUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLoginSuccess = (email: string) => {
    const newUser = { email };
    setUser(newUser);
    localStorage.setItem('localUser', JSON.stringify(newUser));
    setIsAuthModalOpen(false);
  };

  const categories = Array.from(new Set(LIFE_PHASES.map(p => p.category)));

  const handleExportPDF = async () => {
    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }

    if (!plannerRef.current) return;
    setIsExporting(true);
    
    try {
      // Small delay to ensure any UI states settle before capture
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const dataUrl = await toPng(plannerRef.current, {
        cacheBust: true,
        backgroundColor: '#fafafa',
        pixelRatio: 2
      });

      const img = new Image();
      img.src = dataUrl;
      await new Promise(resolve => img.onload = resolve);

      const imgWidth = img.width / 2;
      const imgHeight = img.height / 2;
      
      const pdf = new jsPDF({
        orientation: imgWidth > imgHeight ? 'landscape' : 'portrait',
        unit: 'px',
        format: [imgWidth, imgHeight],
      });

      pdf.addImage(dataUrl, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`ADHD_Planner_${activePhaseId}.pdf`);
    } catch (error) {
      console.error("Failed to generate PDF", error);
      alert("Failed to generate PDF. Check console for details.");
    } finally {
      setIsExporting(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('localUser');
  };

  const renderActivePlanner = () => {
    switch (activePhaseId) {
      case 'child-7': return <ChildPlanner />;
      case 'teen-13': return <TeenPlanner />;
      case 'adult-18': return <AdultPlanner />;
      case 'pro-single': return <ProSinglePlanner />;
      case 'freelance-single': return <FreelanceSinglePlanner />;
      case 'married': return <MarriedPlanner />;
      case 'freelance-married': return <FreelanceMarriedPlanner />;
      case 'working-parent': return <WorkingParentPlanner />;
      case 'student-worker': return <StudentWorkerPlanner />;
      case 'student-married': return <StudentMarriedPlanner />;
      case 'student-freelance': return <StudentFreelancePlanner />;
      case 'triage-3d': return <Triage3DPlanner />;
      case 'survival-4star': return <Survival4StarPlanner />;
      default: return <div>Select a planner</div>;
    }
  };

  return (
    <div className="flex h-screen w-full bg-zinc-50 font-sans dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 overflow-hidden">
      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden absolute top-4 left-4 z-50">
        <Button variant="outline" className="h-10 w-10 p-0" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-72 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 
        transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center gap-2 mb-8 mt-8 md:mt-0">
            <Brain className="h-6 w-6 text-indigo-600" />
            <h1 className="font-bold text-lg tracking-tight">ADHD-EFOS</h1>
          </div>
          
          <div className="flex-1 overflow-y-auto pr-2 space-y-6">
            {categories.map(category => (
              <div key={category} className="space-y-2">
                <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">{category}</h2>
                <div className="space-y-1">
                  {LIFE_PHASES.filter(p => p.category === category).map(phase => (
                    <button
                      key={phase.id}
                      onClick={() => {
                        setActivePhaseId(phase.id);
                        setIsSidebarOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        activePhaseId === phase.id
                          ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400'
                          : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-50'
                      }`}
                    >
                      {phase.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800">
            {user ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3 px-2">
                  <div className="h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                    <User className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                      {user.email}
                    </p>
                  </div>
                </div>
                <Button 
                  className="w-full gap-2 text-zinc-600 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30" 
                  variant="ghost"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4" />
                  Keluar
                </Button>
              </div>
            ) : (
              <Button 
                className="w-full gap-2 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-300 dark:hover:bg-indigo-900/40" 
                variant="secondary"
                onClick={() => {
                  setIsAuthModalOpen(true);
                  setIsSidebarOpen(false);
                }}
              >
                <UserPlus className="h-4 w-4" />
                Masuk / Daftar
              </Button>
            )}

            <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <button
                onClick={() => {
                  setIsAdminModalOpen(true);
                  setIsSidebarOpen(false);
                }}
                className="w-full text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 py-2 transition-colors flex justify-center items-center gap-1"
              >
                Admin Access
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto h-full p-4 md:p-8 lg:p-12 relative w-full pt-16 md:pt-8 bg-zinc-100/50">
        <div className="max-w-4xl mx-auto flex flex-col">
          
          <div className="flex justify-end mb-4">
            <Button 
                onClick={handleExportPDF} 
                className="gap-2 focus:ring-offset-zinc-100"
                disabled={isExporting}
            >
              {isExporting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
              {isExporting ? 'Generating PDF...' : 'Export to PDF'}
            </Button>
          </div>

          <div ref={plannerRef} className="bg-zinc-50 p-2 sm:p-4 md:p-6 lg:p-8 rounded-2xl shadow-sm border border-zinc-200">
            {renderActivePlanner()}
          </div>

          <AiAnalysisPanel 
            phaseId={activePhaseId} 
            phaseName={LIFE_PHASES.find(p => p.id === activePhaseId)?.name || ''}
            category={LIFE_PHASES.find(p => p.id === activePhaseId)?.category || ''}
          />
        </div>
      </div>
      
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 md:hidden backdrop-blur-sm transition-opacity" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Modals */}
      {isAuthModalOpen && (
        <AuthModal onClose={() => setIsAuthModalOpen(false)} onAuthSuccess={handleLoginSuccess} />
      )}

      {isAdminModalOpen && (
        <AdminModal onClose={() => setIsAdminModalOpen(false)} />
      )}
    </div>
  );
}
