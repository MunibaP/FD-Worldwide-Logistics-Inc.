// import {
//     Factory,
//     ShoppingCart,
//     Building2,
//     Utensils,
//     Wrench,
//     BriefcaseBusiness
// } from "lucide-react";

// import "./Industries.css";


// const industries = [

//     ["Manufacturing", Factory],

//     ["E-Commerce", ShoppingCart],

//     ["Retail", Building2],

//     ["Food & Beverage", Utensils],

//     ["Construction", Wrench],

//     ["Distribution", BriefcaseBusiness]

// ];


// function Industries() {

//     return (

//         <section
//             className="industries section-pad"
//             id="industries"
//         >

//             <div className="container">

//                 <div className="section-heading center">

//                     <span className="eyebrow">
//                         INDUSTRIES
//                     </span>

//                     <h2>
//                         Logistics shaped around
//                         how your business moves.
//                     </h2>

//                     <p>
//                         Different industries have different
//                         pressure points. Our solutions can
//                         adapt around your operational needs.
//                     </p>

//                 </div>


//                 <div className="industry-grid">

//                     {industries.map(
//                         ([name, Icon]) => (

//                             <div
//                                 className="industry-card"
//                                 key={name}
//                             >

//                                 <Icon />

//                                 <span>
//                                     {name}
//                                 </span>

//                                 <b>
//                                     ↗
//                                 </b>

//                             </div>

//                         )
//                     )}

//                 </div>

//             </div>

//         </section>

//     );

// }


// export default Industries;