import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config({ override: true });

// Fallback manual read
try {
  if (!process.env.GEMINI_API_KEY) {
     const envString = fs.readFileSync(path.join(process.cwd(), '.env'), 'utf-8');
     const match = envString.match(/GEMINI_API_KEY=(.*)/);
     if (match && match[1]) {
       process.env.GEMINI_API_KEY = match[1].trim();
     }
  }
} catch (e) {}

async function startServer() {
  const app = express();
  app.use(express.json());
  const PORT = 3000;

  const CSV_PATH = path.join(process.cwd(), 'database.csv');

  // Initialize CSV if not exists
  if (!fs.existsSync(CSV_PATH)) {
    fs.writeFileSync(CSV_PATH, 'email,whatsapp,createdAt\n');
  }

  // API Route to mirror user registration to local CSV
  app.post('/api/register', (req, res) => {
    try {
      const { email, whatsapp, createdAt } = req.body;
      // Basic escaping for CSV
      const safeEmail = String(email).replace(/"/g, '""');
      const safeWhatsapp = String(whatsapp).replace(/"/g, '""');
      const safeCreatedAt = String(createdAt).replace(/"/g, '""');
      
      const line = `"${safeEmail}","${safeWhatsapp}","${safeCreatedAt}"\n`;
      fs.appendFileSync(CSV_PATH, line);
      res.json({ success: true });
    } catch (err) {
      console.error('Error writing to CSV:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // API Route for Admin to save/backup CSV
  app.post('/api/admin/save-csv', (req, res) => {
    const { username, password } = req.body;
    
    // Check Admin credentials
    if (username === 'R!v4l' && password === '23072002R!v4l') {
      try {
        const backupPath = path.join(process.cwd(), `database_backup_${Date.now()}.csv`);
        if (fs.existsSync(CSV_PATH)) {
          fs.copyFileSync(CSV_PATH, backupPath);
          res.json({ 
            success: true, 
            message: `Database berhasil disimpan di server dalam bentuk CSV.\nLokasi: ${backupPath}`,
            filename: path.basename(backupPath),
          });
        } else {
          res.status(404).json({ error: 'Database CSV tidak ditemukan' });
        }
      } catch (err) {
        console.error('Error backing up CSV:', err);
        res.status(500).json({ error: 'Failed to save database on server' });
      }
    } else {
      res.status(401).json({ error: 'Kredensial Admin Tidak Valid' });
    }
  });

  // API Route for Admin to download/view CSV content
  app.post('/api/admin/get-csv', (req, res) => {
    const { username, password } = req.body;
    if (username === 'R!v4l' && password === '23072002R!v4l') {
      try {
        if (fs.existsSync(CSV_PATH)) {
          const content = fs.readFileSync(CSV_PATH, 'utf-8');
          res.json({ success: true, data: content });
        } else {
          res.json({ success: true, data: 'email,whatsapp,createdAt\n' });
        }
      } catch (err) {
        res.status(500).json({ error: 'Failed to read database' });
      }
    } else {
      res.status(401).json({ error: 'Kredensial Admin Tidak Valid' });
    }
  });

  // API Route for AI Planner Analysis
  app.post('/api/analyze-planner', async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      console.log("RECEIVED API KEY IN EXPRESS:", apiKey);
      
      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        return res.status(503).json({ error: 'Kunci API Gemini belum diatur. Silakan tambahkan GEMINI_API_KEY di menu Settings > Secrets.' });
      }

      const ai = new GoogleGenAI({ apiKey });

      const { phaseName, category } = req.body;

      const prompt = `Anda adalah ahli saraf (Neurologist) dan spesialis psikiatri yang berfokus pada gangguan eksekutif dan ADHD. 
Saya memiliki pengguna yang menggunakan planner/jadwal untuk fase kehidupan mereka: "${phaseName}" (Kategori: ${category}).

Tolong berikan Analisis AI ringkas (sekitar 3-4 paragraf) mengenai strategi planner ini. 
Gunakan perspektif medis berdasarkan jurnal neurologi dan kesehatan mental terkait:
1. Regulasi dopamin dan fungsi eksekutif pada konteks/fase kehidupan tersebut.
2. Mengapa struktur rutinitas sangat fundamental untuk otak dengan ADHD.
3. Rekomendasi/intervensi klinis ringan yang bisa diaplikasikan dalam kebiasaan sehari-hari.

Sertakan juga rujukan umum ke konsensus sains/jurnal (misalnya mengutip teori Barkley atau jurnal neuropsikiatri). 
Gunakan bahasa Indonesia yang profesional namun mudah dipahami.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      res.json({ success: true, text: response.text });
    } catch (err: any) {
      console.error('AI Analysis Error:', err);
      // Determine if error is an API key error
      if (err.message?.includes('API key not valid') || err.message?.includes('API_KEY_INVALID')) {
        return res.status(500).json({ error: 'Kunci API Gemini tidak valid. Silakan periksa pengaturan rahasia (secrets) Anda.' });
      }
      res.status(500).json({ error: err.message || 'Gagal menghasilkan analisis AI.' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // Use proper Express 4 catch-all
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
