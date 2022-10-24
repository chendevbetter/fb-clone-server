const { Pool } = require('pg')
import * as dotenv from 'dotenv'
dotenv.config()

const relationDbConnection = new Pool({
  user: process.env.POSTGRES_USER,
  host: 'postgres',
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
})

export {relationDbConnection}