import React, { Component } from "react";
import SideNavbar from "../components/Homepage/SideNavbar";
import About from "../components/Homepage/About";
import LineBreak from "../components/Homepage/LineBreak";
import Education from "../components/Homepage/Education";
import Experience from "../components/Homepage/Experience";
import Skills from "../components/Homepage/Skills";
import Projects from "../components/Homepage/Projects";


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
                <SideNavbar/>
                <div className="container-fluid p-0">
                    <Element name="about" className="element">
                        <LineBreak />
                        <About />
                    </Element>
                    
                    <Element name="experience" className="element">
                        <LineBreak />
                        <Experience />
                    </Element>
                    <Element name="education" className="element">
                        <LineBreak />
                        <Education />
                    </Element>
                    <Element name="projects" className="element">
                        <LineBreak />
                        <Projects />
                    </Element>
                    <Element name="skills" className="element">
                        <LineBreak />
                        <Skills />
                    </Element>

                </div>
            </div>
        )
    }
}

export default Index;