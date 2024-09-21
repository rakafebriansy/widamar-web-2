import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="w-full bg-[#1F316F] fixed py-3 px-9 flex justify-between">
            <img src="src/assets/Logo.png" className="h-12" alt="" />
            <ul className="flex gap-5 font-semibold text-white items-center">
                <li>Home</li>
                <li>About</li>
                <li>Tours</li>
                <li>Destination</li>
                <li>Reviews</li>
                <li>AR</li>
            </ul>
        </nav>
    )
}

export default Navbar;