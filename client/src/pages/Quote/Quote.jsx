import {
    useState
} from "react";

import {
    FiArrowRight,
    FiMapPin,
    FiPackage,
    FiCalendar,
    FiUser
} from "react-icons/fi";

import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../sections/Footer/Footer";

import "./Quote.css";


/* =========================================================
   INITIAL FORM DATA
========================================================= */

const initialFormData = {

    shippingAs: "business",

    fromCountry: "",
    fromCity: "",
    fromPostalCode: "",

    toCountry: "",
    toCity: "",
    toPostalCode: "",

    shipmentType: "package",
    pieces: "1",

    weight: "",
    weightUnit: "kg",

    length: "",
    width: "",
    height: "",
    dimensionUnit: "cm",

    serviceType: "",

    readyDate: "",

    additionalDetails: "",

    fullName: "",
    companyName: "",
    email: "",
    phone: ""
};


/* =========================================================
   SERVICES
========================================================= */

const services = [
    "Ground Freight",
    "Air Freight",
    "Ocean Freight",
    "Warehousing",
    "E-Commerce Fulfillment",
    "3PL Contract Warehousing",
    "Final-Mile Delivery",
    "Not Sure / Help Me Choose"
];


/* =========================================================
   COUNTRIES
========================================================= */

countries.registerLocale(en);

const countryOptions = Object.entries(
    countries.getNames("en", {
        select: "official"
    })
)
    .map(([code, name]) => ({
        code,
        name
    }))
    .sort((a, b) =>
        a.name.localeCompare(b.name)
    );


/* =========================================================
   QUOTE COMPONENT
========================================================= */

const Quote = () => {

    const [
        formData,
        setFormData
    ] = useState(initialFormData);


    const [
        errors,
        setErrors
    ] = useState({});


    /* =====================================================
       INPUT CHANGE
    ===================================================== */

    const handleChange = (event) => {

        const {
            name,
            value
        } = event.target;


        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));


        /*
            Remove the error once the user
            begins correcting the field.
        */

        if (errors[name]) {

            setErrors((previous) => ({
                ...previous,
                [name]: ""
            }));

        }

    };


    /* =====================================================
       SHIPPING AS
    ===================================================== */

    const handleShippingAs = (value) => {

        setFormData((previous) => ({
            ...previous,
            shippingAs: value
        }));

    };


    /* =====================================================
       SHIPMENT TYPE
    ===================================================== */

    const handleShipmentType = (value) => {

        setFormData((previous) => ({
            ...previous,
            shipmentType: value
        }));

    };


    /* =====================================================
       VALIDATION
    ===================================================== */

    const validateForm = () => {

        const newErrors = {};


        /* ROUTE */

        if (!formData.fromCountry) {
            newErrors.fromCountry =
                "Please select an origin country.";
        }

        if (!formData.fromCity.trim()) {
            newErrors.fromCity =
                "Origin city is required.";
        }

        if (!formData.fromPostalCode.trim()) {
            newErrors.fromPostalCode =
                "Origin postal code is required.";
        }


        if (!formData.toCountry) {
            newErrors.toCountry =
                "Please select a destination country.";
        }

        if (!formData.toCity.trim()) {
            newErrors.toCity =
                "Destination city is required.";
        }

        if (!formData.toPostalCode.trim()) {
            newErrors.toPostalCode =
                "Destination postal code is required.";
        }


        /* SHIPMENT */

        if (
            !formData.pieces ||
            Number(formData.pieces) < 1
        ) {
            newErrors.pieces =
                "Enter at least one piece.";
        }


        if (
            !formData.weight ||
            Number(formData.weight) <= 0
        ) {
            newErrors.weight =
                "Enter the shipment weight.";
        }


        /* SHIPPING DETAILS */

        if (!formData.serviceType) {
            newErrors.serviceType =
                "Please select a service.";
        }

        if (!formData.readyDate) {
            newErrors.readyDate =
                "Please select a ready date.";
        }


        /* CONTACT */

        if (!formData.fullName.trim()) {
            newErrors.fullName =
                "Full name is required.";
        }


        if (!formData.email.trim()) {

            newErrors.email =
                "Email is required.";

        }
        else {

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(formData.email)) {
                newErrors.email =
                    "Enter a valid email address.";
            }

        }


        if (!formData.phone.trim()) {
            newErrors.phone =
                "Phone number is required.";
        }


        setErrors(newErrors);


        return (
            Object.keys(newErrors).length === 0
        );

    };


    /* =====================================================
       SUBMIT
    ===================================================== */

    const handleSubmit = (event) => {

        event.preventDefault();


        const isValid =
            validateForm();


        if (!isValid) {
            return;
        }


        /*
            BACKEND WILL BE CONNECTED LATER.

            We intentionally do not display a fake
            "Quote submitted" confirmation here.

            Later:

            POST /api/quote

            formData will be sent to the FastDrop
            Express backend.
        */

        console.log(
            "Validated quote request:",
            formData
        );

    };


    return (
        <>
        
            {/* =============================
                NAVBAR
            ============================== */}
            <Navbar />

            {/* =============================
                QUOTE PAGE
            ============================== */}
            <main className="quote-page">

                <section
                    className="quote"
                    id="quote"
                >

                    {/* =============================================
                        BACKGROUND
                    ============================================== */}

                    <div
                        className="quote-background-word"
                        aria-hidden="true"
                    >
                        QUOTE
                    </div>


                    <div className="quote-container">


                        {/* =========================================
                            SECTION HEADER
                        ========================================== */}

                        <header className="quote-header">

                            <span className="quote-eyebrow">
                                GET A QUOTE
                            </span>

                            <h2 className="quote-title">

                                Tell us where it's going.

                                <span>
                                    We'll help move it forward.
                                </span>

                            </h2>

                            <p className="quote-description">

                                Share your shipment details and
                                our team will help determine the
                                right logistics solution.

                            </p>

                        </header>


                        {/* =========================================
                            FORM
                        ========================================== */}

                        <form
                            className="quote-form"
                            onSubmit={handleSubmit}
                            noValidate
                        >


                            {/* =====================================
                                01 — SHIPPING AS
                            ====================================== */}

                            <div className="quote-section">

                                <div className="quote-section-heading">

                                    <span className="quote-section-number">
                                        01
                                    </span>

                                    <div>

                                        <span className="quote-section-kicker">
                                            SHIPPING PROFILE
                                        </span>

                                        <h3>
                                            I'm shipping as
                                        </h3>

                                    </div>

                                </div>


                                <div className="quote-profile-options">

                                    <button
                                        type="button"
                                        className={
                                            `quote-profile-option ${
                                                formData.shippingAs ===
                                                "individual"
                                                    ? "active"
                                                    : ""
                                            }`
                                        }
                                        onClick={() =>
                                            handleShippingAs(
                                                "individual"
                                            )
                                        }
                                        aria-pressed={
                                            formData.shippingAs ===
                                            "individual"
                                        }
                                    >

                                        <span className="quote-radio" />

                                        <span>

                                            <strong>
                                                Individual
                                            </strong>

                                            <small>
                                                Personal shipments,
                                                gifts or household items
                                            </small>

                                        </span>

                                    </button>


                                    <button
                                        type="button"
                                        className={
                                            `quote-profile-option ${
                                                formData.shippingAs ===
                                                "business"
                                                    ? "active"
                                                    : ""
                                            }`
                                        }
                                        onClick={() =>
                                            handleShippingAs(
                                                "business"
                                            )
                                        }
                                        aria-pressed={
                                            formData.shippingAs ===
                                            "business"
                                        }
                                    >

                                        <span className="quote-radio" />

                                        <span>

                                            <strong>
                                                Business
                                            </strong>

                                            <small>
                                                Commercial and
                                                business shipments
                                            </small>

                                        </span>

                                    </button>

                                </div>

                            </div>


                            {/* =====================================
                                02 — ROUTE
                            ====================================== */}

                            <div className="quote-section">

                                <div className="quote-section-heading">

                                    <span className="quote-section-number">
                                        02
                                    </span>

                                    <div>

                                        <span className="quote-section-kicker">
                                            SHIPMENT ROUTE
                                        </span>

                                        <h3>
                                            Where is it going?
                                        </h3>

                                    </div>

                                </div>


                                <div className="quote-route">


                                    {/* FROM */}

                                    <div className="quote-route-side">

                                        <div className="quote-route-label">

                                            <FiMapPin />

                                            <span>
                                                FROM
                                            </span>

                                        </div>


                                        <div className="quote-field">

                                            <label htmlFor="fromCountry">
                                                Country or Territory *
                                            </label>

                                            <select
                                                id="fromCountry"
                                                name="fromCountry"
                                                value={
                                                    formData.fromCountry
                                                }
                                                onChange={handleChange}
                                            >

                                                <option value="">
                                                    Select country
                                                </option>

                                                {countryOptions.map(
                                                    (country) => (
                                                        <option
                                                            key={country.code}
                                                            value={country.name}
                                                        >
                                                            {country.name}
                                                        </option>
                                                    )
                                                )}

                                            </select>

                                            {errors.fromCountry && (
                                                <span className="quote-error">
                                                    {errors.fromCountry}
                                                </span>
                                            )}

                                        </div>


                                        <div className="quote-field-row">

                                            <div className="quote-field">

                                                <label htmlFor="fromCity">
                                                    City *
                                                </label>

                                                <input
                                                    id="fromCity"
                                                    type="text"
                                                    name="fromCity"
                                                    value={
                                                        formData.fromCity
                                                    }
                                                    onChange={handleChange}
                                                    placeholder="Mississauga"
                                                />

                                                {errors.fromCity && (
                                                    <span className="quote-error">
                                                        {errors.fromCity}
                                                    </span>
                                                )}

                                            </div>


                                            <div className="quote-field">

                                                <label htmlFor="fromPostalCode">
                                                    Postal Code *
                                                </label>

                                                <input
                                                    id="fromPostalCode"
                                                    type="text"
                                                    name="fromPostalCode"
                                                    value={
                                                        formData.fromPostalCode
                                                    }
                                                    onChange={handleChange}
                                                    placeholder="L4W 5C5"
                                                />

                                                {errors.fromPostalCode && (
                                                    <span className="quote-error">
                                                        {errors.fromPostalCode}
                                                    </span>
                                                )}

                                            </div>

                                        </div>

                                    </div>


                                    {/* ROUTE ARROW */}

                                    <div
                                        className="quote-route-arrow"
                                        aria-hidden="true"
                                    >

                                        <span />

                                        <FiArrowRight />

                                    </div>


                                    {/* TO */}

                                    <div className="quote-route-side">

                                        <div className="quote-route-label">

                                            <FiMapPin />

                                            <span>
                                                TO
                                            </span>

                                        </div>


                                        <div className="quote-field">

                                            <label htmlFor="toCountry">
                                                Country or Territory *
                                            </label>

                                            <select
                                                id="toCountry"
                                                name="toCountry"
                                                value={
                                                    formData.toCountry
                                                }
                                                onChange={handleChange}
                                            >

                                                <option value="">
                                                    Select country
                                                </option>

                                                {countryOptions.map(
                                                    (country) => (
                                                        <option
                                                            key={country.code}
                                                            value={country.name}
                                                        >
                                                            {country.name}
                                                        </option>
                                                    )
                                                )}

                                            </select>

                                            {errors.toCountry && (
                                                <span className="quote-error">
                                                    {errors.toCountry}
                                                </span>
                                            )}

                                        </div>


                                        <div className="quote-field-row">

                                            <div className="quote-field">

                                                <label htmlFor="toCity">
                                                    City *
                                                </label>

                                                <input
                                                    id="toCity"
                                                    type="text"
                                                    name="toCity"
                                                    value={
                                                        formData.toCity
                                                    }
                                                    onChange={handleChange}
                                                    placeholder="New York"
                                                />

                                                {errors.toCity && (
                                                    <span className="quote-error">
                                                        {errors.toCity}
                                                    </span>
                                                )}

                                            </div>


                                            <div className="quote-field">

                                                <label htmlFor="toPostalCode">
                                                    Postal / ZIP Code *
                                                </label>

                                                <input
                                                    id="toPostalCode"
                                                    type="text"
                                                    name="toPostalCode"
                                                    value={
                                                        formData.toPostalCode
                                                    }
                                                    onChange={handleChange}
                                                    placeholder="10001"
                                                />

                                                {errors.toPostalCode && (
                                                    <span className="quote-error">
                                                        {errors.toPostalCode}
                                                    </span>
                                                )}

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* =====================================
                                03 — SHIPMENT
                            ====================================== */}

                            <div className="quote-section">

                                <div className="quote-section-heading">

                                    <span className="quote-section-number">
                                        03
                                    </span>

                                    <div>

                                        <span className="quote-section-kicker">
                                            SHIPMENT
                                        </span>

                                        <h3>
                                            Describe your shipment
                                        </h3>

                                    </div>

                                </div>


                                <div className="quote-shipment-types">

                                    {[
                                        ["documents", "Documents"],
                                        ["package", "Package"],
                                        ["pallet", "Pallet / Skid"],
                                        ["crate", "Crate"],
                                        ["freight", "Freight / Cargo"],
                                        ["other", "Other"]
                                    ].map(
                                        ([value, label]) => (

                                            <button
                                                key={value}
                                                type="button"
                                                className={
                                                    `quote-shipment-type ${
                                                        formData.shipmentType ===
                                                        value
                                                            ? "active"
                                                            : ""
                                                    }`
                                                }
                                                onClick={() =>
                                                    handleShipmentType(
                                                        value
                                                    )
                                                }
                                            >

                                                <FiPackage />

                                                <span>
                                                    {label}
                                                </span>

                                            </button>

                                        )
                                    )}

                                </div>


                                <div className="quote-details-grid">


                                    {/* PIECES */}

                                    <div className="quote-field">

                                        <label htmlFor="pieces">
                                            Number of Pieces *
                                        </label>

                                        <input
                                            id="pieces"
                                            type="number"
                                            name="pieces"
                                            min="1"
                                            step="1"
                                            value={
                                                formData.pieces
                                            }
                                            onChange={handleChange}
                                        />

                                        {errors.pieces && (
                                            <span className="quote-error">
                                                {errors.pieces}
                                            </span>
                                        )}

                                    </div>


                                    {/* WEIGHT */}

                                    <div className="quote-field">

                                        <label htmlFor="weight">
                                            Total Weight *
                                        </label>

                                        <div className="quote-input-with-unit">

                                            <input
                                                id="weight"
                                                type="number"
                                                name="weight"
                                                min="0"
                                                step="0.01"
                                                value={
                                                    formData.weight
                                                }
                                                onChange={handleChange}
                                                placeholder="0"
                                            />

                                            <select
                                                name="weightUnit"
                                                value={
                                                    formData.weightUnit
                                                }
                                                onChange={handleChange}
                                                aria-label="Weight unit"
                                            >
                                                <option value="kg">
                                                    kg
                                                </option>

                                                <option value="lb">
                                                    lb
                                                </option>
                                            </select>

                                        </div>

                                        {errors.weight && (
                                            <span className="quote-error">
                                                {errors.weight}
                                            </span>
                                        )}

                                    </div>

                                </div>


                                {/* DIMENSIONS */}

                                <div className="quote-dimensions">

                                    <div className="quote-dimensions-heading">

                                        <span>
                                            Dimensions
                                        </span>

                                        <small>
                                            Optional
                                        </small>

                                    </div>


                                    <div className="quote-dimensions-grid">

                                        <div className="quote-field">

                                            <label htmlFor="length">
                                                Length
                                            </label>

                                            <input
                                                id="length"
                                                type="number"
                                                name="length"
                                                min="0"
                                                value={
                                                    formData.length
                                                }
                                                onChange={handleChange}
                                                placeholder="0"
                                            />

                                        </div>


                                        <span className="quote-dimension-x">
                                            ×
                                        </span>


                                        <div className="quote-field">

                                            <label htmlFor="width">
                                                Width
                                            </label>

                                            <input
                                                id="width"
                                                type="number"
                                                name="width"
                                                min="0"
                                                value={
                                                    formData.width
                                                }
                                                onChange={handleChange}
                                                placeholder="0"
                                            />

                                        </div>


                                        <span className="quote-dimension-x">
                                            ×
                                        </span>


                                        <div className="quote-field">

                                            <label htmlFor="height">
                                                Height
                                            </label>

                                            <input
                                                id="height"
                                                type="number"
                                                name="height"
                                                min="0"
                                                value={
                                                    formData.height
                                                }
                                                onChange={handleChange}
                                                placeholder="0"
                                            />

                                        </div>


                                        <div className="quote-field quote-unit-field">

                                            <label htmlFor="dimensionUnit">
                                                Unit
                                            </label>

                                            <select
                                                id="dimensionUnit"
                                                name="dimensionUnit"
                                                value={
                                                    formData.dimensionUnit
                                                }
                                                onChange={handleChange}
                                            >

                                                <option value="cm">
                                                    cm
                                                </option>

                                                <option value="in">
                                                    in
                                                </option>

                                            </select>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* =====================================
                                04 — SHIPPING DETAILS
                            ====================================== */}

                            <div className="quote-section">

                                <div className="quote-section-heading">

                                    <span className="quote-section-number">
                                        04
                                    </span>

                                    <div>

                                        <span className="quote-section-kicker">
                                            SHIPPING DETAILS
                                        </span>

                                        <h3>
                                            How should we move it?
                                        </h3>

                                    </div>

                                </div>


                                <div className="quote-details-grid">

                                    <div className="quote-field">

                                        <label htmlFor="serviceType">
                                            Service *
                                        </label>

                                        <select
                                            id="serviceType"
                                            name="serviceType"
                                            value={
                                                formData.serviceType
                                            }
                                            onChange={handleChange}
                                        >

                                            <option value="">
                                                Select a service
                                            </option>

                                            {services.map(
                                                (service) => (
                                                    <option
                                                        key={service}
                                                        value={service}
                                                    >
                                                        {service}
                                                    </option>
                                                )
                                            )}

                                        </select>

                                        {errors.serviceType && (
                                            <span className="quote-error">
                                                {errors.serviceType}
                                            </span>
                                        )}

                                    </div>


                                    <div className="quote-field">

                                        <label htmlFor="readyDate">
                                            Ready / Pickup Date *
                                        </label>

                                        <div className="quote-date-field">

                                            <FiCalendar />

                                            <input
                                                id="readyDate"
                                                type="date"
                                                name="readyDate"
                                                value={
                                                    formData.readyDate
                                                }
                                                onChange={handleChange}
                                            />

                                        </div>

                                        {errors.readyDate && (
                                            <span className="quote-error">
                                                {errors.readyDate}
                                            </span>
                                        )}

                                    </div>

                                </div>


                                <div className="quote-field quote-textarea-field">

                                    <label htmlFor="additionalDetails">
                                        Additional Requirements
                                    </label>

                                    <textarea
                                        id="additionalDetails"
                                        name="additionalDetails"
                                        value={
                                            formData.additionalDetails
                                        }
                                        onChange={handleChange}
                                        rows="5"
                                        placeholder="Tell us about special handling, delivery requirements, timing, dimensions, or anything else we should know."
                                    />

                                </div>

                            </div>


                            {/* =====================================
                                05 — CONTACT
                            ====================================== */}

                            <div className="quote-section">

                                <div className="quote-section-heading">

                                    <span className="quote-section-number">
                                        05
                                    </span>

                                    <div>

                                        <span className="quote-section-kicker">
                                            CONTACT
                                        </span>

                                        <h3>
                                            Where should we send your quote?
                                        </h3>

                                    </div>

                                </div>


                                <div className="quote-contact-grid">

                                    <div className="quote-field">

                                        <label htmlFor="fullName">
                                            Full Name *
                                        </label>

                                        <input
                                            id="fullName"
                                            type="text"
                                            name="fullName"
                                            value={
                                                formData.fullName
                                            }
                                            onChange={handleChange}
                                            autoComplete="name"
                                            placeholder="Your full name"
                                        />

                                        {errors.fullName && (
                                            <span className="quote-error">
                                                {errors.fullName}
                                            </span>
                                        )}

                                    </div>


                                    <div className="quote-field">

                                        <label htmlFor="companyName">
                                            Company Name
                                        </label>

                                        <input
                                            id="companyName"
                                            type="text"
                                            name="companyName"
                                            value={
                                                formData.companyName
                                            }
                                            onChange={handleChange}
                                            autoComplete="organization"
                                            placeholder="Company name"
                                        />

                                    </div>


                                    <div className="quote-field">

                                        <label htmlFor="email">
                                            Business Email *
                                        </label>

                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={
                                                formData.email
                                            }
                                            onChange={handleChange}
                                            autoComplete="email"
                                            placeholder="name@company.com"
                                        />

                                        {errors.email && (
                                            <span className="quote-error">
                                                {errors.email}
                                            </span>
                                        )}

                                    </div>


                                    <div className="quote-field">

                                        <label htmlFor="phone">
                                            Phone *
                                        </label>

                                        <input
                                            id="phone"
                                            type="tel"
                                            name="phone"
                                            value={
                                                formData.phone
                                            }
                                            onChange={handleChange}
                                            autoComplete="tel"
                                            placeholder="+1 000 000 0000"
                                        />

                                        {errors.phone && (
                                            <span className="quote-error">
                                                {errors.phone}
                                            </span>
                                        )}

                                    </div>

                                </div>

                            </div>


                            {/* =====================================
                                SUBMIT
                            ====================================== */}

                            <div className="quote-submit-area">

                                <div className="quote-submit-note">

                                    <FiUser />

                                    <p>
                                        Your request will be reviewed
                                        by the FastDrop logistics team.
                                    </p>

                                </div>


                                <button
                                    type="submit"
                                    className="quote-submit"
                                >

                                    <span>
                                        REQUEST A QUOTE
                                    </span>

                                    <span className="quote-submit-icon">
                                        <FiArrowRight />
                                    </span>

                                </button>

                            </div>

                        </form>

                    </div>

                </section>
            </main>

            {/* =============================
                FOOTER
            ============================== */}
            <Footer />
        </>
    );

};

export default Quote;