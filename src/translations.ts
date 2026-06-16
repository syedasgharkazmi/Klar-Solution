export interface LanguageContent {
  nav: {
    howItWorks: string;
    packages: string;
    useCases: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    titleFirst: string;
    titleAccent: string;
    titleLast: string;
    sub: string;
    btnPrimary: string;
    btnSecondary: string;
    visualTitle: string;
    all4Packages: string;
    youSave: string;
  };
  stats: {
    lessWork: string;
    lessWorkLabel: string;
    packagesCount: string;
    packagesCountLabel: string;
    compliant: string;
    compliantLabel: string;
    uptime: string;
    uptimeLabel: string;
  };
  method: {
    tag: string;
    title: string;
    lead: string;
    whyTitle: string;
    highlight: string;
    advantage1Title: string;
    advantage1Desc: string;
    advantage2Title: string;
    advantage2Desc: string;
    advantage3Title: string;
    advantage3Desc: string;
  };
  packs: {
    tag: string;
    title: string;
    lead: string;
    monthlyCancelable: string;
    startNow: string;
    bestOffer: string;
    bundleSave: string;
    insteadOf: string;
    bundleRequest: string;
    serviceAccount: string;
    uptime: string;
    whiteLabel: string;
    apiIntegration: string;
  };
  p1: {
    name: string;
    actualValue: string;
    price: string;
    features: string[];
  };
  p2: {
    name: string;
    actualValue: string;
    price: string;
    features: string[];
  };
  p3: {
    name: string;
    actualValue: string;
    price: string;
    features: string[];
  };
  useCases: {
    tag: string;
    title: string;
    lead: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  ctaSection: {
    title: string;
    subtitle: string;
    btnWhite: string;
    btnOutline: string;
  };
  footer: {
    brandText: string;
    compliantBadge: string;
    product: string;
    company: string;
    legal: string;
    rights: string;
    madeIn: string;
    privacy: string;
    imprint: string;
    terms: string;
    aboutUs: string;
    blog: string;
  };
  modal: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    company: string;
    packageSelection: string;
    message: string;
    sending: string;
    submit: string;
    successTitle: string;
    successMessage: string;
    close: string;
    optional: string;
    questionTitle: string;
    questionSubtitle: string;
    monthSuffix: string;
  };
}

export const translations: Record<string, LanguageContent> = {
  de: {
    nav: {
      howItWorks: "So funktioniert es",
      packages: "Pakete",
      useCases: "Branchen",
      contact: "Kontakt",
      cta: "Demo anfragen"
    },
    hero: {
      badge: "AI + Mensch – Die Gewinnerstrategie",
      titleFirst: "Bis zu ",
      titleAccent: "90%",
      titleLast: " weniger manuelle Arbeit.",
      sub: "klar solution übernimmt die Arbeit – Ihr Team trifft die Entscheidungen. Mehr Kontrolle. Weniger Aufwand. Volle Compliance.",
      btnPrimary: "Pakete ansehen",
      btnSecondary: "Wie es funktioniert",
      visualTitle: "Unsere Pakete – einzeln buchbar",
      all4Packages: "👑 All-in-One: Alle 3 Pakete Bundle",
      youSave: "✓ Sie sparen CHF 87 pro Monat"
    },
    stats: {
      lessWork: "90%",
      lessWorkLabel: "Weniger manuelle Arbeit",
      packagesCount: "3",
      packagesCountLabel: "Premium-AI-Pakete",
      compliant: "100%",
      compliantLabel: "DSGVO-konform",
      uptime: "24/7",
      uptimeLabel: "AI arbeitet – Sie schlafen"
    },
    method: {
      tag: "Methode",
      title: "AI vorbereitet. Mensch validiert.",
      lead: "Das ist keine Theorie – das ist die weltweit stärkste Methode für AI-gestützte Geschäftsprozesse.",
      whyTitle: "Warum dieser Ansatz gewinnt",
      highlight: "„Unsere AI reduziert 70–90% der manuellen Arbeit. Garantiert.\"",
      advantage1Title: "AI übernimmt die Last",
      advantage1Desc: "Repetitive Aufgaben, Datenextraktion, Prüfroutinen – vollautomatisch, rund um die Uhr.",
      advantage2Title: "Mensch behält die Kontrolle",
      advantage2Desc: "Entscheidungen, Ausnahmen, Strategie – das bleibt beim Menschen. AI macht ihn schneller, nicht überflüssig.",
      advantage3Title: "Skalierbares System",
      advantage3Desc: "10 Dokumente oder 10.000 – die AI skaliert ohne zusätzliches Personal."
    },
    packs: {
      tag: "Pakete",
      title: "Optimierte Prozesse. Klare Ergebnisse.",
      lead: "Wählen Sie das passende Modul für Ihr Unternehmen. Jedes Paket funktioniert eigenständig oder nahtlos kombiniert.",
      monthlyCancelable: "/ Monat · monatlich kündbar",
      startNow: "Jetzt starten",
      bestOffer: "BESTES ANGEBOT",
      bundleSave: "✓ Sie sparen CHF 87 pro Monat",
      insteadOf: "/ Monat statt CHF 797",
      bundleRequest: "Bundle anfragen",
      serviceAccount: "Dedizierter Account Manager",
      uptime: "SLA & 99,9% Uptime",
      whiteLabel: "White-Label Optionen",
      apiIntegration: "API-Integration"
    },
    p1: {
      name: "Umsatz-Automatisierung für B2B-Firmen",
      actualValue: "Mehr Kunden, mehr Termine und weniger verlorene Leads.",
      price: "249",
      features: [
        "Lead-Generierung",
        "Firmenrecherche",
        "Automatische Ansprache",
        "Smarte Follow-ups",
        "Direkte Terminbuchung"
      ]
    },
    p2: {
      name: "Finanz- & Dokumenten-Automation für KMU",
      actualValue: "Weniger Buchhalterkosten, weniger Fehler und schnellere Verarbeitung.",
      price: "199",
      features: [
        "Rechnungen auslesen",
        "Belege sortieren",
        "Buchungsvorschläge generieren",
        "Dokumentenverarbeitung"
      ]
    },
    p3: {
      name: "BI & Entscheidungs-Intelligence",
      actualValue: "Bessere Entscheidungen, lückenlose KPI-Transparenz und verlässliche Prognosen.",
      price: "349",
      features: [
        "Interaktive Dashboards",
        "KPI Tracking",
        "Mustererkennung & Anomalien",
        "Forecasts & Zukunftstrends"
      ]
    },
    useCases: {
      tag: "Branchen",
      title: "Wer profitiert von klar solution?",
      lead: "Überall dort, wo Dokumente fliessen, Fehler passieren und Compliance zählt.",
      items: [
        {
          title: "Buchführung & Treuhand",
          desc: "Automatische Belegerfassung und Buchungsvorschläge – für Ihre Mandanten in Minuten statt Stunden."
        },
        {
          title: "Finanzabteilungen",
          desc: "Rechnungsprüfung, Anomalie-Erkennung und automatische Compliance-Dokumentation."
        },
        {
          title: "Rechts- & Steuerkanzleien",
          desc: "Vertragsdaten extrahieren, Fristen erkennen, Audit-Trails automatisch führen."
        },
        {
          title: "Logistik & Handel",
          desc: "Lieferscheine, Zolldokumente und Rechnungen automatisch verarbeiten."
        },
        {
          title: "Gesundheitswesen",
          desc: "DSGVO-konforme Verarbeitung mit lückenlosem Audit-Trail."
        },
        {
          title: "Immobilien & Verwaltung",
          desc: "Mietverträge und Abrechnungen automatisch erfassen und prüfen."
        }
      ]
    },
    ctaSection: {
      title: "Bereit, 70–90% Arbeit zu sparen?",
      subtitle: "In 30 Minuten sehen Sie live, wie klar solution Ihre Prozesse transformiert.",
      btnWhite: "Demo vereinbaren",
      btnOutline: "Frage stellen"
    },
    footer: {
      brandText: "AI-Automatisierung für den deutschsprachigen Raum. DSGVO-konform. Gebaut für Ergebnisse.",
      compliantBadge: "DSGVO-konform · CH · DE · AT",
      product: "Produkt",
      company: "Unternehmen",
      legal: "Rechtliches",
      rights: "© 2026 klar solution – Alle Rechte vorbehalten",
      madeIn: "Made in Switzerland 🇨🇭",
      privacy: "Datenschutz (DSGVO)",
      imprint: "Impressum",
      terms: "AGB",
      aboutUs: "Über uns",
      blog: "Blog"
    },
    modal: {
      title: "Demo anfragen",
      subtitle: "Füllen Sie das Formular aus. Wir melden uns umgehend bei Ihnen.",
      name: "Ihr Name",
      email: "Ihre E-Mail-Adresse",
      company: "Unternehmen",
      packageSelection: "Gewünschtes Paket",
      message: "Ihre Nachricht (optional)",
      sending: "Wird gesendet...",
      submit: "Kostenlose Demo anfragen",
      successTitle: "Anfrage erfolgreich!",
      successMessage: "Vielen Dank für Ihr Interesse! Wir haben Ihre Anfrage erhalten und werden uns innerhalb der nächsten 24 Stunden bei Ihnen melden.",
      close: "Schließen",
      optional: "optional",
      questionTitle: "Frage stellen",
      questionSubtitle: "Haben Sie Fragen zur klar solution AI Automatisierung?",
      monthSuffix: "Monat"
    }
  },
  en: {
    nav: {
      howItWorks: "How it works",
      packages: "Packages",
      useCases: "Sectors",
      contact: "Contact",
      cta: "Request Demo"
    },
    hero: {
      badge: "AI + Human – The Winning Strategy",
      titleFirst: "Up to ",
      titleAccent: "90%",
      titleLast: " less manual work.",
      sub: "klar solution takes care of the work – your team makes the decisions. More control. Less effort. Full compliance.",
      btnPrimary: "View Packages",
      btnSecondary: "How it works",
      visualTitle: "Our packages – bookable individually",
      all4Packages: "👑 All-in-One: All 3 Packages Bundle",
      youSave: "✓ You save CHF 87 per month"
    },
    stats: {
      lessWork: "90%",
      lessWorkLabel: "Less manual work",
      packagesCount: "3",
      packagesCountLabel: "Premium AI Packages",
      compliant: "100%",
      compliantLabel: "GDPR compliant",
      uptime: "24/7",
      uptimeLabel: "AI works – while you sleep"
    },
    method: {
      tag: "Method",
      title: "AI prepares. Human validates.",
      lead: "This is not theory – this is the world's most powerful method for AI-driven business processes.",
      whyTitle: "Why this approach wins",
      highlight: "\"Our AI reduces 70–90% of manual work. Guaranteed.\"",
      advantage1Title: "AI takes the burden",
      advantage1Desc: "Repetitive tasks, data extraction, audit routines – fully automated, around the clock.",
      advantage2Title: "Human stays in control",
      advantage2Desc: "Decisions, exceptions, strategy – these stay with the human. AI makes them faster, not redundant.",
      advantage3Title: "Scalable system",
      advantage3Desc: "10 documents or 10,000 – the AI scales without additional personnel."
    },
    packs: {
      tag: "Packages",
      title: "Optimized Processes. Clear Results.",
      lead: "Choose the perfect module for your business. Each package functions stand-alone or seamlessly combined.",
      monthlyCancelable: "/ month · cancelable monthly",
      startNow: "Get started",
      bestOffer: "BEST DEAL",
      bundleSave: "✓ You save CHF 87 per month",
      insteadOf: "/ month instead of CHF 797",
      bundleRequest: "Request Bundle",
      serviceAccount: "Dedicated Account Manager",
      uptime: "SLA & 99.9% Uptime",
      whiteLabel: "White-label options",
      apiIntegration: "API Integration"
    },
    p1: {
      name: "B2B Sales Automation",
      actualValue: "More clients, more meetings, and fewer lost leads.",
      price: "249",
      features: [
        "Lead generation",
        "Corporate research",
        "Automated outreach",
        "Smart follow-ups",
        "Direct booking / calendar sync"
      ]
    },
    p2: {
      name: "Financial & Document Automation",
      actualValue: "Lower bookkeeping costs, fewer errors, and ultrafast processing.",
      price: "199",
      features: [
        "Extract invoice data",
        "Sort vouchers and receipts",
        "Smart booking proposals",
        "Document processing"
      ]
    },
    p3: {
      name: "BI & Decision Intelligence",
      actualValue: "Better decisions, absolute KPI visibility, and predictive insights.",
      price: "349",
      features: [
        "Interactive dashboards",
        "Live KPI tracking",
        "Pattern recognition",
        "Corporate forecasts & trends"
      ]
    },
    useCases: {
      tag: "Sectors",
      title: "Who benefits from klar solution?",
      lead: "Wherever documents flow, errors happen, and compliance is essential.",
      items: [
        {
          title: "Accounting & Fiduciary",
          desc: "Automatic voucher entry and booking proposals – done in minutes for your clients instead of hours."
        },
        {
          title: "Finance Departments",
          desc: "Invoice verification, anomaly detection, and automated compliance documentation."
        },
        {
          title: "Law & Tax Firms",
          desc: "Extract contract data, detect deadlines, and generate audit-trail logs automatically."
        },
        {
          title: "Logistics & Trade",
          desc: "Automatically process delivery notes, customs documents, and supplier invoices."
        },
        {
          title: "Healthcare",
          desc: "GDPR-compliant processing with complete records of audit trails."
        },
        {
          title: "Real Estate & Management",
          desc: "Automatically record and verify rental agreements and operational invoices."
        }
      ]
    },
    ctaSection: {
      title: "Ready to save 70–90% of your manual work?",
      subtitle: "In just 30 minutes, see live how klar solution transforms your processes.",
      btnWhite: "Schedule a Demo",
      btnOutline: "Ask a Question"
    },
    footer: {
      brandText: "AI automation built for the DACH & Swiss regions. Fully GDPR-compliant. Built for performance.",
      compliantBadge: "GDPR-compliant · CH · DE · AT",
      product: "Product",
      company: "Company",
      legal: "Legal Info",
      rights: "© 2026 klar solution – All rights reserved",
      madeIn: "Made in Switzerland 🇨🇭",
      privacy: "Privacy Policy (GDPR)",
      imprint: "Imprint / Legal Notice",
      terms: "Terms & Conditions",
      aboutUs: "About Us",
      blog: "Blog"
    },
    modal: {
      title: "Request a Demo",
      subtitle: "Fill out the form below, and we will get back to you promptly.",
      name: "Your Name",
      email: "Your Email Address",
      company: "Company",
      packageSelection: "Requested Package",
      message: "Your Message (optional)",
      sending: "Sending...",
      submit: "Request Free Demo",
      successTitle: "Inquiry Successful!",
      successMessage: "Thank you for your interest! We have received your request and will contact you within the next 24 hours.",
      close: "Close",
      optional: "optional",
      questionTitle: "Ask a Question",
      questionSubtitle: "Do you have questions about klar solution AI automation?",
      monthSuffix: "month"
    }
  },
  zh: {
    nav: {
      howItWorks: "如何运行",
      packages: "方案包",
      useCases: "适用行业",
      contact: "联系我们",
      cta: "申请演示"
    },
    hero: {
      badge: "AI + 人类 — 黄金双赢策略",
      titleFirst: "减少高达 ",
      titleAccent: "90%",
      titleLast: " 的手动重复劳动。",
      sub: "klar solution 代劳繁重工作 – 您和团队只需掌握决策。更全掌控，更少内耗，全面完美合规。",
      btnPrimary: "选择方案包",
      btnSecondary: "如何运行",
      visualTitle: "我们的系统方案 – 支持独立订阅",
      all4Packages: "👑 3合1 卓越全能大礼包",
      youSave: "✓ 每月立省 CHF 87"
    },
    stats: {
      lessWork: "90%",
      lessWorkLabel: "减少低效手动日常",
      packagesCount: "3",
      packagesCountLabel: "大独立套件按需订阅",
      compliant: "100%",
      compliantLabel: "完美符合 GDPR 数据安全",
      uptime: "24/7",
      uptimeLabel: "AI 持续运转 — 您尽享安睡"
    },
    method: {
      tag: "核心模式",
      title: "AI 智能准备。人类审核验证。",
      lead: "这非空洞理论 — 而是全球领先的、基于 AI 构建的高效业务流程自动化方法。",
      whyTitle: "为什么这一模式能胜出",
      highlight: "“我们的 AI 减少 70-90% 的繁琐手动流程。我们对此承保。”",
      advantage1Title: "AI 彻底解放生产力",
      advantage1Desc: "自动处理重复任务、提取核心数据、核对应付账款，全天候不息工作。",
      advantage2Title: "人类牢牢掌门决策",
      advantage2Desc: "决策权、极少数例外处理以及战略性谋划属于人类。AI 只会加快执行，而非取代人。",
      advantage3Title: "高弹性的扩展系统",
      advantage3Desc: "自动处理大规模流量而无需招募额外编制。"
    },
    packs: {
      tag: "精选方案",
      title: "独立模块。开箱即用。",
      lead: "只需按需购买您的所需。每个 package 支持独立运行 – 亦可深度组装以发挥巨效。",
      monthlyCancelable: "/ 月 · 按月灵活续订/退订",
      startNow: "立即开启",
      bestOffer: "最强推荐套件",
      bundleSave: "✓ 尊享高级优惠立减 CHF 87 / 月",
      insteadOf: "/ 月 (原价 CHF 797)",
      bundleRequest: "咨询全能套件",
      serviceAccount: "尊享 VIP 客户成功经理",
      uptime: "卓越 SLA 与 99.9% 稳定在线",
      whiteLabel: "支持贴牌 White-Label 选项",
      apiIntegration: "企业级高可定制 API 接口"
    },
    p1: {
      name: "B2B 销售与营收自动化",
      actualValue: "获取更多新客、锁定优质约谈并挽回流失的销售线索。",
      price: "249",
      features: [
        "自动化潜在客资提取",
        "AI 辅助精细化企业背景检索",
        "高匹配智能个性化邮件触达",
        "全自动周期跟进",
        "自适应日历会议预约同步"
      ]
    },
    p2: {
      name: "财务与文档自动化",
      actualValue: "降低中介代账财务成本、规避人工错漏并提升文档审核效率。",
      price: "199",
      features: [
        "发票账单自动智能识别与读取",
        "海量原始票据分类整理及存档",
        "智能化财务入账分录自动推荐",
        "多类型文档高精度通用处理"
      ]
    },
    p3: {
      name: "商业智能与数据决策",
      actualValue: "赋能科学商业洞察、实现关键 KPI 看板透明化与可靠商业预测。",
      price: "349",
      features: [
        "交互式高解像运行数据看板",
        "多维度核心指标追踪监测",
        "基于大数据的决策路径分析",
        "Predictive 商业前景与未来走向预测"
      ]
    },
    useCases: {
      tag: "适用行业",
      title: "谁能从 klar solution 中获益？",
      lead: "任何涉及文件频繁往来、对精准性要求苛刻、对安全合规性有刚需的场景。",
      items: [
        {
          title: "信托、记账与税务代办",
          desc: "全自动单据提取归类及智能分录。仅耗时数分钟而非数小时，极大提高人均能效，获得客户赞赏。"
        },
        {
          title: "中大型企业财务部",
          desc: "一键发票复核、异常欺诈审计侦查，并全自动为您编写符合内控规范的合规文件。"
        },
        {
          title: "律师楼与专业财税事务所",
          desc: "从长篇合同中精准归档关键法理日期、条件、追踪死限，全自动化维护完整的案卷审查卷宗。"
        },
        {
          title: "现代物流与线上线下贸易",
          desc: "面对送货单、海关报关批文及海量供应商发票实行无人工全自动比对、消账与建档."
        },
        {
          title: "大健康与医疗机构",
          desc: "提供牢不可破且最高标准的用户隐私保护合规审核，并保留完整的操作追溯审计线索。"
        },
        {
          title: "房地产租赁与物业发展",
          desc: "快速建立租约数据抓取通道。自动清算日常水电、租金应收款项发票，与合同严丝合缝匹配。"
        }
      ]
    },
    ctaSection: {
      title: "立即缩减 70–90% 的机械手动耗时？",
      subtitle: "仅需 30 分钟视频交流，亲眼见证 klar solution 为您企业业务流插上腾飞之翼。",
      btnWhite: "预约 30 分钟免费演示",
      btnOutline: "在线留言咨询"
    },
    footer: {
      brandText: "专注于德语区、瑞、奥、德量身定制的企业级 AI 自动处理程序。全面支持 GDPR 安全标准。高效交付成果。",
      compliantBadge: "GDPR · 瑞士 · 欧盟隐私认证认可",
      product: "功能大类",
      company: "关于我们",
      legal: "法务免责与声明",
      rights: "© 2026 klar solution – 保留所有法律权利",
      madeIn: "瑞士高标准设计与托管 🇨🇭",
      privacy: "隐私政策 (GDPR)",
      imprint: "法律声明",
      terms: "服务协议",
      aboutUs: "关于我们",
      blog: "博客与动态"
    },
    modal: {
      title: "预约免费演示",
      subtitle: "请在下方填写您的联系方式，我们的顾问会在收到后向您发送会议邀请。",
      name: "您的姓名",
      email: "公司邮箱",
      company: "企业/机构全称",
      packageSelection: "意向订阅套件",
      message: "补充说明 (选填)",
      sending: "正在安全提交...",
      submit: "提交免费演示申请",
      successTitle: "提交成功！",
      successMessage: "感谢您的信任与支持！我们已接收到您的企业需求，专属客户支持顾问将会在 24 小时内和您邮件联系。",
      close: "好，知道了",
      optional: "选填",
      questionTitle: "在线提问",
      questionSubtitle: "对 klar solution 有任何问题吗？我们会快速给您答复。",
      monthSuffix: "月"
    }
  },
  es: {
    nav: {
      howItWorks: "Cómo funciona",
      packages: "Paquetes",
      useCases: "Sectores",
      contact: "Contacto",
      cta: "Solicitar Demo"
    },
    hero: {
      badge: "IA + Humanos – La Estrategia Ganadora",
      titleFirst: "Hasta un ",
      titleAccent: "90%",
      titleLast: " menos de trabajo manual.",
      sub: "klar solution asume las tareas mecánicas – su equipo toma las decisiones clave. Más control. Menor esfuerzo. Cumplimiento total.",
      btnPrimary: "Ver Paquetes",
      btnSecondary: "Cómo funciona",
      visualTitle: "Nuestros paquetes – contratables por separado",
      all4Packages: "👑 Todo-en-Uno: Paquete de los 3 Módulos",
      youSave: "✓ Ahorras CHF 87 al mes"
    },
    stats: {
      lessWork: "90%",
      lessWorkLabel: "Menos trabajo manual",
      packagesCount: "3",
      packagesCountLabel: "Premium Módulos IA",
      compliant: "100%",
      compliantLabel: "Conforme con el RGPD",
      uptime: "24/7",
      uptimeLabel: "La IA trabaja – tú descansas"
    },
    method: {
      tag: "Método",
      title: "La IA prepara. El humano valida.",
      lead: "No es una teoría – es el método más potente del mundo para procesos comerciales optimizados con IA.",
      whyTitle: "¿Por qué destaca este enfoque?",
      highlight: "\"Nuestra IA reduce el trabajo manual de un 70-90%. Garantizado.\"",
      advantage1Title: "La IA asume la carga pesada",
      advantage1Desc: "Tareas repetitivas, extracción de contenido, verificaciones automáticas de auditorías – 24 horas al día.",
      advantage2Title: "El humano mantiene el timón",
      advantage2Desc: "Las decisiones estratégicas y excepciones pertenecen a las personas. La IA las hace más ágiles, no obsoletas.",
      advantage3Title: "Sistema totalmente escalable",
      advantage3Desc: "Escala ante cualquier volumen de trabajo de forma instantánea sin costes de contratación."
    },
    packs: {
      tag: "Paquetes",
      title: "Procesos Optimizados. Resultados Claros.",
      lead: "Seleccione el módulo ideal para su empresa. Cada paquete funciona independientemente o combinado con fluidez.",
      monthlyCancelable: "/ mes · cancelable en cualquier momento",
      startNow: "Iniciar ahora",
      bestOffer: "MEJOR OFERTA",
      bundleSave: "✓ Ahorra CHF 87 al mes",
      insteadOf: "/ mes en vez de CHF 797",
      bundleRequest: "Reservar Bundle",
      serviceAccount: "Gerente de cuentas dedicado",
      uptime: "SLA y disponibilidad del 99,9%",
      whiteLabel: "Opciones de marca blanca",
      apiIntegration: "Integración API dedicada"
    },
    p1: {
      name: "Automatización de Ventas B2B",
      actualValue: "Más clientes, más reuniones comerciales y cero oportunidades perdidas.",
      price: "249",
      features: [
        "Generación de leads cualificados",
        "Investigación inteligente de empresas",
        "Campañas automatizadas de primer contacto",
        "Seguimientos perspicaces autónomos",
        "Coordinación directa de citas en calendario"
      ]
    },
    p2: {
      name: "Automatización de Finanzas y Documentos",
      actualValue: "Menos costes de administración, cero fallos humanos y velocidad máxima.",
      price: "199",
      features: [
        "Lectura inteligente de datos de facturas",
        "Clasificación automática de justificantes",
        "Propuestas inteligentes de asientos contables",
        "Interacción y tratamiento de documentos mixtos"
      ]
    },
    p3: {
      name: "BI e Inteligencia de Decisiones",
      actualValue: "Mejores decisiones basadas en datos, visualización total y pronósticos fiables.",
      price: "349",
      features: [
        "Paneles interactivos en tiempo real",
        "Seguimiento y alertas de KPI corporativos",
        "Modelos de correlación y análisis predictivo",
        "Pronósticos automáticos de tendencias futuras"
      ]
    },
    useCases: {
      tag: "Sectors",
      title: "¿Quién saca partido de klar solution?",
      lead: "Cualquier negocio donde los documentos se muevan, se necesite precisión y la normativa importe.",
      items: [
        {
          title: "Contabilidad y Gestorías",
          desc: "Automatice asientos contables y facturas para sus clientes en minutos en lugar de tardes enteras."
        },
        {
          title: "Dirección de Finanzas",
          desc: "Audite gastos, detecte fraude interno y automatice el reporte de cumplimiento tributario."
        },
        {
          title: "Klausulas y Despachos legales",
          desc: "Extraiga plazos clave, fechas de vencimiento de contratos pesados y documente auditorías."
        },
        {
          title: "Logística y Distribución",
          desc: "Procesa de manera 100% automática albaranes, aduanas, envíos y facturas de proveedores."
        },
        {
          title: "Sanidad y Clínicas",
          desc: "Tratamiento de historias de alta sensibilidad de acuerdo estricto con el RGPD y rastreo de accesos."
        },
        {
          title: "Inmobiliarias y Promotoras",
          desc: "Extracción automática de datos de alquileres, recibos y liquidaciones de gastos comunes."
        }
      ]
    },
    ctaSection: {
      title: "¿Preparado para reducir el 70-90% de sus tareas?",
      subtitle: "Agende una reunión de 30 minutos y descubra en vivo cómo klar solution revoluciona su administración.",
      btnWhite: "Agendar Demo Gratis",
      btnOutline: "Enviar una Consulta"
    },
    footer: {
      brandText: "Sistemas avanzados de automatización mediante IA en Suiza y la UE. Conforme a RGPD. Orientado a rentabilidad.",
      compliantBadge: "Certificado RGPD · Suiza · Alemania · Austria",
      product: "Soluciones",
      company: "Nosotros",
      legal: "Avisos legales",
      rights: "© 2026 klar solution – Todos los derechos reservados",
      madeIn: "Diseñado en Suiza 🇨🇭",
      privacy: "Política de Privacidad (RGPD)",
      imprint: "Aviso Legal",
      terms: "Términos y Condiciones",
      aboutUs: "Nosotros",
      blog: "Blog"
    },
    modal: {
      title: "Solicitar una Sesión",
      subtitle: "Facilítenos sus datos de contacto y le enviaremos la propuesta para vernos.",
      name: "Nombre y Apellidos",
      email: "Correo Profesional",
      company: "Nombre de la Empresa",
      packageSelection: "Módulo de Interés",
      message: "Mensaje u observaciones (opcional)",
      sending: "Enviando solicitud contrataciones...",
      submit: "Reservar Demostración",
      successTitle: "¡Formulario Recibido!",
      successMessage: "Muchas gracias por su confianza. Su petición ha sido procesada de inmediato, nos pondremos en contacto en menos de 24 horas.",
      close: "Entendido",
      optional: "opcional",
      questionTitle: "Enviar una Consulta",
      questionSubtitle: "¿Tiene alguna duda sobre la automatización de klar solution?",
      monthSuffix: "mes"
    }
  },
  fr: {
    nav: {
      howItWorks: "Comment ça marche",
      packages: "Forfaits",
      useCases: "Sectors",
      contact: "Contact",
      cta: "Demander démo"
    },
    hero: {
      badge: "IA + Humain – La Stratégie Gagnante",
      titleFirst: "Jusqu'à ",
      titleAccent: "90%",
      titleLast: " de travail manuel en moins.",
      sub: "klar solution s'occupe de tout – votre équipe prend les bonnes décisions. Plus de visibilité. Moins d'efforts. Totale conformité.",
      btnPrimary: "Voir les forfaits",
      btnSecondary: "Comment ça marche",
      visualTitle: "Nos forfaits – réservables individuellement",
      all4Packages: "👑 Tout-en-Un : Package des 3 Forfaits",
      youSave: "✓ Économisez CHF 87 par mois"
    },
    stats: {
      lessWork: "90%",
      lessWorkLabel: "De temps manuel en moins",
      packagesCount: "3",
      packagesCountLabel: "Forfaits IA Premium",
      compliant: "100%",
      compliantLabel: "Conforme au RGPD",
      uptime: "24/7",
      uptimeLabel: "L'IA travaille – pendant vos nuits"
    },
    method: {
      tag: "Méthode",
      title: "L'IA prépare. L'humain valide.",
      lead: "Ce n'est pas abstrait – c'est la méthode de traitement intelligent par IA la plus robuste du marché.",
      whyTitle: "Pourquoi cette méthode l'emporte ?",
      highlight: "\"Notre IA réduit de 70 à 90% vos charges administratives manuelles. Garanti.\"",
      advantage1Title: "L'IA assume le labeur",
      advantage1Desc: "Tâches répétitives, extraction d'écriture, vérification de factures automatique – sans pause, 365 jours par an.",
      advantage2Title: "L'homme conserve le contrôle",
      advantage2Desc: "Les décisions, les cas complexes, les stratégies restent l'apanage des humains. L'IA les rend agiles, pas obsolètes.",
      advantage3Title: "Structure ultra évolutive",
      advantage3Desc: "Soutenez toutes vos vagues d'activité instantanément sans recrutement d'urgence."
    },
    packs: {
      tag: "Forfaits",
      title: "Processus Optimisés. Résultats Clairs.",
      lead: "Choisissez le forfait adapté à vos besoins de gérance. Chaque option fonctionne de manière autonome ou combinée.",
      monthlyCancelable: "/ mois · résiliable mensuellement",
      startNow: "Démarrer",
      bestOffer: "MEILLEURE OFFRE",
      bundleSave: "✓ Économisez CHF 87 par mois",
      insteadOf: "/ mois au lieu de CHF 797",
      bundleRequest: "Réserver le Bundle",
      serviceAccount: "Gestionnaire de compte attitré",
      uptime: "SLA et disponibilité de 99,9%",
      whiteLabel: "Option en marque blanche",
      apiIntegration: "Accès API inclus"
    },
    p1: {
      name: "Automatisation des Ventes B2B",
      actualValue: "Plus de clients, plus de réunions de vente et zéro prospect perdu.",
      price: "249",
      features: [
        "Génération automatique de leads qualifiés",
        "Recherche enrichie et rapide d'entreprises",
        "Campagnes de prospection automatisées par IA",
        "Suivis intelligents automatiques",
        "Sync directe d'agendas et rendez-vous"
      ]
    },
    p2: {
      name: "Automatisation Financière & Documents",
      actualValue: "Frais de fiducie réduits, zéro erreur de saisie et traitement ultra-rapide.",
      price: "199",
      features: [
        "Extraction automatisée de factures",
        "Classement automatique des pièces de caisse",
        "Saisie d'écritures comptables suggérées",
        "Traitement de flux documentaires multiples"
      ]
    },
    p3: {
      name: "Analyse BI & Décisionnel Intelligent",
      actualValue: "Prenez de meilleures décisions, visibilité KPI totale et projections fiables.",
      price: "349",
      features: [
        "Tableaux de bord dynamiques interactifs",
        "Suivi et notifications des métriques KPI",
        "Reconnaissance de motifs complexes",
        "Projections d'avenir & prévisions d'activité"
      ]
    },
    useCases: {
      tag: "Secteurs",
      title: "Qui profite de klar solution ?",
      lead: "Partout où les volumes de pièces comptables se densifient, exigeant exactitude et sécurité stricte.",
      items: [
        {
          title: "Fiduciaires & Cabinets de Conseil",
          desc: "Automatisez la saisie de pièces et proposez les écritures comptables en quelques minutes plutôt qu'en rongeant vos week-ends."
        },
        {
          title: "Directions Financières (DAF)",
          desc: "Contrôlez automatiquement toutes les notes de frais, factures d'achat et assurez le reporting en toute sérénité."
        },
        {
          title: "Avocats & Cabinets de Conseil Fiscal",
          desc: "Extraction automatique des données de vos actes, avertissements de délais et génération de dossiers d'audits conformes."
        },
        {
          title: "Logistique & Trade",
          desc: "Vitesse d'exécution maximale sur la saisie de bons de livraison, de douanes et factures d'importateurs."
        },
        {
          title: "Santé & Hôpitaux",
          desc: "Sécurisation stricte des flux de données conformément au règlement de protection des données (RGPD)."
        },
        {
          title: "Immobilier & Gérance",
          desc: "Saisie instantanée des baux, mandats, relevés de gérance de copropriétés et régularisations."
        }
      ]
    },
    ctaSection: {
      title: "Prêt à libérer 70–90% de votre temps ?",
      subtitle: "En 30 minutes, découvrez en ligne comment klar solution révolutionne votre gestion actuelle.",
      btnWhite: "Prendre Rendez-vous",
      btnOutline: "Poser une Question"
    },
    footer: {
      brandText: "SaaS d'automatisation IA pour la Suisse et l'Europe. Entièrement sécurisé. Conçu pour maximiser votre productivité.",
      compliantBadge: "Normes RGPD · Suisse · Allemagne · Autriche",
      product: "Solutions",
      company: "Société",
      legal: "Mentions légales",
      rights: "© 2026 klar solution – Tous droits réservés",
      madeIn: "Hébergé et conçu en Suisse 🇨🇭",
      privacy: "Politique de Confidentialité (RGPD)",
      imprint: "Mentions Légales",
      terms: "Conditions Générales",
      aboutUs: "Société",
      blog: "Blog"
    },
    modal: {
      title: "Demander une Démo",
      subtitle: "Remplissez le formulaire ci-dessous et obtenez une invitation personnalisée.",
      name: "Votre Nom complet",
      email: "E-mail Professionnel",
      company: "Société / Administration",
      packageSelection: "Forfait d'intérêt",
      message: "Remarques complémentaires (facultatif)",
      sending: "Envoi de la demande comptabilisations...",
      submit: "Réserver ma démonstration",
      successTitle: "Demande enregistrée !",
      successMessage: "Merci infiniment ! Votre demande de démonstration a bien été enregistrée. Notre conseiller vous contactera d'ici 24h.",
      close: "Fermer la fenêtre",
      optional: "facultatif",
      questionTitle: "Poser une Question",
      questionSubtitle: "Avez-vous des questions sur l'automatisation de klar solution ?",
      monthSuffix: "mois"
    }
  }
};

export const seoTranslations = {
  de: {
    title: "klar solution | Premium AI-Automation & Prozessoptimierung",
    description: "Sparen Sie bis zu 90% manuelle Arbeit mit DSGVO-konformer AI-Automation für B2B-Sales, Finanzen & Dokumenten-Verarbeitung sowie BI-Intelligence in der Schweiz.",
    keywords: "AI Automation, DSGVO, B2B Lead Generierung, Finanz Automation, Belege auslesen, Business Intelligence Schweiz, Human-in-the-Loop, Prozessoptimierung"
  },
  en: {
    title: "klar solution | Premium AI Automation & Process Optimization",
    description: "Save up to 90% manual work with DSGVO/GDPR-compliant AI Automation for B2B Sales, Finance Document processing, and Business Intelligence.",
    keywords: "AI Automation, GDPR, B2B lead generation, finance automation, invoice scanning, BI, business intelligence, Swiss AI, human-in-the-loop, process optimization"
  },
  zh: {
    title: "klar solution | 高级AI自动化和业务流程优化专家",
    description: "通过符合 DSGVO/GDPR 的 AI 自动化技术在 B2B 销售、财务文件处理和商业智能上节省高达 90% 的人工工作量 (Human-in-the-Loop)。",
    keywords: "AI自动化, 德语区DSGVO, B2B线索生成, 财务自动化, 发票识别, 商业智能BI, 瑞士人工智能, 人机协同, 流程优化"
  },
  es: {
    title: "klar solution | Automatización Premium con IA y Optimización de Procesos",
    description: "Ahorre hasta un 90% de trabajo manual con automatización de IA que cumple con DSGVO/GDPR para ventas B2B, procesamiento de documentos financieros e inteligencia empresarial.",
    keywords: "automatización de IA, DSGVO, generación de leads B2B, automatización financiera, escaneo de facturas, inteligencia empresarial, IA suiza, flujo humano, optimización de procesos"
  },
  fr: {
    title: "klar solution | Automatisation IA Premium et Optimisation des Processus",
    description: "Économisez jusqu'à 90% de travail manuel grâce à l'automatisation de l'IA conforme au RGPD/DSGVO pour les ventes B2B, le traitement des documents financiers et la Business Intelligence.",
    keywords: "automatisation IA, RGPD, génération de leads B2B, automatisation financière, facturation IA, business intelligence, IA Suisse, validation humaine, optimisation des processus"
  }
};

