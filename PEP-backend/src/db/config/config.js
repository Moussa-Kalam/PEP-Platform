const dotenv = require("dotenv");

dotenv.config();
const url = process.env.DATABASE_URL;

module.exports = {
  development: {
    url,
    dialect: "mysql",
  },
  test: {
    url,
    dialect: "mysql",
  },
  production: {
    url,
    dialect: "mysql",
  },
};
