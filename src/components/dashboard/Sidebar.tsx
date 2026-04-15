"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    active: true,
  },
  {
    label: "Jogar",
    href: "/dashboard/play",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
  {
    label: "Sessões",
    href: "/dashboard/sessions",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "Rankings",
    href: "/dashboard/rankings",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 9H4.5a2.5 2.5 0 010-5C7 4 7 9 7 9" />
        <path d="M18 9h1.5a2.5 2.5 0 000-5C17 4 17 9 17 9" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" />
        <path d="M18 2H6v7a6 6 0 0012 0V2Z" />
      </svg>
    ),
  },
  {
    label: "Configurações",
    href: "/dashboard/settings",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed top-0 left-0 h-full z-50 flex flex-col transition-all duration-300 border-r border-white/[0.06] ${
        collapsed ? "w-[72px]" : "w-[240px]"
      }`}
      style={{
        background: "rgba(6, 13, 26, 0.92)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
      }}
    >
      {/* Logo area */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-white/[0.06]">
        <div className="w-10 h-10 min-w-[40px] rounded-lg bg-[#0d1f35] border border-cyan-400/30 flex items-center justify-center shadow-[0_0_16px_rgba(0,255,255,0.1)]">
          <img src="/LOGO.png" alt="Logo" className="w-8 h-8 object-contain" />
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <h2
              className="text-sm font-bold tracking-[0.15em] uppercase text-cyan-300 whitespace-nowrap"
              style={{ textShadow: "0 0 12px rgba(0,229,255,0.5)" }}
            >
              BBA
            </h2>
            <p className="text-[9px] tracking-[0.15em] uppercase text-cyan-400/40">
              Neural Grid
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-2 flex flex-col gap-1 overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
              item.active
                ? "bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                : "text-white/40 hover:text-white/70 hover:bg-white/[0.04] border border-transparent"
            }`}
          >
            <span
              className={`min-w-[18px] transition-colors ${
                item.active ? "text-cyan-400" : "text-white/30 group-hover:text-white/60"
              }`}
            >
              {item.icon}
            </span>
            {!collapsed && (
              <span className="text-[11px] tracking-[0.12em] uppercase font-medium whitespace-nowrap">
                {item.label}
              </span>
            )}
            {item.active && !collapsed && (
              <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(0,229,255,0.6)]" />
            )}
          </Link>
        ))}
      </nav>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="mx-2 mb-3 p-2 rounded-lg text-white/20 hover:text-white/50 hover:bg-white/[0.04] transition-all border border-transparent hover:border-white/[0.06] flex items-center justify-center"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={`transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`}
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* User area */}
      <div className="px-3 pb-4 border-t border-white/[0.06] pt-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 min-w-[32px] rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 flex items-center justify-center text-[11px] font-bold text-white">
            P
          </div>
          {!collapsed && (
            <div className="overflow-hidden">
              <p className="text-[11px] text-white/70 font-medium truncate">Piloto</p>
              <p className="text-[9px] text-white/30 tracking-wider uppercase">Online</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
