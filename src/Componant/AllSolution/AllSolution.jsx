import React from "react";
import secondside from "../img/secondside.png";
import sol1 from "../img/sol-1.png";
import sol2 from "../img/sol-2.png";
import sol3 from "../img/sol-3.png";
import sol4 from "../img/sol-4.png";
import sol5 from "../img/sol-5.png";
import sol7 from "../img/sol-7.png";
import underline from "../img/Underline.png";
import "./AllSolution.css";
const AllSolution = () => {
    return (
        <div className="solution-bg">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="container solution">
                <h1>
                    {" "}
                    All Solution <br />{" "}
                    <img src={underline} className="underline" alt="" srcset="" />{" "}
                </h1>
                <div className="full-img container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="sol-one-side row">
                                <div className="col-lg-2 border-img">
                                    <img src={sol1} alt="" srcset="" />
                                </div>
                                <div className="col-lg-10">
                                    <h5>ELECTRIC VEHICLE CHARGING (EVC)</h5>
                                    <p>
                                        Our EVC platform encourages the adoption and use of electric
                                        vehicles by addressing today’s challenges and issues around
                                        vehicle charging.
                                    </p>
                                    <h4>Read More</h4>
                                </div>
                            </div>
                            <div className="sol-one-side row">
                                <div className="col-lg-2 border-img">
                                    <img src={sol2} alt="" srcset="" />
                                </div>
                                <div className="col-lg-10">
                                    <h5>ENVIRONMENTAL RISK REDUCTION</h5>
                                    <p>
                                        A risk exchange in which organisations can create customised
                                        marketplaces for monetising and managing environmental
                                        risks. Using a combination of AI, geospatial analytics and
                                        distributed ledger technology, our platform supports the
                                        flexible and rapid open market collaboration between both
                                        the demand and supply sides of complex environmental
                                        stakeholder networks.
                                    </p>
                                    <h4>Read More</h4>
                                </div>
                            </div>
                            <div className="sol-one-side row">
                                <div className="col-lg-2 border-img">
                                    <img src={sol3} alt="" srcset="" />
                                </div>
                                <div className="col-lg-10">
                                    <h5>PREVENTIVE MAINTENANCE AND WORKER SAFETY</h5>
                                    <p>
                                        An AI solution delivering the benefits of Industry 4.0. It
                                        both identifies and prevents defects on the assembly line
                                        and protects the health and safety of workers.
                                    </p>
                                    <h4>Read More</h4>
                                </div>
                            </div>
                            <div className="sol-one-side row">
                                <div className="col-lg-2 border-img">
                                    <img src={sol4} alt="" srcset="" />
                                </div>
                                <div className="col-lg-10">
                                    <h5>REMOTE HEALTH MONITORING</h5>
                                    <p>
                                        A platform to assist with the real-time health monitoring of
                                        elderly and vulnerable people.
                                    </p>
                                    <h4>Read More</h4>
                                </div>
                            </div>
                            <div className="sol-one-side row">
                                <div className="col-lg-2 border-img">
                                    <img src={sol5} alt="" srcset="" />
                                </div>
                                <div className="col-lg-10">
                                    <h5>SMART WAREHOUSE MANAGEMENT</h5>
                                    <p>
                                        An end-to-end integrated solution to optimise efficiencies
                                        within a warehouse by combining the power of AI, IoT,
                                        Blockchain and edge computing with energy, environment,
                                        mobility, asset, resource and security management.
                                    </p>
                                    <h4>Read More</h4>
                                </div>
                            </div>
                            <div className="sol-one-side row">
                                <div className="col-xl-2 border-img">
                                    <img src={sol7} alt="" srcset="" />
                                </div>
                                <div className="col-lg-10">
                                    <h5>VIRTUAL REALITY FOR SMART ENGINEERING</h5>
                                    <p>
                                        Innovative engineering solutions created from the
                                        combination of virtual reality (VR) and building information
                                        modelling (BIM).
                                    </p>
                                    <h4>Read More</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <img src={secondside} alt="" className="secondside" />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br /> <br />
            <br />
            <br /> <br />
        </div>
    );
};

export default AllSolution;
