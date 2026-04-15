"use client";

const sessions = [
  {
    id: 1,
    song: "NO BATIDÃO",
    date: "Hoje, 18:42",
    duration: "3:28",
    score: 9420,
    accuracy: 87,
    status: "completed",
  },
  {
    id: 2,
    song: "Neon Pulse",
    date: "Hoje, 16:15",
    duration: "4:02",
    score: 7850,
    accuracy: 72,
    status: "completed",
  },
  {
    id: 3,
    song: "Cyber Groove",
    date: "Ontem, 21:30",
    duration: "2:56",
    score: 11200,
    accuracy: 94,
    status: "completed",
  },
  {
    id: 4,
    song: "Digital Rain",
    date: "Ontem, 19:08",
    duration: "3:44",
    score: 6300,
    accuracy: 63,
    status: "abandoned",
  },
  {
    id: 5,
    song: "Aura Storm",
    date: "12 Abr, 14:22",
    duration: "5:10",
    score: 15800,
    accuracy: 96,
    status: "completed",
  },
];

function getAccuracyColor(accuracy: number) {
  if (accuracy >= 90) return "text-emerald-400";
  if (accuracy >= 70) return "text-cyan-400";
  if (accuracy >= 50) return "text-amber-400";
  return "text-red-400";
}

function getAccuracyBarColor(accuracy: number) {
  if (accuracy >= 90) return "bg-emerald-400";
  if (accuracy >= 70) return "bg-cyan-400";
  if (accuracy >= 50) return "bg-amber-400";
  return "bg-red-400";
}

export default function RecentSessions() {
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
          <h3 className="text-sm font-semibold text-white/80 tracking-wide">Sessões Recentes</h3>
          <p className="text-[9px] tracking-[0.2em] uppercase text-white/25 mt-0.5">
            Últimas 5 sessões de treino
          </p>
        </div>
        <button className="text-[10px] tracking-[0.12em] uppercase text-cyan-400/60 hover:text-cyan-400 transition-colors">
          Ver todas →
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/[0.04]">
              <th className="text-left px-5 py-3 text-[9px] tracking-[0.2em] uppercase text-white/25 font-medium">
                Música
              </th>
              <th className="text-left px-3 py-3 text-[9px] tracking-[0.2em] uppercase text-white/25 font-medium hidden sm:table-cell">
                Data
              </th>
              <th className="text-left px-3 py-3 text-[9px] tracking-[0.2em] uppercase text-white/25 font-medium hidden md:table-cell">
                Duração
              </th>
              <th className="text-right px-3 py-3 text-[9px] tracking-[0.2em] uppercase text-white/25 font-medium">
                Score
              </th>
              <th className="text-right px-5 py-3 text-[9px] tracking-[0.2em] uppercase text-white/25 font-medium">
                Precisão
              </th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr
                key={session.id}
                className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors cursor-pointer group"
              >
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-white/[0.06] flex items-center justify-center">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-cyan-400/70"
                      >
                        <path d="M9 18V5l12-2v13" />
                        <circle cx="6" cy="18" r="3" />
                        <circle cx="18" cy="16" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[12px] text-white/70 font-medium group-hover:text-white/90 transition-colors">
                        {session.song}
                      </p>
                      {session.status === "abandoned" && (
                        <span className="text-[8px] tracking-[0.15em] uppercase text-red-400/60 bg-red-400/10 px-1.5 py-0.5 rounded-full">
                          Abandonada
                        </span>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-3 py-3.5 text-[11px] text-white/35 hidden sm:table-cell">
                  {session.date}
                </td>
                <td className="px-3 py-3.5 text-[11px] text-white/35 font-mono hidden md:table-cell">
                  {session.duration}
                </td>
                <td className="px-3 py-3.5 text-right">
                  <span className="text-[12px] font-bold text-white/60 font-mono">
                    {session.score.toLocaleString()}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <div className="w-16 h-1 rounded-full bg-white/[0.06] overflow-hidden hidden lg:block">
                      <div
                        className={`h-full rounded-full ${getAccuracyBarColor(session.accuracy)} transition-all`}
                        style={{ width: `${session.accuracy}%` }}
                      />
                    </div>
                    <span className={`text-[12px] font-bold font-mono ${getAccuracyColor(session.accuracy)}`}>
                      {session.accuracy}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
