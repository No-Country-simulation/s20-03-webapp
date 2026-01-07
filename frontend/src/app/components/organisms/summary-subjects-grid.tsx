'use client'

import { RandomTipAlert } from '@/components/atoms/random-tip-alert'
import { SubjectCard } from '@/components/molecules/cards/subject-card'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import SUBJECTS_JSON from '@/data/subjects.json'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

interface SummarySubjectsGridProps {
  className?: string
  randomTips?: boolean
}

export const SummarySubjectsGrid = ({
  className,
  randomTips = false,
}: SummarySubjectsGridProps) => {

  const [studentName, setStudentName] = useState('Alumno');

  useEffect( ()=> {
    const storedUser = localStorage.getItem('user');

    if (storedUser && storedUser !== "undefined") {
      try {
        const parsedUser = JSON.parse(storedUser);

        if (parsedUser.name) {
          setStudentName(parsedUser.name); 
        }
      } catch (error){
        console.error("Error al cargar el nombre del estudiante", error);
      }
    }
  }, [] );


  return (
    <Card className={cn('h-fit w-full shadow-xl', className)}>
      <CardHeader>
        <CardTitle className="text-lg">Bienvenido, {studentName}</CardTitle>
        <h1>Resumen de asignaturas</h1>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4 lg:grid-cols-2  ">
        {SUBJECTS_JSON.map(subject => (
          <SubjectCard
            key={subject.id}
            id={subject.id}
            title={subject.title}
            teacher={'Augusta Ada Byron'}
            location={subject.location}
          />
        ))}
      </CardContent>
      {randomTips && (
        <CardFooter>
          <RandomTipAlert />
        </CardFooter>
      )}
    </Card>
  )
}
