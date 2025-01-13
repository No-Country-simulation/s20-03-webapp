import { TestFetch } from '#/src/app/components/test-fetch'
import { TestForm } from '#/src/app/components/test-form'

export default function HomePage() {
  return (
    <>
      <h2 className="text-3xl font-bold underline">HomePage</h2>
      <TestForm />
      <TestFetch />
    </>
  )
}
