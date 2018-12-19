import React, { Component } from "react";
import SideNavbar from "../components/Homepage/SideNavbar";
import About from "../components/Homepage/About";

class Index extends Component {

    render() {
        return(
            <div>
                <SideNavbar />
                <div className="container-fluid p-0">
                    <About />

                </div>
            </div>
        )
    }
}

export default Index;