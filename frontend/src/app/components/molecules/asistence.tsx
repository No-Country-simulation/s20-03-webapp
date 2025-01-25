"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"



export function Asistence () {
    return (
        <Card className="w-[690px] h-[618px] bg-[#FCFCFC] flex flex-col justify-start items-start shadow-md shadow-slate-300">
            <CardHeader className="mt-2">
                <CardTitle className="mb-3">Asistence</CardTitle>
            </CardHeader>
            <CardContent className=" w-full flex flex-col ">
                <div  className="w-[65%] bg-red-100 mb-5">
                    <Input placeholder="student name"/>
                </div>
                <section className="border rounded-lg">
                    <Table className="" >
                        <TableHeader className=" ">
                            <TableRow className="">
                                <TableHead className=" ">Nombre</TableHead>
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
                            <TableRow className="border-0 ">
                                <TableCell className="font-medium">Alan</TableCell>
                                <TableCell className="">Klef</TableCell>
                                <TableCell className="">{<Checkbox id="terms" />}</TableCell>
                            </TableRow>
                            <TableRow className="border-0 ">
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
                <section className="flex w-full justify-between items-center ">
                    <p>Student selected</p>
                    <Button>Update</Button>
                </section>
            </CardFooter>
        </Card>
    )
}
