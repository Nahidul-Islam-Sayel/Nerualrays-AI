import React from 'react';
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Footer from '../Footer/Footer';
import Manu from "../Nevbar/Manu";
import './ContactSection.css';
const ContactSection = () => {
    return (
        <div>
            <Manu />
            <br />
            <br /> <br /> <br /> <br /> <br />
            <div className="abouttitle d-flex aligns-items-center justify-content-center ">
                <h1 className="abouth1  mt-5">Contact Us</h1>
            </div>
            <br /><br /><br />
            <div className="container contactsection">
                <div className="row">
                    <div className="col-xl-5 contactsection_text">
                        <h6>Do you have questions about getting started?</h6>
                        <p>If so, drop us a line to find out more. <br /> You can enter your message directly on this page, or email us at</p>
                        <h6>We’re based in London, UK, and Chennai, India, and serve clients globally.</h6>
                        <p>Wherever you are, we’d love to hear from you.</p>
                        <br />
                        <BsFacebook className="socialicon" />
                        <AiFillLinkedin className="socialicon" />
                        <AiFillTwitterCircle className="socialicon" />
                        <br /><br /><br />
                    </div>
                    <div className="col-xl-7">
                        <div className="box">
                            <h2>SAY HELLO</h2>
                            <form action="">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <input type="text" name="" placeholder='Full Name' id="" className='twopart form-control' />
                                    </div>
                                    <div className="col-xl-6">
                                        <input type="text" name="" placeholder='Phone' id="" className='twopart form-control' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <input type="text" name="" placeholder='E-Mail' id="" className='twopart form-control' />
                                    </div>
                                    <div className="col-xl-6">
                                        <input type="text" name="" placeholder='Submit' id="" className='twopart form-control' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-1"></div>
                                    <div className="col-md-10">
                                        <input type="text" placeholder='Message' name="" className='form-control  onepart ' id="" />
                                    </div>
                                </div>
                                <br />
                                <button type="button" class="btn btn-primary ">
                                    Submit
                                </button>
                                <br /> <br />
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <Footer />
        </div>
    );
};

export default ContactSection;