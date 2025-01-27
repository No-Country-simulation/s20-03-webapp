import { Lightbulb } from 'lucide-react'
import React from 'react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { STUDY_TIPS } from '@/lib/constants'

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
