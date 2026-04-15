import Header from "@/components/dashboard/Header";
import StatCard from "@/components/dashboard/StatCard";
import RecentSessions from "@/components/dashboard/RecentSessions";
import QuickPlay from "@/components/dashboard/QuickPlay";
import AuraLevel from "@/components/dashboard/AuraLevel";
import WeeklyActivity from "@/components/dashboard/WeeklyActivity";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 p-6 space-y-6">
        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Total de Sessões"
            value="24"
            subtitle="Desde o início"
            accentColor="cyan"
            trend={{ value: "12%", positive: true }}
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            }
          />
          <StatCard
            label="Score Máximo"
            value="15,800"
            subtitle="Aura Storm"
            accentColor="pink"
            trend={{ value: "8%", positive: true }}
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            }
          />
          <StatCard
            label="Precisão Média"
            value="82%"
            subtitle="Últimas 10 sessões"
            accentColor="purple"
            trend={{ value: "3%", positive: true }}
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            }
          />
          <StatCard
            label="Tempo de Jogo"
            value="1h 42m"
            subtitle="Esta semana"
            accentColor="amber"
            trend={{ value: "5%", positive: false }}
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            }
          />
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left side: Charts + Sessions table */}
          <div className="lg:col-span-2 space-y-6">
            <WeeklyActivity />
            <RecentSessions />
          </div>

          {/* Right side: Quick Play + Aura Level */}
          <div className="space-y-6">
            <QuickPlay />
            <AuraLevel />
          </div>
        </div>
      </main>

      {/* Footer status bar */}
      <footer className="px-6 py-3 border-t border-white/[0.04] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
          <span className="text-[9px] tracking-[0.2em] uppercase text-white/20">
            Sistema Online • Neural Grid v2.4
          </span>
        </div>
        <span className="text-[9px] tracking-[0.15em] uppercase text-white/15">
          © 2026 Beat Bound Aura
        </span>
      </footer>
    </div>
  );
}
