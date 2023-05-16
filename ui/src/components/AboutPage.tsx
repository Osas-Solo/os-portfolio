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

                <Technology name={"Java"} fontSize={2} spacing={3} marginBottom={3}/>
            </CardBody>
        </Card>
    );
}

export default AboutPage;