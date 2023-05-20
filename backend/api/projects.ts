import {Request, Response} from "express";
import {Document, model, Model, Schema} from "mongoose";

const database = require("../config/database");

interface IProject extends Document {
    id: number,
    title: string,
    description: string,
    technologies: [string],
    screenshots: [string],
    sourceLink?: string,
    demoLink?: string,
}

const ProjectSchema = new Schema<IProject>({
    id: {type: Number, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    technologies: {type: [String], required: true},
    screenshots: {type: [String], required: true},
    sourceLink: String,
    demoLink: String,
});

exports.getProjects = async (request: Request, response: Response) => {
    await database.connect(process.env.DATABASE_URL);
    const Project: Model<IProject> = model("Project", ProjectSchema, "projects");

    try {
        const projects: Array<IProject> = await Project.find({});

        if (!projects || projects.length === 0) {
            const errorJSON: { status: number, message: string} = {
                status: 500,
                message: "Internal Server Error",
            };

            throw new Error("Internal Server Error");

            console.log(errorJSON);
            response.status(500).json(errorJSON);
        }

        const successJSON: { status: number, message: string, data: IProject[] } = {
            status: 200,
            message: "OK",
            data: projects,
        };

        console.log(successJSON);
        response.status(200).json(successJSON);
    } catch (e) {
        console.log(e);
        const errorJSON: { status: number, message: string} = {
            status: 500,
            message: "Internal Server Error",
        };

        console.log(errorJSON);
        response.status(500).json(errorJSON);
    }
}