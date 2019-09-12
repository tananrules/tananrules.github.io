import React, { Component } from "react";

class Experience extends Component {

    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column">
                <div className="my-auto">
                    <h2 className="mb-5">Experience</h2>
                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">Software Engineer Intern</h3>
                            <div className="subheading mb-3">CBS Interactive · MaxPreps</div>
                            <p>
                                Developed new MaxPreps’ Photography pages using React, Next and Styled Components. Implemented Server-Side Rendering which improved the first load performance by 50%.
                            </p>
                            <p>
                                Contributed on live Sprints & Sprint Retros with the frontend team and built various components for Coach Admin application.
                            </p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-info">June 2019 - Current</span>
                        </div>
                    </div>
                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">Frontend engineer (Remote)</h3>
                            <div className="subheading mb-3">Upwork · Freelance Contractor</div>
                            <p>
                                A24Group - Achieved 60% code coverage by implementing Unit &amp; Integration tests to the code base along with the
                                development of new features and bug fixes across A24Group’s various products.
                            </p>
                            <p>
                                Samecustomer - Single-handedly migrated the code base from Ember 1.8.0 to 2.4.0, hence achieving stability and
                                developed new changes and features to the entire network.
                            </p>
                            <p>
                                Sciensa - Implemented in-house Ember add-on libraries along with new features and Unit and Integration tests into
                                the new CVC’s portal.
                            </p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-info">November 2016 - December 2017</span>
                        </div>
                    </div>
                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">Frontend Developer</h3>
                            <div className="subheading mb-3">Eventifier · Spacebound Web Labs Pvt Ltd</div>
                            <p>
                                Developed two new live wall interfaces for comedy clubs and live events using AngularJS and Firebase.
                            </p>
                            <p>
                                Created embed layout in SMJockey’s (social media content aggregation platform) which increased the
                                outreach of the company by 20%.
                            </p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-info">April 2016 - June 2016</span>
                        </div>
                    </div>
                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">Frontend Developer</h3>
                            <div className="subheading mb-3">AppBrowzer · Roid Technologies Pvt Ltd</div>
                            <p>
                                Single-handedly developed various Appbrowzer’s in-house tools like JSON editor and XMPP publisher for push
                                notifications.
                            </p>
                            <p>
                                Implemented Real-Time Push Notification functionality using XMPP and Node.
                            </p>
                            <p>
                                Developed Appbrowzer’s admin dashboard and e-commerce store creator for small businesses to enable them to grow in
                                the world of online shopping.
                            </p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-info">July 2010 - December 2011</span>
                        </div>
                    </div>
                </div>
            </section>
            
        );
    }

}

export default Experience;