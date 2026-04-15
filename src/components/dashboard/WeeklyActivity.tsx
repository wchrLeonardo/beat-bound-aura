"use client";

const data = [
  { day: "Seg", sessions: 2, score: 4200 },
  { day: "Ter", sessions: 3, score: 7800 },
  { day: "Qua", sessions: 1, score: 2100 },
  { day: "Qui", sessions: 4, score: 11200 },
  { day: "Sex", sessions: 2, score: 5600 },
  { day: "Sáb", sessions: 5, score: 15800 },
  { day: "Dom", sessions: 3, score: 9420 },
];

export default function WeeklyActivity() {
  const maxScore = Math.max(...data.map((d) => d.score));

  return (
    <div
      className="rounded-xl border border-white/[0.06] overflow-hidden"
      style={{
        background: "rgba(10, 20, 40, 0.5)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
        <div>
          <h3 className="text-sm font-semibold text-white/80 tracking-wide">Atividade Semanal</h3>
          <p className="text-[9px] tracking-[0.2em] uppercase text-white/25 mt-0.5">
            Score acumulado por dia
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-[9px] text-white/30">Score</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="px-5 py-4">
        <div className="flex items-end gap-2 h-32">
          {data.map((item) => {
            const heightPercent = (item.score / maxScore) * 100;
            return (
              <div key={item.day} className="flex-1 flex flex-col items-center gap-2 group">
                <div className="relative w-full flex justify-center">
                  {/* Tooltip */}
                  <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="bg-[#0d1f35] border border-cyan-400/20 rounded-md px-2 py-1 text-[9px] text-cyan-400 font-mono whitespace-nowrap">
                      {item.score.toLocaleString()} pts
                    </div>
                  </div>
                  {/* Bar */}
                  <div
                    className="w-full max-w-[28px] rounded-t-md transition-all duration-500 cursor-pointer group-hover:opacity-100"
                    style={{
                      height: `${heightPercent}%`,
                      minHeight: "4px",
                      background: `linear-gradient(180deg, #00bcd4 0%, rgba(192,38,211,0.6) 100%)`,
                      opacity: 0.7,
                      boxShadow: "0 0 8px rgba(0,188,212,0.15)",
                    }}
                  />
                </div>
                <span className="text-[9px] text-white/25 uppercase tracking-wider">{item.day}</span>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/[0.04]">
          <div>
            <p className="text-[10px] text-white/25 uppercase tracking-wider">Total da Semana</p>
            <p className="text-lg font-bold text-white/80 font-mono">
              {data.reduce((sum, d) => sum + d.score, 0).toLocaleString()}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-white/25 uppercase tracking-wider">Sessões</p>
            <p className="text-lg font-bold text-cyan-400 font-mono">
              {data.reduce((sum, d) => sum + d.sessions, 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
