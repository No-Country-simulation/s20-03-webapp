import { Label } from '@radix-ui/react-label'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '#/src/app/components/ui/card'

import { Input } from '../../ui/input'

export default function CreateTask() {
  const [file, setFile] = useState(null)
  const [dueDate, setDueDate] = useState('')

  const handleFileChange = event => {
    const selectedFile = event.target.files[0]
    setFile(selectedFile)
  }

  const handleDateChange = event => {
    setDueDate(event.target.value)
  }

  return (
    <Card className="p-4 pb-8">
      <form className="flex flex-col gap-2 px-5">
        {/* Input para el nombre de la tarea */}
        <div className="mt-3">
          <label htmlFor="taskName">Titulo de la Tarea</label>
          <Input id="taskName" className="mt-4" />
        </div>

        {/* Input para la descripción */}
        <div className="mt-3">
          <label htmlFor="description">Descripción</label>
          <Textarea id="description" className="mt-4" />
        </div>

        {/* Input para subir un archivo */}
        <div className="mt-3 space-y-5">
          <Label htmlFor="file">Subir Documento</Label>
          <Input
            id="file"
            type="file"
            onChange={handleFileChange}
            className="cursor-pointer"
          />
          {file && (
            <p className="text-sm text-gray-500">
              Archivo seleccionado: {file.name}
            </p>
          )}
        </div>

        <div className="mt-5">
          <label htmlFor="dueDate">Fecha de entrega</label>
          <Input
            id="dueDate"
            type="date"
            value={dueDate}
            onChange={handleDateChange}
            className="mt-4"
          />
        </div>

        <div className="">
          <Button className="mt-5" disabled={!file}>
            Subir
          </Button>
        </div>
      </form>
    </Card>
  )
}
