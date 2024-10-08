import React from "react";

interface PhaseProps {
    order: number,
    children: string
}

const Phase: React.FC<PhaseProps> = ({order, children}) => {
    return (
        <div className="w-full bg-black text-white p-3 lg:p-6 flex flex-col items-start gap-2 lg:gap-4 rounded-xl">
            <h4 className="text-sm lg:text-2xl font-bold">PHASE {order}</h4>
            <div className="flex items-start w-full gap-1 lg:gap-2">
                <p>&bull;</p>
                <p className="font-semibold text-[0.5rem] lg:text-base">{children}</p>
            </div>
        </div>
    )
}

export default Phase;