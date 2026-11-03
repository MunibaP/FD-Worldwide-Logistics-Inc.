import {
    Routes,
    Route
} from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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

import About from "./pages/About/About";
import Quote from "./pages/Quote/Quote";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService/TermsOfService";


// function ScrollToSection() {

//     const { pathname, hash } = useLocation();

//     useEffect(() => {

//         // Navigate to the top when opening the homepage
//         if (pathname === "/" && !hash) {
//             window.scrollTo({
//                 top: 0,
//                 behavior: "instant"
//             });
//             return;
//         }

//         // Scroll to the requested section
//         if (!hash) return;

//         const sectionId = decodeURIComponent(hash.slice(1));

//         const frame = requestAnimationFrame(() => {

//             const section = document.getElementById(sectionId);

//             if (section) {
//                 section.scrollIntoView({
//                     behavior: "smooth",
//                     block: "start"
//                 });
//             }

//         });

//         return () => cancelAnimationFrame(frame);

//     }, [pathname, hash]);

//     return null;
// }


function ScrollToSection() {

    const { pathname, search, hash } = useLocation();

    useEffect(() => {

        // If there is no section hash,
        // always start the new page at the top.
        if (!hash) {
            window.scrollTo({
                top: 0,
                behavior: "instant"
            });
            return;
        }

        // If there is a hash, scroll to that section.
        const sectionId = decodeURIComponent(hash.slice(1));

        const frame = requestAnimationFrame(() => {

            const section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

        return () => cancelAnimationFrame(frame);

    }, [pathname, search, hash]);

    return null;
}


function App() {
    return (
        <>
            {/* Handles scrolling after navigating from another page */}
            <ScrollToSection />
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
                    ABOUT
                ========================== */}
                <Route
                    path="/about"
                    element={<About />}

                />

                {/* =========================
                    GET A QUOTE
                ========================== */}
                <Route
                    path="/quote"
                    element={<Quote />}
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
        </>
    );
}

export default App;