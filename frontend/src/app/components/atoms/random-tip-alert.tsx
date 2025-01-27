import React from 'react'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { STUDY_TIPS } from '@/lib/constants'
import { Lightbulb } from 'lucide-react'

export const RandomTipAlert = () => {
  const randomTip = React.useMemo(() => {
    return STUDY_TIPS[Math.floor(Math.random() * STUDY_TIPS.length)]
  }, [])

  return (
    <Alert>
      <Lightbulb className="h-4 w-4" />
      <AlertTitle>¡Recuerda!</AlertTitle>
      <AlertDescription>{randomTip}</AlertDescription>
    </Alert>
  )
}
