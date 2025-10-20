const { NODE_ENV = 'development' } = process.env;
const { DB_ADDRESS = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;
const { PORT = 3000 } = process.env;

// JWT_SECRET is required in production for security
let JWT_SECRET;
if (NODE_ENV === 'production') {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is required in production');
  }
  JWT_SECRET = process.env.JWT_SECRET;
} else {
  // Allow development mode to use default secret for convenience
  JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-key';
}

module.exports = {
  JWT_SECRET,
  DB_ADDRESS,
  NODE_ENV,
  PORT,
}