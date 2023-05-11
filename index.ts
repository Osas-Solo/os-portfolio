import express, { Express, Request, Response } from 'express';
import dotenv from "dotenv";
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const projectsRouter = require("./routes/projects");

dotenv.config();

const app: Express = express();
const port: string | undefined = process.env.PORT;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use('/api/projects', projectsRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});