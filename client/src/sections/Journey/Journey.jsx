// import {
//     ClipboardList,
//     Truck,
//     Navigation,
//     PackageCheck
// } from "lucide-react";

// import "./Journey.css";


// const steps = [

//     {
//         number: "01",
//         title: "Plan",
//         text: "Shipment details, routing and service selection.",
//         icon: ClipboardList
//     },

//     {
//         number: "02",
//         title: "Move",
//         text: "Pickup, freight handling and transportation.",
//         icon: Truck
//     },

//     {
//         number: "03",
//         title: "Track",
//         text: "Visibility through key movement milestones.",
//         icon: Navigation
//     },

//     {
//         number: "04",
//         title: "Deliver",
//         text: "Final destination, fulfillment or final-mile handoff.",
//         icon: PackageCheck
//     }

// ];


// function Journey() {

//     return (

//         <section className="journey section-pad">

//             <div className="container">

//                 <div className="section-heading center">

//                     <span className="eyebrow">
//                         HOW IT WORKS
//                     </span>

//                     <h2>
//                         A clearer journey from
//                         pickup to destination.
//                     </h2>

//                 </div>


//                 <div className="journey-grid">

//                     {steps.map(
//                         ({
//                             number,
//                             title,
//                             text,
//                             icon: Icon
//                         }) => (

//                             <div
//                                 className="journey-step"
//                                 key={number}
//                             >

//                                 <div className="journey-icon">

//                                     <Icon />

//                                 </div>

//                                 <span>
//                                     {number}
//                                 </span>

//                                 <h3>
//                                     {title}
//                                 </h3>

//                                 <p>
//                                     {text}
//                                 </p>

//                             </div>

//                         )
//                     )}

//                 </div>

//             </div>

//         </section>

//     );

// }


// export default Journey;