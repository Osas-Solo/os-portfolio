"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path = require("path");
const cookieParser = require("cookie-parser");
;
const logger = require("morgan");
const cors = require("cors");
const prettify = require("express-prettify");
const projectsRouter = require("./routes/projects");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(prettify({
    always: true,
    spaces: 4,
}));
app.use(cors());
app.use(logger("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express_1.default.static(path.join(__dirname, "public")));
app.use('/api/projects', projectsRouter);
app.listen(port, () => {
    console.log(`⚡️[OS Portfolio API]: Server is running at http://localhost:${port}`);
});
