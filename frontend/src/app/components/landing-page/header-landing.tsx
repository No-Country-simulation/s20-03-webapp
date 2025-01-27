'use client'

import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { HEADER_LINKS } from '@/lib/landing-constans'

const AuthButtons = () => {
  return (
    <>
      <Button variant="outline" size="sm" asChild>
        <Link href="/sign-in">Iniciar sesión</Link>
      </Button>
      <Button size="sm" asChild>
        <Link href="/sign-up">¡Registrarse!</Link>
      </Button>
    </>
  )
}

/**
 * A header component for the landing page.
 *
 * This component renders a header with the ClassRun logo on the left, and a
 * navigation menu and CTA buttons on the right. On smaller screens, the
 * navigation menu and CTA buttons are hidden, and a mobile menu button is
 * displayed instead. When the mobile menu button is clicked, the navigation
 * menu and CTA buttons are displayed below the header.
 */

export const HeaderLanding = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 border-b bg-background">
      <div className="flex h-16 w-full items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="ClassRun logo" width={120} height={120} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          {HEADER_LINKS.map(link => {
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-primary"
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center space-x-4 md:flex">
          <AuthButtons />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 right-0 top-16 border-b bg-background md:hidden">
            <nav className="container flex flex-col space-y-4 p-4">
              {HEADER_LINKS.map(link => {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium hover:text-primary"
                  >
                    {link.name}
                  </Link>
                )
              })}
              <div className="flex flex-col gap-2">
                <AuthButtons />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
