import { Pool } from 'pg'

const connectionString = process.env.DATABASE_URL

declare global {
  // eslint-disable-next-line no-var
  var _pgPool: Pool | undefined
}

export const pool =
  global._pgPool ??
  new Pool({
    connectionString,
    ssl: connectionString?.includes('localhost')
      ? false
      : { rejectUnauthorized: false },
  })

if (process.env.NODE_ENV !== 'production') {
  global._pgPool = pool
}

export function query<T extends Record<string, unknown> = Record<string, unknown>>(
  text: string,
  params?: unknown[],
) {
  return pool.query<T>(text, params)
}
