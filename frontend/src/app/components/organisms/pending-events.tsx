import { Calendar, CircleDashed } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import EVENTOS_JSON from '@/data/eventos.json'

export const PendingEvents = () => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-lg">Eventos pendientes</CardTitle>
      </CardHeader>
      <CardContent className="grid-rows-auto grid grid-cols-1 gap-4">
        {EVENTOS_JSON.map(event => (
          <Card key={event.id}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{event.title}</CardTitle>
            </CardHeader>
            <CardContent className="ml-1 flex flex-col">
              {/* {asignatura.profesor_responsable_id} */}
              <span className="flex items-center gap-2 text-sm">
                <CircleDashed size={16} className="h-4 min-w-4" />
                {event.course}
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
