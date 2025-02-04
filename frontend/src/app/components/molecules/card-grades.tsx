import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

interface UpdateGradesProps {
  names: string[]
}

export function UpdateGrades({ names }: UpdateGradesProps) {
  const [value, setValue] = useState<string>('')
  const [selected, setSelected] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    if (/^\d*$/.test(newValue)) {
      const number = Number(newValue)
      if ((number >= 1 && number <= 10) || newValue === '') {
        setValue(newValue)
      }
    }
  }

  return (
    <Card className="flex flex-col justify-center p-5 shadow-md">
      <CardHeader>
        <CardTitle>Subir Notas</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-5 p-2">
          <div>
            <label htmlFor="alumno">Alumno</label>
            <div className="relative w-full max-w-sm">
              <button
                type="button"
                className="w-full rounded-md border p-2 text-left"
                onClick={() => setIsOpen(!isOpen)}
              >
                {selected || 'Selecciona un alumno'}
              </button>
              {isOpen && (
                <ul className="absolute z-10 mt-1 max-h-[200px] w-full overflow-y-auto rounded-md border bg-slate-500 shadow-lg">
                  {names.map((name, index) => (
                    <li
                      key={index}
                      className="cursor-pointer p-2 hover:bg-gray-600"
                      onClick={() => {
                        setSelected(name)
                        setIsOpen(false)
                      }}
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="number">Note</label>
            <Input
              className="mt-5"
              type="text"
              value={value}
              onChange={handleChange}
              placeholder="Ingresa solo números"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="tarea">Título de la Tarea / Examen</label>
            <Input className="mt-5" />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button type="submit" className="w-[78px]">
          Update
        </Button>
      </CardFooter>
    </Card>
  )
}
