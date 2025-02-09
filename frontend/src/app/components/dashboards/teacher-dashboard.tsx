import { useEffect, useState } from 'react'
import { Section } from '@/components/atoms/section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PendingEventsTeacher } from '../organisms/pendings-events-teacher'
import { SummarySubjectsGridTeacher } from '../organisms/summary-subjects-grid-teacher'
import { Clock, BookOpen, AlertCircle, MapPin } from 'lucide-react' // Iconos para horarios, materias, recordatorios y salón
import axios from 'axios'

// Componente de Dashboard para el profesor
export const TeacherDashboard = () => {
  const [subjectsTeacher, setSubjectsTeacher] = useState<any[]>([])
  const [homeworks, setHomeworks] = useState<any[]>([]) // Inicializa como arreglo vacío
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

// Obtener datos de las materias, tareas y notificaciones
  const token = localStorage.getItem('token');
  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/private/teacher/teacherData')
        setSubjectsTeacher(response.data.subjects)
        setHomeworks(response.data.homeworks || []) // Asegúrate de que homeworks sea un arreglo
        setLoading(false)
      } catch (error: any) {
        setError('Hubo un error al cargar los datos.')
        setLoading(false)
      }
    }
    fetchTeacherData()
  }, [])

  return (
    <Section className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-20">
      <div className="flex flex-col gap-4 sm:col-span-1 lg:col-span-2">
        {/* Tarjeta dividida en dos columnas */}
        <Card className="h-[500px] w-full">
          <CardHeader>
            <CardTitle className="text-lg">Materias y Tareas Publicadas</CardTitle>
          </CardHeader>
          <CardContent className="grid h-[calc(100%-56px)] grid-cols-1 gap-4 overflow-hidden md:grid-cols-2">
            {/* Columna 1: Materias a cargo */}
            <div className="space-y-4 overflow-y-auto pr-2">
              <h3 className="text-sm font-medium text-muted-foreground">Materias a cargo</h3>

              {loading ? (
                <p>Cargando...</p>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : Array.isArray(subjectsTeacher) && subjectsTeacher.length === 0 ? (
                <p>No tienes materias asignadas.</p>
              ) : (
                subjectsTeacher.map((subject, index) => (
                  <div key={index} className="rounded-lg border p-4">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span>{subject.title}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{subject.description}</span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Columna 2: Tareas publicadas */}
            <div className="space-y-4 overflow-y-auto pr-2">
              <h3 className="text-sm font-medium text-muted-foreground">Tareas publicadas</h3>

              {loading ? (
                <p>Cargando...</p>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : Array.isArray(homeworks) && homeworks.length === 0 ? (
                <p>No tienes tareas publicadas.</p>
              ) : (
                //Checkear bien la iteracion, objeto completo es subjectsTeacher..
                homeworks.map((homework, index) => (
                  <div key={index} className="rounded-lg border p-4">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <AlertCircle className="h-4 w-4 text-muted-foreground" />
                      <span>{homework.title}</span>
                    </div>
                    <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <p>{homework.description}</p>
                      <p>Fecha de vencimiento: {new Date(homework.endDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))
              )}
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