import Footer from "./layout/Footer"
import Header from "./layout/Header"
import Contato from "./pages/Contato/index"
import Home from "./pages/Inicio/index"
import Experiencia from "./pages/Experiencia/index"
import Projetos from "./pages/Projetos/index"
import Sobre from "./pages/Sobre/index"
import Habilidades from "./pages/Habilidades/index"

function App() {

  return (
    <main className='w-full h-screen flex flex-col'>
      <Header />
      <Home />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Experiencia />
      <Contato />
      <Footer />
    </main>
  )
}

export default App