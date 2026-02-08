const { Sequelize } = require("sequelize");

require("dotenv").config();

/**
 * -------------- DATABASE ----------------
 */

/**
 * Connect to PostgreSQL Server using the connection string in the `.env` file. To implement this, place the following
 * string into the `.env` file
 *
 * DB_STRING=postgres://user:password@localhost:5432/database_name
 */

const connection = new Sequelize(process.env.DB_STRING, {
  dialect: "postgres",
  logging: false,
});

// Define User model
const User = connection.define("User", {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  hash: Sequelize.STRING,
  salt: Sequelize.STRING,
});

// Create tables if they don't exist
connection.sync();

// Expose the connection and User model
module.exports = { connection, User };
