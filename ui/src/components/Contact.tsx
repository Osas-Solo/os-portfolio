import {Col, Row} from "reactstrap";
import React from "react";

interface IContact {
    icon: string;
    link: string;
    detail: string;
}

const Contact = ({icon, link, detail} : IContact) => {
    return (
        <Row className="fs-2 w-auto mb-5 mx-auto contact py-1">
            <Col className="col-auto">
                <i className={icon}/>
            </Col>
            <Col className="col-auto">
                <a href={link} target="_blank">{detail}</a>
            </Col>
        </Row>
    );
};

export default Contact;