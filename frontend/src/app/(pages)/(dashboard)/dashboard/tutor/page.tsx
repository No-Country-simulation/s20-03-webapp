'use client'
import './index.css'

import React from 'react'

import { Calendar } from '@/components/ui/calendar'
import { Section } from '#/src/app/components/atoms/section'
import { Card, CardContent, CardTitle } from '#/src/app/components/ui/card'

export default function DeshboardTutor() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  const circles = Array.from({ length: 18 }, (_, index) => index + 1)

  const materias = [
    {
      nombre: 'Matematica III',
      dias: 'Lunes / Jueves',
      trabajos: ['Trabajo Practico', 'Examen'],
      notas: [10, 8, 7, 9, 6, 10, 8, 7, 9, 6, 10, 8, 10, 6, 5, 6, 7, 8],
    },
    {
      nombre: 'Física II',
      dias: 'Martes / Viernes',
      trabajos: ['Trabajo Practico', 'Examen'],
      notas: [9, 7, 8, 10, 6, 9, 7, 8, 10, 6, 9, 7, 10, 8, 5, 6, 7, 8],
    },
    {
      nombre: 'Programación I',
      dias: 'Miércoles / Sábado',
      trabajos: ['Trabajo Practico', 'Examen'],
      notas: [10, 9, 8, 7, 10, 9, 8, 7, 10, 9, 8, 7, 10, 9, 5, 6, 7, 8],
    },
    {
      nombre: 'Matematica III',
      dias: 'Lunes / Jueves',
      trabajos: ['Trabajo Practico', 'Examen'],
      notas: [10, 8, 7, 9, 6, 10, 8, 7, 9, 6, 10, 8, 10, 1, 5, 6, 7, 8],
    },
    {
      nombre: 'Física II',
      dias: 'Martes / Viernes',
      trabajos: ['Trabajo Practico', 'Examen'],
      notas: [9, 7, 8, 10, 6, 9, 7, 8, 10, 6, 9, 7, 10, 5, 5, 6, 7, 8],
    },
    {
      nombre: 'Programación I',
      dias: 'Miércoles / Sábado',
      trabajos: ['Trabajo Practico', 'Examen'],
      notas: [10, 9, 8, 7, 10, 9, 8, 7, 'X', 9, 8, 7, 10, 4, 5, 6, 7, 8],
    },
    {
      nombre: 'Matematica III',
      dias: 'Lunes / Jueves',
      trabajos: ['Trabajo Practico', 'Examen'],
      notas: [10, 8, 7, 9, 6, 10, 8, 7, 9, 6, 10, 8, 10, 10, 5],
    },
    {
      nombre: 'Física II',
      dias: 'Martes / Viernes',
      trabajos: ['Trabajo Practico', 'Examen'],
      notas: [9, 7, 8, 10, 6, 9, 7, 8, 10, 6, 9, 7, 10, 2, 5],
    },
  ]

  return (
    <Section className="mt-10 grid justify-center xl:ml-7 xl:flex xl:items-center xl:justify-center 2xl:ml-0 2xl:w-full 2xl:grid-cols-3">
      <section className="b flex flex-col md:flex-row md:gap-52 lg:w-[930px] lg:gap-72 xl:w-[30%] xl:flex-col xl:justify-start xl:gap-16 2xl:mr-10 2xl:items-start">
        <Card className="mb-10 flex h-80 w-80 flex-col items-center justify-center gap-5 shadow-md lg:mb-0">
          <CardTitle className="mt-5 text-3xl">Asistencia General</CardTitle>
          <CardContent>
            <Card className="h-32 w-32 rounded-full border-2 p-5 shadow-[inset_10px_10px_20px_rgba(0,0,0,0.5)] shadow-slate-500">
              <p className="mt-5 text-5xl">20%</p>
            </Card>
          </CardContent>
          <CardContent>
            <p className="text-2xl">Total: 2 / 10</p>
          </CardContent>
        </Card>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="mb-10 flex h-96 w-80 items-center justify-center rounded-md border shadow-md lg:mb-0"
        />
      </section>
      <section className="lg:col-span-2 lg:mt-10 lg:w-[740px] xl:mt-0 xl:w-[930px] 2xl:w-[1000px]">
        <div className="scroll-container h-[770px] lg:overflow-y-auto">
          {materias.map((materia, materiaIndex) => (
            <Card
              key={materiaIndex}
              className="mb-8 w-80 pb-10 pt-10 shadow-md lg:ml-0 lg:flex lg:h-32 lg:w-full lg:flex-col lg:items-center lg:justify-center lg:px-5 lg:pb-0 lg:pt-0 xl:ml-10 xl:w-[67%] 2xl:ml-0 2xl:w-full"
            >
              <div className="flex flex-col items-center lg:w-full lg:flex-row lg:justify-between lg:gap-0">
                <h2 className="text-xl 2xl:text-2xl">{materia.nombre}</h2>
                <p className="text-xl 2xl:text-xl">{materia.dias}</p>
                <span className="lg:flex lg:w-[40%] lg:gap-5">
                  {materia.trabajos.map((trabajo, trabajoIndex) => (
                    <div
                      key={trabajoIndex}
                      className={`mb-5 mt-5 h-8 w-44 font-bold lg:mb-0 lg:mt-0 lg:w-52 ${
                        trabajoIndex === 0
                          ? 'bg-violet-500 text-white lg:text-xs xl:w-52 xl:text-xs'
                          : 'text-violet-500 shadow-[inset_1px_3px_10px_rgba(0,0,0,0.5)]'
                      } flex items-center justify-center rounded-full lg:text-xs xl:text-xs`}
                    >
                      {trabajo}
                    </div>
                  ))}
                </span>
              </div>
              <section className="flex flex-col items-center gap-2 lg:mt-3 lg:w-[950px] lg:flex-row lg:items-center lg:justify-center lg:gap-2 lg:px-5 xl:text-xs 2xl:gap-3">
                {circles.map((_, index) => {
                  const isBigCircle = (index + 1) % 3 === 0
                  return (
                    <div
                      key={index}
                      className={`${
                        isBigCircle
                          ? 'w-44 text-violet-500 lg:h-16 lg:w-8 lg:text-xs xl:w-6 xl:text-xl 2xl:w-16'
                          : 'w-44 bg-violet-500 text-white lg:h-12 lg:w-8 lg:text-xs xl:w-6 xl:text-xl 2xl:w-12'
                      } z-10 flex items-center justify-center shadow-[inset_1px_3px_10px_rgba(0,0,0,0.5)] lg:rounded-full`}
                    >
                      <span className="font-bold 2xl:text-2xl">
                        {materia.notas[index]}
                      </span>
                    </div>
                  )
                })}
                <span>
                  <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full border shadow-lg xl:w-7 xl:border-none xl:shadow-none 2xl:border 2xl:shadow-lg">
                    <p className="font-semibold">Prom</p>
                    <p className="text-xl font-bold text-black">10</p>
                  </div>
                </span>
              </section>
            </Card>
          ))}
        </div>
      </section>
    </Section>
  )
}
