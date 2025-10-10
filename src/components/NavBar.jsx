import React from "react";

function NavBar() {
    const menuItems = ["Home", "About", "Projects", "Contact"];

    return (
        <nav className="navbar w-full sticky top-0 z-10">
            <div className="nav-wrapper flex justify-center items-center px-10 bg-white text-black h-12 shadow-md">
                {<ul id="nav" className="flex direction-row space-x-7 items-center">
                        {menuItems.map((item, index) => (
                            <li key={index} className="nav-item text-sm font-semibold">
                                <a href={`${item.toLowerCase()}`} className=" hover:border-b">{item}</a>
                            </li>
                        ))}
                    </ul> }
            </div>
        </nav>
    )
}

export default NavBar;