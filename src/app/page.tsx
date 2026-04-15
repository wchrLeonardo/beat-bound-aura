import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Efeito de brilho no fundo (Aura Neon) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] -z-10"></div>

      {/* Título do Jogo */}
      <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 mb-4 tracking-tighter">
        BEAT BOUND
        <span className="block text-center text-4xl md:text-6xl mt-2 tracking-widest text-slate-100">
          AURA
        </span>
      </h1>

      <p className="text-slate-400 mb-12 text-lg md:text-xl font-light tracking-wide text-center max-w-md">
        O seu corpo é o controle. Sincronize sua aura com a batida.
      </p>

      {/* Botão de Iniciar (Link para a futura tela de Login) */}
      <Link 
        href="/login"
        className="group relative px-8 py-4 bg-cyan-500/10 border border-cyan-400/50 text-cyan-300 font-bold uppercase tracking-widest hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300 rounded-sm overflow-hidden"
      >
        <span className="relative z-10">Conectar Aura</span>
        {/* Efeito de hover no botão */}
        <div className="absolute inset-0 h-full w-0 bg-cyan-400 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
      </Link>

    </main>
  );
}