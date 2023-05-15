import {Nav, NavItem} from "reactstrap";
import {Link} from "react-router-dom";
import React from "react";

const Header = () => {
    return (
        <Nav className="p-3 mb-md-5 justify-content-center sticky-md-top sticky-bottom">
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
    );
}

export default Header;