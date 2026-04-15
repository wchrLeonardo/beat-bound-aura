"use client";

interface StatCardProps {
  label: string;
  value: string;
  subtitle?: string;
  icon: React.ReactNode;
  trend?: { value: string; positive: boolean };
  accentColor?: string;
}

export default function StatCard({
  label,
  value,
  subtitle,
  icon,
  trend,
  accentColor = "cyan",
}: StatCardProps) {
  const colorMap: Record<string, { border: string; glow: string; text: string; bg: string }> = {
    cyan: {
      border: "border-cyan-400/15",
      glow: "shadow-[0_0_20px_rgba(0,229,255,0.06)]",
      text: "text-cyan-400",
      bg: "bg-cyan-400/10",
    },
    pink: {
      border: "border-pink-400/15",
      glow: "shadow-[0_0_20px_rgba(236,72,153,0.06)]",
      text: "text-pink-400",
      bg: "bg-pink-400/10",
    },
    purple: {
      border: "border-purple-400/15",
      glow: "shadow-[0_0_20px_rgba(168,85,247,0.06)]",
      text: "text-purple-400",
      bg: "bg-purple-400/10",
    },
    amber: {
      border: "border-amber-400/15",
      glow: "shadow-[0_0_20px_rgba(251,191,36,0.06)]",
      text: "text-amber-400",
      bg: "bg-amber-400/10",
    },
  };

  const colors = colorMap[accentColor] || colorMap.cyan;

  return (
    <div
      className={`group relative rounded-xl p-5 border ${colors.border} ${colors.glow} transition-all duration-300 hover:scale-[1.02] hover:border-opacity-30 cursor-default`}
      style={{
        background: "rgba(10, 20, 40, 0.5)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Top row: icon + trend */}
      <div className="flex items-start justify-between mb-3">
        <div className={`w-9 h-9 rounded-lg ${colors.bg} flex items-center justify-center ${colors.text}`}>
          {icon}
        </div>
        {trend && (
          <span
            className={`text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full ${
              trend.positive
                ? "text-emerald-400 bg-emerald-400/10"
                : "text-red-400 bg-red-400/10"
            }`}
          >
            {trend.positive ? "↑" : "↓"} {trend.value}
          </span>
        )}
      </div>

      {/* Value */}
      <p className="text-2xl font-bold text-white/90 tracking-tight">{value}</p>

      {/* Label */}
      <p className="text-[10px] tracking-[0.15em] uppercase text-white/35 mt-1">{label}</p>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-[9px] text-white/20 mt-1 tracking-wider">{subtitle}</p>
      )}

      {/* Decorative corner */}
      <div className={`absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
        <div className={`absolute top-2 right-2 w-4 h-4 border-t border-r ${colors.border} opacity-60`} />
      </div>
    </div>
  );
}
