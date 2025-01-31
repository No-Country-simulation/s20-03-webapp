import { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { ParentDashboard } from '@/components/dashboards/parent-dashboard'
import { StudentDashboard } from '@/components/dashboards/student-dashboard'
import { TeacherDashboard } from '@/components/dashboards/teacher-dashboard'

export const metadata: Metadata = {
  title: 'Panel de control',
}

type Role = 'schoolAdmin' | 'teacher' | 'student' | 'parent'
let roleFromMyDatabase: Role = 'student'

const dashboards = {
  teacher: <TeacherDashboard />,
  student: <StudentDashboard />,
  parent: <ParentDashboard />,
}

export default function DashboardPage() {
  if (roleFromMyDatabase === 'schoolAdmin') redirect('/dashboard/users')

  const CurrentDashboard = dashboards[roleFromMyDatabase] || null
  return CurrentDashboard
}
