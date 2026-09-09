import "./HeroScene.css";

import heroBackground from "../../assets/hero/UpdatedFDHero.png";
import plane from "../../assets/hero/UpdatedPlane.png";
import ship from "../../assets/hero/UpdatedShip.png";
import truck from "../../assets/hero/UpdatedTruck.png";
import map from "../../assets/hero/UpdatedMap.png";

function HeroScene() {
    return (
        <div className="hero-scene">

            {/* Main background artwork */}
            <img
                src={heroBackground}
                alt=""
                className="hero-scene-background"
            />

            {/* Map layer */}
            <img
                src={map}
                alt=""
                className="hero-scene-map"
            />

            {/* Plane */}
            <img
                src={plane}
                alt=""
                className="hero-scene-plane"
            />

            {/* Ship */}
            <img
                src={ship}
                alt=""
                className="hero-scene-ship"
            />

            {/* Truck */}
            <img
                src={truck}
                alt=""
                className="hero-scene-truck"
            />

            {/* Atmospheric glow */}
            <div className="hero-scene-glow"></div>

        </div>
    );
}

export default HeroScene;