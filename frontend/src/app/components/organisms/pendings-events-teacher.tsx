import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export const textTypes: Record<string, string> = {
    exam: 'Examen',
    assignment: 'Tarea',
} as const

interface Notification {
    title: string
    message: string
    studentName: string
    subjectTitle: string
}

interface PendingEventsProps {
    className?: string
    notifications: Notification[]
}

export const PendingEventsTeacher = ({ className, notifications}: PendingEventsProps) => {
    return (
        <Card className={cn('h-fit w-full scroll-container shadow-xl', className)}>
            <CardHeader>
                <CardTitle className="text-lg">Mensajes Enviados</CardTitle>
            </CardHeader>
            <CardContent className="grid-rows-auto grid grid-cols-1 gap-4">
                {notifications.map((notification, index) => (
                    <Card key={index} className='shadow-[inset_2px_2px_7px_rgba(0,0,0,0.5)]'>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base">{notification.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="ml-1 flex flex-col">
                            <span className="flex items-center gap-2 text-sm">{notification.message}</span>
                        </CardContent>
                    </Card>
                ))}
            </CardContent>
        </Card>
    )
}
