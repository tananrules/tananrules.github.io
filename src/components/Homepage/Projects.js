import React, { Component } from "react";

class Projects extends Component {

    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column">
                <div className="my-auto">
                    <h2 className="mb-5">Academic Projects</h2>
                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h4 className="mb-0">Recommendation and Prediction Engine</h4>
                            <div>Made a recommendation engine on Jupyter Notebook with Python 3 using Airbnb NYC Kaggle data utilizing SVD Matrix Factorization, Semantic Analysis and Linear Regression.</div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-info">Fall 2018</span>
                        </div>
                    </div>
                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h4 className="mb-0">Netflix Prototype</h4>
                            <div>Developed a prototype similar to Netflix.com to enable movie watching and computed statistics and financial reports using Spring-boot and React.</div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-info">Fall 2018</span>
                        </div>
                    </div>
                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h4 className="mb-0">Venmo Redesign</h4>
                            <div>Redesigned Venmo IOS app as a part of Human Computation Interaction assignment utilizing the design best practices and User Personas and analyzed the results for the newly developed prototype.</div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-info">Fall 2018</span>
                        </div>
                    </div>
                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h4 className="mb-0">Fadango Prototype</h4>
                            <div>Developed fadango.com like prototype for enabling movie listing and booking along with Theatre management and movie management portals for editing, adding, removing theatre and movies from the platform.</div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-info">Spring 2018</span>
                        </div>
                    </div>
                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h4 className="mb-0">Autochain - Built on Blockchain</h4>
                            <div>Built a blockchain network for automobile manufacturers to add their newly manufactured vehicles into the network in order to maintain a safe directory and history of vehicles for future buyers and used car trading history and authenticity.</div>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-info">Spring 2018</span>
                        </div>
                    </div>
                </div>
            </section>

        );
    }

}

export default Projects;