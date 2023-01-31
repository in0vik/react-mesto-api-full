const { celebrate, Joi } = require('celebrate');
const { regex } = require('../config/constants');

module.exports.validateCardId = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().length(24).hex(),
  }),
});

module.exports.validateCardData = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    link: Joi.string().min(2).required().regex(regex.link),
  }),
});

module.exports.validateUserData = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email({ tlds: { allow: false } }),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().min(2).regex(regex.link),
  })
});

