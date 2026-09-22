import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Services from "./sections/Services/Services";
import ShipmentCommand from "./sections/ShipmentCommand/ShipmentCommand";
import WhyFastDrop from "./sections/WhyFastDrop/WhyFastDrop";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <ShipmentCommand />
            <WhyFastDrop />
        </>
    );
}

export default App;