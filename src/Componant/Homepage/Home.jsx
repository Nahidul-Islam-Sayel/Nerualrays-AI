import React from "react";
import AllSolution from "../AllSolution/AllSolution";
import ContactUs from "../Contact Us/ContactUs";
import Footer from "../Footer/Footer";
import Nevbar from "../Nevbar/Nevbar";
import Services from "../Services/Services";
import "./style.css";
const Home = () => {
    return (
        <div>
            <Nevbar />
            <Services />
            <AllSolution />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;
