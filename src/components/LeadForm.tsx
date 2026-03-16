
export const LeadForm = () => {
  return (
    <footer className="relative pt-32 pb-16 overflow-hidden">
      {/* Footer Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="purple-gradient-deep rounded-[4rem] p-10 lg:p-24 mb-32 relative overflow-hidden shadow-[0_0_100px_rgba(124,58,237,0.2)] border border-white/10">
          {/* Magic Decor */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <span className="material-symbols-outlined absolute top-10 left-10 rotate-12 text-9xl">celebration</span>
            <span className="material-symbols-outlined absolute bottom-10 right-10 -rotate-12 text-9xl">auto_fix_high</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-24 items-center relative z-10">
            <div>
              <h2 className="text-5xl lg:text-7xl font-magic font-black text-white mb-10 leading-tight">Рассчитать стоимость</h2>
              <p className="text-white/70 text-xl mb-12 leading-relaxed font-medium">Оставьте номер, и наш магический менеджер подберет идеальный сценарий под ваши мечты!</p>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-5 glass-magic px-8 py-5 rounded-3xl border border-white/10 group transition-all hover:border-primary/50">
                  <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary border border-primary/30">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <span className="text-2xl font-black text-white">+7 747 460 6886</span>
                </div>
                <div className="flex items-center gap-5 glass-magic px-8 py-3 rounded-2xl border border-white/5 opacity-60">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-primary/50 border border-white/10">
                    <span className="material-symbols-outlined">language</span>
                  </div>
                  <span className="text-lg font-bold text-white/70 tracking-wide uppercase">Все заявки онлайн • Алматы</span>
                </div>
              </div>
            </div>
            <div className="card-magical p-10 lg:p-14 rounded-[3.5rem] border border-white/20 bg-white/5">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 ml-2">Имя родителя</label>
                  <input className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none placeholder:text-white/20" placeholder="Ваше имя" type="text" />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 ml-2">WhatsApp Номер</label>
                  <input className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none placeholder:text-white/20" placeholder="+7 (___) ___-__-__" type="tel" />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 ml-2">Возраст ребенка</label>
                  <select className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSIjZjRkMTI1IiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGQ9Ik0xOSA5bC03IDctNy03Ii8+PC9zdmc+')] bg-[length:20px] bg-[right_24px_center] bg-no-repeat">
                    <option className="bg-magic-deep">1-3 года</option>
                    <option className="bg-magic-deep">4-6 лет</option>
                    <option className="bg-magic-deep">7-10 лет</option>
                    <option className="bg-magic-deep">11+ лет</option>
                  </select>
                </div>
                <button className="w-full py-6 bg-primary text-magic-deep font-black rounded-2xl text-xl hover:scale-[1.02] shadow-2xl shadow-primary/40 transition-all cta-glow uppercase tracking-widest mt-4">Узнать стоимость</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-t border-white/10 pt-16">
          <div className="flex items-center gap-4">
            <div className="bg-primary/20 p-3 rounded-2xl text-primary border border-primary/30">
              <span className="material-symbols-outlined text-3xl">auto_fix_high</span>
            </div>
            <div>
              <span className="font-black text-2xl text-white tracking-tight">Fantasy Event</span>
              <p className="text-[10px] text-primary uppercase tracking-[0.4em] font-black">Magic Studio</p>
            </div>
          </div>
          <p className="text-white/30 text-sm font-medium">© 2024 Fantasy Event Almaty. Волшебство по расписанию.</p>
          <div className="flex items-center gap-5">
            <a className="w-14 h-14 glass-magic rounded-2xl flex items-center justify-center hover:bg-primary hover:text-magic-deep transition-all duration-500 border-white/10 hover:border-primary group shadow-lg" href="https://www.instagram.com/fantasy_event_agency/" target="_blank" rel="noreferrer">
              <span className="material-symbols-outlined text-2xl group-hover:scale-110">camera</span>
            </a>
            <a className="w-14 h-14 glass-magic rounded-2xl flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-500 border-white/10 hover:border-green-500 group shadow-lg" href="https://wa.me/77474606886" target="_blank" rel="noreferrer">
              <span className="material-symbols-outlined text-2xl group-hover:scale-110">chat</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
