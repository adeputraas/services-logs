const validate = require("../modules/Auth.js").isAuthenticated;

module.exports = (app) => {
  const logs = require("../controllers/logs.controller.js");

  var router = require("express").Router();

  router.post("/insert-logs", validate, logs.insertLogs);
  router.post("/insert-notifications",validate, logs.insertNotifications);
  router.post("/notification-by-users",validate, logs.findByUserId);

  app.use("/", router);
};
