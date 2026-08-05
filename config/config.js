require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'macbookpro',
    password: process.env.DB_PASSWORD || '12345',
    database: process.env.DB_NAME || 'perpustakaan',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    dialect: process.env.DB_DIALECT || 'postgres'
  }
};