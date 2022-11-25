import React from "react";
import Footer from "../Footer/Footer";
import Service from "../img/Service11.png";
import Service44 from "../img/Service22.png";
import Service33 from "../img/Service33.png";
import Service22 from "../img/Service44.png";
import underline from "../img/Underline.png";
import Manu from "../Nevbar/Manu";
import "./AllService.css";
const AllService = () => {
    return (
        <div>
            <Manu />
            <br />
            <br /> <br /> <br /> <br /> <br />
            <div className="abouttitle d-flex aligns-items-center justify-content-center ">
                <h1 className="abouth1  mt-5">AI Services</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mt-5 OurServicees">
                        <h1>Data Strategy Consulting</h1>
                        <img src={underline} alt="" />
                        <br /> <br />
                        <h6>
                            Every AI strategy is built upon a successful data strategy. We can
                            help you to get started on your AI journey.
                        </h6>
                        <br />
                        <p>
                            We provide cross-functional teams of data engineers, data
                            scientists and machine learning/AI experts to work with your
                            teams. We help define the right data strategy to meet your
                            business objectives and desired outcomes. We define the optimum
                            data architecture and governance to enable you to integrate the
                            various data silos in your organisation.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img src={Service} alt="" />
                    </div>
                </div>
                <br /> <br />
                <br />
                <div className="row">
                    <div className="col-lg-6">
                        <img src={Service22} alt="" />
                    </div>
                    <div className="col-lg-6  OurServicees">
                        <h1>Data Science and AI Consulting</h1>
                        <img src={underline} alt="" />
                        <br /> <br />
                        <h6>
                            Harness the power of data science to shape your AI and machine
                            learning solutions. We help you engineer future-ready solutions
                            that are both agile and scaleable.
                        </h6>
                        <br />
                        <p>
                            Our domain experts work with your teams to identify the use cases
                            that maximise the return on your machine learning and AI
                            investments. This includes developing rapid prototypes and minimum
                            viable products (MVPs). More importantly, we are able to help you
                            scale these optimally into full scale production systems that
                            deliver your desired business outcomes. Taking an outcomes-based
                            approach, we offer advisory services that help your teams develop
                            capabilities around modern and emerging technologies such as AI,
                            machine learning, computer vision, natural language processing,
                            predictive modelling, Blockchain, social media analytics and more.
                        </p>
                    </div>
                </div>
                <br /> <br />
                <br />
                <div className="row">
                    <div className="col-lg-6 mt-5 OurServicees">
                        <h1>AI Solution Development</h1>
                        <img src={underline} alt="" />
                        <br /> <br />
                        <h6>
                            We work with you and your teams to apply AI to solve tomorrow’s
                            business problems today.
                        </h6>
                        <br />
                        <p>
                            Whether applied to your day-to-day operations or to your next
                            business transformation initiative, AI can both supercharge the
                            performance and efficiency of business solutions and reduce the
                            associated costs and risks of business operations.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img src={Service33} alt="" />
                    </div>
                </div>
                <br /> <br />
                <br />
                <div className="row">
                    <div className="col-lg-6">
                        <img src={Service44} alt="" />
                    </div>
                    <div className="col-lg-6  OurServicees">
                        <h1>AI-Driven Automation</h1>
                        <img src={underline} alt="" />
                        <br /> <br />
                        <h6>
                            AI-driven automation is eliminating mundane and repetitive work,
                            freeing up people to focus on more value-adding activities in
                            which humans excel. We are independent experts ideally placed to
                            support your automation aspirations.
                        </h6>
                        <br />
                        <p>
                            Automation can be applied to augment human productivity across
                            both front and back office business functions, as well as
                            commodity IT functions including application support and testing.
                            Our technology independence allows us to choose the best
                            automation framework to deliver the best outcomes for your
                            business.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AllService;
