import express, {Request, Response} from "express";

type Project = {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    screenshots: string[];
    sourceLink: string | null;
    demoLink: string | null;
}

exports.getProjects = (request: Request, response: Response) => {
    const projects: Project[] = [
        {
            id: 1,
            title: "Project 1",
            description: "This is project 1",
            technologies: ["React", "TypeScript"],
            screenshots: ["kakakka", "akak"],
            sourceLink: "alallala",
            demoLink: null,
        },
        {
            id: 2,
            title: "Project 2",
            description: "This is project 2",
            technologies: ["React", "TypeScript"],
            screenshots: ["alalal", "aakakk"],
            sourceLink: null,
            demoLink: "kakak",
        },
    ];

    response.status(200).json({
            status: 200,
            message: "OK",
            data: projects,
        }
    );
}