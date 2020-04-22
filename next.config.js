const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  env: {
    BACKEND_URL: process.env.BACKEND_URL || "http://localhost:8080",
  },
};
