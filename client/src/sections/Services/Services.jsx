import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./Services.css";

import groundFreightImg from "../../assets/services/GroundFreight.jpg";
import airFreightImg from "../../assets/services/AirFreight.png";
import oceanFreightImg from "../../assets/services/OceanFreight.png";
import finalMileImg from "../../assets/services/FinalMile.png";
import warehousingImg from "../../assets/services/3PLWarehousing&Fulfillment.png";
import ecommerceImg from "../../assets/services/Ecommerce.png";


const services = [
    {
        id: "ground",
        number: "01",
        title: "Ground Freight",
        description:
            "Reliable ground freight across North America, with flexible transportation options for scheduled, dedicated and time-sensitive shipments.",
        image: groundFreightImg,
        tags: ["LTL", "FTL", "Scheduled"],
    },
    {
        id: "air",
        number: "02",
        title: "Air Freight",
        description:
            "Fast, dependable air freight solutions for time-sensitive cargo, connecting businesses to destinations across North America and international markets.",
        image: airFreightImg,
        tags: ["Express", "Priority", "Global"],
    },
    {
        id: "ocean",
        number: "03",
        title: "Ocean Freight",
        description:
            "Flexible ocean freight solutions for international cargo, with dependable coordination for containerized shipments moving through global trade networks.",
        image: oceanFreightImg,
        tags: ["FCL", "LCL", "Global"],
    },
    {
        id: "final-mile",
        number: "04",
        title: "Final Mile",
        description:
            "Reliable final-mile delivery from distribution point to destination, helping businesses reach customers with timely, professional and dependable service.",
        image: finalMileImg,
        tags: ["B2B", "B2C", "Scheduled"],
    },
    {
        id: "warehousing",
        number: "05",
        title: "3PL Warehousing & Fulfillment",
        description:
            "End-to-end third-party logistics support for storage, inventory management, order fulfillment and distribution—all coordinated around your business needs.",
        image: warehousingImg,
        tags: ["Contract Warehousing", "Inventory", "Fulfillment"],
    },
    {
        id: "ecommerce",
        number: "06",
        title: "E-Commerce Logistics",
        description:
            "Scalable e-commerce logistics supporting the journey from order fulfillment and parcel processing through shipping and final delivery to your customers.",
        image: ecommerceImg,
        tags: ["Parcel", "Returns", "E-Commerce"],
    },
];


function Services() {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeService = services[activeIndex];


    return (
        <section
            className="services section"
            id="services"
        >
            <div className="services-container">

                <div className="services-heading">
                    <div className="services-kicker">
                        <span></span>
                        OUR LOGISTICS SOLUTIONS
                    </div>

                    <h2>
                        One network.
                        <br />
                        <em>Every way you move.</em>
                    </h2>

                    <p>
                        Flexible logistics built around the needs of modern
                        businesses — from freight and fulfillment to final-mile
                        delivery.
                    </p>
                </div>


                <div className="services-showcase">

                    {/* LEFT NAVIGATION */}

                    <div className="services-nav">

                        {services.map((service, index) => {

                            const isActive = index === activeIndex;

                            return (
                                <button
                                    key={service.id}
                                    className={`service-nav-item ${
                                        isActive ? "active" : ""
                                    }`}
                                    onClick={() => setActiveIndex(index)}
                                    onMouseEnter={() => setActiveIndex(index)}
                                >
                                    <span className="service-number">
                                        {service.number}
                                    </span>

                                    <span className="service-nav-title">
                                        {service.title}
                                    </span>

                                    <span className="service-nav-arrow">
                                        →
                                    </span>
                                </button>
                            );
                        })}

                    </div>


                    {/* RIGHT VISUAL */}

                    <div className="services-stage">

                        <AnimatePresence mode="wait">

                            <motion.div
                                key={activeService.id}
                                className="service-stage-content"

                                initial={{
                                    opacity: 0
                                }}

                                animate={{
                                    opacity: 1
                                }}

                                exit={{
                                    opacity: 0
                                }}

                                transition={{
                                    duration: 0.38,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                            >

                                {/* IMAGE */}
                                <motion.img
                                    src={activeService.image}
                                    alt={activeService.title}

                                    initial={{
                                        scale: 1.045
                                    }}

                                    animate={{
                                        scale: 1
                                    }}

                                    transition={{
                                        duration: 0.8,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                />


                                {/* OVERLAY */}
                                <div className="service-stage-overlay"></div>


                                {/* CONTENT */}
                                <motion.div
                                    className="service-stage-copy"

                                    initial={{
                                        opacity: 0,
                                        y: 16
                                    }}

                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}

                                    transition={{
                                        duration: 0.45,
                                        delay: 0.12,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                >

                                    <motion.span
                                        className="service-stage-number"

                                        initial={{
                                            opacity: 0,
                                            x: -8
                                        }}

                                        animate={{
                                            opacity: 1,
                                            x: 0
                                        }}

                                        transition={{
                                            duration: 0.35,
                                            delay: 0.15
                                        }}
                                    >
                                        {activeService.number}
                                    </motion.span>


                                    <h3>
                                        {activeService.title}
                                    </h3>


                                    <p>
                                        {activeService.description}
                                    </p>


                                    <motion.div
                                        className="service-tags"

                                        initial={{
                                            opacity: 0,
                                            y: 8
                                        }}

                                        animate={{
                                            opacity: 1,
                                            y: 0
                                        }}

                                        transition={{
                                            duration: 0.4,
                                            delay: 0.22
                                        }}
                                    >

                                        {activeService.tags.map((tag) => (
                                            <span key={tag}>
                                                {tag}
                                            </span>
                                        ))}

                                    </motion.div>

                                </motion.div>

                            </motion.div>


                        </AnimatePresence>

                    </div>

                </div>


                {/* INDUSTRY RAIL */}

                <div className="services-industries">

                    <span className="industries-label">
                        BUILT FOR
                    </span>

                    <div className="industries-list">
                        <span>E-Commerce</span>
                        <span>Retail</span>
                        <span>Healthcare</span>
                        <span>Manufacturing</span>
                        <span>B2B</span>
                    </div>

                </div>

            </div>
        </section>
    );
}


export default Services;