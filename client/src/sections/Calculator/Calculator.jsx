// import { useMemo, useState } from "react";

// import {
//     Calculator as CalculatorIcon,
//     Ruler,
//     Weight
// } from "lucide-react";

// import "./Calculator.css";


// function Calculator() {

//     const [form, setForm] = useState({

//         length: "",
//         width: "",
//         height: "",
//         weight: "",
//         pieces: 1

//     });


//     const update = (field, value) => {

//         setForm({
//             ...form,
//             [field]: value
//         });

//     };


//     const calculation = useMemo(() => {

//         const length =
//             Number(form.length) || 0;

//         const width =
//             Number(form.width) || 0;

//         const height =
//             Number(form.height) || 0;

//         const pieces =
//             Number(form.pieces) || 1;

//         const weight =
//             Number(form.weight) || 0;


//         const cubicVolume =
//             (
//                 length *
//                 width *
//                 height *
//                 pieces
//             ) / 1000000;


//         /*
//             Planning calculation.

//             The divisor can be changed later
//             depending on the actual carrier/service
//             rules used by FastDrop.
//         */

//         const volumetricWeight =
//             cubicVolume * 250;


//         const chargeableWeight =
//             Math.max(
//                 weight,
//                 volumetricWeight
//             );


//         return {

//             cubicVolume,

//             volumetricWeight,

//             chargeableWeight

//         };

//     }, [form]);


//     return (

//         <section
//             className="calculator section-pad"
//             id="calculator"
//         >

//             <div className="container calculator-grid">


//                 <div>

//                     <span className="eyebrow">
//                         SHIPMENT CALCULATOR
//                     </span>

//                     <h2>
//                         Measure your shipment
//                         before requesting a quote.
//                     </h2>

//                     <p>
//                         Enter the dimensions, number of
//                         pieces and weight to estimate cubic
//                         volume and volumetric weight.
//                     </p>


//                     <div className="calculator-notes">

//                         <span>
//                             <Ruler />
//                             Dimensions: cm
//                         </span>

//                         <span>
//                             <Weight />
//                             Weight: kg
//                         </span>

//                     </div>

//                 </div>


//                 <div className="calculator-card">

//                     <div className="calculator-title">

//                         <CalculatorIcon />

//                         <div>

//                             <strong>
//                                 Shipment Measurements
//                             </strong>

//                             <span>
//                                 Planning estimate
//                             </span>

//                         </div>

//                     </div>


//                     <div className="calculator-fields">


//                         <label>

//                             Length

//                             <input
//                                 type="number"
//                                 value={form.length}
//                                 onChange={(e) =>
//                                     update(
//                                         "length",
//                                         e.target.value
//                                     )
//                                 }
//                             />

//                         </label>


//                         <label>

//                             Width

//                             <input
//                                 type="number"
//                                 value={form.width}
//                                 onChange={(e) =>
//                                     update(
//                                         "width",
//                                         e.target.value
//                                     )
//                                 }
//                             />

//                         </label>


//                         <label>

//                             Height

//                             <input
//                                 type="number"
//                                 value={form.height}
//                                 onChange={(e) =>
//                                     update(
//                                         "height",
//                                         e.target.value
//                                     )
//                                 }
//                             />

//                         </label>


//                         <label>

//                             Weight

//                             <input
//                                 type="number"
//                                 value={form.weight}
//                                 onChange={(e) =>
//                                     update(
//                                         "weight",
//                                         e.target.value
//                                     )
//                                 }
//                             />

//                         </label>


//                         <label>

//                             Pieces

//                             <input
//                                 type="number"
//                                 min="1"
//                                 value={form.pieces}
//                                 onChange={(e) =>
//                                     update(
//                                         "pieces",
//                                         e.target.value
//                                     )
//                                 }
//                             />

//                         </label>

//                     </div>


//                     <div className="calculator-results">

//                         <div>

//                             <span>
//                                 Cubic Volume
//                             </span>

//                             <strong>
//                                 {calculation.cubicVolume.toFixed(3)}
//                                 {" "}m³
//                             </strong>

//                         </div>


//                         <div>

//                             <span>
//                                 Volumetric Weight
//                             </span>

//                             <strong>
//                                 {Math.ceil(
//                                     calculation.volumetricWeight
//                                 )}
//                                 {" "}kg
//                             </strong>

//                         </div>


//                         <div className="calculator-result-main">

//                             <span>
//                                 Planning Chargeable Weight
//                             </span>

//                             <strong>
//                                 {Math.ceil(
//                                     calculation.chargeableWeight
//                                 )}
//                                 {" "}kg
//                             </strong>

//                         </div>

//                     </div>

//                 </div>

//             </div>

//         </section>

//     );

// }


// export default Calculator;