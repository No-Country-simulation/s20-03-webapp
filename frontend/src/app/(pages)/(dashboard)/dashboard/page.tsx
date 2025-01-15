import { Metadata } from 'next'

import { Section } from '@/components/atoms/section'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function DashboardPage() {
  return (
    <Section className="flex w-full flex-col">
      <h2>{`</DashboardPage>`}</h2>
      <div className="flex w-full flex-nowrap">
        <div className="w-full bg-green-500">green</div>
        <div className="w-full bg-yellow-500">yellow</div>
        <div className="w-full bg-gray-500">gray</div>
        <div className="w-full bg-black/50">black</div>
      </div>
    </Section>
  )
}
