'use client'

import { Calculator, Users } from 'lucide-react'

import { Section } from '#/src/app/components/atoms/section'
import { UpdateGrades } from '#/src/app/components/molecules/card-grades'
import { CardTeacher } from '#/src/app/components/molecules/card-teacher'
import { ComboboxDemo } from '#/src/app/components/molecules/combobox'
import { NotificationsTeacher } from '#/src/app/components/molecules/notifications-teacher'

export default function TeacherPage() {
    return (
        <Section className="w-full bg-[#FCFCFC]">
            <aside className="mb-14 mt-12 flex w-[69%] items-center justify-between">
                <h1 className="text-4xl">Bienvenido/a, Amanda martinez</h1>
                <div className="mr-56">
                    <ComboboxDemo />
                </div>
            </aside>
            <section className="grid gap-10">
                <div className="grid grid-cols-3 gap-7">
                    <CardTeacher
                        title={'Total de estudiantes en la comisión'}
                        info={13}
                        icon={<Users className="h-4 w-4" />}
                    />
                    <CardTeacher
                        title={'Promedio de la comisión'}
                        info={8.6}
                        icon={<Calculator className="h-4 w-4" />}
                    />
                    <CardTeacher
                        title={'Tareas hechas'}
                        info={
                            <span>
                                {10} / {13}
                            </span>
                        }
                        icon={<Users className="h-4 w-4" />}
                    />
                </div>
                <div className="grid grid-cols-2">
                    <div className="grid gap-10">
                        <UpdateGrades />
                        <NotificationsTeacher />
                    </div>
                    
                    <h1>otro contenido </h1>
                </div>
            </section>
        </Section>
    )
}
