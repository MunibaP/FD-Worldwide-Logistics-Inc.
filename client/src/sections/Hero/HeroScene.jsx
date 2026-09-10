import "./HeroScene.css";

import heroBackground from "../../assets/hero/UpdatedFDHero.png";
import plane from "../../assets/hero/UpdatedPlane.png";
import ship from "../../assets/hero/UpdatedShip.png";
import truck from "../../assets/hero/UpdatedTruck.png";
import map from "../../assets/hero/UpdatedMap.png";

function HeroScene() {
    return (
        <div className="hero-scene">

            <div className="hero-scene-canvas">



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

                {/* CONTAINER-ONLY METALLIC SHINE */}
                <svg
                    className="container-shine-svg"
                    viewBox="0 0 1000 562"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <defs>

                        {/* Only these areas receive the shine */}
                        <clipPath id="containerMetalMask">

                            {/* LEFT DOOR */}
                            <polygon
                                points="
                                    160,95
                                    280,120
                                    280,490
                                    160,510
                                "
                            />

                            {/* RIGHT DOOR */}
                            <polygon
                                points="
                                    845,120
                                    965,92
                                    965,510
                                    845,490
                                "
                            />

                            {/* TOP FRAME */}
                            <polygon
                                points="
                                    275,105
                                    850,105
                                    850,155
                                    275,155
                                "
                            />

                            {/* LEFT VERTICAL FRAME */}
                            <polygon
                                points="
                                    265,105
                                    300,115
                                    300,500
                                    265,510
                                "
                            />

                            {/* RIGHT VERTICAL FRAME */}
                            <polygon
                                points="
                                    825,115
                                    860,105
                                    860,510
                                    825,500
                                "
                            />

                            {/* BOTTOM FRAME */}
                            <polygon
                                points="
                                    275,485
                                    850,485
                                    850,515
                                    275,515
                                "
                            />

                        </clipPath>


                        {/* Soft metallic reflection */}
                        <linearGradient
                            id="containerShineGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop
                                offset="0%"
                                stopColor="white"
                                stopOpacity="0"
                            />

                            <stop
                                offset="25%"
                                stopColor="#dbeeff"
                                stopOpacity="0.08"
                            />

                            <stop
                                offset="43%"
                                stopColor="#edf7ff"
                                stopOpacity="0.28"
                            />

                            <stop
                                offset="50%"
                                stopColor="white"
                                stopOpacity="0.62"
                            />

                            <stop
                                offset="57%"
                                stopColor="#edf7ff"
                                stopOpacity="0.28"
                            />

                            <stop
                                offset="75%"
                                stopColor="#dbeeff"
                                stopOpacity="0.08"
                            />

                            <stop
                                offset="100%"
                                stopColor="white"
                                stopOpacity="0"
                            />

                        </linearGradient>

                    </defs>


                    <g clipPath="url(#containerMetalMask)">

                        <rect
                            className="container-shine-beam"
                            x="-350"
                            y="-180"
                            width="180"
                            height="950"
                            fill="url(#containerShineGradient)"
                        />

                    </g>

                </svg>

            </div>

        </div>
    );
}

export default HeroScene;