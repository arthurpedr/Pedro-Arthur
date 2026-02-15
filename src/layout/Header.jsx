import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = ["Sobre", "Habilidades", "Projetos", "Processo"];

  return (
    <header className="w-full fixed top-0 z-50 bg-linear-to-b from-black/90 to-black/70 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="/inicio">
          <div className="flex items-center gap-2 text-white font-bold text-xl">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-cyan-400/20 text-cyan-400">
              {"</>"}
            </span>
            <span>Dev Pedro</span>
          </div>
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-10 text-md font-semibold text-gray-300 transition">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-cyan-400 transition"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Botão Desktop */}
        <a
          href="#contato"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-cyan-400 text-white text-sm font-medium hover:bg-cyan-500 transition"
        >
          Contato
        </a>

        {/* Botão Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur border-t border-white/5">
          <nav className="flex flex-col items-center gap-6 py-6 text-gray-300">
            {links.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-lg hover:text-white transition"
              >
                {link}
              </a>
            ))}

            <a
              href="#contato"
              className="mt-4 px-6 py-2 rounded-full bg-cyan-400 text-white font-medium hover:bg-cyan-500 transition"
            >
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}