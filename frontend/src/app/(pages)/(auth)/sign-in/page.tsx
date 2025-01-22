"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { useEffect } from "react";

function App() {
    const ICON_COUNT = 30;

    const generateRandomPosition = () => ({
        x: Math.random() * window.innerWidth - window.innerWidth / 4,
        y: Math.random() * window.innerHeight - window.innerHeight / 100,
    });

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });
    useEffect(() => {
        console.log("App component mounted or updated");
    });

    return (
        <section className="bg-[#4169E1] w-full h-screen flex items-center justify-center relative z-10 overflow-hidden">
            {Array.from({ length: ICON_COUNT }).map((_, index) => {
                const initialPosition = generateRandomPosition();

                return (
                    <motion.div
                        key={index}
                        initial={initialPosition}
                        animate={{
                            x: [initialPosition.x, -initialPosition.x],
                            y: [initialPosition.y, -initialPosition.y],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "anticipate",
                        }}
                        className="absolute"
                    >
                        <div className="w-20 h-20 bg-gradient-to-b via-gray-200 to-gray-400 shadow-2xl shadow-black rounded-full" />
                    </motion.div>
                );
            })}

            <section className="w-full h-full flex justify-end">

                <form
                    onSubmit={onSubmit}
                    className="bg-[#fcfcfcb4] h-full lg:w-[50%] backdrop-blur-md border border-white flex flex-col items-center justify-center shadow-black shadow-2xl z-50"
                >

                    
                    <h1 className="text-2xl font-bold">Sing In</h1>
                    
                    <div className="mb-3 mt-5">
                        <label htmlFor="email">Correo</label>
                        <Input
                            type="email"
                            className="w-96 mt-2 relative"
                            {...register("email", {
                                required: { value: true, message: "correo es requerido" },
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Correo inválido",
                                },
                            })}
                        />
                        {errors.email && (
                            <span className="text-xs text-red-800 mt-2">{errors.email.message}</span>
                        )}
                    </div>


                    <div className="mb-3 mt-5">
                        <label htmlFor="password" >Password</label>
                        <Input
                            type="password"
                            className="w-96 mt-2"
                            {...register("password", {
                                required: { value: true, message: "Password es requerido" },
                            })}
                        />
                        {errors.password && (
                            <span className="text-xs text-red-800 mt-2">{errors.password.message}</span>
                        )}

                        <Button
                            type="submit"
                            className="bg-slate-950 text-white w-96 mt-10 rounded-sm py-[3px]"
                        >
                            Login
                        </Button>
                    </div>
                </form>
            </section>
        </section>
    );
}

export default App;
