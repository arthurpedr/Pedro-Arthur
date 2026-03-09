export default function AnimatedButton({ onClick }) {
  return (
    <>
      <style>
        {`
        @keyframes shine {
          0% { left: -100px; }
          60% { left: 100%; }
          100% { left: 100%; }
        }
        `}
      </style>

      <a
        href="#contato"
        onClick={onClick}
        className="group relative hidden md:flex items-center justify-center gap-2
        px-5 py-2 text-[15px] font-bold text-white
        bg-cyan-400/90
        rounded-lg border-[3px] border-white/30
        shadow-[0px_10px_20px_rgba(0,0,0,0.2)]
        overflow-hidden cursor-pointer
        transition-all duration-300 hover:scale-105 hover:border-white/60"
      >
        Contato
        {/* Shine effect */}
        <span
          className="absolute top-0 -left-25 h-full w-25 opacity-60
          bg-[linear-gradient(120deg,rgba(255,255,255,0)_30%,rgba(255,255,255,0.8),rgba(255,255,255,0)_70%)]
          group-hover:animate-[shine_1.5s_ease-out_infinite]"
        />
      </a>
    </>
  );
}