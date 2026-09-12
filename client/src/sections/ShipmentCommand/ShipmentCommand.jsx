import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./ShipmentCommand.css";


function ShipmentCommand() {
    const [mode, setMode] = useState("track");

    return (
        <section
            className="shipment-command section"
            id="shipment-tools"
        >
            <div className="shipment-command-container">

                {/* SECTION INTRO */}
                <div className="shipment-command-heading">

                    <div className="shipment-command-kicker">
                        <span></span>
                        SHIPMENT COMMAND CENTER
                    </div>

                    <h2>
                        Your shipment.
                        <br />
                        <em>In motion.</em>
                    </h2>

                    <p>
                        Track what’s moving or plan what moves next —
                        all from one connected logistics experience.
                    </p>

                </div>


                {/* MAIN PANEL */}
                <div className="shipment-command-panel">

                    {/* TOP MODE SWITCH */}
                    <div className="shipment-command-tabs">

                        <button
                            className={
                                mode === "track"
                                    ? "shipment-tab active"
                                    : "shipment-tab"
                            }
                            onClick={() => setMode("track")}
                        >
                            Track Shipment
                        </button>

                        <button
                            className={
                                mode === "estimate"
                                    ? "shipment-tab active"
                                    : "shipment-tab"
                            }
                            onClick={() => setMode("estimate")}
                        >
                            Plan a Shipment
                        </button>

                    </div>


                    {/* ROUTE VISUAL */}
                    <div className="shipment-route">

                        <div className="route-line"></div>

                        <motion.div
                            className="route-progress"
                            animate={{
                                width:
                                    mode === "track"
                                        ? "62%"
                                        : "32%"
                            }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        ></motion.div>


                        <div className="route-stop route-stop-1 active">
                            <span></span>
                            <small>Origin</small>
                        </div>

                        <div className="route-stop route-stop-2 active">
                            <span></span>
                            <small>Hub</small>
                        </div>

                        <div
                            className={`route-stop route-stop-3 ${
                                mode === "track"
                                    ? "active current"
                                    : ""
                            }`}
                        >
                            <span></span>
                            <small>
                                {mode === "track"
                                    ? "In Transit"
                                    : "Shipment"}
                            </small>
                        </div>

                        <div className="route-stop route-stop-4">
                            <span></span>
                            <small>Destination</small>
                        </div>

                    </div>

                    {/* MODE CONTENT */}
                    <AnimatePresence mode="wait">

                        {mode === "track" ? (

                            <motion.div
                                key="track"
                                className="shipment-command-content"

                                initial={{
                                    opacity: 0,
                                    y: 18
                                }}

                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}

                                exit={{
                                    opacity: 0,
                                    y: -12
                                }}

                                transition={{
                                    duration: 0.35
                                }}
                            >

                                <div className="shipment-tool-copy">

                                    <span className="shipment-tool-label">
                                        TRACK A SHIPMENT
                                    </span>

                                    <h3>
                                        Know where it is.
                                        <br />
                                        Know what comes next.
                                    </h3>

                                    <p>
                                        Enter your FastDrop tracking number
                                        to view shipment progress and status.
                                    </p>

                                </div>


                                <div className="tracking-input-wrap">

                                    <input
                                        type="text"
                                        placeholder="Enter tracking number"
                                    />

                                    <button>
                                        Track Shipment
                                        <span>→</span>
                                    </button>

                                </div>

                            </motion.div>

                        ) : (

                            <motion.div
                                key="estimate"
                                className="shipment-command-content"

                                initial={{
                                    opacity: 0,
                                    y: 18
                                }}

                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}

                                exit={{
                                    opacity: 0,
                                    y: -12
                                }}

                                transition={{
                                    duration: 0.35
                                }}
                            >

                                <div className="shipment-tool-copy">

                                    <span className="shipment-tool-label">
                                        PLAN A SHIPMENT
                                    </span>

                                    <h3>
                                        Build your route.
                                        <br />
                                        Plan with confidence.
                                    </h3>

                                    <p>
                                        Start with where your shipment is
                                        coming from and where it needs to go.
                                    </p>

                                </div>


                                <div className="estimate-grid">

                                    <div className="estimate-field">
                                        <label>From</label>

                                        <input
                                            type="text"
                                            placeholder="Toronto, ON"
                                        />
                                    </div>


                                    <div className="estimate-field">
                                        <label>To</label>

                                        <input
                                            type="text"
                                            placeholder="Vancouver, BC"
                                        />
                                    </div>

                                </div>


                                <button className="estimate-next">
                                    Continue
                                    <span>→</span>
                                </button>

                            </motion.div>

                        )}

                    </AnimatePresence>

                </div>

            </div>
        </section>
    );
}


export default ShipmentCommand;