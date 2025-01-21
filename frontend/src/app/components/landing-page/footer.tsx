import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="w-full border-t px-4 py-4">
      <div className="flex h-16 w-full items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logotype.svg"
            alt="ClassRun logo"
            width={120}
            height={120}
          />
        </Link>
        <p className="text-sm">
          © {new Date().getFullYear()} ClassRun. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
