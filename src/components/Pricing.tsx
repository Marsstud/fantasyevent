
export const Pricing = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="prices">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-magic font-black text-white mb-6">Выбирайте свой формат</h2>
          <p className="text-primary font-black uppercase tracking-[0.3em] text-xs">Прозрачные цены • Магические эмоции</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Express */}
          <div className="card-magical p-10 rounded-[3rem] border border-white/10 hover:animate-border-glow">
            <div className="text-primary/50 mb-8"><span className="material-symbols-outlined text-6xl">shutter_speed</span></div>
            <h3 className="text-xl font-black text-white mb-2">Экспресс</h3>
            <div className="text-3xl font-black text-primary mb-10 tracking-tight">15 000 ₸</div>
            <ul className="space-y-5 mb-12 text-white/50 text-sm font-medium">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">auto_fix_high</span> 1 герой / 15 минут</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">auto_fix_high</span> Музыкальный вынос</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">auto_fix_high</span> Поздравление и фото</li>
            </ul>
            <button className="w-full py-4 glass-magic text-white hover:text-primary rounded-2xl font-black transition-all border-white/20">Выбрать</button>
          </div>
          {/* Standard - Highlighted */}
          <div className="bg-primary/5 backdrop-blur-3xl p-10 rounded-[3rem] border-2 border-primary/40 relative scale-105 z-20 shadow-[0_0_50px_rgba(244,209,37,0.15)]">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-magic-deep px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">Популярно ✨</div>
            <div className="text-primary mb-8"><span className="material-symbols-outlined text-6xl">auto_fix_normal</span></div>
            <h3 className="text-xl font-black text-white mb-2">Стандарт</h3>
            <div className="text-3xl font-black text-primary mb-10 tracking-tight">25 000 ₸</div>
            <ul className="space-y-5 mb-12 text-white/80 text-sm font-medium">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> 1 герой / 1 час</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Игровая программа</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Авторский реквизит</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Фигурки из шаров</li>
            </ul>
            <button className="w-full py-5 bg-primary text-magic-deep rounded-2xl font-black shadow-lg shadow-primary/30 transition-all hover:scale-105 cta-glow">Заказать</button>
          </div>
          {/* Super */}
          <div className="card-magical p-10 rounded-[3rem] border border-white/10 hover:animate-border-glow">
            <div className="text-primary/50 mb-8"><span className="material-symbols-outlined text-6xl">rocket_launch</span></div>
            <h3 className="text-xl font-black text-white mb-2">Супер</h3>
            <div className="text-3xl font-black text-primary mb-10 tracking-tight">45 000 ₸</div>
            <ul className="space-y-5 mb-12 text-white/50 text-sm font-medium">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">auto_fix_high</span> 2 героя / 1.5 часа</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">auto_fix_high</span> Шоу мыльных пузырей</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">auto_fix_high</span> Аквагрим для всех</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">auto_fix_high</span> Профи-фотограф</li>
            </ul>
            <button className="w-full py-4 glass-magic text-white hover:text-primary rounded-2xl font-black transition-all border-white/20">Выбрать</button>
          </div>
          {/* VIP */}
          <div className="purple-gradient-deep p-10 rounded-[3rem] border-2 border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 magic-dust opacity-20 group-hover:scale-150 transition-transform duration-[10s]"></div>
            <div className="relative z-10">
              <div className="text-primary mb-8"><span className="material-symbols-outlined text-6xl">diamond</span></div>
              <h3 className="text-xl font-black text-white mb-2">VIP Магия</h3>
              <div className="text-3xl font-black text-primary mb-10 tracking-tight">100 000 ₸</div>
              <ul className="space-y-5 mb-12 text-white/70 text-sm font-medium">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">stars</span> 3 героя / 3 часа</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">stars</span> Квест-шоу + Крио</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">stars</span> Бумажное диско</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">stars</span> Candy Bar &amp; Декор</li>
              </ul>
              <button className="w-full py-5 bg-white text-magic-deep rounded-2xl font-black transition-all hover:scale-105 shadow-2xl">Хочу VIP</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
