import { MapPin, BadgeCheck } from "lucide-react";
import Animacao from "../../components/Animacao";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="bg-black/95 text-white py-16 md:py-24 px-6"
    >
      <Animacao>
      <div className="max-w-4xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Imagem */}
        <div className="relative mx-auto lg:mx-0">
          <div className="absolute inset-0 rounded-full bg-cyan-400/50 md:bg-cyan-400/80 blur-xl"></div>
          <img
            src="/pedro-02.png"
            alt="Foto de perfil"
            className="relative z-10 w-full h-auto max-w-sm md:max-w-md rounded-full object-cover"
          />
        </div>

        {/* Conteúdo */}
        <div className="max-w-xl mx-auto lg:mx-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left">
            Sobre
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            Estudante de Ciência e Tecnologia na Universidade UFERSA.
            Com foco em desenvolvimento front-end, busco criar interfaces modernas,
            responsivas e centradas no usuário.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            Como desenvolvedor front-end, busco aprimorar constantemente minhas
            habilidades técnicas e criativas para criar experiências digitais.
            Estou sempre aberto a novos desafios e oportunidades de colaboração.
          </p>

          {/* Infos */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="text-cyan-400" size={18} />
              Brasil
            </div>

            <div className="flex items-center gap-2 text-gray-300">
              <BadgeCheck className="text-cyan-400" size={18} />
              Disponível para projetos
            </div>
          </div>
        </div>

      </div>
      </Animacao>
    </section>
  );
}