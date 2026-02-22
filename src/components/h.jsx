const frontendItems = [
  "/html.svg",
  "/css.svg",
  "/js.svg",
  "/react.svg",
  "/tailwind.svg",
];

const otherItems = [
  "/c.svg",
  "/figma.svg",
  "/github.svg",
  "/vercel.svg",
];

const Habilidades = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      
      {/* Container */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Linha divisória (desktop apenas) */}
        <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-linear-to-b from-transparent via-cyan-500/70 to-transparent" />

        {/* Card Front-end */}
        <div className="bg-zinc-900 border lg:w-150 border-zinc-800 rounded-2xl p-6 sm:p-8 hover:border-cyan-400 transition">
          <h3 className="text-xl font-semibold mb-6 text-center lg:text-left">
            Front-end
          </h3>

          <ul className="grid grid-cols-3 gap-4">
            {frontendItems.map((icon, index) => (
              <li
                key={index}
                className="
                  w-full
                  flex flex-col items-center justify-center
                  rounded-xl
                  bg-zinc-800 hover:bg-cyan-500/10
                  transition
                  p-4 sm:p-3
                "
              >
                <img
                  src={icon}
                  alt="Tecnologia"
                  className="w-17 h-17 object-contain"
                  loading="lazy"
                />

                <p className="mt-2 text-sm font-medium text-center">
                  {icon.split("/")[1].replace(".svg", "")}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Outras habilidades */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 hover:border-cyan-400 transition">
          <h3 className="text-xl font-semibold mb-6 text-center lg:text-left">
            Ferramentas/DevOps
          </h3>

          <ul className="grid grid-cols-3 gap-4">
            {otherItems.map((icon, index) => (
              <li
                key={index}
                className="
                  w-full
                  flex flex-col items-center justify-center
                  rounded-xl
                  bg-zinc-800 hover:bg-cyan-500/10
                  transition
                  p-4 sm:p-3
                "
              >
                <img
                  src={icon}
                  alt="Ferramenta"
                  className="w-17 h-17 object-contain"
                  loading="lazy"
                />

                <p className="mt-2 text-sm font-medium text-center">
                  {icon.split("/")[1].replace(".svg", "")}
                </p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Habilidades;