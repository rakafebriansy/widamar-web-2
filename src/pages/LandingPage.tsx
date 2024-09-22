import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Button from "../components/Button";
import { ButtonType } from "../utils/button";
import PhotoCard from "../components/PhotoCard";
import miniTubingImg from "../assets/Mini Tubing.png";
import pasarRasaImg from "../assets/Pasar Rasa.jpg";
import aboutImg from "../assets/About.png";
import mapDummyImg from "../assets/Map Dummy.png";
import userImg from "../assets/User.png";
import ReviewCard from "../components/ReviewCard";
import { useLocation } from "react-router-dom";

const LandingPage:React.FC  = () => {

    const [isAnimated, setIsAnimated] = useState(false);
    const mountRef = useRef(null);

    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);

    useEffect(() => {
        if(!isAnimated) {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer();
            
            renderer.setClearColor(0xffffff, 1); 
            renderer.setSize(window.innerWidth, window.innerHeight);

            if(!mountRef.current) {
                return;
            }

            const htmlElement: HTMLElement = mountRef.current as HTMLElement;

            htmlElement.appendChild(renderer.domElement);

            const controls = new OrbitControls(camera, renderer.domElement);
    
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(5, 10, 7.5);
            scene.add(directionalLight);

            const spotlight = new THREE.SpotLight(0xffffff, 2);
            spotlight.position.set(15, 30, 20);
            spotlight.castShadow = true;
            scene.add(spotlight);
            
            const loader = new GLTFLoader();
            const dracoLoader = new DRACOLoader();
            dracoLoader.setDecoderPath('/draco/');
            loader.setDRACOLoader(dracoLoader);
            loader.load('http://server.widamar.com/api/ppk', function (gltf) {
                scene.add(gltf.scene);
                gltf.scene.position.set(0, 0, 0);
            }, undefined, function (error) {
                console.error('An error happened:', error);
            });
    
            camera.position.x = 50;
            camera.position.z = -10;
            camera.position.y = 40;
            camera.lookAt(0, 0, 0);

            const animate = () => {
                console.log('animate')
                requestAnimationFrame(animate);
                controls.update();
                renderer.render(scene, camera);
            }

            setIsAnimated(true);
            animate();

            const handleResize = () => {
                camera.aspect = (window.innerWidth/3) / (window.innerHeight/3);
                camera.updateProjectionMatrix();
                renderer.setSize((window.innerWidth/3), (window.innerHeight/3));
            };
            window.addEventListener('resize', handleResize);
    
            return () => {
                window.removeEventListener('resize', handleResize);
                htmlElement.removeChild(renderer.domElement);
                renderer.dispose();
            };
        }
    },[]);


    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <Navbar></Navbar>
            <section id="profile-video" className="w-full h-screen">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/J2PqQI5Zyrc" 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>
            </section>
            <section id="about" className="p-10 flex flex-col gap-10 w-full items-center">
                <h1 className="font-bold text-2xl lg:text-3xl text-center">Tentang Kami</h1>
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8">
                    <p className="text-xs lg:text-base text-justify w-full">WIDAMAR merupakan proyek yang bertujuan untuk mentransformasi Desa Ajung menjadi destinasi ekowisata digital yang menarik. Proyek ini melibatkan pengembangan wisata interaktif di sekitar dua dam kembar yang ada di wilayah tersebut, dengan implementasi teknologi Augmented Reality (AR) untuk meningkatkan pengalaman wisatawan. Melalui pemanfaatan teknologi AR, pengunjung dapat berinteraksi dengan lingkungan sekitar, mendapatkan informasi tambahan, serta visualisasi digital yang memperkaya pengalaman mereka.</p>
                    <img src={aboutImg} className="w-full" alt="" />
                </div>
            </section>
            {/* <section id="three-model" ref={mountRef} className="w-full overflow-hidden">
            </section> */}
            <section id="maps" className="p-10 flex flex-col gap-6 lg:gap-10 w-full items-center">
                <h1 className="font-bold text-2xl lg:text-3xl text-center">Maps dan Peta Widamar</h1>
                <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4 lg:gap-8">
                    <img src={mapDummyImg} className="w-full col-span-3" alt="" />
                    <div className="text-sm lg:text-2xl flex items-center">
                        <Button full={true} type={ButtonType.LINK} link="/ar">Halaman AR</Button>
                    </div>
                </div>
                <div className="w-full flex gap-10 justify-center text-[0.5rem] lg:text-base">
                    <div className="w-96">
                        <Button full={true} type={ButtonType.LINK} link="#">Tutorial Augmented Reality</Button>
                    </div>
                    <div className="w-96">
                        <Button full={true} type={ButtonType.LINK} link="#">Lihat QR Augmented Reality</Button>
                    </div>
                </div>
            </section>
            <section id="wisata" className="p-10 flex flex-col gap-6 lg:gap-10 w-full items-center">
                <h1 className="font-bold text-2xl lg:text-3xl text-center">Maps dan Peta Widamar</h1>
                <ul className="flex flex-col lg:flex-row gap-12 lg:gap-0 justify-around w-full">
                    <li className="w-72 h-44 text-base lg:text-xl">
                        <PhotoCard path={miniTubingImg}>Mini Tubing</PhotoCard>
                    </li>
                    <li className="w-72 h-44 text-base lg:text-xl">
                        <PhotoCard path={pasarRasaImg}>Pasar Rasa</PhotoCard>
                    </li>
                    <li className="w-72 h-44 text-base lg:text-xl">
                        <PhotoCard path={miniTubingImg}>Outbond</PhotoCard>
                    </li>
                </ul>
            </section>
            <section id="reviews" className="flex flex-col items-center lg:grid lg:grid-cols-5 p-10 gap-6 lg:gap-10">
                <div className="lg:col-span-2">
                    <h1 className="font-bold text-2xl lg:text-3xl">Testimoni</h1>
                </div>
                <div className="lg:h-80 w-full lg:col-span-3 text-xs lg:text-base">
                    <ReviewCard name="Wawan" path={userImg} job="Mahasiswa">welcome ! adventure loving people here , you can share your joyful experiences and memorable moments of your journeys to different destinations around the world</ReviewCard>
                </div>
            </section>
            <section className="w-full flex justify-center mb-12 lg:mb-28">
            <div className="w-[90%] lg:w-[80%] flex flex-col items-center relative gap-8 lg:gap-14">
                <div className="absolute top-0 right-0 w-8 lg:w-16 bg-[#1F316F] rounded-full p-2 lg:p-3">
                    <svg className="w-full" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.5924 12.9909C40.3053 14.1883 40.2098 15.6141 39.342 16.7115L20.29 40.8187C19.5043 41.8128 18.2105 42.3196 16.8876 42.0734C15.5922 41.8318 14.565 40.9161 14.2085 39.6845L11.3895 29.9559L11.0959 28.944L10.3389 28.1915L3.05955 20.96C2.13784 20.0449 1.83361 18.7245 2.26558 17.5159C2.6931 16.3211 3.76537 15.4541 5.08738 15.2861L36.1442 11.3409C37.5582 11.1609 38.8794 11.7935 39.5924 12.9909Z" className="fill-white"/>
                        <path d="M11.3891 29.9557L14.2081 39.6844C14.5646 40.9159 15.5917 41.8315 16.8872 42.0732C18.2102 42.3195 19.5039 41.8126 20.2896 40.8185L39.3416 16.7113C40.2094 15.6139 40.3049 14.1881 39.592 12.9907L11.0955 28.9438L11.3891 29.9557Z" className="fill-white"/>
                        <path d="M22.693 22.452C22.9829 22.939 22.8113 23.5621 22.3085 23.8436L11.3904 29.9558L11.0968 28.9439L10.3398 28.1914L21.2579 22.0792C21.7607 21.7977 22.4031 21.9651 22.693 22.452Z" className="fill-[#1F316F]"/>
                        <path d="M11.3886 29.9564L22.3066 23.8442C22.8094 23.5627 22.9811 22.9396 22.6912 22.4526L11.095 28.9445L11.3886 29.9564Z" className="fill-[#1F316F]"/>
                    </svg>
                </div>
                <div className=" flex flex-col gap-4 lg:w-[60%] items-center text-center">
                    <h1 className="font-bold text-2xl lg:text-4xl">Saran dan Kritik</h1>
                    <p className="font-bold text-xs text-[#717171] lg:text-base">Yuk berikan kritik dan saran Atas tempat wisata ini agar  menjadi lebih baik lagi, jangan lupa berikan kritik dan saran yang membangun ya.</p>
                </div>
                <div className="flex flex-col gap-4 lg:gap-5 w-full">
                    <div className="lg:grid lg:grid-cols-2 flex flex-col gap-4 lg:gap-8">
                        <div className="bg-[#1F316F] p-1 rounded-md">
                            <input type="text" name="" placeholder="Nama" id="" className="rounded-sm font-bold text-xs lg:text-lg w-full h-full p-3" />
                        </div>
                        <div className="bg-[#1F316F] p-1 rounded-md">
                            <input type="text" name="" placeholder="Nomor Telepon" id="" className="rounded-sm font-bold text-xs lg:text-lg w-full h-full p-3" />
                        </div>
                    </div>
                    <div className="lg:grid lg:grid-cols-2 flex flex-col gap-4 lg:gap-8 h-50">
                        <div className="bg-[#1F316F] p-1 h-32 rounded-md">
                            <textarea className="w-full h-full font-bold text-xs lg:text-lg resize-none p-2" placeholder="Sampaikan Kritik Anda*"></textarea>
                        </div>
                        <div className="bg-[#1F316F] p-1 h-32 rounded-md">
                            <textarea className="w-full h-full font-bold text-xs lg:text-lg resize-none p-2" placeholder="Sampaikan Masukan Anda*"></textarea>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-72 text-sm lg:text-base">
                <Button type={ButtonType.SUBMIT} full={true}>Submit</Button>
                </div>
            </div>
            </section>
        </div>
    );
}

export default LandingPage;