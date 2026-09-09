import {
    useEffect,
    useState
} from "react";

import {
    FaBars,
    FaTimes,
    FaArrowRight
} from "react-icons/fa";

import Button from "../Button/Button";

import logo from "../../assets/logo/UpdatedLogo.png";

import "../Navbar/Navbar.css";


const navLinks = [

    {
        name: "Services",
        href: "#services"
    },

    {
        name: "Solutions",
        href: "#solutions"
    },

    {
        name: "Tracking",
        href: "#tracking"
    },

    {
        name: "Calculator",
        href: "#calculator"
    },

    {
        name: "About",
        href: "#about"
    }

];


function Navbar() {

    const [menuOpen, setMenuOpen] =
        useState(false);

    const [scrolled, setScrolled] =
        useState(false);


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

                <a
                    href="#top"
                    className="navbar__logo"
                    onClick={closeMenu}
                >

                    <img
                        src={logo}
                        alt="Fast Drop Worldwide Logistics Inc."
                    />

                </a>


                {/* DESKTOP NAV */}

                <nav className="navbar__links">

                    {navLinks.map((link) => (

                        <a
                            key={link.name}
                            href={link.href}
                        >

                            {link.name}

                        </a>

                    ))}

                </nav>


                {/* DESKTOP CTA */}

                <div className="navbar__cta">

                    <Button
                        href="#quote"
                        variant="nav"
                    >

                        Request a Quote

                        <FaArrowRight />

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
                        onClick={closeMenu}
                    >

                        {link.name}

                    </a>

                ))}


                <Button
                    href="#quote"
                    variant="primary"
                    onClick={closeMenu}
                >

                    Request a Quote

                    <FaArrowRight />

                </Button>

            </div>

        </header>

    );

}


export default Navbar;