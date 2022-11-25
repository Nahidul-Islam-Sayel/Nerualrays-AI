import React from "react";
import Footer from "../Footer/Footer";
import img1 from "../img/Solution1.jpeg";
import img2 from "../img/Solution2.jpeg";
import img3 from "../img/Solution3.png";
import img4 from "../img/Solution4.jpeg";
import img5 from "../img/Solution5.png";
import img6 from "../img/Solution6.jpeg";
import underline from "../img/Underline.png";
import Manu from "../Nevbar/Manu";
import "./AllSolutionSection.css";
const AllSolutionSection = () => {
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
                        <h1>Electric Vehicle Charging (EVC)</h1>
                        <img src={underline} alt="" />
                        <br /> <br />
                        <h6>
                            Our EVC platform encourages the adoption and use of electric
                            vehicles by addressing today’s challenges and issues around
                            vehicle charging.
                        </h6>
                        <br />
                        <p>
                            To promote the use of electric vehicles as part of the electric
                            vehicle (EV) revolution, we are building an AI solution that will
                            incentivise citizens and organisations to be part of the EV
                            ecosystem. Underpinned by Blockchain technology, this platform
                            brings transparency across the value chain and addresses the
                            future demand for EV charging.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img src={img1} alt="" />
                    </div>
                </div>
                <br /> <br />
                <br />
                <div className="row">
                    <div className="col-lg-6">
                        <img src={img2} alt="" />
                    </div>
                    <div className="col-lg-6  OurServicees">
                        <h1>Environmental Risk Reduction</h1>
                        <img src={underline} alt="" />
                        <br /> <br />
                        <h6>
                            A risk exchange in which organisations can create customised
                            marketplaces for monetising and managing environmental risks.
                        </h6>
                        <br />
                        <p>
                            Using a combination of AI, geospatial analytics and distributed
                            ledger technology, our platform supports the flexible and rapid
                            open market collaboration between both the demand and supply sides
                            of complex environmental stakeholder networks. Importantly, it
                            incentivises funding and investment into distributed solutions to
                            combat flooding, water scarcity, water pollution and other
                            environmental challenges. Distributed ledger technology is used to
                            support the management of payments across a value chain throughout
                            the life cycle of each solution, enabling each investment to be
                            traced right through to each outcome. Ultimately, the platform can
                            be connected to IoT-enabled systems so that real-time verification
                            of services can trigger automated payments, and value chains can
                            automatically be flexed to respond to real-time events.
                        </p>
                    </div>
                </div>
                <br /> <br />
                <br />
                <div className="row">
                    <div className="col-lg-6 mt-5 OurServicees">
                        <h1>Preventive Maintenance and Worker Safety</h1>
                        <img src={underline} alt="" />
                        <br /> <br />
                        <h6>
                            An AI solution delivering the benefits of Industry 4.0. It both
                            identifies and prevents defects on the assembly line and protects
                            the health and safety of workers.
                        </h6>
                        <br />
                        <p>
                            Our multi-faceted solution helps industrial organisations improve
                            both quality and worker safety by identifying defects and hazards
                            within a manufacturing plant. It does this through a combination
                            of image, video and sensor-based analytics.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img src={img3} alt="" />
                    </div>
                </div>
                <br /> <br />
                <br />
                <div className="row">
                    <div className="col-lg-6">
                        <img src={img4} alt="" />
                    </div>
                    <div className="col-lg-6  OurServicees">
                        <h1>Remote Health Monitoring</h1>
                        <img src={underline} alt="" />
                        <br /> <br />
                        <h6>
                            A platform to assist with the real-time health monitoring of
                            elderly and vulnerable people.
                        </h6>
                        <br />
                        <p>
                            Our next generation health platform monitors and reports on the
                            health of patients and other elderly and vulnerable people. It
                            incorporates intelligent algorithms to monitor a person’s health,
                            working with mobile and web applications, and integrated with an
                            ‘SOS’ service.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 mt-5 OurServicees">
                        <h1>Smart Warehouse Management</h1>
                        <img src={underline} alt="" />
                        <br /> <br />
                        <h6>
                            An end-to-end integrated solution to optimise efficiencies within
                            a warehouse by combining the power of AI, IoT, Blockchain and edge
                            computing with energy, environment, mobility, asset, resource and
                            security management.
                        </h6>
                        <br />
                        <p>
                            Features include:
                            <ul>
                                <li>
                                    {" "}
                                    Smart Energy – sensor-based systems to control light,
                                    temperature and other electric equipment to optimise energy
                                    needs, thereby contributing to carbon footprint reduction.
                                </li>
                                <li>
                                    Smart Environment – active environment monitoring to track and
                                    predict indoor air pollution, fire and air circulation.
                                </li>
                                <li> Smart Mobility – real time vehicle and pallet status.</li>
                                <li>
                                    {" "}
                                    Smart Inventory – automated inventory management and
                                    geo-fencing.
                                </li>
                                <li>
                                    Smart Security – unauthorised access and product tracking.
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img src={img5} alt="" />
                    </div>
                </div>
                <br /> <br />
                <br />
                <div className="row">
                    <div className="col-lg-6">
                        <img src={img6} alt="" />
                    </div>
                    <div className="col-lg-6  OurServicees">
                        <h1>Virtual Reality for Smart Engineering</h1>
                        <img src={underline} alt="" />
                        <br /> <br />
                        <h6>
                            Innovative engineering solutions created from the combination of
                            virtual reality (VR) and building information modelling (BIM).
                        </h6>
                        <br />
                        <p>
                            Through our partnership with eLearning Studios, a market leader in
                            virtual reality solutions, our solution enables inspection of a
                            building during the design stage before construction has
                            commenced. This provides the real life experience of walking
                            through the building and identifying deviations as if walking
                            through the actual building. Designers can use virtual reality
                            technology to help their clients and potential clients envision
                            how a project is will look when completed, offering virtual tours
                            of buildings and spaces and seeking feedback around options.
                            Collaborating design teams can use virtual reality to assess
                            whether their designs are constructible. And people can be trained
                            in working in a new building before it has been completed. These
                            are just a few of the use cases of virtual reality in the built
                            environment. We’d love to discuss other ideas you might have too.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AllSolutionSection;
