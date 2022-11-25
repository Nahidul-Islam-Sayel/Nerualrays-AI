import React from "react";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Footer from "../Footer/Footer";
import picture from '../img/Nahidul Islam Sayel.jpg';
import Manu from "../Nevbar/Manu";
import './AboutSection.css';
const AboutSection = () => {
    return (
        <div>
            <Manu />
            <br />
            <br /> <br /> <br /> <br /> <br />
            <div className="abouttitle d-flex aligns-items-center justify-content-center ">
                <h1 className="abouth1  mt-5">About Us</h1>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 text">
                        <p>
                            Inspired by the ideals of ethical AI (artificial intelligence), we
                            formed NeuralRays AI in 2018 to help clients use emerging
                            technologies to create innovative solutions that deliver positive
                            human and business outcomes. <br /> <br />  In our increasingly connected world,
                            we believe passionately that AI’s real potential is as a
                            technological force for good. If applied positively, it has the
                            potential to accelerate the digital economy and the transformation
                            of life at large. For this to succeed, AI solutions must be
                            trustworthy, predictable, fair and transparent. These principles
                            also lie at the heart of all we do in NeuralRays AI, from how we
                            treat our staff to the ways in which we engage with our clients
                            and their clients. <br /> <br /> With offices in London, UK, and Chennai, India,
                            and working with technology partners globally, we are well
                            positioned to deliver future-proofed solutions across industries,
                            sectors and locations. Contact us if you’d like to learn more.
                            We’d love to hear from you.

                        </p>
                        <button type="button" class="btn btn-primary">Contact Us</button>  <br /> <br />
                        <BsFacebook className="socialicon" />
                        <AiFillLinkedin className="socialicon" />
                        <AiFillTwitterCircle className="socialicon" />


                    </div>
                    <div className="col-md-3 profile">
                        <div class="profilebody" >
                            <img src={picture} class="card-img-top" alt="..." />
                            <div class="profileinfo mt-3">
                                <h5 class="profiletitle">Nahidul Islam</h5>
                                <p class="profilepostion">Founder CEO</p>
                                <AiFillLinkedin className="socialicon" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 profile">
                        <div class="profilebody" >
                            <img src={picture} class="card-img-top" alt="..." />
                            <div class="profileinfo mt-3">
                                <h5 class="profiletitle">Sayel Islam</h5>
                                <p class="profilepostion">Co Founder</p>
                                <AiFillLinkedin className="socialicon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default AboutSection;
