import H from "../../components/h.jsx";
import Animacao from "../../components/Animacao";
function Habilidades() {

  return (
    <section id="habilidades" 
    className="bg-black flex flex-col w-full md:min-h-screen mx-auto justify-center items-center text-white py-6">
      
      {/* Título */}
      <div className="max-w-7xl mx-auto text-center">
        <Animacao>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Minhas Habilidades
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto px-2">
            Um panorama das tecnologias e ferramentas que domino.
          </p>
          </Animacao>
      </div>
      <div className="flex flex-col items-center justify-center w-7xl">
          <H/>
      </div>
      
    </section>
  );
}
export default Habilidades;
