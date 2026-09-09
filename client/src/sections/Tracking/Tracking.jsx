// import { useState } from "react";
// import {
//     Search,
//     PackageCheck,
//     ArrowRight
// } from "lucide-react";

// import Button from "../../components/Button/Button";

// import "./Tracking.css";


// function Tracking() {

//     const [trackingNumber, setTrackingNumber] = useState("");

//     const [loading, setLoading] = useState(false);

//     const [result, setResult] = useState(null);

//     const [error, setError] = useState("");


//     const handleTracking = async (event) => {

//         event.preventDefault();

//         setError("");
//         setResult(null);

//         const number =
//             trackingNumber.trim().toUpperCase();


//         if (!number) {

//             setError(
//                 "Please enter your tracking number."
//             );

//             return;

//         }


//         try {

//             setLoading(true);


//             const response = await fetch(
//                 `${import.meta.env.VITE_API_URL}/tracking/${number}`
//             );


//             const data = await response.json();


//             if (!response.ok) {

//                 throw new Error(
//                     data.message ||
//                     "Tracking information not found."
//                 );

//             }


//             setResult(data);

//         }
//         catch (err) {

//             setError(
//                 err.message ||
//                 "Unable to retrieve tracking information."
//             );

//         }
//         finally {

//             setLoading(false);

//         }

//     };


//     return (

//         <section
//             className="tracking section-pad"
//             id="tracking"
//         >

//             <div className="tracking-shell">

//                 <div className="tracking-copy">

//                     <span className="eyebrow">
//                         SHIPMENT VISIBILITY
//                     </span>

//                     <h2>
//                         Know where your shipment is.
//                         <span>
//                             Every step.
//                         </span>
//                     </h2>

//                     <p>
//                         Enter your tracking number to
//                         view the latest shipment status.
//                     </p>

//                 </div>


//                 <form
//                     className="tracking-box"
//                     onSubmit={handleTracking}
//                 >

//                     <div className="tracking-icon">

//                         <PackageCheck />

//                     </div>


//                     <div className="tracking-field">

//                         <label>
//                             Tracking Number
//                         </label>

//                         <div className="tracking-input">

//                             <Search size={18} />

//                             <input
//                                 value={trackingNumber}
//                                 onChange={(event) =>
//                                     setTrackingNumber(
//                                         event.target.value
//                                     )
//                                 }
//                                 placeholder="Enter tracking number"
//                             />

//                             <Button>

//                                 {loading
//                                     ? "Searching..."
//                                     : "Track"
//                                 }

//                                 <ArrowRight size={16} />

//                             </Button>

//                         </div>

//                     </div>


//                     {error && (

//                         <div className="tracking-error">

//                             {error}

//                         </div>

//                     )}


//                     {result && (

//                         <div className="tracking-result">

//                             <strong>
//                                 {result.status}
//                             </strong>

//                             <span>
//                                 {result.location}
//                             </span>

//                         </div>

//                     )}

//                 </form>

//             </div>

//         </section>

//     );

// }


// export default Tracking;