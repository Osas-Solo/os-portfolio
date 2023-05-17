import {Col, Row} from "reactstrap";
import React from "react";

interface IContact {
    icon: string;
    link: string;
    detail: string;
}

const Contact = ({icon, link, detail} : IContact) => {
    return (
        <Row className="fs-4 mb-5">
            <Col className="col-md-1 col-12">
                <i className={icon}/>
            </Col>
            <Col className="col-md-11 col-12 text-start ps-md-5">
                <a href={link} target="_blank">{detail}</a>
            </Col>
        </Row>
    );
};

export default Contact;