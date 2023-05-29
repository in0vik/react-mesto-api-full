require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const ms = require('ms');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { errors: celebrateErrors } = require('celebrate');
const { routes } = require('./routes');
const NotFoundError = require('./errors/NotFoundError');
const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const cors = require('./middlewares/cors');
const { DB_ADDRESS, PORT } = require('./config/config');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

const limiter = rateLimit({
  windowMs: ms('15m'),
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(requestLogger);
app.use(limiter);
app.use(helmet());
mongoose.set("strictQuery", false);
try {
  mongoose.connect(DB_ADDRESS);
  console.log('Connected to MongoDB');
} catch (error) {
  throw new Error('Error connecting to MongoDB: ', error);
}

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors);
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('The server is about to crash');
  }, 0);
});
app.use(routes);
app.use(errorLogger);
app.use('*', auth, (req, res, next) => {
  next(new NotFoundError('Page not found'));
});
app.use(celebrateErrors());
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`App is listening port: ${PORT}`);
});
