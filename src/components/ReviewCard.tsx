import React from "react";

interface ReviewCardProps { 
    children: React.ReactNode,
    name: string,
    job: string,
    path: string,
}

const ReviewCard: React.FC<ReviewCardProps> = ({name, path, job, children}) => {
    return (
        <div className="p-5 bg-[#F2F2F2] w-full flex flex-col gap-5">
            <p>{children}</p>
            <div className="flex justify-start items-center gap-4">
                <img src={path} className="rounded-full w-12 lg:w-40" alt="" />
                <div className="flex flex-col gap-2 items-start">
                    <p className="font-bold">{name}</p>
                    <p className="font-semibold">{job}</p>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <ul className="flex gap-1">
                    <li>
                        <svg className="w-1 h-1 lg:w-2 lg:h-2" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="6" className="fill-blue-500"/>
                        </svg>
                    </li>
                    <li>
                        <svg className="w-1 h-1 lg:w-2 lg:h-2" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="6" className="fill-[#C4C4C4]"/>
                        </svg>
                    </li>
                    <li>
                        <svg className="w-1 h-1 lg:w-2 lg:h-2" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="6" className="fill-[#C4C4C4]"/>
                        </svg>
                    </li>
                    <li>
                        <svg className="w-1 h-1 lg:w-2 lg:h-2" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="6" className="fill-[#C4C4C4]"/>
                        </svg>
                    </li>
                    <li>
                        <svg className="w-1 h-1 lg:w-2 lg:h-2" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="6" className="fill-[#C4C4C4]"/>
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ReviewCard;