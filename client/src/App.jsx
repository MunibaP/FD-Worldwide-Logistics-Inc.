import Navbar from "./components/Navbar/Navbar";

import Hero from "./sections/Hero/Hero";
import Tracking from "./sections/Tracking/Tracking";
import Services from "./sections/Services/Services";
import About from "./sections/About/About";
import Industries from "./sections/Industries/Industries";
import Calculator from "./sections/Calculator/Calculator";
import GlobalNetwork from "./sections/GlobalNetwork/GlobalNetwork";
import Journey from "./sections/Journey/Journey";
import Statistics from "./sections/Statistics/Statistics";
import Testimonials from "./sections/Testimonials/Testimonials";
import CTA from "./sections/CTA/CTA";
import Contact from "./sections/Contact/Contact";
import FAQ from "./sections/FAQ/FAQ";
import Footer from "./sections/Footer/Footer";

function App() {

    return (

        <>
            <Navbar />

            <main>

                <Hero />

                <Tracking />

                <Services />

                <About />

                <Industries />

                <Calculator />

                <GlobalNetwork />

                <Journey />

                <Statistics />

                <Testimonials />

                <CTA />

                <Contact />

                <FAQ />

            </main>

            <Footer />

        </>

    );

}

export default App;