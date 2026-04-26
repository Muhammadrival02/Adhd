// Married Planners
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
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4 border-b pb-2">
        <span className="font-bold w-16 text-sm">SAYA:</span>
        <div className="flex gap-2 w-full">
          <div className="flex-1 flex flex-col items-center gap-1 p-2 border rounded hover:bg-zinc-50 cursor-pointer"><span className="text-xl">🪫</span></div>
          <div className="flex-1 flex flex-col items-center gap-1 p-2 border rounded hover:bg-zinc-50 cursor-pointer"><span className="text-xl">🔋</span></div>
          <div className="flex-1 flex flex-col items-center gap-1 p-2 border rounded hover:bg-zinc-50 cursor-pointer"><span className="text-xl">⚡</span></div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-bold w-16 text-sm">PASANGAN:</span>
        <div className="flex gap-2 w-full">
          <div className="flex-1 flex flex-col items-center gap-1 p-2 border rounded hover:bg-blue-50 cursor-pointer"><span className="text-xl">🪫</span></div>
          <div className="flex-1 flex flex-col items-center gap-1 p-2 border rounded hover:bg-blue-50 cursor-pointer"><span className="text-xl">🔋</span></div>
          <div className="flex-1 flex flex-col items-center gap-1 p-2 border rounded hover:bg-blue-50 cursor-pointer"><span className="text-xl">⚡</span></div>
        </div>
      </div>
    </div>
  )
}

export function MarriedPlanner() {
  return (
    <div className="space-y-6">
      <PlannerHeader title="🏡 KONSOL KENDALI BERSAMA" subtitle="Fase Berumah Tangga" />
      
      <Card className="border-t-4 border-t-blue-500">
        <CardHeader>
          <CardTitle className="text-xl">🔋 1. Sinkronisasi Baterai Pagi</CardTitle>
          <p className="text-xs text-zinc-500">Saling tahu energi agar ekspektasi bisa disesuaikan.</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <DualBattery />
          <div className="pt-2">
            <label className="text-xs font-bold text-zinc-500 mb-1 block">Kesepakatan Hari Ini:</label>
            <Input placeholder='Contoh: "Baterai rendah, pesan makan saja, abaikan piring kotor..."' className="border-blue-200" />
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-zinc-900 text-zinc-50">
          <CardHeader>
            <CardTitle className="text-lg">⚖️ 2. Triage Beban Domestik</CardTitle>
            <p className="text-xs text-zinc-400">Pilih maks 2 tugas eksekutif Murni Anda.</p>
          </CardHeader>
          <CardContent className="space-y-3">
             <div className="flex items-center gap-3">
               <Checkbox className="bg-zinc-800 border-zinc-600 data-[state=checked]:bg-white data-[state=checked]:text-zinc-900" />
               <Input placeholder="Membayar listrik..." className="bg-zinc-800 border-zinc-700 placeholder:text-zinc-500" />
             </div>
             <div className="flex items-center gap-3">
               <Checkbox className="bg-zinc-800 border-zinc-600 data-[state=checked]:bg-white data-[state=checked]:text-zinc-900" />
               <Input placeholder="Cuci baju..." className="bg-zinc-800 border-zinc-700 placeholder:text-zinc-500" />
             </div>
             <div className="pt-4 border-t border-zinc-800">
               <label className="flex items-center gap-2 cursor-pointer">
                 <Checkbox className="bg-zinc-800 border-zinc-600" />
                 <span className="text-sm font-bold text-emerald-400">Sudah dikomunikasikan ke pasangan</span>
               </label>
             </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-pink-200 bg-pink-50/30">
          <CardHeader>
            <CardTitle className="text-lg text-pink-900">🛡️ 3. Mitigasi RSD</CardTitle>
            <p className="text-xs text-pink-700">Rejection Sensitive Dysphoria Guard.</p>
          </CardHeader>
          <CardContent className="space-y-3">
             <div>
               <label className="text-xs font-bold text-pink-800 block mb-1">Ada interaksi yg bikin merasa diserang?</label>
               <Input className="border-pink-200 bg-white" placeholder="Tuliskan pemicunya..." />
             </div>
             <div>
               <label className="text-xs font-bold text-pink-800 block mb-1">Tindakan Klarifikasi Nanti:</label>
               <Textarea className="border-pink-200 bg-white h-16 text-sm" placeholder='Jangan reaktif. Tanyakan: "Waktu menghela napas tadi..."' />
             </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-rose-600">💖 4. Radar Perawatan Relasi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
             <label className="flex items-start gap-3 text-sm p-2 hover:bg-zinc-50 rounded cursor-pointer border border-transparent hover:border-zinc-200">
                <Checkbox className="mt-0.5" /> Dengar cerita 15 mnt tanpa HP
             </label>
             <label className="flex items-start gap-3 text-sm p-2 hover:bg-zinc-50 rounded cursor-pointer border border-transparent hover:border-zinc-200">
                <Checkbox className="mt-0.5" /> Sentuhan fisik / pelukan
             </label>
             <label className="flex items-start gap-3 text-sm p-2 hover:bg-zinc-50 rounded cursor-pointer border border-transparent hover:border-zinc-200">
                <Checkbox className="mt-0.5" /> Pesan apresiasi siang hari
             </label>
          </CardContent>
        </Card>

        <div className="space-y-6">
           <Card className="border-orange-200 bg-orange-50/20">
             <CardHeader className="py-4">
               <CardTitle className="text-base text-orange-900">💸 5. Radar Finansial</CardTitle>
               <p className="text-xs text-orange-700">Mencegah pajak ADHD merusak keluarga.</p>
             </CardHeader>
             <CardContent>
               <Input className="border-orange-200 bg-white text-sm" placeholder="Tindakan bayar tagihan hari ini..." />
             </CardContent>
           </Card>

           <Card className="border-indigo-200 bg-indigo-50/20">
             <CardHeader className="py-4">
               <CardTitle className="text-base text-indigo-900">🛑 6. Ruang Dekompresi</CardTitle>
             </CardHeader>
             <CardContent>
               <Input className="border-indigo-200 bg-white text-sm" placeholder="Ritual pulang (mandi/stretching)..." />
             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  )
}

export function FreelanceMarriedPlanner() {
  return (
    <div className="space-y-6">
      <PlannerHeader title="⚖️ KONSOL SINKRONISASI" subtitle="Freelancer Berumah Tangga" />
      <div className="bg-yellow-50 text-yellow-900 p-4 rounded-xl border border-yellow-200 text-sm">
        <strong>Peringatan Klinis:</strong> Dinding antara mode "bisnis" dan "rumah" harus dibangun secara brutal di sini.
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
         <Card className="border-l-4 border-l-blue-500">
           <CardHeader>
             <CardTitle className="text-lg">🚦 1. Daily Briefing</CardTitle>
           </CardHeader>
           <CardContent className="space-y-4">
             <DualBattery />
             <div className="pt-2 border-t flex items-center gap-4">
               <label className="text-sm font-bold shrink-0">Jam Kerja Absolut:</label>
               <Input type="time" className="w-full" /> <span className="font-bold text-zinc-300">-</span> <Input type="time" className="w-full" />
             </div>
             <div>
               <label className="text-xs font-bold text-zinc-500">Aturan Interupsi:</label>
               <Input className="mt-1" placeholder='"Jika pakai headphone, WA saja..."' />
             </div>
           </CardContent>
         </Card>

         <div className="space-y-6">
           <Card className="bg-slate-900 text-slate-50">
             <CardHeader className="pb-3">
               <CardTitle className="text-lg text-cyan-400">🎯 2. Triage Profesional</CardTitle>
             </CardHeader>
             <CardContent className="space-y-2">
                 {[1,2].map(i => (
                    <div key={i} className="pl-3 border-l-2 border-cyan-500/50">
                      <Input placeholder={`Pro ${i}`} className="h-8 bg-slate-800 border-slate-700 text-white font-bold text-sm mb-1" />
                      <div className="flex items-center gap-2 pl-4">
                        <Checkbox className="h-4 w-4 border-cyan-500 data-[state=checked]:bg-cyan-500" />
                        <Input placeholder="Langkah mikro" className="h-7 max-w-sm bg-slate-800/50 border-slate-700 text-xs" />
                      </div>
                    </div>
                 ))}
             </CardContent>
           </Card>

           <Card className="border-t-4 border-t-amber-500">
             <CardHeader className="pb-3">
               <CardTitle className="text-lg text-amber-800">🧹 3. Tugas Domestik</CardTitle>
             </CardHeader>
             <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                   <Checkbox /> <Input className="h-8 text-sm placeholder:text-zinc-400" placeholder="Beli token sore ini..." />
                </div>
                <div className="flex items-center gap-2">
                   <Checkbox /> <Input className="h-8 text-sm placeholder:text-zinc-400" placeholder="Cuci piring..." />
                </div>
             </CardContent>
           </Card>
         </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
         <Card className="border-dashed border-2">
           <CardHeader>
             <CardTitle className="text-lg text-zinc-600">🚧 4. Parkir Distraksi & Komunikasi</CardTitle>
             <p className="text-xs text-zinc-400">Jangan teriak ke pasangan saat kerja. Tulis sini.</p>
           </CardHeader>
           <CardContent className="space-y-4">
             <div>
               <label className="text-xs font-bold text-zinc-500">Ide Bisnis Liar:</label>
               <Input className="mt-1 bg-zinc-50 border-zinc-200" />
             </div>
             <div>
               <label className="text-xs font-bold text-zinc-500">Pesan Tertunda u/ Pasangan:</label>
               <Input className="mt-1 bg-zinc-50 border-zinc-200" placeholder="Ingatkan soal warung nasi..." />
             </div>
           </CardContent>
         </Card>

         <Card className="border-l-4 border-l-rose-500">
           <CardHeader>
             <CardTitle className="text-lg">🛑 5. Ritual Shutdown</CardTitle>
           </CardHeader>
           <CardContent className="space-y-4">
             <div className="flex items-center gap-4">
               <label className="text-sm font-bold w-32">Jam Matikan Mesin:</label>
               <Input type="time" className="font-mono w-32" />
             </div>
             <div>
               <label className="text-xs font-bold text-zinc-500">Aktivitas Dekompresi (15m):</label>
               <Input className="mt-1" placeholder="Duduk di teras sebelum jadi suami..." />
             </div>
             <div className="border-t pt-2 mt-4">
               <label className="flex items-center gap-3 text-sm p-3 bg-rose-50 text-rose-900 border border-rose-100 rounded-lg cursor-pointer">
                  <Checkbox className="border-rose-500" /> <span className="font-bold">Kehadiran Penuh (Tutup semua layar, dengar 20 menit).</span>
               </label>
             </div>
           </CardContent>
         </Card>
      </div>
    </div>
  )
}

export function WorkingParentPlanner() {
  return (
    <div className="space-y-6">
      <PlannerHeader title="🍼 PROTOKOL KENDALI KELUARGA" subtitle="Fase Orang Tua Bekerja" />
      
      <Card className="bg-red-900 text-red-50 border-red-950">
        <CardHeader>
          <CardTitle className="text-xl">🎛️ 1. Audit Beban Sensorik & Tidur (KRITIS)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4 mb-4">
            <label className="text-sm font-bold">Jam Tidur Semalam:</label>
            <Input type="number" className="w-24 bg-red-950 border-red-800 text-white font-mono" placeholder="Jam" />
            <span className="text-xs font-medium italic text-red-300">&lt; 5 jam = Batalkan tugas non-survival.</span>
          </div>
          <label className="text-xs font-bold text-red-200 uppercase tracking-widest block">Kapasitas Sensorik Hari Ini:</label>
          <div className="flex gap-2">
            <Button variant="secondary" className="flex-1 bg-emerald-900 text-emerald-100 hover:bg-emerald-800 border-none">🟢 Aman</Button>
            <Button variant="secondary" className="flex-1 bg-yellow-900 text-yellow-100 hover:bg-yellow-800 border-none">🟡 Kewalahan</Button>
            <Button variant="secondary" className="flex-1 bg-red-950 text-red-100 hover:bg-red-900 border border-red-500 relative overflow-hidden">
               <span className="relative z-10 font-bold">🔴 Kritis (Earplugs!)</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
         <Card className="border-2 border-orange-300 bg-orange-50/50">
           <CardHeader>
             <CardTitle className="text-lg text-orange-900">🛡️ 2. Triage Logistik Bayi/Anak</CardTitle>
             <p className="text-xs text-orange-700">Cegah bencana kelupaan operasional.</p>
           </CardHeader>
           <CardContent className="space-y-3">
             <label className="flex items-center gap-3 p-2 bg-white rounded border border-orange-100 cursor-pointer">
               <Checkbox className="border-orange-500" />
               <span className="text-sm font-medium">Popok/Susu/Makanan (Cek Stok)</span>
             </label>
             <div className="p-2 bg-white rounded border border-orange-100">
               <label className="text-xs font-bold text-zinc-500">Jadwal Dokter/Sekolah:</label>
               <Input className="h-8 mt-1 border-orange-200 text-sm" />
             </div>
             <label className="flex items-center gap-3 p-2 bg-white rounded border border-orange-100 cursor-pointer">
               <Checkbox className="border-orange-500" />
               <span className="text-sm font-medium">Baju ganti & tas tempur siap</span>
             </label>
           </CardContent>
         </Card>

         <Card className="border-t-4 border-t-cyan-500">
           <CardHeader>
             <CardTitle className="text-lg">🤝 3. Protokol Tag-Team</CardTitle>
             <p className="text-xs text-zinc-500">Tidak ada ruang untuk berasumsi.</p>
           </CardHeader>
           <CardContent className="space-y-4">
             <div className="flex items-center gap-2">
                <span className="text-sm font-bold w-24">Sif Utama Saya:</span>
                <Input type="time" className="h-8 w-full font-mono text-sm" /> <span className="text-zinc-300">-</span> <Input type="time" className="h-8 w-full font-mono text-sm" />
             </div>
             <div>
                <label className="text-xs font-bold text-red-500 block mb-1">Kata Sandi Darurat (Tap-Out):</label>
                <Input className="h-8 bg-red-50 border-red-200 text-sm font-bold text-red-700 placeholder:text-red-300" placeholder='"Ganti gigi!"' />
             </div>
             <div>
                <label className="text-xs font-bold text-cyan-700 block mb-1">Serah Terima Info Anak:</label>
                <Input className="h-8 border-cyan-200 text-sm" placeholder='"Dia sudah tidur siang 2 jam..."' />
             </div>
           </CardContent>
         </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
         <Card className="bg-zinc-900 text-zinc-50">
           <CardHeader>
             <CardTitle className="text-lg text-emerald-400">💼 4. Integrasi Karier Minimalis</CardTitle>
           </CardHeader>
           <CardContent className="space-y-4">
             <div>
               <label className="text-xs font-bold text-zinc-300 uppercase block mb-1">1 Tugas Absolut Hari Ini:</label>
               <Input className="bg-zinc-800 border-zinc-700 text-white" />
             </div>
             <div>
               <label className="text-xs font-bold text-zinc-500 uppercase block mb-1">Delegasi / Lempar (Penundaan):</label>
               <Input className="bg-zinc-800 border-zinc-700 text-zinc-500" placeholder="Yg bisa ditunda tanpa dipecat..." />
             </div>
           </CardContent>
         </Card>

         <div className="space-y-6">
            <Card className="border-indigo-200 bg-indigo-50/30">
               <CardHeader className="py-3">
                 <CardTitle className="text-base text-indigo-900">🧘 5. Suaka Mental (10 Menit)</CardTitle>
               </CardHeader>
               <CardContent>
                  <Input className="bg-white border-indigo-200 text-sm" placeholder="Duduk di kamar mandi sendirian dalam diam..." />
               </CardContent>
            </Card>

            <Card className="border-pink-200 bg-pink-50/30">
               <CardHeader className="py-3">
                 <CardTitle className="text-base text-pink-900">❤️ 6. Jurnal Anti-Rasa Bersalah</CardTitle>
               </CardHeader>
               <CardContent>
                  <label className="text-xs font-bold text-pink-700 block mb-1">Bukti anak saya aman/dicintai hari ini:</label>
                  <Input className="bg-white border-pink-200 text-sm" />
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  )
}
