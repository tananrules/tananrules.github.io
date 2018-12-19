import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";


class About extends Component {

    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
                <div className="my-auto">
                    <h1 className="mb-0">Tarun
                    <span className="text-info"> Arora</span>
                    </h1>
                    <div className="subheading mb-5">33 S 3rd St. · San Jose, CA 95113 · (669) 274-6761 · 
                        <a href="mailto:tarun.arora@sjsu.edu"> tarun.arora@sjsu.edu</a>
                    </div>
                    <p className="lead mb-5">
                        Full Stack Developer with expertise in Frontend technologies like Ember, React and Angular along with Backend
                        technologies like Spring Boot, and NodeJS actively seeking Internship/Co-op opportunities for Spring 2019 as well as
                        Summer 2019.
                    </p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/tarunarorasjsu/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/tananrules">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://twitter.com/tananrules">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.facebook.com/tananrules">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </div>
                </div>
            </section>
        );
    }

}

export default About;