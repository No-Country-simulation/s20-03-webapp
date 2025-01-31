import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface UpdateGradesProps {
  names: string[]
}

export function UpdateGrades({ names }: UpdateGradesProps) {
  return (
    <Card className="col-span-1 bg-red-500 shadow-md shadow-slate-300">
      <CardHeader className="mt-2">
        <CardTitle className="">Subir Notas</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="mt-3">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un alumno" />
              </SelectTrigger>
              <SelectContent>
                {names.map((name, index) => (
                  <SelectItem key={index} value={name}>
                    {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="mt-3">
            <label htmlFor="number" className="">
              Note
            </label>
            <Input className="mt-1" />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          type="submit"
          className="w-[78px] border bg-[#FCFCFC] text-black hover:bg-red-400"
        >
          Delete
        </Button>
        <Button type="submit" className="w-[78px]">
          Update
        </Button>
      </CardFooter>
    </Card>
  )
}
