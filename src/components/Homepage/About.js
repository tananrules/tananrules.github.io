import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class About extends Component {

    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex d-column">
                <div className="my-auto">
                    <h1 className="mb-0">Tarun
                    <span className="text-info"> Arora</span>
                    </h1>
                    <div className="subheading mb-5">33 S 3rd St. · San Jose, CA 95113 · (669) 274-6761 · 
                        <a href="mailto:tarun.arora@sjsu.edu"> tarun.arora@sjsu.edu</a>
                    </div>
                    <p className="lead mb-5">
                        As a Software Engineer Intern at CBS Interactive, I work on the beauty and brains of what you see on the MaxPreps Photography web page. <br/>
                        I work with React & Next and write highly efficient reusable components. The highly maintainable code which can be easily debugged and Server Side Rendered web pages for best user experience. <br /><br />
                        I am a Full Stack Developer with expertise in Javascript and frontend technologies like React, Next, Ember, and Angular along with backend technologies like Java, Spring Boot and Node actively seeking Full-Time SDE opportunities.<br /><br />
                        I love to go hunt for new places to eat and go for drives. Go hike a nearby trail or just watch Netflix and get lazy
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
                        <a href="mailto:tarun.arora@sjsu.edu">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                </div>
            </section>
        );
    }

}

export default About;