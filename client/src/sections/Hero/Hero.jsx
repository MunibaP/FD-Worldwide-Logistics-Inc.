import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaPlay,
  FaGlobeAmericas,
  FaShieldAlt,
  FaTruck
} from "react-icons/fa";

import Button from "../../components/Button/Button";

import HeroScene from "./HeroScene";

import "./Hero.css";


function Hero() {

    return (

        <section
            className="hero"
            id="top"
        >

            <div className="hero-grid"></div>

            <div className="hero-glow hero-glow--blue"></div>

            <div className="hero-glow hero-glow--red"></div>


            <div className="hero-inner">


                {/* TEXT */}

                <motion.div
                    className="hero-content"

                    initial={{
                        opacity: 0,
                        x: -30
                    }}

                    animate={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        duration: 0.7
                    }}
                >

                    <div className="hero-kicker">

                        <span></span>

                        CROSS-BORDER
                        • E-COMMERCE
                        • FINAL MILE

                    </div>


                    <h1>

                        Moving what matters.

                        <br />

                        <em>
                            Across every mile.
                        </em>

                    </h1>


                    <p>

                        North American freight,
                        global forwarding,
                        warehousing and fulfillment —
                        coordinated through one dependable
                        logistics partner.

                    </p>


                    <div className="hero-buttons">

                        <Button href="#quote">

                            Request a Quote

                            <FaArrowRight size={17} />

                        </Button>


                        <Button
                            href="#services"
                            variant="outline"
                        >

                            <FaPlay size={15} />

                            Explore Solutions

                        </Button>

                    </div>


                    <div className="hero-trust">

                        <span>

                            <FaGlobeAmericas />

                            North America + Global

                        </span>


                        <span>

                            <FaShieldAlt />

                            Shipment visibility

                        </span>


                        <span>

                            <FaTruck />

                            End-to-end options

                        </span>

                    </div>

                </motion.div>


                {/* VISUAL */}

                <motion.div
                    className="hero-visual"

                    initial={{
                        opacity: 0,
                        scale: 0.94
                    }}

                    animate={{
                        opacity: 1,
                        scale: 1
                    }}

                    transition={{
                        duration: 0.9
                    }}
                >

                    <HeroScene />

                </motion.div>

            </div>

        </section>

    );

}


export default Hero;