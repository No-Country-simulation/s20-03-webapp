import { Header } from '@/components/molecules/header'
import { AppSidebar } from '@/components/ui/app-sidebar'

interface LayoutProps {
  children: React.ReactNode
}


  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await axios.post(
        "https://p45c4l.ngcomputers.com.ar/auth/register ",
        {
          username,
          password,
        }
      );
      setStatus("success");
      console.log("Registro exitoso:", response.data);
    } catch (error) {
      setStatus("error");
      console.error("Error al registrar:", error.response || error.message);
    }
  };

export default function Layout({ children }: LayoutProps) {

  return (
    <>
      <AppSidebar />
      <div className="flex w-full flex-col">
        <Header>
          {`<Search/>`}
          <div className="ml-auto flex items-center gap-4">
            {`<ExampleComponente/>`}
          </div>
        </Header>
        <main className="flex-1">{children}</main>
      </div>
    </>
  )
}
