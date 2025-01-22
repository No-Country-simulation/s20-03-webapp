'use client'

import { ChevronDown, Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

/**
 * The `Header` component renders the main navigation header of the landing-page.
 * It consists of a logo, desktop navigation links, call-to-action buttons,
 * and a mobile menu button. The mobile menu button toggles the visibility
 * of a dropdown menu for smaller screens. The desktop navigation includes
 * a dropdown menu with additional options.
 */

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="border-b">
      <div className="flex h-16 w-full items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logotype.svg"
            alt="ClassRun logo"
            width={80}
            height={80}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Link One
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-primary">
              Link Four <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Option 1</DropdownMenuItem>
              <DropdownMenuItem>Option 2</DropdownMenuItem>
              <DropdownMenuItem>Option 3</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center space-x-4 md:flex">
          <Button variant="ghost" size="sm">
            Log in
          </Button>
          <Button size="sm">Get started</Button>
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
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Link One
              </Link>
              <div className="flex flex-col space-y-2">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
                <Button size="sm">Get started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
