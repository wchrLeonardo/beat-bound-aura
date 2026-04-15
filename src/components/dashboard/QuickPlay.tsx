"use client";

export default function QuickPlay() {
  return (
    <div
      className="relative rounded-xl border border-white/[0.06] overflow-hidden group"
      style={{
        background: "rgba(10, 20, 40, 0.5)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(0,188,212,0.15), transparent 70%), radial-gradient(ellipse at 70% 50%, rgba(192,38,211,0.15), transparent 70%)",
        }}
      />

      <div className="relative z-10 p-6 flex flex-col items-center text-center">
        {/* Play icon */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105 cursor-pointer"
          style={{
            background: "linear-gradient(135deg, rgba(0,188,212,0.2) 0%, rgba(192,38,211,0.2) 100%)",
            border: "1px solid rgba(0,229,255,0.2)",
            boxShadow: "0 0 40px rgba(0,229,255,0.1), 0 0 80px rgba(192,38,211,0.08)",
          }}
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #00bcd4 0%, #c026d3 100%)",
              boxShadow: "0 0 30px rgba(0,188,212,0.3), 0 0 15px rgba(192,38,211,0.25)",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-1">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-lg font-bold tracking-[0.1em] uppercase text-white/90 mb-1"
          style={{ textShadow: "0 0 20px rgba(0,229,255,0.3)" }}
        >
          Iniciar Sessão
        </h3>
        <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-5">
          Sincronize sua aura com a batida
        </p>

        {/* Song selection */}
        <div className="w-full space-y-2 mb-5">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.04] border border-cyan-400/15 cursor-pointer hover:bg-cyan-400/[0.06] transition-all">
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(0,229,255,0.5)]" />
            <div className="flex-1 text-left">
              <p className="text-[11px] text-white/70 font-medium">NO BATIDÃO</p>
              <p className="text-[9px] text-white/25">3:28 • Dificuldade: Média</p>
            </div>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cyan-400/50">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06] cursor-pointer hover:bg-white/[0.04] transition-all">
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="flex-1 text-left">
              <p className="text-[11px] text-white/50 font-medium">Neon Pulse</p>
              <p className="text-[9px] text-white/20">4:02 • Dificuldade: Fácil</p>
            </div>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/20">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06] cursor-pointer hover:bg-white/[0.04] transition-all">
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="flex-1 text-left">
              <p className="text-[11px] text-white/50 font-medium">Cyber Groove</p>
              <p className="text-[9px] text-white/20">2:56 • Dificuldade: Difícil</p>
            </div>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/20">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>

        {/* Launch button */}
        <button
          className="w-full py-3 rounded-xl font-bold text-[11px] tracking-[0.2em] uppercase text-white transition-all hover:opacity-90 active:scale-[0.98] flex items-center justify-center gap-2"
          style={{
            background: "linear-gradient(90deg, #00bcd4 0%, #c026d3 100%)",
            boxShadow: "0 0 30px rgba(192, 38, 211, 0.25), 0 0 15px rgba(0, 188, 212, 0.15)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" y1="12" x2="3" y2="12" />
          </svg>
          Ativar câmera
        </button>
      </div>
    </div>
  );
}
