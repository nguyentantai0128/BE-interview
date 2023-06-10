/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.join(__dirname, "../../.env") });

module.exports = {
	host: process.env.DB_URL,
};
