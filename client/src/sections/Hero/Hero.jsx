import { motion } from "framer-motion";

import {
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
            {/* SUBTLE BACKGROUND GRID */}
            <div className="hero-grid"></div>


               {/* SUBTLE FLOWING BACKGROUND WAVES */}
                <div className="hero-waves" aria-hidden="true">

                    <svg
                        viewBox="0 0 1440 420"
                        preserveAspectRatio="none"
                    >

                        <path
                            className="hero-wave hero-wave--1"
                            d="M-100 310 C180 225 390 330 650 285 C900 242 1110 180 1540 215"
                        />

                        <path
                            className="hero-wave hero-wave--2"
                            d="M-100 335 C190 250 400 355 665 310 C920 266 1130 205 1540 240"
                        />

                        <path
                            className="hero-wave hero-wave--3"
                            d="M-100 360 C200 275 415 380 680 335 C940 291 1150 230 1540 265"
                        />

                        <path
                            className="hero-wave hero-wave--4"
                            d="M-100 385 C210 300 430 405 695 360 C960 316 1170 255 1540 290"
                        />

                        <path
                            className="hero-wave hero-wave--5"
                            d="M-100 410 C220 325 445 430 710 385 C980 341 1190 280 1540 315"
                        />
                    </svg>

                </div>

            {/* ATMOSPHERIC GLOWS */}
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

                        {/* <span></span> */}

                        FASTDROP WORLDWIDE LOGISTICS INC.

                    </div>


                    <h1>

                        Moving what matters.

                        <br />

                            Across every <em> mile. </em>

                    </h1>


                    <p>

                        From freight to fulfillment, FastDrop connects every stage of your
                        supply chain with dependable logistics built for speed, visibility
                        and control.

                    </p>


                    <div className="hero-buttons">

                        <Button href="#quote">

                            Request a Quote

                        </Button>


                        <Button
                            href="#services"
                            variant="outline"
                        >

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