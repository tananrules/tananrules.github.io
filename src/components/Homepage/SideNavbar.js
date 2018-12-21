import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import "./SideNavbar.css";

import { Link } from 'react-scroll';


class SideNavbar extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return(
            <Navbar color="info" id="sideNav" expand="lg" fixed="top" dark>
                <NavbarBrand href="#page-top">
                    <span className="d-block d-lg-none">Tarun Arora</span>
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/tarun.jpeg" alt=""></img>
                    </span>
                </NavbarBrand>

                <NavbarToggler onClick={this.toggle} />

                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>

                        <NavItem>
                            <Link activeClass="active" className="nav-link" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                                About
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link activeClass="active" className="nav-link" to="experience" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                                Work Experience
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link activeClass="active" className="nav-link" to="education" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                                Education
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link activeClass="active" className="nav-link" to="projects" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                                Academic Projects
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link activeClass="active" className="nav-link" to="skills" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                                Skills
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link activeClass="active" className="nav-link" to="interests" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                                Interests
                            </Link>                        
                        </NavItem>
                    </Nav>
                </Collapse>

            </Navbar>
        );
    }

}

export default SideNavbar;