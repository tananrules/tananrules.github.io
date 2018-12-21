import React, { Component } from "react";
import SideNavbar from "../components/Homepage/SideNavbar";
import About from "../components/Homepage/About";
import LineBreak from "../components/Homepage/LineBreak";
import Education from "../components/Homepage/Education";
import Experience from "../components/Homepage/Experience";

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';




class Index extends Component {

    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    render() {
        return(
            <div>
                <SideNavbar scrollLink={Link}/>
                <div className="container-fluid p-0">
                    {/* <Link activeClass="active" className="about" to="about" spy={true} smooth={true} duration={500} > */}
                    <Element name="about" className="element">
                        <About />
                    </Element>
                    < LineBreak />
                    <Element name="experience" className="element">
                        <Experience />
                    </Element>
                    <LineBreak />
                    <Element name="education" className="element">
                        <Education />
                    </Element>
                    <LineBreak />

                </div>
            </div>
        )
    }
}

export default Index;