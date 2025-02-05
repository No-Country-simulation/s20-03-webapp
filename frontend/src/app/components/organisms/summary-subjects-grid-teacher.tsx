import { RandomTipAlert } from '@/components/atoms/random-tip-alert'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button' // Botón de shadcn
import { Users, School, ArrowRight } from 'lucide-react' // Iconos de Lucide React
import SUBJECTS_JSON from '@/data/subjects.json'
import { cn } from '@/lib/utils'

interface SummarySubjectsGridTeacherProps {
  className?: string
  randomTips?: boolean
}

export const SummarySubjectsGridTeacher = ({
  className,
  randomTips = false,
}: SummarySubjectsGridTeacherProps) => {
  return (
    <Card className={cn('h-fit w-full', className)}>
      <CardHeader>
        <CardTitle className="text-lg">Resumen de asignaturas</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {SUBJECTS_JSON.map(subject => (
          <Card key={subject.id}>
            <CardHeader>
              <CardTitle className="text-base">{subject.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {/* Comisión con icono */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" /> {/* Icono de comisión */}
                <p>Comisión: <span>6 A</span></p>
              </div>

              {/* Aula con icono */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <School className="h-4 w-4" /> {/* Icono de aula */}
                <span>Aula: {subject.location}</span>
              </div>

              {/* Botón para redirigir a la página de comisión */}
              <Button className="mt-4 w-full">
                Ir a la comisión <ArrowRight className="ml-2 h-4 w-4" /> {/* Icono de flecha */}
              </Button>
            </CardContent>
          </Card>
        ))}
      </CardContent>
      {randomTips && (
        <CardFooter>
          <RandomTipAlert />
        </CardFooter>
      )}
    </Card>
  )
}