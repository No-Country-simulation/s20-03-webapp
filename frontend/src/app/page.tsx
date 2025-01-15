import { TestFetch } from '@/components/test-fetch'
import { TestForm } from '@/components/test-form'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <h2 className="text-3xl font-bold underline">HomePage</h2>
      <Button asChild>
        <Link href="https://ui.shadcn.com/docs/components/button">
          Click here! 🐐
        </Link>
      </Button>
      <TestForm />
      <TestFetch />
    </>
  )
}
