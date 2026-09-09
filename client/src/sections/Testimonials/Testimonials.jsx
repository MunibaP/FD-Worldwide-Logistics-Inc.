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