const Users = require("../models/logs.model.js");
const validateRequest = require("../validator/logs.validator.js");

class UseCaseBooks {
  constructor(booksProvider) {
    this.booksProvider = booksProvider;
  }

  insertLogs = async (dto) => {
    try {
      const retrieveValidRequest = await validateRequest.InsertActivity(dto);
      const resp = await new Users(retrieveValidRequest).insertLogs(retrieveValidRequest);
      return resp;
    } catch (error) {
      throw error;
    }
  };

  insertNotifications = async (dto) => {
    try {
      const retrieveValidRequest = await validateRequest.InsertNotification(dto);
      const resp = await new Users(retrieveValidRequest).insertNotification(retrieveValidRequest);
      return resp;
    } catch (error) {
      throw error;
    }
  };

  findByUserId = async (dto) => {
    try {
      const retrieveValidRequest = await validateRequest.findNotificationById(dto);
      const resp = await new Users(retrieveValidRequest).findNotificationById(retrieveValidRequest);
      return resp;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = UseCaseBooks;
