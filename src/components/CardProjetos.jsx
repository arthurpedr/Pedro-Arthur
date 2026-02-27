import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({
  titulo,
  descricao,
  imagem,
  tags,
  demo,
  codigo,
  onPrivateCode,
}) {
  return (
    <div
      className="
        group relative overflow-hidden
        rounded-2xl
        border border-white/10
        bg-white/5
        transition
        hover:border-cyan-300/80
        hover:shadow-[0_0_18px_rgba(34,211,238,0.35)]

        before:absolute
        before:inset-0
        before:-left-full
        before:w-full
        before:h-full
        before:bg-linear-to-r
        before:from-transparent
        before:via-cyan-400/20
        before:to-transparent
        before:transition-all
        before:duration-700
        before:pointer-events-none

        hover:before:left-full
      "
    >
      {/* Imagem */}
      <div className="relative overflow-hidden">
        <img
          src={imagem}
          alt={titulo}
          className="w-full h-65 object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Conteúdo */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-cyan-600/10 text-cyan-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-2">{titulo}</h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {descricao}
        </p>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            Ver Projeto <ExternalLink size={16} />
          </a>

          {codigo === "Privado" ? (
            <button
              onClick={onPrivateCode}
              className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition"
            >
              Código <Github size={16} />
            </button>
          ) : (
            <a
              href={codigo}
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
  );
}