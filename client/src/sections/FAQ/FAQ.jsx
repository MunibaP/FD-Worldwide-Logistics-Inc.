// import { useState } from "react";

// import {
//     Plus
// } from "lucide-react";

// import "./FAQ.css";


// const questions = [

//     {
//         question:
//             "What services does Fast Drop provide?",

//         answer:
//             "Fast Drop provides North American ground freight, air and ocean forwarding, warehousing, e-commerce fulfillment, 3PL contract warehousing and final-mile delivery."
//     },

//     {
//         question:
//             "Can I track my shipment online?",

//         answer:
//             "Yes. The website includes a shipment tracking interface designed to connect directly to the Fast Drop tracking API."
//     },

//     {
//         question:
//             "Can I calculate shipment dimensions?",

//         answer:
//             "Yes. The calculator estimates cubic volume and volumetric weight from your shipment dimensions, pieces and weight."
//     },

//     {
//         question:
//             "Do you handle cross-border shipments?",

//         answer:
//             "Fast Drop's current service offering includes North American transportation and international air and ocean forwarding."
//     },

//     {
//         question:
//             "How do I request a quote?",

//         answer:
//             "Use the request-a-quote form and provide the shipment details. The form can be connected to the existing Fast Drop backend."
//     }

// ];


// function FAQ() {

//     const [open, setOpen] = useState(null);


//     return (

//         <section className="faq section-pad">

//             <div className="container faq-grid">


//                 <div>

//                     <span className="eyebrow">
//                         FAQ
//                     </span>

//                     <h2>
//                         Questions before
//                         you ship?
//                     </h2>

//                 </div>


//                 <div>

//                     {questions.map(
//                         (item, index) => {

//                             const active =
//                                 open === index;


//                             return (

//                                 <div
//                                     className={`faq-item ${
//                                         active
//                                             ? "active"
//                                             : ""
//                                     }`}
//                                     key={item.question}
//                                 >

//                                     <button
//                                         onClick={() =>
//                                             setOpen(
//                                                 active
//                                                     ? null
//                                                     : index
//                                             )
//                                         }
//                                     >

//                                         {item.question}

//                                         <Plus />

//                                     </button>


//                                     <div className="faq-answer">

//                                         <p>
//                                             {item.answer}
//                                         </p>

//                                     </div>

//                                 </div>

//                             );

//                         }
//                     )}

//                 </div>

//             </div>

//         </section>

//     );

// }


// export default FAQ;


import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";

import "./FAQ.css";


const faqItems = [
    {
        id: "01",
        question: "What logistics services does FastDrop provide?",
        answer:
            "FastDrop provides flexible logistics solutions for businesses with local and broader shipping needs. Service options can be tailored around the type of shipment, destination, timing, and operational requirements."
    },
    {
        id: "02",
        question: "Where can FastDrop deliver?",
        answer:
            "FastDrop supports shipments across a range of destinations and service areas. Availability depends on the shipment, route, and service selected, so specific delivery requirements can be confirmed when requesting a quote."
    },
    {
        id: "03",
        question: "How can I track my shipment?",
        answer:
            "Use the shipment tracking tool on the FastDrop website and enter your tracking number to view the latest available status and shipment information."
    },
    {
        id: "04",
        question: "How do I request a shipping quote?",
        answer:
            "Complete the Get a Quote form with your shipment details, including origin, destination, shipment information, and contact details. The information helps FastDrop review your request and determine the appropriate logistics solution."
    },
    {
        id: "05",
        question: "What information should I have ready for a quote?",
        answer:
            "It helps to have the shipment origin and destination, package or freight type, weight, dimensions, quantity, and any important timing or handling requirements ready when submitting your request."
    },
    {
        id: "06",
        question: "Can FastDrop support recurring business shipments?",
        answer:
            "Businesses with recurring logistics requirements can discuss their shipping frequency, routes, volumes, and operational needs with FastDrop to determine an appropriate service arrangement."
    }
];


const FAQ = () => {

    const [activeFAQ, setActiveFAQ] = useState(0);


    const toggleFAQ = (index) => {

        setActiveFAQ((current) =>
            current === index ? null : index
        );

    };


    return (

        <section
            className="faq"
            id="faq"
        >

            {/* =========================================
                BACKGROUND DETAILS
            ========================================= */}

            <div
                className="faq-atmosphere"
                aria-hidden="true"
            >

                <span className="faq-route faq-route-one" />

                <span className="faq-route faq-route-two" />

                <span className="faq-background-text">
                    FAQ
                </span>

            </div>


            <div className="faq-container">


                {/* =========================================
                    LEFT SIDE
                ========================================= */}

                <div className="faq-intro">


                    <div className="faq-eyebrow">

                        <span className="faq-eyebrow-line" />

                        <span>
                            NEED TO KNOW
                        </span>

                    </div>


                    <h2 className="faq-title">

                        Questions Before

                        <span>
                            You Ship?
                        </span>

                    </h2>


                    <p className="faq-description">

                        Clear answers to common questions about
                        shipping, tracking, quotes, and working
                        with FastDrop.

                    </p>


                    <div className="faq-intro-detail">

                        <span className="faq-detail-dot" />

                        <div>

                            <span>
                                STILL HAVE A QUESTION?
                            </span>

                            <p>
                                Tell us about your shipment and
                                our team can help with the next step.
                            </p>

                        </div>

                    </div>


                </div>


                {/* =========================================
                    FAQ ACCORDION
                ========================================= */}

                <div className="faq-list">


                    {faqItems.map((item, index) => {

                        const isOpen =
                            activeFAQ === index;


                        return (

                            <article
                                className={`faq-item ${
                                    isOpen ? "is-open" : ""
                                }`}
                                key={item.id}
                            >


                                <button
                                    className="faq-question"
                                    type="button"
                                    onClick={() =>
                                        toggleFAQ(index)
                                    }
                                    aria-expanded={isOpen}
                                >


                                    <span className="faq-number">
                                        {item.id}
                                    </span>


                                    <span className="faq-question-text">
                                        {item.question}
                                    </span>


                                    <span
                                        className="faq-toggle"
                                        aria-hidden="true"
                                    >

                                        <FaPlus />

                                    </span>


                                </button>


                                <AnimatePresence initial={false}>

                                    {isOpen && (

                                        <motion.div
                                            className="faq-answer-wrapper"

                                            initial={{
                                                height: 0,
                                                opacity: 0
                                            }}

                                            animate={{
                                                height: "auto",
                                                opacity: 1
                                            }}

                                            exit={{
                                                height: 0,
                                                opacity: 0
                                            }}

                                            transition={{
                                                height: {
                                                    duration: 0.4,
                                                    ease: [0.22, 1, 0.36, 1]
                                                },

                                                opacity: {
                                                    duration: 0.25
                                                }
                                            }}
                                        >

                                            <div className="faq-answer">

                                                <span className="faq-answer-line" />

                                                <p>
                                                    {item.answer}
                                                </p>

                                            </div>

                                        </motion.div>

                                    )}

                                </AnimatePresence>


                            </article>

                        );

                    })}


                </div>


            </div>

        </section>

    );

};


export default FAQ;