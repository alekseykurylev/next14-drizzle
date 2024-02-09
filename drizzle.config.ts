import type { Config } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({ path: "./.env.local" });

export default {
  out: "./src/db/migrations",
  driver: "mysql2",
  dbCredentials: {
    host: process.env.DB_HOST || "",
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME || "",
  },
} satisfies Config;
