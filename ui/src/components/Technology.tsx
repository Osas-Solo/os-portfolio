import {Col, Row} from "reactstrap";
import React from "react";

interface ITechnology {
    name: string;
    fontSize: number;
    spacing: number;
    marginBottom?: number;
    marginRight?: number;
}

const Technology = ({name, fontSize, spacing, marginBottom, marginRight}: ITechnology) => {
    let icon: string = "";

    switch (name) {
        case "Java":
        case "JavaEE":
            icon = "devicon-java-plain";
            break;

        case "JavaScript":
            icon = "devicon-javascript-plain";
            break;

        case "Android":
            icon = "devicon-androidstudio-plain";
            break;

        case "NodeJS/Express":
            icon = "devicon-nodejs-plain";
            break;

        case "MySQL":
            icon = "devicon-mysql-plain";
            break;

        case "SQLite":
            icon = "devicon-sqlite-plain";
            break;

        case "PHP":
            icon = "devicon-php-plain";
            break;

        case "Bootstrap":
            icon = "devicon-bootstrap-plain";
            break;

        case "MongoDB":
            icon = "devicon-mongodb-plain";
            break;

        case "ReactJS":
            icon = "devicon-react-plain";
            break;

        case "TypeScript":
            icon = "devicon-typescript-plain";
            break;
    }

    return (
        <Row className={`justify-content-center fs-${fontSize} mb-${marginBottom} me-${marginRight}`}>
            <Col className={`col-auto me-${spacing}`}>
                <i className={`${icon} colored`}/>
            </Col>
            <Col className="col-auto">
                {name}
            </Col>
        </Row>
    );
}

export default Technology;