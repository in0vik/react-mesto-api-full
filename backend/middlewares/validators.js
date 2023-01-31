const { celebrate, Joi } = require('celebrate');
const { regex } = require('../config/constants');

module.exports.validateCardData = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().length(24).hex(),
  }),
});

module.exports.validateUserData = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    link: Joi.string().min(2).required().regex(regex.link),
  }),
});