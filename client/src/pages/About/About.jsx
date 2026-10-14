
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FiArrowUpRight,
//   FiArrowRight,
//   FiPlus,
//   FiMinus,
//   FiCheck,
// } from "react-icons/fi";

// import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../sections/Footer/Footer";

// import aboutHero from "../../assets/About/About Hero.png";
// import meetFastDrop from "../../assets/About/Meet FastDrop.png";
// import differenceImage from "../../assets/About/WhatMakesUsDifferent.png";
// import valuesImage from "../../assets/About/OurValue &Commitment.png";

// import "./About.css";

// const reveal = {
//   initial: { opacity: 0, y: 35 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, amount: 0.15 },
//   transition: { duration: 0.7, ease: "easeOut" },
// };

// /* ==========================================
//    01 — ABOUT HERO
// ========================================== */

// function AboutHero() {
//   return (
//     <section className="about-hero">
//       <div className="about-container about-hero__layout">

//         <motion.div className="about-hero__content" {...reveal}>
//           <span className="about-eyebrow">
//             ABOUT FASTDROP
//           </span>

//           <h1>
//             Moving Business Forward.
//             <span> Connecting the World.</span>
//           </h1>

//           <p>
//             Behind every successful delivery is a team
//             committed to making logistics simpler, more
//             connected, and more dependable.
//           </p>

//           <p>
//             At FastDrop Worldwide Logistics, we believe
//             transportation is about more than moving
//             shipments. It's about building confidence
//             and helping businesses move forward.
//           </p>

//           <div className="about-hero__actions">
//             <a href="#meet-fastdrop" className="about-button about-button--red">
//               Discover Our Company
//               <FiArrowUpRight />
//             </a>
//           </div>
//         </motion.div>

//         {/*RIGHT - ABOUT HERO IMAGE*/}
//         <motion.div
//           className="about-hero__visual"
//           initial={{ opacity: 0, x: 35 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <img
//             src={aboutHero}
//             alt="FastDrop customer support and shipment communication illustration"
//           />

//           <div className="about-hero__visual-footer">
//             <span>PEOPLE FIRST. DELIVERY ALWAYS.</span>
//             <FiArrowUpRight />
//           </div>
//         </motion.div>

//       </div>

//       <div className="about-hero__bottom">
//         <span>FASTDROP WORLDWIDE LOGISTICS INC.</span>
//         <span>OUR COMPANY / OUR COMMITMENT</span>
//       </div>
//     </section>
//   );
// }

// /* ==========================================
//    02 — MEET FASTDROP
// ========================================== */

// function MeetFastDrop() {
//   return (
//     <section
//       className="about-section about-meet"
//       id="meet-fastdrop"
//     >
//       <div className="about-container">

//         <motion.div className="about-meet__heading" {...reveal}>
//           <span className="about-eyebrow">
//             01 / WHO WE ARE
//           </span>

//           <h2>
//             Meet FastDrop.
//             <br />
//             <em>Driven by People.</em>
//           </h2>

//           <p>
//             Logistics connects businesses, people, and
//             opportunities. Our approach brings together
//             practical solutions, clear communication,
//             and a commitment to every shipment.
//           </p>
//         </motion.div>

//         <motion.div className="about-meet__visual" {...reveal}>
//           <img
//             src={meetFastDrop}
//             alt="Illustrative FastDrop logistics team outside a distribution warehouse"
//           />
//         </motion.div>

//         <div className="about-meet__details">

//           <motion.div {...reveal}>
//             <span className="about-detail-number">01</span>
//             <h3>Our Mission</h3>
//             <p>
//               To simplify logistics through dependable
//               transportation solutions, responsive
//               communication, and a customer-focused
//               approach that helps businesses operate
//               with confidence.
//             </p>
//           </motion.div>

//           <motion.div {...reveal}>
//             <span className="about-detail-number">02</span>
//             <h3>Our Vision</h3>
//             <p>
//               To build meaningful connections across
//               the logistics industry and become a
//               trusted partner for businesses seeking
//               reliable, adaptable shipping solutions.
//             </p>
//           </motion.div>

//           <motion.div {...reveal}>
//             <span className="about-detail-number">03</span>
//             <h3>Our Approach</h3>
//             <p>
//               We focus on understanding customer needs,
//               communicating clearly, and approaching
//               each delivery with care and accountability.
//             </p>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

// /* ==========================================
//    03 — WHAT MAKES US DIFFERENT
// ========================================== */

// const differences = [
//   {
//     title: "People Behind Every Shipment",
//     description:
//       "We believe strong logistics relationships begin with people. Our approach emphasizes communication, responsiveness, and understanding each customer's priorities.",
//   },
//   {
//     title: "Solutions Built Around Your Needs",
//     description:
//       "Different shipments call for different approaches. We focus on practical logistics solutions that reflect the requirements of each business.",
//   },
//   {
//     title: "Clarity Through Communication",
//     description:
//       "Clear information and timely updates help customers plan with greater confidence throughout the shipping process.",
//   },
//   {
//     title: "A Commitment to Reliability",
//     description:
//       "We approach every shipment with attention to detail, accountability, and a focus on dependable service.",
//   },
// ];

// function WhatMakesUsDifferent() {
//   const [active, setActive] = useState(0);

//   return (
//     <section className="about-section about-difference">
//       <div className="about-container">

//         <motion.div className="about-difference__heading" {...reveal}>
//           <span className="about-eyebrow">
//             02 / OUR APPROACH
//           </span>

//           <h2>
//             What Makes Us
//             <br />
//             <em>Different.</em>
//           </h2>

//           <p>
//             Our approach combines practical logistics
//             thinking with a strong commitment to
//             communication and customer relationships.
//           </p>
//         </motion.div>

//         <div className="about-difference__layout">

//           <motion.div
//             className="about-difference__visual"
//             {...reveal}
//           >
//             <img
//               src={differenceImage}
//               alt="Illustrative FastDrop logistics operations and shipment tracking center"
//             />

//             <div className="about-difference__image-caption">
//               <span>CONNECTED OPERATIONS</span>
//               <FiArrowUpRight />
//             </div>
//           </motion.div>

//           <motion.div
//             className="about-difference__list"
//             {...reveal}
//           >
//             {differences.map((item, index) => (
//               <div
//                 key={item.title}
//                 className={`about-difference__item ${
//                   active === index ? "is-active" : ""
//                 }`}
//               >
//                 <button
//                   type="button"
//                   aria-expanded={active === index}
//                   aria-controls={`difference-panel-${index}`}
//                   onClick={() =>
//                     setActive(active === index ? -1 : index)
//                   }
//                 >
//                   <span className="about-difference__number">
//                     0{index + 1}
//                   </span>

//                   <span className="about-difference__title">
//                     {item.title}
//                   </span>

//                   <span className="about-difference__icon">
//                     {active === index ? <FiMinus /> : <FiPlus />}
//                   </span>
//                 </button>

//                 <AnimatePresence initial={false}>
//                   {active === index && (
//                     <motion.div
//                       id={`difference-panel-${index}`}
//                       className="about-difference__answer"
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <p>{item.description}</p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ))}
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

// /* ==========================================
//    04 — OUR VALUES & COMMITMENT
// ========================================== */

// const values = [
//   {
//     number: "01",
//     title: "Integrity",
//     description:
//       "Building trust through honesty, transparency, and responsible business practices.",
//   },
//   {
//     number: "02",
//     title: "Reliability",
//     description:
//       "Approaching every commitment with care, consistency, and accountability.",
//   },
//   {
//     number: "03",
//     title: "Collaboration",
//     description:
//       "Working together to create better experiences for customers and partners.",
//   },
//   {
//     number: "04",
//     title: "Progress",
//     description:
//       "Continuously seeking smarter and more effective ways to support logistics needs.",
//   },
// ];

// function OurValues() {
//   return (
//     <section className="about-section about-values">
//       <div className="about-container">

//         <motion.div className="about-values__heading" {...reveal}>
//           <span className="about-eyebrow">
//             03 / WHAT WE BELIEVE
//           </span>

//           <h2>
//             Our Values.
//             <br />
//             <em>Our Commitment.</em>
//           </h2>

//           <p>
//             The principles that guide how we work,
//             communicate, and build relationships.
//           </p>
//         </motion.div>

//         <motion.div className="about-values__image" {...reveal}>
//           <img
//             src={valuesImage}
//             alt="Illustration of logistics professionals collaborating around a tablet"
//           />
//         </motion.div>

//         <div className="about-values__grid">
//           {values.map((value) => (
//             <motion.article
//               className="about-value"
//               key={value.number}
//               {...reveal}
//             >
//               <div className="about-value__top">
//                 <span className="about-value__number">
//                   {value.number}
//                 </span>
//                 <FiCheck className="about-value__check" />
//               </div>

//               <div>
//                 <h3>{value.title}</h3>
//                 <p>{value.description}</p>
//               </div>

//               <FiArrowUpRight className="about-value__arrow" />
//             </motion.article>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// /* ==========================================
//    05 — CLOSING CTA
// ========================================== */

// function AboutClosing() {
//   return (
//     <section className="about-closing">
//       <div className="about-container about-closing__inner">

//         <motion.div {...reveal}>
//           <span className="about-eyebrow">
//             THE NEXT MILE STARTS HERE
//           </span>

//           <h2>
//             Let's Move Forward.
//             <br />
//             <em>Together.</em>
//           </h2>

//           <p>
//             Discover how FastDrop can support your
//             business with logistics solutions built
//             around your needs.
//           </p>
//         </motion.div>

//         <Link
//           to="/quote"
//           className="about-button about-button--red"
//         >
//           Request a Quote
//           <FiArrowRight />
//         </Link>

//       </div>
//     </section>
//   );
// }

// /* ==========================================
//    ABOUT PAGE
// ========================================== */

// export default function About() {
//   return (
//     <>
//       <Navbar />

//       <main className="about-page">
//         <AboutHero />
//         <MeetFastDrop />
//         <WhatMakesUsDifferent />
//         <OurValues />
//         <AboutClosing />
//       </main>

//       <Footer />
//     </>
//   );
// }




import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FiArrowUpRight,
    FiArrowRight,
    FiCheck,
} from "react-icons/fi";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../sections/Footer/Footer";

import aboutHero from "../../assets/About/About Hero.png";
import meetFastDrop from "../../assets/About/Meet FastDrop.png";
import differenceImage from "../../assets/About/WhatMakesUsDifferent.png";
import valuesImage from "../../assets/About/OurValue &Commitment.png";

import "./About.css";

const reveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: 0.65, ease: "easeOut" },
};

const differences = [
    {
        number: "01",
        title: "People Behind Every Shipment",
        description:
            "We believe strong logistics relationships begin with people. Our approach emphasizes communication, responsiveness, and understanding each customer's priorities.",
    },
    {
        number: "02",
        title: "Solutions Built Around Your Needs",
        description:
            "Different shipments call for different approaches. We focus on practical logistics solutions that reflect the requirements of each business.",
    },
    {
        number: "03",
        title: "Clarity Through Communication",
        description:
            "Clear information and timely updates help customers plan with greater confidence throughout the shipping process.",
    },
    {
        number: "04",
        title: "A Commitment to Reliability",
        description:
            "We approach every shipment with attention to detail, accountability, and a focus on dependable service.",
    },
];

const values = [
    {
        number: "01",
        title: "Integrity",
        description:
            "Building trust through honesty, transparency, and responsible business practices.",
    },
    {
        number: "02",
        title: "Reliability",
        description:
            "Approaching every commitment with care, consistency, and accountability.",
    },
    {
        number: "03",
        title: "Collaboration",
        description:
            "Working together to create better experiences for customers and partners.",
    },
    {
        number: "04",
        title: "Progress",
        description:
            "Continuously seeking smarter and more effective ways to support logistics needs.",
    },
];

/* ==========================================
   01 — CORPORATE HERO
========================================== */

function AboutHero() {
    return (
        <section className="about-hero">

            <div className="about-container">

                <motion.div
                    className="about-hero__intro"
                    {...reveal}
                >
                    <span className="about-eyebrow">
                        ABOUT FASTDROP WORLDWIDE LOGISTICS
                    </span>

                    <h1>
                        Moving Business Forward.
                        <span> Connecting the World.</span>
                    </h1>

                    <div className="about-hero__intro-bottom">

                        <p>
                            Behind every successful delivery is a
                            team committed to making logistics
                            simpler, more connected, and more
                            dependable.
                        </p>

                        <a
                            href="#meet-fastdrop"
                            className="about-text-link"
                        >
                            Discover Our Company
                            <FiArrowUpRight />
                        </a>

                    </div>
                </motion.div>

                <motion.figure
                    className="about-hero__photo"
                    {...reveal}
                >
                    <img
                        src={aboutHero}
                        alt="Illustration of FastDrop customer support and shipment communication"
                    />

                    <figcaption>
                        <span>
                            PEOPLE FIRST. DELIVERY ALWAYS.
                        </span>
                        <span>
                            FASTDROP WORLDWIDE LOGISTICS INC.
                        </span>
                    </figcaption>
                </motion.figure>

            </div>

        </section>
    );
}

/* ==========================================
   02 — OUR COMPANY STORY
========================================== */

function MeetFastDrop() {
    return (
        <section
            className="about-section about-story"
            id="meet-fastdrop"
        >
            <div className="about-container">

                <div className="about-story__layout">

                    <motion.div
                        className="about-story__photo"
                        {...reveal}
                    >
                        <img
                            src={meetFastDrop}
                            alt="Illustration of FastDrop logistics team outside a warehouse"
                            loading="lazy"
                        />
                    </motion.div>

                    <motion.div
                        className="about-story__content"
                        {...reveal}
                    >
                        <span className="about-eyebrow">
                            01 / WHO WE ARE
                        </span>

                        <h2>
                            Built on Trust.
                            <em> Driven by People.</em>
                        </h2>

                        <p className="about-lead">
                            Logistics is about more than moving
                            shipments. It's about connecting
                            businesses, people, and opportunities.
                        </p>

                        <p>
                            At FastDrop Worldwide Logistics, we
                            believe transportation should help
                            businesses move forward with confidence.
                            Our approach brings together practical
                            solutions, clear communication, and
                            a commitment to every shipment.
                        </p>

                        <div className="about-story__signature">
                            <span className="about-story__line" />
                            <span>
                                OUR COMPANY. OUR COMMITMENT.
                            </span>
                        </div>
                    </motion.div>

                </div>

                <div className="about-pillars">

                    <motion.article {...reveal}>
                        <span className="about-number">01</span>
                        <h3>Our Mission</h3>
                        <p>
                            To simplify logistics through dependable
                            transportation solutions, responsive
                            communication, and a customer-focused
                            approach that helps businesses operate
                            with confidence.
                        </p>
                    </motion.article>

                    <motion.article {...reveal}>
                        <span className="about-number">02</span>
                        <h3>Our Vision</h3>
                        <p>
                            To build meaningful connections across
                            the logistics industry and become a
                            trusted partner for businesses seeking
                            reliable, adaptable shipping solutions.
                        </p>
                    </motion.article>

                    <motion.article {...reveal}>
                        <span className="about-number">03</span>
                        <h3>Our Approach</h3>
                        <p>
                            We focus on understanding customer needs,
                            communicating clearly, and approaching
                            each delivery with care and accountability.
                        </p>
                    </motion.article>

                </div>

            </div>
        </section>
    );
}

/* ==========================================
   03 — WHAT MAKES US DIFFERENT
========================================== */

function WhatMakesUsDifferent() {
    return (
        <section className="about-section about-difference">

            <div className="about-container">

                <motion.div
                    className="about-section-heading"
                    {...reveal}
                >
                    <div>
                        <span className="about-eyebrow">
                            02 / OUR APPROACH
                        </span>

                        <h2>
                            What Makes Us
                            <em> Different.</em>
                        </h2>
                    </div>

                    <p>
                        Our approach combines practical logistics
                        thinking with a strong commitment to
                        communication and customer relationships.
                    </p>
                </motion.div>

                <motion.div
                    className="about-difference__photo"
                    {...reveal}
                >
                    <img
                        src={differenceImage}
                        alt="Illustration of logistics operations and shipment tracking"
                        loading="lazy"
                    />

                    <div className="about-image-label">
                        CONNECTED OPERATIONS
                        <FiArrowUpRight />
                    </div>
                </motion.div>

                <div className="about-difference__grid">

                    {differences.map((item) => (
                        <motion.article
                            key={item.number}
                            className="about-difference__card"
                            {...reveal}
                        >
                            <span className="about-number">
                                {item.number}
                            </span>

                            <h3>{item.title}</h3>

                            <p>{item.description}</p>

                            <FiArrowUpRight
                                className="about-card-arrow"
                            />
                        </motion.article>
                    ))}

                </div>

            </div>
        </section>
    );
}

/* ==========================================
   04 — OUR VALUES & COMMITMENT
========================================== */

function OurValues() {
    return (
        <section className="about-section about-values">

            <div className="about-container">

                <div className="about-values__layout">

                    <motion.div
                        className="about-values__content"
                        {...reveal}
                    >
                        <span className="about-eyebrow">
                            03 / WHAT WE BELIEVE
                        </span>

                        <h2>
                            Our Values.
                            <em> Our Commitment.</em>
                        </h2>

                        <p className="about-lead">
                            The principles that guide how we work,
                            communicate, and build relationships.
                        </p>

                        <div className="about-values__list">

                            {values.map((value) => (
                                <div
                                    className="about-values__item"
                                    key={value.number}
                                >
                                    <div className="about-values__item-top">
                                        <span className="about-number">
                                            {value.number}
                                        </span>
                                        <FiCheck />
                                    </div>

                                    <div>
                                        <h3>{value.title}</h3>
                                        <p>{value.description}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </motion.div>

                    <motion.div
                        className="about-values__photo"
                        {...reveal}
                    >
                        <img
                            src={valuesImage}
                            alt="Illustration of logistics professionals collaborating around a tablet"
                            loading="lazy"
                        />
                    </motion.div>

                </div>

            </div>
        </section>
    );
}

/* ==========================================
   05 — CLOSING CTA
========================================== */

function AboutClosing() {
    return (
        <section className="about-closing">

            <div className="about-container">

                <motion.div
                    className="about-closing__inner"
                    {...reveal}
                >
                    <span className="about-eyebrow">
                        THE NEXT MILE STARTS HERE
                    </span>

                    <h2>
                        Let's Move Forward.
                        <em> Together.</em>
                    </h2>

                    <p>
                        Discover how FastDrop can support your
                        business with logistics solutions built
                        around your needs.
                    </p>

                    <Link
                        to="/quote"
                        className="about-button about-button--red"
                    >
                        Request a Quote
                        <FiArrowRight />
                    </Link>

                </motion.div>

            </div>
        </section>
    );
}

/* ==========================================
   ABOUT PAGE
========================================== */

export default function About() {
    return (
        <>
            <Navbar />

            <main className="about-page">
                <AboutHero />
                <MeetFastDrop />
                <WhatMakesUsDifferent />
                <OurValues />
                <AboutClosing />
            </main>

            <Footer />
        </>
    );
}

