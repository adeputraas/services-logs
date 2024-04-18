const Joi = require('joi');

exports.InsertActivity = async (dto) => {
    const schema = Joi.object({
        users_id: Joi.string().guid({ version: ['uuidv4']}),
        activity: Joi.string().required(),
        url_api: Joi.string().required(),
        detail_message: Joi.string().required(),
        status_response: Joi.string().required(),
        eventType: Joi.string().required()
    }).required();

    try {
        const response = await schema.validateAsync(dto);
        return response;
    } catch (error) {
        throw error;
    }
};

exports.InsertNotification = async (dto) => {

    const schema = Joi.object({
        users_id: Joi.string().guid({ version: ['uuidv4']}),
        message: Joi.string().required(),
        eventType: Joi.string().required()
    }).required();

    try {
        const response = await schema.validateAsync(dto);
        return response;
    } catch (error) {
        throw error;
    }
};

exports.findNotificationById = async (dto) => {

    const schema = Joi.object({
        user_id: Joi.string().guid({ version: ['uuidv4']}),
    }).required();

    try {
        const response = await schema.validateAsync(dto);
        return response;
    } catch (error) {
        throw error;
    }
};


