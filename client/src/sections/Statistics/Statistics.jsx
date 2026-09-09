// import {
//     Globe2,
//     Layers3,
//     Clock3,
//     Handshake
// } from "lucide-react";

// import "./Statistics.css";


// const stats = [

//     ["6", "Core service lines", Layers3],

//     ["2", "Coverage areas", Globe2],

//     ["24/7", "Service ready", Clock3],

//     ["1", "Dedicated partner", Handshake]

// ];


// function Statistics() {

//     return (

//         <section className="statistics">

//             <div className="container statistics-grid">

//                 {stats.map(
//                     ([number, label, Icon]) => (

//                         <div
//                             className="stat"
//                             key={label}
//                         >

//                             <Icon />

//                             <strong>
//                                 {number}
//                             </strong>

//                             <span>
//                                 {label}
//                             </span>

//                         </div>

//                     )
//                 )}

//             </div>

//         </section>

//     );

// }


// export default Statistics;