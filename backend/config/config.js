const { NODE_ENV = 'development' } = process.env;
const { JWT_SECRET = 'secret-key' } = process.env;
const { DB_ADDRESS = 'mongodb://localhost:27017/mestodb' } = process.env;
const { PORT = 3000 } = process.env;
const baseSubfolderUrl = '/api';

module.exports = {
  JWT_SECRET,
  DB_ADDRESS,
  NODE_ENV,
  PORT,
  baseSubfolderUrl,
}