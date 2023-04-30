import React, {useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {NavbarItems} from "./navbarItems";
import Dropdownmenu from "./NavbarDropdown/Dropdown";

function Navbar() {
    //Variable for the Dropdown and Dropnavbar
    const [Dropdown, setDropdown] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    //variable to find position and change the color or the designe of the navbar
    const location = useLocation();
    const isTransparent = location.pathname === "/";


    // Effect to toggle Navbar visibility on scroll
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const shouldShowNavbar = prevScrollPos > currentScrollPos;
            setShowNavbar(shouldShowNavbar);
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);



    return (
        <>
            <nav
                className={`fixed font-body top-0 left-0 right-0 h-24 flex justify-center text-white items-center  
          ${isTransparent ? "bg-gradient-to-r from-navbar1 to-navbar2 border-b-2" : "bg-gradient-to-r from-navbar2 to-navbar1 border-b-2"}
          sm:h-16 sm:flex-row sm:justify-between sm:items-center
          md:h-20 md:flex-row md:justify-between md:items-center
          lg:h-24 lg:flex-row lg:justify-between lg:items-center
          transition-all duration-500 ease-in-out
          ${showNavbar ? "opacity-100 flex" : "opacity-0 h-0 fixed"}
        `}
            >

                <ul className="flex list-none text-center w-textitems justify-end mr-2 ">
                    {NavbarItems.map((item) => {
                        if (item.title === "Items2") {
                            return (
                                <li
                                    key={item.id}
                                    className={item.className}
                                    onMouseEnter={() => setDropdown(true)}
                                    onMouseLeave={() => setDropdown(false)}
                                >
                                    <Link to={item.path}>{item.title}</Link>
                                    {Dropdown && <Dropdownmenu />}



                                </li>
                            );

                        }

                        return (
                            <li key={item.id} className={item.className}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                        );
                    })}

                </ul>

            </nav>
        </>
    );
}

export default Navbar;