// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./sections/Hero/Hero";
// import Services from "./sections/Services/Services";
// import ShipmentCommand from "./sections/ShipmentCommand/ShipmentCommand";
// import WhyFastDrop from "./sections/WhyFastDrop/WhyFastDrop";
// import GlobalNetwork from "./sections/GlobalNetwork/GlobalNetwork";
// import Testimonials from "./sections/Testimonials/Testimonials";
// import FAQ from "./sections/FAQ/FAQ";
// import CTA from "./sections/CTA/CTA";
// import Contact from "./sections/Contact/Contact";
// import Footer from "./sections/Footer/Footer";

// function App() {
//     return (
//         <>
//             <Navbar />
//             <Hero />
//             <Services />
//             <ShipmentCommand />
//             <WhyFastDrop />
//             <GlobalNetwork />
//             <Testimonials />
//             <FAQ />
//             <CTA />
//             <Contact />
//             <Footer />
//         </>
//     );
// }

// export default App;


import {
    Routes,
    Route
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Hero from "./sections/Hero/Hero";
import Services from "./sections/Services/Services";
import ShipmentCommand from "./sections/ShipmentCommand/ShipmentCommand";
import WhyFastDrop from "./sections/WhyFastDrop/WhyFastDrop";
import GlobalNetwork from "./sections/GlobalNetwork/GlobalNetwork";
import Testimonials from "./sections/Testimonials/Testimonials";
import FAQ from "./sections/FAQ/FAQ";
import CTA from "./sections/CTA/CTA";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService/TermsOfService";


function App() {
    return (
        <Routes>

            {/* =========================
                MAIN ONE-PAGE WEBSITE
            ========================== */}
            <Route
                path="/"
                element={
                    <>
                        <Navbar />

                        <main>
                            <Hero />
                            <Services />
                            <ShipmentCommand />
                            <WhyFastDrop />
                            <GlobalNetwork />
                            <Testimonials />
                            <FAQ />
                            <CTA />
                            <Contact />
                        </main>

                        <Footer />
                    </>
                }
            />


            {/* =========================
                PRIVACY POLICY
            ========================== */}
            <Route
                path="/privacy"
                element={<PrivacyPolicy />}
            />


            {/* =========================
                TERMS OF SERVICE
            ========================== */}
            <Route
                path="/terms"
                element={<TermsOfService />}
            />

        </Routes>
    );
}

export default App;