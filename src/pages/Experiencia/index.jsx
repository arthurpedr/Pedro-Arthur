import { Briefcase, Building2, HeartHandshake } from "lucide-react";

const experiencias = [
  {
    tipo: "Atual",
    cargo: "Desenvolvedor Front-End",
    empresa: "Chronos - Web Soluções",
    periodo: "2025 - Presente",
    descricao:
      "Atuo no desenvolvimento de interfaces modernas e performáticas, colaborando com designers e back-end para entregar soluções escaláveis e centradas no usuário.",
    icon: Briefcase,
  },
  {
    tipo: "Profissional",
    cargo: "Desenvolvedor Front-End",
    empresa: "Startup Ufersa Dev",
    periodo: "2025 - Presente",
    descricao:
      "Desenvolvimento de aplicações web responsivas , focando em boas práticas, acessibilidade e performance.",
    icon: Building2,
  },
  {
    tipo: "Voluntário",
    cargo: "Desenvolvedor Front-End",
    empresa: "Projeto Carcará",
    periodo: "2024 - 2025",
    descricao:
      "Criação e manutenção de sites institucionais para projetos sociais, ajudando a fortalecer a presença digital e o impacto das iniciativas.",
    icon: HeartHandshake,
  },
];

export default function Experiencia() {
  return (
    <section id="experiencia" className="bg-black text-white py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Cabeçalho */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiência
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Minha trajetória profissional, experiênciasque contribuíram para minha evolução como desenvolvedor.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 pl-10 space-y-14">

          {experiencias.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="relative group">

                {/* Linha + ponto */}
                <span className="absolute -left-5.5 top-2 w-4 h-4 rounded-full bg-cyan-400" />

                {/* Card */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 group-hover:border-cyan-500 group-hover:bg-cyan-500/10">

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500 transition">
                      <Icon
                        size={20}
                        className="text-cyan-400 group-hover:text-white transition"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {item.cargo}
                      </h3>
                      <span className="text-sm text-gray-400">
                        {item.empresa}
                      </span>
                    </div>
                  </div>

                  {/* Infos */}
                  <span className="inline-block mb-4 text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400">
                    {item.tipo} • {item.periodo}
                  </span>

                  {/* Descrição */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.descricao}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}