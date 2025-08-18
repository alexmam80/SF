import express from 'express'
import cors from 'cors'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import Database from 'better-sqlite3'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 4000
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data')
const UPLOAD_DIR = process.env.UPLOAD_DIR || path.join(__dirname, 'uploads')

app.use(cors({
  origin: (process.env.CORS_ORIGIN || '*').split(','),
}))
app.use(express.json())

// asigurăm folderele
fs.mkdirSync(DATA_DIR, { recursive: true })
fs.mkdirSync(UPLOAD_DIR, { recursive: true })

// init DB (fișierul se creează automat dacă nu există)
const db = new Database(path.join(DATA_DIR, 'appointments.sqlite'))
db.prepare(`
  CREATE TABLE IF NOT EXISTS appointments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    phone TEXT,
    message TEXT,
    date TEXT,
    time TEXT,
    file_path TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  )
`).run()

// configurăm uploadul PNG/JPG
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase()
    const safe = `${Date.now()}-${Math.round(Math.random()*1e9)}${ext}`
    cb(null, safe)
  }
})
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const ok = ['.png', '.jpg', '.jpeg']
    const ext = path.extname(file.originalname).toLowerCase()
    if (ok.includes(ext)) cb(null, true)
    else cb(new Error('Accept doar PNG/JPG'))
  }
})

app.post('/api/appointments', upload.single('attachment'), (req, res) => {
  try {
    const { firstName, lastName, email, phone, message, date, time } = req.body
    const filePath = req.file ? req.file.filename : null

    const stmt = db.prepare(`INSERT INTO appointments
      (first_name, last_name, email, phone, message, date, time, file_path)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`)
    const info = stmt.run(firstName, lastName, email, phone, message, date, time, filePath)

    return res.json({ ok: true, id: info.lastInsertRowid })
  } catch (e) {
    console.error(e)
    return res.status(500).json({ ok: false, error: 'DB insert failed' })
  }
})

app.get('/api/appointments', (req, res) => {
  const rows = db.prepare('SELECT * FROM appointments ORDER BY id DESC').all()
  res.json(rows)
})

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.listen(PORT, () => {
  console.log(`Server ready on http://localhost:${PORT}`)
})