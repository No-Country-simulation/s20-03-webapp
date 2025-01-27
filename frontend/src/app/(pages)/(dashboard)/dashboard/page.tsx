import { Metadata } from 'next'

import { Section } from '@/components/atoms/section'
import { PendingEvents } from '@/components/organisms/pending-events'
import { SummarySubjectsGrid } from '@/components/organisms/summary-subjects-grid'

export const metadata: Metadata = {
  title: 'Panel de control',
}

export default function DashboardPage() {
  return (
    <Section className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <SummarySubjectsGrid />
      <PendingEvents />
    </Section>
  )
}
