import { ExternalLink, Github } from "lucide-react";

const projetos = [
  {
    titulo: "Site Lisa",
    descricao:
      "Landing page para um laboratório de inovação, com design clean e foco em conversão.",
    imagem: "/Lisa.png",
    tags: ["React", "Tailwind"],
    demo: "#",
    codigo: "#",
  },
  {
    titulo: "Sistema de Estoque",
    descricao:
      "Dashboard de controle de estoque para pequenas empresas, com gráficos e relatórios personalizados.",
    imagem: "/sistemadeestoque.png",
    tags: ["React", "Tailwind"],
    demo: "#",
    codigo: "#",
  },
];

export default function Projetos() {
  return (
    <section id="projetos" className="bg-black/95 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Projetos em Destaque
          </h2>
          <p className="text-gray-400 max-w-xl">
            Uma seleção de trabalhos recentes focados em performance e UX.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
                  <a
                    href={projeto.demo}
                    className="flex items-center gap-2 hover:text-cyan-400 transition"
                  >
                    Ver Projeto <ExternalLink size={16} />
                  </a>

                  <a
                    href={projeto.codigo}
                    className="flex items-center gap-2 hover:text-cyan-400 transition"
                  >
                    Código <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}