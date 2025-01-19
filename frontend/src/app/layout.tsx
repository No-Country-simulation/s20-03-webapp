import './globals.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { Providers } from '@/components/providers'
import { cn } from '@/lib/utils'

import { AppSidebar } from './components/ui/app-sidebar'

const poppinsSans = Poppins({
  variable: '--font-poppins-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | ClassRun',
    default: 'ClassRun',
  },
  authors: [
    { name: '(Redu) Eduardo R.', url: 'https://github.com/MrRedu' },
    { name: '(Azza) Azariel M..', url: 'https://github.com/AzzADesigns' },
    { name: '(Dimaro) Juan S.', url: 'https://github.com/JuanSincich' },
    { name: '(Claudio) Claudio M.', url: 'https://github.com/ClaudioMFCDev' },
    { name: '(Nelson) Gabriel H.', url: 'https://github.com/G43R1EL' },
    { name: '(San) Sandro B.', url: 'https://github.com/Sandrooo0' },
    { name: '(Gared) Gared L.', url: 'https://github.com/GaredLyon' },
  ],
  creator: 'Equipo s20-03-webapp - NoCountry',
  description: '',
  keywords: ['ClassRun', 'Aula virtual', ''],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={cn(`min-h-screen antialiased`, poppinsSans.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
