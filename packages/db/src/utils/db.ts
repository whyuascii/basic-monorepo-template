import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { dbConfig } from './config';

const connection = mysql.createPool({
  host: dbConfig.host,
  port: dbConfig.port,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
});

export const db = drizzle(connection);
