
export const Header = () => {
  return (
    <header className="sticky top-0 z-50 glass-magic border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-2.5 rounded-2xl text-magic-deep shadow-lg shadow-primary/20 group cursor-pointer">
            <span className="material-symbols-outlined text-3xl group-hover:rotate-[360deg] transition-transform duration-700">auto_fix_high</span>
          </div>
          <div>
            <h1 className="font-black text-2xl tracking-tight text-white leading-none">Fantasy Event</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] font-black text-primary mt-1">Almaty Magic Studio</p>
          </div>
        </div>
        <nav className="hidden lg:flex items-center gap-10">
          <a className="text-sm font-bold text-white/70 hover:text-primary transition-all relative group" href="#characters">
            Герои
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a className="text-sm font-bold text-white/70 hover:text-primary transition-all relative group" href="#prices">
            Цены
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a className="text-sm font-bold text-white/70 hover:text-primary transition-all relative group" href="#benefits">
            О нас
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a className="text-sm font-bold text-white/70 hover:text-primary transition-all relative group" href="#shows">
            Шоу
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a className="hidden sm:flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-2.5 rounded-2xl font-black text-sm transition-all hover:scale-105 shadow-lg shadow-green-500/20" href="https://wa.me/77474606886">
            <span className="material-symbols-outlined text-lg">chat</span> WhatsApp
          </a>
          <button className="lg:hidden text-white p-2 bg-white/10 rounded-xl">
            <span className="material-symbols-outlined text-3xl">menu_open</span>
          </button>
        </div>
      </div>
    </header>
  );
};
