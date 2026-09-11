// import {
//     Truck,
//     Plane,
//     Ship,
//     Warehouse,
//     Boxes,
//     MapPin
// } from "lucide-react";

// import "./Services.css";


// const services = [

//     {
//         number: "01",
//         title: "Ground Freight",
//         text:
//             "Reliable North American transportation for LTL and full truckload shipments.",
//         icon: Truck
//     },

//     {
//         number: "02",
//         title: "Air & Ocean Freight",
//         text:
//             "International forwarding built around timing, destination and budget.",
//         icon: Plane
//     },

//     {
//         number: "03",
//         title: "Warehousing",
//         text:
//             "Secure storage and organized inventory management for growing operations.",
//         icon: Warehouse
//     },

//     {
//         number: "04",
//         title: "E-Commerce Fulfillment",
//         text:
//             "Pick, pack and ship operations that help online businesses scale.",
//         icon: Boxes
//     },

//     {
//         number: "05",
//         title: "3PL Contract Warehousing",
//         text:
//             "Outsource storage, inventory and distribution to a dedicated logistics partner.",
//         icon: Ship
//     },

//     {
//         number: "06",
//         title: "Final-Mile Delivery",
//         text:
//             "Local and regional delivery solutions that complete the customer journey.",
//         icon: MapPin
//     }

// ];


// function Services() {

//     return (

//         <section
//             className="services section-pad"
//             id="services"
//         >

//             <div className="container">

//                 <div className="section-heading">

//                     <span className="eyebrow">
//                         WHAT WE MOVE
//                     </span>

//                     <h2>
//                         One logistics partner.
//                         <br />
//                         Multiple ways to move forward.
//                     </h2>

//                     <p>
//                         From North American freight to
//                         global forwarding, warehousing and
//                         final-mile delivery.
//                     </p>

//                 </div>


//                 <div className="service-grid">

//                     {services.map(
//                         ({
//                             number,
//                             title,
//                             text,
//                             icon: Icon
//                         }) => (

//                             <article
//                                 className="service-card"
//                                 key={title}
//                             >

//                                 <div className="service-top">

//                                     <span>
//                                         {number}
//                                     </span>

//                                     <Icon />

//                                 </div>


//                                 <h3>
//                                     {title}
//                                 </h3>


//                                 <p>
//                                     {text}
//                                 </p>


//                                 <a href="#quote">
//                                     Explore service
//                                     <span>↗</span>
//                                 </a>

//                             </article>

//                         )
//                     )}

//                 </div>

//             </div>

//         </section>

//     );

// }


// export default Services;

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
            "Reliable North American freight solutions for scheduled, dedicated and time-sensitive shipments.",
        image: groundFreightImg,
        tags: ["LTL", "FTL", "Scheduled"],
    },
    {
        id: "air",
        number: "02",
        title: "Air Freight",
        description:
            "Fast air cargo solutions designed for urgent, high-value and international shipments.",
        image: airFreightImg,
        tags: ["Priority", "International", "Express"],
    },
    {
        id: "ocean",
        number: "03",
        title: "Ocean Freight",
        description:
            "Flexible ocean shipping for containerized cargo and global supply-chain movement.",
        image: oceanFreightImg,
        tags: ["FCL", "LCL", "Global"],
    },
    {
        id: "final-mile",
        number: "04",
        title: "Final Mile",
        description:
            "Dependable final-mile delivery built for retail, e-commerce and business operations.",
        image: finalMileImg,
        tags: ["Same Day", "Scheduled", "B2B"],
    },
    {
        id: "warehousing",
        number: "05",
        title: "3PL Warehousing & Fulfillment",
        description:
            "Flexible contract warehousing, inventory management, order fulfillment and distribution solutions designed to keep your supply chain moving efficiently.",
        image: warehousingImg,
        tags: ["Contract Warehousing", "Inventory", "Fulfillment"],
    },
    {
        id: "ecommerce",
        number: "06",
        title: "E-Commerce Logistics",
        description:
            "End-to-end parcel logistics for online retailers, order fulfillment and returns.",
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

                                <img
                                    src={activeService.image}
                                    alt={activeService.title}
                                />

                                <div className="service-stage-overlay"></div>


                                <div className="service-stage-copy">

                                    <span className="service-stage-number">
                                        {activeService.number}
                                    </span>

                                    <h3>
                                        {activeService.title}
                                    </h3>

                                    <p>
                                        {activeService.description}
                                    </p>


                                    <div className="service-tags">

                                        {activeService.tags.map((tag) => (
                                            <span key={tag}>
                                                {tag}
                                            </span>
                                        ))}

                                    </div>

                                </div>

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