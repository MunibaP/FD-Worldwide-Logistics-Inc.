import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ShipmentMap from "./ShipmentMap";
import "./ShipmentCommand.css";

/* =========================================
    Mock Data for tracking
========================================= */

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

/* =========================================
    MODE SWITCH
    Controls Track Shipment / Plan a Shipment
 ========================================= */

function ShipmentCommand() {
    const [mode, setMode] = useState("track");

    /* =========================================
       TRACKING STATE
       Stores the entered tracking number,
       returned shipment, and validation error.
    ========================================= */

    const [trackingNumber, setTrackingNumber] = useState("");
    const [trackingResult, setTrackingResult] = useState(null);
    const [trackingError, setTrackingError] = useState("");

    /* =========================================
       CALCULATOR STEP
       Controls which calculator screen is shown.
       Step 1 = route
       Step 2 = shipment items
       Step 3 = shipping method
    ========================================= */

    const [estimateStep, setEstimateStep] = useState(1);

    /* =========================================
       CALCULATOR DATA
       Stores route, measurement units,
       and each individual shipment item.
    ========================================= */

    const [estimateData, setEstimateData] = useState({
        from: "",
        to: "",
        
        measurementSystem: "metric",

        shippingMethod: "",

        items: [
            {
                id: 1,
                type: "",
                weight: "",
                length: "",
                width: "",
                height: "",
            },
        ],
    });
    
    /* =========================================
        TRACKING LOOKUP
        Finds the mock shipment for the entered
        tracking number.
    ========================================= */

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

    /* =========================================
        TRACKING ROUTE PROGRESS
        Uses shipment progress to control the
        active route dots and progress line.
    ========================================= */

    const routeProgress =
    trackingResult?.progress ?? 0;

    /* =========================================
        CALCULATOR funtion - GENERAL FIELD CHANGE
        Handles fields such as From, To,
        measurementSystem, and shippingMethod.
    ========================================= */

    const handleEstimateChange = (event) => {
        const { name, value } = event.target;

        setEstimateData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    /* =========================================
        CALCULATOR - ITEM FIELD CHANGE
        Updates a specific shipment item.
    ========================================= */

    const handleItemChange = (id, field, value) => {
        setEstimateData((prev) => ({
            ...prev,

            items: prev.items.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        [field]: value,
                    }
                    : item
            ),
        }));
    };

    /* =========================================
        CALCULATOR - ADD ITEM
    ========================================= */

    const addItem = () => {
        setEstimateData((prev) => ({
            ...prev,

            items: [
                ...prev.items,
                {
                    id: Date.now(),
                    type: "",
                    weight: "",
                    length: "",
                    width: "",
                    height: "",
                },
            ],
        }));
    };

    /* =========================================
        CALCULATOR - REMOVE ITEM
    ========================================= */

    const removeItem = (id) => {
        setEstimateData((prev) => ({
            ...prev,

            items: prev.items.filter(
                (item) => item.id !== id
            ),
        }));
    };

    /* =========================================
        CALCULATOR VALIDATION
        Continue is enabled only when every
        item has type, weight, and dimensions.
    ========================================= */

    const itemsAreValid =
    estimateData.items.every((item) =>
        item.type &&
        item.weight &&
        item.length &&
        item.width &&
        item.height
    );

    /* =========================================
        CALCULATOR - SHIPMENT TOTALS
        Calculates the number of shipment items
        and their combined weight.
    ========================================= */

    const totalItems = estimateData.items.length;

    const totalWeight = estimateData.items.reduce(
        (total, item) =>
            total + (Number(item.weight) || 0),
        0
    );

    /* =========================================
        CALCULATOR - ITEM TYPE LABEL
        Converts stored item values into
        customer-friendly names.
    ========================================= */

    const getItemTypeLabel = (type) => {
        switch (type) {
            case "documents":
                return "Documents";

            case "parcel":
                return "Parcel / Package";

            case "pallet":
                return "Pallet";

            case "crate":
                return "Crate";

            case "freight":
                return "Freight / Cargo";

            default:
                return "Item";
        }
    };


    /* =========================================
        CALCULATOR - SHIPPING METHOD LABEL
    ========================================= */

    const getShippingMethodLabel = (method) => {
        switch (method) {
            case "ground":
                return "Ground";

            case "air":
                return "Air";

            case "ocean":
                return "Ocean";

            case "recommend":
                return "Recommend for me";

            default:
                return "";
        }
    };

    /* =========================================
        CALCULATOR (STEP 2) - MEASUREMENT UNITS
    ========================================= */

    const weightUnit =
        estimateData.measurementSystem === "metric"
            ? "kg"
            : "lb";

    const dimensionUnit =
        estimateData.measurementSystem === "metric"
            ? "cm"
            : "in";

    /* =========================================
        CALCULATOR - MEASUREMENT SYSTEM CHANGE
        Converts all existing item values when
        switching between Metric and Imperial.
    ========================================= */

    const handleMeasurementSystemChange = (event) => {
        const newSystem = event.target.value;

        if (newSystem === estimateData.measurementSystem) {
            return;
        }

        setEstimateData((prev) => ({
            ...prev,

            measurementSystem: newSystem,

            items: prev.items.map((item) => {
                const weight = Number(item.weight);
                const length = Number(item.length);
                const width = Number(item.width);
                const height = Number(item.height);

                const convertValue = (value, converter) => {
                    if (!value && value !== 0) {
                            return "";
                    }

                    return Number(
                        converter(value).toFixed(2)
                    );
                };

                if (newSystem === "imperial") {
                    return {
                        ...item,

                        weight: convertValue(
                            weight,
                            (value) => value * 2.20462
                        ),

                        length: convertValue(
                            length,
                            (value) => value / 2.54
                        ),

                        width: convertValue(
                            width,
                            (value) => value / 2.54
                        ),

                        height: convertValue(
                             height,
                            (value) => value / 2.54
                        ),
                    };
                }

                return {
                    ...item,

                    weight: convertValue(
                        weight,
                        (value) => value / 2.20462
                    ),

                    length: convertValue(
                        length,
                        (value) => value * 2.54
                    ),

                    width: convertValue(
                        width,
                        (value) => value * 2.54
                    ),

                    height: convertValue(
                        height,
                        (value) => value * 2.54
                    ),
                };
            }),
        }));
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
                                className={`shipment-command-content estimate-content estimate-step-${estimateStep}`}

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

                                    {/*STEP 2*/}
                                    {estimateStep === 2 && (
                                        <div className="estimate-step-two">

                                            <div className="estimate-measurement-system">

                                                <span className="estimate-dimension-label">
                                                    Measurement System
                                                </span>

                                                <div className="measurement-options">

                                                    <label className="measurement-option">

                                                        <input
                                                            type="radio"
                                                            name="measurementSystem"
                                                            value="metric"
                                                            checked={
                                                                estimateData.measurementSystem === "metric"
                                                            }
                                                            onChange={handleMeasurementSystemChange}
                                                        />

                                                        <div>
                                                            <strong>Metric</strong>
                                                            <span>kg / cm</span>
                                                        </div>

                                                    </label>


                                                    <label className="measurement-option">

                                                        <input
                                                            type="radio"
                                                            name="measurementSystem"
                                                            value="imperial"
                                                            checked={
                                                                estimateData.measurementSystem === "imperial"
                                                            }
                                                            onChange={handleMeasurementSystemChange}
                                                        />

                                                        <div>
                                                            <strong>Imperial</strong>
                                                            <span>lb / in</span>
                                                        </div>

                                                    </label>

                                                </div>

                                            </div>

                                            <div className="estimate-packages">

                                                {estimateData.items.map((item, index) => (

                                                    <div
                                                        className="estimate-package"
                                                        key={item.id}
                                                    >

                                                        <div className="estimate-package-header">

                                                            <h4>
                                                                Item {index + 1}
                                                            </h4>

                                                            {estimateData.items.length > 1 && (
                                                                <button
                                                                    type="button"
                                                                    className="remove-package"
                                                                    onClick={() =>
                                                                        removeItem(item.id)
                                                                    }
                                                                >
                                                                    Remove
                                                                </button>
                                                            )}

                                                        </div>

                                                        <div className="estimate-field">
                                                            <label>Item type</label>

                                                            <select
                                                                value={item.type}
                                                                onChange={(event) =>
                                                                    handleItemChange(
                                                                        item.id,
                                                                        "type",
                                                                        event.target.value
                                                                    )
                                                                }
                                                            >
                                                                <option value="">
                                                                    Select item type
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
                                                        </div>


                                                        <div className="estimate-field">

                                                            <label>Weight</label>

                                                            <div className="estimate-input-unit">

                                                                <input
                                                                    type="number"
                                                                    min="0"
                                                                    placeholder="5"
                                                                    value={item.weight}
                                                                    onChange={(event) =>
                                                                        handleItemChange(
                                                                            item.id,
                                                                            "weight",
                                                                            event.target.value
                                                                        )
                                                                    }
                                                                />

                                                                <span className="estimate-unit">
                                                                    {weightUnit}
                                                                </span>

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
                                                                value={item.length}
                                                                onChange={(event) =>
                                                                    handleItemChange(
                                                                        item.id,
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
                                                                value={item.width}
                                                                onChange={(event) =>
                                                                    handleItemChange(
                                                                        item.id,
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
                                                                value={item.height}
                                                                onChange={(event) =>
                                                                    handleItemChange(
                                                                        item.id,
                                                                        "height",
                                                                        event.target.value
                                                                    )
                                                                }
                                                            />

                                                            <span className="estimate-unit">
                                                                {dimensionUnit}
                                                            </span>

                                                        </div>

                                                    </div>

                                                ))}

                                            </div>

                                            <button
                                                type="button"
                                                className="add-package"
                                                onClick={addItem}
                                            >
                                                <span>+</span>
                                                Add another item
                                            </button>


                                            <div className="estimate-step-actions">

                                                <button
                                                    type="button"
                                                    className="estimate-back"
                                                    onClick={() => setEstimateStep(1)}
                                                >
                                                    <span className="back-arrow">←</span>
                                                    Back
                                                </button>

                                                <button
                                                    type="button"
                                                    className="estimate-next"
                                                    onClick={() => setEstimateStep(3)}
                                                    disabled={!itemsAreValid}
                                                >
                                                    Continue
                                                    <span>→</span>
                                                </button>

                                            </div>

                                        </div>
                                    )}

                                    
                                    {/* STEP 3 */}
                                    {estimateStep === 3 && (
                                        <div className="estimate-step-three">

                                            <span className="estimate-step-label">
                                                SHIPPING METHOD
                                            </span>

                                            <div className="shipping-method-list">

                                                <label className="shipping-option">

                                                    <input
                                                        type="radio"
                                                        name="shippingMethod"
                                                        value="ground"
                                                        checked={
                                                            estimateData.shippingMethod === "ground"
                                                        }
                                                        onChange={handleEstimateChange}
                                                    />

                                                    <div>
                                                        <strong>Ground</strong>

                                                        <span>
                                                            Best for road freight and shipments
                                                            moving across North America.
                                                        </span>
                                                    </div>

                                                </label>


                                                <label className="shipping-option">

                                                    <input
                                                        type="radio"
                                                        name="shippingMethod"
                                                        value="air"
                                                        checked={
                                                            estimateData.shippingMethod === "air"
                                                        }
                                                        onChange={handleEstimateChange}
                                                    />

                                                    <div>
                                                        <strong>Air</strong>

                                                        <span>
                                                            Faster option for international and
                                                            time-sensitive shipments.
                                                        </span>
                                                    </div>

                                                </label>


                                                <label className="shipping-option">

                                                    <input
                                                        type="radio"
                                                        name="shippingMethod"
                                                        value="ocean"
                                                        checked={
                                                            estimateData.shippingMethod === "ocean"
                                                        }
                                                        onChange={handleEstimateChange}
                                                    />

                                                    <div>
                                                        <strong>Ocean</strong>

                                                        <span>
                                                            Best for larger cargo and shipments
                                                            where transit time is more flexible.
                                                        </span>
                                                    </div>

                                                </label>


                                                <label className="shipping-option">

                                                    <input
                                                        type="radio"
                                                        name="shippingMethod"
                                                        value="recommend"
                                                        checked={
                                                            estimateData.shippingMethod === "recommend"
                                                        }
                                                        onChange={handleEstimateChange}
                                                    />

                                                    <div>
                                                        <strong>Recommend for me</strong>

                                                        <span>
                                                            Let FastDrop suggest the most suitable
                                                            shipping method for your shipment.
                                                        </span>
                                                    </div>

                                                </label>

                                            </div>


                                            <div className="estimate-step-actions">

                                                <button
                                                    type="button"
                                                    className="estimate-back"
                                                    onClick={() => setEstimateStep(2)}
                                                >
                                                    <span className="back-arrow">←</span>
                                                    Back
                                                </button>


                                                <button
                                                    type="button"
                                                    className="estimate-next"
                                                    onClick={() => setEstimateStep(4)}
                                                    disabled={!estimateData.shippingMethod}
                                                >
                                                    Continue
                                                    <span>→</span>
                                                </button>

                                            </div>

                                        </div>
                                    )}


                                    {/* =========================================
                                        STEP 4 - SHIPMENT ESTIMATE
                                    ========================================= */}

                                    {estimateStep === 4 && (

                                        <div className="estimate-step-four">

                                            <span className="estimate-step-label">
                                                SHIPMENT ESTIMATE
                                            </span>


                                            {/* ROUTE */}
                                            <div className="estimate-summary-section">

                                                <span className="estimate-summary-label">
                                                    Route
                                                </span>

                                                <div className="estimate-summary-route">

                                                    <strong>
                                                        {estimateData.from}
                                                    </strong>

                                                    <span>→</span>

                                                    <strong>
                                                        {estimateData.to}
                                                    </strong>

                                                </div>

                                            </div>


                                            {/* SHIPPING METHOD */}
                                            <div className="estimate-summary-section">

                                                <span className="estimate-summary-label">
                                                    Shipping method
                                                </span>

                                                <strong className="estimate-summary-value">
                                                    {getShippingMethodLabel(
                                                        estimateData.shippingMethod
                                                    )}
                                                </strong>

                                            </div>


                                            {/* SHIPMENT TOTALS */}
                                            <div className="estimate-summary-section">

                                                <span className="estimate-summary-label">
                                                    Shipment
                                                </span>

                                                <strong className="estimate-summary-value">
                                                    {totalItems}{" "}
                                                    {totalItems === 1 ? "item" : "items"}
                                                    {" • "}
                                                    {totalWeight} {weightUnit}
                                                </strong>

                                            </div>


                                            {/* ITEM BREAKDOWN */}
                                            <div className="estimate-summary-section">

                                                <span className="estimate-summary-label">
                                                    Items
                                                </span>

                                                <div className="estimate-summary-items">

                                                    {estimateData.items.map((item, index) => (

                                                        <div
                                                            className="estimate-summary-item"
                                                            key={item.id}
                                                        >

                                                            <div>
                                                                <strong>
                                                                    Item {index + 1}
                                                                </strong>

                                                                <span>
                                                                    {getItemTypeLabel(item.type)}
                                                                </span>
                                                            </div>


                                                            <div>
                                                                <span>
                                                                    {item.weight}{" "}
                                                                    {weightUnit}
                                                                </span>

                                                                <span>
                                                                    {item.length} ×{" "}
                                                                    {item.width} ×{" "}
                                                                    {item.height}{" "}
                                                                    {dimensionUnit}
                                                                </span>
                                                            </div>

                                                        </div>

                                                    ))}

                                                </div>

                                            </div>


                                            {/* ESTIMATED COST */}
                                            <div className="estimate-summary-section">

                                                <span className="estimate-summary-label">
                                                    Estimated cost
                                                </span>

                                                <strong className="estimate-rate-pending">
                                                    Live rate calculation coming soon
                                                </strong>

                                                <p className="estimate-summary-note">
                                                    Final pricing is based on current rates,
                                                    shipment details, service availability and
                                                    applicable surcharges.
                                                </p>

                                            </div>


                                            {/* TRANSIT TIME */}
                                            <div className="estimate-summary-section">

                                                <span className="estimate-summary-label">
                                                    Estimated transit
                                                </span>

                                                <strong className="estimate-rate-pending">
                                                    Calculated with live rate
                                                </strong>

                                            </div>


                                            {/* FINAL ACTIONS */}
                                            <div className="estimate-step-actions">

                                                <button
                                                    type="button"
                                                    className="estimate-back"
                                                    onClick={() => setEstimateStep(3)}
                                                >
                                                    <span className="back-arrow">←</span>
                                                    Edit Shipment
                                                </button>

                                                <button
                                                    type="button"
                                                    className="estimate-next"
                                                    onClick={() => setEstimateStep(5)}
                                                >
                                                    Request Final Quote
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