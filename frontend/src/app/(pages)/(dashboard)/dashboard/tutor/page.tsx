"use client"
import { Section } from '#/src/app/components/atoms/section'
import { Card, CardContent, CardTitle } from '#/src/app/components/ui/card'
import { Calendar } from "@/components/ui/calendar"
import "./index.css"


import React from 'react'


export default function DeshboardTutor(){
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    const circles = Array.from({ length: 18 }, (_, index) => index + 1)

    const materias = [
        {
            nombre: "Matematica III",
            dias: "Lunes / Jueves",
            trabajos: ["Trabajo Practico", "Examen"],
            notas: [10, 8, 7, 9, 6, 10, 8, 7, 9, 6, 10, 8, 10 ,6 ,5 ,6 , 7 ,8], 
        },
        {
            nombre: "Física II",
            dias: "Martes / Viernes",
            trabajos: ["Trabajo Practico", "Examen"],
            notas: [9, 7, 8, 10, 6, 9, 7, 8, 10, 6, 9, 7, 10 , 8 ,5 ,6 , 7 ,8],
        },
        {
            nombre: "Programación I",
            dias: "Miércoles / Sábado",
            trabajos: ["Trabajo Practico", "Examen"],
            notas: [10, 9, 8, 7, 10, 9, 8, 7, 10, 9, 8, 7, 10 , 9 ,5 ,6 , 7 ,8],
        },
        {
            nombre: "Matematica III",
            dias: "Lunes / Jueves",
            trabajos: ["Trabajo Practico", "Examen"],
            notas: [10, 8, 7, 9, 6, 10, 8, 7, 9, 6, 10, 8, 10 , 1 ,5 ,6 , 7 ,8], 
        },
        {
            nombre: "Física II",
            dias: "Martes / Viernes",
            trabajos: ["Trabajo Practico", "Examen"],
            notas: [9, 7, 8, 10, 6, 9, 7, 8, 10, 6, 9, 7, 10 , 5 ,5 ,6 , 7 ,8],
        },
        {
            nombre: "Programación I",
            dias: "Miércoles / Sábado",
            trabajos: ["Trabajo Practico", "Examen"],
            notas: [10, 9, 8, 7, 10, 9, 8, 7, "X" , 9, 8, 7, 10 , 4 ,5 ,6 , 7 ,8],
        },
        {
            nombre: "Matematica III",
            dias: "Lunes / Jueves",
            trabajos: ["Trabajo Practico", "Examen"],
            notas: [10, 8, 7, 9, 6, 10, 8, 7, 9, 6, 10, 8, 10 , 10 ,5 ,],
        },
        {
            nombre: "Física II",
            dias: "Martes / Viernes",
            trabajos: ["Trabajo Practico", "Examen"],
            notas: [9, 7, 8, 10, 6, 9, 7, 8, 10, 6, 9, 7, 10 , 2 ,5],
        },
    ]

    return(
        <Section className='grid   2xl:grid-cols-3 mt-10 xl:flex xl:justify-center xl:items-center xl:w-full'>
            <section className='flex flex-col  xl:justify-start 2xl:items-start lg:w-[930px] lg:gap-72 xl:w-[30%] xl:gap-16'>
                    <Card className='mb-10 lg:mb-0 w-80 h-80 flex flex-col justify-center items-center gap-5  shadow-md'>
                        <CardTitle className='mt-5 text-3xl'>
                            Asistencia General
                        </CardTitle>
                        <CardContent>
                            <Card className='w-32 h-32 p-5 rounded-full border-2 shadow-[inset_10px_10px_20px_rgba(0,0,0,0.5)]  shadow-slate-500  '>
                                <p className='text-5xl mt-5 '>20%</p>
                            </Card>
                        </CardContent>
                        <CardContent>
                            <p className=' text-2xl'>Total: 2 / 10</p>
                        </CardContent>
                    </Card>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border w-80 h-96 flex justify-center items-center shadow-md mb-10 lg:mb-0"
                    />
            
            </section>
            <section className="lg:col-span-2 lg:w-[930px] 2xl:w-[1000px] lg:mt-10 xl:mt-0">
                <div className="h-[770px] lg:overflow-y-auto scroll-container ">
                    {materias.map((materia, materiaIndex) => (
                        <Card key={materiaIndex} className="shadow-md  w-80 lg:w-full lg:h-32 lg:flex lg:flex-col lg:justify-center lg:items-center lg:px-5 mb-8 pb-10 pt-10 lg:pt-0 lg:pb-0">
                            <div className="flex flex-col items-center lg:gap-0 lg:flex-row lg:justify-between lg:w-full">
                                <h2 className="text-xl lg:text-2xl">{materia.nombre}</h2>
                                <p className="text-xl lg:text-xl">{materia.dias}</p>
                                <span className="lg:flex lg:w-[40%] lg:gap-5">
                                    {materia.trabajos.map((trabajo, trabajoIndex) => (
                                        <div
                                            key={trabajoIndex}
                                            className={`w-44 lg:w-52 h-8 font-bold mt-5 mb-5 lg:mb-0 lg:mt-0 ${
                                                trabajoIndex === 0
                                                    ? "bg-violet-500 text-white"
                                                    : "text-violet-500 shadow-[inset_1px_3px_10px_rgba(0,0,0,0.5)]"
                                            } rounded-full flex justify-center items-center`}
                                        >
                                            {trabajo}
                                            
                                        </div>
                                    ))}
                                </span>
                            </div>
                            <section className="flex flex-col items-center gap-2  lg:flex-row  lg:mt-3 lg:w-[950px] lg:gap-3 lg:px-5 lg:justify-center lg:items-center">
                                {circles.map((_, index) => {
                                    const isBigCircle = (index + 1) % 3 === 0;
                                    return (
                                        <div
                                            key={index}
                                            className={`${
                                                isBigCircle
                                                    ? "w-44 lg:w-16 lg:h-16 text-violet-500"
                                                    : "w-44 lg:w-12 lg:h-12 bg-violet-500 text-white" 
                                            } shadow-[inset_1px_3px_10px_rgba(0,0,0,0.5)] lg:rounded-full z-10 flex justify-center items-center`}
                                        >
                                            <span className="lg:text-2xl font-bold">
                                                {materia.notas[index]}
                                            </span>
                                        </div>
                                    )
                                })}
                                <span>
                                    <div className='h-16 w-16 rounded-full flex flex-col justify-center items-center shadow-lg border'>
                                        <p className='font-semibold'>Prom</p> 
                                        <p className='text-black text-xl font-bold'>10</p></div>
                                </span>
                            </section>
                        </Card>
                    ))}
                </div>
            </section>
        </Section>
    )
}