import * as dotenv from "dotenv"
import type { Config } from "drizzle-kit"

dotenv.config({
  path: ".env.local",
})

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.NEXT_PUBLIC_SUPABASE_DB!,
  },
} satisfies Config
