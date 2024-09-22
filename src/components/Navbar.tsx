import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav className="w-full bg-[#1F316F] fixed py-3 px-9 flex justify-between z-50">
            <img src="src/assets/Logo.png" className="h-12" alt="" />
            <ul className="flex gap-5 font-semibold text-white items-center">
                <li>
                    <a href="#profile-video">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#maps">Destination</a>
                </li>
                <li>
                    <a href="#wisata">Tours</a>
                </li>
                <li>
                    <a href="#reviews">Reviews</a>
                </li>
                <li>
                    <Link to="/ar">AR</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;