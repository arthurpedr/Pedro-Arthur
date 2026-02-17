export default function Home() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-black"
    >
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
        <span className="text-xs sm:text-sm tracking-[0.25em] text-cyan-400 uppercase">
          Desenvolvedor Front-End
        </span>

        {/* Nome */}
        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight">
          PEDRO ARTHUR
        </h1>

        {/* Descrição */}
        <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Transformando ideias em{" "}
          <span className="text-white font-medium">
            experiências digitais
          </span>.
          Focado em interfaces modernas, funcionais e centradas no usuário.
        </p>

        {/* Botões */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

          <a
            href="#projetos"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-white font-medium hover:bg-cyan-500 transition"
          >
            Ver Projetos
            <span className="group-hover:translate-y-1 transition">↓</span>
          </a>

          <a
            href="#contato"
            className="inline-flex items-center px-6 py-3 rounded-xl border border-white/20 text-white hover:border-cyan-400 transition"
          >
            Entrar em Contato
          </a>

        </div>
      </div>
    </section>
  );
}