'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function Asistence() {
  return (
    <Card className="flex h-[618px] w-[690px] flex-col items-start justify-start bg-[#FCFCFC] shadow-md shadow-slate-300">
      <CardHeader className="mt-2">
        <CardTitle className="mb-3">Asistence</CardTitle>
      </CardHeader>
      <CardContent className="flex w-full flex-col">
        <div className="mb-5 w-[65%] bg-red-100">
          <Input placeholder="student name" />
        </div>
        <section className="rounded-lg border">
          <Table className="">
            <TableHeader className=" ">
              <TableRow className="">
                <TableHead className="ml-96">Nombre</TableHead>
                <TableHead className=" ">Apellido</TableHead>
                <TableHead className=" ">Asistencia</TableHead>
              </TableRow>
            </TableHeader>
            {/*Aca habria que poner un .map cuando necesitemos crear los alumnos y su asistencia de manera dinamica */}
            <TableBody className="">
              <TableRow className="border-0">
                <TableCell className="font-medium">Alan</TableCell>
                <TableCell className="">Klef</TableCell>
                <TableCell className="">{<Checkbox id="terms" />}</TableCell>
              </TableRow>
              <TableRow className="border-0">
                <TableCell className="font-medium">Alan</TableCell>
                <TableCell className="">Klef</TableCell>
                <TableCell className="">{<Checkbox id="terms" />}</TableCell>
              </TableRow>
              <TableRow className="border-0">
                <TableCell className="font-medium">Alan</TableCell>
                <TableCell className="">Klef</TableCell>
                <TableCell className="">{<Checkbox id="terms" />}</TableCell>
              </TableRow>
              <TableRow className="border-0">
                <TableCell className="font-medium">Alan</TableCell>
                <TableCell className="">Klef</TableCell>
                <TableCell className="">{<Checkbox id="terms" />}</TableCell>
              </TableRow>
              <TableRow className="border-0">
                <TableCell className="">Alan</TableCell>
                <TableCell className="">Klef</TableCell>
                <TableCell className="">{<Checkbox id="terms" />}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </CardContent>
      <CardFooter className="w-full">
        <section className="flex w-full items-center justify-between">
          <p>Student selected</p>
          <Button>Update</Button>
        </section>
      </CardFooter>
    </Card>
  )
}
