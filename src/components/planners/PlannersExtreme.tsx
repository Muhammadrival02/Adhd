// Extreme Mode Planners
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, Checkbox, Input, Textarea, Button } from '../ui';
import { format } from 'date-fns';

function PlannerHeader({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="mb-6 border-b border-zinc-200 pb-4">
      <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-zinc-900 flex items-center gap-3">
        {title}
      </h2>
      <div className="flex justify-between items-end mt-2">
        <p className="text-zinc-500 font-medium">{format(new Date(), 'EEEE, dd MMMM yyyy')}</p>
        {subtitle && <span className="px-3 py-1 bg-red-100 text-red-900 text-xs font-black tracking-widest uppercase rounded-full animate-pulse">{subtitle}</span>}
      </div>
    </div>
  );
}

export function Triage3DPlanner() {
  return (
    <div className="space-y-6">
      <PlannerHeader title="⚖️ KONSOL TRIASE 3 DIMENSI" subtitle="Mode Manajemen Krisis Total" />
      <div className="bg-red-900 text-red-50 p-4 rounded-xl border border-red-950 text-sm shadow-inner relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-20 text-6xl rotate-12">🚨</div>
        <strong className="text-red-200 block mb-1">Mitos Harmoni:</strong> Anda tidak bisa 100% di semua hal hari ini. Triase 3 Dimensi berarti Anda MEMILIH dimensi mana yang harus selamat, dan mana yang autopilot.
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
         <Card className="col-span-1 border-t-4 border-t-amber-500 flex flex-col">
           <CardHeader className="pb-3">
             <CardTitle className="text-lg">🎛️ 1. Audit Baterai</CardTitle>
           </CardHeader>
           <CardContent className="flex-1 flex flex-col justify-center gap-2">
             <Button variant="outline" className="w-full justify-start gap-2 h-12 text-red-700 border-red-500 bg-red-50"><span className="text-xl">🪫</span> KRITIS (Survival)</Button>
             <Button variant="outline" className="w-full justify-start gap-2 h-12"><span className="text-xl">🔋</span> STABIL</Button>
             <Button variant="outline" className="w-full justify-start gap-2 h-12"><span className="text-xl">⚡</span> HIPERFOKUS</Button>
           </CardContent>
         </Card>

         <Card className="col-span-2 bg-zinc-900 text-white">
           <CardHeader className="pb-3">
             <CardTitle className="text-lg text-amber-400">🔮 Penentuan "Bola Kaca"</CardTitle>
             <p className="text-xs text-zinc-400">Pilih SATU bola kaca yang TIDAK BOLEH jatuh hari ini.</p>
           </CardHeader>
           <CardContent className="space-y-3">
              <label className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg cursor-pointer border border-transparent hover:border-cyan-500 transition-colors">
                <Checkbox className="h-5 w-5 bg-slate-900 border-slate-500 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500" />
                <div className="flex-1">
                  <span className="font-bold text-cyan-400 block text-xs tracking-wider uppercase mb-1">💼 PROFESIONAL (KARIER)</span>
                  <Input className="h-7 text-xs bg-slate-900 border-slate-700 font-medium" placeholder="Deploy n8n, optimasi SEO klien..." />
                </div>
              </label>
              
              <label className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg cursor-pointer border border-transparent hover:border-indigo-400 transition-colors">
                <Checkbox className="h-5 w-5 bg-slate-900 border-slate-500 data-[state=checked]:bg-indigo-500 data-[state=checked]:border-indigo-500" />
                <div className="flex-1">
                  <span className="font-bold text-indigo-400 block text-xs tracking-wider uppercase mb-1">🏛️ AKADEMIK (KAMPUS)</span>
                  <Input className="h-7 text-xs bg-slate-900 border-slate-700 font-medium" placeholder="Riset manuskrip, tugas S-2 Safwa..." />
                </div>
              </label>
              
              <label className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg cursor-pointer border border-transparent hover:border-rose-400 transition-colors">
                <Checkbox className="h-5 w-5 bg-slate-900 border-slate-500 data-[state=checked]:bg-rose-500 data-[state=checked]:border-rose-500" />
                <div className="flex-1">
                  <span className="font-bold text-rose-400 block text-xs tracking-wider uppercase mb-1">🏠 PERNIKAHAN / KELUARGA</span>
                  <Input className="h-7 text-xs bg-slate-900 border-slate-700 font-medium" placeholder="Waktu berkualitas eksklusif bersama Aprisa..." />
                </div>
              </label>
           </CardContent>
         </Card>
      </div>

      <Card className="border-2 border-indigo-200 bg-indigo-50/30">
        <CardHeader>
          <CardTitle className="text-lg text-indigo-900">🎯 2. Protokol 1-1-1 (Aksi Atomik Terkecil)</CardTitle>
          <p className="text-xs text-indigo-700">Tulis SATU langkah fisik terkecil untuk Masing-Masing dunia.</p>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
           <div>
             <label className="text-xs font-bold text-cyan-800 block mb-1 uppercase">💼 Karier (Langkah Mikro):</label>
             <Input className="bg-white border-cyan-200 text-sm font-medium" placeholder="Buka terminal/IDE..." />
           </div>
           <div>
             <label className="text-xs font-bold text-indigo-800 block mb-1 uppercase">🏛️ Akademik (Langkah Mikro):</label>
             <Input className="bg-white border-indigo-200 text-sm font-medium" placeholder="Baca 2 hal jurnal..." />
           </div>
           <div>
             <label className="text-xs font-bold text-rose-800 block mb-1 uppercase">🏠 Nikah (Langkah Mikro):</label>
             <Input className="bg-white border-rose-200 text-sm font-medium" placeholder="Tanya kabar/peluk pasangan..." />
           </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
         <Card className="border-t-4 border-t-amber-500">
           <CardHeader>
             <CardTitle className="text-lg">🚧 3. The Toggle Protocol</CardTitle>
             <p className="text-xs text-zinc-500">Barikade Transisi. Pembersihan RAM mental.</p>
           </CardHeader>
           <CardContent className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-bold text-cyan-700 flex items-center gap-2">
                  💼 Sif Freelance 
                  <Input type="time" className="w-24 h-7 text-xs inline" /> <span className="text-zinc-400">-</span> <Input type="time" className="w-24 h-7 text-xs inline" />
                </label>
                <div className="text-xs bg-zinc-50 p-2 rounded text-zinc-600">Mode SEO & Engineering Aktif.</div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-bold text-indigo-700 flex items-center gap-2">
                  🏛️ Sif Akademik 
                  <Input type="time" className="w-24 h-7 text-xs inline" /> <span className="text-zinc-400">-</span> <Input type="time" className="w-24 h-7 text-xs inline" />
                </label>
                <div className="text-xs bg-zinc-50 p-2 rounded text-zinc-600">Mode Peneliti S-2 Aktif.</div>
              </div>
              <div className="pt-2 border-t">
                <label className="text-xs font-bold text-amber-700 block mb-1">Ritual Pembersihan RAM (15m):</label>
                <Input className="text-sm" placeholder="Ganti profil browser, minum air es, lagu J-Pop..." />
              </div>
           </CardContent>
         </Card>

         <div className="space-y-6">
            <Card className="border-red-200 border-2">
              <CardHeader className="py-3">
                <CardTitle className="text-base text-red-900">💸 4. Mitigasi ADHD Tax Logistik</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                 <label className="flex items-center gap-3 bg-red-50 text-red-900 p-2 rounded border border-red-100 cursor-pointer">
                    <Checkbox className="border-red-500" /> <span className="text-sm font-bold">Cek Admin (Draf tesis, tagihan rumah, invoice)</span>
                 </label>
                 <label className="flex items-center gap-3 bg-red-50 text-red-900 p-2 rounded border border-red-100 cursor-pointer">
                    <Checkbox className="border-red-500" /> <span className="text-sm font-bold">Cek Logistik (Kebutuhan dapur habis di Cihampelas?)</span>
                 </label>
              </CardContent>
            </Card>

            <Card className="border-rose-200 border-2 bg-rose-50/20">
              <CardHeader className="py-3">
                <CardTitle className="text-base text-rose-900">💖 5. Radar Koneksi Intensional</CardTitle>
              </CardHeader>
              <CardContent>
                 <Input className="text-sm border-rose-200" placeholder="Kencan toko buku / jalan sore tanpa mikir kode..." />
              </CardContent>
            </Card>
         </div>
      </div>
    </div>
  )
}

export function Survival4StarPlanner() {
  return (
    <div className="space-y-6">
      <PlannerHeader title="🚨 KONSOL SURVIVAL BINTANG EMPAT" subtitle="Karier + S-2 + Pasangan + Anak" />
      <div className="bg-red-950 text-red-50 p-5 rounded-xl border border-red-900 text-sm shadow-xl relative overflow-hidden">
        <div className="absolute -top-4 -right-4 p-4 opacity-10 text-9xl">☢️</div>
        <h3 className="font-black text-lg text-red-400 tracking-widest mb-2 uppercase">System Override</h3>
        <p className="font-medium text-red-200 leading-relaxed max-w-2xl relative z-10">
          Menggabungkan karier AI/n8n, S-2, pernikahan, dan anak dengan otak ADHD adalah <span className="bg-red-900 text-white px-1">kondisi ekstrem neurologis</span>. Kurang tidur akan melumpuhkan korteks prefrontal. Ini BUKAN jadwal. Ini Protokol Penyelamatan Hidup. Isi selengkapnya. Jangan andalkan working memory yang nol.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-4 border-red-800 bg-red-50">
          <CardHeader>
            <CardTitle className="text-xl text-red-900">🎛️ 1. Triage Sensorik (KRITIS)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex items-center gap-4 bg-white p-3 rounded-lg border border-red-200">
              <label className="text-sm font-bold text-red-900 whitespace-nowrap">Jam Tidur:</label>
              <Input type="number" className="w-24 font-mono font-bold text-lg text-red-700 focus-visible:ring-red-500" />
            </div>
            <div>
              <label className="text-xs font-bold text-red-800 uppercase block mb-2">Kapasitas Sensorik:</label>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 bg-white border-red-200 text-red-900 font-bold hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-500">🟢 Aman</Button>
                <Button variant="outline" className="flex-1 bg-white border-red-200 text-red-900 font-bold hover:bg-yellow-50 hover:text-yellow-700 hover:border-yellow-500">🟡 Kewalahan</Button>
                <Button variant="outline" className="flex-1 bg-red-900 border-red-950 text-red-100 font-bold hover:bg-red-800 shadow-inner">🔴 Kritis (Earplugs!)</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-950 text-white border-zinc-800 relative shadow-xl overflow-hidden">
          <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-rose-500" />
          <CardHeader>
             <CardTitle className="text-xl text-amber-400">🔮 2. "Satu Bola Kaca"</CardTitle>
             <p className="text-xs text-zinc-400">Anak adalah Kaca 1. Dari 3 sisanya, pilih SATU SAJA.</p>
          </CardHeader>
          <CardContent className="space-y-3">
             <label className="flex items-center gap-3 p-3 bg-zinc-900 rounded-lg cursor-pointer border border-zinc-800 hover:border-cyan-500 transition-colors">
                <Checkbox className="bg-zinc-800 border-zinc-600 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500" />
                <div className="flex-1">
                  <span className="font-bold text-cyan-400 block text-xs tracking-wider uppercase mb-1">💼 Fokus: Karier</span>
                  <Input className="h-7 text-xs bg-zinc-950 border-zinc-800 font-medium" placeholder="Deploy skrip krusial..." />
                </div>
             </label>
             <label className="flex items-center gap-3 p-3 bg-zinc-900 rounded-lg cursor-pointer border border-zinc-800 hover:border-indigo-400 transition-colors">
                <Checkbox className="bg-zinc-800 border-zinc-600 data-[state=checked]:bg-indigo-500 data-[state=checked]:border-indigo-500" />
                <div className="flex-1">
                  <span className="font-bold text-indigo-400 block text-xs tracking-wider uppercase mb-1">🏛️ Fokus: Akademik</span>
                  <Input className="h-7 text-xs bg-zinc-950 border-zinc-800 font-medium" placeholder="Batas akhir jurnal..." />
                </div>
             </label>
             <label className="flex items-center gap-3 p-3 bg-zinc-900 rounded-lg cursor-pointer border border-zinc-800 hover:border-rose-400 transition-colors">
                <Checkbox className="bg-zinc-800 border-zinc-600 data-[state=checked]:bg-rose-500 data-[state=checked]:border-rose-500" />
                <div className="flex-1">
                  <span className="font-bold text-rose-400 block text-xs tracking-wider uppercase mb-1">🏠 Fokus: Pernikahan</span>
                  <Input className="h-7 text-xs bg-zinc-950 border-zinc-800 font-medium" placeholder="Istri lelah, ambil alih Full..." />
                </div>
             </label>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
         <Card className="border-t-4 border-t-amber-500">
           <CardHeader>
             <CardTitle className="text-lg">🤝 3. Protokol Tag-Team Ekstrem</CardTitle>
           </CardHeader>
           <CardContent className="space-y-4">
             <div className="flex items-center gap-2">
                <span className="text-xs font-bold w-24 leading-tight">Blok "Pintu Tertutup" Tesis/Coding:</span>
                <Input type="time" className="h-8 max-w-[100px] font-mono text-sm" /> <span className="text-zinc-300">-</span> <Input type="time" className="h-8 max-w-[100px] font-mono text-sm" />
             </div>
             <div className="flex items-center gap-2">
                <span className="text-xs font-bold w-24 leading-tight">Ganti Sif (Tutup Laptop):</span>
                <Input type="time" className="h-8 max-w-[100px] font-mono text-sm" />
             </div>
             <div className="p-3 bg-red-50 border border-red-200 rounded">
                <label className="text-xs font-bold text-red-700 block mb-1">Sandi Tap-Out (Butuh 10 mnt kamar mandi):</label>
                <Input className="h-8 border-red-300 font-bold" placeholder='"Sistem Merah!"' />
             </div>
           </CardContent>
         </Card>

         <Card className="border-2 border-orange-500">
           <CardHeader>
             <CardTitle className="text-lg text-orange-800">🗑️ 5. Zona Biarkan Terbakar (Let It Burn)</CardTitle>
             <p className="text-xs font-bold text-orange-600">Keputusan strategis, BUKAN kegagalan.</p>
           </CardHeader>
           <CardContent className="space-y-3">
              <label className="flex items-center gap-3 justify-start p-2 bg-orange-50 rounded border border-orange-200 cursor-pointer hover:bg-orange-100">
                <Checkbox className="border-orange-500 bg-white" /> <span className="text-sm font-bold text-orange-900">Rumah berantakan / mainan berserakan</span>
              </label>
              <label className="flex items-center gap-3 justify-start p-2 bg-orange-50 rounded border border-orange-200 cursor-pointer hover:bg-orange-100">
                <Checkbox className="border-orange-500 bg-white" /> <span className="text-sm font-bold text-orange-900">Pesan GoFood alih-alih masak</span>
              </label>
              <label className="flex items-center gap-3 justify-start p-2 bg-orange-50 rounded border border-orange-200 cursor-pointer hover:bg-orange-100">
                <Checkbox className="border-orange-500 bg-white" /> <span className="text-sm font-bold text-orange-900">Minta Ekstensi / Tunda Deadline Kampus</span>
              </label>
           </CardContent>
         </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
         <Card>
           <CardHeader>
             <CardTitle className="text-lg text-zinc-900">⏱️ 4. Micro-Sprints (Maks 15 Menit)</CardTitle>
             <p className="text-xs text-zinc-500">Lupakan wacana fokus 3 jam. Anak akan interupsi.</p>
           </CardHeader>
           <CardContent className="space-y-3">
              <div className="flex gap-2 items-center">
                 <span className="font-bold text-cyan-700 w-16 text-xs uppercase">💼 Karier</span>
                 <Input className="h-8 text-sm bg-cyan-50 border-cyan-200" placeholder="Cek error log server..." />
              </div>
              <div className="flex gap-2 items-center">
                 <span className="font-bold text-indigo-700 w-16 text-xs uppercase">🏛️ Kampus</span>
                 <Input className="h-8 text-sm bg-indigo-50 border-indigo-200" placeholder="Baca 1 hal manuskrip..." />
              </div>
              <div className="flex gap-2 items-center">
                 <span className="font-bold text-rose-700 w-16 text-xs uppercase">🏠 Rumah</span>
                 <Input className="h-8 text-sm bg-rose-50 border-rose-200" placeholder="Cuci botol susu..." />
              </div>
           </CardContent>
         </Card>

         <Card className="border-dashed border-2 bg-slate-50">
           <CardHeader className="py-4">
             <CardTitle className="text-base text-slate-800">💸 6. Radar Logistik (Biaya Nol Kesalahan)</CardTitle>
           </CardHeader>
           <CardContent className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-500 block mb-1">Popok/Susu/Vaksin/Dokter Hari Ini:</label>
                <Input className="h-8 bg-white" />
              </div>
              <div>
                <label className="text-xs font-bold text-red-500 block mb-1">Bom Waktu Admin Jatuh Tempo HARI INI:</label>
                <Input className="h-8 bg-white border-red-200" placeholder="Tagihan server, SPP, Cicilan..." />
              </div>
           </CardContent>
         </Card>
      </div>
    </div>
  )
}
