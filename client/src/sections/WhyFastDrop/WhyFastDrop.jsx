import { 
    useLayoutEffect, 
    useRef,
    useState
} from "react";

import {
    FiPackage,
    FiLayers,
    FiLink,
    FiSliders,
    FiRefreshCw,
    FiZap,
    FiEye,
    FiActivity,
    FiCheckCircle,
    FiMapPin,
    FiGlobe,
    FiNavigation,
} from "react-icons/fi";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./WhyFastDrop.css";

import onePartner from "../../assets/WhyFastDrop/OneLogisticsPartner.png";
import builtAroundShipment from "../../assets/WhyFastDrop/BuiltAroundYourShipment.png";
import visibility from "../../assets/WhyFastDrop/VisibilityAtEveryStep.png";
import globalCapability from "../../assets/WhyFastDrop/LocalAttention.png";

gsap.registerPlugin(ScrollTrigger);

const whyFastDropItems = [
    {
        number: "01",
        title: "One Logistics Partner",
        description:
            "From handling and storage to transportation and delivery, one coordinated logistics partner keeps every stage moving together.",
        features: [
            {
                icon: FiPackage,
                label: "End-to-End",
            },
            {
                icon: FiLayers,
                label: "Coordinated",
            },
            {
                icon: FiLink,
                label: "One Partner",
            },
        ],
        image: onePartner,
        alt: "FastDrop warehouse and transportation operation",
    },
    {
        number: "02",
        title: "Built Around Your Shipment",
        description:
            "Every shipment has different requirements. We coordinate around your route, timeline, cargo and delivery needs.",
        features: [
            {
                icon: FiSliders,
                label: "Flexible",
            },
            {
                icon: FiRefreshCw,
                label: "Adaptable",
            },
            {
                icon: FiZap,
                label: "Responsive",
            },
        ],
        image: builtAroundShipment,
        alt: "FastDrop employee handling a customer shipment",
    },
    {
        number: "03",
        title: "Visibility at Every Step",
        description:
            "From processing to movement through the network, clear shipment visibility helps you know where things stand and what comes next.",
        features: [
            {
                icon: FiEye,
                label: "Visibility",
            },
            {
                icon: FiActivity,
                label: "Connected",
            },
            {
                icon: FiCheckCircle,
                label: "Reliable",
            },
        ],
        image: visibility,
        alt: "Shipment moving through an automated logistics sorting system",
    },
    {
        number: "04",
        title: "Local Attention. Global Capability.",
        description:
            "Hands-on service from Mississauga, connected to transportation and logistics networks that move shipments across borders and around the world.",
        features: [
            {
                icon: FiMapPin,
                label: "Local Service",
            },
            {
                icon: FiGlobe,
                label: "Global Network",
            },
            {
                icon: FiNavigation,
                label: "Worldwide Reach",
            },
        ],
        image: globalCapability,
        alt: "Large international container terminal and logistics network",
    },
];

function WhyFastDrop() {
    const sectionRef = useRef(null);
    const desktopStoryRef = useRef(null);
    const scrollTriggerRef = useRef(null);
    const timelineRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);

    useLayoutEffect(() => {
        // const mediaQuery = window.matchMedia("(min-width: 901px)");
        const mediaQuery = window.matchMedia("(min-width: 1200px)");

        if (!mediaQuery.matches) {
            return undefined;
        }

        const ctx = gsap.context(() => {
            const slides = gsap.utils.toArray(".why-fastdrop-desktop-slide");

            // Start with slides 02–04 below the image/text window.
            slides.forEach((slide, index) => {
                if (index === 0) {
                    gsap.set(slide, {
                        yPercent: 0,
                        autoAlpha: 1,
                    });
                } else {
                    gsap.set(slide, {
                        yPercent: 100,
                        autoAlpha: 1,
                    });
                }
            });

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: desktopStoryRef.current,
                    start: "top 18%",
                    end: "+=300%",
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,

                    // onUpdate: (self) => {
                    //     const timeline = timelineRef.current;

                    //     if (!timeline) return;

                    //     const currentTime =
                    //         self.progress * timeline.duration();

                    //     const slideTimes = whyFastDropItems.map(
                    //         (_, index) =>
                    //             timeline.labels[`slide-${index}`] ?? 0
                    //     );

                    //     let newActiveIndex = 0;

                    //     slideTimes.forEach((time, index) => {
                    //         if (currentTime >= time) {
                    //             newActiveIndex = index;
                    //         }
                    //     });

                    //     setActiveIndex(newActiveIndex);
                    // },

                   onUpdate: (self) => {
                        const timeline = timelineRef.current;

                        if (!timeline) return;

                        const currentTime =
                            self.progress * timeline.duration();

                        const slideTimes = whyFastDropItems.map(
                            (_, index) =>
                                timeline.labels[`slide-${index}`] ?? 0
                        );

                        let newActiveIndex = 0;

                        for (let i = 1; i < slideTimes.length; i++) {
                            const previousTime = slideTimes[i - 1];
                            const nextTime = slideTimes[i];

                            /*
                            * Switch closer to the incoming slide.
                            *
                            * 0.50 = halfway
                            * 0.65 = incoming slide ~65% through transition
                            * 0.75 = even later
                            */
                            const switchPoint =
                                previousTime +
                                (nextTime - previousTime) * 0.65;

                            if (currentTime >= switchPoint) {
                                newActiveIndex = i;
                            }
                        }

                        setActiveIndex(newActiveIndex);
                    },
                },
            });

            scrollTriggerRef.current = timeline.scrollTrigger;
            timelineRef.current = timeline;


            /* Starting position = Story 01 */
            timeline.addLabel("slide-0", 0);

            /* =====================================================
            STORY 01 → 02
            ===================================================== */

            timeline
                .to(
                    slides[0],
                    {
                        yPercent: -100,
                        duration: 1,
                        ease: "power1.inOut",
                    }
                )
                .to(
                    slides[1],
                    {
                        yPercent: 0,
                        duration: 1,
                        ease: "power1.inOut",
                    },
                    "<"
                )
                .addLabel("slide-1");


            /* =====================================================
            STORY 02 → 03
            ===================================================== */

            timeline
                .to(
                    slides[1],
                    {
                        yPercent: -100,
                        duration: 1,
                        ease: "power1.inOut",
                    }
                )
                .to(
                    slides[2],
                    {
                        yPercent: 0,
                        duration: 1,
                        ease: "power1.inOut",
                    },
                    "<"
                )
                .addLabel("slide-2");


            /* =====================================================
            STORY 03 → 04
            ===================================================== */

            timeline
                .to(
                    slides[2],
                    {
                        yPercent: -100,
                        duration: 1,
                        ease: "power1.inOut",
                    }
                )
                .to(
                    slides[3],
                    {
                        yPercent: 0,
                        duration: 1,
                        ease: "power1.inOut",
                    },
                    "<"
                )
                .addLabel("slide-3");


            /* Keep the final Global Capability slide visible briefly */
            timeline.to({}, { duration: 0.6 });



            
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    /* CLICKABLE NUMBER FOR WHY FASTDROP*/

    const goToSlide = (index) => {
        const trigger = scrollTriggerRef.current;
        const timeline = timelineRef.current;

        if (!trigger || !timeline) return;

        const label = `slide-${index}`;
        const labelTime = timeline.labels[label];

        if (labelTime === undefined) return;

        const timelineDuration = timeline.duration();

        const progress =
            timelineDuration === 0
                ? 0
                : labelTime / timelineDuration;

        const scrollPosition =
            trigger.start +
            (trigger.end - trigger.start) * progress;

        window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
        });
    };

    return (
        <section
            className="why-fastdrop"
            id="why-fastdrop"
            ref={sectionRef}
        >
            <div className="why-fastdrop-container">

                {/* =====================================================
                    SECTION INTRODUCTION
                ====================================================== */}
                <header className="why-fastdrop-header">
                    <div className="why-fastdrop-eyebrow">
                        <span className="why-fastdrop-eyebrow-line"></span>
                        <span>WHY FASTDROP</span>
                    </div>

                    <h2>
                        One partner.
                        <br />
                        Every part of the <span>journey.</span>
                    </h2>

                    <p>
                        Logistics shouldn't become more complicated as your
                        business grows. FastDrop connects the people,
                        technology and network behind every shipment.
                    </p>
                </header>
            </div>


            {/* =========================================================
                DESKTOP STICKY STORY
            ========================================================== */}
            <div
                className="why-fastdrop-desktop"
                ref={desktopStoryRef}
            >
                <div className="why-fastdrop-desktop-inner">

                    {/* Progress */}
                    <div className="why-fastdrop-progress">

                        {whyFastDropItems.map((item, index) => (
                            <button
                                type="button"
                                className={`why-fastdrop-progress-item ${
                                    activeIndex === index ? "active" : ""
                                }`}
                                key={item.number}
                                onClick={() => goToSlide(index)}
                                aria-label={`View ${item.title}`}
                                aria-current={activeIndex === index ? "step" : undefined}
                            >
                                <span className="why-fastdrop-progress-dot"></span>

                                <span className="why-fastdrop-progress-number">
                                    {item.number}
                                </span>
                            </button>
                        ))}
                    </div>


                    {/* Sliding content */}
                    <div className="why-fastdrop-desktop-stage">
                        {whyFastDropItems.map((item) => (
                            <article
                                className="why-fastdrop-desktop-slide"
                                key={item.number}
                            >
                                <div className="why-fastdrop-copy">
                                    {/* Slide number + red accent */}
                                    <div className="why-fastdrop-number-row">
                                        <span className="why-fastdrop-number">
                                            {item.number}
                                        </span>

                                        <span className="why-fastdrop-number-line"></span>
                                    </div>
                                    
                                    {/* Main heading */}
                                    <h3>{item.title}</h3>

                                    {/* Description */}
                                    <p className="why-fastdrop-description">
                                        {item.description}
                                    </p>

                                    {/* Slide features */}
                                    <div className="why-fastdrop-features">
                                        {item.features.map((feature) => {
                                            const Icon = feature.icon;

                                            return (
                                                <div
                                                    className="why-fastdrop-feature"
                                                    key={`${item.number}-${feature.label}`}
                                                >
                                                    <div className="why-fastdrop-feature-icon">
                                                        <Icon />
                                                    </div>

                                                    <span>{feature.label}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div
                                    className={`why-fastdrop-visual why-fastdrop-visual-${item.number}`}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                    />
                                </div>
                            </article>
                        ))}

                        {/* =========================================
                            SLIDE CONTROLS
                        ========================================== */}

                        <div className="why-fastdrop-controls">
                            
                            {/* PREVIOUS */}
                            <button
                                type="button"
                                className="why-fastdrop-control"
                                onClick={() =>
                                    goToSlide(
                                        activeIndex === 0
                                        ? whyFastDropItems.length - 1
                                        : activeIndex - 1
                                    )
                                }
                                aria-label="Previous Why FastDrop story"
                            >
                                <span aria-hidden="true">←</span>
                            </button>

                            {/* COUNTER */}
                            <span className="why-fastdrop-control-count">
                                {String(activeIndex + 1).padStart(2, "0")}
                                <small>/</small>
                                {String(whyFastDropItems.length).padStart(2, "0")}
                            </span>

                            {/* NEXT */}
                            <button
                                type="button"
                                className="why-fastdrop-control"
                                onClick={() =>
                                    goToSlide(
                                        activeIndex === whyFastDropItems.length - 1
                                        ? 0
                                        : activeIndex + 1
                                    )
                                }
                                aria-label="Next Why FastDrop story"
                            >
                                <span aria-hidden="true">→</span>
                            </button>

                        </div>

                    </div>
                </div>
            </div>


            {/* =========================================================
                MOBILE / TABLET STORY
            ========================================================== */}
            <div className="why-fastdrop-mobile">
                <div className="why-fastdrop-container">
                    <div className="why-fastdrop-story">
                        {whyFastDropItems.map((item) => (
                            <article
                                className="why-fastdrop-item"
                                key={item.number}
                            >
                                {/* <div className="why-fastdrop-copy">
                                    <span className="why-fastdrop-number">
                                        {item.number}
                                    </span>

                                    <h3>{item.title}</h3>

                                    <p>{item.description}</p>
                                </div> */}

                                <div className="why-fastdrop-copy">
                                    <span className="why-fastdrop-number">
                                        {item.number}
                                    </span>

                                    <h3>{item.title}</h3>

                                    <p>{item.description}</p>

                                    {/* Mobile / Tablet Features */}
                                    <div className="why-fastdrop-features">
                                        {item.features.map((feature) => {
                                            const Icon = feature.icon;

                                            return (
                                                <div
                                                    className="why-fastdrop-feature"
                                                    key={`${item.number}-${feature.label}`}
                                                >
                                                    <div className="why-fastdrop-feature-icon">
                                                        <Icon />
                                                    </div>

                                                    <span>{feature.label}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div
                                    className={`why-fastdrop-visual why-fastdrop-visual-${item.number}`}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                    />
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}

export default WhyFastDrop;