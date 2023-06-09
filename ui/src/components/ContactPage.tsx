import React, {useEffect} from "react";
import {Card, CardBody, CardTitle, Row} from "reactstrap";
import "../css/devicon.min.css";
import "../css/fontsawesome/css/fontawesome.min.css";
import "../css/fontsawesome/css/solid.min.css";
import "../css/fontsawesome/css/brands.min.css";
import Contact from "./Contact";

const ContactPage = () => {
    useEffect(() => {
        document.title = "Backend/Android Developer | Contact Osas-Solo";
    }, []);

    return (
        <Card className="page-container p-3">
            <CardTitle className="text-center">
                <h1>Contact Osas-Solo</h1>
            </CardTitle>

            <CardBody className="text-center">
                <Row className="flex-column">
                    <Contact icon={"fa fa-mail-bulk"} link={"mailto:osas.solo25@gmail.com"}
                             detail={"Osas.Solo25@gmail.com"}/>
                    <Contact icon={"devicon-github-plain"} link={"https://github.com/Osas-Solo"} detail={"GitHub"}/>
                    <Contact icon={"devicon-linkedin-plain colored"} link={"https://www.linkedin.com/in/Osas-Solo/"}
                             detail={"LinkedIn"}/>
                    <Contact icon={"devicon-twitter-plain colored"} link={"https://twitter.com/OsasSolo"}
                             detail={"Twitter"}/>
                    <Contact icon={"fas fa-phone-square"} link={"tel:+2348154028194"} detail={"Phone"}/>
                    <Contact icon={"fab fa-whatsapp"} link={"https://wa.me/+2348154028194"} detail={"Whatsapp"}/>
                    <Contact icon={"fab fa-telegram"} link={"https://t.me/OsasSolo"} detail={"Telegram"}/>
                </Row>
            </CardBody>
        </Card>
    );
};

export default ContactPage;