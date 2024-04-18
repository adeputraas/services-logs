const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createPool({
  host: dbConfig.BK_HOST,
  user: dbConfig.BK_USER,
  port: dbConfig.BK_PORT,
  password: dbConfig.BK_PASSWORD,
  database: dbConfig.BK_DB
});

connection.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.');
    }
  }
  if (connection) {
    console.log('database connected');
    connection.release();
  }
  return;
});


module.exports = connection;
