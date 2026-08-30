import { useState } from "react";

import {
    Menu,
    X,
    ArrowUpRight
} from "lucide-react";

import Button from "../Button/Button";

import logo from "../../assets/logos/logo.jpg";

import "./Navbar.css";


const navLinks = [

    {
        name: "Services",
        href: "#services"
    },

    {
        name: "About",
        href: "#about"
    },

    {
        name: "Industries",
        href: "#industries"
    },

    {
        name: "Calculator",
        href: "#calculator"
    },

    {
        name: "Network",
        href: "#network"
    },

    {
        name: "Contact",
        href: "#contact"
    }

];


function Navbar() {

    const [open, setOpen] = useState(false);


    const closeMenu = () => {

        setOpen(false);

    };


    return (

        <header className="navbar">

            <div className="nav-shell">

                <a
                    href="#top"
                    className="nav-logo"
                    onClick={closeMenu}
                >

                    <img
                        src={logo}
                        alt="Fast Drop Worldwide Logistics Inc."
                    />

                </a>


                <nav
                    className={`nav-links ${
                        open ? "nav-links--open" : ""
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
                        variant="nav"
                    >

                        Request a Quote

                        <ArrowUpRight size={16} />

                    </Button>

                </nav>


                <button
                    className="nav-toggle"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle navigation"
                >

                    {open
                        ? <X size={22} />
                        : <Menu size={22} />
                    }

                </button>

            </div>

        </header>

    );

}


export default Navbar;