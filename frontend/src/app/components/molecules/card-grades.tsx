import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useState } from "react";

interface UpdateGradesProps {
  names: string[];
}

export function UpdateGrades({ names }: UpdateGradesProps) {
  const [value, setValue] = useState<string>("");
  const [selected, setSelected] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) {
      const number = Number(newValue);
      if ((number >= 1 && number <= 10) || newValue === "") {
        setValue(newValue);
      }
    }
  };

  return (
    <Card className="flex flex-col justify-center shadow-md p-5">
      <CardHeader>
        <CardTitle>Subir Notas</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="p-2 flex flex-col gap-5">
          <div>
            <label htmlFor="alumno">Alumno</label>
            <div className="relative w-full max-w-sm">
                <button
                  type="button"
                  className="w-full p-2 border rounded-md text-left"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {selected || "Selecciona un alumno"}
                </button>
                {isOpen && (
                  <ul className="absolute z-10 w-full mt-1 border rounded-md shadow-lg max-h-[200px] overflow-y-auto bg-slate-500">
                    {names.map((name, index) => (
                      <li
                        key={index}
                        className="p-2 cursor-pointer hover:bg-gray-600"
                        onClick={() => {
                          setSelected(name);
                          setIsOpen(false);
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
  );
}
