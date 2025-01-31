import { Section } from '@/components/atoms/section'
import { PendingEvents } from '@/components/organisms/pending-events'
import { SummarySubjectsGrid } from '@/components/organisms/summary-subjects-grid'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const StudentDashboard = () => {
  return (
    <Section className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-col gap-4 sm:col-span-1 lg:col-span-2">
        <Card className="h-fit w-full">
          <CardHeader>
            <CardTitle className="text-lg">Horario</CardTitle>
          </CardHeader>
          <CardContent>student</CardContent>
        </Card>
        <SummarySubjectsGrid randomTips className="w-full" />
      </div>
      <PendingEvents className="col-span-1" />
    </Section>
  )
}
