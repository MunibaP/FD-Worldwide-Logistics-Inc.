import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Services from "./sections/Services/Services";
import ShipmentCommand from "./sections/ShipmentCommand/ShipmentCommand";
import WhyFastDrop from "./sections/WhyFastDrop/WhyFastDrop";
import GlobalNetwork from "./sections/GlobalNetwork/GlobalNetwork";
import Testimonials from "./sections/Testimonials/Testimonials";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <ShipmentCommand />
            <WhyFastDrop />
            <GlobalNetwork />
            <Testimonials />
        </>
    );
}

export default App;