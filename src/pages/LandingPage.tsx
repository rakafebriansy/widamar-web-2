import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const LandingPage:React.FC  = () => {

    const [isAnimated, setIsAnimated] = useState(false);
    const mountRef = useRef(null);

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
        <div className="relative w-full min-h-screen">
            <Navbar></Navbar>
            <section id="profile-video" className="w-full h-screen">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/J2PqQI5Zyrc?autoplay=1" 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>
            </section>
            <section id="three-model" className="p-10 flex flex-col gap-10 w-full items-center">
                <h1 className="font-bold text-3xl text-center">Tentang Kami</h1>
                <div className="grid grid-cols-2 gap-8">
                    <p className=" text-justify w-full">WIDAMAR merupakan proyek yang bertujuan untuk mentransformasi Desa Ajung menjadi destinasi ekowisata digital yang menarik. Proyek ini melibatkan pengembangan wisata interaktif di sekitar dua dam kembar yang ada di wilayah tersebut, dengan implementasi teknologi Augmented Reality (AR) untuk meningkatkan pengalaman wisatawan. Melalui pemanfaatan teknologi AR, pengunjung dapat berinteraksi dengan lingkungan sekitar, mendapatkan informasi tambahan, serta visualisasi digital yang memperkaya pengalaman mereka.</p>
                    <img src="src/assets/About.png" className="w-full" alt="" />
                </div>
            </section>
            {/* <section ref={mountRef} className="w-full overflow-hidden">
            </section> */}

        </div>
    );
}

export default LandingPage;