require("dotenv").config();
const sql = require("./db.js");
const sqlBk = require("./backupdb.js");
const uuid = require("uuid");
// const axios = require("axios");
// const BookProvider = require("../providers/users.provider");

class Users {
  constructor(user) {
    this.uid =  user.uid || uuid.v4();
    // this.username = user.username;
    // this.password = user.password;
    // this.role = user.role;
    // this.email = user.email;
    // this.phoneNumber = user.phoneNumber;
    // this.photo = user.photo;
  }

  insertLogs = async (user, status) => {
    try {
      let dto = [];
      let query = "";
      dto = [
        this.uid,
        user.users_id,
        user.activity,
        user.url_api,
        user.status_response,
        user.detail_message
      ];

      query =
        "INSERT INTO log_activities (id, users_id, activity, url_api, status_response,detail_message) VALUES (?,?,?,?,?,?) ";

      const results = await new Promise((resolve, reject) => {
        sql.query(/* sql */ query, dto, (err, res) => {
          if (err) reject(err);
          resolve(res);
        });
      }).then((response) => response);

      const resultsBK = await new Promise((resolve, reject) => {
        sqlBk.query(/* sql */ query, dto, (err, res) => {
          if (err) reject(err);
          resolve(res);
        });
      }).then((response) => response);

      return results;
    } catch (error) {
      throw error;
    }
  };

  insertNotification = async (user, status) => {
    try {
      let dto = [];
      let query = "";
      dto = [
        this.uid,
        user.users_id,
        user.message,
      ];

      query =
        "INSERT INTO notifications (id, users_id, message) VALUES (?,?,?) ";

      const results = await new Promise((resolve, reject) => {
        sql.query(/* sql */ query, dto, (err, res) => {
          if (err) reject(err);
          resolve(res);
        });
      }).then((response) => response);
      return results;
    } catch (error) {
      throw error;
    }
  };

  findNotificationById = async (user) => {
    try {
      const results = await new Promise((resolve, reject) => {
        sql.query(
          /* sql */ `SELECT * FROM notifications WHERE users_id =? ORDER BY created_at DESC `,
          [user.user_id],
          (err, res) => {
            if (err) reject(err);
            resolve(res);
          }
        );
      }).then((response) => response);
      return results;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = Users;
