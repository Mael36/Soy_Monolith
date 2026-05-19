const sslEnabled =
  process.env.POSTGRES_SSL === "true" ||
  process.env.POSTGRES_SSL === true;

module.exports = {
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,

  ssl: sslEnabled
    ? { rejectUnauthorized: false }
    : false
};