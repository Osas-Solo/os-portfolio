import {Card, CardBody, CardTitle, Col, Row} from "reactstrap";
import React, {useEffect, useRef, useState} from "react";
import "../css/devicon.min.css";
import Technology from "./Technology";

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
            <Row>
                <Col className="col-md-6 mb-5 p-3">
                    <CardTitle>
                        <h1>
                            Osaremhen Solomon Ukpebor
                        </h1>
                        <h2>{jobTitles[jobTitleIndex]}</h2>
                    </CardTitle>
                    <h2>Osas-Solo</h2>
                    <h3>OS</h3>
                </Col>
                <Col className="col-md-6 mb-5">
                    <CardBody className="text-center">
                        <h3>Technologies</h3>
                        <hr className="mb-5"/>

                        <Technology name={"Java"} fontSize={2} spacing={3} marginBottom={4}/>
                        <Technology name={"Kotlin"} fontSize={2} spacing={3} marginBottom={4}/>
                        <Technology name={"NodeJS/Express"} fontSize={2} spacing={3} marginBottom={4}/>
                        <Technology name={"PHP"} fontSize={2} spacing={3} marginBottom={4}/>
                        <Technology name={"JavaEE"} fontSize={2} spacing={3} marginBottom={4}/>
                        <Technology name={"Android"} fontSize={2} spacing={3} marginBottom={4}/>
                        <Technology name={"MySQL"} fontSize={2} spacing={3} marginBottom={4}/>
                        <Technology name={"ReactJS"} fontSize={2} spacing={3} marginBottom={4}/>
                        <Technology name={"JavaScript"} fontSize={2} spacing={3} marginBottom={4}/>
                        <Technology name={"TypeScript"} fontSize={2} spacing={3} marginBottom={4}/>
                        <Technology name={"Bootstrap"} fontSize={2} spacing={3} marginBottom={4}/>
                        <Technology name={"MongoDB"} fontSize={2} spacing={3} marginBottom={4}/>
                        <Technology name={"SQLite"} fontSize={2} spacing={3} marginBottom={4}/>
                    </CardBody>
                </Col>
            </Row>
        </Card>
    );
}

export default AboutPage;