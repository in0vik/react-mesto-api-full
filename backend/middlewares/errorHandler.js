const STATUS_CODE = require("../errors/errorCodes");

const errorHandler = (err, req, res, next) => {
  if (err.statusCode) {
    res.status(err.statusCode).send({ message: err.message });
  } else {
    res.status(STATUS_CODE.serverError).send({ message: 'There was an error on the server' });
  }
  next();
}

module.exports = errorHandler;
