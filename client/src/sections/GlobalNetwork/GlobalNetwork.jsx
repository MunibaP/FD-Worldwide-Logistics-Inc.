// import "./GlobalNetwork.css";


// function GlobalNetwork() {

//     return (

//         <section
//             className="network section-pad"
//             id="network"
//         >

//             <div className="container">

//                 <div className="section-heading">

//                     <span className="eyebrow">
//                         GLOBAL NETWORK
//                     </span>

//                     <h2>
//                         North American strength.
//                         Global reach.
//                     </h2>

//                     <p>
//                         Ground transportation across North
//                         America with international air and
//                         ocean forwarding capabilities.
//                     </p>

//                 </div>


//                 <div className="network-map">

//                     <div className="network-grid"></div>


//                     <div className="network-ring ring-1"></div>

//                     <div className="network-ring ring-2"></div>


//                     <div className="network-route route-a"></div>

//                     <div className="network-route route-b"></div>

//                     <div className="network-route route-c"></div>


//                     <span className="network-label canada">
//                         CANADA
//                     </span>

//                     <span className="network-label usa">
//                         USA
//                     </span>

//                     <span className="network-label global">
//                         GLOBAL
//                     </span>


//                     <div className="network-center">

//                         <span>
//                             FD
//                         </span>

//                         <strong>
//                             FAST DROP
//                         </strong>

//                         <small>
//                             CONNECTED MOVEMENT
//                         </small>

//                     </div>

//                 </div>

//             </div>

//         </section>

//     );

// }


// export default GlobalNetwork;

import { motion } from "framer-motion";

import "./GlobalNetwork.css";

import globe from "../../assets/GlobalNetwork/Globe.png";
// import ship from "../../assets/GlobalNetwork/FastDropShipWater.png";
// import highway from "../../assets/GlobalNetwork/TruckRoute.png";
// import highway from "../../assets/GlobalNetwork/TruckAndShip.png";
import highway from "../../assets/GlobalNetwork/TruckAndShipImg.png";
import plane from "../../assets/GlobalNetwork/Airplane.png";

import {
    FaTruck,
    FaPlane,
    FaShip
} from "react-icons/fa6";

const GlobalNetwork = () => {
    return (
        <section className="global-network" id="global-network">
            <div className="global-network-container">

                {/* =========================
                    INTRO CONTENT
                ========================= */}
                 <motion.div
                    className="global-network-content"

                    initial={{
                        opacity: 0,
                        y: 35
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    viewport={{
                        once: true,
                        amount: 0.25
                    }}

                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                >

                    <div className="global-network-eyebrow">

                        <span className="global-network-eyebrow-line"></span>

                        <span>
                            GLOBAL NETWORK
                        </span>

                    </div>


                    <h2 className="global-network-title">

                        From Here to

                        <span>
                            Anywhere.
                        </span>

                    </h2>


                    <h3 className="global-network-tagline">

                        North American strength. Global reach.

                    </h3>


                    <p className="global-network-description">

                        Ground transportation across North America,
                        connected with international air and ocean
                        forwarding capabilities.

                    </p>


                    <div className="global-network-modes">

                        <motion.div
                            className="global-network-mode"
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.55,
                                delay: 0.35,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <FaTruck className="global-network-mode-icon" />

                            <strong>Ground Transport</strong>

                            <span>
                                Across Canada, the U.S. and Mexico.
                            </span>
                        </motion.div>


                        <motion.div
                            className="global-network-mode"
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.55,
                                delay: 0.48,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <FaPlane className="global-network-mode-icon" />

                            <strong>Air Freight</strong>

                            <span>
                                Global air cargo solutions.
                            </span>
                        </motion.div>


                        <motion.div
                            className="global-network-mode"
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.55,
                                delay: 0.61,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <FaShip className="global-network-mode-icon" />

                            <strong>Ocean Freight</strong>

                            <span>
                                International ocean shipping.
                            </span>
                        </motion.div>

                    </div>

                </motion.div>


                {/* =========================
                    GLOBAL VISUAL
                ========================= */}
                <div className="global-network-visual">

                    {/* =========================
                        GLOBE
                    ========================= */}

                    <motion.div
                        className="global-network-globe"

                        initial={{
                            opacity: 0,
                            x: 45,
                            scale: 0.96
                        }}

                        whileInView={{
                            opacity: 1,
                            x: 0,
                            scale: 1
                        }}

                        viewport={{
                            once: true,
                            amount: 0.2
                        }}

                        transition={{
                            duration: 1.1,
                            delay: 0.15,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >

                        <img
                            src={globe}
                            alt="Global logistics network"
                        />

                        {/* =========================
                            MISSISSAUGA ORIGIN
                        ========================= */}
                        <motion.div
                            className="global-network-origin"

                            initial={{
                                opacity: 0,
                                scale: 0.6
                            }}

                            whileInView={{
                                opacity: 1,
                                scale: 1
                            }}

                            viewport={{
                                once: true
                            }}

                            transition={{
                                duration: 0.6,
                                delay: 1.1,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >

                            {/* Pulsing location point */}
                            <span className="global-network-origin-pulse"></span>


                            {/* Location label */}
                            <div className="global-network-origin-label">

                                <span className="global-network-origin-dot"></span>

                                <div className="global-network-origin-text">

                                    <strong>
                                        Canada
                                    </strong>

                                    <small>
                                        OUR BASE
                                    </small>

                                </div>

                            </div>

                        </motion.div>

                    </motion.div>

                    {/* =========================
                        AIR FREIGHT PLANE
                    ========================= */}
                    <div className="global-network-plane">
                        <img
                            src={plane}
                            alt="FastDrop air freight aircraft"
                        />
                    </div>

                </div>

            </div>


            {/* =========================
                HIGHWAY SCENE
            ========================= */}
            {/* <div className="global-network-highway">
                <img
                    src={highway}
                    alt="FastDrop truck travelling toward Toronto"
                />
            </div> */}

           <motion.div
                className="global-network-highway"
                initial={{
                    opacity: 0,
                    scale: 1.015
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1
                }}
                viewport={{
                    once: true,
                    amount: 0.08
                }}
                transition={{
                    duration: 1.4,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1]
                }}
            >
                <img
                    src={highway}
                    alt="FastDrop truck travelling toward Toronto"
                />
            </motion.div>

        </section>
    );
};

export default GlobalNetwork;