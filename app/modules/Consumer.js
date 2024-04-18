// consumer.js
const UseCaseUser = require("../use-cases/logs.use-case");
const BookProvider = require("../providers/logs.provider");
const provider = new BookProvider(process.env.API_LIBRARY);
const UseCase = new UseCaseUser(provider);
const amqp = require('amqplib');

async function startNotificationConsumer() {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertQueue('notifications-events');

    console.log('Notification Consumer connected to RabbitMQ');

    channel.consume('notifications-events', async (message) => {
        const event = JSON.parse(message.content.toString());
        if (event.eventType === 'notification') {
            // Add logic here to handle the new user registration event
            const response = await UseCase.insertNotifications(event);
            return response;
        }
    }, { noAck: true });
}

async function startLogsConsumer() {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertQueue('logs-events');


    channel.consume('logs-events',  async (message) => {
        const event = JSON.parse(message.content.toString());
        if (event.eventType === 'logs') {
            // Add logic here to handle the new user registration event
            const response = await UseCase.insertLogs(event);
            return response;
        }
    }, { noAck: true });
}

module.exports = { startNotificationConsumer, startLogsConsumer };
