"use client";

export default function AuraLevel() {
  const level = 7;
  const xp = 2450;
  const xpNeeded = 3000;
  const percentage = Math.round((xp / xpNeeded) * 100);

  return (
    <div
      className="relative rounded-xl border border-white/[0.06] overflow-hidden"
      style={{
        background: "rgba(10, 20, 40, 0.5)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(0,229,255,0.15), transparent 60%)",
        }}
      />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-white/80 tracking-wide">Nível de Aura</h3>
          <span className="text-[9px] tracking-[0.2em] uppercase text-cyan-400/50">
            Rank: Iniciante
          </span>
        </div>

        {/* Level circle */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <svg width="72" height="72" viewBox="0 0 72 72">
              {/* Background circle */}
              <circle
                cx="36"
                cy="36"
                r="30"
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="4"
              />
              {/* Progress arc */}
              <circle
                cx="36"
                cy="36"
                r="30"
                fill="none"
                stroke="url(#auraGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={`${(percentage / 100) * 188.5} 188.5`}
                transform="rotate(-90 36 36)"
                className="transition-all duration-1000"
              />
              <defs>
                <linearGradient id="auraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00bcd4" />
                  <stop offset="100%" stopColor="#c026d3" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-xl font-bold text-cyan-300"
                style={{ textShadow: "0 0 12px rgba(0,229,255,0.5)" }}
              >
                {level}
              </span>
            </div>
          </div>

          <div className="flex-1">
            <p className="text-[11px] text-white/50 mb-1">Progresso</p>
            <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden mb-1.5">
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: `${percentage}%`,
                  background: "linear-gradient(90deg, #00bcd4, #c026d3)",
                }}
              />
            </div>
            <p className="text-[10px] text-white/25 font-mono">
              {xp.toLocaleString()} / {xpNeeded.toLocaleString()} XP
            </p>
          </div>
        </div>

        {/* Badges */}
        <div className="border-t border-white/[0.06] pt-3">
          <p className="text-[9px] tracking-[0.2em] uppercase text-white/25 mb-2">Conquistas Recentes</p>
          <div className="flex gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[14px] border border-cyan-400/20 bg-cyan-400/10"
              title="Primeira Sessão"
            >
              ⚡
            </div>
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[14px] border border-pink-400/20 bg-pink-400/10"
              title="Precisão 90%+"
            >
              🎯
            </div>
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[14px] border border-purple-400/20 bg-purple-400/10"
              title="5 Sessões"
            >
              🔥
            </div>
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] border border-white/[0.06] bg-white/[0.03] text-white/20"
            >
              +3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
