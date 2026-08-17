import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_DIR = path.join(__dirname, 'data')
const SUBMISSIONS_FILE = path.join(DATA_DIR, 'submissions.json')

const app = express()
app.use(cors())
app.use(express.json())

async function ensureDataFile() {
  await fs.mkdir(DATA_DIR, { recursive: true })
  try {
    await fs.access(SUBMISSIONS_FILE)
  } catch {
    await fs.writeFile(SUBMISSIONS_FILE, '[]')
  }
}

async function saveSubmission(entry) {
  await ensureDataFile()
  const raw = await fs.readFile(SUBMISSIONS_FILE, 'utf-8')
  const submissions = JSON.parse(raw)
  submissions.push(entry)
  await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2))
}

// Returns null (rather than throwing) when SMTP isn't configured yet, so the
// server still runs and still saves submissions before any credentials exist.
function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })
}

app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body || {}

  if (!firstName || !lastName || !email || !message) {
    res.status(400).json({ error: 'חסרים פרטים בטופס' })
    return
  }

  const entry = {
    firstName,
    lastName,
    email,
    phone: phone || '',
    message,
    receivedAt: new Date().toISOString(),
  }

  try {
    await saveSubmission(entry)
  } catch (err) {
    console.error('Failed to save submission:', err)
    res.status(500).json({ error: 'שגיאה בשמירת הפנייה' })
    return
  }

  const transporter = getTransporter()
  const receiver = process.env.CONTACT_RECEIVER_EMAIL

  if (transporter && receiver) {
    try {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: receiver,
        replyTo: email,
        subject: `פנייה חדשה מהאתר – ${firstName} ${lastName}`,
        text: `שם: ${firstName} ${lastName}\nאימייל: ${email}\nטלפון: ${phone || '-'}\n\nהודעה:\n${message}`,
      })
    } catch (err) {
      // The submission is already saved to disk, so a failed email isn't a
      // failed request — it just means it'll be caught by checking the file.
      console.error('Failed to send notification email:', err)
    }
  } else {
    console.warn(
      'Email not sent: SMTP_HOST / SMTP_USER / SMTP_PASS / CONTACT_RECEIVER_EMAIL ' +
      'are not all set (see .env.example). The submission was still saved to server/data/submissions.json.'
    )
  }

  res.json({ ok: true })
})

app.get('/api/health', (req, res) => {
  res.json({ ok: true })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Contact form API listening on http://localhost:${PORT}`)
})
