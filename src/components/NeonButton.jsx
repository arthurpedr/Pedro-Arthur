import { useState } from "react";

export default function NeonButton({
  children,
  onClick,
  type = "button",
  className = "",
  href,
}) {
  const [pulse, setPulse] = useState(false);

  const handleClick = (e) => {
    setPulse(true);
    onClick?.(e);

    setTimeout(() => setPulse(false), 500);
  };

  return (
    <a
      type={type}
      onClick={handleClick}
      href={href}
      className={`
        relative overflow-hidden
        px-6 py-3
        font-medium  
        text-white
        border-2 border-cyan-400
        rounded-lg
        bg-transparent
        transition-all duration-300
        hover:scale-105
        hover:shadow-[0_0_10px_#0ff,0_0_20px_#0ff,0_0_40px_#0ff,0_0_80px_#0ff]
        focus:outline-none

        before:absolute
        before:top-0
        before:-left-full
        before:w-full
        before:h-full
        before:bg-linear-to-r
        before:from-transparent
        before:via-cyan-400/40
        before:to-transparent
        before:transition-all
        before:duration-700
        before:z-[-1]

        hover:before:left-full

        ${className}
      `}
    >
      {children}

      {/* Pulse click */}
      {pulse && (
        <span
          className="
            absolute inset-0
            rounded-lg
            bg-cyan-400/20
            animate-[pulse_0.5s_ease-out]
            pointer-events-none
          "
        />
      )}
    </a>
  );
}