import React from "react";
import underline from "../img/Underline.png";
import "./ContactUs.css";
const ContactUs = () => {
    return (
        <div className="container Contact">
            <h1>We’re here for you !</h1>
            <img src={underline} className="underline" alt="" srcset="" />
            <p>Any questions? Drop us a line to learn more.</p>

            <button type="button" class="btn btn-primary  contact-button">
                Contact Us
            </button>
        </div>
    );
};

export default ContactUs;
