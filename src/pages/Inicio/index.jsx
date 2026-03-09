import NeonButton from "../../components/NeonButton";

export default function Home() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-black ">

  
  {/* Black Basic Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#000000",
      backgroundImage: `
        linear-gradient(to right, rgba(75, 85, 99, 0.4) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(75, 85, 99, 0.4) 1px, transparent 1px)
      `,
      backgroundSize: "40px 40px",
    }}
  />



      {/* Glow central */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute top-1/2 left-1/2
            w-64 h-64
            sm:w-96 sm:h-96
            md:w-lg md:h-128
            -translate-x-1/2 -translate-y-1/2
            rounded-full bg-cyan-600/40
            blur-[120px] sm:blur-[160px]
          "
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-5xl px-6 text-center">
        {/* Cargo */}
        <span className="text-xs sm:text-lg tracking-[0.25em] text-white uppercase">
          Desenvolvedor Front-End
        </span>

        {/* Nome */}
        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight">
          PEDRO ARTHUR
        </h1>

        {/* Descrição */}
        <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Transformando ideias em{" "}
          <span className="text-white font-medium">experiências digitais</span>.
          Focado em interfaces modernas, funcionais e centradas no usuário.
        </p>

        {/* Botões */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projetos"
            className="relative group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-400 text-white font-medium hover:bg-cyan-400/90 transition overflow-hidden"
          >
            Ver Projetos
            <span
              className="absolute top-0 -left-25 h-full w-25 opacity-60
          bg-[linear-gradient(120deg,rgba(255,255,255,0)_30%,rgba(255,255,255,0.8),rgba(255,255,255,0)_70%)]
          group-hover:animate-[shine_1.5s_ease-out_infinite]"
            />
          </a>

          <NeonButton href="#contato">Entrar em Contato</NeonButton>
        </div>
      </div>
    </section>
  );
}
