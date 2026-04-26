// Student & Dual Identity Planners
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, Checkbox, Input, Textarea, Button } from '../ui';
import { format } from 'date-fns';

function PlannerHeader({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="mb-8 border-b border-zinc-200 pb-4">
      <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-zinc-900 flex items-center gap-3">
        {title}
      </h2>
      <div className="flex justify-between items-end mt-2">
        <p className="text-zinc-500 font-medium">{format(new Date(), 'EEEE, dd MMMM yyyy')}</p>
        {subtitle && <span className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-bold uppercase rounded-full">{subtitle}</span>}
      </div>
    </div>
  );
}

function DualBattery() {
  return (
    <div className="flex gap-2 w-full mt-2">
      <div className="flex-1 flex flex-col items-center gap-1 p-2 border rounded hover:bg-zinc-50 cursor-pointer">
        <span className="text-2xl">🪫</span><span className="text-[10px] font-bold text-red-600 text-center uppercase">Kosong</span>
      </div>
      <div className="flex-1 flex flex-col items-center gap-1 p-2 border rounded hover:bg-zinc-50 cursor-pointer">
        <span className="text-2xl">🔋</span><span className="text-[10px] font-bold text-green-600 text-center uppercase">Cukup</span>
      </div>
      <div className="flex-1 flex flex-col items-center gap-1 p-2 border rounded hover:bg-zinc-50 cursor-pointer">
        <span className="text-2xl">⚡</span><span className="text-[10px] font-bold text-yellow-600 text-center uppercase">Penuh</span>
      </div>
    </div>
  );
}

export function StudentWorkerPlanner() {
  return (
    <div className="space-y-6">
      <PlannerHeader title="🎓💼 KONSOL DUAL-IDENTITAS" subtitle="Mahasiswa Pekerja" />
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-t-4 border-t-red-500">
          <CardHeader>
            <CardTitle className="text-lg">🔋 1. Audit Baterai Ganda</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <DualBattery />
            <div>
              <label className="text-xs font-bold text-zinc-500 block mb-2 uppercase">Fokus Utama Hari Ini:</label>
              <div className="flex gap-2">
                 <label className="flex-1 flex items-center justify-center gap-2 p-3 bg-blue-50 border border-blue-200 text-blue-900 rounded cursor-pointer hover:bg-blue-100 font-bold text-sm">
                   <Checkbox className="border-blue-500" /> Mode Akademik
                 </label>
                 <label className="flex-1 flex items-center justify-center gap-2 p-3 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded cursor-pointer hover:bg-emerald-100 font-bold text-sm">
                   <Checkbox className="border-emerald-500" /> Mode Profesional
                 </label>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 text-zinc-50">
          <CardHeader>
            <CardTitle className="text-lg text-amber-400">🚧 2. Ritual Transisi</CardTitle>
            <p className="text-xs text-zinc-400">Pembersihan Memori Kerja.</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea className="h-20 bg-zinc-800 border-zinc-700 text-sm" placeholder="Tulis ritual transisimu... (Misal: Matikan Slack, minum air, jalan kaki sblm buka jurnal)." />
            <label className="flex items-center gap-3 p-3 bg-zinc-800 rounded border border-zinc-700 cursor-pointer hover:bg-zinc-700 transition">
              <Checkbox className="bg-zinc-900 border-zinc-500 data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500 data-[state=checked]:text-zinc-900" />
              <span className="font-bold text-amber-500 text-sm">Ritual Selesai. Tab mental ditutup.</span>
            </label>
          </CardContent>
        </Card>
      </div>

      <Card className="border-2 border-indigo-600">
        <CardHeader>
          <CardTitle className="text-xl text-indigo-900">🎯 3. Triage Terpisah (Aturan 1-1)</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
           <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
             <label className="text-sm font-black text-blue-900 flex items-center gap-2 mb-2 uppercase">🏛️ Misi Akademik Absolut</label>
             <Input className="font-bold bg-white border-blue-300" placeholder="Baca 1 bab literatur..." />
           </div>
           <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
             <label className="text-sm font-black text-emerald-900 flex items-center gap-2 mb-2 uppercase">💼 Misi Profesional Absolut</label>
             <Input className="font-bold bg-white border-emerald-300" placeholder="Debugging blok skrip Python..." />
           </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-dashed border-2">
          <CardHeader>
            <CardTitle className="text-lg text-zinc-600">🛑 4. Lintas Dimensi</CardTitle>
            <p className="text-xs text-zinc-500">Ide nyasar dari dunia lain. Jangan dikerjakan skrg.</p>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-xs font-bold text-zinc-400">Ide Kuliah yg Muncul Saat Jam Kerja:</label>
              <Input className="mt-1 border-zinc-200 bg-zinc-50" />
            </div>
            <div>
              <label className="text-xs font-bold text-zinc-400">Ide Kerja yg Muncul Saat Kuliah:</label>
              <Input className="mt-1 border-zinc-200 bg-zinc-50" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-pink-500">
          <CardHeader>
            <CardTitle className="text-lg">🧘 5. Welas Asih</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-xs font-bold text-pink-700">Menu Dopamin Singkat (Tanpa Rasa Bersalah):</label>
              <Input className="mt-1 text-sm font-medium" placeholder="Klip YouTube, rebahan 10mnt..." />
            </div>
            <div className="p-3 bg-pink-50 border border-pink-100 rounded text-sm italic text-pink-900 font-medium leading-relaxed">
              "Saya mungkin tidak selesai semua di to-do list, tapi saya berhasil menjaga batas antara pekerjaan dan pendidikan. Kemenangan eksekutif."
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export function StudentMarriedPlanner() {
  return (
    <div className="space-y-6">
      <PlannerHeader title="🏛️💍 KONSOL SIMBIOSIS" subtitle="Mahasiswa Berumah Tangga" />
      
      <Card className="border-t-4 border-t-blue-500">
        <CardHeader>
          <CardTitle className="text-xl">🔋 1. Audit Energi Berbagi (Partner Power Check)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
             <div className="p-3 border rounded-lg bg-zinc-50">
                <label className="text-xs font-bold uppercase mb-2 block">Baterai Mental SAYA:</label>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 px-3 py-1 text-sm">🪫 Low</Button>
                  <Button variant="outline" className="flex-1 px-3 py-1 text-sm">🔋 Stabil</Button>
                  <Button variant="outline" className="flex-1 px-3 py-1 text-sm">⚡ Tinggi</Button>
                </div>
             </div>
             <div className="p-3 border rounded-lg bg-emerald-50 border-emerald-200">
                <label className="text-xs font-bold uppercase mb-2 block text-emerald-900">Baterai Mental PASANGAN:</label>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 px-3 py-1 text-sm bg-white hover:bg-emerald-100 border-emerald-200 text-emerald-900 font-bold">🪫 Low</Button>
                  <Button variant="outline" className="flex-1 px-3 py-1 text-sm bg-white hover:bg-emerald-100 border-emerald-200 text-emerald-900 font-bold">🔋 Stabil</Button>
                  <Button variant="outline" className="flex-1 px-3 py-1 text-sm bg-white hover:bg-emerald-100 border-emerald-200 text-emerald-900 font-bold">⚡ Tinggi</Button>
                </div>
             </div>
          </div>
          <div>
            <label className="text-xs font-bold text-zinc-500 mb-1 block">Kesepakatan Kolaborasi Hari Ini:</label>
            <Input className="border-blue-200 font-medium" placeholder='"Malam ini sy butuh 3 jam, sbg ganti bsk sy urus rumah..."' />
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
         <Card className="bg-slate-900 text-white">
           <CardHeader>
             <CardTitle className="text-lg text-cyan-400">📚 2. Misi Akademik (Satu Fokus)</CardTitle>
           </CardHeader>
           <CardContent className="space-y-4">
             <div>
               <label className="text-xs font-bold text-cyan-500 uppercase mb-1 block">Target Utama Hari Ini:</label>
               <Input className="bg-slate-800 border-slate-700 font-bold text-white" placeholder="Analisis linguistik manuskrip..." />
             </div>
             <div className="flex items-center gap-3 p-3 bg-slate-800 border-slate-700 rounded-lg">
                <Checkbox className="bg-slate-900 border-zinc-500 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500" />
                <div className="space-y-1 w-full">
                  <label className="text-xs font-bold text-zinc-400">Langkah Mikro (Mulai dalam 5 mnt):</label>
                  <Input className="h-8 max-w-sm bg-slate-900 border-slate-700 text-white text-xs" placeholder="Buka folder referensi di laptop..." />
                </div>
             </div>
           </CardContent>
         </Card>

         <Card className="border-t-4 border-t-rose-500 border-rose-200 bg-rose-50/30">
           <CardHeader>
             <CardTitle className="text-lg text-rose-900">🏠 3. Tugas Domestik "Peredam Konflik"</CardTitle>
           </CardHeader>
           <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                 <Checkbox className="border-rose-500" />
                 <Input className="h-9 bg-white border-rose-200 text-sm" placeholder="Beli galon air / belanja..." />
              </div>
              <div className="flex items-center gap-2">
                 <Checkbox className="border-rose-500" />
                 <Input className="h-9 bg-white border-rose-200 text-sm" placeholder="Cuci piring segera setelah makan..." />
              </div>
           </CardContent>
         </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-l-4 border-l-amber-500">
          <CardHeader>
            <CardTitle className="text-lg text-amber-900">🚧 5. Ritual Transisi: "Ganti Topi"</CardTitle>
            <p className="text-xs text-amber-700">Melepas 'mahasiswa', kembali jadi 'suami/istri'.</p>
          </CardHeader>
          <CardContent className="space-y-4">
             <Textarea className="h-16 text-sm" placeholder="Matikan laptop, taruh buku di rak, lalu minum teh berdua..." />
             <label className="flex items-center gap-3 p-3 bg-amber-50 text-amber-900 rounded cursor-pointer border border-amber-200 font-bold">
               <Checkbox className="border-amber-600 data-[state=checked]:bg-amber-600" />
               Mode Pasangan Aktif.
             </label>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-pink-500">
          <CardHeader>
            <CardTitle className="text-lg text-pink-900">💖 6. Ruang Koneksi Tanpa Gangguan</CardTitle>
          </CardHeader>
          <CardContent>
             <label className="text-xs font-bold text-pink-700 mb-1 block">Waktu Berkualitas (Maks 30-60 Mnt):</label>
             <Textarea className="h-20 bg-pink-50 border-pink-200 text-sm" placeholder="Jalan kaki sore di sekitar Cihampelas, dengarkan lagu bareng tanpa ponsel..." />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export function StudentFreelancePlanner() {
  return (
    <div className="space-y-6">
      <PlannerHeader title="🎓💻 KONSOL KENDALI GANDA" subtitle="Mahasiswa & Freelancer" />
      <div className="bg-red-50 text-red-900 p-4 rounded-xl border border-red-200 text-sm mb-6">
        <strong>Peringatan Klinis:</strong> Jangan biarkan fleksibilitas waktu menjadi lubang hitam. Anda butuh Pembatasan Konteks Ekstrem!
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
         <Card className="border-l-4 border-l-cyan-500">
           <CardHeader>
             <CardTitle className="text-lg">🔋 1. Indikator Realitas</CardTitle>
           </CardHeader>
           <CardContent className="space-y-4">
             <div className="flex items-center gap-4 border-b pb-4">
               <label className="text-sm font-bold w-24">Tidur Semalam:</label>
               <Input type="number" className="font-mono w-24" /> <span className="font-bold text-sm">Jam</span>
             </div>
             <div>
                <label className="text-xs font-bold uppercase block mb-2">Baterai Kognitif:</label>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 shrink-0 text-xs">🪫 Bertahan Hidup</Button>
                  <Button variant="outline" className="flex-1 shrink-0 text-xs text-green-700 border-green-500 bg-green-50">🔋 Normal</Button>
                  <Button variant="outline" className="flex-1 shrink-0 text-xs">⚡ Hiperfokus</Button>
                </div>
             </div>
             <p className="text-xs italic text-zinc-500 leading-relaxed font-medium mt-2">
               "Saya HANYA akan menuntut diri saya menyelesaikan tugas absolut tanpa mengejar kesempurnaan."
             </p>
           </CardContent>
         </Card>

         <Card className="bg-slate-900 text-white">
           <CardHeader>
             <CardTitle className="text-lg text-emerald-400">🔀 3. Blok Waktu "Toggle Switch"</CardTitle>
           </CardHeader>
           <CardContent className="space-y-3">
             <div className="space-y-1">
                <label className="text-xs font-bold text-cyan-400">💼 Blok Freelance (Fokus 100% Klien):</label>
                <div className="flex items-center gap-2">
                  <Input type="time" className="h-8 max-w-[120px] bg-slate-800 border-slate-700 text-white text-xs font-mono" />
                  <span className="text-zinc-600">-</span>
                  <Input type="time" className="h-8 max-w-[120px] bg-slate-800 border-slate-700 text-white text-xs font-mono" />
                </div>
             </div>
             <div className="space-y-1">
                <label className="text-xs font-bold text-indigo-400">🏛️ Blok Mahasiswa (Fokus 100% Kuliah):</label>
                <div className="flex items-center gap-2">
                  <Input type="time" className="h-8 max-w-[120px] bg-slate-800 border-slate-700 text-white text-xs font-mono" />
                  <span className="text-zinc-600">-</span>
                  <Input type="time" className="h-8 max-w-[120px] bg-slate-800 border-slate-700 text-white text-xs font-mono" />
                </div>
             </div>
             <div className="space-y-1 pt-2 border-t border-slate-800">
                <label className="text-xs font-bold text-amber-400">Protokol Transisi (15 Mnt):</label>
                <p className="text-xs text-zinc-400">Berdiri, minum air, ganti profil browser laptop.</p>
             </div>
           </CardContent>
         </Card>
      </div>

      <Card className="border-2 border-indigo-600">
        <CardHeader>
          <CardTitle className="text-lg text-indigo-900">🎯 2. Triage Dua Dunia (Aturan 1 + 1)</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
           <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
             <label className="text-sm font-black text-indigo-900 flex items-center gap-2 mb-2 uppercase">🏛️ 1 Misi Akademik Absolut</label>
             <Input className="font-bold bg-white border-indigo-300 mb-2" placeholder="Tugas utama S-2..." />
             <div className="flex items-center gap-2 pl-2">
               <Checkbox className="h-3 w-3 border-indigo-400" />
               <Input className="h-6 flex-1 text-xs bg-white border-indigo-200" placeholder="Langkah mikro (Buka jurnal...)" />
             </div>
           </div>
           <div className="p-4 bg-cyan-50 border border-cyan-200 rounded-lg">
             <label className="text-sm font-black text-cyan-900 flex items-center gap-2 mb-2 uppercase">💼 1 Misi Freelance Absolut</label>
             <Input className="font-bold bg-white border-cyan-300 mb-2" placeholder="Proyek klien n8n / Python..." />
             <div className="flex items-center gap-2 pl-2">
               <Checkbox className="h-3 w-3 border-cyan-400" />
               <Input className="h-6 flex-1 text-xs bg-white border-cyan-200" placeholder="Langkah mikro (Tulis 5 baris...)" />
             </div>
           </div>
        </CardContent>
      </Card>
    </div>
  )
}
