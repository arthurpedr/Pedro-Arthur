import { MapPin, BadgeCheck } from "lucide-react";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="bg-black/95 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Imagem */}
        <div className="relative mx-auto">
          <div className="absolute inset-0 rounded-2xl bg-cyan-400/60 md:bg-cyan-400/80 blur-2xl"></div>
          <img
            src="/pedro-02.png"
            alt="Foto de perfil"
            className="relative z-10 w-full max-w-md rounded-2xl object-cover"
          />
        </div>

        {/* Conteúdo */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sobre
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            Minha paixão é resolver problemas complexos através da união
            entre design refinado e código limpo. Acredito que a tecnologia
            deve ser invisível, proporcionando uma experiência fluida e
            intuitiva.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            Como desenvolvedor front-end, busco constantemente o equilíbrio
            entre estética e performance. Cada linha de código que escrevo
            é pensada na escalabilidade do projeto e na satisfação de quem
            o utiliza.
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
    </section>
  );
}