require('dotenv').config();
module.exports = {
  HOST: process.env.MYSQL_HOST || "localhost",
  PORT: process.env.MYSQL_PORT || "3306",
  USER: process.env.MYSQL_USER ||"root",
  PASSWORD: process.env.MYSQL_PASSWORD || "root",
  DB: process.env.MYSQL_DBNAME || "argon",


  BK_HOST: process.env.MYSQL_HOST_BK || "localhost",
  BK_PORT: process.env.MYSQL_PORT_BK || "3306",
  BK_USER: process.env.MYSQL_USER_BK ||"root",
  BK_PASSWORD: process.env.MYSQL_PASSWORD_BK || "root",
  BK_DB: process.env.MYSQL_DBNAME_BK || "argon_bk"
};