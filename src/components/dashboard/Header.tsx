"use client";

import { useState } from "react";

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
      {/* Left: Greeting */}
      <div>
        <h1
          className="text-xl font-bold tracking-wide text-cyan-200"
          style={{ textShadow: "0 0 16px rgba(0,229,255,0.3)" }}
        >
          Painel de Controle
        </h1>
        <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mt-0.5">
          Bem-vindo de volta, Piloto
        </p>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.06] hover:border-white/10 transition-colors">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-white/30"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Buscar..."
            className="bg-transparent text-[11px] text-white/50 placeholder:text-white/20 outline-none w-32 tracking-wider"
          />
        </div>

        {/* Notification bell */}
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="relative p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] hover:border-cyan-400/20 hover:bg-cyan-400/[0.04] transition-all text-white/40 hover:text-cyan-400/70"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 01-3.46 0" />
          </svg>
          {/* Dot indicator */}
          <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_6px_rgba(236,72,153,0.6)]" />
        </button>

        {/* Quick play button */}
        <button
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-[11px] tracking-[0.1em] uppercase font-bold text-white transition-all hover:opacity-90 active:scale-[0.97]"
          style={{
            background: "linear-gradient(135deg, #00bcd4 0%, #c026d3 100%)",
            boxShadow: "0 0 20px rgba(192, 38, 211, 0.2), 0 0 10px rgba(0, 188, 212, 0.15)",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          Jogar
        </button>
      </div>
    </header>
  );
}
