const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-project", "root", "Montreal123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
