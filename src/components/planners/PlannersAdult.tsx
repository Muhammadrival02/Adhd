// Adult Planners
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

function BatterySelector() {
  return (
    <div className="flex gap-2 w-full mt-2">
      <div className="flex-1 flex flex-col items-center gap-1 p-2 border rounded hover:bg-zinc-50 cursor-pointer">
        <span className="text-2xl">🪫</span><span className="text-[10px] font-bold text-red-600">KRITIS</span>
      </div>
      <div className="flex-1 flex flex-col items-center gap-1 p-2 border rounded hover:bg-zinc-50 cursor-pointer">
        <span className="text-2xl">🔋</span><span className="text-[10px] font-bold text-green-600">STABIL</span>
      </div>
      <div className="flex-1 flex flex-col items-center gap-1 p-2 border rounded hover:bg-zinc-50 cursor-pointer">
        <span className="text-2xl">⚡</span><span className="text-[10px] font-bold text-yellow-600">HIPERFOKUS</span>
      </div>
    </div>
  );
}

export function AdultPlanner() {
  return (
    <div className="space-y-6">
      <PlannerHeader title="🏛️ KONSOL KENDALI EKSEKUTIF" subtitle="DEWASA 18+ (UNIV/FRESH GRAD)" />

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-1 border-t-4 border-t-red-500 h-fit">
          <CardHeader>
            <CardTitle className="text-lg">🔋 1. Kapasitas Energi</CardTitle>
          </CardHeader>
          <CardContent>
            <BatterySelector />
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2 border-zinc-800 bg-zinc-900 text-zinc-50">
          <CardHeader>
            <CardTitle className="text-xl">🧠 2. Brain Dump & Triage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="space-y-1">
                <label className="text-xs font-bold text-red-400">1. Non-Negosiabel (Wajib Selesai):</label>
                <Input className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500" placeholder="Tugas krusial hari ini..." />
             </div>
             <div className="space-y-1">
                <label className="text-xs font-bold text-yellow-400">2. Penting tapi Fleksibel:</label>
                <Input className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500" />
             </div>
             <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-400">3. Delegasikan/Abaikan:</label>
                <Input className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 line-through" />
             </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-l-4 border-l-red-600 border-red-200 bg-red-50/30">
        <CardHeader>
          <CardTitle className="text-xl text-red-900 flex items-center gap-2">
            💸 3. Mitigasi "Pajak ADHD" (ADHD Tax)
          </CardTitle>
          <p className="text-xs text-red-700 font-medium">Cek satu hal agar tidak rugi uang/waktu (denda, lupa langganan).</p>
        </CardHeader>
        <CardContent>
          <Input className="font-bold border-red-300" placeholder="Tindakan pencegahan hari ini..." />
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-t-4 border-t-indigo-500">
          <CardHeader>
            <CardTitle className="text-lg">⚙️ 4. Sesi Kerja "Deep Work"</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input type="time" className="w-24" /> 
              <span className="self-center font-bold text-zinc-400">-</span> 
              <Input type="time" className="w-24" />
              <Input className="flex-1 font-bold" placeholder="Tugas..." />
            </div>
            <div className="p-3 bg-zinc-100 rounded border border-dashed border-zinc-300">
              <label className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-2 mb-2">
                🛑 Zona Parkir Ide
              </label>
              <Textarea className="h-20 bg-transparent border-none p-0 focus-visible:ring-0 resize-none shadow-none text-sm" placeholder="Tulis distraksi di sini untuk NANTI..." />
            </div>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-green-500">
          <CardHeader>
            <CardTitle className="text-lg">🍹 5. Menu Dopamin Dewasa</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
               <label className="text-xs font-bold text-green-700 uppercase flex mb-1">Menu Cepat (Restorasi):</label>
               <Input placeholder="Kopi tanpa gangguan, jalan 5mnt..." className="text-sm" />
            </div>
            <div>
               <label className="text-xs font-bold text-green-700 uppercase flex mb-1">Menu Utama:</label>
               <Input placeholder="Olahraga, baca e-book, hobi teknis..." className="text-sm" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-zinc-50 border-dashed border-zinc-300">
        <CardHeader>
          <CardTitle className="text-lg text-zinc-600">🧘 6. Refleksi & Welas Asih</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm font-medium mb-1 text-zinc-700">Apa satu hal yang saya selesaikan meskipun otak sedang sulit?</p>
            <Input className="border-zinc-200" />
          </div>
          <div>
            <p className="text-sm font-medium mb-1 text-zinc-700">Rasa bersalah yang saya lepaskan hari ini:</p>
            <Input className="border-zinc-200 text-zinc-500" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function ProSinglePlanner() {
  return (
    <div className="space-y-6">
      <PlannerHeader title="💼 PROTOKOL PROFESIONAL LAJANG" subtitle="Usia Pekerja" />
      
      <Card className="border-2 border-indigo-600 bg-indigo-50/20">
        <CardHeader>
          <CardTitle className="text-xl text-indigo-900">🚪 1. Ruang Udara Transisi</CardTitle>
          <p className="text-sm text-indigo-700">Ritual pemutus arus dari "kantor" ke "rumah".</p>
        </CardHeader>
        <CardContent className="space-y-2">
          {['Mandi air hangat segera','Dengar playlist 15 mnt tanpa mikir kerja','Jalan kaki reset visual'].map((item,i) => (
             <label key={i} className="flex items-center gap-3 p-3 bg-white border border-indigo-100 rounded-lg hover:border-indigo-300 cursor-pointer text-sm font-medium text-zinc-700">
               <Checkbox /> {item}
             </label>
          ))}
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-zinc-900 text-zinc-50">
          <CardHeader>
            <CardTitle className="text-lg">⚖️ 2. Triage Karier & Domestik</CardTitle>
            <p className="text-xs text-zinc-400">Bagi kuota energi.</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
               <label className="text-xs font-bold text-zinc-300 uppercase">Karier (Maks 2)</label>
               <Input className="bg-zinc-800 border-zinc-700 text-white" placeholder="1." />
               <Input className="bg-zinc-800 border-zinc-700 text-white" placeholder="2." />
            </div>
            <div className="space-y-2 pt-2 border-t border-zinc-800">
               <label className="text-xs font-bold text-pink-300 uppercase">Domestik/Survive (Maks 2)</label>
               <Input className="bg-zinc-800 border-zinc-700 text-white" placeholder="Buang sampah, dll..." />
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-500 border-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">💸</div>
          <CardHeader>
            <CardTitle className="text-lg text-orange-900">💸 3. Barikade Finansial</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 relative z-10">
            <div>
               <label className="text-xs font-bold text-orange-800 block mb-1">Pajak Admin Hari Ini (Tagihan/Transfer):</label>
               <Input className="border-orange-200" />
            </div>
            <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
               <label className="text-xs font-bold text-orange-800 block mb-1">Rem Pembelian Impulsif (Tahan 48 Jam):</label>
               <Input className="bg-white border-orange-200 text-orange-900 placeholder:text-orange-300" placeholder="Gadget baru, aset digital..." />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">👥 4. Radar Relasi</CardTitle>
            <p className="text-xs text-zinc-500">Object permanence protection.</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-xs font-bold text-zinc-600">Harus saya hubungi/balas pesan hari ini:</label>
              <Input className="mt-1" />
            </div>
            <div>
              <label className="text-xs font-bold text-zinc-600">Pemeliharaan Hubungan (Tindakan):</label>
              <Input className="mt-1" placeholder="Jadwalkan kencan/telepon saudara..." />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-emerald-700">⛰️ 5. Menu Eskapisme Sehat</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <Textarea placeholder="Eksplorasi fisik/luar ruangan (misal: hiking, kebun teh)..." className="h-[70px]" />
             <Textarea placeholder="Eksplorasi sensori (misal: kuliner warung lokal)..." className="h-[70px]" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export function FreelanceSinglePlanner() {
  return (
    <div className="space-y-6">
      <PlannerHeader title="💻 KONSOL OPERASIONAL FREELANCE" subtitle="ADHD-TECH EDITION" />
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-1 border-t-4 border-t-cyan-500">
          <CardHeader>
            <CardTitle className="text-lg">⚓ 1. The Anchor</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-xs font-bold text-zinc-500">Jam Mulai Kerja:</label>
              <Input type="time" className="font-mono mt-1 w-full" />
            </div>
            <div>
              <label className="text-xs font-bold text-cyan-700">Pemicu Dopamin Pagi (Maks 15m):</label>
              <Input className="text-sm border-cyan-200 mt-1" placeholder="Baca artikel AI, brown noise..." />
            </div>
            <BatterySelector />
          </CardContent>
        </Card>

        <Card className="md:col-span-2 bg-slate-900 text-slate-50 border-slate-800">
          <CardHeader>
            <CardTitle className="text-xl text-cyan-400">🎯 2. Big 3 & Micro-Action</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             {[1,2,3].map(i => (
                <div key={i} className="pl-3 border-l-2 border-cyan-500/50 space-y-2">
                  <Input placeholder={`Prioritas ${i}`} className="bg-slate-800 border-slate-700 text-white font-bold" />
                  <div className="flex items-center gap-2 pl-4">
                    <Checkbox className="border-cyan-500 data-[state=checked]:bg-cyan-500" />
                    <Input placeholder="Langkah konyol & mudah (Buka file...)" className="h-8 max-w-sm bg-slate-800/50 border-slate-700 text-xs" />
                  </div>
                </div>
             ))}
          </CardContent>
        </Card>
      </div>

      <Card className="border-2 border-red-200 bg-red-50/20">
        <CardHeader>
          <CardTitle className="text-lg text-red-800">💸 3. Barikade ADHD Tax & Admin</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <label className="flex items-start gap-2 text-sm p-3 border border-red-100 rounded-lg bg-white shadow-sm cursor-pointer hover:border-red-300">
            <Checkbox className="mt-0.5" /> <span className="font-medium">Invoicing & Tagihan (Ada yg harus ditagih?)</span>
          </label>
          <label className="flex items-start gap-2 text-sm p-3 border border-red-100 rounded-lg bg-white shadow-sm cursor-pointer hover:border-red-300">
            <Checkbox className="mt-0.5" /> <span className="font-medium">Komunikasi (Balas email krusial / chat klien)</span>
          </label>
          <label className="flex items-start gap-2 text-sm p-3 border border-red-100 rounded-lg bg-white shadow-sm cursor-pointer hover:border-red-300">
            <Checkbox className="mt-0.5" /> <span className="font-medium">Pengingat Langganan (Trial API, dll)</span>
          </label>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-dashed border-2 border-zinc-300">
          <CardHeader>
            <CardTitle className="text-lg text-zinc-600">🛑 4. Zona Parkir Ide</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
             <div>
               <label className="text-xs font-bold text-zinc-400">Ide Workflow/Proyek Baru:</label>
               <Input className="border-zinc-200 mt-1" />
             </div>
             <div>
               <label className="text-xs font-bold text-zinc-400">Riset Acak (Teknologi baru):</label>
               <Input className="border-zinc-200 mt-1" />
             </div>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-purple-500">
          <CardHeader>
            <CardTitle className="text-lg">🌌 6. Shutdown Ritual</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
             <div className="flex items-center gap-4">
               <label className="text-sm font-bold w-32">Jam Berhenti:</label>
               <Input type="time" className="font-mono w-32" />
             </div>
             <div className="flex items-center gap-4">
               <label className="text-sm font-bold w-32 shrink-0">Lepas Kabel:</label>
               <Input placeholder="Tutup browser, rapikan..." className="flex-1" />
             </div>
             <div className="flex items-center gap-4">
               <label className="text-sm font-bold w-32 shrink-0">Koneksi Sosial:</label>
               <Input placeholder="Kontak teman/keluarga..." className="flex-1" />
             </div>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}
