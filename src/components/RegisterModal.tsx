import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, Input, Button } from './ui';
import { X, CheckCircle2, Loader2, User, Key, LogIn, UserPlus } from 'lucide-react';

export function AuthModal({ onClose, onAuthSuccess }: { onClose: () => void; onAuthSuccess: (email: string) => void }) {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [whatsapp, setWhatsapp] = useState(''); // Only used for registration, though not strictly required for login
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || (!isLoginMode && !whatsapp)) return;

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      if (isLoginMode) {
        // Just mock login
      } else {
        const creationDate = new Date().toISOString();
        // Mirror database to server in CSV format
        try {
          await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, whatsapp, createdAt: creationDate })
          });
        } catch (e) {
          console.error("Failed to mirror data to local server", e);
        }
      }
      setIsSuccess(true);
      setTimeout(() => {
        onAuthSuccess(email);
      }, 1500);
    } catch (error: any) {
      console.error(error);
      setErrorMsg(error.message || 'Login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/50 p-4 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose}></div>
      <Card className="w-full max-w-md shadow-2xl relative z-10 animate-in fade-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            {isLoginMode ? <LogIn className="h-6 w-6 text-indigo-600" /> : <UserPlus className="h-6 w-6 text-indigo-600" />}
            {isLoginMode ? 'Masuk ke Akun' : 'Daftar Akun Baru'}
          </CardTitle>
          <p className="text-sm text-zinc-500">
            {isLoginMode 
              ? 'Silakan masuk untuk melanjutkan dan mengunduh PDF atau menyimpan progress.' 
              : 'Daftarkan email Anda untuk menyimpan progress profil dan mengunduh PDF.'}
          </p>
        </CardHeader>
        
        <CardContent>
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-6 text-center space-y-4">
              <CheckCircle2 className="h-16 w-16 text-emerald-500" />
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                  {isLoginMode ? 'Login Berhasil!' : 'Registrasi Berhasil!'}
                </h3>
                <p className="text-sm text-zinc-500 mt-1">
                  Mengarahkan ke dashboard...
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-200">
                  {errorMsg}
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
                  Email
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="nama@email.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-9"
                    required
                  />
                </div>
              </div>
              
              {!isLoginMode && (
                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
                    Nomor WhatsApp
                  </label>
                  <Input 
                    id="whatsapp" 
                    type="tel" 
                    placeholder="081234567890" 
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    required={!isLoginMode}
                  />
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
                  Password
                </label>
                <div className="relative">
                  <Key className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-9"
                    required
                  />
                </div>
              </div>
              
              <div className="pt-4 flex flex-col gap-3">
                <Button 
                  type="submit" 
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                  disabled={isSubmitting || !email || !password || (!isLoginMode && !whatsapp)}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Memproses...
                    </>
                  ) : (
                    isLoginMode ? 'Masuk' : 'Daftar Sekarang'
                  )}
                </Button>
                
                <button
                  type="button"
                  onClick={() => {
                    setIsLoginMode(!isLoginMode);
                    setErrorMsg('');
                  }}
                  className="text-sm text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
                >
                  {isLoginMode 
                    ? 'Belum punya akun? Daftar di sini.' 
                    : 'Sudah punya akun? Masuk di sini.'}
                </button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
