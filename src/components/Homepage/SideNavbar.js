import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import "./SideNavbar.css";

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

                {/* <NavbarToggler onClick={this.toggle} /> */}

                {/* <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#experience">Work Experience</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#education">Education</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#projects">Academic Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#skills">Skills</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#interests">Interests</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse> */}

            </Navbar>
        );
    }

}

export default SideNavbar;