import { useState, useEffect, useRef } from 'react';

/* ═══════════════════════════════════════════════════════════════════════════
   ICONS
═══════════════════════════════════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════════════════════════════════
   COUNTER HOOK
═══════════════════════════════════════════════════════════════════════════ */
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
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, duration, target]);

  return { count, ref };
}

/* ═══════════════════════════════════════════════════════════════════════════
   PRIVACY MODAL
═══════════════════════════════════════════════════════════════════════════ */
function PrivacyModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="privacy-overlay" onClick={onClose}>
      <div className="privacy-modal" onClick={(e) => e.stopPropagation()}>
        <div className="privacy-header">
          <h2 className="text-lg sm:text-xl font-bold">Политика конфиденциальности</h2>
          <button onClick={onClose} className="privacy-close" aria-label="Закрыть">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="privacy-body">
          <p className="privacy-date">Дата вступления в силу: 18 апреля 2026 г.</p>

          <h3>1. Общие положения</h3>
          <p>1.1. Настоящая Политика конфиденциальности (далее — Политика) определяет порядок обработки и защиты персональных данных физических лиц (далее — Пользователи), которые используют сайт https://kitreade3.onrender.com (далее — Сайт).</p>
          <p>1.2. Оператором персональных данных является:</p>
          <ul>
            <li>Индивидуальный предприниматель Заварзин Дмитрий Александрович</li>
            <li>ИНН: 041000625377</li>
            <li>ОГРНИП: 325040000001470</li>
            <li>Адрес: г. Барнаул, пр-т. Ленина, д. 3</li>
            <li>Email: kitrade@bk.ru</li>
          </ul>
          <p>1.3. Используя Сайт и отправляя заявку, Пользователь выражает согласие с настоящей Политикой и условиями обработки своих персональных данных.</p>

          <h3>2. Персональные данные, которые мы собираем</h3>
          <p>2.1. Данные, которые Пользователь предоставляет самостоятельно при заполнении формы «Заявка» («Заказать запчасть»):</p>
          <ul>
            <li>Фамилия, имя (или ФИО);</li>
            <li>Адрес электронной почты (email);</li>
            <li>Номер телефона;</li>
            <li>Информация о заявке (что интересует: автозапчасти, поиск поставщика, доставка груза из Китая и т.д., текст сообщения).</li>
          </ul>
          <p>2.2. Технические данные, собираемые автоматически:</p>
          <ul>
            <li>IP-адрес;</li>
            <li>Данные о браузере и устройстве;</li>
            <li>Cookies;</li>
            <li>Статистика посещения страниц (время посещения, просмотренные страницы и т.д.) с помощью сервиса Яндекс.Метрика.</li>
          </ul>
          <p>Мы не собираем паспортные данные, банковские реквизиты или иную избыточную информацию.</p>

          <h3>3. Цели обработки персональных данных</h3>
          <p>Мы обрабатываем персональные данные исключительно для следующих целей:</p>
          <ul>
            <li>Обработка и ответ на заявку Пользователя (обратная связь, консультация по автозапчастям, организация доставки товаров из Китая);</li>
            <li>Исполнение договорных обязательств, возникающих при оформлении заказа/доставки;</li>
            <li>Улучшение работы Сайта, анализ посещаемости и поведения пользователей с помощью Яндекс.Метрика;</li>
            <li>Выполнение требований законодательства Российской Федерации.</li>
          </ul>

          <h3>4. Правовые основания обработки</h3>
          <p>Обработка осуществляется на основании:</p>
          <ul>
            <li>Согласия Пользователя (при отправке формы «Заявка»);</li>
            <li>Законных интересов Оператора (обеспечение работы Сайта, аналитика, безопасность);</li>
            <li>Необходимости для заключения и исполнения договоров (при обработке заявки как оферты).</li>
          </ul>

          <h3>5. Способы и сроки обработки</h3>
          <p>5.1. Обработка осуществляется с использованием средств автоматизации и без таковых.</p>
          <p>5.2. Срок хранения персональных данных:</p>
          <ul>
            <li>Данные из формы заявки — в течение срока, необходимого для достижения целей (обычно до 3 лет с момента последней заявки или до отзыва согласия);</li>
            <li>Технические данные (cookies, Метрика) — в соответствии со сроками, установленными Яндексом.</li>
          </ul>
          <p>По истечении срока данные уничтожаются или обезличиваются.</p>

          <h3>6. Передача персональных данных третьим лицам</h3>
          <p>6.1. Мы передаём данные только в следующих случаях:</p>
          <ul>
            <li>Formspry — для доставки заполненной формы заявки Оператору (имя, email, телефон, текст заявки);</li>
            <li>Яндекс (сервис Яндекс.Метрика) — для получения обезличенной статистики посещаемости Сайта;</li>
            <li>Хостинг-провайдеру reg.ru — в технических целях (логи сервера).</li>
          </ul>
          <p>6.2. Мы не передаём персональные данные китайским поставщикам или иным иностранным компаниям. Данные используются только для организации доставки по запросу Пользователя.</p>
          <p>6.3. Во всех случаях передачи мы обеспечиваем защиту данных в соответствии с 152-ФЗ.</p>

          <h3>7. Cookies и Яндекс.Метрика</h3>
          <p>Сайт использует файлы cookies и сервис Яндекс.Метрика для анализа посещаемости.</p>
          <p>Пользователь может отключить cookies в настройках своего браузера, однако это может повлиять на корректную работу Сайта.</p>
          <p>Подробнее о том, как Яндекс обрабатывает данные — в Политике конфиденциальности Яндекса: <a href="https://yandex.ru/legal/confidential/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">https://yandex.ru/legal/confidential/</a></p>

          <h3>8. Меры защиты персональных данных</h3>
          <p>Оператор принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного доступа, уничтожения, изменения, блокирования, копирования и распространения (SSL-шифрование на Сайте, ограничение доступа и др.).</p>

          <h3>9. Права Пользователя</h3>
          <p>Пользователь имеет право:</p>
          <ul>
            <li>Получать информацию об обработке своих персональных данных;</li>
            <li>Требовать уточнения, блокирования или уничтожения своих данных;</li>
            <li>Отозвать согласие на обработку (в этом случае обработка прекращается, а данные уничтожаются, если нет иных правовых оснований);</li>
            <li>Обращаться с жалобами в Роскомнадзор.</li>
          </ul>
          <p>Для реализации прав необходимо направить письменный запрос на email: kitrade@bk.ru с темой «Запрос по персональным данным».</p>

          <h3>10. Изменения Политики</h3>
          <p>Оператор вправе вносить изменения в Политику. Новая версия публикуется на Сайте. Продолжение использования Сайта после изменений означает согласие с новой редакцией.</p>

          <h3>11. Контакты</h3>
          <p>По всем вопросам, связанным с обработкой персональных данных, обращайтесь:</p>
          <ul>
            <li>Email: kitrade@bk.ru</li>
            <li>Адрес: г. Барнаул, пр-т. Ленина, д. 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   CONSTANTS
═══════════════════════════════════════════════════════════════════════════ */
const PHONES = ['+7 (996) 457-43-01', '+7 (906) 946-19-99', '+7 (995) 245-51-55'];

const NAV_LINKS = [
  { label: 'О компании', href: '#about' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Каталог', href: '#gallery' },
  { label: 'Гарантия', href: '#guarantee' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
];

/* ═══════════════════════════════════════════════════════════════════════════
   HEADER
═══════════════════════════════════════════════════════════════════════════ */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`header-blur fixed top-0 left-0 right-0 z-50 ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-20 flex items-center justify-between" style={{ paddingTop: 'env(safe-area-inset-top, 0px)', minHeight: 'calc(56px + env(safe-area-inset-top, 0px))' }}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img
              src="https://res.cloudinary.com/dtc5ancbn/image/upload/q_100/v1776353780/noroot.png_sqb5vc.webp"
              alt="Китрейд"
              className="h-5 sm:h-7 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/60 hover:text-[var(--accent)] transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a href="#request" className="btn-accent hidden lg:inline-flex px-5 py-2.5 text-sm">
            Рассчитать стоимость
          </a>

          {/* Burger */}
          <button
            className="lg:hidden burger flex flex-col gap-[6px] p-2 relative z-[10001]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu lg:hidden ${menuOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between mb-10">
          <a href="#" className="flex items-center gap-2">
            <img
              src="https://res.cloudinary.com/dtc5ancbn/image/upload/q_100/v1776353780/noroot.png_sqb5vc.webp"
              alt="Китрейд"
              className="h-6 w-auto object-contain"
            />
          </a>
          <button className="burger open flex flex-col gap-[6px] p-2 min-w-[44px] min-h-[44px] items-center justify-center" onClick={() => setMenuOpen(false)} aria-label="Закрыть">
            <span />
            <span />
            <span />
          </button>
        </div>
        <nav className="flex flex-col gap-6 flex-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-2xl font-bold text-white/80 hover:text-[var(--accent)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#request" className="btn-accent px-6 py-3 text-base mt-8" onClick={() => setMenuOpen(false)}>
          Рассчитать стоимость
        </a>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative hero-min-h flex items-center justify-center overflow-hidden grid-bg">
      {/* Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center pt-20 pb-8 sm:pt-20 sm:pb-0 safe-top">
        <div className="mb-4 sm:mb-6">
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full glass text-xs sm:text-sm font-medium text-[var(--accent)] mb-4 sm:mb-6">
            <IconStar />
            Автозапчасти из Китая
          </span>
        </div>

        <h1 className="hero-title mb-4 sm:mb-6">
          <span className="accent">китайские</span>{' '}
          автозапчасти{' '}
          <br className="hidden sm:block" />
          по низким ценам
        </h1>

        <p className="text-white/50 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0">
          Прямые поставки оригинальных запчастей для китайских, корейских и немецких автомобилей.
          Доставка по всей России и Беларуси.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
          <a href="#request" className="btn-accent w-full sm:w-auto px-6 sm:px-8 py-3.5 text-sm sm:text-base">
            Рассчитать стоимость
            <IconArrow />
          </a>
          <a href="#about" className="btn-ghost w-full sm:w-auto px-6 sm:px-8 py-3.5 text-sm sm:text-base">
            Узнать больше
          </a>
        </div>
      </div>

      {/* Noise */}
      <div className="noise absolute inset-0 pointer-events-none" />
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   ADVANTAGES
═══════════════════════════════════════════════════════════════════════════ */
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
    <section id="advantages" className="relative py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-14">
          <div className="divider mb-4" />
          <p className="text-[var(--accent)] text-sm font-semibold tracking-widest uppercase mb-3">
            Преимущества
          </p>
          <h2 className="section-title">Почему клиенты выбирают нас</h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {ADVANTAGES.map((a) => (
            <div key={a.num} className="glass glass-hover rounded-2xl p-5 sm:p-6 sm:p-8">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center flex-shrink-0">
                  {a.icon}
                </div>
                <span className="card-num">{a.num}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-1.5 sm:mb-2">{a.title}</h3>
              <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   ABOUT
═══════════════════════════════════════════════════════════════════════════ */
function About() {
  const { count: c1, ref: r1 } = useCounter(1650);
  const { count: c2, ref: r2 } = useCounter(4570);

  return (
    <section id="about" className="relative py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <div className="divider mb-4" />
            <p className="text-[var(--accent)] text-sm font-semibold tracking-widest uppercase mb-3">
              О компании
            </p>
            <h2 className="section-title mb-4 sm:mb-6">Компания «Китрейд»</h2>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-4">
              Компания «Китрейд» специализируется на доставке товаров из Китая в Россию и Беларусь.
              Ранее мы фокусировались на поставках оригинальных запчастей для автомобилей
              китайского, корейского и немецкого производства, сотрудничая напрямую с заводами-изготовителями.
              Сегодня, используя наработанные логистические цепочки и опыт, мы обеспечиваем
              полный цикл доставки любых грузов.
            </p>

            <a href="#request" className="btn-accent inline-flex px-6 py-3 text-sm mt-2 sm:mt-4">
              Рассчитать стоимость <IconArrow />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            <div ref={r1} className="glass rounded-2xl p-4 sm:p-6 sm:p-8 text-center">
              <div className="stat-num mb-2">{c1.toLocaleString('ru-RU')}</div>
              <p className="text-white/50 text-xs sm:text-sm">Обработанных заказов</p>
            </div>
            <div ref={r2} className="glass rounded-2xl p-4 sm:p-6 sm:p-8 text-center">
              <div className="stat-num mb-2">{c2.toLocaleString('ru-RU')}</div>
              <p className="text-white/50 text-xs sm:text-sm">Доставленных запчастей</p>
            </div>
            {/* Extra info cards */}
            <div className="col-span-2 glass rounded-2xl p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center flex-shrink-0">
                <IconMap />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-base sm:text-lg">Россия и Беларусь</p>
                <p className="text-white/50 text-xs sm:text-sm">Направления доставки</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   CAR GALLERY
═══════════════════════════════════════════════════════════════════════════ */
function CarGallery() {
  return (
    <section id="gallery" className="relative py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-14">
          <div className="divider mb-4" />
          <p className="text-[var(--accent)] text-sm font-semibold tracking-widest uppercase mb-3">
            Китайский автопром
          </p>
          <h2 className="section-title">Оригинальные запчасти для всех популярных марок</h2>
        </div>

        {/* Grid layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

          {/* Card 1 — large on desktop */}
          <div className="relative group rounded-2xl overflow-hidden lg:row-span-2 min-h-[180px] sm:min-h-[220px] lg:min-h-0">
            <img src="/images/car1.jpg" alt="Седаны и купе" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            {/* border glow on hover */}
            <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-[var(--accent)]/30 transition-colors duration-300" />
            {/* label */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 sm:p-6">
              <span className="inline-flex items-center gap-1 text-[var(--accent)] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-1 sm:mb-2">
                <IconStar /> Седаны и купе
              </span>
              <p className="text-white/70 text-xs sm:text-sm">Запчасти для BYD, Chery, Geely, BAIC</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group rounded-2xl overflow-hidden min-h-[180px] sm:min-h-[220px]">
            <img src="/images/car2.jpg" alt="SUV и кроссоверы" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-[var(--accent)]/30 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 sm:p-6">
              <span className="inline-flex items-center gap-1 text-[var(--accent)] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-1 sm:mb-2">
                <IconStar /> SUV и кроссоверы
              </span>
              <p className="text-white/70 text-xs sm:text-sm">Haval, Li Auto, NIO, Exeed</p>
            </div>
          </div>

          {/* Card 3 — full width on mobile, 1/3 on desktop */}
          <div className="relative group rounded-2xl overflow-hidden min-h-[180px] sm:min-h-[220px]">
            <img src="/images/car3.jpg" alt="Спорт и премиум" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-[var(--accent)]/30 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 sm:p-6">
              <span className="inline-flex items-center gap-1 text-[var(--accent)] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-1 sm:mb-2">
                <IconStar /> Спорт и премиум
              </span>
              <p className="text-white/70 text-xs sm:text-sm">MG, OMODA, Jaecoo, Jetour</p>
            </div>
          </div>

          {/* Stats bar — full width */}
          <div className="md:col-span-2 lg:col-span-3 glass rounded-2xl p-4 sm:p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-white/50 text-xs sm:text-sm text-center sm:text-left">
              Работаем с запчастями для всех популярных китайских марок.
              Прямые поставки от производителей.
            </p>
            <a href="#request" className="btn-accent w-full sm:w-auto px-6 py-2.5 text-sm flex-shrink-0 justify-center">
              Рассчитать стоимость <IconArrow />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   VIDEO
═══════════════════════════════════════════════════════════════════════════ */
function VideoSection() {
  return (
    <section className="relative py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-14">
          <div className="divider mb-4" />
          <p className="text-[var(--accent)] text-sm font-semibold tracking-widest uppercase mb-3">
            Видео из Китая
          </p>
          <h2 className="section-title">Посмотрите как мы работаем</h2>
        </div>

        <div className="video-frame">
          <iframe
            src="https://rutube.ru/play/embed/bc207000b508652d0c89bc503cd15ce5/"
            className="absolute inset-0 w-full h-full rounded-xl sm:rounded-2xl"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            loading="lazy"
            title="Видео из Китая"
          />

          <div className="corner corner-tl" />
          <div className="corner corner-tr" />
          <div className="corner corner-bl" />
          <div className="corner corner-br" />

          {/* Decorative grid lines */}
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   WHAT WE BROUGHT
═══════════════════════════════════════════════════════════════════════════ */
const WHAT_WE_BROUGHT = [
  {
    image: 'https://res.cloudinary.com/dtc5ancbn/image/upload/v1776437031/%D0%BA%D0%B8%D1%82_5_lehauh.jpg',
    comment: 'Заказ - Geely Monjaro - Санкт-Петербург',
  },
  {
    image: 'https://res.cloudinary.com/dtc5ancbn/image/upload/v1776437048/%D0%BA%D0%B8%D1%82_4_itdnsi.jpg',
    comment: 'Заказ Toyota Rav 4 - г. Октябрьский(Башкортостан)',
  },
  {
    image: 'https://res.cloudinary.com/dtc5ancbn/image/upload/v1776437054/%D0%BA%D0%B8%D1%82_3_ishhmr.jpg',
    comment: 'Заказ в Новосибирск- Geely Monjaro',
  },
  {
    image: 'https://res.cloudinary.com/dtc5ancbn/image/upload/v1776437063/%D0%BA%D0%B8%D1%821_vcshrs.jpg',
    comment: 'Заказ в Санкт-Петербург:\n- Toyota Hilander 2025г.в.',
  },
  {
    image: 'https://res.cloudinary.com/dtc5ancbn/image/upload/v1776437077/%D0%BA%D0%B8%D1%82_2_kv63fa.jpg',
    comment: 'Заказ в Иркутск - Zeekr 001',
  },
];

function WhatWeBrought() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox(i => i !== null ? (i + 1) % WHAT_WE_BROUGHT.length : null);
      if (e.key === 'ArrowLeft') setLightbox(i => i !== null ? (i - 1 + WHAT_WE_BROUGHT.length) % WHAT_WE_BROUGHT.length : null);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <section className="relative py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-14">
          <div className="divider mb-4" />
          <p className="text-[var(--accent)] text-sm font-semibold tracking-widest uppercase mb-3">
            Наши заказы
          </p>
          <h2 className="section-title">Что мы привозили?</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {WHAT_WE_BROUGHT.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightbox(idx)}
              className={`relative group rounded-2xl overflow-hidden min-h-[180px] sm:min-h-[220px] lg:min-h-[280px] cursor-pointer ${
                idx === 0 ? 'lg:row-span-2 lg:min-h-0' : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.comment}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-[var(--accent)]/30 transition-colors duration-300" />
              {/* Zoom icon hint */}
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <span className="inline-flex items-center gap-1 text-[var(--accent)] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-1 sm:mb-2">
                  <IconStar /> Заказ #{idx + 1}
                </span>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                  {item.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors touch-manipulation"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
            {lightbox + 1} / {WHAT_WE_BROUGHT.length}
          </div>

          {/* Prev button */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + WHAT_WE_BROUGHT.length) % WHAT_WE_BROUGHT.length); }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors touch-manipulation"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % WHAT_WE_BROUGHT.length); }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors touch-manipulation"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>

          {/* Image + Comment */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={WHAT_WE_BROUGHT[lightbox].image}
              alt={WHAT_WE_BROUGHT[lightbox].comment}
              className="max-h-[75vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-3 text-center">
              <span className="inline-flex items-center gap-1 text-[var(--accent)] text-xs font-bold tracking-widest uppercase mb-1">
                <IconStar /> Заказ #{lightbox + 1}
              </span>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {WHAT_WE_BROUGHT[lightbox].comment}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   GUARANTEE
═══════════════════════════════════════════════════════════════════════════ */
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
    <section id="guarantee" className="relative py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">

          {/* Left */}
          <div>
            <div className="divider mb-4" />
            <p className="text-[var(--accent)] text-sm font-semibold tracking-widest uppercase mb-3">
              Гарантия и возврат
            </p>
            <h2 className="section-title mb-4 sm:mb-6">Гарантия и возврат</h2>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed">
              Мы ценим доверие наших партнёров и стараемся, чтобы процесс получения
              запчастей был максимально прозрачным и надёжным.
            </p>
          </div>

          {/* Right — cards */}
          <div className="space-y-3 sm:space-y-4">
            {GUARANTEES.map((g) => (
              <div key={g.title} className={`guarantee-badge ${g.warning ? 'border-orange-500/30 bg-orange-500/5' : ''}`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${g.warning ? 'bg-orange-500/10 text-orange-400' : 'bg-[var(--accent)]/10 text-[var(--accent)]'}`}>
                  {g.icon}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm mb-1">{g.title}</p>
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{g.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   FAQ
═══════════════════════════════════════════════════════════════════════════ */
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
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-14">
          <div className="divider mb-4" />
          <p className="text-[var(--accent)] text-sm font-semibold tracking-widest uppercase mb-3">
            Частые вопросы
          </p>
          <h2 className="section-title">Ответы на популярные вопросы наших клиентов</h2>
        </div>

        <div className="max-w-3xl">
          {FAQS.map((f, i) => (
            <div key={i} className="faq-item py-4 sm:py-5">
              <button
                className="w-full flex items-center justify-between text-left gap-3 sm:gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-sm sm:text-base lg:text-lg">{f.q}</span>
                <IconChevron open={open === i} />
              </button>
              <div className={`faq-answer ${open === i ? 'open' : ''}`}>
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed pt-3 pb-1">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   REQUEST FORM (QUIZ)
═══════════════════════════════════════════════════════════════════════════ */
const SERVICE_OPTIONS = [
  {
    id: 'supplier',
    label: 'Поиск поставщика',
    desc: 'Найдём проверенного производителя и организуем закупку',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    id: 'delivery',
    label: 'Доставка груза из Китая',
    desc: 'Полный цикл доставки любых грузов от двери до двери',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 4v4h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    id: 'parts',
    label: 'Автозапчасти',
    desc: 'Оригинальные запчасти для китайских, корейских и немецких авто',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

function RequestForm({ onOpenPrivacy }: { onOpenPrivacy: () => void }) {
  const [step, setStep] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState({
    service: '',
    details: '',
    name: '',
    phone: '',
    messenger: 'WhatsApp',
    privacyConsent: false,
  });
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const newFiles = Array.from(files);
    const combined = [...images, ...newFiles].slice(0, 5);
    setImages(combined);
    // Generate previews
    combined.forEach((file) => {
      if (!imagePreviews.length || !imagePreviews[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreviews((prev) => {
            const updated = [...prev];
            const idx = combined.indexOf(file);
            if (updated[idx] === undefined) updated[idx] = reader.result as string;
            return updated;
          });
        };
        reader.readAsDataURL(file);
      }
    });
    // Reset file input
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  // Generate previews when images change
  useEffect(() => {
    const newPreviews: string[] = [];
    let pending = images.length;
    if (pending === 0) {
      setImagePreviews([]);
      return;
    }
    images.forEach((file, idx) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        newPreviews[idx] = reader.result as string;
        pending--;
        if (pending === 0) setImagePreviews([...newPreviews]);
      };
      reader.readAsDataURL(file);
    });
  }, [images]);

  const totalSteps = 3;

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
  };

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (step === 0 && !form.service) newErrors.service = 'Выберите тип услуги';
    if (step === 1 && !form.details.trim()) newErrors.details = 'Опишите ваш запрос';
    if (step === 2) {
      if (!form.name.trim()) newErrors.name = 'Введите имя';
      if (!form.phone.trim()) newErrors.phone = 'Введите телефон';
      else if (form.phone.replace(/\D/g, '').length < 7) newErrors.phone = 'Неверный номер телефона';
      if (!form.privacyConsent) newErrors.privacyConsent = 'Необходимо принять политику конфиденциальности';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const goNext = () => {
    if (!validateStep()) return;
    if (step < totalSteps - 1) {
      setStep((s) => s + 1);
      setAnimKey((k) => k + 1);
    } else {
      setSubmitted(true);
    }
  };

  const goBack = () => {
    if (step > 0) {
      setStep((s) => s - 1);
      setAnimKey((k) => k + 1);
      setErrors({});
    }
  };

  return (
    <section id="request" className="relative py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 sm:mb-10">
          <div className="divider mb-4" />
          <p className="text-[var(--accent)] text-sm font-semibold tracking-widest uppercase mb-3">
            Заявка
          </p>
          <h2 className="section-title">Оставьте заявку</h2>
          <p className="text-white/40 text-xs sm:text-sm mt-2 sm:mt-3">Заполните форму — мы свяжемся с вами в течение 30 минут</p>
        </div>

        <div className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute inset-0">
            <div className="cta-glow" />
          </div>

          <div className="relative z-10">
            {!submitted ? (
              <>
                {/* Progress */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="text-white/30 text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
                      Шаг {step + 1} из {totalSteps}
                    </span>
                    <span className="text-white/20 text-[11px] sm:text-xs">
                      {Math.round(((step + 1) / totalSteps) * 100)}%
                    </span>
                  </div>
                  <div className="quiz-progress">
                    <div
                      className="quiz-progress-fill"
                      style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Step content */}
                <div key={animKey} className="quiz-step-enter">
                  {/* Step 0: Service type */}
                  {step === 0 && (
                    <div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2">Что вас интересует?</h3>
                      <p className="text-white/40 text-xs sm:text-sm mb-4 sm:mb-6">Выберите тип услуги</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                        {SERVICE_OPTIONS.map((opt, idx) => (
                          <button
                            key={opt.id}
                            onClick={() => updateField('service', opt.id)}
                            className={`quiz-option ${form.service === opt.id ? 'selected' : ''} ${idx === SERVICE_OPTIONS.length - 1 ? 'sm:col-span-2' : ''}`}
                          >
                            <div className="check-mark">
                              {form.service === opt.id && (
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              )}
                            </div>
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors duration-200 ${
                              form.service === opt.id
                                ? 'bg-[var(--accent)] text-[#050505]'
                                : 'bg-white/5 text-white/40'
                            }`}>
                              {opt.icon}
                            </div>
                            <p className="font-bold text-sm mb-1">{opt.label}</p>
                            <p className="text-white/35 text-xs leading-relaxed">{opt.desc}</p>
                          </button>
                        ))}
                      </div>
                      {errors.service && <p className="quiz-error mt-3">{errors.service}</p>}
                    </div>
                  )}

                  {/* Step 1: Details */}
                  {step === 1 && (
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2">Расскажите подробнее</h3>
                      <p className="text-white/40 text-sm mb-6">
                        {form.service === 'parts' && 'Укажите марку авто, модель и нужные запчасти (или VIN-номер)'}
                        {form.service === 'delivery' && 'Опишите груз: тип, вес, габариты, город отправления и назначения'}
                        {form.service === 'supplier' && 'Что нужно найти и в каком объёме?'}
                        {form.service === 'other' && 'Опишите ваш запрос максимально подробно'}
                      </p>
                      <textarea
                        value={form.details}
                        onChange={(e) => updateField('details', e.target.value)}
                        placeholder={
                          form.service === 'parts'
                            ? 'Например: Chery Tiggo 7 Pro, 2023 г., передние тормозные колодки оригинал...'
                            : form.service === 'delivery'
                            ? 'Например: автозапчасти, ~200 кг, Гуанчжоу → Москва...'
                            : form.service === 'supplier'
                            ? 'Например: производитель светодиодных ламп, от 1000 шт...'
                            : 'Опишите ваш запрос...'
                        }
                        className="quiz-textarea"
                        rows={5}
                      />
                      {errors.details && <p className="quiz-error">{errors.details}</p>}

                      {/* Image upload for parts */}
                      {form.service === 'parts' && (
                        <div className="mt-5">
                          <label className="block text-white/50 text-xs font-semibold mb-2 uppercase tracking-wider">
                            Прикрепите фото запчасти
                          </label>
                          <p className="text-white/25 text-[11px] sm:text-xs mb-3">
                            Выберите до 5 фото (VIN-номер, фото детали, каталог)
                          </p>
                          <div className="flex flex-wrap gap-2 sm:gap-3">
                            {/* Previews */}
                            {imagePreviews.map((src, i) => (
                              <div key={i} className="relative group w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl overflow-hidden border border-white/10">
                                <img src={src} alt={`Фото ${i + 1}`} className="w-full h-full object-cover" />
                                <button
                                  type="button"
                                  onClick={() => removeImage(i)}
                                  className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/70 text-white/80 flex items-center justify-center text-xs opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity hover:bg-red-500/80"
                                >
                                  ✕
                                </button>
                                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white/60 text-[8px] sm:text-[9px] text-center py-0.5 truncate px-1">
                                  {images[i]?.name?.length > 10
                                    ? images[i].name.slice(0, 10) + '...'
                                    : images[i]?.name}
                                </div>
                              </div>
                            ))}
                            {/* Upload button */}
                            {images.length < 5 && (
                              <label className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl border-2 border-dashed border-white/10 hover:border-[var(--accent)]/40 flex flex-col items-center justify-center cursor-pointer transition-all group active:border-[var(--accent)]/40">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 text-white/25 group-hover:text-[var(--accent)]/60 transition-colors">
                                  <line x1="12" y1="5" x2="12" y2="19" />
                                  <polyline points="19 12 12 19 5 12" />
                                </svg>
                                <span className="text-white/20 group-hover:text-white/40 text-[8px] sm:text-[9px] mt-0.5 transition-colors">Фото</span>
                                <input
                                  ref={fileInputRef}
                                  type="file"
                                  accept="image/*"
                                  multiple
                                  onChange={handleImageChange}
                                  className="hidden"
                                />
                              </label>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 2: Contact info */}
                  {step === 2 && (
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2">Контактные данные</h3>
                      <p className="text-white/40 text-sm mb-6">Куда нам написать для уточнения деталей?</p>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-white/50 text-xs font-semibold mb-2 uppercase tracking-wider">
                            Ваше имя
                          </label>
                          <input
                            type="text"
                            value={form.name}
                            onChange={(e) => updateField('name', e.target.value)}
                            placeholder="Иван Иванов"
                            className="quiz-input"
                          />
                          {errors.name && <p className="quiz-error">{errors.name}</p>}
                        </div>

                        <div>
                          <label className="block text-white/50 text-xs font-semibold mb-2 uppercase tracking-wider">
                            Телефон
                          </label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => updateField('phone', e.target.value)}
                            placeholder="+7 (___) ___-__-__"
                            className="quiz-input"
                          />
                          {errors.phone && <p className="quiz-error">{errors.phone}</p>}
                        </div>

                        <div>
                          <label className="block text-white/50 text-xs font-semibold mb-2 uppercase tracking-wider">
                            Удобный мессенджер
                          </label>
                          <div className="grid grid-cols-3 gap-2 sm:gap-3">
                            {['WhatsApp', 'Telegram', 'Звонок'].map((m) => (
                              <button
                                key={m}
                                onClick={() => updateField('messenger', m)}
                                className={`quiz-option min-h-[44px] py-3 text-center !px-2 sm:!px-3 ${form.messenger === m ? 'selected' : ''}`}
                              >
                                <p className="text-[11px] sm:text-sm font-semibold">{m}</p>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Privacy consent checkbox */}
                        <div className="pt-2">
                          <div className="flex items-start gap-3">
                            <button
                              type="button"
                              onClick={() => {
                                const newVal = !form.privacyConsent;
                                setForm((prev) => ({ ...prev, privacyConsent: newVal }));
                                if (errors.privacyConsent) setErrors((prev) => { const n = { ...prev }; delete n.privacyConsent; return n; });
                              }}
                              className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all mt-0.5 cursor-pointer ${
                                form.privacyConsent
                                  ? 'bg-[var(--accent)] border-[var(--accent)]'
                                  : 'border-white/20 hover:border-white/40'
                              }`}
                            >
                              {form.privacyConsent && (
                                <svg viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              )}
                            </button>
                            <span className="text-white/50 text-xs sm:text-sm leading-relaxed">
                              Я согласен с обработкой моих персональных данных и принимаю{' '}
                              <button
                                type="button"
                                onClick={onOpenPrivacy}
                                className="text-[var(--accent)] hover:underline underline-offset-2 font-medium"
                              >
                                Политику конфиденциальности
                              </button>
                            </span>
                          </div>
                          {errors.privacyConsent && <p className="quiz-error mt-2">{errors.privacyConsent}</p>}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Navigation */}
                <div className="quiz-nav flex items-center justify-between mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/6">
                  {step > 0 ? (
                    <button
                      onClick={goBack}
                      className="btn-ghost min-h-[44px] px-4 sm:px-5 py-3 text-sm"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 rotate-180">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                      Назад
                    </button>
                  ) : (
                    <div />
                  )}
                  <button onClick={goNext} className="btn-accent min-h-[44px] px-6 sm:px-8 py-3 text-sm">
                    {step === totalSteps - 1 ? 'Отправить заявку' : 'Далее'}
                    <IconArrow />
                  </button>
                </div>
              </>
            ) : (
              /* Success screen */
              <div className="quiz-success-enter text-center py-6 sm:py-8">
                <div className="success-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-10 sm:h-10">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-2 sm:mb-3">Заявка отправлена!</h3>
                <p className="text-white/50 text-xs sm:text-sm max-w-md mx-auto mb-4 sm:mb-6 leading-relaxed px-2">
                  Спасибо за обращение! Наш менеджер свяжется с вами
                  через <span className="text-[var(--accent)] font-semibold">{form.messenger}</span> в течение 30 минут.
                </p>
                <div className="glass rounded-xl p-3 sm:p-4 inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-white/50">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center">
                      <IconPhone />
                    </div>
                    <span>Или позвоните:</span>
                  </div>
                  <a href={`tel:${PHONES[0].replace(/[^\d+]/g, '')}`} className="font-bold hover:text-[var(--accent)] transition-colors">
                    {PHONES[0]}
                  </a>
                </div>
                <div className="mt-4 sm:mt-6">
                  <button
                    onClick={() => {
                      setStep(0);
                      setForm({ service: '', details: '', name: '', phone: '', messenger: 'WhatsApp', privacyConsent: false });
                      setSubmitted(false);
                      setAnimKey((k) => k + 1);
                    }}
                    className="btn-ghost px-5 sm:px-6 py-2.5 text-xs sm:text-sm"
                  >
                    Отправить ещё одну заявку
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   CONTACTS
═══════════════════════════════════════════════════════════════════════════ */
function Contacts() {
  return (
    <section id="contacts" className="relative py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-14">
          <div className="divider mb-4" />
          <p className="text-[var(--accent)] text-sm font-semibold tracking-widest uppercase mb-3">
            Контакты
          </p>
          <h2 className="section-title">Контакты</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 sm:gap-6">

          {/* Phones */}
          <div className="contact-card">
            <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center mb-4">
              <IconPhone />
            </div>
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-3">Телефоны</p>
            <div className="space-y-2">
              {PHONES.map(p => (
                <a key={p} href={`tel:${p.replace(/[^\d+]/g, '')}`} className="block text-sm hover:text-[var(--accent)] transition-colors">
                  {p}
                </a>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className="contact-card">
            <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center mb-4">
              <IconMail />
            </div>
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-3">Email</p>
            <a href="mailto:kitrade@bk.ru" className="text-sm hover:text-[var(--accent)] transition-colors">
              kitrade@bk.ru
            </a>
          </div>

          {/* Address */}
          <div className="contact-card">
            <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center mb-4">
              <IconMap />
            </div>
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-3">Адрес</p>
            <p className="text-sm text-white/70">
              г. Барнаул, пр-т. Ленина д. 3
            </p>
          </div>

          {/* Requisites */}
          <div className="contact-card">
            <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center mb-4">
              <IconDoc />
            </div>
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-3">Реквизиты</p>
            <div className="text-sm text-white/70 space-y-1">
              <p className="font-semibold text-white/80">
                ИП Заварзин Дмитрий Александрович
              </p>
              <p>ИНН: 041000625377</p>
              <p>ОГРНИП: 325040000001470</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════════════════════════════════ */
function Footer({ onOpenPrivacy }: { onOpenPrivacy: () => void }) {
  return (
    <footer className="border-t border-white/5 py-6 sm:py-8" style={{ paddingBottom: 'calc(24px + env(safe-area-inset-bottom, 0px))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <a href="#" className="flex items-center gap-2">
            <img
              src="https://res.cloudinary.com/dtc5ancbn/image/upload/q_100/v1776353780/noroot.png_sqb5vc.webp"
              alt="Китрейд"
              className="h-5 sm:h-7 w-auto object-contain"
            />
          </a>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <button
              onClick={onOpenPrivacy}
              className="text-white/30 text-xs hover:text-[var(--accent)] transition-colors underline underline-offset-2"
            >
              Политика конфиденциальности
            </button>
            <p className="text-white/30 text-xs">© {new Date().getFullYear()} Китрейд. Все права защищены.</p>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-white/5 text-center">
          <p className="text-white/20 text-[10px] sm:text-xs">ИП Заварзин Дмитрий Александрович &middot; ИНН: 041000625377 &middot; ОГРНИП: 325040000001470</p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   APP ROOT
═══════════════════════════════════════════════════════════════════════════ */
export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const openPrivacy = () => setPrivacyOpen(true);
  const closePrivacy = () => setPrivacyOpen(false);

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Header />
      <Hero />
      <Advantages />
      <About />
      <CarGallery />
      <VideoSection />
      <WhatWeBrought />
      <Guarantee />
      <FAQ />
      <RequestForm onOpenPrivacy={openPrivacy} />
      <Contacts />
      <Footer onOpenPrivacy={openPrivacy} />
      <PrivacyModal isOpen={privacyOpen} onClose={closePrivacy} />
    </div>
  );
}
