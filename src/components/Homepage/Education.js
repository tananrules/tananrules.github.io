import React, { Component } from "react";

class Education extends Component {

    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
                <div className="my-auto">
                    <h2 className="mb-5">Education</h2>
                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">San Jose State University</h3>
                            <div className="subheading mb-3">Master of Science</div>
                            <div>Software Engineering - Enterprise Software Technologies</div>
                            {/* <p>GPA: 3.23</p> */}
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">January 2018 - December 2019 (expected)</span>
                        </div>
                    </div>
                    <div className="resume-item d-flex flex-column flex-md-row">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">rajasthan technical University, india</h3>
                            <div className="subheading mb-3">Bachelor of Technology</div>
                            <div>Computer Science &amp; Engineering</div>
                            {/* <p>GPA: 3.56</p> */}
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">September 2010 - June 2014</span>
                        </div>
                    </div>
                </div>
            </section>

        );
    }

}

export default Education;