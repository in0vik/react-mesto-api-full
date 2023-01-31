const STATUS_CODE = require("../errors/errorCodes");

const errorHandler = (err, req, res, next) => {
  if (err.statusCode) {
    res.status(err.statusCode).send({ message: err.message });
  } else {
    res.status(STATUS_CODE.serverError).send({ message: 'Произошла ошибка на сервере' });
  }
  next();
}

module.exports = errorHandler;
