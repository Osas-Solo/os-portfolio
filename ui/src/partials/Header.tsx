import {Collapse, Nav, Navbar, NavbarToggler, NavItem} from "reactstrap";
import {Link} from "react-router-dom";
import React, {useState} from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <header className="header d-flex align-items-center sticky-top">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                <Navbar className="navbar-expand-md mx-md-auto">
                    <NavbarToggler onClick={toggle} className="col-auto" style={{color: "white"}}/>

                    <Collapse isOpen={isOpen} navbar>
                        <Nav
                            className="col-auto flex-column flex-md-row"
                            navbar>
                            <NavItem>
                                <Link to="/about" className="nav-link fw-bold p-2">
                                    OS About
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/projects" className="nav-link fw-bold p-2">
                                    OS Projects
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/contact" className="nav-link fw-bold p-2">
                                    OS Contact
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </header>
    );
};

export default Header;