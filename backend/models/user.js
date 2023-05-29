const mongoose = require('mongoose');
const validator = require('validator');
const { regex } = require('../config/constants');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'Yellowy',
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    default: 'Cheerful Sunshine Ambassador',
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    default: 'https://i.postimg.cc/8zRPqSWd/smile-icon.jpg',
    validate: {
      validator: (v) => regex.link.test(v),
      message: 'Incorrect link entered',
    },
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (v) => validator.isEmail(v),
      message: 'An invalid e-mail address was entered',
    },
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

module.exports = mongoose.model('user', userSchema);
