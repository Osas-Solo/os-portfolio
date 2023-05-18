export interface IProject {
    id: number;
    title: string;
    description: string;
    technologies: [string];
    screenshots: [string];
    sourceLink?: string;
    demoLink?: string;
}