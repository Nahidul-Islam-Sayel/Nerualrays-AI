import React from "react";
import img1 from "../img/Img1.png";
import img2 from "../img/Img2.png";
import img3 from "../img/Img3.png";
import img4 from "../img/Img4.png";
import Underline from "../img/Underline.png";
import "./Services.css";
const Services = () => {
    return (
        <div className="container mt-5">
            <h1 className="services ">
                All Services <br /> <img src={Underline} alt="" className="underline" />
            </h1>
            <div className="row">
                <div className="col-lg-3">
                    <div class="card">
                        <img src={img1} class=" " alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Data Strategy Consulting</h5>
                            <p class="card-text">
                                Every AI strategy is built upon a successful data strategy. We
                                can help you to get started on your AI journey.
                            </p>
                            <h5 class="servicesread">Read More</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div class="card">
                        <img src={img2} class=" " alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Data Science & AI Consulting</h5>
                            <p class="card-text">
                                Harness the power of data science to shape your AI and machine
                                learning solutions. We help you engineer future-ready solutions
                                that are both agile and scaleable.
                            </p>
                            <h5 class="servicesread">Read More</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div class="card">
                        <img src={img3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">AI Solution Development</h5>
                            <p class="card-text">
                                We work with you and your teams to apply AI to solve tomorrow’s
                                business problems today.
                            </p>
                            <h5 class="servicesread">Read More</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div class="card">
                        <img src={img4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">AI-Driven Automation</h5>
                            <p class="card-text">
                                AI-driven automation is eliminating mundane and repetitive work,
                                freeing up people to focus on more value-adding activities in
                                which humans excel.
                            </p>
                            <h5 class="servicesread">Read More</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
