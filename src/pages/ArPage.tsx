import React from "react";
import Navbar from "../components/Navbar";

const ArPage: React.FC = () => {
    return (
        <>
        <Navbar></Navbar>
        <section className="grid grid-cols-2 gap-8 h-screen p-10">
            <div className="w-ful h-full flex justify-center items-center">
                <img src="src/assets/Hologram.png" className="w-[70%]" alt="" />
            </div>
            <div className="flex flex-col gap-4 justify-center items-start">
                <h3 className="text-4xl font-bold">Apa itu AR ?</h3>
                <p className="font-semibold text-justify">Augmented Reality (AR) adalah teknologi yang menggabungkan dunia nyata dengan elemen-elemen digital atau virtual yang dihasilkan oleh komputer. AR memungkinkan pengguna untuk melihat lingkungan dunia nyata yang diperkaya dengan informasi atau objek digital, yang biasanya diproyeksikan melalui perangkat seperti smartphone, tablet, atau kacamata AR khusus.</p>
            </div>
        </section>
        </>
    );
}

export default ArPage;