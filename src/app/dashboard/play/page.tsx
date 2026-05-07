import Image from "next/image";
import Link from "next/link";

// Componente auxiliar para os badges de dificuldade
const DifficultyBadge = ({ level, label, bpm }: { level: "HARD" | "NORMAL" | "CRAZY", label?: string, bpm: string }) => {
  const colors = {
    HARD: "bg-fuchsia-500",
    NORMAL: "bg-cyan-500",
    CRAZY: "bg-rose-500",
  };

  return (
    <div className="flex items-center gap-3 text-xs font-bold tracking-widest mb-2">
      <span className={`${colors[level]} text-white px-2 py-0.5 rounded-sm uppercase`}>
        {label || level}
      </span>
      <span className="text-white/80">{bpm}</span>
    </div>
  );
};

export default function PlayPage() {
  return (
    <div className="flex flex-col min-h-screen px-6 md:px-8 pb-12">
      {/* Top Bar */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-8">
        <div className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-fuchsia-500">
          Neural Grid Active
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-1/3">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/40">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search tracks, artists, or genres..."
            className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
          />
        </div>

        {/* Sort / Filter */}
        <div className="flex items-center gap-3 self-end md:self-auto">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/50">
            Sort by
          </span>
          <button className="w-10 h-10 md:w-12 md:h-12 bg-[#0A1122] border border-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
              <line x1="10" y1="18" x2="14" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-col gap-8 mt-4">
        
        {/* Featured Track */}
        <Link href="/dashboard/play/nightmare" className="group relative w-full h-[450px] rounded-3xl overflow-hidden border border-white/10 hover:border-fuchsia-500/50 transition-all duration-500">
          <Image 
            src="/music1.png" 
            alt="Nightmare Cover" 
            fill 
            sizes="100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B1A] via-[#0A0B1A]/40 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <DifficultyBadge level="HARD" bpm="BPM 175" />
              <div>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-2 group-hover:text-fuchsia-400 transition-colors drop-shadow-lg">
                  NIGHTMARE
                </h2>
                <p className="text-sm md:text-lg font-bold tracking-widest text-cyan-400 uppercase drop-shadow-md">
                  Avenged Sevenfold
                </p>
              </div>
            </div>
            
            <div className="text-left md:text-right mt-4 md:mt-0">
              <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white/50 uppercase mb-2">
                Personal Best
              </p>
              <p className="text-3xl md:text-5xl font-black text-white drop-shadow-lg">
                1,245,000
              </p>
            </div>
          </div>
        </Link>

        {/* Grid Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <Link href="/dashboard/play/cyber-chase" className="group relative h-[380px] rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-500">
            <Image 
              src="/music2.png" 
              alt="Cyber Chase" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/60 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 space-y-2">
              <DifficultyBadge level="HARD" bpm="180 BPM" />
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-1 drop-shadow-md">CYBER CHASE</h3>
                <p className="text-sm md:text-base font-bold tracking-widest text-cyan-400 uppercase drop-shadow-md">NEON_PROTOCOL</p>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/dashboard/play/silk-static" className="group relative h-[380px] rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-500">
            <Image 
              src="/music3.png" 
              alt="Silk & Static" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020D12] via-[#020D12]/60 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 space-y-2">
              <DifficultyBadge level="NORMAL" bpm="125 BPM" />
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-1 drop-shadow-md">SILK & STATIC</h3>
                <p className="text-sm md:text-base font-bold tracking-widest text-cyan-400 uppercase drop-shadow-md">VOX CELL</p>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/dashboard/play/glitch-core" className="group relative h-[380px] rounded-3xl overflow-hidden border border-white/10 hover:border-rose-500/50 transition-all duration-500">
            <Image 
              src="/music4.png" 
              alt="Glitch Core" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A050A] via-[#0A050A]/60 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 space-y-2">
              <DifficultyBadge level="CRAZY" bpm="210 BPM" />
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-1 drop-shadow-md">GLITCH CORE</h3>
                <p className="text-sm md:text-base font-bold tracking-widest text-cyan-400 uppercase drop-shadow-md">SYSTEM_FAILURE</p>
              </div>
            </div>
          </Link>

          {/* Card 4 - Gradient bg (Void Drift) */}
          <Link href="/dashboard/play/void-drift" className="group relative h-[380px] rounded-3xl overflow-hidden border border-white/10 hover:border-fuchsia-500/50 transition-all duration-500 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#020617]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
            <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')"}}></div>
            
            <div className="absolute bottom-0 left-0 p-8 space-y-2 z-10">
              <DifficultyBadge level="HARD" bpm="140 BPM" />
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-1 drop-shadow-md">VOID DRIFT</h3>
                <p className="text-sm md:text-base font-bold tracking-widest text-cyan-400 uppercase drop-shadow-md">AURA_WAVE</p>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
