import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Phase from "../components/Phase";
import QRImg from "../assets/QR.png";
import hologramImg from "../assets/Hologram.png";
import mobileAppImg from "../assets/Mobile App.png";
import ARImg from "../assets/AR.png";
import barcodePetaImg from "../assets/Barcode - Peta.png";
import barcodeOutbondImg from "../assets/Barcode - Outbond.png";
import barcodePasarRasaImg from "../assets/Barcode - Pasar Rasa.png";

const ArPage: React.FC = () => {


    useEffect(() => {
        document.getElementById('start')!.scrollIntoView({ behavior: 'smooth' });
    }, []);
    return (
        <div className="overflow-hidden">
            <Navbar></Navbar>
            <section id="start" className="flex flex-col lg:grid lg:grid-cols-2 gap-8 h-screen p-10">
                <div className="w-ful h-full flex justify-center items-center">
                    <img src={hologramImg} className="w-[70%]" alt="" />
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
                            <div className="w-6 lg:w-12 h-6 lg:h-12 border-2 lg:border-4 border-black rounded-full bg-[#7367BD]"></div>
                        </li>
                        <li className="flex justify-center items-center">
                            <div className="w-6 lg:w-12 h-6 lg:h-12 border-2 lg:border-4 border-black rounded-full bg-[#7367BD]"></div>
                        </li>
                        <li className="flex justify-center items-center">
                            <div className="w-6 lg:w-12 h-6 lg:h-12 border-2 lg:border-4 border-black rounded-full bg-[#7367BD]"></div>
                        </li>
                        <li className="flex justify-center items-center">
                            <div className="w-6 lg:w-12 h-6 lg:h-12 border-2 lg:border-4 border-black rounded-full bg-[#7367BD]"></div>
                        </li>
                    </ul>
                    <div className="w-full flex justify-center border-r-2 border-[#7367BD]">
                        <div className="flex-col flex gap-20 px-4 w-[80%]">
                            <div className="h-24 lg:h-56 w-full flex justify-center items-center">
                                <img className="h-[80%]" src={QRImg} alt="" />
                            </div>
                            <div className="h-24 lg:h-56 w-full flex justify-center items-center">
                                <Phase order={2}>Tunggu hingga aplikasi berhasil terinstall.</Phase>
                            </div>
                            <div className="h-24 lg:h-56 w-full flex justify-center items-center">
                                <img className="h-[80%]" src={mobileAppImg} alt="" />
                            </div>
                            <div className="h-24 lg:h-56 w-full flex justify-center items-center">
                                <Phase order={4}>Kemudian arahkan kamera anda menuju barcode di bawah.</Phase>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center border-l-2 border-[#7367BD]">
                        <div className="flex-col flex gap-20 px-4 w-[80%]">
                            <div className="h-24 lg:h-56 w-full flex justify-center items-center">
                                <Phase order={1}>Download Aplikasi smartphone android dengan scan barcode di samping.</Phase>
                            </div>
                            <div className="h-24 lg:h-56 w-full flex justify-center items-center">
                                <img className="h-[80%]" src={ARImg} alt="" />
                            </div>
                            <div className="h-24 lg:h-56 w-full flex justify-center items-center">
                                <Phase order={3}>Buka Aplikasi Widamar kemudian pilih fitur mulai scan.</Phase>
                            </div>
                            <div className="h-24 lg:h-56 w-full flex justify-center items-center">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col items-center gap-6 p-10">
                <h1 className="font-bold text-3xl text-center">Barcode Augmented Reality</h1>
                <ul className="flex flex-col gap-12 w-[80%]">
                    <li className="flex flex-col gap-4 w-full">
                        <img src={barcodePetaImg} className="w-full" alt="" />
                        <h2 className="text-xl text-center">Tampilan Peta Widamar</h2>
                    </li>
                    <li className="flex flex-col gap-4 w-full">
                        <img src={barcodePasarRasaImg} className="w-full" alt="" />
                        <h2 className="text-xl text-center">Tampilan Pasar Rasa</h2>
                    </li>
                    <li className="flex flex-col gap-4 w-full">
                        <img src={barcodeOutbondImg} className="w-full" alt="" />
                        <h2 className="text-xl text-center">Tampilan Outbond</h2>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default ArPage;