// Veri tabanı bilgileri, bağlantısı için 
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createConnection({
  host: process.env.db_host,
  user: process.env.db_user,
  password: process.env.db_host,
  database: process.env.db_name,
  waitForConnections: true ,
  connectionLimit: 10,
  queueLimit: 0 
});

export default db;