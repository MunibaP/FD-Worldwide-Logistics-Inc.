import {
    Link,
    useLocation,
    useNavigate
} from "react-router-dom";

import {
    useEffect,
    useState
} from "react";

import {
    FaBars,
    FaTimes,
} from "react-icons/fa";

import { FiArrowUpRight } from "react-icons/fi";

import Button from "../Button/Button";

import logo from "../../assets/logo/logoFinal.png";

import "../Navbar/Navbar.css";


const navLinks = [

    {
        name: "Services",
        href: "/#services"
    },

    {
        name: "Tracking",
        href: "/#tracking"
    },

    {
        name: "Calculator",
        href: "/#calculator"
    },

    {
        name: "About",
        href: "/#about"
    },

    {
        name: "Global Network",
        href: "/#global-network"
    },

];


function Navbar() {

    const [menuOpen, setMenuOpen] =
        useState(false);

    const [scrolled, setScrolled] =
        useState(false);

    const location = useLocation();
    const navigate = useNavigate();


    useEffect(() => {

        const handleScroll = () => {

            setScrolled(
                window.scrollY > 20
            );

        };


        window.addEventListener(
            "scroll",
            handleScroll
        );


        return () => {

            window.removeEventListener(
                "scroll",
                handleScroll
            );

        };

    }, []);


    const closeMenu = () => {

        setMenuOpen(false);

    };

    const handleNavClick = (event, href) => {

        event.preventDefault();

        closeMenu();

        // Navigate to dedicated pages
        if (!href.includes("#")) {

            navigate(href);
            return;

        }

        // Navigate to homepage sections
        const id = href.split("#")[1];

        if (!id) return;

        if (location.pathname !== "/") {

            navigate(href);
            return;

        }

        if (location.hash !== `#${id}`) {
            navigate(href);
        }

        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    };

    useEffect(() => {

        if (location.pathname !== "/" || !location.hash) {
            return;
        }

        const id = location.hash.substring(1);

        const frame = requestAnimationFrame(() => {

            document.getElementById(id)?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

        return () => cancelAnimationFrame(frame);

    }, [location.pathname, location.hash]);


    return (

        <header
            className={`navbar ${
                scrolled
                    ? "navbar--scrolled"
                    : ""
            }`}
        >

            <div className="navbar__shell">


                {/* LOGO */}

                <Link
                    to="/"
                    className="navbar__logo"
                    onClick={() => {
                        closeMenu();

                        if (location.pathname === "/") {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });
                        }
                    }}
                >

                    <img
                        src={logo}
                        alt="Fast Drop Worldwide Logistics Inc."
                    />

                </Link>


                {/* DESKTOP NAV */}

                <nav className="navbar__links">

                    {navLinks.map((link) => (

                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(event) =>
                                handleNavClick(event, link.href)
                            }
                        >

                            {link.name}

                        </a>

                    ))}

                </nav>


                {/* DESKTOP CTA */}

                <div className="navbar__cta">

                    <Button href="/quote" variant="nav" icon={false}>
                        Request a Quote
                    
                        <span className="navbar__cta-arrow">
                            <FiArrowUpRight />
                        </span>

                    </Button>

                </div>


                {/* MOBILE BUTTON */}

                <button
                    className="navbar__toggle"
                    type="button"
                    aria-label={
                        menuOpen
                            ? "Close navigation"
                            : "Open navigation"
                    }
                    onClick={() =>
                        setMenuOpen(
                            !menuOpen
                        )
                    }
                >

                    {menuOpen
                        ? <FaTimes />
                        : <FaBars />
                    }

                </button>

            </div>


            {/* MOBILE MENU */}

            <div
                className={`navbar__mobile ${
                    menuOpen
                        ? "navbar__mobile--open"
                        : ""
                }`}
            >

                {navLinks.map((link) => (

                    <a
                        key={link.name}
                        href={link.href}
                        onClick={(event) =>
                            handleNavClick(event, link.href)
                        }
                    >

                        {link.name}

                    </a>

                ))}


                <Button
                    href="/quote"
                    variant="primary"
                    onClick={closeMenu}
                >

                    Request a Quote
                    

                </Button>

            </div>

        </header>

    );

}


export default Navbar;