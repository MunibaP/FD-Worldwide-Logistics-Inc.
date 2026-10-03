// import {
//     ArrowRight
// } from "lucide-react";

// import Button from "../../components/Button/Button";

// import "./CTA.css";


// function CTA() {

//     return (

//         <section
//             className="cta"
//             id="quote"
//         >

//             <div className="container cta-inner">

//                 <div>

//                     <span className="eyebrow">
//                         READY TO MOVE?
//                     </span>

//                     <h2>
//                         Let's build the right
//                         logistics plan.
//                     </h2>

//                     <p>
//                         Tell us what you're moving,
//                         where it needs to go and
//                         what matters most.
//                     </p>

//                 </div>


//                 <Button href="#contact">

//                     Request a Quote

//                     <ArrowRight />

//                 </Button>

//             </div>

//         </section>

//     );

// }


// export default CTA;


import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

import "./CTA.css";


const CTA = () => {

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

        <section
            className="cta"
            id="cta"
        >

            {/* =========================================
                BACKGROUND DECORATION
            ========================================= */}

            <div
                className="cta-atmosphere"
                aria-hidden="true"
            >

                <span className="cta-glow cta-glow-one" />
                <span className="cta-glow cta-glow-two" />

                <span className="cta-background-word">
                    MOVE
                </span>

            </div>


            <div className="cta-container">


                {/* =========================================
                    CONTENT
                ========================================= */}

                <motion.div
                    className="cta-content"

                    initial={{
                        opacity: 0,
                        y: 30
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    viewport={{
                        once: true,
                        amount: 0.3
                    }}

                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                >


                    <div className="cta-eyebrow">

                        <span className="cta-eyebrow-line" />

                        <span>
                            READY TO MOVE?
                        </span>

                    </div>


                    <h2 className="cta-title">

                        <span>
                            Your Shipment.
                        </span>

                        <span>
                            Our Network.
                        </span>

                        <span className="cta-title-accent">
                            Let's Get It Moving.
                        </span>

                    </h2>


                    <p className="cta-description">

                        Tell us where it needs to go and
                        we'll help you find the right logistics
                        solution for your shipment.

                    </p>


                    {/* =====================================
                        ACTIONS
                    ===================================== */}

                    <div className="cta-actions">


                        <button
                            className="cta-primary"
                            type="button"
                            onClick={() =>
                                scrollToSection("quote")
                            }
                        >

                            <span>
                                GET A QUOTE
                            </span>

                            <span className="cta-button-icon">

                                <FaArrowRight />

                            </span>

                        </button>


                        <button
                            className="cta-secondary"
                            type="button"
                            onClick={() =>
                                scrollToSection("contact")
                            }
                        >

                            <span>
                                CONTACT US
                            </span>

                            <FaArrowRight />

                        </button>


                    </div>


                </motion.div>


                {/* =========================================
                    ROUTE VISUAL
                ========================================= */}

                <motion.div
                    className="cta-visual"

                    initial={{
                        opacity: 0,
                        x: 40
                    }}

                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}

                    viewport={{
                        once: true,
                        amount: 0.25
                    }}

                    transition={{
                        duration: 0.8,
                        delay: 0.1,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    aria-hidden="true"
                >


                    <div className="cta-orbit cta-orbit-one" />

                    <div className="cta-orbit cta-orbit-two">
                        {/* <span className="cta-orbit-marker" /> */}
                    </div>


                    {/* START */}

                    <div className="cta-point cta-point-start">

                        <span className="cta-point-dot" />

                        <span className="cta-point-label">
                            PICKUP
                        </span>

                    </div>


                    {/* ROUTE */}

                    <div className="cta-route">

                        <span className="cta-route-progress" />
                        
                        {/* moving blue box with red tape*/}

                        <span className="cta-package">
                            <span className="cta-package-tape"></span>
                        </span>
                    </div>


                    {/* DESTINATION */}

                    <div className="cta-point cta-point-end">

                        <span className="cta-point-dot" />

                        <span className="cta-point-label">
                            DESTINATION
                        </span>

                    </div>


                    {/* CENTER */}

                    <div className="cta-visual-center">

                        <span className="cta-visual-number">
                            01
                        </span>

                        <strong>
                            EVERY MILE
                        </strong>

                        <span>
                            CONNECTED
                        </span>

                    </div>


                </motion.div>


            </div>


            {/* =========================================
                BOTTOM STRIP
            ========================================= */}

            <div className="cta-bottom">

                <div className="cta-bottom-inner">

                    <span>
                        FASTDROP WORLDWIDE LOGISTICS
                    </span>

                    <div className="cta-bottom-values">
                        <span>
                            EFFICIENT
                        </span>

                        <span className="cta-bottom-dot" />

                        <span>
                            CONNECTED
                        </span>

                        <span className="cta-bottom-dot" />

                        <span>
                            RELIABLE
                        </span>
                    </div>

                </div>

            </div>


        </section>

    );

};


export default CTA;