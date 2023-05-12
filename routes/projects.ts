import express, {Request, Response, Router} from "express";
const projectsAPI = require("../api/projects");
const router : Router = express.Router();

router.get('/', projectsAPI.getProjects);

module.exports = router;