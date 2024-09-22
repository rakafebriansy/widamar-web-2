import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {

    const sidebarRef = useRef(null);
    const navRef = useRef(null);

    const summonMenu = () => {
        const sidebar = sidebarRef.current! as HTMLElement;
        if(sidebar.classList.contains('translate-x-full')) {
            sidebar.classList.remove('translate-x-full');
            console.log('ok')
        } else {
            sidebar.classList.add('translate-x-full');
        }
    }

    const beFixed = () => {
        if(!navRef) {
            return;
        }
        const navbar = navRef.current! as HTMLElement;

        if(window.pageYOffset > navbar!.offsetTop) {
            navbar?.classList.replace('relative','fixed');
        }else {
            navbar?.classList.replace('fixed','relative');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', beFixed);

        return () => {window.removeEventListener('scroll', beFixed)};
    },[navRef]);

    return (
        <nav ref={navRef} className="w-full bg-[#1F316F] py-3 px-9 flex items-center justify-between z-50 relative">
            <img src="src/assets/Logo.png" className="h-8 lg:h-12" alt="" />
            <svg className="h-8 lg:hidden stroke-white" onClick={summonMenu} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Menu / Hamburger_LG">
            <path id="Vector" d="M3 17H21M3 12H21M3 7H21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </svg>
            <ul ref={sidebarRef} className="right-0 translate-x-full lg:translate-x-0 absolute flex justify-center text-base lg:text-lg flex-col lg:flex-row items-center lg:justify-end bg-[#1F316F] w-full h-screen lg:h-fit left-0 bottom-1 translate-y-full lg:translate-y-0 transition-all lg:static gap-5 lg:gap-12 font-semibold text-white">
                <li>
                    <Link to="/#profile-video">Home</Link>
                </li>
                <li>
                    <Link to="/#about">About</Link>
                </li>
                <li>
                    <Link to="/#maps">Destination</Link>
                </li>
                <li>
                    <Link to="/#wisata">Tours</Link>
                </li>
                <li>
                    <Link to="/#reviews">Reviews</Link>
                </li>
                <li>
                    <Link to="/ar">AR</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;