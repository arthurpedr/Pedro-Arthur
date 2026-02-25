import { ExternalLink, Github, X } from "lucide-react";
import Animacao from "../../components/Animacao";
import { useState } from "react";

const projetos = [
  {
    titulo: "Landing page Lisa",
    descricao:
      "Site para um laboratório de inovação, com design clean e foco em conversão.",
    imagem: "/Lisa.png",
    tags: ["React", "Tailwind"],
    demo: "https://lisa.ufersa.dev.br",
    codigo: "Privado",
  },
  {
    titulo: "Sistema de Estoque",
    descricao:
      "Dashboard de controle de estoque para pequenas empresas, com gráficos e relatórios personalizados.",
    imagem: "/sistemadeestoque.png",
    tags: ["React", "Tailwind"],
    demo: "https://sistemadeestoque.vercel.app",
    codigo: "Privado",
  },
  {
    titulo: "Landing page SportPro",
    descricao:
      "Site para uma empresa de materiais esportivos, com design moderno e foco em conversão.",
    imagem: "/SportPro.png",
    tags: ["React", "Tailwind"],
    demo: "https://sportpro.vercel.app",
    codigo: "Privado",
  },
  {
    titulo: "Site de Previsão do Tempo",
    descricao:
      "projeto de Previsão do Tempo que permite ao usuário consultar as condições climáticas atuais de sua cidade informando o CEP.",
    imagem: "/tempo.png",
    tags: ["Html", "Css", "Js"],
    demo: "https://arthurpedr.github.io/Previs-o-do-Tempo/",
    codigo: "https://github.com/arthurpedr/Previs-o-do-Tempo",
  },
];

export default function Projetos() {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <section id="projetos" className="bg-black/95 text-white py-24 px-6">
      <Animacao>
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho */}
        <div className="flex flex-col justify-center items-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-gray-400 text-center">
            Uma seleção de trabalhos recentes focados em performance e UX.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:px-6">
          {projetos.map((projeto, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-cyan-300/80 transition"
            >
              {/* Imagem */}
              <div className="relative overflow-hidden">
                <img
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  className="w-full h-65 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {projeto.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-cyan-600/10 text-cyan-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {projeto.titulo}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {projeto.descricao}
                </p>

                {/* Links */}
                <div className="flex gap-6 text-sm">
                  {/* Demo */}
                  <a
                    href={projeto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-cyan-400 transition"
                  >
                    Ver Projeto <ExternalLink size={16} />
                  </a>

                  {/* Código */}
                  {projeto.codigo === "Privado" ? (
                    <button
                      onClick={() => setModalAberto(true)}
                      className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition"
                    >
                      Código <Github size={16} />
                    </button>
                  ) : (
                    <a
                      href={projeto.codigo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-cyan-400 transition"
                    >
                      Código <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur">
          <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 max-w-sm w-full relative">
            <button
              onClick={() => setModalAberto(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={18} />
            </button>

            <h3 className="text-xl font-semibold mb-3">
              Código privado 🔒
            </h3>

            <p className="text-gray-400 text-sm">
              Este projeto possui código proprietário e não pode ser
              disponibilizado publicamente.
            </p>
          </div>
        </div>
      )}
      </Animacao>
    </section>
  );
}