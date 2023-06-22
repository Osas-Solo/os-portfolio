import {Card, CardBody, CardTitle, Col, Row} from "reactstrap";
import React, {useEffect, useRef} from "react";
import Typed from "typed.js";
import "../css/devicon.min.css";
import Technology from "./Technology";

const AboutPage = () => {
    useEffect(() => {
        document.title = "Backend/Android Developer | Osas-Solo";
        window.scrollTo(0, 0);
    }, []);

    const jobTitles: Array<string> = ["Software Developer", "Backend Developer", "Android Developer"];
    const currentJobTitle = useRef(null);

    useEffect(() => {
        const jobTitleTyper = new Typed(currentJobTitle.current, {
            strings: jobTitles,
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true,
        });

        return () => {
            jobTitleTyper.destroy();
        };
    });

    return (
        <Card className="text-center p-5">
            <CardTitle className="mb-5">
                <h1>About Osas-Solo</h1>
            </CardTitle>

            <CardBody className="text-center">
                <Row>
                    <Col className="col-md-6 mb-5 p-3 my-md-auto">
                        <h1>
                            Osaremhen Solomon Ukpebor
                        </h1>
                        <h2>
                            <span ref={currentJobTitle}/>
                        </h2>
                        <h3>Osas-Solo</h3>
                        <h3>OS</h3>
                    </Col>
                    <Col className="col-md-6 mb-5">
                        <h3>Technologies</h3>
                        <hr className="mb-5"/>

                        <Row id="technology-section">
                            <Technology name={"Java"} fontSize={2} spacing={3} marginBottom={3}/>
                            <Technology name={"Kotlin"} fontSize={2} spacing={3} marginBottom={3}/>
                            <Technology name={"NodeJS/Express"} fontSize={2} spacing={3} marginBottom={3}/>
                            <Technology name={"PHP"} fontSize={2} spacing={3} marginBottom={3}/>
                            <Technology name={"JavaEE"} fontSize={2} spacing={3} marginBottom={3}/>
                            <Technology name={"Android"} fontSize={2} spacing={3} marginBottom={3}/>
                            <Technology name={"MySQL"} fontSize={2} spacing={3} marginBottom={3}/>
                            <Technology name={"ReactJS"} fontSize={2} spacing={3} marginBottom={3}/>
                            <Technology name={"JavaScript"} fontSize={2} spacing={3} marginBottom={3}/>
                            <Technology name={"TypeScript"} fontSize={2} spacing={3} marginBottom={3}/>
                            <Technology name={"Bootstrap"} fontSize={2} spacing={3} marginBottom={3}/>
                            <Technology name={"MongoDB"} fontSize={2} spacing={3} marginBottom={3}/>
                            <Technology name={"SQLite"} fontSize={2} spacing={3} marginBottom={3}/>
                        </Row>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default AboutPage;