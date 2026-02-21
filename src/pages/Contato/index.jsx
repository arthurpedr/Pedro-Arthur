import { Instagram, Mail, Linkedin, Github } from "lucide-react";
import Animacao from "../../components/Animacao";

const contatos = [
  {
    nome: "Instagram",
    icon: Instagram,
    link: "https://www.instagram.com/pedro_marrtins/",
  },
  {
    nome: "E-mail",
    icon: Mail,
    link: "mailto:pedroporteiras@gmail.com",
  },
  {
    nome: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/pedro-arthur-b75892396/",
  },
  {
    nome: "GitHub",
    icon: Github,
    link: "https://github.com/arthurpedr",
  },
];

export default function Contato() {
  return (
    <section id="contato" className="bg-black/90 text-white py-28 px-6">
      <Animacao>
      <div className="max-w-7xl mx-auto text-center">

        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Vamos conversar?
        </h2>

        {/* Subtítulo */}
        <p className="text-gray-400 max-w-xl mx-auto mb-16">
          Estou sempre aberto a novos desafios e oportunidades de colaboração.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {contatos.map((contato, index) => {
            const Icon = contato.icon;

            return (
              <a
                key={index}
                href={contato.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-500/10 hover:-translate-y-1"
              >
                {/* Ícone */}
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 group-hover:bg-cyan-400">
                  <Icon className="text-white transition-colors" size={26} />
                </div>

                {/* Texto */}
                <span className="text-sm font-medium">
                  {contato.nome}
                </span>
              </a>
            );
          })}
        </div>

      </div>
      </Animacao>
    </section>
  );
}