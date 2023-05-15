import {Card, CardBody, CardTitle, Col, Row} from "reactstrap";
import React, {useEffect, useRef, useState} from "react";
import "../css/devicon.min.css";

const AboutPage = () => {
    const jobTitles: Array<string> = ["Software Developer", "Backend Developer", "Android Developer"];
    const [jobTitleIndex, setJobTitleIndex] = useState(0);
    const savedJobTitle = useRef<() => void>();

    function changeJobTitle() {
        setJobTitleIndex(Math.floor(Math.random() * jobTitles.length));
    }

    useEffect(() => {
        savedJobTitle.current = changeJobTitle;
    });

    useEffect(() => {
        function tick() {
            savedJobTitle.current?.();
        }

        let id = setInterval(tick, 500);
        return () => clearInterval(id);
    }, []);

    return (
        <Card className="text-center p-5">
            <CardTitle>
                <h1>
                    Osaremhen Solomon Ukpebor
                </h1>
                <h2>{jobTitles[jobTitleIndex]}</h2>
            </CardTitle>
            <h2>Osas-Solo</h2>
            <h3>OS</h3>

            <CardBody className="text-center">
                <h3>Technologies</h3>

                <Row className="justify-content-center display-4">
                    <Col className="col-auto me-3">
                        <i className="devicon-java-plain colored"/>
                    </Col>
                    <Col className="col-auto">
                        Java
                    </Col>
                </Row>
                <Row className="justify-content-center display-4">
                    <Col className="col-auto me-3">
                        <i className="devicon-javascript-plain colored"/>
                    </Col>
                    <Col className="col-auto">
                        JavaScript
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default AboutPage;