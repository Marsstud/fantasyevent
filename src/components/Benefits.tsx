
export const Benefits = () => {
  return (
    <section className="py-32 relative z-10" id="benefits">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="group text-center">
            <div className="w-24 h-24 glass-magic rounded-[2rem] flex items-center justify-center mx-auto mb-10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-magic-deep group-hover:rotate-[15deg] border border-white/10 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(244,209,37,0.3)]">
              <span className="material-symbols-outlined text-5xl">theater_comedy</span>
            </div>
            <h4 className="text-xl font-black mb-4 text-white">Профи актеры</h4>
            <p className="text-sm text-white/50 leading-relaxed font-medium">Только выпускники театральных вузов с санкнижками и любовью к магии.</p>
          </div>
          <div className="group text-center">
            <div className="w-24 h-24 glass-magic rounded-[2rem] flex items-center justify-center mx-auto mb-10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-magic-deep group-hover:rotate-[-15deg] border border-white/10 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(244,209,37,0.3)]">
              <span className="material-symbols-outlined text-5xl">clean_hands</span>
            </div>
            <h4 className="text-xl font-black mb-4 text-white">Чистые костюмы</h4>
            <p className="text-sm text-white/50 leading-relaxed font-medium">Каждый костюм проходит химчистку и дезинфекцию перед выездом.</p>
          </div>
          <div className="group text-center">
            <div className="w-24 h-24 glass-magic rounded-[2rem] flex items-center justify-center mx-auto mb-10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-magic-deep group-hover:rotate-[15deg] border border-white/10 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(244,209,37,0.3)]">
              <span className="material-symbols-outlined text-5xl">alarm_on</span>
            </div>
            <h4 className="text-xl font-black mb-4 text-white">Пунктуальность</h4>
            <p className="text-sm text-white/50 leading-relaxed font-medium">Прибываем за 30 минут. Гарантируем начало вовремя.</p>
          </div>
          <div className="group text-center">
            <div className="w-24 h-24 glass-magic rounded-[2rem] flex items-center justify-center mx-auto mb-10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-magic-deep group-hover:rotate-[-15deg] border border-white/10 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(244,209,37,0.3)]">
              <span className="material-symbols-outlined text-5xl">history_edu</span>
            </div>
            <h4 className="text-xl font-black mb-4 text-white">Свои сценарии</h4>
            <p className="text-sm text-white/50 leading-relaxed font-medium">Никаких шаблонов. Адаптируем программу под именинника.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
