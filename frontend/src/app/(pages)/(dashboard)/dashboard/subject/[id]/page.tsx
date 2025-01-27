import EXAMS_JSON from '@/data/exams.json'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Section } from '@/components/atoms/section'
import { type Exam } from '@/types/exams'
import { SubjectCard } from '@/components/molecules/cards/subject-card'
import { PendingEvents } from '@/components/organisms/pending-events'
import { ExamCard } from '@/components/molecules/cards/exam-card'

async function getData(): Promise<Exam[]> {
  return JSON.parse(JSON.stringify(EXAMS_JSON))
}

export default async function SubjectPage({
  params,
}: {
  params: { id: string }
}) {
  const exams = await getData()

  return (
    <Section component="section" className="grid grid-cols-3 gap-4">
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle className="text-lg">Próximas evaluaciones</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {exams.map(exam => (
            <ExamCard
              // key={exam.id}
              key={exam.title}
              title={exam.title}
              description={exam.description}
              type={exam.type}
              date={exam.date}
              group={exam.group}
            />
          ))}
        </CardContent>
      </Card>

      <div className="col-span-1 flex flex-col gap-4">
        <SubjectCard
          id={params.id}
          title="Matemáticas avanzadas"
          teacher="Augusta Ada Byron"
          location="Aula B1-59"
          defaultOpen
        />

        <PendingEvents />
      </div>
    </Section>
  )
}
