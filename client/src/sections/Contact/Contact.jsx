import { motion } from "framer-motion";

import {
    FaArrowRight,
    FaEnvelope,
    FaPhone,
    FaLocationDot
} from "react-icons/fa6";

import "./Contact.css";


const Contact = () => {

    const handleSubmit = (event) => {

        event.preventDefault();

        // Backend / email integration will be added later.
        console.log("Contact form submitted");

    };


    return (

        <section
            className="contact"
            id="contact"
        >

            {/* =========================================
                BACKGROUND
            ========================================= */}

            <div
                className="contact-atmosphere"
                aria-hidden="true"
            >

                <span className="contact-glow contact-glow-one" />
                <span className="contact-glow contact-glow-two" />

                <span className="contact-background-word">
                    CONNECT
                </span>

            </div>


            <div className="contact-container">


                {/* =========================================
                    LEFT — INTRO
                ========================================= */}

                <motion.div
                    className="contact-intro"

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
                        amount: 0.25
                    }}

                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                >

                    <div className="contact-eyebrow">

                        <span className="contact-eyebrow-line" />

                        <span>
                            CONTACT OUR TEAM
                        </span>

                    </div>


                    <h2 className="contact-title">

                        Logistics starts
                        <span>with a conversation.</span>

                    </h2>


                    <p className="contact-description">

                        Tell us what you're moving, where it
                        needs to go, or what support you need.
                        Our team is ready to help you find the
                        right way forward.

                    </p>


                    {/* =====================================
                        CONTACT DETAILS
                    ===================================== */}

                    <div className="contact-details">


                        <a
                            className="contact-detail"
                            href="mailto:info@fastdropinc.com"
                        >

                            <span className="contact-detail-icon">

                                <FaEnvelope />

                            </span>


                            <span className="contact-detail-content">

                                <small>
                                    EMAIL
                                </small>

                                <strong>
                                    Info@fastdropinc.com
                                </strong>

                            </span>

                        </a>


                        <a
                            className="contact-detail"
                            href="tel:+1XXXXXXXXXX"
                        >

                            <span className="contact-detail-icon">

                                <FaPhone />

                            </span>


                            <span className="contact-detail-content">

                                <small>
                                    PHONE
                                </small>

                                <strong>
                                    +1 942-288-1020
                                </strong>

                            </span>

                        </a>


                        <div className="contact-detail">

                            <span className="contact-detail-icon">

                                <FaLocationDot />

                            </span>


                            <span className="contact-detail-content">

                                <small>
                                    SERVICE AREA
                                </small>

                                <strong>
                                    Canada & Worldwide
                                </strong>

                            </span>

                        </div>


                    </div>


                    {/* =====================================
                        STATUS
                    ===================================== */}

                    <div className="contact-status">

                        <span className="contact-status-dot" />

                        <div>

                            <strong>
                                Logistics desk online
                            </strong>

                            <span>
                                Ready to discuss your next shipment.
                            </span>

                        </div>

                    </div>


                </motion.div>


                {/* =========================================
                    RIGHT — FORM
                ========================================= */}

                <motion.div
                    className="contact-form-panel"

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
                        amount: 0.2
                    }}

                    transition={{
                        duration: 0.8,
                        delay: 0.1,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                >

                    <div className="contact-form-header">

                        <span className="contact-form-number">
                            01
                        </span>

                        <div>

                            <span>
                                SEND AN INQUIRY
                            </span>

                            <p>
                                We'll get back to you as soon as possible.
                            </p>

                        </div>

                    </div>


                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >


                        {/* NAME + COMPANY */}

                        <div className="contact-form-row">


                            <div className="contact-field">

                                <label htmlFor="contact-name">
                                    YOUR NAME
                                </label>

                                <input
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    placeholder="Full name"
                                    autoComplete="name"
                                    required
                                />

                            </div>


                            <div className="contact-field">

                                <label htmlFor="contact-company">
                                    COMPANY
                                </label>

                                <input
                                    id="contact-company"
                                    name="company"
                                    type="text"
                                    placeholder="Company name"
                                    autoComplete="organization"
                                />

                            </div>


                        </div>


                        {/* EMAIL + PHONE */}

                        <div className="contact-form-row">


                            <div className="contact-field">

                                <label htmlFor="contact-email">
                                    EMAIL ADDRESS
                                </label>

                                <input
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    placeholder="name@company.com"
                                    autoComplete="email"
                                    required
                                />

                            </div>


                            <div className="contact-field">

                                <label htmlFor="contact-phone">
                                    PHONE
                                </label>

                                <input
                                    id="contact-phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="+1"
                                    autoComplete="tel"
                                />

                            </div>


                        </div>


                        {/* SUBJECT */}

                        <div className="contact-field">

                            <label htmlFor="contact-subject">
                                HOW CAN WE HELP?
                            </label>

                            <select
                                id="contact-subject"
                                name="subject"
                                defaultValue=""
                                required
                            >

                                <option
                                    value=""
                                    disabled
                                >
                                    Select an inquiry
                                </option>

                                <option value="shipping">
                                    Shipping inquiry
                                </option>

                                <option value="quote">
                                    Request a quote
                                </option>

                                <option value="tracking">
                                    Tracking support
                                </option>

                                <option value="business">
                                    Business partnership
                                </option>

                                <option value="other">
                                    Other
                                </option>

                            </select>

                        </div>


                        {/* MESSAGE */}

                        <div className="contact-field">

                            <label htmlFor="contact-message">
                                MESSAGE
                            </label>

                            <textarea
                                id="contact-message"
                                name="message"
                                placeholder="Tell us about your shipment or inquiry..."
                                required
                            />

                        </div>


                        {/* FOOTER */}

                        <div className="contact-form-footer">

                            <p>
                                By submitting this form, you agree
                                that we may contact you regarding
                                your inquiry.
                            </p>


                            <button
                                className="contact-submit"
                                type="submit"
                            >

                                <span>
                                    SEND MESSAGE
                                </span>

                                <span className="contact-submit-icon">

                                    <FaArrowRight />

                                </span>

                            </button>


                        </div>


                    </form>


                </motion.div>


            </div>


            {/* =========================================
                BOTTOM DETAIL
            ========================================= */}

            <div className="contact-bottom">

                <span>
                    FASTDROP WORLDWIDE LOGISTICS
                </span>

                <span>
                    CANADA
                </span>

                <span className="contact-bottom-dot" />

                <span>
                    WORLDWIDE
                </span>

            </div>


        </section>

    );

};


export default Contact;