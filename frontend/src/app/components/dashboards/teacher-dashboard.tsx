import { useEffect, useState } from 'react'
import { Section } from '@/components/atoms/section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PendingEventsTeacher } from '../organisms/pendings-events-teacher'
import { SummarySubjectsGridTeacher } from '../organisms/summary-subjects-grid-teacher'
import { Clock, BookOpen, AlertCircle} from 'lucide-react'
import axios from 'axios'

export const TeacherDashboard = () => {
    const [subjectsTeacher, setSubjectsTeacher] = useState<any[]>([])
    const [homeworks, setHomeworks] = useState<any[]>([])
    const [notifications, setNotifications] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchTeacherData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/private/teacher/teacherData');
                setSubjectsTeacher(response.data.subjects);
                setHomeworks(response.data.subjects.flatMap((subject) => subject.homeworks));
                setNotifications(response.data.subjects.flatMap((subject) => subject.notifications));
                setLoading(false);
    
                localStorage.setItem('teacherData', JSON.stringify(response.data));
            } catch (error: any) {
                setError('Hubo un error al cargar los datos.');
                setLoading(false);
            }
        };
    
        const savedData = localStorage.getItem('teacherData');
        if (savedData) {
            const data = JSON.parse(savedData);
            setSubjectsTeacher(data.subjects);
            setHomeworks(data.subjects.flatMap((subject) => subject.homeworks));
            setNotifications(data.subjects.flatMap((subject) => subject.notifications));
            setLoading(false);
        } else {
            fetchTeacherData();
        }
    }, []);
    

    return (
        <Section className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-20">
            <div className="flex flex-col gap-4 sm:col-span-1 lg:col-span-2 ">
              {/* Tarjeta dividida en dos columnas */}
                <Card className="h-[500px] w-full shadow-xl">
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
                            ) : subjectsTeacher.length === 0 ? (
                                <p>No tienes materias asignadas.</p>
                            ) : (
                                subjectsTeacher.map((subject, index) => (
                                    <div key={index} className="rounded-lg border p-4 shadow-[inset_2px_2px_7px_rgba(0,0,0,0.5)]">
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
                            ) : homeworks.length === 0 ? (
                                <p>No tienes tareas publicadas.</p>
                            ) : (
                                homeworks.map((homework, index) => (
                                    <div key={index} className="rounded-lg border p-4 shadow-[inset_2px_2px_7px_rgba(0,0,0,0.5)]">
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
                    
                {/* Pasar las notificaciones al componente SummarySubjectsGridTeacher */}
                <SummarySubjectsGridTeacher className="w-full" />
            </div>
            {/* Componente de eventos pendientes */}
            <PendingEventsTeacher  notifications={notifications} className="col-span-1" />
        </Section>
    )
}