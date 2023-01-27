const { JWT_SECRET = 'secret-key' } = process.env;
const { DB_ADDRESS = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;
const { NODE_ENV = 'production' } = process.env;
const { PORT = 3000 } = process.env;

module.exports = {
  JWT_SECRET,
  DB_ADDRESS,
  NODE_ENV,
  PORT,
}