import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalize(string_: string) {
  return string_.charAt(0).toUpperCase() + string_.slice(1)
}
