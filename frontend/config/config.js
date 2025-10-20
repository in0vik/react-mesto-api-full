const NODE_ENV = process.env.NODE_ENV || 'development';
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

module.exports = {
  API_URL,
  NODE_ENV,
}