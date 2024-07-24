import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts", // Added missing comma
  out: "./db/drizzle.ts", // Added missing comma
  dbCredentials: {
    url: process.env.DATABASE_URL!, // Added space for readability
  },
  dialect: "postgresql", // Corrected typo from 'postgressql' to 'postgresql'
} satisfies Config;
