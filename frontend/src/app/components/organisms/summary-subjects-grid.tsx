import {
  ChevronsUpDown,
  Contact,
  Lightbulb,
  MapPin,
  MoveUpRight,
  NotebookPen,
} from 'lucide-react'
import Link from 'next/link'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import SUBJECTS_JSON from '@/data/subjects.json'

interface SubjectCardProps {
  id: string
  title: string
  teacher: string
  location: string
}

const SubjectCard = ({
  id,
  title = 'Título',
  teacher = 'Augusta Ada Byron',
  location = 'Aula B1-59',
}: SubjectCardProps) => {
  return (
    <Card className="h-fit">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">
          <Link
            href={`/dashboard/subjects/${id}`}
            className="group flex items-center justify-between gap-4 hover:underline"
          >
            <div className="flex items-center gap-2">
              <NotebookPen size={16} className="h-4 min-w-4" />
              {title}
            </div>
            <MoveUpRight
              className="h-4 min-w-4 self-start transition-transform group-hover:scale-125"
              size={16}
            />
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="ml-1 flex flex-col pb-2">
        <span className="flex items-center gap-2 text-sm">
          <Contact size={16} className="h-4 min-w-4" />
          {teacher}
        </span>
        <span className="flex items-center gap-2 text-sm">
          <MapPin size={16} className="h-4 min-w-4" />
          {location}
        </span>
      </CardContent>
      <CardFooter>
        <Collapsible className="flex w-full flex-col gap-2">
          <CollapsibleTrigger className="flex items-center gap-2 text-sm font-semibold">
            <ChevronsUpDown className="" size={16} />
            Resumen de calificaciones
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="flex gap-2">
              <div className="h-8 w-full bg-red-300">10</div>
              <div className="h-8 w-full bg-red-300">10</div>
              <div className="h-8 w-full bg-red-300">10</div>
              <div className="h-8 w-full bg-red-300">10</div>
              <div className="h-8 w-full bg-red-300">10</div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardFooter>
    </Card>
  )
}
export const SummarySubjectsGrid = () => {
  return (
    <Card className="h-fit sm:col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-lg">Resumen de asignaturas</CardTitle>
      </CardHeader>
      <CardContent className="grid-rows-auto grid grid-cols-1 gap-4 lg:grid-cols-2">
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
      <CardFooter>
        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertTitle>¡Recuerda!</AlertTitle>
          <AlertDescription>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, sunt!
          </AlertDescription>
        </Alert>
      </CardFooter>
    </Card>
  )
}
