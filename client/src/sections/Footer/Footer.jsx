// import logo from "../../assets/logo/UpdatedLogo.png";

// import "./Footer.css";


// function Footer() {

//     return (

//         <footer className="footer">

//             <div className="container footer-grid">


//                 <div>

//                     <img
//                         src={logo}
//                         alt="Fast Drop Logistics"
//                     />

//                     <p>
//                         North American freight,
//                         global forwarding,
//                         warehousing, fulfillment
//                         and final-mile logistics.
//                     </p>

//                 </div>


//                 <div>

//                     <strong>
//                         Explore
//                     </strong>

//                     <a href="#services">
//                         Services
//                     </a>

//                     <a href="#about">
//                         About
//                     </a>

//                     <a href="#industries">
//                         Industries
//                     </a>

//                     <a href="#calculator">
//                         Calculator
//                     </a>

//                 </div>


//                 <div>

//                     <strong>
//                         Tools
//                     </strong>

//                     <a href="#tracking">
//                         Track Shipment
//                     </a>

//                     <a href="#quote">
//                         Request Quote
//                     </a>

//                     <a href="#network">
//                         Global Network
//                     </a>

//                     <a href="#contact">
//                         Contact
//                     </a>

//                 </div>


//                 <div>

//                     <strong>
//                         Contact
//                     </strong>

//                     <span>
//                         Mississauga, Ontario
//                     </span>

//                     <span>
//                         info@fastdropinc.com
//                     </span>

//                 </div>

//             </div>


//             <div className="footer-bottom">

//                 <span>
//                     © {new Date().getFullYear()}
//                     {" "}
//                     Fast Drop Worldwide Logistics Inc.
//                 </span>

//                 <a href="#top">
//                     Back to top ↑
//                 </a>

//             </div>

//         </footer>

//     );

// }


// export default Footer;


import { FaArrowRight } from "react-icons/fa6";

import FooterMap from "./FooterMap";

import logo from "../../assets/logo/LogoFinal.png";

import "./Footer.css";


const Footer = () => {

    const scrollToSection = (id) => {

        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    };


    return (

        <footer
            className="footer"
            id="footer"
        >

            {/* =========================================
                BACKGROUND
            ========================================= */}

            <div
                className="footer-atmosphere"
                aria-hidden="true"
            >

                <span className="footer-glow footer-glow-one" />

                <span className="footer-background-word">
                    WORLDWIDE
                </span>

            </div>


            <div className="footer-container">


                {/* =========================================
                    TOP
                ========================================= */}

                <div className="footer-top">


                    {/* BRAND */}

                    <div className="footer-brand">

                        <a
                            href="#home"
                            className="footer-logo"
                            onClick={(event) => {
                                event.preventDefault();
                                scrollToSection("home");
                            }}
                            aria-label="FastDrop Worldwide Logistics home"
                        >

                            <img
                                src={logo}
                                alt="FastDrop Worldwide Logistics"
                                className="footer-logo-image"
                            />

                            {/* <span className="footer-logo-name">
                                FASTDROP
                            </span>

                            <span className="footer-logo-subtitle">
                                WORLDWIDE LOGISTICS
                            </span> */}

                        </a>


                        <p className="footer-brand-description">

                            Connecting businesses, shipments and
                            destinations through reliable logistics
                            solutions across Canada and worldwide.

                        </p>


                        <button
                            className="footer-move-link"
                            type="button"
                            onClick={() =>
                                scrollToSection("quote")
                            }
                        >

                            <span>
                                START A SHIPMENT
                            </span>

                            <span className="footer-move-icon">
                                <FaArrowRight />
                            </span>

                        </button>

                    </div>


                    {/* =====================================
                        NAVIGATION
                    ===================================== */}

                    <div className="footer-column">

                        <span className="footer-column-title">
                            EXPLORE
                        </span>

                        <nav
                            className="footer-links"
                            aria-label="Footer navigation"
                        >

                            <button
                                type="button"
                                onClick={() =>
                                    scrollToSection("about")
                                }
                            >
                                About
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    scrollToSection("services")
                                }
                            >
                                Services
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    scrollToSection("industries")
                                }
                            >
                                Industries
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    scrollToSection("contact")
                                }
                            >
                                Contact
                            </button>

                        </nav>

                    </div>


                    {/* =====================================
                        SERVICES
                    ===================================== */}

                    <div className="footer-column">

                        <span className="footer-column-title">
                            LOGISTICS
                        </span>

                        <div className="footer-links">

                            <button
                                type="button"
                                onClick={() =>
                                    scrollToSection("services")
                                }
                            >
                                Ground
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    scrollToSection("services")
                                }
                            >
                                Air
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    scrollToSection("services")
                                }
                            >
                                Ocean
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    scrollToSection("tracking")
                                }
                            >
                                Track Shipment
                            </button>

                        </div>

                    </div>


                    {/* =====================================
                        CONTACT
                    ===================================== */}

                    <div className="footer-column footer-contact">

                        <span className="footer-column-title">
                            CONNECT
                        </span>


                        <div className="footer-contact-item">

                            <small>
                                EMAIL
                            </small>

                            <a href="mailto:info@fastdropinc.com">
                                info@fastdropinc.com
                            </a>

                        </div>

                        <div className="footer-contact-item">

                            <small>
                                PHONE
                            </small>

                            <a href="tel:+1XXXXXXXXXX">
                                +1 942-288-1020
                            </a>

                        </div>

                        <div className="footer-contact-item">

                            <small>
                                ADDRESS
                            </small>

                            <span>
                                5004 Timberlea Blvd, Unit 45
                            </span>

                            <span>
                                Mississauga, ON L4W 5C5
                            </span>

                            <span>
                                Canada
                            </span>

                        </div>


                        <div className="footer-contact-item">

                            <small>
                                SERVICE AREA
                            </small>

                            <span>
                                Canada & Worldwide
                            </span>

                        </div>

                    </div>

                    {/* =====================================
                        LOCATION
                    ===================================== */}

                    <div className="footer-location">

                        <span className="footer-column-title">
                            OUR LOCATION
                        </span>

                        <FooterMap />

                    </div>


                </div>


                {/* =========================================
                    BOTTOM
                ========================================= */}

                <div className="footer-bottom">

                    <p>
                        © {new Date().getFullYear()} FastDrop Worldwide
                        Logistics Inc. All rights reserved.
                    </p>


                    <div className="footer-legal">

                        <a href="/privacy">
                            Privacy
                        </a>

                        <span />

                        <a href="/terms">
                            Terms
                        </a>

                    </div>

                </div>


            </div>

        </footer>

    );

};


export default Footer;