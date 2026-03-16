
export const Shows = () => {
  return (
    <section className="py-32 relative z-10" id="shows">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-magic font-black text-white mb-6">Добавьте ярких эмоций</h2>
          <p className="text-white/50 text-lg">Дополнительные шоу-программы для полного восторга</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="group card-magical p-6 rounded-[3rem] border-white/5 hover:border-primary/40">
            <div className="rounded-[2.5rem] overflow-hidden mb-8 aspect-video relative">
              <img alt="Cryo Show" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmfGgy518xoXUW-iVHohAw89Lwx1x_n-Y_CzPth7-N45ySFxhqkGjfegNbLV9C2jtXhoLT-9EaEtsqdzPbnLJojiyjXx6Pjdi0Q8hu1dQX4s6u3ZH4L3vcCC5jsqQSTCvEh4_Bb2W4-6E9K_6kvz-PETRT44J2lRKWkctnl2i3EYnC3PcJvQI-slh7kqejnskAELoyFJFqd0RM_unsxfTzRltJIDuhTkvV74BEyOjkuUBwMTSkD8-6p1SgYn57cAuiruoGuSpN7O0Q" />
              <div className="absolute inset-0 bg-magic-deep/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h4 className="text-2xl font-black mb-4 text-white group-hover:text-primary transition-colors">Научное Крио-шоу</h4>
            <p className="text-white/50 text-sm leading-relaxed mb-4">Эксперименты с жидким азотом, ледяное мороженое и научная магия для всех возрастов.</p>
          </div>
          <div className="group card-magical p-6 rounded-[3rem] border-white/5 hover:border-primary/40">
            <div className="rounded-[2.5rem] overflow-hidden mb-8 aspect-video relative">
              <img alt="Paper Disco" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb1YXCrr-K9SwFW_6oGcr9MRMeS_6IekK4Moq88QpASOYGDrnLguJxVjq_ow4s7WuuXVkcJrFMCztMpk-gm8kaKB5WFb5M2KLfISkRc_N_L_80l7EhOr1MxyafeZhqJIhlBk6Ihnw9syDJDRy-59_IuCvzHGsb1hNgfdWZa0pRkozoEnmPU4G1W6nRq57ikuQjdC_TcEw7gkzeqUloIFfF-prD1LGOUua2QzK2R9Q0JSb_mYibn1NbzTnzKSdJDp5WGeaIzZ3Frn_4" />
              <div className="absolute inset-0 bg-magic-deep/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h4 className="text-2xl font-black mb-4 text-white group-hover:text-primary transition-colors">Бумажное Диско</h4>
            <p className="text-white/50 text-sm leading-relaxed mb-4">Километры белоснежной бумаги, мощная музыка и безудержный драйв в бумажном море.</p>
          </div>
          <div className="group card-magical p-6 rounded-[3rem] border-white/5 hover:border-primary/40">
            <div className="rounded-[2.5rem] overflow-hidden mb-8 aspect-video relative">
              <img alt="Workshops" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaQsiv0zUJrlwmBCcfo1LGuwTN4kBLTvCAc56XjvGuwo2Yzqb6kI8yBeLAjqwMNJcQgWvmooqp4cmuDcV78YFCPVIDJA2OpEQHDShIDcSKUTWykIuSIb80k2YrjPd1msRpKNrNc1swN_-gfiTUjChfG7-zCnacjybRca17mdYl-MMRwZEqhLAduRNmU4MN-FcUUSlBdJcokphom5T-PYqP5z8ctwyWNItiI3dGeVlmYjpW8zPwLwh55VA0BO2FyL1KQS2ayVVp_QB4" />
              <div className="absolute inset-0 bg-magic-deep/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h4 className="text-2xl font-black mb-4 text-white group-hover:text-primary transition-colors">Мастер-классы</h4>
            <p className="text-white/50 text-sm leading-relaxed mb-4">Слаймы, роспись сумок или создание масок — полезно, увлекательно и на память!</p>
          </div>
        </div>
      </div>
    </section>
  );
};
