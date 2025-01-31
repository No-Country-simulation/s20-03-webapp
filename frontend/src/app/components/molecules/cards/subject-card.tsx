import {
  ChevronsUpDown,
  Contact,
  MapPin,
  MoveUpRight,
  NotebookPen,
} from 'lucide-react'
import Link from 'next/link'

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

interface SubjectCardProps {
  id: string
  title: string
  teacher: string
  location: string
  defaultOpen?: boolean
}

export const SubjectCard = ({
  id,
  title = 'Título',
  teacher = 'Augusta Ada Byron',
  location = 'Aula B1-59',
  defaultOpen = false,
}: SubjectCardProps) => {
  return (
    <Card className="h-fit">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">
          <Link
            href={`/dashboard/subject/${id}`}
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
        <Collapsible
          className="flex w-full flex-col gap-2"
          defaultOpen={defaultOpen}
        >
          <CollapsibleTrigger className="flex items-center gap-2 text-sm font-semibold">
            <ChevronsUpDown className="" size={16} />
            Resumen de calificaciones
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="flex gap-2">
              {Array.from({ length: 5 })
                .fill()
                .map((_, index) => index + 1)
                .map(index => (
                  <div
                    key={index}
                    className="grid h-16 w-full place-content-center rounded-lg border bg-card text-card-foreground shadow-sm"
                  >
                    {index}
                  </div>
                ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardFooter>
    </Card>
  )
}
