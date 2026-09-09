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