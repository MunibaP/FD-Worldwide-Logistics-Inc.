// import { Quote } from "lucide-react";

// import "./Testimonials.css";


// const testimonials = [

//     {
//         quote:
//             "Fast Drop handled our North American freight shipment with professionalism and care. Delivery was on schedule and communication was clear.",
//         name:
//             "Operations Manager",
//         company:
//             "Manufacturing"
//     },

//     {
//         quote:
//             "We needed reliable e-commerce fulfillment with flexible warehousing. Fast Drop delivered a solution that could scale with our growth.",
//         name:
//             "Founder",
//         company:
//             "E-Commerce"
//     },

//     {
//         quote:
//             "International freight can be complicated. Fast Drop made the process straightforward from documentation through delivery.",
//         name:
//             "Import / Export Director",
//         company:
//             "Distribution"
//     }

// ];


// function Testimonials() {

//     return (

//         <section className="testimonials section-pad">

//             <div className="container">

//                 <div className="section-heading center">

//                     <span className="eyebrow">
//                         CLIENT EXPERIENCE
//                     </span>

//                     <h2>
//                         The relationship matters
//                         as much as the shipment.
//                     </h2>

//                 </div>


//                 <div className="testimonial-grid">

//                     {testimonials.map(
//                         (item) => (

//                             <article
//                                 className="testimonial"
//                                 key={item.name}
//                             >

//                                 <Quote />

//                                 <p>
//                                     {item.quote}
//                                 </p>

//                                 <div>

//                                     <strong>
//                                         {item.name}
//                                     </strong>

//                                     <span>
//                                         {item.company}
//                                     </span>

//                                 </div>

//                             </article>

//                         )
//                     )}

//                 </div>

//             </div>

//         </section>

//     );

// }


// export default Testimonials;


import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import "./Testimonials.css";


const testimonials = [
    {
        id: "01",
        quote:
            "FastDrop made a complex cross-border shipment feel straightforward. Communication was clear from pickup through delivery, and our team always knew what to expect.",
        name: "Aisha Rahman",
        role: "Operations Manager",
        location: "Toronto, Canada",
        service: "Cross-Border Freight",
    },

    {
        id: "02",
        quote:
            "What stood out was the consistency. Our freight was handled professionally, updates were timely, and the entire process felt organized from beginning to end.",
        name: "Daniel Kim",
        role: "Supply Chain Coordinator",
        location: "Seoul, South Korea",
        service: "Air Freight",
    },

    {
        id: "03",
        quote:
            "We needed a logistics partner that could coordinate an international ocean shipment without adding complexity. The process was smooth, responsive, and well managed.",
        name: "Sofia Almeida",
        role: "Import Manager",
        location: "Lisbon, Portugal",
        service: "Ocean Freight",
    },

    {
        id: "04",
        quote:
            "FastDrop gave our team the flexibility we needed during a busy fulfillment period. Their communication and attention to detail made a noticeable difference.",
        name: "Omar Hassan",
        role: "E-Commerce Director",
        location: "Dubai, UAE",
        service: "Warehousing & Fulfillment",
    },

    {
        id: "05",
        quote:
            "From scheduling to final delivery, everything was handled with professionalism. Having dependable updates throughout the shipment gave our team confidence.",
        name: "Priya Mehta",
        role: "Procurement Lead",
        location: "Mumbai, India",
        service: "Ground Freight",
    },

    {
        id: "06",
        quote:
            "Our delivery requirements were time-sensitive and involved several moving parts. The coordination was efficient, communication stayed clear, and the shipment arrived as planned.",
        name: "Mateo García",
        role: "Logistics Coordinator",
        location: "Madrid, Spain",
        service: "Final Mile",
    },
];


function Testimonials() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const testimonial = testimonials[activeIndex];


    const nextTestimonial = () => {

        setDirection(1);

        setActiveIndex((current) =>
            current === testimonials.length - 1
                ? 0
                : current + 1
        );
    };


    const previousTestimonial = () => {

        setDirection(-1);

        setActiveIndex((current) =>
            current === 0
                ? testimonials.length - 1
                : current - 1
        );
    };


    const quoteVariants = {

        enter: (direction) => ({
            opacity: 0,
            x: direction > 0 ? 45 : -45,
        }),

        center: {
            opacity: 1,
            x: 0,
        },

        exit: (direction) => ({
            opacity: 0,
            x: direction > 0 ? -45 : 45,
        }),

    };


    return (

        <section
            className="testimonials"
            aria-labelledby="testimonials-title"
        >
            <div
                className="testimonials-atmosphere"
                aria-hidden="true"
            >
                <span className="testimonial-route testimonial-route-left" />
                <span className="testimonial-route testimonial-route-right" />

                <span className="testimonial-coordinate coordinate-left">
                    43.5890° N
                </span>

                <span className="testimonial-coordinate coordinate-right">
                    WORLDWIDE NETWORK
                </span>
            </div>

            <div className="testimonials-container">


                {/* =========================================
                    SECTION HEADER
                ========================================= */}

                <motion.div
                    className="testimonials-header"

                    initial={{
                        opacity: 0,
                        y: 25,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}

                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                >

                    <div className="testimonials-eyebrow">

                        <span className="testimonials-eyebrow-line" />

                        <span>
                            CLIENT VOICES
                        </span>

                        <span className="testimonials-eyebrow-line" />

                    </div>


                    <h2
                        id="testimonials-title"
                        className="testimonials-title"
                    >
                        Trusted Through
                        <span> Every Mile.</span>
                    </h2>


                    <p className="testimonials-intro">
                        Built on dependable service, clear communication,
                        and logistics that keep businesses moving.
                    </p>

                </motion.div>


                {/* =========================================
                    TESTIMONIAL STAGE
                ========================================= */}

                <div className="testimonials-stage">


                    {/* Decorative quotation mark */}

                    <span
                        className="testimonials-quote-mark"
                        aria-hidden="true"
                    >
                        “
                    </span>

                    <span
                        className="testimonials-background-number"
                        aria-hidden="true"
                    >
                        {testimonial.id}
                    </span>


                    <div className="testimonials-quote-window">

                        <AnimatePresence
                            mode="wait"
                            custom={direction}
                        >

                            <motion.article
                                key={testimonial.id}

                                className="testimonial"

                                custom={direction}
                                variants={quoteVariants}

                                initial="enter"
                                animate="center"
                                exit="exit"

                                transition={{
                                    duration: 0.45,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >

                                <div className="testimonial-service">
                                    {testimonial.service}
                                </div>


                                <blockquote className="testimonial-quote">
                                    “{testimonial.quote}”
                                </blockquote>


                                <div className="testimonial-person">

                                    <strong>
                                        {testimonial.name}
                                    </strong>

                                    <span>
                                        {testimonial.role}
                                    </span>

                                    <span className="testimonial-location">
                                        {testimonial.location}
                                    </span>

                                </div>

                            </motion.article>

                        </AnimatePresence>

                    </div>


                    {/* =====================================
                        NAVIGATION
                    ===================================== */}

                    <div className="testimonials-navigation">


                        <button
                            type="button"
                            className="testimonials-arrow"
                            onClick={previousTestimonial}
                            aria-label="Previous testimonial"
                        >
                            <FiArrowLeft />
                        </button>


                        <div className="testimonials-progress">

                            <span className="testimonials-current">
                                {String(activeIndex + 1).padStart(2, "0")}
                            </span>


                            <div className="testimonials-progress-track">

                                <motion.div
                                    className="testimonials-progress-fill"

                                    animate={{
                                        width:
                                            `${((activeIndex + 1) / testimonials.length) * 100}%`,
                                    }}

                                    transition={{
                                        duration: 0.45,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                />

                            </div>


                            <span className="testimonials-total">
                                {String(testimonials.length).padStart(2, "0")}
                            </span>

                        </div>


                        <button
                            type="button"
                            className="testimonials-arrow"
                            onClick={nextTestimonial}
                            aria-label="Next testimonial"
                        >
                            <FiArrowRight />
                        </button>


                    </div>

                </div>


                {/* =========================================
                    SERVICE STRIP
                ========================================= */}

                <div className="testimonials-services">

                    <span>Air Freight</span>
                    <span>Ocean Freight</span>
                    <span>Ground Freight</span>
                    <span>3PL & Fulfillment</span>
                    <span>Final Mile</span>

                </div>


            </div>

        </section>

    );

}


export default Testimonials;