import { Section } from '@/components/atoms/section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PendingEventsTeacher } from '../organisms/pendings-events-teacher'
import { SummarySubjectsGridTeacher } from '../organisms/summary-subjects-grid-teacher'
import { Clock, BookOpen, AlertCircle, MapPin } from 'lucide-react' // Iconos para horarios, materias, recordatorios y salón

// Datos de ejemplo para las materias y horarios del profesor
const TEACHER_SCHEDULE = [
  {
    id: 1,
    subject: 'Matemáticas',
    schedule: 'Lunes y Miércoles, 10:00 - 12:00',
  },
  {
    id: 2,
    subject: 'Física',
    schedule: 'Martes y Jueves, 14:00 - 16:00',
  },
  {
    id: 3,
    subject: 'Química',
    schedule: 'Viernes, 09:00 - 11:00',
  },
  {
    id: 4,
    subject: 'Química',
    schedule: 'Viernes, 09:00 - 11:00',
  },
  {
    id: 5,
    subject: 'Química',
    schedule: 'Viernes, 09:00 - 11:00',
  },
]

// Datos de ejemplo para los próximos exámenes
const UPCOMING_EXAMS = [
  {
    id: 1,
    subject: 'Matemáticas',
    commission: '6 A',
    date: '2023-10-15',
    time: '09:00',
    room: 'Aula 101',
  },
  {
    id: 2,
    subject: 'Física',
    commission: '5 B',
    date: '2023-10-17',
    time: '11:00',
    room: 'Aula 202',
  },
  {
    id: 3,
    subject: 'Historia',
    commission: '4 C',
    date: '2023-10-19',
    time: '10:00',
    room: 'Aula 303',
  },
  {
    id: 4,
    subject: 'Biología',
    commission: '7 D',
    date: '2023-10-21',
    time: '08:00',
    room: 'Aula 404',
  },
  {
    id: 5,
    subject: 'Biología',
    commission: '7 D',
    date: '2023-10-21',
    time: '08:00',
    room: 'Aula 404',
  },
  {
    id: 6,
    subject: 'Biología',
    commission: '7 D',
    date: '2023-10-21',
    time: '08:00',
    room: 'Aula 404',
  },
]

export const TeacherDashboard = () => {
  return (
    <Section className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-20">
      <div className="flex flex-col gap-4 sm:col-span-1 lg:col-span-2">
        {/* Tarjeta dividida en dos columnas */}
        <Card className="h-[500px] w-full"> {/* Alto aumentado */}
          <CardHeader>
            <CardTitle className="text-lg">Materias y Próximos Exámenes</CardTitle>
          </CardHeader>
          <CardContent className="grid h-[calc(100%-56px)] grid-cols-1 gap-4 overflow-hidden md:grid-cols-2">
            {/* Columna 1: Materias y Horarios */}
            <div className="space-y-4 overflow-y-auto pr-2">
              <h3 className="text-sm font-medium text-muted-foreground">
                Materias y Horarios
              </h3>
              {TEACHER_SCHEDULE.map(item => (
                <div key={item.id} className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <BookOpen className="h-4 w-4 text-muted-foreground" /> {/* Icono de materia */}
                    <span>{item.subject}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-muted-foreground" /> {/* Icono de horario */}
                    <span>{item.schedule}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Columna 2: Próximos Exámenes */}
            <div className="space-y-4 overflow-y-auto pr-2">
              <h3 className="text-sm font-medium text-muted-foreground">
                Próximos Exámenes
              </h3>
              {UPCOMING_EXAMS.map(exam => (
                <div key={exam.id} className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <AlertCircle className="h-4 w-4 text-muted-foreground" /> {/* Icono de recordatorio */}
                    <span>{exam.subject}</span>
                  </div>
                  <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <p>Comisión: {exam.commission}</p>
                    <p>Fecha: {exam.date}</p>
                    <p>Hora: {exam.time}</p>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" /> {/* Icono de salón */}
                      <span>Salón: {exam.room}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Componente de resumen de asignaturas */}
        <SummarySubjectsGridTeacher className="w-full" />
      </div>

      {/* Componente de eventos pendientes */}
      <PendingEventsTeacher className="col-span-1" />
    </Section>
  )
}