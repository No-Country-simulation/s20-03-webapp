'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { Button } from '#/src/app/components/ui/button'
import { Input } from '#/src/app/components/ui/input'
import { Label } from '#/src/app/components/ui/label'

import { columns, User } from './columns'
import { DataTable } from './data-table'

const initialData: User[] = [
  {
    type: 'profesor',
    materia: 'Matemáticas',
    dni: '12345678',
    celular: '123456789',
    nombreApellido: 'Juan Pérez',
    correo: 'juan.perez@example.com',
  },
  {
    type: 'alumno',
    dni: '87654321',
    celular: '987654321',
    nombreApellido: 'Ana Gómez',
    nombreTutor: 'Carlos Gómez',
    dniTutor: '23456789',
    telefonoTutor: '987654321',
    correoTutor: 'carlos.gomez@example.com',
  },
]

export default function Page() {
  const [data, setData] = useState<User[]>(initialData)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [newUser, setNewUser] = useState<User>({
    type: 'profesor',
    materia: '',
    dni: '',
    celular: '',
    nombreApellido: '',
    correo: '',
    nombreTutor: '',
    dniTutor: '',
    telefonoTutor: '',
    correoTutor: '',
  })
  const [comisionNombre, setComisionNombre] = useState('')
  const [editingIndex, setEditingIndex] = useState<number | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewUser((previous) => ({ ...previous, [name]: value }))
  }

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value as 'profesor' | 'alumno'
    setNewUser((previous) => ({ ...previous, type, materia: type === 'profesor' ? previous.materia : '' }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setData((previous) => [...previous, newUser])
    setNewUser({
      type: 'profesor',
      materia: '',
      dni: '',
      celular: '',
      nombreApellido: '',
      correo: '',
      nombreTutor: '',
      dniTutor: '',
      telefonoTutor: '',
      correoTutor: '',
    })
    setIsFormOpen(false)
  }

  const handleDelete = (index: number) => {
    const updatedData = data.filter((_, i) => i !== index)
    setData(updatedData)
  }

  const handleSave = (index: number, updatedUser: User) => {
    const updatedData = data.map((user, i) =>
      i === index ? updatedUser : user
    )
    setData(updatedData)
    setEditingIndex(null)
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">
        {comisionNombre ? `Comisión: ${comisionNombre}` : 'Seleccione una comisión'}
      </h1>

      <div className="flex gap-4 mb-5">
        <Input
          placeholder="Nombre de la comisión"
          value={comisionNombre}
          onChange={(e) => setComisionNombre(e.target.value)}
          className="w-1/3"
        />
        <Button onClick={() => setIsFormOpen(!isFormOpen)}>
          Agregar Usuario
        </Button>
      </div>

      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-5 rounded-lg border p-5"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label>Tipo de Usuario</Label>
                <select
                  value={newUser.type}
                  onChange={handleTypeChange}
                  className="w-full rounded-md border p-2"
                >
                  <option value="profesor">Profesor</option>
                  <option value="alumno">Alumno</option>
                </select>
              </div>
              <div>
                <Label>Nombre y Apellido</Label>
                <Input
                  name="nombreApellido"
                  value={newUser.nombreApellido}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {newUser.type === 'profesor' && (
                <div>
                  <Label>Materia</Label>
                  <Input
                    name="materia"
                    value={newUser.materia}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}
              <div>
                <Label>DNI</Label>
                <Input
                  name="dni"
                  value={newUser.dni}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label>Celular</Label>
                <Input
                  name="celular"
                  value={newUser.celular}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {newUser.type === 'profesor' && (
                <div>
                  <Label>Correo</Label>
                  <Input
                    name="correo"
                    value={newUser.correo}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}
              {newUser.type === 'alumno' && (
                <>
                  <div>
                    <Label>Nombre Tutor</Label>
                    <Input
                      name="nombreTutor"
                      value={newUser.nombreTutor}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label>DNI Tutor</Label>
                    <Input
                      name="dniTutor"
                      value={newUser.dniTutor}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label>Teléfono Tutor</Label>
                    <Input
                      name="telefonoTutor"
                      value={newUser.telefonoTutor}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label>Correo Tutor</Label>
                    <Input
                      name="correoTutor"
                      value={newUser.correoTutor}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </>
              )}
              <Button type="submit">Agregar</Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        key={data.length}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <DataTable
          columns={columns({ handleSave, handleDelete, editingIndex, setEditingIndex })}
          data={data}
        />
      </motion.div>
    </div>
  )
}