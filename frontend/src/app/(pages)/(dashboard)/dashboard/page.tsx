'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { jwtDecode } from 'jwt-decode'

import { ParentDashboard } from '@/components/dashboards/parent-dashboard'
import { StudentDashboard } from '@/components/dashboards/student-dashboard'
import { TeacherDashboard } from '@/components/dashboards/teacher-dashboard'
import { AdminDashboard } from '#/src/app/components/dashboards/admin-dashboard'

type Role = 'schoolAdmin' | 'teacher' | 'student' | 'parent'

const dashboards = {
  teacher: <TeacherDashboard />,
  student: <StudentDashboard />,
  parent: <ParentDashboard />,
  schoolAdmin: <AdminDashboard/>,
}

export default function DashboardPage() {
  const [roleFromMyDatabase, setRoleFromMyDatabase] = useState<Role | null>(null)
  const router = useRouter()

  useEffect(() => {
    const getRoleFromToken = () => {
      const token = localStorage.getItem('token')
      if (!token) {
        router.push('/sign-in') // Si no hay token, redirigir al login
        return
      }

      try {
        const decoded: any = jwtDecode(token) // Decodificar token
        console.log('Token decodificado:', decoded.role) // Verifica en la consola la estructura real
        setRoleFromMyDatabase(decoded.role) // Extraer el rol del token
      } catch (error) {
        console.error('Error decodificando el token:', error)
        router.push('/sign-in') // Si el token es inválido, redirigir al login
      }
    }

    getRoleFromToken()
  }, [router])

  if (!roleFromMyDatabase) return <p>Cargando...</p>

  if (roleFromMyDatabase === 'schoolAdmin') {
    router.push('/dashboard/users')
    return null
  }

  return dashboards[roleFromMyDatabase] || <p>No tienes acceso.</p>
}