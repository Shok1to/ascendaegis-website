import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { Pool } from 'pg'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const envLocalPath = path.join(__dirname, '..', '.env.local')
if (existsSync(envLocalPath)) {
  for (const line of readFileSync(envLocalPath, 'utf8').split('\n')) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/)
    if (!match) continue
    const [, key, rawValue = ''] = match
    if (process.env[key] === undefined) {
      process.env[key] = rawValue.replace(/^["']|["']$/g, '')
    }
  }
}

const connectionString = process.env.DATABASE_URL
if (!connectionString) {
  console.error('DATABASE_URL is not set (checked shell env and .env.local).')
  process.exit(1)
}
const schema = readFileSync(
  path.join(__dirname, '..', 'db', 'schema.sql'),
  'utf8',
)

const pool = new Pool({
  connectionString,
  ssl: connectionString.includes('localhost')
    ? false
    : { rejectUnauthorized: false },
})

try {
  await pool.query(schema)
  console.log('Migration complete.')
} finally {
  await pool.end()
}
