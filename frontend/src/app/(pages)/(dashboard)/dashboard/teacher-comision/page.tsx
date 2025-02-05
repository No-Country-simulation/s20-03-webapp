'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { columns } from '@/app/(pages)/(dashboard)/dashboard/dataTable//colums'
import { DataTable } from '@/app/(pages)/(dashboard)/dashboard/dataTable/data-table'
import { payments } from '@/data/payments.data'
import { Section } from '#/src/app/components/atoms/section'
import CreateTask from '#/src/app/components/molecules/cards/create-Task'
import { Button } from '#/src/app/components/ui/button'
import { Card, CardContent, CardHeader } from '#/src/app/components/ui/card'
import { Input } from '#/src/app/components/ui/input' 
import { Textarea } from '#/src/app/components/ui/textarea'

export default function TeacherPage() {
  const [isTaskOpen, setIsTaskOpen] = useState(true)
  const [isMessageOpen, setIsMessageOpen] = useState(false)
  const [studentsData, setStudentsData] = useState(payments)

  const handleTaskToggle = () => {
    setIsTaskOpen(!isTaskOpen)
    if (isMessageOpen) setIsMessageOpen(false) 
  }

  const handleMessageToggle = () => {
    setIsMessageOpen(!isMessageOpen)
    if (isTaskOpen) setIsTaskOpen(false) 
  }

  const handleUpdateGrades = (data: typeof payments) => {
    setStudentsData(data)
    console.log('Notas actualizadas:', data)
    alert('Notas actualizadas correctamente')
  }

  return (
    <Section className="flex flex-col" component={'section'}>
      <h1 className="mb-5 text-2xl sm:text-3xl">Curso 5A - Matematica</h1>
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="h-full w-full md:w-[400px]">
          <DataTable
            columns={columns}
            data={studentsData}
          />
        </div>

        <div className="flex w-full flex-col gap-5 md:w-[85%]">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="border-none"
          >
            <Card className="w-full cursor-pointer border-none">
              <CardHeader>
                <Button
                  className="w-full text-lg font-bold"
                  variant="outline"
                  onClick={handleTaskToggle}
                >
                  {isTaskOpen ? 'Cerrar' : 'Crear Tarea'}
                </Button>
              </CardHeader>
              <AnimatePresence>
                {isTaskOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
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

          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="border-none"
          >
            <Card className="w-full cursor-pointer border-none">
              <CardHeader>
                <Button
                  className="w-full text-lg font-bold"
                  variant="outline"
                  onClick={handleMessageToggle}
                >
                  {isMessageOpen ? 'Cerrar' : 'Enviar Mensaje'}
                </Button>
              </CardHeader>
              <AnimatePresence>
                {isMessageOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent className="space-y-4">
                      
                      <Input
                        type="email"
                        placeholder="Correo electrónico"
                        className="w-full"
                      />

                      
                      <Textarea
                        placeholder="Escribe tu mensaje aquí..."
                        className="w-full"
                      />

                      
                      <Button className="w-full">Enviar Mensaje</Button>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>

        <Card className="flex h-[765px] flex-col items-center gap-7 overflow-y-auto p-5">
          <h2>Recordatorios de Comision</h2>
          <Card className="w-[90%] p-5">
            <CardHeader>Tarea: Titulo de la tarea</CardHeader>
            <CardContent className="flex flex-col gap-5">
              <p>
                Descripcion de la tarea con toda la descripcion que puso el
                profesor para poder rellenar ahora
              </p>
              <p>Fecha de entrega: 21/5/2025</p>
            </CardContent>
            <Button className="mb-5 ml-5">Deleted</Button>
          </Card>
          
        </Card>
      </section>
    </Section>
  )
}