import { Calendar, CircleDashed } from 'lucide-react'
import { Metadata } from 'next'

import { Section } from '@/components/atoms/section'
import { SummarySubjectsGrid } from '@/components/organisms/summary-subjects-grid'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import EVENTOS_JSON from '@/data/eventos.json'

export const metadata: Metadata = {
  title: 'Panel de control',
}

export default function DashboardPage() {
  return (
    <Section className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <SummarySubjectsGrid />

      <Card className="col-span-1">
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
    </Section>
  )
}
