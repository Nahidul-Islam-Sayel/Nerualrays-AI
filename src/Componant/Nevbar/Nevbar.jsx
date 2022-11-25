import React from "react";
import Manu from "./Manu";
import "./Nevbar.css";
const Nevbar = () => {

    return (
        <div className="nev-bg">
            <Manu />
            <br /> <br /> <br /> <br /> <br /> <br />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 nev-text">
                        <h1>
                            Using Artificial Intelligence to <br /> make socity smarter and
                            safe
                        </h1>
                        <br />
                        <p>
                            We apply the principles of either Al to help create better world.
                            We think big but are wise enough to know when to start small. Most
                            importanly, we scale our AI solutions quickly based around real
                            human feedback Your feedback. Are you ready?
                        </p>

                        <button type="button" class="btn btn-primary nev-button">
                            Explore Now{" "}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nevbar;
