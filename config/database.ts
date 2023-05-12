import dotenv from "dotenv";

const database = require("mongoose");
dotenv.config();

database.connect(process.env.DATABASE_URL);