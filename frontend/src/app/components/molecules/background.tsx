'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface BackgroundProps {
  children: React.ReactNode
  justifyEnd?: boolean
}

const generateRandomPosition = () => ({
  x: Math.random() * window.innerWidth - window.innerWidth / 4,
  y: Math.random() * window.innerHeight - window.innerHeight / 4,
})

const ICON_COUNT = 10

export const Background = ({ children, justifyEnd }: BackgroundProps) => {
  return (
    <section className="relative z-10 flex h-screen w-full items-center justify-start overflow-hidden bg-[#4169E1]">
      {Array.from({ length: ICON_COUNT }).map((_, index) => {
        const initialPosition = generateRandomPosition()
        return (
          <motion.div
            key={index}
            initial={initialPosition}
            animate={{
              x: [initialPosition.x, -initialPosition.x],
              y: [initialPosition.y, -initialPosition.y],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            }}
            className="absolute"
          >
            <div className="h-20 w-20 rounded-full bg-gradient-to-b via-gray-200 to-gray-400 shadow-2xl shadow-black" />
          </motion.div>
        )
      })}

      <section
        className={cn(`flex h-full w-full`, justifyEnd && 'justify-end')}
      >
        {children}
      </section>
    </section>
  )
}
