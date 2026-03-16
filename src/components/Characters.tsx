
export const Characters = () => {
  return (
    <section className="py-32 relative z-10" id="characters">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-magic font-black text-white mb-4">Популярные персонажи</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <button className="group flex items-center gap-2 font-black text-primary hover:text-white transition-all text-sm uppercase tracking-widest">
            Весь каталог <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">explore</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Character Card 1 - Disney Princess */}
          <div className="group card-magical p-6 rounded-[2.5rem] border border-white/5 hover:border-primary/40">
            <div className="aspect-square relative rounded-[2rem] overflow-hidden mb-8 bg-magic-deep">
              <img alt="Disney Princess" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtClslkIcAXjMjjQZpM1Yo_cx_eYweGdVqnWYMTQ7Z6k__s47Zr4W4PPMnOFFspKHtLSKlSw7APcEIFy7esbEU0IoQyXv61y4rVOzeHTigHU0qz1fvw8HY9gFXOJyFAwPn9Aag6pt8KEK-Uj4WKCBkDYCgaS6OZZrKqJVU9Ono8RB6hnK6l_Va-CmX0XApumhBFolUndQF3ON4g_pnNTenqNxIBKwcx8fBKbm9Sn3uekDRIp09OY1tK4S7XI6_gl5GZnONIQX8yDwc" />
              <div className="absolute inset-0 bg-gradient-to-t from-magic-deep/80 to-transparent"></div>
              <div className="absolute top-4 left-4 glass-magic px-5 py-2 rounded-full text-[10px] font-black text-primary uppercase tracking-[0.15em] border-primary/30">Сказка ✨</div>
            </div>
            <h3 className="text-2xl font-black mb-3 text-white">Принцессы Disney</h3>
            <p className="text-white/60 text-sm mb-8 leading-relaxed font-medium">Волшебный бал, уроки этикета и настоящие чудеса от любимых героинь.</p>
            <button className="w-full py-4 glass-magic text-white hover:bg-primary hover:text-magic-deep font-black rounded-2xl transition-all border-white/10 hover:border-primary">Забронировать</button>
          </div>
          {/* Character Card 2 - Spider-Man */}
          <div className="group card-magical p-6 rounded-[2.5rem] border border-primary/30 bg-primary/5">
            <div className="aspect-square relative rounded-[2rem] overflow-hidden mb-8 bg-magic-deep">
              <img alt="Spider-Man" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcdvwf17vEvVUDmz67knS0rphEtg5H7uZdpdh6oFjNBucckjvdtEpzbNWBhi9WUUTL0NPobGScGBpWc4BWE9cAJVJDr-MYQEztafmnIJMRWFAUvrkG9yaeUfna-P0siFKGJfaLi6YigWITaYhrdrz0JKeaxTqNQcP38RCX9F_sydJvoeoHGsxhcUgFCtcueoxZe8Fyg3eLLaDKFltvyv98qNpdER3kTgxM0GNP9hwuYZBZU_I4YMnw3N_KMT8wmKRVYvVz3TleIrSc" />
              <div className="absolute inset-0 bg-gradient-to-t from-magic-deep/80 to-transparent"></div>
              <div className="absolute top-4 left-4 bg-primary text-magic-deep px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.15em] shadow-lg shadow-primary/20">Супергерой 🕸️</div>
            </div>
            <h3 className="text-2xl font-black mb-3 text-white">Человек-Паук</h3>
            <p className="text-white/60 text-sm mb-8 leading-relaxed font-medium">Школа супергероев, акробатическое шоу и миссия по спасению праздника!</p>
            <button className="w-full py-4 bg-primary text-magic-deep font-black rounded-2xl transition-all shadow-xl shadow-primary/10 hover:scale-[1.02]">Забронировать</button>
          </div>
          {/* Character Card 3 - Mickey Mouse */}
          <div className="group card-magical p-6 rounded-[2.5rem] border border-white/5 hover:border-primary/40">
            <div className="aspect-square relative rounded-[2rem] overflow-hidden mb-8 bg-magic-deep">
              <img alt="Mickey Mouse" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdqyi_o2xqZrracB560niTXsapWjHwFAoht6ywANSqM-CWL1xnBYXouhoqrxttydUDvq5HdZhl7imKqeHgGh_hZijbfhiy1grdKgFRgYLQDxs3pnVT2QyNtpu4puXeka3jc4hv_e7UsS7Rpyl09ZO3Dw5iPa8-f_YNK8DagT5CF24aV0CRdLDG5dtH76xiG8ZEKwsAewkfcS-QmKgln9lGHa3cPJN61RTn4ybyr5ftgyzCILluRq24OXvYeZc-Ey3RHX5jAU5BbIXY" />
              <div className="absolute inset-0 bg-gradient-to-t from-magic-deep/80 to-transparent"></div>
              <div className="absolute top-4 left-4 glass-magic px-5 py-2 rounded-full text-[10px] font-black text-primary uppercase tracking-[0.15em] border-primary/30">Классика 🎈</div>
            </div>
            <h3 className="text-2xl font-black mb-3 text-white">Микки и Минни</h3>
            <p className="text-white/60 text-sm mb-8 leading-relaxed font-medium">Самые узнаваемые герои мира. Веселые танцы, игры и море позитива.</p>
            <button className="w-full py-4 glass-magic text-white hover:bg-primary hover:text-magic-deep font-black rounded-2xl transition-all border-white/10 hover:border-primary">Забронировать</button>
          </div>
        </div>
      </div>
    </section>
  );
};
