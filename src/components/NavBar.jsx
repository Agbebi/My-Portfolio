import React from "react";
import { motion } from 'framer-motion'

function NavBar() {
    const menuItems = ["Home", "About", "Projects", "Contact"];

    return (
        <motion.nav
            initial={{ opacity: 0, translateY: 0}}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 2, delay: 0.3 }}
            className="navbar w-full sticky top-0 z-10">
            <div
                className="nav-wrapper flex justify-center items-center px-10 bg-white text-gray-800 h-12 shadow-md">
                {<ul id="nav" className="flex direction-row space-x-7 items-center">
                    {menuItems.map((item, index) => (
                        <li key={index} className="nav-item text-sm font-base">
                            <a href={`${item.toLowerCase()}`} className=" transition-colors hover:border-b">{item}</a>
                        </li>
                    ))}
                </ul>}
            </div>
        </motion.nav>
    )
}

export default NavBar;