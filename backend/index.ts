import express, {Express} from 'express';
import dotenv from "dotenv";

const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const prettify = require("express-prettify");

const projectsRouter = require("./routes/projects");

dotenv.config();

const app: Express = express();
const port: string | undefined = process.env.PORT;

app.use(prettify({
    always: true,
    spaces: 4,
}));

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use('/api/projects', projectsRouter);

app.listen(port, () => {
    console.log(`⚡️[OS Portfolio API]: Server is running at http://localhost:${port}`);
});