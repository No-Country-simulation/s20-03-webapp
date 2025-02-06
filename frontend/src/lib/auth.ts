// src/lib/auth.ts
'use client'

import { useRouter } from 'next/navigation'

export function useLogout() {
  const router = useRouter()

  const logout = () => {
    localStorage.removeItem('token') // 🔥 Borra el token del almacenamiento local
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;' // Borra la cookie (si la usaste)
    router.push('/sign-in') // 🔄 Redirige al login
  }

  return logout
}
