import mysql from 'mysql2';
import path from 'path';
import dotenv from 'dotenv';

const relationalConn = mysql.createConnection({
  host: process.env.RELATIONAL_DB_HOST,
  user: process.env.RELATIONAL_DB_USER,
  password: process.env.RELATIONAL_DB_PASSWORD,
  database: process.env.RELATIONAL_DB_DATABASE,
});

export { relationalConn };
