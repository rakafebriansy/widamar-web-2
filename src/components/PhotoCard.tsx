import React from "react";

interface PhotoCardProps {
    children: React.ReactNode,
    path: string,
}

const PhotoCard: React.FC<PhotoCardProps> = ({children, path}) => {
    return (
        <div className="relative w-full h-full">
            <img src={path} className="w-full h-full" alt="" />
            <div className="bg-white p-2 px-6 flex items-center justify-center shadow-lg left-1/2 -translate-x-1/2 absolute bottom-0 translate-y-1/2">
                <p className="font-semibold text-nowrap">{children}</p>
            </div>
        </div>
    )
}

export default PhotoCard;