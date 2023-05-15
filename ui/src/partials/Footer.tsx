import React from "react";
import {Col, Nav, NavItem, NavLink, Row} from "reactstrap";

const Footer = () => {
    return (
        <footer className="p-3">
            <Row>
                <Col className="col-auto text-start p-3">
                    &copy; {new Date().getFullYear()} Osaremhen Solomon Ukpebor
                </Col>
                <Col className="col-auto text-end justify-content-end p-2 px-auto">
                    <Nav>
                        <NavItem>
                            <NavLink href="https://github.com/Osas-Solo" target="_blank">
                                GitHub
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://www.linkedin.com/in/osas-solo/" target="_blank">
                                LinkedIn
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://twitter.com/OsasSolo" target="_blank">
                                Twitter
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;