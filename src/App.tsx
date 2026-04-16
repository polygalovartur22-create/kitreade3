import { useState, useEffect, useRef } from 'react';

/* ═══════════════════════════════════════════════
   ICONS
═══════════════════════════════════════════════ */
const IconZap = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const IconTruck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <rect x="1" y="3" width="15" height="13" rx="1" />
    <path d="M16 8h4l3 4v4h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);
const IconTag = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);
const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const IconRefresh = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <polyline points="23 4 23 10 17 10" />
    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconWarning = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M10.29 3.86L1.82 18h20.36L10.29 3.86z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconMap = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconDoc = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);
const IconChevron = ({ open }: { open: boolean }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
    style={{ transition: 'transform 0.3s ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
    className="w-5 h-5 flex-shrink-0">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);
const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

/* ═══════════════════════════════════════════════
   COUNTER HOOK
═══════════════════════════════════════════════ */
function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) setStarted(true);
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
}

/* ═══════════════════════════════════════════════
   HEADER
═══════════════════════════════════════════════ */
const NAV_ITEMS = [
  'Преимущества', 'О компании', 'Гарантия и возврат',
  'Доставка любых грузов', 'Блог', 'Ответы на частые вопросы'
];
const PHONES = ['+7 (996) 457-43-01', '+7 (906) 946-19-99', '+7 (995) 245-51-55'];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className={`header-blur fixed top-0 left-0 right-0 z-50 ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center"
                style={{ background: '#FFF705' }}>
                <span className="text-black font-black text-xs sm:text-sm">КТ</span>
              </div>
              <span className="text-lg sm:text-xl font-black tracking-tight text-white">Китрейд</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-6">
              {NAV_ITEMS.map(item => (
                <a key={item} href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200 whitespace-nowrap">
                  {item}
                </a>
              ))}
            </nav>

            {/* Desktop right */}
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
              <div className="flex flex-col items-end gap-0.5">
                {PHONES.map(p => (
                  <a key={p} href={`tel:${p.replace(/\D/g, '')}`}
                    className="text-xs text-white/60 hover:text-white transition-colors leading-tight"
                    style={{ fontSize: '11px' }}>
                    {p}
                  </a>
                ))}
              </div>
              <a href="#" className="btn-accent px-4 py-2.5 text-sm font-bold rounded-xl">
                Рассчитать стоимость
              </a>
            </div>

            {/* Tablet phones + burger */}
            <div className="flex items-center gap-3 lg:hidden">
              <a href={`tel:${PHONES[0].replace(/\D/g, '')}`}
                className="hidden sm:flex items-center gap-1.5 text-white/70 hover:text-white transition-colors text-sm">
                <span className="w-4 h-4 opacity-70"><IconPhone /></span>
                {PHONES[0]}
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`burger flex flex-col gap-1.5 p-2 ${menuOpen ? 'open' : ''}`}
                aria-label="Меню">
                <span></span><span></span><span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: '#FFF705' }}>
              <span className="text-black font-black text-sm">КТ</span>
            </div>
            <span className="text-xl font-black tracking-tight text-white">Китрейд</span>
          </div>
          <button onClick={() => setMenuOpen(false)}
            className={`burger open flex flex-col gap-1.5 p-2`}
            aria-label="Закрыть">
            <span></span><span></span><span></span>
          </button>
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          {NAV_ITEMS.map((item, i) => (
            <a key={item} href="#"
              onClick={() => setMenuOpen(false)}
              className="text-lg text-white/70 hover:text-white py-3 border-b border-white/5 transition-colors"
              style={{ animationDelay: `${i * 0.05}s` }}>
              {item}
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-6 space-y-4">
          <div className="space-y-2">
            {PHONES.map(p => (
              <a key={p} href={`tel:${p.replace(/\D/g, '')}`}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <span className="w-4 h-4 opacity-60"><IconPhone /></span>
                <span className="text-sm">{p}</span>
              </a>
            ))}
          </div>
          <a href="#" className="btn-accent w-full py-3.5 text-base font-bold rounded-xl"
            onClick={() => setMenuOpen(false)}>
            Рассчитать стоимость
          </a>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg noise pt-20">
      {/* Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl">

          {/* Badge */}
          <div className="fade-up fade-up-1 inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass mb-6 sm:mb-8">
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#FFF705' }}><IconStar /></span>
              ))}
            </span>
            <span className="text-xs sm:text-sm text-white/60">Работаем с 2020 года</span>
          </div>

          {/* Heading */}
          <h1 className="fade-up fade-up-2 hero-title mb-5 sm:mb-6">
            китайские{' '}
            <span className="accent">автозапчасти</span>
            {' '}по низким ценам
          </h1>

          {/* Sub */}
          <p className="fade-up fade-up-3 text-base sm:text-lg lg:text-xl text-white/60 mb-8 sm:mb-10 max-w-2xl leading-relaxed">
            Найдём любую запчасть и рассчитаем стоимость.{' '}
            <span style={{ color: '#FFF705' }} className="font-semibold">Цены до 40% ниже рынка!</span>
          </p>

          {/* CTA */}
          <div className="fade-up fade-up-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#" className="btn-accent px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-bold rounded-xl">
              Рассчитать стоимость
              <IconArrow />
            </a>
            <a href="#" className="btn-ghost px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold rounded-xl">
              О компании
            </a>
          </div>

          {/* Stats strip */}
          <div className="fade-up fade-up-4 mt-12 sm:mt-16 flex flex-wrap gap-6 sm:gap-10">
            {[
              { val: '1650+', label: 'Обработанных заказов' },
              { val: '4570+', label: 'Доставленных запчастей' },
              { val: '40%', label: 'Экономия vs рынок' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-2xl sm:text-3xl font-black" style={{ color: '#FFF705' }}>{s.val}</div>
                <div className="text-xs sm:text-sm text-white/40 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #050505, transparent)' }} />
    </section>
  );
}

/* ═══════════════════════════════════════════════
   ADVANTAGES
═══════════════════════════════════════════════ */
const ADVANTAGES = [
  {
    num: '01',
    icon: <IconZap />,
    title: 'Оперативность',
    text: 'Благодаря наличию прямых контактов с производителями и трейдерами в Китае, наши клиенты получают информацию о наличии и стоимости товара в кратчайшие сроки.',
  },
  {
    num: '02',
    icon: <IconTruck />,
    title: 'Привезём любую запчасть',
    text: 'Сотрудничаем с прямыми поставщиками производителей самых известных марок автомобилей, предоставляем качественный сервис каждому клиенту.',
  },
  {
    num: '03',
    icon: <IconTag />,
    title: 'Лучшие цены',
    text: 'Как правило наши цены ниже рыночных на 20-30%. Таким образом, мы составляем конкуренцию известным поставщикам, дилерам и сетевым компаниям на территории РФ.',
  },
];

function Advantages() {
  return (
    <section id="advantages" className="py-16 sm:py-20 lg:py-28 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <div className="divider mb-4" />
            <h2 className="section-title">Преимущества</h2>
          </div>
          <p className="text-white/40 text-sm sm:text-base max-w-xs sm:text-right">
            Почему клиенты выбирают нас
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {ADVANTAGES.map((a) => (
            <div key={a.num} className="glass glass-hover rounded-2xl p-6 sm:p-8 flex flex-col gap-5">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,247,5,0.1)', color: '#FFF705' }}>
                  <span className="w-5 h-5 sm:w-6 sm:h-6">{a.icon}</span>
                </div>
                <span className="card-num">{a.num}</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{a.title}</h3>
                <p className="text-white/50 text-sm sm:text-base leading-relaxed">{a.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   ABOUT
═══════════════════════════════════════════════ */
function About() {
  const { count: c1, ref: r1 } = useCounter(1650);
  const { count: c2, ref: r2 } = useCounter(4570);

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(255,247,5,0.04) 0%, transparent 60%)' }} />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Text */}
          <div>
            <div className="divider mb-4" />
            <h2 className="section-title mb-6">О компании</h2>
            <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-8">
              Компания «Китрейд» специализируется на доставке товаров из Китая в Россию и Беларусь.
              Ранее мы более фокусировались на поставках оригинальных запчастей для автомобилей
              китайского, корейского и немецкого производства, сотрудничая напрямую с заводами-изготовителями.
              Сегодня, используя наработанные логистические цепочки и опыт, мы обеспечиваем
              полный цикл доставки любых грузов.
            </p>

            <a href="#" className="btn-ghost px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold rounded-xl inline-flex">
              Узнать больше <IconArrow />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div ref={r1} className="glass rounded-2xl p-6 sm:p-8 flex flex-col gap-2">
              <div className="stat-num">{c1.toLocaleString('ru-RU')}</div>
              <div className="text-white/50 text-sm sm:text-base leading-snug">Обработанных заказов</div>
            </div>
            <div ref={r2} className="glass rounded-2xl p-6 sm:p-8 flex flex-col gap-2">
              <div className="stat-num">{c2.toLocaleString('ru-RU')}</div>
              <div className="text-white/50 text-sm sm:text-base leading-snug">Доставленных запчастей</div>
            </div>
            {/* Extra info cards */}
            <div className="glass rounded-2xl p-5 sm:p-6 col-span-2 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,247,5,0.1)', color: '#FFF705' }}>
                <span className="w-5 h-5"><IconTruck /></span>
              </div>
              <div>
                <div className="text-white font-bold text-sm sm:text-base">Россия и Беларусь</div>
                <div className="text-white/40 text-xs sm:text-sm">Направления доставки</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   CAR GALLERY
═══════════════════════════════════════════════ */
function CarGallery() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* subtle bg glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 80%, rgba(255,247,5,0.04) 0%, transparent 65%)' }} />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="divider mb-4" />
            <h2 className="section-title">Китайский автопром</h2>
          </div>
          <p className="text-white/40 text-sm sm:text-base max-w-xs sm:text-right">
            Оригинальные запчасти для всех популярных марок
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

          {/* Card 1 — large on desktop */}
          <div className="lg:col-span-2 group relative rounded-2xl overflow-hidden"
            style={{ height: '320px' }}>
            <img
              src="/images/car1.jpg"
              alt="Китайский автомобиль — седан"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* overlay */}
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.2) 50%, transparent 100%)' }} />
            {/* border glow on hover */}
            <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-yellow-400/30 transition-colors duration-300" />
            {/* label */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3"
                style={{ background: 'rgba(255,247,5,0.12)', border: '1px solid rgba(255,247,5,0.2)' }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#FFF705' }} />
                <span className="text-xs font-semibold" style={{ color: '#FFF705' }}>Седаны и купе</span>
              </div>
              <p className="text-white/60 text-xs sm:text-sm">Запчасти для BYD, Chery, Geely, BAIC</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-2xl overflow-hidden"
            style={{ height: '320px' }}>
            <img
              src="/images/car2.jpg"
              alt="Китайский кроссовер SUV"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.2) 50%, transparent 100%)' }} />
            <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-yellow-400/30 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3"
                style={{ background: 'rgba(255,247,5,0.12)', border: '1px solid rgba(255,247,5,0.2)' }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#FFF705' }} />
                <span className="text-xs font-semibold" style={{ color: '#FFF705' }}>SUV и кроссоверы</span>
              </div>
              <p className="text-white/60 text-xs sm:text-sm">Haval, Li Auto, NIO, Exeed</p>
            </div>
          </div>

          {/* Card 3 — full width on mobile, 1/3 on desktop */}
          <div className="group relative rounded-2xl overflow-hidden sm:col-span-2 lg:col-span-1"
            style={{ height: '260px' }}>
            <img
              src="/images/car3.jpg"
              alt="Китайский спортивный автомобиль"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.2) 50%, transparent 100%)' }} />
            <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-yellow-400/30 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3"
                style={{ background: 'rgba(255,247,5,0.12)', border: '1px solid rgba(255,247,5,0.2)' }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#FFF705' }} />
                <span className="text-xs font-semibold" style={{ color: '#FFF705' }}>Спорт и премиум</span>
              </div>
              <p className="text-white/60 text-xs sm:text-sm">MG, OMODA, Jaecoo, Jetour</p>
            </div>
          </div>

          {/* Stats bar — full width */}
          <div className="sm:col-span-2 lg:col-span-2 glass rounded-2xl p-5 sm:p-6
                          flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ borderColor: 'rgba(255,247,5,0.1)' }}>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-md">
              Работаем с запчастями для всех популярных китайских марок.
              Прямые поставки от производителей.
            </p>
            <a href="#" className="btn-accent px-5 sm:px-6 py-3 text-sm font-bold rounded-xl flex-shrink-0 whitespace-nowrap">
              Найти запчасть <IconArrow />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   VIDEO
═══════════════════════════════════════════════ */
function VideoSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 relative grid-bg overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <div className="divider mx-auto mb-4" />
          <h2 className="section-title">Видео из Китая</h2>
          <p className="text-white/40 mt-3 text-sm sm:text-base">Посмотрите как мы работаем</p>
        </div>

        <div className="video-frame max-w-4xl mx-auto">
          <div className="corner corner-tl" />
          <div className="corner corner-tr" />
          <div className="corner corner-bl" />
          <div className="corner corner-br" />

          {/* Inner content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="play-btn">
              <svg viewBox="0 0 24 24" fill="#050505">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <p className="mt-6 text-white/30 text-xs sm:text-sm tracking-widest uppercase">
              Видео из Китая
            </p>
          </div>

          {/* Decorative grid lines */}
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,247,5,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,247,5,1) 1px, transparent 1px)',
              backgroundSize: '80px 80px'
            }} />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   GUARANTEE
═══════════════════════════════════════════════ */
const GUARANTEES = [
  {
    icon: <IconShield />,
    title: 'Гарантия на нов. запчасти',
    text: 'Предоставляем гарантию на все новые запчасти. Ваша покупка защищена.',
    warning: false,
  },
  {
    icon: <IconRefresh />,
    title: 'Обмен в случае дефекта',
    text: 'Обменяем товар при обнаружении производственного дефекта без лишних вопросов.',
    warning: false,
  },
  {
    icon: <IconCheck />,
    title: 'Проверка при получении',
    text: 'Вы можете проверить товар при получении до полной оплаты заказа.',
    warning: false,
  },
  {
    icon: <IconWarning />,
    title: 'Б/у запчасти',
    text: 'Гарантия на б/у товары не предоставляется. Состояние описывается подробно перед покупкой.',
    warning: true,
  },
];

function Guarantee() {
  return (
    <section id="guarantee" className="py-16 sm:py-20 lg:py-28 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left */}
          <div>
            <div className="divider mb-4" />
            <h2 className="section-title mb-5">Гарантия и возврат</h2>
            <p className="text-white/55 text-base sm:text-lg leading-relaxed">
              Мы ценим доверие наших партнёров и стараемся, чтобы процесс получения
              запчастей был максимально прозрачным и надёжным.
            </p>
          </div>

          {/* Right — cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {GUARANTEES.map((g) => (
              <div key={g.title} className="guarantee-badge"
                style={g.warning ? { borderColor: 'rgba(251,146,60,0.2)', background: 'rgba(251,146,60,0.03)' } : {}}>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: g.warning ? 'rgba(251,146,60,0.1)' : 'rgba(255,247,5,0.1)',
                    color: g.warning ? '#fb923c' : '#FFF705',
                  }}>
                  <span className="w-4 h-4 sm:w-5 sm:h-5">{g.icon}</span>
                </div>
                <div>
                  <div className="font-bold text-sm sm:text-base text-white mb-1">{g.title}</div>
                  <div className="text-white/45 text-xs sm:text-sm leading-relaxed">{g.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   FAQ
═══════════════════════════════════════════════ */
const FAQS = [
  {
    q: 'Как отследить посылку?',
    a: 'После отправки вы получите трек-номер на email. Отслеживайте статус груза в личном кабинете.',
  },
  {
    q: 'Можете ли найти поставщика?',
    a: 'Да! Мы помогаем с поиском проверенных поставщиков, проверкой качества и организацией выгодных закупок.',
  },
  {
    q: 'Сколько времени занимает доставка?',
    a: 'Сроки зависят от типа груза и выбранного способа доставки. В среднем от 15 до 45 дней. Авиадоставка — от 7 дней.',
  },
  {
    q: 'Работаете ли вы с юридическими лицами?',
    a: 'Да, мы работаем как с физическими, так и с юридическими лицами. Предоставляем все необходимые документы.',
  },
  {
    q: 'Какой минимальный заказ?',
    a: 'Минимального ограничения по заказу нет. Мы работаем как с единичными запчастями, так и с оптовыми партиями.',
  },
  {
    q: 'Как происходит оплата?',
    a: 'Принимаем оплату банковским переводом, на карту и наличными. Возможна оплата частями: аванс и остаток при получении.',
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-28 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <div className="divider mx-auto mb-4" />
            <h2 className="section-title">Частые вопросы</h2>
            <p className="text-white/40 mt-3 text-sm sm:text-base">Ответы на популярные вопросы наших клиентов</p>
          </div>

          <div className="space-y-0">
            {FAQS.map((f, i) => (
              <div key={i} className="faq-item">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left"
                >
                  <span className="font-semibold text-white text-sm sm:text-base pr-2">{f.q}</span>
                  <IconChevron open={open === i} />
                </button>
                <div className={`faq-answer ${open === i ? 'open' : ''}`}>
                  <p className="pb-5 sm:pb-6 text-white/50 text-sm sm:text-base leading-relaxed">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   CTA BANNER
═══════════════════════════════════════════════ */
function CTABanner() {
  return (
    <section className="py-6 sm:py-10 lg:py-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="cta-glow" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="glass rounded-2xl p-5 sm:p-6 lg:p-8 max-w-[820px]"
          style={{ borderColor: 'rgba(255,247,5,0.12)', background: 'rgba(255,247,5,0.03)' }}>

          {/* Orb inside */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <div style={{
              position: 'absolute', top: '-50%', left: '30%', transform: 'translateX(-50%)',
              width: '400px', height: '200px',
              background: 'radial-gradient(ellipse, rgba(255,247,5,0.08) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }} />
          </div>

          {/* Horizontal layout on desktop */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">

            {/* Left: text */}
            <div className="flex flex-col gap-2 lg:max-w-[520px]">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight text-white">
                Доставка из Китая{' '}
                <span style={{ color: '#FFF705' }}>под ключ</span>
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Компания "Китрейд" специализируется на доставке автозапчастей, но также мы осуществляем
                полный цикл доставки любых грузов из Китая.
              </p>
            </div>

            {/* Right: button */}
            <div className="flex-shrink-0">
              <a href="#" className="btn-accent px-7 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-bold rounded-xl inline-flex whitespace-nowrap">
                Рассчитать стоимость
                <IconArrow />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   CONTACTS
═══════════════════════════════════════════════ */
function Contacts() {
  return (
    <section id="contacts" className="py-16 sm:py-20 lg:py-28 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14">
          <div className="divider mb-4" />
          <h2 className="section-title">Контакты</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">

          {/* Phones */}
          <div className="contact-card">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style={{ background: 'rgba(255,247,5,0.1)', color: '#FFF705' }}>
              <span className="w-5 h-5"><IconPhone /></span>
            </div>
            <div className="text-white/40 text-xs uppercase tracking-wider mb-3">Телефоны</div>
            <div className="space-y-2">
              {PHONES.map(p => (
                <a key={p} href={`tel:${p.replace(/\D/g, '')}`}
                  className="block text-white font-semibold text-sm sm:text-base hover:text-yellow-300 transition-colors">
                  {p}
                </a>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className="contact-card">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style={{ background: 'rgba(255,247,5,0.1)', color: '#FFF705' }}>
              <span className="w-5 h-5"><IconMail /></span>
            </div>
            <div className="text-white/40 text-xs uppercase tracking-wider mb-3">Email</div>
            <a href="mailto:kitrade@bk.ru"
              className="text-white font-semibold text-sm sm:text-base hover:text-yellow-300 transition-colors break-all">
              kitrade@bk.ru
            </a>
          </div>

          {/* Address */}
          <div className="contact-card">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style={{ background: 'rgba(255,247,5,0.1)', color: '#FFF705' }}>
              <span className="w-5 h-5"><IconMap /></span>
            </div>
            <div className="text-white/40 text-xs uppercase tracking-wider mb-3">Адрес</div>
            <p className="text-white font-semibold text-sm sm:text-base leading-relaxed">
              г. Барнаул,<br />пр-т. Ленина д. 3
            </p>
          </div>

          {/* Requisites */}
          <div className="contact-card">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style={{ background: 'rgba(255,247,5,0.1)', color: '#FFF705' }}>
              <span className="w-5 h-5"><IconDoc /></span>
            </div>
            <div className="text-white/40 text-xs uppercase tracking-wider mb-3">Реквизиты</div>
            <div className="space-y-1.5">
              <p className="text-white text-sm font-semibold leading-snug">
                ИП Заварзин Дмитрий Александрович
              </p>
              <p className="text-white/50 text-xs">ИНН: 041000625377</p>
              <p className="text-white/50 text-xs">ОГРНИП: 325040000001470</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-6 pb-6"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#FFF705' }}>
              <span className="text-black font-black text-xs">КТ</span>
            </div>
            <span className="text-white font-black text-lg tracking-tight">Китрейд</span>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {['Преимущества', 'О компании', 'Гарантия', 'Контакты'].map(item => (
              <a key={item} href="#"
                className="text-white/40 hover:text-white text-sm transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white/30 text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} Китрейд. Все права защищены.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <span className="hidden sm:inline">•</span>
            <a href="#" className="hover:text-white transition-colors">Использование cookies</a>
          </div>
        </div>

        {/* Cookie notice */}
        <p className="mt-4 text-white/20 text-xs max-w-2xl leading-relaxed">
          Используя данный сайт, вы соглашаетесь с нашей политикой использования файлов cookie.
          Мы используем cookie-файлы для улучшения работы сайта и персонализации контента.
          Подробнее в <a href="#" className="underline hover:text-white/40 transition-colors">Политике конфиденциальности</a>.
        </p>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════
   APP ROOT
═══════════════════════════════════════════════ */
export default function App() {
  return (
    <div style={{ background: '#050505', minHeight: '100vh', color: '#fff' }}>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <About />
        <CarGallery />
        <VideoSection />
        <Guarantee />
        <FAQ />
        <CTABanner />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
