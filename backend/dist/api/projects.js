"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const database = require("../config/database");
const ProjectSchema = new mongoose_1.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: [String], required: true },
    screenshots: { type: [String], required: true },
    sourceLink: String,
    demoLink: String,
});
exports.getProjects = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    yield database.connect(process.env.DATABASE_URL);
    const Project = (0, mongoose_1.model)("Project", ProjectSchema, "projects");
    try {
        const projects = yield Project.find({});
        if (!projects || projects.length === 0) {
            const errorJSON = {
                status: 500,
                message: "Internal Server Error",
            };
            throw new Error("Internal Server Error");
            console.log(errorJSON);
            response.status(500).json(errorJSON);
        }
        const successJSON = {
            status: 200,
            message: "OK",
            data: projects,
        };
        console.log(successJSON);
        response.status(200).json(successJSON);
    }
    catch (e) {
        console.log(e);
        const errorJSON = {
            status: 500,
            message: "Internal Server Error",
        };
        console.log(errorJSON);
        response.status(500).json(errorJSON);
    }
});
