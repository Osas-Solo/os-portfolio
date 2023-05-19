import {Card, CardBody, CardTitle, Col, Row} from "reactstrap";
import React, {useEffect, useState} from "react";
import "../css/devicon.min.css";
import "../css/fontsawesome/css/fontawesome.min.css";
import "../css/fontsawesome/css/solid.min.css";
import "../css/fontsawesome/css/brands.min.css";
import {IProject} from "./IProject";
import axios from "axios";
import Project from "./Project";

const ProjectsPage = () => {
    useEffect(() => {
        document.title = "Osas-Solo's Projects | OS Portfolio";
    }, []);

    const [projects, setProjects] = useState([] as IProject[]);

    useEffect(() => {
        getProjects();
    }, []);

    const getProjects = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/projects/`);

        setProjects(response.data.data);
    }

    return (
        <Card className="page-container p-md-3 py-3">
            <CardTitle className="text-center">
                <h1>OS Projects</h1>

                <Card className="w-md-50 mx-auto p-md-3 py-3">
                    <CardBody>
                        This page only shows a few of my previous projects. If you'd like to find more:

                        <Row className="d-flex justify-content-center mt-5">
                            <Col className="col-auto my-auto mb-3 me-md-3 mx-auto btn btn-primary">
                                <a href="https://github.com/Osas-Solo" target="_blank">
                                    <Row>
                                        <Col className="col-auto">
                                            <i className="devicon-github-plain"/>
                                        </Col>
                                        <Col className="col-auto">
                                            GitHub
                                        </Col>
                                    </Row>
                                </a>
                            </Col>
                            <Col className="col-auto my-auto mb-3 ms-md-3 mx-auto btn btn-primary">
                                <a href="/about">
                                    <Row className="justify-content-center">
                                        <Col className="col-auto">
                                            <i className="fab fa-telegram"/>
                                        </Col>
                                        <Col className="col-auto">
                                            Contact Osas-Solo
                                        </Col>
                                    </Row>
                                </a>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </CardTitle>

            <CardBody className="my-5 mx-auto w-auto">
                <h1 className="text-center mb-5">Selected Projects</h1>

                {
                    projects.map((currentProject: IProject) =>
                        <Project key={currentProject.id} id={currentProject.id} title={currentProject.title}
                                 description={currentProject.description} technologies={currentProject.technologies}
                                 screenshots={currentProject.screenshots} sourceLink={currentProject.sourceLink}
                                 demoLink={currentProject.demoLink}/>
                    )
                }

            </CardBody>

        </Card>
    );
};

export default ProjectsPage;