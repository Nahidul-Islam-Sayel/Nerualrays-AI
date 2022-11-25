import React from "react";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FiChevronsRight } from "react-icons/fi";
import logo from "../img/logo.png";
import "./footer.css";

const Footer = () => {
    return (
        <div className="mt-5">
            <div className="footer-bg">
                <div className="container upside row">
                    <br />
                    <br />
                    <br />
                    <div className="col-xl-3">
                        <br /> <br />
                        <img src={logo} alt="" className="footer-logo" />
                    </div>
                    <div className="col-xl-3">
                        <br /> <br />
                        <h4>AI SERVICES</h4>
                        <br />
                        <h6 className="textfooter">
                            {" "}
                            <FiChevronsRight className="icon" />
                            Data Strategy Consulting
                        </h6>
                        <h6 className="textfooter">
                            {" "}
                            <FiChevronsRight className="icon" /> Data Science & AI Consulting
                        </h6>
                        <h6 className="textfooter">
                            <FiChevronsRight className="icon" />
                            AI Solution Development
                        </h6>
                        <h6>
                            {" "}
                            <FiChevronsRight className="icon" />
                            AI-Driven Automation
                        </h6>
                    </div>
                    <div className="col-xl-3">
                        <br /> <br />
                        <h4>AI SOLUTIONS</h4>
                        <br />
                        <h6 className="textfooter">
                            {" "}
                            <FiChevronsRight className="icon" />
                            Electric Vehicle Charging <br /> <br /> (EVC)
                        </h6>
                        <h6 className="textfooter">
                            {" "}
                            <FiChevronsRight className="icon" /> Environmental Risk <br />{" "}
                            <br /> Reduction
                        </h6>
                        <h6 className="textfooter">
                            <FiChevronsRight className="icon" />
                            Preventive Maintenance
                        </h6>
                        <h6 className="textfooter">
                            {" "}
                            <FiChevronsRight className="icon" />
                            Remote Health Monitoring
                        </h6>
                        <h6 className="textfooter">
                            {" "}
                            <FiChevronsRight className="icon" />
                            Smart Warehouse <br /> Management
                        </h6>
                        <h6>
                            {" "}
                            <FiChevronsRight className="icon" />
                            Virtual Reality For Smart <br /> Engineering
                        </h6>
                    </div>
                    <div className="col-xl-3">
                        <br />
                        <br />
                        <h4>CONTACT US</h4>
                        <h6>
                            {" "}
                            <FiChevronsRight className="icon" /> hello@neuralrays.ai
                        </h6>
                        <h5>FOLLOW US</h5>
                        <BsFacebook className="socialicon" />
                        <AiFillLinkedin className="socialicon" />
                        <AiFillTwitterCircle className="socialicon" />
                    </div>
                </div>
            </div>

            <div className="downside">
                <div className="container">
                    <div className="row">
                        <p className="mt-3">
                            <br />
                            Copyright © 2020 NeuralRays AI Ltd. NeuralRays AI Is A Private
                            Limited Company Registered In England And Wales With Company
                            Number 11653278 And <br /> VAT Number 316 5505 17.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
