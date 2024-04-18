// some other part of your application
const { publishLogEvent, publishNotificationEvent } = require('../modules/Publisher');
const UseCaseUser = require("../use-cases/logs.use-case");
const BookProvider = require("../providers/logs.provider");


const provider = new BookProvider(process.env.API_LIBRARY);
const UseCase = new UseCaseUser(provider);

exports.insertLogs = async (req, res) => {
  try {
    // const response = await UseCase.updateOne(req.body);
    // res.status(200).send({
    //   status: "Success",
    //   message: "Success",
    //   data: response,
    // });

    const testerMoni = {
      users_id: '1',
      activity: "Update Clocked In",
      url_api: "/clocked_in",
      status_response: "200",
      detail_message: "Success",
      eventType: 'logs'
    }
    publishLogEvent(testerMoni);

  } catch (error) {
    res.status(400).send({ status: "Bad Request", message: error.message });
  }
};

exports.insertNotifications = async (req, res) => {
  try {
    // const response = await UseCase.updateOne(req.body);
    // res.status(200).send({
    //   status: "Success",
    //   message: "Success",
    //   data: response,
    // });
    const testerMoni = {
      users_id: '1',
      message: 'Cahyo update his profile. You can see in user list',
      eventType: 'notification'
    }
    publishNotificationEvent(testerMoni);

  } catch (error) {
    res.status(400).send({ status: "Bad Request", message: error.message });
  }
};

exports.findByUserId = async (req, res) => {
  try {
    const response = await UseCase.findByUserId(req.body);
    res.status(200).send({
      status: "Success",
      message: "Success",
      data: response,
    });
  } catch (error) {
    res.status(400).send({ status: "Bad Request", message: error.message });
  }
};
