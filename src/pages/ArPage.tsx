import React from "react";
import Navbar from "../components/Navbar";
import Phase from "../components/Phase";

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
        <section className="flex flex-col items-center gap-6">
            <h1 className="font-bold text-3xl text-center">Langkah Penggunaan AR</h1>
            <div className="grid grid-cols-2 relative">
                <ul className="absolute bg-blue left-1/2 -translate-x-1/2 justify-between h-full grid grid-rows-4">
                    <li className="flex justify-center items-center">
                        <div className="w-12 h-12 border-4 border-black rounded-full bg-[#7367BD]"></div>
                    </li>
                    <li className="flex justify-center items-center">
                        <div className="w-12 h-12 border-4 border-black rounded-full bg-[#7367BD]"></div>
                    </li>
                    <li className="flex justify-center items-center">
                        <div className="w-12 h-12 border-4 border-black rounded-full bg-[#7367BD]"></div>
                    </li>
                    <li className="flex justify-center items-center">
                        <div className="w-12 h-12 border-4 border-black rounded-full bg-[#7367BD]"></div>
                    </li>
                </ul>
                <div className="w-full flex justify-center border-r-2 border-[#7367BD]">
                    <div className="flex-col flex gap-20 px-4 w-[80%]">
                        <div className="h-56 w-full flex justify-center items-center">
                            <img className="h-[80%]" src="src/assets/QR.png" alt="" />
                        </div>
                        <div className="h-56 w-full flex justify-center items-center">
                            <Phase order={2}>Tunggu hingga aplikasi berhasil terinstall.</Phase>
                        </div>
                        <div className="h-56 w-full flex justify-center items-center">
                            <img className="h-[80%]" src="src/assets/Mobile App.png" alt="" />
                        </div>
                        <div className="h-56 w-full flex justify-center items-center">
                            <Phase order={4}>Kemudian arahkan kamera anda menuju barcode di bawah.</Phase>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center border-l-2 border-[#7367BD]">
                    <div className="flex-col flex gap-20 px-4 w-[80%]">
                        <div className="h-56 w-full flex justify-center items-center">
                            <Phase order={1}>Download Aplikasi smartphone android dengan scan barcode di samping.</Phase>
                        </div>
                        <div className="h-56 w-full flex justify-center items-center">
                            <img className="h-[80%]" src="src/assets/AR.png" alt="" />
                        </div>
                        <div className="h-56 w-full flex justify-center items-center">
                            <Phase order={3}>Buka Aplikasi Widamar kemudian pilih fitur mulai scan.</Phase>
                        </div>
                        <div className="h-56 w-full flex justify-center items-center">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default ArPage;