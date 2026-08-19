require('dotenv').config();

const development = {
  username: process.env.DB_USER || 'macbookpro',
  password: process.env.DB_PASSWORD || '12345',
  database: process.env.DB_NAME || 'perpustakaan',
  host: process.env.DB_HOST || '127.0.0.1',
  port: process.env.DB_PORT || 5432,
  dialect: process.env.DB_DIALECT || 'postgres'
};

const production = {
  use_env_variable: "POSTGRES_URL",
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
};

module.exports = {
  development,
  production
};