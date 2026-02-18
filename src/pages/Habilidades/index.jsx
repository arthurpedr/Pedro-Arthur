import H from "../../components/h.jsx";
function Servicos() {

  const Items = [
    "./Html.svg",
    "./Css.svg",
    "./Js.svg",
    "./React.svg",
    "./Tailwind.svg",
    "./C.svg",
    "./Figma.svg",
    "./Html.svg",
    "./Css.svg",
    "./Js.svg",
    "./React.svg",
    "./Tailwind.svg",
    "./C.svg",
    "./Figma.svg",
  ];

  return (
    <section id="habilidades" 
    className="bg-black flex flex-col w-full md:min-h-screen mx-auto justify-center items-center text-white py-6">
      {/* Título */}
      <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Minhas Habilidades
          </h2>
          <p className="text-gray-400 px-2">
            Um panorama das tecnologias e ferramentas que domino.
          </p>
      </div>
      <div className="flex flex-col items-center justify-center w-7xl overflow-hidden">
          <H/>
      </div>
    </section>
  );
}
export default Servicos;
