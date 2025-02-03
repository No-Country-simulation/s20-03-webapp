'use client'

import { columns } from '@/app/(pages)/(dashboard)/dashboard/dataTable//colums'
import { DataTable } from '@/app/(pages)/(dashboard)/dashboard/dataTable/data-table'
import { payments } from '@/data/payments.data'
import { Section } from '#/src/app/components/atoms/section'
import { UpdateGrades } from '#/src/app/components/molecules/card-grades'
import CreateTask from '#/src/app/components/molecules/cards/create-Task'
import { useState } from 'react'
import { Card, CardContent, CardHeader } from '#/src/app/components/ui/card'
import { Button } from '#/src/app/components/ui/button'
import { motion, AnimatePresence } from "framer-motion"

export default function TeacherPage() {
  const studentNames = payments.map(payment => payment.alumnName)
  const [isTaskOpen, setIsTaskOpen] = useState(true)
  const [isGradesOpen, setIsGradesOpen] = useState(false) 


  const handleGradesToggle = () => {
    setIsGradesOpen(!isGradesOpen)
    if (isTaskOpen) setIsTaskOpen(false) 
  }


  const handleTaskToggle = () => {
    setIsTaskOpen(!isTaskOpen)
    if (isGradesOpen) setIsGradesOpen(false)
  }

  return (
    <Section className='flex flex-col ' component={'section'}>
      <h1 className='text-2xl sm:text-3xl mb-5'>
        Curso 5A - Matematica
      </h1>
      <section className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className='w-full md:w-[400px] h-full'>
          <DataTable columns={columns} data={payments} />
        </div>

        <div className='flex flex-col gap-5 w-full md:w-[85%]'>
            {/*subir tareas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='border-none'
          >
            <Card className="w-full cursor-pointer border-none">
              <CardHeader>
                <Button
                  className="w-full text-lg font-bold "
                  variant="outline"
                  onClick={handleTaskToggle}
                >
                  {isTaskOpen ? "Cerrar" : "Crear Tarea"}
                </Button>
              </CardHeader>
              <AnimatePresence>
                {isTaskOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent>
                      <CreateTask />
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        
        {/*subir notas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='border-none'
          >
            <Card className="w-full cursor-pointer border-none">
              <CardHeader>
                <Button
                  className="w-full text-lg font-bold"
                  variant="outline"
                  onClick={handleGradesToggle}
                >
                  {isGradesOpen ? "Cerrar" : "Subir Notas"}
                </Button>
              </CardHeader>
              <AnimatePresence>
                {isGradesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent>
                      <UpdateGrades names={studentNames} />
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>

        
        <Card className='h-[765px] flex flex-col items-center p-5 gap-7 overflow-y-auto'>
            <h2 >Recordatorios de Comision</h2>
            <Card className='w-[90%] p-5'>
              <CardHeader>Tarea: Titulo de la tarea</CardHeader>
              <CardContent className='flex flex-col gap-5'>
                <p>Descripcion de la tarea con toda la descripcion que puso el profesor para poder rellenar ahora</p>
                <p>Fecha de entrega: 21/5/2025</p>
              </CardContent>
              <Button className='ml-5 mb-5'>Deleted</Button>
            </Card>
            <Card className='w-[90%] p-5'>
              <CardHeader>Tarea: Titulo de la tarea</CardHeader>
              <CardContent className='flex flex-col gap-5'>
                <p>Descripcion de la tarea con toda la descripcion que puso el profesor para poder rellenar ahora</p>
                <p>Fecha de entrega: 21/5/2025</p>
              </CardContent>
              <Button className='ml-5 mb-5'>Deleted</Button>
            </Card>
            <Card className='w-[90%] p-5'>
              <CardHeader>Tarea: Titulo de la tarea</CardHeader>
              <CardContent className='flex flex-col gap-5'>
                <p>Descripcion de la tarea con toda la descripcion que puso el profesor para poder rellenar ahora</p>
                <p>Fecha de entrega: 21/5/2025</p>
              </CardContent>
              <Button className='ml-5 mb-5'>Deleted</Button>
            </Card>
            <Card className='w-[90%] p-5'>
              <CardHeader>Tarea: Titulo de la tarea</CardHeader>
              <CardContent className='flex flex-col gap-5'>
                <p>Descripcion de la tarea con toda la descripcion que puso el profesor para poder rellenar ahora</p>
                <p>Fecha de entrega: 21/5/2025</p>
              </CardContent>
              <Button className='ml-5 mb-5'>Deleted</Button>
            </Card>
            <Card className='w-[90%] p-5'>
              <CardHeader>Tarea: Titulo de la tarea</CardHeader>
              <CardContent className='flex flex-col gap-5'>
                <p>Descripcion de la tarea con toda la descripcion que puso el profesor para poder rellenar ahora</p>
                <p>Fecha de entrega: 21/5/2025</p>
              </CardContent>
              <Button className='ml-5 mb-5'>Deleted</Button>
            </Card>
        </Card>
      </section>
    </Section>
  )
}