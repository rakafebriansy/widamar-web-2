import React from "react";
import Navbar from "../components/Navbar";

const LandingPage:React.FC  = () => {
    return (
        <div className="relative w-full min-h-screen">
            <Navbar></Navbar>
            <div id="profile-video" className="w-full h-screen">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/J2PqQI5Zyrc?autoplay=1" 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>
            </div>
            <div className="p-10 flex flex-col gap-10 w-full items-center">
                <h1 className="font-bold text-3xl text-center">Tentang Kami</h1>
                <div className="grid grid-cols-2 gap-8">
                    <p className=" text-justify w-full">WIDAMAR merupakan proyek yang bertujuan untuk mentransformasi Desa Ajung menjadi destinasi ekowisata digital yang menarik. Proyek ini melibatkan pengembangan wisata interaktif di sekitar dua dam kembar yang ada di wilayah tersebut, dengan implementasi teknologi Augmented Reality (AR) untuk meningkatkan pengalaman wisatawan. Melalui pemanfaatan teknologi AR, pengunjung dapat berinteraksi dengan lingkungan sekitar, mendapatkan informasi tambahan, serta visualisasi digital yang memperkaya pengalaman mereka.</p>
                    <img src="src/assets/About.png" className="w-full" alt="" />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;