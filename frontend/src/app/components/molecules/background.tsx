"use client";

import { motion } from "framer-motion";
import { ProfileForm } from "./components/molecules/profil-form";
import { useEffect, useState } from "react";

export default function background() {
    const ICON_COUNT = 10;
    const [icons, setIcons] = useState(
        Array.from({ length: ICON_COUNT }, () => ({
            position: { x: 0, y: 0 },
            velocity: { x: Math.random() * 4 - 2, y: Math.random() * 4 - 2 }, 
        }))
    );

    useEffect(() => {
        const move = () => {
            setIcons((prevIcons) =>
                prevIcons.map((icon) => {
                    const viewportWidth = window.innerWidth;
                    const viewportHeight = window.innerHeight;
                    
                    let newX = icon.position.x + icon.velocity.x;
                    let newY = icon.position.y + icon.velocity.y;
                    
                    let newVelocityX = icon.velocity.x;
                    let newVelocityY = icon.velocity.y;
                    
                    
                    if (newX > viewportWidth / 2 - 40 || newX < -viewportWidth / 2 + 40) {
                        newVelocityX = -newVelocityX; 
                    }
                
                
                    if (newY > viewportHeight / 2 - 40 || newY < -viewportHeight / 2 + 40) {
                        newVelocityY = -newVelocityY; 
                    }
                
                    return {
                        position: { x: newX, y: newY },
                        velocity: { x: newVelocityX, y: newVelocityY },
                    };
                })
            );
        };

        const interval = setInterval(move, 2); 
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-[#4169E1] w-full h-screen flex items-center justify-center relative z-10 overflow-hidden">
            {icons.map((icon, index) => (
                <motion.div
                key={index}
                animate={{
                ...icon.position,
                rotate: [0, 360],
            }}
                transition={{
                    ease: "linear",
                    duration: 0, 
                    repeat: Infinity, 
                }}
                className="absolute"
            >
                <div className="w-20 h-20 bg-gradient-to-b  via-gray-200 to-gray-400 shadow-2xl  shadow-black rounded-full">
                </div>
                </motion.div>
            ))}
            <section className="w-full h-full flex justify-end">
                <div className="bg-[#fcfcfcb4] h-full lg:w-[50%] backdrop-blur-md border border-white0 flex flex-col items-center justify-center shadow-black shadow-2xl z-50">
                    <h2 className="text-2xl">Login</h2>
                    <div>
                        <ProfileForm />
                    </div>
                </div>
            </section>
        </section>
    );
}
