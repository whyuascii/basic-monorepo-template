import { config } from 'dotenv';
import type { Config } from 'drizzle-kit';

config(); // Load environment variables from .env

const drizzleConfig: Config = {
  schema: '../../packages/db/src/schemas', // Path to your database schema in the `packages/db` package
  out: './migrations', // Where to store migration files
  driver: 'mysql2', // Database driver (e.g., MySQL)
  dbCredentials: {
    connectionString: process.env.DB_URL || '', // Database connection string
  },
};

export default drizzleConfig;
