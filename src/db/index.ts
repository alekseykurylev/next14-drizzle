import * as schema from "./migrations/schema";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = mysql.createPool({
  host: process.env.DB_HOST || "",
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME || "",
});

export const db = drizzle(connection, { schema, mode: "default" });
