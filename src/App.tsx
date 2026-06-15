import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  FileText, 
  Calendar, 
  AlertTriangle, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight, 
  Check, 
  Globe, 
  Menu, 
  X, 
  Sparkles, 
  Mail, 
  Scale, 
  Receipt, 
  Building2, 
  Truck, 
  Activity, 
  Landmark, 
  CheckCircle2,
  ChevronDown,
  BarChart3,
  MessageSquare,
  Target
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './components/Logo';
import { translations } from './translations';

export default function App() {
  const [lang, setLang] = useState<'de' | 'en' | 'zh' | 'es' | 'fr'>('de');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<'demo' | 'question'>('demo');
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Track scroll position to update the progress bar at the top of the navbar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Form values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Highlight packages interaction
  const [activeHeroPkg, setActiveHeroPkg] = useState<string | null>(null);
  const [highlightedCardId, setHighlightedCardId] = useState<string | null>(null);

  const t = translations[lang] || translations.de;

  const pkgs = [
    { id: 'pkg-card-sales', badgeNum: 1, p: t.p1, icon: Target },
    { id: 'pkg-card-finance', badgeNum: 2, p: t.p2, icon: Receipt },
    { id: 'pkg-card-bi', badgeNum: 3, p: t.p3, icon: BarChart3 },
  ];

  const handleLangChange = (newLang: 'de' | 'en' | 'zh' | 'es' | 'fr', e: React.MouseEvent) => {
    e.preventDefault();
    setLang(newLang);
  };

  const handleOpenModal = (type: 'demo' | 'question', pkgName: string | null = null) => {
    setFormType(type);
    setSelectedPkg(pkgName);
    setIsFormOpen(true);
    setIsSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSending(true);
    // Simulate real database or API push
    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      // Reset form variables
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
    }, 1500);
  };

  // Scroll to package section and highlight
  const scrollToPackageAndHighlight = (cardId: string, pkgName: string) => {
    setHighlightedCardId(cardId);
    const element = document.getElementById('packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Fade out highlight after some time
    setTimeout(() => {
      setHighlightedCardId(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-brand-white text-brand-black selection:bg-accent/30 flex flex-col pt-[68px]">
      
      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-brand-white/92 backdrop-blur-md border-b border-brand-black/8 px-[5%] flex items-center justify-between h-[68px]" id="navbar">
        {/* Scroll Progress Bar at the very top */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-black/5" id="scroll-progress-bg">
          <div 
            className="h-full bg-accent transition-all duration-75 ease-out" 
            style={{ width: `${scrollProgress}%` }}
            id="scroll-progress-bar"
          />
        </div>

        <a href="#" className="flex items-center" id="logo-nav-link">
          <Logo className="h-[44px] w-auto object-contain" />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-[28px] list-none" id="nav-desktop-links">
          <li>
            <a href="#how" className="text-[13px] text-brand-muted hover:text-brand-black font-medium transition-colors font-sans" id="nav-link-how">
              {t.nav.howItWorks}
            </a>
          </li>
          <li>
            <a href="#packages" className="text-[13px] text-brand-muted hover:text-brand-black font-medium transition-colors font-sans" id="nav-link-packages">
              {t.nav.packages}
            </a>
          </li>
          <li>
            <a href="#use" className="text-[13px] text-brand-muted hover:text-brand-black font-medium transition-colors font-sans" id="nav-link-usecases">
              {t.nav.useCases}
            </a>
          </li>
          <li>
            <a href="#contact" className="text-[13px] text-brand-muted hover:text-brand-black font-medium transition-colors font-sans" id="nav-link-contact">
              {t.nav.contact}
            </a>
          </li>
        </ul>

        {/* Right Nav Options */}
        <div className="hidden lg:flex items-center gap-[16px]" id="nav-right-options">
          
          {/* Custom Elegant Lang Switcher */}
          <div className="flex gap-1 bg-brand-black/5 p-1 rounded-lg" id="desktop-lang-switcher">
            <button 
              onClick={(e) => handleLangChange('de', e)} 
              className={`text-[12px] px-2.5 py-1 rounded-md font-medium transition-all cursor-pointer flex items-center gap-1 ${lang === 'de' ? 'bg-accent text-white shadow-sm' : 'text-brand-muted hover:text-brand-black'}`}
              id="lang-de-btn"
            >
              <span>🇩🇪</span> <span className="text-[11px] font-semibold">DE</span>
            </button>
            <button 
              onClick={(e) => handleLangChange('en', e)} 
              className={`text-[12px] px-2.5 py-1 rounded-md font-medium transition-all cursor-pointer flex items-center gap-1 ${lang === 'en' ? 'bg-accent text-white shadow-sm' : 'text-brand-muted hover:text-brand-black'}`}
              id="lang-en-btn"
            >
              <span>🇬🇧</span> <span className="text-[11px] font-semibold">EN</span>
            </button>
            <button 
              onClick={(e) => handleLangChange('zh', e)} 
              className={`text-[12px] px-2.5 py-1 rounded-md font-medium transition-all cursor-pointer flex items-center gap-1 ${lang === 'zh' ? 'bg-accent text-white shadow-sm' : 'text-brand-muted hover:text-brand-black'}`}
              id="lang-zh-btn"
            >
              <span>🇨🇳</span> <span className="text-[11px] font-semibold">ZH</span>
            </button>
            <button 
              onClick={(e) => handleLangChange('es', e)} 
              className={`text-[12px] px-2.5 py-1 rounded-md font-medium transition-all cursor-pointer flex items-center gap-1 ${lang === 'es' ? 'bg-accent text-white shadow-sm' : 'text-brand-muted hover:text-brand-black'}`}
              id="lang-es-btn"
            >
              <span>🇪🇸</span> <span className="text-[11px] font-semibold">ES</span>
            </button>
            <button 
              onClick={(e) => handleLangChange('fr', e)} 
              className={`text-[12px] px-2.5 py-1 rounded-md font-medium transition-all cursor-pointer flex items-center gap-1 ${lang === 'fr' ? 'bg-accent text-white shadow-sm' : 'text-brand-muted hover:text-brand-black'}`}
              id="lang-fr-btn"
            >
              <span>🇫🇷</span> <span className="text-[11px] font-semibold">FR</span>
            </button>
          </div>

          <button 
            onClick={() => handleOpenModal('demo')} 
            className="bg-brand-black text-brand-white hover:bg-accent border-none px-5 py-2.5 rounded-lg text-[13px] font-semibold cursor-pointer transition-colors font-sans shadow-md shadow-brand-black/5"
            id="nav-cta-btn"
          >
            {t.nav.cta}
          </button>
        </div>

        {/* Mobile Toggle & Options */}
        <div className="flex lg:hidden items-center gap-3" id="nav-mobile-toggle-wrapper">
          <button 
            onClick={() => handleOpenModal('demo')} 
            className="md:inline-block bg-brand-black text-brand-white px-3.5 py-2 rounded-lg text-[12px] font-semibold cursor-pointer transition-colors font-sans"
            id="mobile-nav-cta-btn"
          >
            {t.nav.cta}
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="p-1 text-brand-black hover:text-accent cursor-pointer"
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE NAV MENU */}
      <AnimatePresence id="mobile-menu-presence">
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] left-0 w-full bg-brand-white border-b border-brand-black/8 z-40 lg:hidden px-[5%] py-6 flex flex-col gap-6 shadow-xl"
            id="mobile-links-container"
          >
            <ul className="flex flex-col gap-4 list-none" id="mobile-links-list">
              <li>
                <a 
                  href="#how" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[15px] text-brand-muted hover:text-brand-black font-semibold transition-colors font-sans"
                  id="mobile-link-how"
                >
                  {t.nav.howItWorks}
                </a>
              </li>
              <li>
                <a 
                  href="#packages" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[15px] text-brand-muted hover:text-brand-black font-semibold transition-colors font-sans"
                  id="mobile-link-packages"
                >
                  {t.nav.packages}
                </a>
              </li>
              <li>
                <a 
                  href="#use" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[15px] text-brand-muted hover:text-brand-black font-semibold transition-colors font-sans"
                  id="mobile-link-usecases"
                >
                  {t.nav.useCases}
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[15px] text-brand-muted hover:text-brand-black font-semibold transition-colors font-sans"
                  id="mobile-link-contact"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>

            <div className="h-[0.5px] bg-brand-black/8 my-1" id="mobile-menu-divider" />

            {/* Language switches in mobile */}
            <div className="flex flex-wrap gap-2.5 items-center" id="mobile-languages-switcher">
              <span className="text-[12px] text-brand-muted font-medium font-sans flex items-center gap-1">
                <Globe size={14} className="text-accent" /> Language:
              </span>
              <button 
                onClick={(e) => { handleLangChange('de', e); setMobileMenuOpen(false); }}
                className={`text-[12px] px-2.5 py-1.5 rounded-md font-semibold ${lang === 'de' ? 'bg-accent-light text-accent-dim' : 'bg-brand-black/5 text-brand-muted'}`}
                id="mob-lang-de"
              >
                🇩🇪 DE
              </button>
              <button 
                onClick={(e) => { handleLangChange('en', e); setMobileMenuOpen(false); }}
                className={`text-[12px] px-2.5 py-1.5 rounded-md font-semibold ${lang === 'en' ? 'bg-accent-light text-accent-dim' : 'bg-brand-black/5 text-brand-muted'}`}
                id="mob-lang-en"
              >
                🇬🇧 EN
              </button>
              <button 
                onClick={(e) => { handleLangChange('zh', e); setMobileMenuOpen(false); }}
                className={`text-[12px] px-2.5 py-1.5 rounded-md font-semibold ${lang === 'zh' ? 'bg-accent-light text-accent-dim' : 'bg-brand-black/5 text-brand-muted'}`}
                id="mob-lang-zh"
              >
                🇨🇳 中文
              </button>
              <button 
                onClick={(e) => { handleLangChange('es', e); setMobileMenuOpen(false); }}
                className={`text-[12px] px-2.5 py-1.5 rounded-md font-semibold ${lang === 'es' ? 'bg-accent-light text-accent-dim' : 'bg-brand-black/5 text-brand-muted'}`}
                id="mob-lang-es"
              >
                🇪🇸 ES
              </button>
              <button 
                onClick={(e) => { handleLangChange('fr', e); setMobileMenuOpen(false); }}
                className={`text-[12px] px-2.5 py-1.5 rounded-md font-semibold ${lang === 'fr' ? 'bg-accent-light text-accent-dim' : 'bg-brand-black/5 text-brand-muted'}`}
                id="mob-lang-fr"
              >
                🇫🇷 FR
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="px-[5%] py-12 md:py-24 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center" id="hero">
        <div className="lg:col-span-7 flex flex-col items-start" id="hero-left-content">
          <div className="inline-flex items-center gap-2 bg-accent-light text-accent-dim text-[12px] font-semibold tracking-wide px-3.5 py-1.5 rounded-full mb-6 font-sans border border-accent/10" id="hero-badge-container">
            <Sparkles size={14} className="text-accent animate-pulse" />
            {t.hero.badge}
          </div>
          <h1 className="font-display text-[44px] md:text-[54px] lg:text-[62px] font-extrabold leading-[1.12] tracking-tight text-brand-black mb-6" id="hero-heading">
            {t.hero.titleFirst}
            <span className="text-accent relative inline-block transition-transform duration-300 hover:scale-[1.03]">
              {t.hero.titleAccent}
            </span>
            {t.hero.titleLast}
          </h1>
          <p className="text-[17px] sm:text-[18px] text-brand-muted font-light leading-[1.7] max-w-[490px] mb-10 font-sans" id="hero-subtext">
            {t.hero.sub}
          </p>
          <div className="flex flex-wrap gap-4 items-center" id="hero-actions-container">
            <a 
              href="#packages" 
              className="bg-brand-black text-brand-white hover:bg-accent px-7 py-3.5 rounded-xl text-[15px] font-semibold inline-flex items-center gap-2 transition-all hover:-translate-y-0.5 shadow-lg shadow-brand-black/10 font-sans cursor-pointer"
              id="hero-primary-btn"
            >
              {t.hero.btnPrimary} 
              <ArrowRight size={16} />
            </a>
            <a 
              href="#how" 
              className="text-brand-black hover:text-accent text-[15px] font-semibold inline-flex items-center gap-1 border-b-2 border-brand-black hover:border-accent pb-0.5 transition-colors font-sans cursor-pointer"
              id="hero-secondary-btn"
            >
              {t.hero.btnSecondary} 
              <ChevronRight size={16} />
            </a>
          </div>
        </div>

        {/* HERO VISUAL - DIGITAL CONTROL PANEL */}
        <div className="lg:col-span-5 bg-brand-card border border-brand-black/8 rounded-2xl p-6.5 shadow-xl shadow-brand-black/5 relative group transition-all" id="hero-visual-card">
          <div className="absolute top-4 right-4 flex gap-1.5" id="visual-dots">
            <span className="w-2 h-2 rounded-full bg-red-400" />
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <span className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <div className="text-[11.5px] font-bold tracking-widest text-brand-muted uppercase mb-4.5 font-sans" id="visual-label">
            {t.hero.visualTitle}
          </div>

          <div className="flex flex-col gap-1.5 max-h-[300px] overflow-y-auto pr-1" id="visual-packages-list">
            {pkgs.map((pkg) => {
              const IconComp = pkg.icon;
              return (
                <div 
                  key={pkg.id}
                  onClick={() => scrollToPackageAndHighlight(pkg.id, pkg.p.name)}
                  className="flex items-center gap-3 p-2 border-b border-brand-black/4 last:border-0 cursor-pointer rounded-lg hover:bg-accent-light transition-all-custom"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center shrink-0 text-accent">
                    <IconComp size={15} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-bold text-brand-black truncate">{pkg.p.name}</div>
                    <div className="text-[11px] text-brand-muted">CHF {pkg.p.price} / {t.modal.monthSuffix}</div>
                  </div>
                  <ChevronRight size={14} className="text-accent shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>
              );
            })}
          </div>

          {/* Golden Bundle Callout */}
          <div 
            onClick={() => scrollToPackageAndHighlight('pkg-card-bundle', 'Bundle')}
            className="mt-4 bg-brand-black rounded-xl p-3.5 flex items-center justify-between cursor-pointer border border-accent/20 hover:border-accent transition-all-custom hover:shadow-lg relative z-10"
            id="visual-row-bundle"
          >
            <div>
              <div className="font-display text-[13.5px] font-bold text-white mb-0.5">{t.hero.all4Packages}</div>
              <div className="text-[10.5px] text-accent font-semibold">{t.hero.youSave}</div>
            </div>
            <div className="font-display text-[18px] font-extrabold text-accent">CHF 490</div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-brand-black text-brand-white py-10 px-[5%]" id="stats">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10" id="stats-grid">
          <div className="text-center pt-6 md:pt-0" id="stat-1">
            <div className="font-display text-[38px] sm:text-[44px] font-extrabold text-accent leading-none mb-2">{t.stats.lessWork}</div>
            <div className="text-[13px] text-white/50 font-sans font-light tracking-wide">{t.stats.lessWorkLabel}</div>
          </div>
          <div className="text-center pt-6 md:pt-0" id="stat-2">
            <div className="font-display text-[38px] sm:text-[44px] font-extrabold text-accent leading-none mb-2">{t.stats.packagesCount}</div>
            <div className="text-[13px] text-white/50 font-sans font-light tracking-wide">{t.stats.packagesCountLabel}</div>
          </div>
          <div className="text-center pt-6 md:pt-0" id="stat-3">
            <div className="font-display text-[38px] sm:text-[44px] font-extrabold text-accent leading-none mb-2">{t.stats.compliant}</div>
            <div className="text-[13px] text-white/50 font-sans font-light tracking-wide">{t.stats.compliantLabel}</div>
          </div>
          <div className="text-center pt-6 md:pt-0" id="stat-4">
            <div className="font-display text-[38px] sm:text-[44px] font-extrabold text-accent leading-none mb-2">{t.stats.uptime}</div>
            <div className="text-[13px] text-white/50 font-sans font-light tracking-wide">{t.stats.uptimeLabel}</div>
          </div>
        </div>
      </section>

      {/* METHOD SECTION (HOW IT WORKS) */}
      <section className="px-[5%] py-24 max-w-[1200px] mx-auto scroll-mt-20" id="how">
        <div className="text-accent text-[11px] font-bold tracking-[2px] uppercase mb-4 font-sans" id="how-tag">
          {t.method.tag}
        </div>
        <h2 className="font-display text-[32px] md:text-[42px] font-extrabold tracking-tight leading-[1.15] mb-4" id="how-heading">
          {t.method.title}
        </h2>
        <p className="text-[17px] text-brand-muted font-light max-w-[580px] mb-16 font-sans" id="how-lead">
          {t.method.lead}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20" id="how-grid">
          {/* Left Flow Column */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-brand-black/8" id="how-flow-steps">
            
            {/* Step 1 */}
            <div className="flex gap-5 py-6 first:pt-0 last:pb-0" id="flow-step-1">
              <div className="w-11 h-11 rounded-xl bg-accent-light shrink-0 flex items-center justify-center text-accent">
                <Target size={20} />
              </div>
              <div className="font-sans" id="flow-content-1">
                <h3 className="font-display text-[16.5px] font-bold text-brand-black mb-1">{t.p1.name}</h3>
                <p className="text-[14px] text-brand-muted leading-relaxed">
                  {lang === 'de' && "Automatische Lead-Generierung, lückenlose Firmenrecherche und personalisierter Outreach zur Gewinnung neuer Kunden & Termine."}
                  {lang === 'en' && "Automated B2B lead generation, in-depth corporate profiling, and personalized smart outreach to capture quality clients and booked meetings."}
                  {lang === 'zh' && "自适应客资挖掘、细致企业背景检索与定制触发，赋能更优客户触达与实效预约会议。"}
                  {lang === 'es' && "Generación sistemática de leads, mapeo comercial avanzado y mensajes inteligentes de primer contacto para captar clientes en vivo."}
                  {lang === 'fr' && "Génération de leads, profilage approfondi des cibles et prospection sur-mesure pour conclure de nouveaux mandats."}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-5 py-6 last:pb-0" id="flow-step-2">
              <div className="w-11 h-11 rounded-xl bg-accent-light shrink-0 flex items-center justify-center text-accent">
                <Receipt size={20} />
              </div>
              <div className="font-sans" id="flow-content-2">
                <h3 className="font-display text-[16.5px] font-bold text-brand-black mb-1">{t.p2.name}</h3>
                <p className="text-[14px] text-brand-muted leading-relaxed">
                  {lang === 'de' && "Intelligentes Auslesen von Belegen und Rechnungen, automatisiertes Sortieren und fehlerfreie Buchungserstellung zur direkten Treuhänder-Übergabe."}
                  {lang === 'en' && "AI invoice and voucher reading, multi-language sorting, and seamless accountant integration to minimize cost & human error."}
                  {lang === 'zh' && "全格式票证与单据结构化读取，智能自动分类，杜绝入账人工错漏并无缝归集理账。"}
                  {lang === 'es' && "Extracción automática de datos de tickets y facturas, ordenación instantánea de partidas y propuestas de asientos de gran precisión."}
                  {lang === 'fr' && "Numérisation de justificatifs et d'achats, classement automatique de pièces et propositions d'écritures pour simplifier vos bilans."}
                </p>
              </div>
            </div>
                   {/* Step 3 */}
            <div className="flex gap-5 py-6 last:pb-0" id="flow-step-3">
              <div className="w-11 h-11 rounded-xl bg-accent-light shrink-0 flex items-center justify-center text-accent">
                <BarChart3 size={20} />
              </div>
              <div className="font-sans" id="flow-content-3">
                <h3 className="font-display text-[16.5px] font-bold text-brand-black mb-1">{t.p3.name}</h3>
                <p className="text-[14px] text-brand-muted leading-relaxed">
                  {lang === 'de' && "Vollständige KPI-Transparenz auf interaktiven Dashboards sowie vorausschauende Forecasts und Mustererkennung auf Knopfdruck."}
                  {lang === 'en' && "Absolute KPI transparency on real-time dashboards combined with advanced custom forecasting models and data trend analysis."}
                  {lang === 'zh' && "数据多维展现与KPI透明化主控面板，为您提供智能商业走向预测与大数据深度辅助。"}
                  {lang === 'es' && "Visualización integral de KPI corporativos, reconocimiento de patrones de transacciones y análisis predictivo de mercados."}
                  {lang === 'fr' && "Indicateurs de pilotage de KPI en direct, détection automatique de corrélations de données et projections d'activité fiables."}
                </p>
              </div>
            </div>

          </div>

          {/* Right Theory/Philosophy Sticky card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 bg-brand-black text-brand-white rounded-2xl p-8 shadow-xl" id="how-sticky-card">
            <h3 className="font-display text-[22px] font-extrabold mb-6" id="sticky-title">
              {t.method.whyTitle}
            </h3>

            <div className="space-y-6" id="sticky-advantages">
              <div className="flex gap-4 shrink-0" id="advantage-item-1">
                <span className="text-2xl mt-0.5" role="img" aria-label="robot">🤖</span>
                <div className="font-sans">
                  <h4 className="font-semibold text-white leading-relaxed text-[15px]">{t.method.advantage1Title}</h4>
                  <p className="text-[13px] text-white/60 leading-relaxed mt-1">{t.method.advantage1Desc}</p>
                </div>
              </div>

              <div className="flex gap-4 shrink-0" id="advantage-item-2">
                <span className="text-2xl mt-0.5" role="img" aria-label="brain">🧠</span>
                <div className="font-sans">
                  <h4 className="font-semibold text-white leading-relaxed text-[15px]">{t.method.advantage2Title}</h4>
                  <p className="text-[13px] text-white/60 leading-relaxed mt-1">{t.method.advantage2Desc}</p>
                </div>
              </div>

              <div className="flex gap-4 shrink-0" id="advantage-item-3">
                <span className="text-2xl mt-0.5" role="img" aria-label="chart">📈</span>
                <div className="font-sans">
                  <h4 className="font-semibold text-white leading-relaxed text-[15px]">{t.method.advantage3Title}</h4>
                  <p className="text-[13px] text-white/60 leading-relaxed mt-1">{t.method.advantage3Desc}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-accent p-4 rounded-xl text-[15px] font-extrabold text-white font-display text-center shadow-lg" id="sticky-quote">
              {t.method.highlight}
            </div>
          </div>

        </div>
      </section>

      {/* PACKAGES PRICING SECTION */}
      <section className="bg-brand-alt py-20 px-[5%] scroll-mt-20 border-y border-brand-black/5" id="packages">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-accent text-[11px] font-bold tracking-[2px] uppercase mb-4 font-sans text-center md:text-left" id="packages-tag">
            {t.packs.tag}
          </div>
          <h2 className="font-display text-[32px] md:text-[42px] font-extrabold tracking-tight leading-[1.15] mb-4 text-center md:text-left" id="packages-heading">
            {t.packs.title}
          </h2>
          <p className="text-[17px] text-brand-muted font-light max-w-[580px] mb-16 font-sans text-center md:text-left" id="packages-lead">
            {t.packs.lead}
          </p>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" id="packages-grid">
            {pkgs.map((pkg) => {
              const IconComp = pkg.icon;
              const isHighlighted = highlightedCardId === pkg.id;
              return (
                <div 
                  key={pkg.id}
                  className={`bg-brand-card border rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 relative hover:shadow-xl hover:-translate-y-1 ${isHighlighted ? 'ring-4 ring-accent shadow-2xl border-accent scale-[1.02]' : 'border-brand-black/8'}`}
                  id={pkg.id}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="text-[11px] font-bold tracking-[2.5px] uppercase text-brand-muted font-sans">
                        {lang === 'zh' ? `套件 ${pkg.badgeNum}` : lang === 'es' ? `Paquete ${pkg.badgeNum}` : lang === 'fr' ? `Forfait ${pkg.badgeNum}` : `Paket ${pkg.badgeNum}`}
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center shrink-0 text-accent" id={`pkg-${pkg.badgeNum}-icon-wrapper`}>
                        <IconComp size={15} />
                      </div>
                    </div>
                    <h3 className="font-display text-[20px] font-extrabold text-brand-black leading-tight mb-2 min-h-[48px] flex items-center" id={`pkg-${pkg.badgeNum}-heading`}>
                      {pkg.p.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mt-4 mb-1" id={`pkg-${pkg.badgeNum}-price-row`}>
                      <span className="text-[15px] font-semibold text-brand-muted">CHF</span>
                      <span className="font-display text-[32px] font-extrabold text-accent leading-none">{pkg.p.price}</span>
                    </div>
                    <div className="text-[12px] text-brand-muted mb-6">
                      {t.packs.monthlyCancelable}
                    </div>
                    <div className="h-[0.5px] bg-brand-black/8 mb-6" />

                    <ul className="flex flex-col gap-3 list-none mb-8" id={`pkg-${pkg.badgeNum}-features`}>
                      {pkg.p.features.map((feat, index) => (
                        <li key={index} className="flex gap-2.5 text-[13px] text-brand-black leading-snug items-start">
                          <Check size={14} className="text-accent shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={() => handleOpenModal('demo', pkg.p.name)}
                    className="w-full text-center py-3 rounded-xl text-[13.5px] font-semibold transition-all-custom border border-accent text-accent hover:bg-accent hover:text-white bg-transparent cursor-pointer font-sans"
                    id={`pkg-${pkg.badgeNum}-purchase-btn`}
                  >
                    {t.packs.startNow}
                  </button>
                </div>
              );
            })}
          </div>

          {/* AMAZING BUNDLE CARD */}
          <div 
            className={`bg-brand-black text-brand-white rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative overflow-hidden transition-all duration-300 ${highlightedCardId === 'pkg-card-bundle' ? 'ring-4 ring-accent shadow-2xl scale-[1.01]' : ''}`}
            id="pkg-card-bundle"
          >
            {/* Ambient emerald aesthetic lighting glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/20 to-transparent pointer-events-none z-0" />

            <div className="lg:col-span-5 relative z-10" id="bundle-info">
              <div className="inline-flex items-center gap-1.5 bg-accent text-white text-[11px] font-extrabold tracking-[1px] px-3.5 py-1.5 rounded-full mb-6 uppercase" id="bundle-badge">
                <Sparkles size={13} className="text-white animate-pulse" />
                {t.packs.bestOffer}
              </div>
              <h3 className="font-display text-[26px] sm:text-[32px] font-extrabold leading-[1.1] mb-2">{t.hero.all4Packages}</h3>
              <div className="text-[14px] text-accent font-semibold tracking-wide mb-6">{t.packs.bundleSave}</div>
              
              <div className="flex items-baseline gap-1.5 mb-1" id="bundle-price-row">
                <span className="text-[18px] text-white/50">CHF</span>
                <span className="font-display text-[48px] sm:text-[56px] font-extrabold text-accent leading-none">490</span>
              </div>
              <div className="text-[13px] text-white/40 mb-8 font-sans">
                {t.packs.insteadOf}
              </div>

              <button 
                onClick={() => handleOpenModal('demo', 'Bundle - All 3 AI packages')}
                className="bg-accent text-white hover:bg-white hover:text-brand-black font-semibold text-[15px] px-8 py-4 rounded-xl transition-all shadow-lg shadow-accent/15 font-sans cursor-pointer"
                id="bundle-cta-btn"
              >
                {t.packs.bundleRequest}
              </button>
            </div>

            <div className="lg:col-span-7 relative z-10" id="bundle-features-wrapper">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3.5 list-none font-sans" id="bundle-features-list">
                <li className="flex gap-2 text-[14px] text-white/70 items-start">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <span>{t.p1.name}</span>
                </li>
                <li className="flex gap-2 text-[14px] text-white/70 items-start">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <span>{t.p2.name}</span>
                </li>
                <li className="flex gap-2 text-[14px] text-white/70 items-start">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <span>{t.p3.name}</span>
                </li>
                <li className="flex gap-2 text-[14px] text-white/70 items-start">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <span>{t.packs.serviceAccount}</span>
                </li>
                <li className="flex gap-2 text-[14px] text-white/70 items-start">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <span>{t.packs.uptime}</span>
                </li>
                <li className="flex gap-2 text-[14px] text-white/70 items-start">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <span>{t.packs.whiteLabel}</span>
                </li>
                <li className="flex gap-2 text-[14px] text-white/70 items-start">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <span>{t.packs.apiIntegration}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* USE CASES / BRANCHEN SECTION */}
      <section className="px-[5%] py-24 max-w-[1200px] mx-auto scroll-mt-20" id="use">
        <div className="text-accent text-[11px] font-bold tracking-[2px] uppercase mb-4 font-sans text-center md:text-left" id="usecases-tag">
          {t.useCases.tag}
        </div>
        <h2 className="font-display text-[32px] md:text-[42px] font-extrabold tracking-tight leading-[1.15] mb-4 text-center md:text-left" id="usecases-heading">
          {t.useCases.title}
        </h2>
        <p className="text-[17px] text-brand-muted font-light max-w-[580px] mb-16 font-sans text-center md:text-left" id="usecases-lead">
          {t.useCases.lead}
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="usecases-grid">
          
          {/* Card 1: Treuhand */}
          <div className="bg-brand-card border border-brand-black/8 rounded-2xl p-7 transition-shadow hover:shadow-lg" id="use-box-1">
            <div className="w-12 h-12 rounded-xl bg-accent-light shrink-0 flex items-center justify-center mb-5" id="use-box-icon-1">
              <Landmark size={22} className="text-accent-dim" />
            </div>
            <h3 className="font-display text-[16px] font-bold text-brand-black mb-2">{t.useCases.items[0].title}</h3>
            <p className="text-[14px] text-brand-muted leading-relaxed">{t.useCases.items[0].desc}</p>
          </div>

          {/* Card 2: Finanzabteilungen */}
          <div className="bg-brand-card border border-brand-black/8 rounded-2xl p-7 transition-shadow hover:shadow-lg" id="use-box-2">
            <div className="w-12 h-12 rounded-xl bg-accent-light shrink-0 flex items-center justify-center mb-5" id="use-box-icon-2">
              <Receipt size={22} className="text-accent-dim" />
            </div>
            <h3 className="font-display text-[16px] font-bold text-brand-black mb-2">{t.useCases.items[1].title}</h3>
            <p className="text-[14px] text-brand-muted leading-relaxed">{t.useCases.items[1].desc}</p>
          </div>

          {/* Card 3: Rechtskanzlei */}
          <div className="bg-brand-card border border-brand-black/8 rounded-2xl p-7 transition-shadow hover:shadow-lg" id="use-box-3">
            <div className="w-12 h-12 rounded-xl bg-accent-light shrink-0 flex items-center justify-center mb-5" id="use-box-icon-3">
              <Scale size={22} className="text-accent-dim" />
            </div>
            <h3 className="font-display text-[16px] font-bold text-brand-black mb-2">{t.useCases.items[2].title}</h3>
            <p className="text-[14px] text-brand-muted leading-relaxed">{t.useCases.items[2].desc}</p>
          </div>

          {/* Card 4: Logistik */}
          <div className="bg-brand-card border border-brand-black/8 rounded-2xl p-7 transition-shadow hover:shadow-lg" id="use-box-4">
            <div className="w-12 h-12 rounded-xl bg-accent-light shrink-0 flex items-center justify-center mb-5" id="use-box-icon-4">
              <Truck size={22} className="text-accent-dim" />
            </div>
            <h3 className="font-display text-[16px] font-bold text-brand-black mb-2">{t.useCases.items[3].title}</h3>
            <p className="text-[14px] text-brand-muted leading-relaxed">{t.useCases.items[3].desc}</p>
          </div>

          {/* Card 5: Gesundheit */}
          <div className="bg-brand-card border border-brand-black/8 rounded-2xl p-7 transition-shadow hover:shadow-lg" id="use-box-5">
            <div className="w-12 h-12 rounded-xl bg-accent-light shrink-0 flex items-center justify-center mb-5" id="use-box-icon-5">
              <Activity size={22} className="text-accent-dim" />
            </div>
            <h3 className="font-display text-[16px] font-bold text-brand-black mb-2">{t.useCases.items[4].title}</h3>
            <p className="text-[14px] text-brand-muted leading-relaxed">{t.useCases.items[4].desc}</p>
          </div>

          {/* Card 6: Immobilien */}
          <div className="bg-brand-card border border-brand-black/8 rounded-2xl p-7 transition-shadow hover:shadow-lg" id="use-box-6">
            <div className="w-12 h-12 rounded-xl bg-accent-light shrink-0 flex items-center justify-center mb-5" id="use-box-icon-6">
              <Building2 size={22} className="text-accent-dim" />
            </div>
            <h3 className="font-display text-[16px] font-bold text-brand-black mb-2">{t.useCases.items[5].title}</h3>
            <p className="text-[14px] text-brand-muted leading-relaxed">{t.useCases.items[5].desc}</p>
          </div>

        </div>
      </section>

      {/* CTA INTERACTIVE DIRECT CONTACT SECTION */}
      <div className="bg-brand-black py-24 px-[5%] text-center border-t border-white/5" id="contact">
        <h2 className="font-display text-[32px] md:text-[44px] font-extrabold text-white max-w-[640px] mx-auto mb-4 tracking-tight leading-[1.18]" id="contact-banner-heading">
          {t.ctaSection.title}
        </h2>
        <p className="text-[16px] sm:text-[17px] text-white/50 max-w-[490px] mx-auto mb-10 font-sans font-light" id="contact-banner-subtitle">
          {t.ctaSection.subtitle}
        </p>

        <div className="flex flex-wrap gap-4 justify-center" id="contact-banner-actions">
          <button 
            onClick={() => handleOpenModal('demo')} 
            className="bg-white text-brand-black hover:bg-accent hover:text-white font-semibold text-[15px] px-8 py-4 rounded-xl transition-colors cursor-pointer font-sans shadow-lg"
            id="banner-primary-btn"
          >
            {t.ctaSection.btnWhite}
          </button>
          <button 
            onClick={() => handleOpenModal('question')} 
            className="border border-white/20 hover:border-white text-white/80 hover:text-white font-semibold text-[15px] px-8 py-4 rounded-xl transition-colors bg-transparent cursor-pointer font-sans"
            id="banner-secondary-btn"
          >
            {t.ctaSection.btnOutline}
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="px-[5%] py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 max-w-[1200px] mx-auto border-t border-brand-black/8 mt-auto" id="footer">
        <div className="lg:col-span-5 flex flex-col items-start" id="footer-logo-brand">
          <Logo className="h-[46px] w-auto object-contain mb-4" />
          <p className="text-[14px] text-brand-muted leading-[1.7] max-w-[280px] font-sans" id="footer-brand-text">
            {t.footer.brandText}
          </p>
          
          <div className="inline-flex items-center gap-1.5 bg-accent-light text-accent-dim text-[12px] font-semibold px-3.5 py-1.5 rounded-full mt-6" id="footer-compliant-badge">
            <ShieldCheck size={14} className="text-accent" />
            {t.footer.compliantBadge}
          </div>
        </div>

        {/* Product links col */}
        <div className="lg:col-span-2 flex flex-col font-sans" id="footer-col-1">
          <h4 className="font-display text-[14px] font-extrabold text-brand-black mb-5 tracking-wide">
            {t.footer.product}
          </h4>
          <ul className="flex flex-col gap-3 list-none p-0 m-0" id="footer-links-1">
            <li>
              <a href="#how" className="text-[13.5px] text-brand-muted hover:text-brand-black transition-colors">
                {t.nav.howItWorks}
              </a>
            </li>
            <li>
              <a href="#packages" className="text-[13.5px] text-brand-muted hover:text-brand-black transition-colors">
                {t.nav.packages}
              </a>
            </li>
            <li>
              <a href="#use" className="text-[13.5px] text-brand-muted hover:text-brand-black transition-colors">
                {t.nav.useCases}
              </a>
            </li>
          </ul>
        </div>

        {/* Company links col */}
        <div className="lg:col-span-2 flex flex-col font-sans" id="footer-col-2">
          <h4 className="font-display text-[14px] font-extrabold text-brand-black mb-5 tracking-wide">
            {t.footer.company}
          </h4>
          <ul className="flex flex-col gap-3 list-none p-0 m-0" id="footer-links-2">
            <li>
              <a href="#contact" className="text-[13.5px] text-brand-muted hover:text-brand-black transition-colors">
                {t.nav.contact}
              </a>
            </li>
            <li>
              <a href="#" className="text-[13.5px] text-brand-muted hover:text-brand-black transition-colors">
                {t.footer.aboutUs}
              </a>
            </li>
            <li>
              <a href="#" className="text-[13.5px] text-brand-muted hover:text-brand-black transition-colors">
                {t.footer.blog}
              </a>
            </li>
          </ul>
        </div>

        {/* Legal links col */}
        <div className="lg:col-span-3 flex flex-col font-sans" id="footer-col-3">
          <h4 className="font-display text-[14px] font-extrabold text-brand-black mb-5 tracking-wide">
            {t.footer.legal}
          </h4>
          <ul className="flex flex-col gap-3 list-none p-0 m-0" id="footer-links-3">
            <li>
              <a href="#" className="text-[13.5px] text-brand-muted hover:text-brand-black transition-colors">
                {t.footer.privacy}
              </a>
            </li>
            <li>
              <a href="#" className="text-[13.5px] text-brand-muted hover:text-brand-black transition-colors">
                {t.footer.imprint}
              </a>
            </li>
            <li>
              <a href="#" className="text-[13.5px] text-brand-muted hover:text-brand-black transition-colors">
                {t.footer.terms}
              </a>
            </li>
          </ul>
        </div>
      </footer>

      {/* FOOTER BOTTOM BAR */}
      <div className="border-t border-brand-black/8 py-6 px-[5%]" id="footer-bottom-bar">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-brand-muted font-sans" id="footer-bottom-flex">
          <span>{t.footer.rights}</span>
          <span className="font-semibold">{t.footer.madeIn}</span>
        </div>
      </div>

      {/* INTERACTIVE COMPREHENSIVE MODAL DIALOG */}
      <AnimatePresence id="modal-animate">
        {isFormOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            id="modal-viewport"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-brand-card border border-brand-black/10 rounded-2xl w-full max-w-[500px] p-6 sm:p-8 shadow-2xl relative"
              id="modal-card"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 p-1.5 text-brand-muted hover:text-brand-black cursor-pointer rounded-full hover:bg-brand-black/5"
                id="modal-close-btn"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-sans" id="modal-form-element">
                  <div>
                    <h3 className="font-display text-[22px] font-extrabold text-brand-black mb-1.5">
                      {formType === 'question' ? t.modal.questionTitle : t.modal.title}
                    </h3>
                    <p className="text-[13px] text-brand-muted">
                      {formType === 'question' ? t.modal.questionSubtitle : t.modal.subtitle}
                    </p>
                  </div>

                  {/* Name field */}
                  <div className="flex flex-col gap-1.5" id="form-group-name">
                    <label className="text-[12px] font-bold text-brand-black uppercase tracking-wider">{t.modal.name} *</label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-black/12 bg-transparent text-[14px] text-brand-black focus:outline-none focus:border-accent"
                      placeholder="e.g. Jean Dupont"
                      id="input-name"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5" id="form-group-email">
                    <label className="text-[12px] font-bold text-brand-black uppercase tracking-wider">{t.modal.email} *</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-black/12 bg-transparent text-[14px] text-brand-black focus:outline-none focus:border-accent"
                      placeholder="e.g. jean@company.ch"
                      id="input-email"
                    />
                  </div>

                  {/* Company field */}
                  <div className="flex flex-col gap-1.5" id="form-group-company">
                    <label className="text-[12px] font-bold text-brand-black uppercase tracking-wider">{t.modal.company}</label>
                    <input 
                      type="text" 
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-black/12 bg-transparent text-[14px] text-brand-black focus:outline-none focus:border-accent"
                      placeholder="e.g. Swiss Fiduciary Ltd"
                      id="input-company"
                    />
                  </div>

                  {/* Package Option field */}
                  {formType === 'demo' && (
                    <div className="flex flex-col gap-1.5" id="form-group-package">
                      <label className="text-[12px] font-bold text-brand-black uppercase tracking-wider">{t.modal.packageSelection}</label>
                      <div className="relative" id="custom-select-wrapper">
                        <select 
                          value={selectedPkg || ''}
                          onChange={(e) => setSelectedPkg(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-brand-black/12 bg-transparent text-[14px] text-brand-black focus:outline-none focus:border-accent appearance-none cursor-pointer"
                          id="select-package"
                        >
                          <option value="">-- Select --</option>
                          <option value={t.p1.name}>{t.p1.name} (CHF {t.p1.price}/mo)</option>
                          <option value={t.p2.name}>{t.p2.name} (CHF {t.p2.price}/mo)</option>
                          <option value={t.p3.name}>{t.p3.name} (CHF {t.p3.price}/mo)</option>
                          <option value="Bundle - All 3 AI packages">All 3 Packages Bundle (CHF 490/mo)</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-muted pointer-events-none" size={16} />
                      </div>
                    </div>
                  )}

                  {/* Message field */}
                  <div className="flex flex-col gap-1.5" id="form-group-message">
                    <label className="text-[12px] font-bold text-brand-black uppercase tracking-wider">{t.modal.message}</label>
                    <textarea 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-black/12 bg-transparent text-[14px] text-brand-black focus:outline-none focus:border-accent resize-none"
                      placeholder="Hello, I would like to automate..."
                      id="input-message"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-accent hover:bg-accent-dim text-white text-[15px] p-3.5 rounded-xl font-semibold transition-colors shadow-lg shadow-accent/10 mt-2 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    id="submit-modal-btn"
                  >
                    {isSending && <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />}
                    {isSending ? t.modal.sending : t.modal.submit}
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 flex flex-col items-center gap-4 font-sans" id="success-screen">
                  <div className="w-16 h-16 rounded-full bg-accent-light shrink-0 flex items-center justify-center text-accent animate-bounce" id="success-icon-wrapper">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="font-display text-[22px] font-extrabold text-brand-black">{t.modal.successTitle}</h3>
                  <p className="text-[14px] text-brand-muted leading-relaxed max-w-[340px]">
                    {t.modal.successMessage}
                  </p>
                  <button 
                    onClick={() => setIsFormOpen(false)}
                    className="mt-4 bg-brand-black text-brand-white hover:bg-accent px-6 py-2.5 rounded-xl text-[14.5px] font-semibold transition-colors cursor-pointer"
                    id="success-close-btn"
                  >
                    {t.modal.close}
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
