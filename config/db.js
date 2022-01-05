const mysql = require('mysql2/promise');
const { host, user, database } = require('./constants');

const dbConnection = async () => {
  const connection = await mysql.createConnection({
    host: host,
    user: user,
    database: database,
  });

  return connection;
};

module.exports = { dbConnection };
