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