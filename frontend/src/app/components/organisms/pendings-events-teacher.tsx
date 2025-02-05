import { Calendar, CircleDashed, NotepadText, User } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import EVENTOS_JSON from '@/data/eventosTeacher.json'
import { cn } from '@/lib/utils'

export const textTypes: Record<string, string> = {
  exam: 'Examen',
  assignment: 'Tarea',
} as const

interface PendingEventsProps {
  className?: string
}

export const PendingEventsTeacher = ({ className }: PendingEventsProps) => {
  return (
    <Card className={cn('h-fit w-full', className)}>
      <CardHeader>
        <CardTitle className="text-lg">Entregas de Alumnos</CardTitle>
      </CardHeader>
      <CardContent className="grid-rows-auto grid grid-cols-1 gap-4">
        {EVENTOS_JSON.map(event => (
          <Card key={event.id}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{event.title}</CardTitle>
            </CardHeader>
            <CardContent className="ml-1 flex flex-col">
              <span className="flex items-center gap-2 text-sm">
                <User size={16} className="h-4 min-w-4" />
                {event.studentName} - Comisión {event.commission}
              </span>
              <span className="flex items-center gap-2 text-sm">
                <CircleDashed size={16} className="h-4 min-w-4" />
                {event.subject}
              </span>
              <span className="flex items-center gap-2 text-sm">
                <NotepadText size={16} className="h-4 min-w-4" />
                {textTypes[event.type]}
              </span>
              <span className="flex items-center gap-2 text-sm">
                <Calendar size={16} className="h-4 min-w-4" />
                {event.date}
              </span>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}