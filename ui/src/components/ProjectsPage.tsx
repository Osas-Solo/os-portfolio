import {Card, CardBody, CardTitle, Col, Row} from "reactstrap";
import React from "react";
import "../css/devicon.min.css";
import "../css/fontsawesome/css/fontawesome.min.css";
import "../css/fontsawesome/css/solid.min.css";
import "../css/fontsawesome/css/brands.min.css";

const ProjectsPage = () => {
    return (
        <Card className="p-3">
            <CardTitle className="text-center">
                <h1>OS Projects</h1>

                <Card className="w-md-50 mx-auto p-3">
                    <CardBody>
                        This page only shows a few of my previous projects. If you'd like to find more:

                        <Row className="d-flex justify-content-center mt-5">
                            <Col className="col-auto my-auto mb-3 me-md-3 mx-auto btn btn-primary">
                                <a href="https://github.com/Osas-Solo" target="_blank">
                                    <Row>
                                        <Col className="col-auto">
                                            <i className="devicon-github-plain colored"/>
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

            <CardBody className="mx-auto w-auto">

            </CardBody>

        </Card>
    );
};

export default ProjectsPage;