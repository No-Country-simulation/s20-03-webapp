import { Calendar, NotepadText, User, Users } from 'lucide-react'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { capitalize } from '@/lib/utils'

interface ExamCardProps {
  title: string
  description: string
  type: string
  date: Date
  group: number
}

export const ExamCard = ({
  title,
  description,
  type,
  date,
  group,
}: ExamCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="">
        <p className="">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="flex items-center gap-2 text-sm">
          <Calendar size={16} className="h-4 min-w-4" />
          {new Date(date).toLocaleDateString()}
        </span>
        <span className="flex items-center gap-2 text-sm">
          <NotepadText size={16} className="h-4 min-w-4" />
          {capitalize(type)}
        </span>
        {group === 1 ? (
          <span className="flex items-center gap-2 text-sm">
            <User className="h-4 w-4" />
            Individual
          </span>
        ) : (
          <span className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4" />
            Grupal ({group})
          </span>
        )}
      </CardFooter>
    </Card>
  )
}
