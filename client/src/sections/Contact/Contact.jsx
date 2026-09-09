// import { useState } from "react";

// import "./Contact.css";


// function Contact() {

//     const [submitted, setSubmitted] =
//         useState(false);


//     const handleSubmit = async (event) => {

//         event.preventDefault();

        /*
            Connect this to your existing API.

            Example:

            await fetch(
                `${import.meta.env.VITE_API_URL}/contact`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json"
                    },
                    body: JSON.stringify(...)
                }
            );
        */


//         setSubmitted(true);

//     };


//     return (

//         <section
//             className="contact section-pad"
//             id="contact"
//         >

//             <div className="container contact-grid">


//                 <div>

//                     <span className="eyebrow">
//                         CONTACT
//                     </span>

//                     <h2>
//                         Tell us what you
//                         need moved.
//                     </h2>

//                     <p>
//                         Give us the basic shipment
//                         details and we'll have the
//                         information needed to begin
//                         the conversation.
//                     </p>

//                 </div>


//                 <form
//                     className="contact-form"
//                     onSubmit={handleSubmit}
//                 >

//                     <div className="form-row">

//                         <label>

//                             Name

//                             <input
//                                 required
//                                 placeholder="Your name"
//                             />

//                         </label>


//                         <label>

//                             Company

//                             <input
//                                 placeholder="Company"
//                             />

//                         </label>

//                     </div>


//                     <div className="form-row">

//                         <label>

//                             Email

//                             <input
//                                 required
//                                 type="email"
//                                 placeholder="you@company.com"
//                             />

//                         </label>


//                         <label>

//                             Service

//                             <select>

//                                 <option>
//                                     Ground Freight
//                                 </option>

//                                 <option>
//                                     Air & Ocean
//                                 </option>

//                                 <option>
//                                     Warehousing
//                                 </option>

//                                 <option>
//                                     E-Commerce Fulfillment
//                                 </option>

//                                 <option>
//                                     Final-Mile Delivery
//                                 </option>

//                             </select>

//                         </label>

//                     </div>


//                     <label>

//                         Message

//                         <textarea
//                             rows="5"
//                             placeholder="Tell us about your shipment..."
//                         />

//                     </label>


//                     {submitted && (

//                         <div className="success-message">

//                             Thank you.
//                             Your request has been received.

//                         </div>

//                     )}


//                     <button
//                         type="submit"
//                         className="btn btn--primary"
//                     >

//                         Send Request

//                     </button>

//                 </form>

//             </div>

//         </section>

//     );

// }


// export default Contact;