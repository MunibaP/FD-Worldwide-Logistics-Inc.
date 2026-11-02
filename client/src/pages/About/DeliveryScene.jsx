
import { useEffect, useRef, useState } from "react";
import {
    motion,
    AnimatePresence,
    useReducedMotion,
} from "framer-motion";
import {
    FiCheck,
    FiTruck,
    FiGlobe,
    FiNavigation,
    FiAnchor,
} from "react-icons/fi";

import truck from "../../assets/About/DeliveryScene/FDLogisticsTruck.png";
import employee from "../../assets/About/DeliveryScene/FDDeliveryDriver.png";
import customer from "../../assets/About/DeliveryScene/FDCustomer.png";
import parcel from "../../assets/About/DeliveryScene/FDParcel.png";

import airplane from "../../assets/About/DeliveryScene/Airplane.png";
import ship from "../../assets/About/DeliveryScene/FastDropShipWater.png";
import building from "../../assets/About/DeliveryScene/CommericalAppartment.png"

import "./DeliveryScene.css";

/* ==========================================
   SCENE CONFIGURATION
========================================== */


const SCENES = [
    {
        id: "local",
        eyebrow: "LOCAL & REGIONAL DELIVERY",
        title: "Every Mile Matters.",
        description:
            "From local deliveries to regional connections, every shipment moves with care.",
        duration: 9000,
        icon: FiTruck,
    },
    {
        id: "air",
        eyebrow: "GLOBAL AIR FREIGHT",
        title: "Connecting Across Continents.",
        description:
            "Connecting businesses and opportunities across the world through international air freight.",
        duration: 8000,
        icon: FiNavigation,
    },
    {
        id: "ocean",
        eyebrow: "GLOBAL OCEAN FREIGHT",
        title: "Moving Business Worldwide.",
        description:
            "Supporting international commerce through ocean freight and global logistics connections.",
        duration: 8500,
        icon: FiAnchor,
    },
];

/* ==========================================
   SCENE 1 — LOCAL DELIVERY
========================================== */

function LocalScene({ reducedMotion }) {

    const stageRef = useRef(null);
    const [stageWidth, setStageWidth] = useState(1200);

    useEffect(() => {
        const stage = stageRef.current;
        if (!stage) return;

        const observer = new ResizeObserver(([entry]) => {
            setStageWidth(entry.contentRect.width);
        });

        observer.observe(stage);

        return () => observer.disconnect();
    }, []);

    const sceneScale = stageWidth / 1200;
    
    return (
        <div 
            ref={stageRef}
            className="fd-scene__stage fd-scene__stage--local"
        >

            {/* Ambient background */}
            <div className="fd-scene__ambient" />

             {/* Modern commercial and residential building */}
            <motion.div
                className="fd-scene__building"
                initial={
                    reducedMotion
                        ? false
                        : { opacity: 0, x: 30, scale: 0.96 }
                }
                animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                }}
                transition={{
                    duration: reducedMotion ? 0 : 1.4,
                    ease: "easeOut",
                }}
            >
                <img
                    src={building}
                    alt=""
                    draggable="false"
                />
            </motion.div>

            {/* Ground */}
            <div className="fd-scene__ground" />

            <div className="fd-scene__road">
                <div className="fd-scene__road-line" />
            </div>

            {/* Sidewalk outside the building */}
            <div className="fd-scene__sidewalk" aria-hidden="true" />

            {/* FastDrop truck */}

            <motion.div
                className="fd-scene__truck"
                initial={
                    reducedMotion
                        ? false
                        : { x: "-130%" }
                }
                animate={{ x: 0 }}
                transition={{
                    duration: reducedMotion ? 0 : 2.2,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                <img
                    src={truck}
                    alt=""
                    draggable="false"
                />
            </motion.div>

            {/* FastDrop employee */}

            <motion.div
                className="fd-scene__employee"
                initial={
                    reducedMotion
                        ? false
                        : { opacity: 0, y: 25 }
                }
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.8,
                    delay: reducedMotion ? 0 : 1.7,
                }}
            >
                <img
                    src={employee}
                    alt=""
                    draggable="false"
                />
            </motion.div>

            {/* Customer */}

            <motion.div
                className="fd-scene__customer"
                initial={
                    reducedMotion
                        ? false
                        : { opacity: 0, y: 20 }
                }
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.8,
                    delay: reducedMotion ? 0 : 2,
                }}
            >
                <img
                    src={customer}
                    alt=""
                    draggable="false"
                />
            </motion.div>

            
            {/* Parcel handoff */}

            <motion.div
                className="fd-scene__parcel"
                initial={
                    reducedMotion
                        ? false
                        : {
                            opacity: 0,
                            x: 25,
                            y: 0,
                        }
                }
                animate={
                    reducedMotion
                        ? {
                            opacity: 1,
                            x: 160,
                            y: 0,
                        }
                        : {
                            opacity: [0, 1, 1, 1, 1, 1],
                            x: [
                                60 * sceneScale, 
                                60 * sceneScale, 
                                60 * sceneScale, 
                                100 * sceneScale, 
                                160 * sceneScale, 
                                160 * sceneScale,
                            ],
                            y: [
                                0, 
                                0, 
                                0, 
                                -18 * sceneScale, 
                                0, 
                                0
                            ],
                        }
                }
                transition={{
                    duration: reducedMotion ? 0 : 3.5,
                    delay: reducedMotion ? 0 : 2.8,
                    ease: "easeInOut",
                    times: [0, 0.12, 0.35, 0.65, 0.88, 1],
                }}
            >
                <img
                    src={parcel}
                    alt=""
                    draggable="false"
                />
            </motion.div>


            {/* Delivery confirmation */}

            <motion.div
                className="fd-scene__success"
                initial={
                    reducedMotion
                        ? false
                        : { opacity: 0, y: 20, scale: 0.92}
                }
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}
                transition={{
                    duration: reducedMotion ? 0 : 0.6,
                    delay: reducedMotion ? 0 : 6.3,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                <span className="fd-scene__success-icon">
                    <FiCheck />
                </span>

                <div className="fd-scene__success-text">
                    <strong>Successfully Delivered</strong>
                    <span>Another delivery, handled with care.</span>
                </div>
            </motion.div>

        </div>
    );
}

/* ==========================================
   SCENE 2 — INTERNATIONAL AIR FREIGHT
========================================== */

function AirScene({ reducedMotion }) {
    return (
        <div className="fd-scene__stage fd-scene__stage--air">

            <div className="fd-scene__global-glow" />

            {/* Decorative globe */}

            <div className="fd-scene__globe">
                {/* Longitude lines */}
                <span className="fd-scene__globe-ring fd-scene__globe-ring--one" />
                <span className="fd-scene__globe-ring fd-scene__globe-ring--two" />
                <span className="fd-scene__globe-ring fd-scene__globe-ring--three" />

                {/* Latitude lines */}
                <span className="fd-scene__latitude fd-scene__latitude--one" />
                <span className="fd-scene__latitude fd-scene__latitude--two" />
                <span className="fd-scene__latitude fd-scene__latitude--three" />
                <span className="fd-scene__latitude fd-scene__latitude--four" />
                <span className="fd-scene__latitude fd-scene__latitude--five" />
            </div>

            {/* Global routes from central hub */}

           <svg
                className="fd-scene__routes"
                viewBox="0 0 1000 420"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                {[
                    // North America
                    "M500 210 Q330 75 140 170",
                    
                    // Europe
                    "M500 210 Q480 95 520 75",
                    
                    // Asia — extend farther right
                    "M500 210 Q720 80 880 155",
                    
                    // South America
                    "M500 210 Q365 300 220 340",

                    // Africa — NEW
                    "M500 210 Q470 290 510 345",
                    
                    // Oceania — extend farther right and downward
                    "M500 210 Q680 320 890 365",

                ].map((path, index) => (
                    <motion.path
                        key={index}
                        d={path}
                        fill="none"
                        stroke={
                            index % 2 === 0
                                ? "#C9362C"
                                : "#2F5D8C"
                        }
                        strokeWidth="1.8"
                        strokeDasharray="5 8"
                        strokeLinecap="round"
                        opacity={0.7}
                        initial={
                            reducedMotion
                                ? false
                                : { pathLength: 0 }
                        }
                        animate={{ pathLength: 1 }}
                        transition={{
                            duration: reducedMotion ? 0 : 3.5,
                            delay: reducedMotion ? 0 : index * 0.3,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </svg>

            {/* Plane */}

            <motion.div
                className="fd-scene__airplane"
                initial={
                    reducedMotion
                        ? false
                        : {
                              x: "-95%",
                              y: 80,
                              opacity: 0,
                              scale: 0.85,
                          }
                }
                animate={{
                    x: reducedMotion ? 0 : "35%",
                    y: reducedMotion ? 0 : -30,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: reducedMotion ? 0 : 6.5,
                    ease: "easeInOut",
                }}
            >
                <img
                    src={airplane}
                    alt=""
                    draggable="false"
                />
            </motion.div>

            
            {/* Global destination labels */}

            <div className="fd-scene__destination fd-scene__destination--northamerica">
                <span className="fd-scene__destination-dot" />
                North America
            </div>

            <div className="fd-scene__destination fd-scene__destination--southamerica">
                <span className="fd-scene__destination-dot" />
                South America
            </div>

            <div className="fd-scene__destination fd-scene__destination--europe">
                <span className="fd-scene__destination-dot" />
                Europe
            </div>

            <div className="fd-scene__destination fd-scene__destination--africa">
                <span className="fd-scene__destination-dot" />
                Africa
            </div>

            <div className="fd-scene__destination fd-scene__destination--asia">
                <span className="fd-scene__destination-dot" />
                Asia
            </div>

            <div className="fd-scene__destination fd-scene__destination--oceania">
                <span className="fd-scene__destination-dot" />
                Oceania
            </div>


            <motion.div
                className="fd-scene__floating-label"
                initial={
                    reducedMotion
                        ? false
                        : { opacity: 0, y: 15 }
                }
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: reducedMotion ? 0 : 3,
                    duration: 0.8,
                }}
            >
                <FiGlobe />
                Global Connections
            </motion.div>

        </div>
    );
}

/* ==========================================
   SCENE 3 — INTERNATIONAL OCEAN FREIGHT
========================================== */

function OceanScene({ reducedMotion }) {
    return (
        <div className="fd-scene__stage fd-scene__stage--ocean">

            <div className="fd-scene__global-glow" />

            {/* Background globe */}

            <div className="fd-scene__ocean-globe" />

            {/* Ship image already includes water */}

            <motion.div
                className="fd-scene__ship"
                initial={
                    reducedMotion
                        ? false
                        : {
                              x: "-35%",
                              opacity: 0,
                          }
                }
                animate={{
                    x: reducedMotion ? 0 : "8%",
                    opacity: 1,
                    y: reducedMotion ? 0 : [0, -5, 0],
                }}
                transition={{
                    duration: reducedMotion ? 0 : 7,
                    ease: "easeInOut",
                }}
            >
                <img
                    src={ship}
                    alt=""
                    draggable="false"
                />
            </motion.div>

            {/* Ocean freight label */}

            <motion.div
                className="fd-scene__ocean-badge"
                initial={
                    reducedMotion
                        ? false
                        : { opacity: 0, y: 15 }
                }
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: reducedMotion ? 0 : 2.5,
                    duration: 0.7,
                }}
            >
                <FiAnchor />
                <span>Global Ocean Freight</span>
            </motion.div>

        </div>
    );
}

/* ==========================================
   MAIN DELIVERY SCENE
========================================== */

export default function DeliveryScene() {
    const [activeScene, setActiveScene] = useState(0);
    const reducedMotion = useReducedMotion();

    useEffect(() => {
        if (reducedMotion) return;

        const timer = setTimeout(() => {
            setActiveScene(
                (current) => (current + 1) % SCENES.length
            );
        }, SCENES[activeScene].duration);

        return () => clearTimeout(timer);
    }, [activeScene, reducedMotion]);

    const currentScene = SCENES[activeScene];
    const SceneIcon = currentScene.icon;

    return (
        <section
            className="fd-scene"
            aria-label="FastDrop logistics delivery animations"
        >
            {/* Scene heading */}

            <div className="fd-scene__intro">

                <span className="fd-scene__eyebrow">
                    <SceneIcon />
                    {currentScene.eyebrow}
                </span>

                <h3>{currentScene.title}</h3>

                <p>{currentScene.description}</p>

            </div>

            {/* Animated scenes */}

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentScene.id}
                    className="fd-scene__scene-wrapper"
                    initial={
                        reducedMotion
                            ? false
                            : { opacity: 0, y: 15 }
                    }
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        y: -10,
                    }}
                    transition={{
                        duration: reducedMotion ? 0 : 0.55,
                        ease: "easeInOut",
                    }}
                >
                    {activeScene === 0 && (
                        <LocalScene reducedMotion={reducedMotion} />
                    )}

                    {activeScene === 1 && (
                        <AirScene reducedMotion={reducedMotion} />
                    )}

                    {activeScene === 2 && (
                        <OceanScene reducedMotion={reducedMotion} />
                    )}

                </motion.div>
            </AnimatePresence>

            {/* Scene navigation */}

            <div
                className="fd-scene__indicators"
                aria-label="Choose a delivery animation"
            >
                {SCENES.map((scene, index) => (
                    <button
                        key={scene.id}
                        type="button"
                        className={`fd-scene__indicator ${
                            activeScene === index ? "active" : ""
                        }`}
                        onClick={() => setActiveScene(index)}
                        aria-label={`Show ${scene.eyebrow}`}
                        aria-pressed={activeScene === index}
                    />
                ))}
            </div>

        </section>
    );
}
