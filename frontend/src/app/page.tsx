import { TestFetch } from "./components/TestFetch";
import { TestForm } from "./components/TestForm";

export default function HomePage() {
  return (
    <>
      <h2 className="text-3xl font-bold underline">HomePage</h2>
      <TestForm />
      <TestFetch />
    </>
  );
}
