// Child and Teen Planners
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, Checkbox, Input, Textarea, Button } from '../ui';
import { format } from 'date-fns';
import { Smile, Frown, Meh, Angry, Star, CheckCircle2 } from 'lucide-react';

function PlannerHeader({ title, date = new Date() }: { title: string, date?: Date }) {
  return (
    <div className="mb-8 border-b pb-4">
      <h2 className="text-3xl font-black uppercase tracking-tight text-zinc-900 flex items-center gap-3">
        {title}
      </h2>
      <p className="text-zinc-500 font-medium mt-1">Hari/Tanggal: {format(date, 'EEEE, dd MMMM yyyy')}</p>
    </div>
  );
}

export function ChildPlanner() {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  
  return (
    <div className="space-y-6">
      <PlannerHeader title="🚀 MISI HARIAN SUPER" />
      
      {/* 1. Termometer Perasaanku Pagi Ini */}
      <Card className="border-l-4 border-l-red-400">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <span className="text-2xl">🌡️</span> 1. Termometer Perasaanku Pagi Ini
          </CardTitle>
          <p className="text-sm text-zinc-500 italic">Melatih regulasi amigdala. Lingkari perasaanmu:</p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 justify-between items-center bg-zinc-50 p-4 rounded-xl border border-zinc-100">
             {[
               {id: 'marah', icon: '😡', label: 'Marah/Kesal', color: 'bg-red-100 hover:bg-red-200 text-red-900 border-red-200'},
               {id: 'sedih', icon: '😢', label: 'Sedih/Capek', color: 'bg-blue-100 hover:bg-blue-200 text-blue-900 border-blue-200'},
               {id: 'biasa', icon: '😐', label: 'Biasa Saja', color: 'bg-gray-100 hover:bg-gray-200 text-gray-900 border-gray-200'},
               {id: 'senang', icon: '😊', label: 'Senang', color: 'bg-green-100 hover:bg-green-200 text-green-900 border-green-200'},
               {id: 'semangat', icon: '🤩', label: 'Super Semangat!', color: 'bg-yellow-100 hover:bg-yellow-200 text-yellow-900 border-yellow-200'}
             ].map(emotion => (
               <button
                 key={emotion.id}
                 onClick={() => setSelectedEmotion(emotion.id)}
                 className={`flex flex-col items-center p-3 rounded-2xl border-2 transition-all ${
                   selectedEmotion === emotion.id ? emotion.color + ' ring-4 ring-offset-2 ring-' + emotion.color.split('-')[1] + '-400 scale-110' : 'bg-white border-zinc-200 hover:bg-zinc-50'
                 }`}
               >
                 <span className="text-4xl mb-2">{emotion.icon}</span>
                 <span className="text-xs font-bold text-center">{emotion.label}</span>
               </button>
             ))}
          </div>
        </CardContent>
      </Card>

      {/* 2. Misi Pagi (Zona Rutinitas Otomatis) */}
      <Card className="border-l-4 border-l-yellow-400">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <span className="text-2xl">☀️</span> 2. Misi Pagi (Zona Rutinitas Otomatis)
          </CardTitle>
          <p className="text-sm text-zinc-500 italic">Beri tanda centang jika selesai untuk dapat bintang!</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {icon: '🛏️', task: 'Merapikan tempat tidur tempur'},
            {icon: '🦷', task: 'Menyikat gigi & mandi'},
            {icon: '👕', task: 'Memakai seragam zirah'},
            {icon: '🎒', task: 'Mengecek tas ransel'}
          ].map((item, idx) => (
             <label key={idx} className="flex items-center gap-4 bg-zinc-50 p-4 rounded-xl border border-zinc-200 cursor-pointer hover:bg-zinc-100 transition-colors">
               <Checkbox className="h-8 w-8 rounded-lg" />
               <span className="text-4xl">{item.icon}</span>
               <span className="flex-1 text-lg font-bold text-zinc-800">{item.task}</span>
               <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-bold text-sm">
                 <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" /> +1
               </div>
             </label>
          ))}
        </CardContent>
      </Card>

      {/* 3. Zona SEKARANG vs NANTI */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-2 border-red-500 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-red-500" />
          <CardHeader>
            <CardTitle className="text-red-700 flex items-center gap-2">🔴 SEKARANG</CardTitle>
            <p className="text-xs text-zinc-500 font-medium">MAKS 1-2 TUGAS. LAKUKAN INI DULU.</p>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <Checkbox className="mt-1 h-6 w-6 border-red-500 text-red-600 focus-visible:ring-red-500" />
              <Input placeholder="Mengerjakan PR 15 menit..." className="text-lg font-bold border-red-200 bg-red-50" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-500 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-green-500" />
          <CardHeader>
            <CardTitle className="text-green-700 flex items-center gap-2">🟢 NANTI</CardTitle>
            <p className="text-xs text-zinc-500 font-medium">HADIAH SETELAH "SEKARANG" SELESAI.</p>
          </CardHeader>
          <CardContent>
             <Input placeholder="Bermain sepeda / Nonton 1 episode..." className="text-lg font-bold border-green-200 bg-green-50" />
          </CardContent>
        </Card>
      </div>

      {/* 4. Bank Bintang */}
      <Card className="border-l-4 border-l-blue-400 bg-blue-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-blue-900">
            <span className="text-2xl">💰</span> 4. Bank Bintang
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            {[1,2,3,4,5].map(i => <Star key={i} className="h-10 w-10 text-yellow-400 fill-yellow-400 opacity-30 hover:opacity-100 transition-opacity cursor-pointer stroke-yellow-500" />)}
          </div>
          <div>
            <label className="text-sm font-bold text-blue-800 mb-2 block">Tukar bintang dengan:</label>
            <Input placeholder="Ekstra 15 menit main game..." className="font-bold text-blue-900 border-blue-200" />
          </div>
        </CardContent>
      </Card>

      {/* 5. Tanda Tangan Kapten */}
      <Card className="border-2 border-indigo-200 border-dashed">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-indigo-900">
            <span className="text-2xl">✍️</span> 5. Otorisasi Kapten
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="font-bold text-indigo-800">Pujian hari ini:</label>
            <Input placeholder='"Kamu hebat banget karena..."' className="mt-1 shadow-sm" />
          </div>
          <div className="flex justify-between items-end pt-4">
            <div className="w-48 border-b-2 border-zinc-400 h-10"></div>
            <div className="text-sm font-bold text-zinc-500 uppercase">Cap Jempol / Tanda Tangan</div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}

export function TeenPlanner() {
  return (
    <div className="space-y-6">
      <PlannerHeader title="🛡️ PROTOKOL HARIAN: FOKUS & ENERGI" />
      
      {/* 1. Tangki Pikiran */}
      <Card className="border-t-4 border-t-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            🧠 1. Tangki Pikiran (Brain Dump)
          </CardTitle>
          <p className="text-xs text-zinc-500">Tumpahkan semuanya ke sini agar otakmu bisa bernapas.</p>
        </CardHeader>
        <CardContent>
          <Textarea placeholder="- Tugas sejarah numpuk...&#10;- Bales chat temen...&#10;- Pengen beli skin valo..." className="min-h-[120px] font-mono text-sm bg-purple-50/30" />
        </CardContent>
      </Card>

      {/* 2. Dekonstruksi Quest Utama */}
      <Card className="bg-zinc-900 text-zinc-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-emerald-400">
            🎯 2. Dekonstruksi Quest Utama (Maks 3)
          </CardTitle>
          <p className="text-xs text-zinc-400">Pecah menjadi langkah pertama yang sangat konyol dan mudah.</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {[1,2,3].map(i => (
            <div key={i} className="space-y-2 p-3 bg-zinc-800 rounded-lg border border-zinc-700">
               <div className="flex gap-2">
                 <span className="font-bold text-emerald-500">Q{i}:</span>
                 <Input className="h-8 bg-zinc-900 border-zinc-700 text-zinc-100" placeholder={`Quest utama ${i}...`} />
               </div>
               <div className="flex items-center gap-3 pl-6">
                 <div className="w-4 h-4 border-l-2 border-b-2 border-zinc-600 rounded-bl" />
                 <Checkbox className="border-emerald-500 data-[state=checked]:bg-emerald-500" />
                 <Input className="h-8 text-sm bg-zinc-900/50 border-zinc-700 text-zinc-300 placeholder:text-zinc-600" placeholder="Langkah 1 (Hanya butuh 2 menit)..." />
               </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* 3. Menu Dopamin */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            🎮 3. Menu Dopamin Terjadwal
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-zinc-50 rounded-lg">
             <span className="text-2xl">🔋</span>
             <div className="flex-1 text-sm"><span className="font-bold">Isi Ulang Cepat (5-10m):</span> Stretching, 2 lagu, camilan.</div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-zinc-50 rounded-lg">
             <span className="text-2xl">🔋🔋</span>
             <div className="flex-1 text-sm"><span className="font-bold">Sedang (20-30m):</span> Nonton Anime, main game ringan (alarm menyala).</div>
          </div>
          <div className="flex items-center gap-3 p-3 border border-zinc-200 shadow-inner rounded-lg">
             <span className="text-2xl drop-shadow">🔋🔋🔋</span>
             <Input className="flex-1 font-bold text-indigo-700 bg-transparent border-none shadow-none focus-visible:ring-0" placeholder="Hadiah Besar Malam Hari..." />
          </div>
        </CardContent>
      </Card>

      {/* 4 & 5 Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle className="text-orange-700 text-lg flex items-center gap-2">🛑 4. Rem Darurat</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm font-medium mb-3">JIKA bosan & ingin menyerah, MAKA:</p>
            {['Minum air es', 'Berdiri 2 menit', 'Coret kertas kosong'].map((t,i) => (
              <label key={i} className="flex items-center gap-3 text-sm p-2 hover:bg-zinc-50 rounded cursor-pointer border border-transparent hover:border-zinc-200">
                <Checkbox /> {t}
              </label>
            ))}
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="text-blue-700 text-lg flex items-center gap-2">💤 5. Radar Energi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-xs font-bold text-zinc-500 mb-1 block">Tidur jam berapa semalam?</label>
              <Input type="time" className="w-full" />
            </div>
            <div>
              <label className="text-xs font-bold text-zinc-500 mb-2 block">Level Baterai:</label>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 py-6"><span className="text-xl">🪫</span></Button>
                <Button variant="outline" className="flex-1 py-6"><span className="text-xl">🔋</span></Button>
                <Button variant="outline" className="flex-1 py-6"><span className="text-xl">⚡</span></Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
