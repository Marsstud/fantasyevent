
export const Hero = () => {
  return (
    <section className="relative overflow-hidden px-6 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-xs font-black mb-8 border border-primary/20 backdrop-blur-md">
            <span className="material-symbols-outlined text-sm">location_on</span> ДЕТСКИЕ ПРАЗДНИКИ В АЛМАТЫ
          </div>
          <h1 className="text-5xl lg:text-7xl font-magic font-black text-white leading-[1.1] mb-8 tracking-tight">
            Создаем <span className="text-primary magic-text">волшебство</span>, которое дети запомнят навсегда!
          </h1>
          <p className="text-xl text-white/70 mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            Более 100 легендарных персонажей, авторские квесты и актеры с театральным образованием в зачарованном мире праздника.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <a className="bg-primary hover:bg-white text-magic-deep font-black px-10 py-5 rounded-2xl text-lg transition-all flex items-center justify-center gap-3 cta-glow group" href="#characters">
              Выбрать героя <span className="material-symbols-outlined group-hover:rotate-45 transition-transform">auto_fix_high</span>
            </a>
            <a className="glass-magic hover:bg-white/10 text-white font-black px-10 py-5 rounded-2xl text-lg transition-all flex items-center justify-center border border-white/20" href="#prices">
              Прайс-лист
            </a>
          </div>
        </div>
        <div className="relative">
          {/* Decorative magic rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-white/5 rounded-full scale-[1.3] animate-spin-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-primary/10 rounded-full scale-[1.1] animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
          
          <div className="relative group">
            {/* Outer Magical Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000 opacity-60"></div>
            
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(124,58,237,0.4)] rotate-2 group-hover:rotate-0 transition-all duration-1000 aspect-[4/5] border-4 border-white/10 group-hover:border-primary/40">
              <img alt="Fantasy Event Hero" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGA8URI4doFI-uLhYf2Ur9eI_fRv6NE2_MynahXWgH_ACRqKlLUE4ylS_SeNMUlP2eXjt-G4rEtk2fo2sxw9Yh9TCGIRtFZazcdxJjC3SFCFLJ0IKE2M_v3M7l8tNOnld4TLUG-zZXOJF0YNVuvciaaGUE6D5ck7FgMuNWQG40d_yWtLILkuqk6kyvSpbZBMgCy8pb0p1OitiDzVwoVgLQtOHHMXvOeSPN4pQ6fPIGxljojz1HeV6xLg-XQqQZHALZVbyIawy1fPdw" />
              <div className="absolute inset-0 bg-gradient-to-t from-magic-deep/60 via-transparent to-primary/10 opacity-60"></div>
            </div>
            
            {/* Floating Enchanted Card */}
            <div className="absolute -bottom-10 -left-10 glass-magic p-8 rounded-3xl shadow-2xl flex items-center gap-5 animate-float border border-primary/30 backdrop-blur-xl group-hover:scale-110 transition-transform duration-500">
              <div className="bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center border border-primary/50">
                <span className="material-symbols-outlined text-primary text-4xl animate-pulse">celebration</span>
              </div>
              <div>
                <p className="font-black text-3xl text-primary leading-none">5000+</p>
                <p className="text-[11px] font-black text-white/50 uppercase tracking-[0.2em] mt-2">Довольных детей</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
