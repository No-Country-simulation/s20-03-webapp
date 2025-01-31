import { Metadata } from 'next'

import { StudentDashboard } from '@/components/dashboards/student-dashboard'
import { ParentDashboard } from '@/components/dashboards/parent-dashboard'
import { TeacherDashboard } from '@/components/dashboards/teacher-dashboard'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Panel de control',
}

type Role = 'schoolAdmin' | 'teacher' | 'student' | 'parent'
let roleFromMyDb: Role = 'teacher'

const dashboards = {
  teacher: <TeacherDashboard />,
  student: <StudentDashboard />,
  parent: <ParentDashboard />,
}

export default function DashboardPage() {
  if (roleFromMyDb === 'schoolAdmin') redirect('/dashboard/users')

  const CurrentDashboard = dashboards[roleFromMyDb] || null
  return CurrentDashboard
}
