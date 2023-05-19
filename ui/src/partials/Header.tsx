import {Collapse, Nav, Navbar, NavbarToggler, NavItem} from "reactstrap";
import {Link} from "react-router-dom";
import React, {useState} from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar className="navbar-expand-lg sticky-top">
            <NavbarToggler onClick={toggle} className="col-2" style={{color: "white"}}/>

            <Collapse isOpen={isOpen} navbar>
                <Nav className="col-lg-12 col-10 flex-column flex-md-row justify-content-center" navbar>
                    <NavItem>
                        <Link to="/about" className="nav-link fw-bold">
                            OS About
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/projects" className="nav-link fw-bold">
                            OS Projects
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/contact" className="nav-link fw-bold">
                            OS Contact
                        </Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;