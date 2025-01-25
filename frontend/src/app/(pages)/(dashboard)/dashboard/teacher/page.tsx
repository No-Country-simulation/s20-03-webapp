"use client"

import { UpdateGrades } from "#/src/app/components/molecules/card-grades";
import { CardTeacher } from "#/src/app/components/molecules/card-teacher"
import { ComboboxDemo } from "#/src/app/components/molecules/combobox";
import { NotificationsTeacher } from "#/src/app/components/molecules/notifications-teacher";
import { Users, Calculator } from 'lucide-react';
import {Asistence} from '#/src/app/components/molecules/asistence'


export default function TeacherPage(){
    return (
        <div className="bg-[#bg-[#FCFCFC]] w-full">
            <aside className="flex justify-between w-[69%] items-center mt-12 mb-14">
                <h1 className="text-4xl">Bienvenido/a, Amanda martinez</h1>
                <div className="mr-56">
                    <ComboboxDemo/>
                </div>
            </aside>
            <section className="flex flex-col">
                {/*3 cards total / promedio / tareas */}
                <div className="flex gap-7">
                    <CardTeacher title={"Total de estudiantes en la comision"} info={13} icon={<Users className=" w-4 h-4"/>}/>
                    <CardTeacher title={"Promedio de la comision"} info={8.6} icon={<Calculator className=" w-4 h-4"/>}/>
                    <CardTeacher title={"Tareas hechas"} info={<span>{10} / {13}</span> } icon={<Users className=" w-4 h-4"/>}/>
                </div>
                {/*segunda seccion con cards subir notas, notifications y asistencia */}
                <div className="flex gap-7">
                    <div className="flex flex-col mt-10 gap-10">
                        <div>
                            <UpdateGrades/>
                        </div>
                        <div>
                            <NotificationsTeacher/>
                        </div>
                    </div>
                
                    <div className="mt-10">
                        <Asistence/>
                    </div>
                </div>
            </section>
        </div>
        
    )
}
