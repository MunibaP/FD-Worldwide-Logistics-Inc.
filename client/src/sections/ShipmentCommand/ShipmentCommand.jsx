import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ShipmentMap from "./ShipmentMap";
import "./ShipmentCommand.css";

/* Mock Data for tracking*/
const mockShipments = {
    FD12345: {
        trackingNumber: "FD12345",
        status: "In Transit",
        currentLocation: "Toronto, ON",
        estimatedDelivery: "Sep 14",
        origin: "Mississauga, ON",
        destination: "Ottawa, ON",
        progress: 3,

        /*Mock Coordinates for map display*/

        originCoordinates: {
            lat: 43.5890,
            lng: -79.6441,
        },

        currentCoordinates: {
            lat: 43.6532,
            lng: -79.3832,
        },

        destinationCoordinates: {
            lat: 45.4215,
            lng: -75.6972,
        },
    },

    FD67890: {
        trackingNumber: "FD67890",
        status: "Delivered",
        currentLocation: "Ottawa, ON",
        estimatedDelivery: "Delivered Sep 11",
        origin: "Mississauga, ON",
        destination: "Ottawa, ON",
        progress: 4,

        originCoordinates: {
            lat: 43.5890,
            lng: -79.6441,
        },

        currentCoordinates: {
            lat: 45.4215,
            lng: -75.6972,
        },

        destinationCoordinates: {
            lat: 45.4215,
            lng: -75.6972,
        },
    },

    FD24680: {
        trackingNumber: "FD24680",
        status: "Picked Up",
        currentLocation: "Mississauga, ON",
        estimatedDelivery: "Sep 15",
        origin: "Mississauga, ON",
        destination: "Montreal, QC",
        progress: 1,

        originCoordinates: {
            lat: 43.5890,
            lng: -79.6441,
        },

        currentCoordinates: {
            lat: 43.5890,
            lng: -79.6441,
        },

        destinationCoordinates: {
            lat: 45.5019,
            lng: -73.5674,
        },
    },

    FD13579: {
        trackingNumber: "FD13579",
        status: "At Hub",
        currentLocation: "Toronto Distribution Hub, ON",
        estimatedDelivery: "Sep 16",
        origin: "Mississauga, ON",
        destination: "Kingston, ON",
        progress: 2,

        originCoordinates: {
            lat: 43.5890,
            lng: -79.6441,
        },

        currentCoordinates: {
            lat: 43.6532,
            lng: -79.3832,
        },

        destinationCoordinates: {
            lat: 44.2312,
            lng: -76.4860,
        },
    },
};


function ShipmentCommand() {
    const [mode, setMode] = useState("track");

    const [trackingNumber, setTrackingNumber] = useState("");
    const [trackingResult, setTrackingResult] = useState(null);
    const [trackingError, setTrackingError] = useState("");

    const [estimateStep, setEstimateStep] = useState(1);

    const [estimateData, setEstimateData] = useState({
        from: "",
        to: "",
        
        weightUnit: "kg",
        dimensionUnit: "cm",

        packages: [
            {
                id: 1,
                type: "parcel",
                weight: "",
                length: "",
                width: "",
                height: "",
            },
        ],
    });
    
    const handleTracking = () => {
        const cleanedNumber =
            trackingNumber.trim().toUpperCase();

        if (!cleanedNumber) {
            setTrackingError(
                "Please enter a tracking number."
            );

            setTrackingResult(null);

            return;
        }

        const shipment =
            mockShipments[cleanedNumber];

        if (!shipment) {
            setTrackingError(
                "We couldn't find that tracking number."
            );

            setTrackingResult(null);

            return;
        }

        setTrackingResult(shipment);
        setTrackingError("");
    };

    const routeProgress =
    trackingResult?.progress ?? 0;

    /*calculator funtion*/
    const handleEstimateChange = (event) => {
        const { name, value } = event.target;

        setEstimateData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePackageChange = (id, field, value) => {
        setEstimateData((prev) => ({
            ...prev,

            packages: prev.packages.map((pkg) =>
                pkg.id === id
                    ? {
                        ...pkg,
                        [field]: value,
                    }
                    : pkg
            ),
        }));
    };

    const addPackage = () => {
        setEstimateData((prev) => ({
            ...prev,

            packages: [
                ...prev.packages,
                {
                    id: Date.now(),
                    type: "parcel",
                    weight: "",
                    length: "",
                    width: "",
                    height: "",
                },
            ],
        }));
    };


    const removePackage = (id) => {
        setEstimateData((prev) => ({
            ...prev,

            packages: prev.packages.filter(
                (pkg) => pkg.id !== id
            ),
        }));
    };

    const packagesAreValid =
        estimateData.packages.every((pkg) =>
            pkg.type &&
            pkg.weight &&
            pkg.length &&
            pkg.width &&
            pkg.height
        );

        const getShipmentItemLabel = () => {
            switch (estimateData.shipmentType) {
                case "pallet":
                    return "Pallet";

                case "crate":
                    return "Crate";

                case "freight":
                    return "Cargo Item";

                case "documents":
                    return "Document";

                default:
                    return "Package";
            }
        };


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

                        {/* <motion.div
                            className="route-progress"
                            animate={{
                                width:
                                    mode === "track"
                                        ? routeProgress === 0
                                            ? "0%"
                                            : routeProgress === 1
                                            ? "2%"
                                            : routeProgress === 2
                                            ? "36%"
                                            : routeProgress === 3
                                            ? "58%"
                                            : "84%"
                                        : "32%"
                            }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        ></motion.div> */}


                       <motion.div
                            className="route-progress"
                            style={{
                                "--desktop-progress":
                                    mode === "track"
                                        ? routeProgress === 0
                                            ? "0%"
                                            : routeProgress === 1
                                            ? "2%"
                                            : routeProgress === 2
                                            ? "36%"
                                            : routeProgress === 3
                                            ? "64%"
                                            : "84%"
                                        : "32%",

                                "--mobile-progress":
                                    mode === "track"
                                        ? routeProgress === 0
                                            ? "0px"
                                            : routeProgress === 1
                                            ? "0px"
                                            : routeProgress === 2
                                            ? "58px"
                                            : routeProgress === 3
                                            ? "116px"
                                            : "174px"
                                        : "58px"
                            }}
                            animate={{
                                width: "var(--desktop-progress)"
                            }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        ></motion.div>


                        <div
                            className={`route-stop route-stop-1 ${
                                routeProgress >= 1 ? "active" : ""
                            } ${
                                routeProgress === 1 ? "current" : ""
                            }`}
                        >
                            <span></span>
                            <small>Origin</small>
                        </div>

                        <div
                            className={`route-stop route-stop-2 ${
                                routeProgress >= 2 ? "active" : ""
                            } ${
                                routeProgress === 2 ? "current" : ""
                            }`}
                        >
                            <span></span>
                            <small>Hub</small>
                        </div>

                        <div
                            className={`route-stop route-stop-3 ${
                                routeProgress >= 3 ? "active" : ""
                            } ${
                                routeProgress === 3 ? "current" : ""
                            }`}
                        >
                            <span></span>
                            <small>In Transit</small>
                        </div>

                        <div
                            className={`route-stop route-stop-4 ${
                                routeProgress >= 4 ? "active" : ""
                            } ${
                                routeProgress === 4 ? "current" : ""
                            }`}
                        >
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
                                        value={trackingNumber}
                                        onChange={(event) =>
                                            setTrackingNumber(event.target.value)
                                        }
                                        onKeyDown={(event) => {
                                            if (event.key === "Enter") {
                                                handleTracking();
                                            }
                                        }}
                                    />

                                    <button
                                        type="button"
                                        onClick={handleTracking}
                                    >
                                        Track Shipment
                                        <span>→</span>
                                    </button>

                                </div>

                                {trackingError && (
                                    <p className="tracking-error">
                                        {trackingError}
                                    </p>
                                )}

                                {/* <AnimatePresence>

                                    {trackingResult && (

                                        <motion.div
                                            className="tracking-result"

                                            initial={{
                                                opacity: 0,
                                                y: 16
                                            }}

                                            animate={{
                                                opacity: 1,
                                                y: 0
                                            }}

                                            exit={{
                                                opacity: 0,
                                                y: 10
                                            }}

                                            transition={{
                                                duration: 0.4,
                                                ease: [0.22, 1, 0.36, 1]
                                            }}
                                        >

                                            <div className="tracking-result-top">

                                                <div>
                                                    <span className="tracking-result-label">
                                                        CURRENT STATUS
                                                    </span>

                                                    <h4>
                                                        {trackingResult.status}
                                                    </h4>
                                                </div>


                                                <span className="tracking-result-number">
                                                    {trackingResult.trackingNumber}
                                                </span>

                                            </div>


                                            <div className="tracking-result-grid">

                                                <div>
                                                    <span>Current location</span>

                                                    <strong>
                                                        {trackingResult.currentLocation}
                                                    </strong>
                                                </div>


                                                <div>
                                                    <span>Estimated delivery</span>

                                                    <strong>
                                                        {trackingResult.estimatedDelivery}
                                                    </strong>
                                                </div>


                                                <div>
                                                    <span>Origin</span>

                                                    <strong>
                                                        {trackingResult.origin}
                                                    </strong>
                                                </div>


                                                <div>
                                                    <span>Destination</span>

                                                    <strong>
                                                        {trackingResult.destination}
                                                    </strong>
                                                </div>

                                            </div>

                                        </motion.div>

                                    )}

                                </AnimatePresence> */}


                                <AnimatePresence>
                                    {trackingResult && (
                                        <motion.div
                                            className="tracking-result"

                                            initial={{
                                                opacity: 0,
                                                y: 16
                                            }}

                                            animate={{
                                                opacity: 1,
                                                y: 0
                                            }}

                                            exit={{
                                                opacity: 0,
                                                y: 10
                                            }}

                                            transition={{
                                                duration: 0.4,
                                                ease: [0.22, 1, 0.36, 1]
                                            }}
                                        >

                                            {/* <div className="tracking-result-header">

                                                <div>
                                                    <span className="tracking-result-label">
                                                        CURRENT STATUS
                                                    </span>

                                                    <h4>
                                                        {trackingResult.status}
                                                    </h4>
                                                </div>

                                                <span className="tracking-result-number">
                                                    {trackingResult.trackingNumber}
                                                </span>

                                            </div>


                                            <div className="tracking-result-route">

                                                <div className="tracking-route-location">
                                                    <span>Origin</span>

                                                    <strong>
                                                        {trackingResult.origin}
                                                    </strong>
                                                </div>

                                                <div className="tracking-route-connector">
                                                    <span></span>
                                                    <div className="tracking-route-arrow">
                                                        →
                                                    </div>
                                                </div>

                                                <div className="tracking-route-location destination">
                                                    <span>Destination</span>

                                                    <strong>
                                                        {trackingResult.destination}
                                                    </strong>
                                                </div>

                                            </div>


                                            <div className="tracking-result-details">

                                                <div>
                                                    <span>Current location</span>

                                                    <strong>
                                                        {trackingResult.currentLocation}
                                                    </strong>
                                                </div>


                                                <div>
                                                    <span>Estimated delivery</span>

                                                    <strong>
                                                        {trackingResult.estimatedDelivery}
                                                    </strong>
                                                </div>

                                            </div> */}

                                            <div className="tracking-details-panel">

                                                <span className="tracking-panel-kicker">
                                                    TRACKING DETAILS
                                                </span>


                                                <div className="tracking-detail-main">

                                                    <div>
                                                        <span>Current status</span>

                                                        <strong className="tracking-status-value">
                                                            {trackingResult.status}
                                                        </strong>
                                                    </div>


                                                    <div>
                                                        <span>Tracking number</span>

                                                        <strong>
                                                            {trackingResult.trackingNumber}
                                                        </strong>
                                                    </div>

                                                </div>


                                                <div className="tracking-detail-list">

                                                    <div>
                                                        <span>Origin</span>

                                                        <strong>
                                                            {trackingResult.origin}
                                                        </strong>
                                                    </div>


                                                    <div>
                                                        <span>Destination</span>

                                                        <strong>
                                                            {trackingResult.destination}
                                                        </strong>
                                                    </div>


                                                    <div>
                                                        <span>Estimated delivery</span>

                                                        <strong>
                                                            {trackingResult.estimatedDelivery}
                                                        </strong>
                                                    </div>

                                                </div>

                                            </div>


                                            <div className="shipment-location-panel">

                                                <span className="tracking-panel-kicker">
                                                    SHIPMENT LOCATION
                                                </span>

                                                <div className="shipment-map-wrap">

                                                    <ShipmentMap shipment={trackingResult} />

                                                </div>

                                                <div className="shipment-map-legend">
                                                    <span className="legend-item">
                                                        <i className="legend-dot legend-origin"></i>
                                                        Origin
                                                    </span>

                                                    <span className="legend-item">
                                                        <i className="legend-parcel">📦</i>
                                                        Current
                                                    </span>

                                                    <span className="legend-item">
                                                        <i className="legend-dot legend-destination"></i>
                                                        Destination
                                                    </span>
                                                </div>


                                                <div className="shipment-location-current">

                                                    <span>Current location</span>

                                                    <strong>
                                                        {trackingResult.currentLocation}
                                                    </strong>

                                                </div>

                                            </div>

                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                

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


                                {/* <div className="estimate-grid">

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
                                </button> */}

                                <div className="estimate-form-wrap">

                                    {/* STEP 1 */}
                                    {estimateStep === 1 && (
                                        <>

                                            <div className="estimate-grid">

                                                <div className="estimate-field">
                                                    <label>From</label>

                                                    <input
                                                        type="text"
                                                        name="from"
                                                        placeholder="Toronto, ON"
                                                        value={estimateData.from}
                                                        onChange={handleEstimateChange}
                                                    />
                                                </div>


                                                <div className="estimate-field">
                                                    <label>To</label>

                                                    <input
                                                        type="text"
                                                        name="to"
                                                        placeholder="Vancouver, BC"
                                                        value={estimateData.to}
                                                        onChange={handleEstimateChange}
                                                    />
                                                </div>

                                            </div>


                                            <button 
                                                type="button"
                                                className="estimate-next"
                                                onClick={() => setEstimateStep(2)}
                                                disabled={
                                                    !estimateData.from.trim() ||
                                                    !estimateData.to.trim()
                                                }
                                            >
                                                Continue
                                                <span>→</span>
                                            </button>
                                        </>
                                    )}

                                    {estimateStep === 2 && (
                                        <div className="estimate-step-two">

                                            {/* <div className="estimate-field">
                                                <label>Shipment type</label>

                                                <select
                                                    name="shipmentType"
                                                    value={estimateData.shipmentType}
                                                    onChange={handleEstimateChange}
                                                >
                                                    <option value="">
                                                        Select shipment type
                                                    </option>

                                                    <option value="documents">
                                                        Documents
                                                    </option>

                                                    <option value="parcel">
                                                        Parcel / Package
                                                    </option>

                                                    <option value="pallet">
                                                        Pallet
                                                    </option>

                                                    <option value="crate">
                                                        Crate
                                                    </option>

                                                    <option value="freight">
                                                        Freight / Cargo
                                                    </option>
                                                </select>
                                            </div> */}


                                            <div className="estimate-packages">

                                                {estimateData.packages.map((pkg, index) => (

                                                    <div
                                                        className="estimate-package"
                                                        key={pkg.id}
                                                    >

                                                        <div className="estimate-package-header">

                                                            <h4>
                                                                {getShipmentItemLabel()} {index + 1}
                                                            </h4>

                                                            {estimateData.packages.length > 1 && (
                                                                <button
                                                                    type="button"
                                                                    className="remove-package"
                                                                    onClick={() =>
                                                                        removePackage(pkg.id)
                                                                    }
                                                                >
                                                                    Remove
                                                                </button>
                                                            )}

                                                        </div>

                                                        <div className="estimate-field">
                                                            <label>Item type</label>

                                                            <select
                                                                value={pkg.type}
                                                                onChange={(event) =>
                                                                    handlePackageChange(
                                                                        pkg.id,
                                                                        "type",
                                                                        event.target.value
                                                                    )
                                                                }
                                                            >
                                                                <option value="documents">
                                                                    Documents
                                                                </option>

                                                                <option value="parcel">
                                                                    Parcel / Package
                                                                </option>

                                                                <option value="pallet">
                                                                    Pallet
                                                                </option>

                                                                <option value="crate">
                                                                    Crate
                                                                </option>

                                                                <option value="freight">
                                                                    Freight / Cargo
                                                                </option>
                                                            </select>
                                                        </div>


                                                        <div className="estimate-field">

                                                            <label>Weight</label>

                                                            <div className="estimate-input-unit">

                                                                <input
                                                                    type="number"
                                                                    min="0"
                                                                    placeholder="5"
                                                                    value={pkg.weight}
                                                                    onChange={(event) =>
                                                                        handlePackageChange(
                                                                            pkg.id,
                                                                            "weight",
                                                                            event.target.value
                                                                        )
                                                                    }
                                                                />

                                                                <select
                                                                    name="weightUnit"
                                                                    value={estimateData.weightUnit}
                                                                    onChange={handleEstimateChange}
                                                                >
                                                                    <option value="kg">kg</option>
                                                                    <option value="lb">lb</option>
                                                                </select>

                                                            </div>

                                                        </div>


                                                        <label className="estimate-dimension-label">
                                                            Dimensions
                                                        </label>

                                                        <div className="estimate-dimensions-row">

                                                            <input
                                                                type="number"
                                                                min="0"
                                                                placeholder="L"
                                                                value={pkg.length}
                                                                onChange={(event) =>
                                                                    handlePackageChange(
                                                                        pkg.id,
                                                                        "length",
                                                                        event.target.value
                                                                    )
                                                                }
                                                            />

                                                            <span>×</span>

                                                            <input
                                                                type="number"
                                                                min="0"
                                                                placeholder="W"
                                                                value={pkg.width}
                                                                onChange={(event) =>
                                                                    handlePackageChange(
                                                                        pkg.id,
                                                                        "width",
                                                                        event.target.value
                                                                    )
                                                                }
                                                            />

                                                            <span>×</span>

                                                            <input
                                                                type="number"
                                                                min="0"
                                                                placeholder="H"
                                                                value={pkg.height}
                                                                onChange={(event) =>
                                                                    handlePackageChange(
                                                                        pkg.id,
                                                                        "height",
                                                                        event.target.value
                                                                    )
                                                                }
                                                            />

                                                            <select
                                                                name="dimensionUnit"
                                                                value={estimateData.dimensionUnit}
                                                                onChange={handleEstimateChange}
                                                            >
                                                                <option value="cm">cm</option>
                                                                <option value="in">in</option>
                                                            </select>

                                                        </div>

                                                    </div>

                                                ))}

                                            </div>

                                            <button
                                                type="button"
                                                className="add-package"
                                                onClick={addPackage}
                                            >
                                                <span>+</span>
                                                Add another {getShipmentItemLabel().toLowerCase()}
                                            </button>


                                            <div className="estimate-step-actions">

                                                <button
                                                    type="button"
                                                    className="estimate-back"
                                                    onClick={() => setEstimateStep(1)}
                                                >
                                                    ← Back
                                                </button>

                                                <button
                                                    type="button"
                                                    className="estimate-next"
                                                    onClick={() => setEstimateStep(3)}
                                                    disabled={!packagesAreValid}
                                                >
                                                    Continue
                                                    <span>→</span>
                                                </button>

                                            </div>

                                        </div>
                                    )}

                                </div>
                                
                            </motion.div>

                        )}

                    </AnimatePresence>

                </div>

            </div>
        </section>
    );
}


export default ShipmentCommand;