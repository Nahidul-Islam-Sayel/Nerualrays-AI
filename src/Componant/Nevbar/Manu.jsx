
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../img/logo.png';
import './Nevbar.css';
const Manu = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 90) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);
    return (
        <div
            className={
                colorChange
                    ? "navbar colorChange nevbarbackground"
                    : "navbar nevbarbackground"
            }
        >
            <nav class="container navbar navbar-expand-lg">
                <div class="container-fluid">
                    <img src={logo} className="navbar-brand" alt="" />
                    <button
                        class="navbar-toggler navbar-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ">
                            <li class="nav-item">

                                <NavLink to="/" exact className="nav-link">   Home    </NavLink>

                            </li>
                            <li class="nav-item">

                                <NavLink to="/aboutus" exact className="nav-link">     About Us  </NavLink>

                            </li>
                            <li class="nav-item">

                                <NavLink to="/ourservice" exact className="nav-link">          All Service </NavLink>

                            </li>
                            <li class="nav-item">
                                <NavLink to="/allsolution" exact className="nav-link">

                                    Al Solution
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/ContactUs" exact className="nav-link">
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Manu;