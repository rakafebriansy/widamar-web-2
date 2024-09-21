import React from "react";
import { ButtonType } from "../utils/button";
import { Link } from "react-router-dom";

interface ButtonProps {
    children: React.ReactNode,
    type: ButtonType,
    link?: string,
    full: boolean
}

const Button: React.FC<ButtonProps> = ({ children, type, link, full = false }) => {
    if(type == ButtonType.LINK && link != undefined) {
        return (
            <Link to={link} className={`rounded-md bg-[#1F316F] font-semibold text-white flex items-center justify-center p-3 ${full && 'w-full'}`}>
                <p>{children}</p>
            </Link>
        )
    }
}

export default Button;