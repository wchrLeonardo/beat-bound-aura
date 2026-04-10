"use client";

import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#060d1a]">

      {/* Background gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top-left teal glow */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#0d4a5a] opacity-40 blur-[120px]" />
        {/* Bottom-right purple glow */}
        <div className="absolute -bottom-32 -right-16 w-[600px] h-[600px] rounded-full bg-[#3a1060] opacity-50 blur-[140px]" />
        {/* Center subtle blue */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#0a1f3a] opacity-30 blur-[100px]" />
      </div>

      {/* Corner brackets */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-cyan-500/40" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-cyan-500/40" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-cyan-500/40" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-cyan-500/40" />

      {/* Logo + Title */}
      <div className="relative z-10 flex flex-col items-center mb-8">
        {/* Logo icon */}
        <div className="w-12 h-12 rounded-xl bg-[#0d1f35] border border-cyan-400/30 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(0,255,255,0.15)]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="10" width="2" height="4" rx="1" fill="#00e5ff" />
            <rect x="7" y="7" width="2" height="10" rx="1" fill="#00e5ff" />
            <rect x="11" y="5" width="2" height="14" rx="1" fill="#00e5ff" />
            <rect x="15" y="8" width="2" height="8" rx="1" fill="#00e5ff" />
            <rect x="19" y="11" width="2" height="3" rx="1" fill="#00e5ff" />
          </svg>
        </div>

        {/* App name */}
        <h1
          className="text-2xl font-bold tracking-[0.3em] uppercase text-cyan-300"
          style={{ textShadow: "0 0 20px rgba(0,229,255,0.6), 0 0 40px rgba(0,229,255,0.3)" }}
        >
          Beat Bound Aura
        </h1>
        <p className="text-[10px] tracking-[0.25em] uppercase text-cyan-400/60 mt-1">
          Accessing Neural Net Protocol
        </p>
      </div>

      {/* Glass card */}
      <div className="relative z-10 w-full max-w-sm mx-4">
        <div
          className="rounded-2xl p-7 border border-white/10"
          style={{
            background: "rgba(10, 20, 40, 0.55)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {/* Pilot Identity */}
          <div className="mb-5">
            <label className="block text-[10px] tracking-[0.2em] uppercase text-cyan-300/70 mb-2">
              Pilot Identity
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400/50">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
              </span>
              <input
                type="email"
                placeholder="AURA_PILOT@NEURAL.NET"
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-xs text-cyan-100/60 placeholder:text-cyan-100/30 tracking-wider outline-none focus:border-cyan-400/40 focus:bg-white/8 transition-all"
              />
            </div>
          </div>

          {/* Neural Key */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="text-[10px] tracking-[0.2em] uppercase text-cyan-300/70">
                Neural Key
              </label>
              <button className="text-[10px] tracking-[0.15em] uppercase text-pink-400/80 hover:text-pink-300 transition-colors">
                Lost Access?
              </button>
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400/50">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="············"
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-10 py-3 text-sm text-cyan-100/60 placeholder:text-cyan-100/40 outline-none focus:border-cyan-400/40 focus:bg-white/8 transition-all"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-400/40 hover:text-cyan-400/70 transition-colors"
              >
                {showPassword ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Enter button */}
          <button
            className="w-full py-3.5 rounded-xl font-bold text-sm tracking-[0.2em] uppercase text-white transition-all hover:opacity-90 active:scale-[0.98] flex items-center justify-center gap-2"
            style={{
              background: "linear-gradient(90deg, #00bcd4 0%, #c026d3 100%)",
              boxShadow: "0 0 30px rgba(192, 38, 211, 0.3), 0 0 15px rgba(0, 188, 212, 0.2)",
            }}
          >
            Entrar
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 2l1.5 1.5L13 8H2v3h11l-4.5 4.5L10 17l7-7-7-7z" />
              <path d="M16 3h2a2 2 0 012 2v14a2 2 0 01-2 2h-2v-2h2V5h-2V3z" />
            </svg>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-[9px] tracking-[0.2em] uppercase text-white/30">Sync Protocol</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Social buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-[11px] tracking-[0.1em] uppercase text-white/60 hover:text-white/80">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-[11px] tracking-[0.1em] uppercase text-white/60 hover:text-white/80">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white/60">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </button>
          </div>
        </div>
      </div>

      {/* Register link */}
      <p className="relative z-10 mt-6 text-[10px] tracking-[0.15em] uppercase text-white/30">
        Don&apos;t have a pilot id?{" "}
        <a href="#" className="text-cyan-400/80 hover:text-cyan-300 transition-colors">
          Establish Link
        </a>
      </p>

      {/* Bottom status bar */}
      <div className="absolute bottom-5 left-0 right-0 px-6 flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-px bg-cyan-400/40" />
          <span className="text-[9px] tracking-[0.2em] uppercase text-cyan-400/40">
            Security Level: Maximum
          </span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-[9px] tracking-[0.15em] uppercase text-white/20">
            Grid Location: Sector 7-8
          </span>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-pink-500/80" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    </div>
  );
}
