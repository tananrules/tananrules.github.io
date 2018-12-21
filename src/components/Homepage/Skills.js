import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faJsSquare, faCss3Alt, faReact, faEmber, faDocker, faGithub, faJava, faNode, faAngular, faNpm } from "@fortawesome/free-brands-svg-icons";


class Education extends Component {

    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column">
                <div className="my-auto">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages &amp; Tools</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item">
                            <FontAwesomeIcon icon={faJsSquare} />
                        </li>
                        <li className="list-inline-item">
                            <FontAwesomeIcon icon={faReact} />
                        </li>
                        <li className="list-inline-item">
                            <FontAwesomeIcon icon={faEmber} />
                        </li>
                        <li className="list-inline-item">
                            <FontAwesomeIcon icon={faAngular} />
                        </li>
                        <li className="list-inline-item">
                            <FontAwesomeIcon icon={faNode} />
                        </li>
                        <li className="list-inline-item">
                            <FontAwesomeIcon icon={faJava} />
                        </li>
                        <li className="list-inline-item">
                            <FontAwesomeIcon icon={faHtml5} />
                        </li>
                        <li className="list-inline-item">
                            <FontAwesomeIcon icon={faCss3Alt} />
                        </li>
                        <li className="list-inline-item">
                            <FontAwesomeIcon icon={faNpm} />
                        </li>
                        <li className="list-inline-item">
                            <FontAwesomeIcon icon={faDocker} />
                        </li>
                        <li className="list-inline-item">
                            <FontAwesomeIcon icon={faGithub} />
                        </li>
                    </ul>
                    {/* <div className="subheading mb-3">Workflow</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <i className="fa-li fa fa-check" />
                            Mobile-First, Responsive Design</li>
                        <li>
                            <i className="fa-li fa fa-check" />
                            Cross Browser Testing &amp; Debugging</li>
                        <li>
                            <i className="fa-li fa fa-check" />
                            Cross Functional Teams</li>
                        <li>
                            <i className="fa-li fa fa-check" />
                            Agile Development &amp; Scrum</li>
                    </ul> */}
                </div>
            </section>
        );
    }

}

export default Education;