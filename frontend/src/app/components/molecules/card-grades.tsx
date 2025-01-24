
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card"
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"


export function UpdateGrades() {
    return (
                
        <Card className="w-[332px] h-[404px] bg-[#FCFCFC]  items-center shadow-md shadow-slate-300">
            <CardHeader className="mt-2">
                <CardTitle className="">Subir Notas</CardTitle>
            </CardHeader>
            <CardContent className=" ">
                <form>
                    <div className="mt-3">
                        <label htmlFor="text">Name</label>
                        <Input/>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="text">Subname</label>
                        <Input/>
                        
                    </div>
                    <div className="mt-3">
                        <label htmlFor="number">Note</label>
                        <Input/>
                        
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button
                    type="submit"
                    className="w-[78px] bg-[#FCFCFC] text-black border hover:bg-red-400"
                >
                    Delete
                </Button>
                <Button
                    type="submit"
                    className="w-[78px]"
                >
                    Update
                </Button>
            </CardFooter>
        </Card>


    )
}
