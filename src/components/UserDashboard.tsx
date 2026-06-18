import React, { useState } from 'react';
import { 
  BarChart3, 
  Target, 
  Receipt, 
  Activity, 
  Key, 
  ShieldCheck, 
  LogOut, 
  User, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle,
  FileCode,
  Search,
  Plus,
  Play,
  RotateCcw,
  Zap,
  Globe,
  RefreshCw,
  Sliders,
  ChevronRight,
  Database
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

interface UserDashboardProps {
  user: { name: string; email: string; company?: string; method: string };
  currentLang: 'de' | 'en' | 'zh' | 'es' | 'fr';
  onSignOut: () => void;
}

const dbTranslations = {
  de: {
    welcome: "Willkommen zurück",
    pipelineStatus: "Pipeline-Status",
    pipelinesDesc: "Überwachung Ihrer aktiven Roboter-Prozesse und menschlichen Freigaben.",
    integrationDemo: "Live AI-Parser-Spielwiese",
    integrationDemoDesc: "Geben Sie B2B-Dateitexte, E-Mails oder strukturlose Berichte ein, um zu demonstrieren, wie klar solution relevante Informationen extrahiert.",
    developerSettings: "Entwickler & API-Zugang",
    developerSettingsDesc: "Konfigurieren Sie sichere Webhook-URLs und generieren Sie private Schlüssel.",
    complianceCenter: "Datenschutz & DSGVO",
    complianceCenterDesc: "Verschlüsselungsnachweise, Host-Zertifikate und EU-Datensicherheits-Logs.",
    activePipelines: "Aktive Pipelines",
    inactivePipelines: "Inaktive Pipelines",
    searchPlaceholder: "Nach Pipelines filtern...",
    pipelineName: "Pipeline Name",
    pipelineType: "Typ",
    throughput: "Durchsatz / Min.",
    accuracy: "Konfidenz-Niveau",
    status: "Status",
    statusRunning: "Aktiv (Human-in-the-Loop)",
    statusPaused: "Pausiert",
    sampleSelector: "Beispiel wählen",
    customText: "Eigener unsortierter Text / E-Mail",
    extractCTA: "AI-Extraktion starten",
    extractedData: "Extrahierte strukturierte Daten",
    resetBtn: "Zurücksetzen",
    apiKeyTitle: "Ihr privater API-Schlüssel",
    apiKeyCreated: "Erstellt am",
    showKey: "Anzeigen",
    copySuccess: "In die Zwischenablage kopiert!",
    logOutCTA: "Abmelden",
    companyLabel: "Unternehmen"
  },
  en: {
    welcome: "Welcome back",
    pipelineStatus: "Pipeline Status",
    pipelinesDesc: "Monitor your active automated pipelines and human-in-the-loop approvals.",
    integrationDemo: "Live AI Parser Playground",
    integrationDemoDesc: "Paste unstructured emails, raw business texts, or receipt data to see how klar solution structures them instantly.",
    developerSettings: "Developer & API Keys",
    developerSettingsDesc: "Configure secure production webhooks and secure API access.",
    complianceCenter: "Secured Compliance Logs",
    complianceCenterDesc: "Retrieve GDPR encryption reports and Swiss hosting logs.",
    activePipelines: "Active Pipelines",
    inactivePipelines: "Deactivated Pipelines",
    searchPlaceholder: "Search pipelines...",
    pipelineName: "Pipeline Name",
    pipelineType: "Type",
    throughput: "Throughput / Min",
    accuracy: "SLA Confidence",
    status: "Status",
    statusRunning: "Running (Human Guarded)",
    statusPaused: "Paused",
    sampleSelector: "Select a real-world sample",
    customText: "Custom Raw Context / Unstructured Text",
    extractCTA: "Trigger Intelligence Engine",
    extractedData: "Extracted Target JSON Payload",
    resetBtn: "Clear Interface",
    apiKeyTitle: "Your Production Private API Key",
    apiKeyCreated: "Token Generated On",
    showKey: "Toggle Visible",
    copySuccess: "Copied credentials successfully!",
    logOutCTA: "Log Out",
    companyLabel: "Enterprise"
  },
  zh: {
    welcome: "欢迎回来",
    pipelineStatus: "自动化管道状态",
    pipelinesDesc: "在线监测并人工审核企业级 AI 工作流管道。",
    integrationDemo: "实时 AI 解析沙盒",
    integrationDemoDesc: "输入散乱的 B2B 邮件、财务发票或非结构化商业日志，体验 klar 如何完成自动化数据建模。",
    developerSettings: "开发者与 API 秘钥",
    developerSettingsDesc: "快捷配置私有 Webhook 接口与企业连接凭证。",
    complianceCenter: "GDPR/DSGVO 合规审计",
    complianceCenterDesc: "瑞士服务器端加密套件状态、合规存储与加密访问审计日志。",
    activePipelines: "已上线管道",
    inactivePipelines: "离线备份管道",
    searchPlaceholder: "检索自动化管道...",
    pipelineName: "自动化管道名称",
    pipelineType: "工作流类别",
    throughput: "执行流量/分钟",
    accuracy: "AI 准确率 (含人工修正)",
    status: "状态",
    statusRunning: "流式运行中 (高可靠性机制)",
    statusPaused: "已挂起",
    sampleSelector: "选择典型业务文本范例",
    customText: "或输入自定义文本内容",
    extractCTA: "调用智能识别引擎",
    extractedData: "结构化目标 JSON 数据载荷",
    resetBtn: "清空画板",
    apiKeyTitle: "企业级生产专属 API 秘钥",
    apiKeyCreated: "凭证生成日期",
    showKey: "显示/隐藏",
    copySuccess: "令牌已安全复制到剪贴板！",
    logOutCTA: "安全登出",
    companyLabel: "注册机构"
  },
  es: {
    welcome: "Bienvenido de nuevo",
    pipelineStatus: "Estado del pipeline",
    pipelinesDesc: "Monitoree sus flujos automatizados activos y aprobaciones de validación humana.",
    integrationDemo: "Simulador de Extracción IA",
    integrationDemoDesc: "Pegue correos estructurados, textos brutos de negocios o facturas para analizar los datos.",
    developerSettings: "Desarrolladores y Claves API",
    developerSettingsDesc: "Configure webhooks de producción y administre claves privadas.",
    complianceCenter: "Seguridad y RGPD",
    complianceCenterDesc: "Comprobantes de encriptado, certificados locales y registros de privacidad.",
    activePipelines: "Pipelines Activos",
    inactivePipelines: "Pipelines Desactivados",
    searchPlaceholder: "Filtrar pipelines...",
    pipelineName: "Nombre del Pipeline",
    pipelineType: "Tipo",
    throughput: "Tráfico / Min",
    accuracy: "Nivel de SLA",
    status: "Estado",
    statusRunning: "Activo (Validación Humana)",
    statusPaused: "Pausado",
    sampleSelector: "Seleccionar ejemplo real",
    customText: "Texto libre de negocios",
    extractCTA: "Ejecutar Extracción IA",
    extractedData: "Datos estructurados JSON extraídos",
    resetBtn: "Restablecer en seco",
    apiKeyTitle: "Clave API Privada",
    apiKeyCreated: "Token Creado el",
    showKey: "Mostrar Clave",
    copySuccess: "¡Clave copiada al portapapeles con éxito!",
    logOutCTA: "Cerrar sesión",
    companyLabel: "Empresa"
  },
  fr: {
    welcome: "Bienvenue",
    pipelineStatus: "Statuts des pipelines d'automatisation",
    pipelinesDesc: "Surveillance en temps réel de vos robots et approbations humaines.",
    integrationDemo: "Espace d'entraînement IA direct",
    integrationDemoDesc: "Copiez-collez des textes libres ou factures brutes pour observer la structuration en direct.",
    developerSettings: "Développeurs & Accès API",
    developerSettingsDesc: "Configurez vos webhooks sécurisés et gérez vos clés d'authentification.",
    complianceCenter: "Confidentialité & RGPD",
    complianceCenterDesc: "Suivi du chiffrement SSL, certificat d'hébergement suisse et journaux d'accès.",
    activePipelines: "Pipelines actifs",
    inactivePipelines: "Pipelines archivés",
    searchPlaceholder: "Rechercher un pipeline...",
    pipelineName: "Nom de pipeline",
    pipelineType: "Type de flux",
    throughput: "Débit/Min",
    accuracy: "Fiabilité globale SLA",
    status: "Statut",
    statusRunning: "Actif (Vérification Humaine)",
    statusPaused: "En attente",
    sampleSelector: "Sélectionner un modèle type",
    customText: "Saisir votre texte brut d'affaires",
    extractCTA: "Démarrer l'extraction intelligente",
    extractedData: "Données JSON structurées produites",
    resetBtn: "Effacer l'écran",
    apiKeyTitle: "ID de clé API confidentielle",
    apiKeyCreated: "Créée le",
    showKey: "Afficher",
    copySuccess: "Copié dans le presse-papiers !",
    logOutCTA: "Se déconnecter",
    companyLabel: "Société"
  }
};

const SAMPLE_TEXTS = {
  leads: {
    name: { de: "Sales B2B Lead-Email", en: "B2B Sales Lead Email", zh: "销售商机开发邮件", es: "Correo de lead comercial", fr: "Email de lead commercial de vente" },
    text: `From: moreno.treuhand@outlook.ch
Subject: Anfrage automatisierte Buchhaltung & DSGVO-Leitfaden
Guten Tag klar-Team, mein Name ist Beat Moreno von Moreno Treuhand Partner (Zürich). Wir haben ca. 450 Kundenbelege pro Monat im PDF-Format. Ich möchte wissen, ob Ihr Paket "Finance & Docs AI" (CHF 210/Monat) für uns geeignet ist. Bitte kontaktieren Sie mich unter +41 44 200 9182 oder b.moreno@morenotreuhand.ch. Unser Zielbudget beträgt ca 1800 CHF jährlich.`
  },
  invoice: {
    name: { de: "Finanz-Dokument (Rechnung)", en: "Finance Receipt Document", zh: "财务发票文档", es: "Factura de proveedor financiero", fr: "Facture comptable brute" },
    text: `RECHNUNG NR: INV-2026-8812
Lieferant: FastMedia GmbH, Zürich (CH-020.3.001.211-5)
Kunde: Müller Maschinenbau AG, Winterthur
Datum: 12.06.2026
Posten:
1x Software-Beratung B2B Integration: CHF 450.00
3x KI Server-Lizenz (Monatlich): CHF 360.00
Netto: CHF 810.00
MwSt (7.7%): CHF 62.37
TOTAL ENDSUMME: CHF 872.37`
  }
};

export default function UserDashboard({ user, currentLang, onSignOut }: UserDashboardProps) {
  const [activeTab, setActiveTab] = useState<'pipelines' | 'playground' | 'developer' | 'compliance'>('pipelines');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Playground states
  const [selectedSample, setSelectedSample] = useState<'none' | 'leads' | 'invoice'>('none');
  const [inputText, setInputText] = useState('');
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractionResult, setExtractionResult] = useState<any | null>(null);

  // Developer settings states
  const [showApiKey, setShowApiKey] = useState(false);
  const [apiKeyCopied, setApiKeyCopied] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState('https://client-api.company.com/klar-inbound');
  const [saveWebhookMsg, setSaveWebhookMsg] = useState('');

  const t = dbTranslations[currentLang] || dbTranslations.de;

  // Render dummy pipelines dynamic array
  const rawPipelines = [
    { id: 'p1', name: 'Inbound Invoices Parser', type: 'Finance & Documents', throughput: '12', accuracy: '99.8%', status: 'running', icon: Receipt },
    { id: 'p2', name: 'Zürich Sales Leads Pipeline', type: 'B2B Sales Leads', throughput: '4', accuracy: '100% (Human approved)', status: 'running', icon: Target },
    { id: 'p3', name: 'BI Monthly Financial Synthesis', type: 'Business Intelligence', throughput: '1.5', accuracy: '99.5%', status: 'running', icon: BarChart3 },
    { id: 'p4', name: 'Old CSV Legacy Archive Extraktion', type: 'Finance & Documents', throughput: '0.0', accuracy: '98.2%', status: 'paused', icon: Database },
  ];

  const filteredPipelines = rawPipelines.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const applySample = (type: 'leads' | 'invoice') => {
    setSelectedSample(type);
    setInputText(SAMPLE_TEXTS[type].text);
    setExtractionResult(null);
  };

  const handleExtraction = () => {
    if (!inputText.trim()) return;
    setIsExtracting(true);
    setExtractionResult(null);

    // Simulate high precision AI model processing
    setTimeout(() => {
      setIsExtracting(false);
      if (selectedSample === 'leads' || inputText.includes('Moreno')) {
        setExtractionResult({
          "sender_metadata": {
            "name": "Beat Moreno",
            "title": "Partner / Treuhänder",
            "company": "Moreno Treuhand Partner",
            "location": "Zürich, Schweiz"
          },
          "contact_channels": {
            "email": "b.moreno@morenotreuhand.ch",
            "phone": "+41 44 200 9182",
            "preferred": "Phone (High Priority Call)"
          },
          "intent_classification": {
            "product_interest": "Finance & Docs AI Package",
            "estimated_payload_volume": "450 documents / month",
            "lead_score": "95/100 (Direct Purchase Intent)",
            "budget": "CHF 1,800 / year"
          },
          "compliance_security": {
            "data_anonymization": "Completed",
            "gdpr_status": "Passed Secure Ingress Pipeline",
            "hosting_pod": "CH-WEST-1 (Geneva)"
          }
        });
      } else if (selectedSample === 'invoice' || inputText.includes('FastMedia')) {
        setExtractionResult({
          "document_metadata": {
            "invoice_number": "INV-2026-8812",
            "billing_date": "2026-06-12",
            "currency": "CHF",
            "source": "Unstructured FastMedia Invoice Document (Zürich)"
          },
          "parties": {
            "issuer": "FastMedia GmbH, Zürich (CH-020.3.001.211-5)",
            "recipient": "Müller Maschinenbau AG, Winterthur"
          },
          "invoice_line_items": [
            { "index": 1, "description": "Software-Beratung B2B Integration", "units": 1, "amount_unit": 450.00, "item_total": 450.00 },
            { "index": 2, "description": "KI Server-Lizenz (Monatlich)", "units": 3, "amount_unit": 120.00, "item_total": 360.00 }
          ],
          "financial_totals": {
            "subtotal_net": 810.00,
            "swiss_vat_rate": "7.7%",
            "vat_amount": 62.37,
            "grand_total": 872.37
          },
          "accounting_posting_ledger": {
            "suggested_debit_account": "3200 (IT-Beratungsaufwand)",
            "suggested_credit_account": "2000 (Kreditoren)",
            "fraud_check": "Verified - Matches Swiss VAT ID Registry"
          }
        });
      } else {
        // Generic custom extraction
        setExtractionResult({
          "general_extraction": {
            "raw_payload_length_bytes": inputText.length,
            "detected_language": currentLang.toUpperCase(),
            "confidence_rating": "94.5%",
            "automated_summary": "Document processed under standard fallback B2B parsing model. Clean structures identified."
          },
          "parsed_entities": [
            { "key": "Entity_Detected", "value": "B2B client profile" },
            { "key": "Estimated_Context", "value": "General inquiry / Business operation" }
          ],
          "security": {
            "gdpr_scrubbing": "No sensitive private keys found.",
            "data_retention_period": "30 days (Ephemeral sandboxed memory)"
          }
        });
      }
    }, 1800);
  };

  const copyKeyToClipboard = () => {
    navigator.clipboard.writeText('klar_sk_prod_7718911029_ae71b9c9f8d16');
    setApiKeyCopied(true);
    setTimeout(() => setApiKeyCopied(false), 2000);
  };

  const saveWebhook = (e: React.FormEvent) => {
    e.preventDefault();
    setSaveWebhookMsg('✓ Webhook successfully authenticated and saved!');
    setTimeout(() => setSaveWebhookMsg(''), 3000);
  };

  return (
    <div className="min-h-screen bg-brand-white text-brand-black flex flex-col font-sans" id="dashboard-main-app">
      
      {/* GLOBAL NAVBAR FOR LOGGED IN PORTAL */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-brand-black text-brand-white h-[68px] px-[5%] flex items-center justify-between" id="dashboard-navbar">
        <div className="flex items-center gap-1.5" id="dashboard-logo-wrap">
          <Logo lightText />
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#1D9E75] px-2 py-0.5 rounded bg-white/10 font-mono">
            PORTAL
          </span>
        </div>

        {/* Current user session pill */}
        <div className="flex items-center gap-4" id="dashboard-session-pill">
          <div className="hidden sm:flex flex-col text-right" id="user-info-text">
            <span className="text-[13px] font-bold text-white">{user.name}</span>
            <span className="text-[11px] text-accent font-sans">{user.company || t.companyLabel}</span>
          </div>
          <div className="w-9 h-9 rounded-full bg-brand-white/15 flex items-center justify-center text-accent" id="user-avatar" title={`Signed in via ${user.method}`}>
            <User size={18} />
          </div>
          
          <button 
            onClick={onSignOut}
            className="flex items-center gap-1.5 text-[12px] bg-white/10 hover:bg-red-500/10 hover:text-red-400 py-1.5 px-3 rounded-lg border border-white/5 transition-colors cursor-pointer"
            id="dashboard-logout-btn"
          >
            <LogOut size={13} />
            <span className="hidden md:inline">{t.logOutCTA}</span>
          </button>
        </div>
      </nav>

      {/* DASHBOARD SHELL LAYOUT */}
      <div className="pt-[68px] flex flex-col md:flex-row grow max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 gap-6 md:gap-8" id="dashboard-shell">
        
        {/* SIDEBAR TABS (Perfect Responsive Flex/Grid) */}
        <aside className="w-full md:w-[240px] shrink-0 flex flex-row md:flex-col gap-1.5 overflow-x-auto md:overflow-visible pb-3.5 md:pb-0 border-b md:border-b-0 border-brand-black/8" id="dashboard-sidebar">
          <button
            onClick={() => setActiveTab('pipelines')}
            className={`flex items-center gap-3 py-3 px-4 rounded-xl text-[13px] font-bold tracking-tight text-left cursor-pointer transition-all shrink-0 whitespace-nowrap ${activeTab === 'pipelines' ? 'bg-brand-black text-white' : 'text-brand-muted hover:bg-brand-black/5 hover:text-brand-black'}`}
            id="tab-button-pipelines"
          >
            <Activity size={16} />
            <span>{t.pipelineStatus}</span>
          </button>

          <button
            onClick={() => setActiveTab('playground')}
            className={`flex items-center gap-3 py-3 px-4 rounded-xl text-[13px] font-bold tracking-tight text-left cursor-pointer transition-all shrink-0 whitespace-nowrap ${activeTab === 'playground' ? 'bg-brand-black text-white animate-pulse' : 'text-brand-muted hover:bg-brand-black/5 hover:text-brand-black'}`}
            id="tab-button-playground"
          >
            <Zap size={16} className={activeTab === 'playground' ? "text-accent" : ""} />
            <span>{t.integrationDemo}</span>
          </button>

          <button
            onClick={() => setActiveTab('developer')}
            className={`flex items-center gap-3 py-3 px-4 rounded-xl text-[13px] font-bold tracking-tight text-left cursor-pointer transition-all shrink-0 whitespace-nowrap ${activeTab === 'developer' ? 'bg-brand-black text-white' : 'text-brand-muted hover:bg-brand-black/5 hover:text-brand-black'}`}
            id="tab-button-developer"
          >
            <Key size={16} />
            <span>{t.developerSettings}</span>
          </button>

          <button
            onClick={() => setActiveTab('compliance')}
            className={`flex items-center gap-3 py-3 px-4 rounded-xl text-[13px] font-bold tracking-tight text-left cursor-pointer transition-all shrink-0 whitespace-nowrap ${activeTab === 'compliance' ? 'bg-brand-black text-white' : 'text-brand-muted hover:bg-brand-black/5 hover:text-brand-black'}`}
            id="tab-button-compliance"
          >
            <ShieldCheck size={16} className="text-emerald-500" />
            <span>{t.complianceCenter}</span>
          </button>
        </aside>

        {/* CORE WORKSPACE PANEL */}
        <main className="grow bg-brand-card border border-brand-black/8 rounded-2xl p-5 sm:p-7 shadow-sm overflow-hidden" id="dashboard-workspace">
          
          <AnimatePresence mode="wait" id="dashboard-tabs-presence">
            
            {/* TAB 1: PIPELINES MONITORING */}
            {activeTab === 'pipelines' && (
              <motion.div
                key="tab-pipelines"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.15 }}
                className="space-y-6"
                id="panel-pipelines"
              >
                <div>
                  <h2 className="font-display text-[22px] sm:text-[24px] font-black text-brand-black mb-1">{t.pipelineStatus}</h2>
                  <p className="text-[13px] text-brand-muted font-sans font-light leading-relaxed">{t.pipelinesDesc}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3.5 sm:items-center justify-between" id="pipeline-controls-row">
                  <div className="relative grow max-w-[280px]" id="pipeline-search-wrap">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-muted">
                      <Search size={14} />
                    </span>
                    <input 
                      type="text"
                      placeholder={t.searchPlaceholder}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-brand-black/4 border border-brand-black/6 rounded-xl pl-9 pr-4 py-2 text-[12.5px] outline-none focus:border-accent font-sans transition-all"
                      id="pipeline-search-input"
                    />
                  </div>
                  
                  <div className="flex gap-2 text-[11.5px] font-bold text-accent justify-end" id="active-pills-row">
                    <span className="bg-accent-light px-2.5 py-1 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                      3 {t.activePipelines}
                    </span>
                  </div>
                </div>

                {/* Pipelines Table list (Responsive cards on mobile / tables on desktop) */}
                <div className="border border-brand-black/8 rounded-xl overflow-hidden bg-white shadow-sm" id="pipelines-table-card">
                  
                  {/* Desktop Table */}
                  <div className="hidden sm:block overflow-x-auto" id="desktop-table-container">
                    <table className="w-full text-left border-collapse text-[12.5px]" id="pipelines-table">
                      <thead>
                        <tr className="bg-brand-black/3 text-brand-muted border-b border-brand-black/8 font-bold font-sans">
                          <th className="py-3 px-4">{t.pipelineName}</th>
                          <th className="py-3 px-4">{t.pipelineType}</th>
                          <th className="py-3 px-4 text-center">{t.throughput}</th>
                          <th className="py-3 px-4 text-center">{t.accuracy}</th>
                          <th className="py-3 px-4 text-right">{t.status}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-brand-black/6 font-sans">
                        {filteredPipelines.map((p) => {
                          const IconComp = p.icon;
                          return (
                            <tr key={p.id} className="hover:bg-brand-black/[1%] transition-colors">
                              <td className="py-3.5 px-4 font-bold text-brand-black flex items-center gap-2.5">
                                <div className="w-7 h-7 rounded-lg bg-brand-black/5 flex items-center justify-center text-accent">
                                  <IconComp size={14} />
                                </div>
                                <span>{p.name}</span>
                              </td>
                              <td className="py-3.5 px-4 text-brand-muted font-medium">{p.type}</td>
                              <td className="py-3.5 px-4 text-center font-mono font-medium text-brand-black">{p.throughput}</td>
                              <td className="py-3.5 px-4 text-center">
                                <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                                  {p.accuracy}
                                </span>
                              </td>
                              <td className="py-3.5 px-4 text-right">
                                {p.status === 'running' ? (
                                  <span className="text-[11.5px] font-bold text-accent flex items-center justify-end gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                                    {t.statusRunning}
                                  </span>
                                ) : (
                                  <span className="text-[11.5px] font-bold text-brand-muted flex items-center justify-end gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-muted" />
                                    {t.statusPaused}
                                  </span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Tablet/Mobile Cards Stack */}
                  <div className="block sm:hidden divide-y divide-brand-black/6" id="mobile-cards-stack">
                    {filteredPipelines.map((p) => {
                      const IconComp = p.icon;
                      return (
                        <div key={p.id} className="p-4 space-y-3 font-sans" id={`mobile-p-card-${p.id}`}>
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-brand-black/5 flex items-center justify-center text-accent">
                              <IconComp size={15} />
                            </div>
                            <div>
                              <div className="text-[13px] font-bold text-brand-black">{p.name}</div>
                              <div className="text-[11px] text-brand-muted font-medium">{p.type}</div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2 text-[11.5px] bg-brand-black/3 p-2.5 rounded-lg">
                            <div>
                              <span className="text-brand-muted block text-[10px] uppercase font-bold tracking-wider">Throughput/Min</span>
                              <span className="font-mono font-bold text-brand-black">{p.throughput}</span>
                            </div>
                            <div>
                              <span className="text-brand-muted block text-[10px] uppercase font-bold tracking-wider">SLA Accuracy</span>
                              <span className="text-emerald-600 font-bold">{p.accuracy}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-[11.5px] pt-1">
                            <span className="text-brand-muted">Status:</span>
                            {p.status === 'running' ? (
                              <span className="font-bold text-accent flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                                {t.statusRunning.split(' ')[0]}
                              </span>
                            ) : (
                              <span className="font-bold text-brand-muted flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-muted" />
                                {t.statusPaused}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </motion.div>
            )}

            {/* TAB 2: LIVE AI PARSER PLAYGROUND */}
            {activeTab === 'playground' && (
              <motion.div
                key="tab-playground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.15 }}
                className="space-y-6"
                id="panel-playground"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1" id="playground-title-wrapper">
                    <h2 className="font-display text-[22px] sm:text-[24px] font-black text-brand-black">{t.integrationDemo}</h2>
                    <span className="text-[9.5px] font-bold tracking-widest uppercase bg-accent text-white px-2 py-0.5 rounded-md animate-pulse font-mono">
                      LIVE ENGINE
                    </span>
                  </div>
                  <p className="text-[13px] text-brand-muted font-sans font-light leading-relaxed">{t.integrationDemoDesc}</p>
                </div>

                {/* Selectors for quick testing */}
                <div className="flex flex-col sm:flex-row gap-2.5 items-start sm:items-center bg-brand-black/3 p-4 rounded-xl border border-brand-black/5" id="playground-selectors">
                  <span className="text-[12px] font-bold text-brand-muted shrink-0 font-sans">
                    {t.sampleSelector}:
                  </span>
                  <div className="flex flex-wrap gap-2" id="playground-selector-buttons">
                    <button
                      onClick={() => applySample('leads')}
                      className={`text-[11.5px] px-3.5 py-1.5 rounded-lg font-bold font-sans cursor-pointer transition-all ${selectedSample === 'leads' ? 'bg-accent text-white shadow-sm' : 'bg-white border border-brand-black/8 text-brand-muted hover:border-brand-black'}`}
                      id="select-sample-btn-leads"
                    >
                      ✉️ {SAMPLE_TEXTS.leads.name[currentLang] || SAMPLE_TEXTS.leads.name.en}
                    </button>
                    <button
                      onClick={() => applySample('invoice')}
                      className={`text-[11.5px] px-3.5 py-1.5 rounded-lg font-bold font-sans cursor-pointer transition-all ${selectedSample === 'invoice' ? 'bg-accent text-white shadow-sm' : 'bg-white border border-brand-black/8 text-brand-muted hover:border-brand-black'}`}
                      id="select-sample-btn-invoice"
                    >
                      📄 {SAMPLE_TEXTS.invoice.name[currentLang] || SAMPLE_TEXTS.invoice.name.en}
                    </button>
                  </div>
                </div>

                {/* Two side columns workspace: Editor vs Structure results */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5" id="playground-grid">
                  {/* Left Column Input */}
                  <div className="flex flex-col gap-2" id="playground-left-col">
                    <div className="flex justify-between items-center text-[11px] font-bold text-brand-muted uppercase tracking-wider" id="playground-input-header">
                      <span>{t.customText}</span>
                      <span>{inputText.length} chars</span>
                    </div>
                    <textarea
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="e.g. paste your unstructured PDF text extraction or sales email request here..."
                      className="w-full bg-brand-black/4 border border-brand-black/8 rounded-xl p-4 text-[13px] font-mono leading-relaxed h-[200px] sm:h-[260px] outline-none focus:border-accent ring-0 focus:ring-2 focus:ring-accent/10 transition-all text-brand-black"
                      id="playground-main-textarea"
                    />
                    
                    <div className="flex gap-2" id="playground-bottom-actions">
                      <button
                        onClick={handleExtraction}
                        disabled={isExtracting || !inputText.trim()}
                        className="grow bg-brand-black text-white hover:bg-accent disabled:opacity-50 py-3.5 px-4 rounded-xl text-[12.5px] font-bold transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm font-display"
                        id="playground-trigger-extraction-btn"
                      >
                        {isExtracting ? (
                          <>
                            <RefreshCw size={14} className="animate-spin" />
                            <span>Extracting Structure...</span>
                          </>
                        ) : (
                          <>
                            <Play size={14} />
                            <span>{t.extractCTA}</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => { setInputText(''); setExtractionResult(null); setSelectedSample('none'); }}
                        className="bg-brand-black/6 hover:bg-brand-black/10 text-brand-muted hover:text-brand-black p-3.5 rounded-xl cursor-pointer transition-colors"
                        id="playground-reset-btn"
                        title={t.resetBtn}
                      >
                        <RotateCcw size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Right Column Structured Outputs */}
                  <div className="flex flex-col border border-brand-black/8 rounded-xl bg-brand-black text-slate-200 overflow-hidden shadow-md min-h-[200px]" id="playground-right-col">
                    <div className="bg-white/5 border-b border-white/5 px-4.5 py-3 flex items-center justify-between text-[11.5px]" id="json-box-header">
                      <span className="font-bold flex items-center gap-1.5 text-accent-light">
                        <FileCode size={13} />
                        {t.extractedData}
                      </span>
                      <span className="font-mono text-[10px] text-white/50 bg-white/10 px-1.5 py-0.5 rounded">
                        JSON MODE
                      </span>
                    </div>

                    <div className="grow p-4 scroll-smooth overflow-auto max-h-[300px] sm:max-h-[360px] text-[11.5px] font-mono leading-relaxed" id="anatomy-result-box">
                      {isExtracting && (
                        <div className="h-full flex flex-col items-center justify-center py-16 text-center text-white/50 gap-3" id="engine-processing-sim">
                          <Sliders className="animate-spin text-accent h-7 w-7" />
                          <div>
                            <p className="font-semibold text-white">klar Engine Parsing Elements...</p>
                            <p className="text-[10.5px] text-white/40 mt-0.5">Scrubbing PII, validating Swiss land registries...</p>
                          </div>
                        </div>
                      )}

                      {!isExtracting && !extractionResult && (
                        <div className="h-full flex flex-col items-center justify-center py-20 text-center text-white/40 gap-2 font-sans" id="playground-null-state">
                          <Activity size={24} className="opacity-30" />
                          <p className="text-[11.5px]">Provide text and click trigger to see the result</p>
                        </div>
                      )}

                      {!isExtracting && extractionResult && (
                        <motion.pre 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-[#9FEF00] text-[11.5px] md:text-[12px]"
                          id="json-output-tag"
                        >
                          {JSON.stringify(extractionResult, null, 2)}
                        </motion.pre>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

            {/* TAB 3: DEVELOPER API CREATIVE SETTINGS */}
            {activeTab === 'developer' && (
              <motion.div
                key="tab-developer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.15 }}
                className="space-y-6 animate-none"
                id="panel-developer"
              >
                <div>
                  <h2 className="font-display text-[22px] sm:text-[24px] font-black text-brand-black mb-1">{t.developerSettings}</h2>
                  <p className="text-[13px] text-brand-muted font-sans font-light leading-relaxed">{t.developerSettingsDesc}</p>
                </div>

                <div className="bg-white border border-brand-black/8 rounded-xl p-5 shadow-sm space-y-4" id="api-key-panel">
                  <h3 className="text-[14px] font-bold text-brand-black flex items-center gap-2" id="key-title">
                    <Key size={16} className="text-accent" />
                    {t.apiKeyTitle}
                  </h3>

                  <div className="flex flex-col sm:flex-row gap-2.5 items-stretch" id="api-key-input-row">
                    <div className="grow relative" id="api-key-field">
                      <input 
                        type={showApiKey ? "text" : "password"}
                        readOnly
                        value="klar_sk_prod_7718911029_ae71b9c9f8d16"
                        className="w-full bg-brand-black/3 border border-brand-black/8 rounded-xl px-4 py-3 text-[13px] font-mono text-brand-black shrink-0 outline-none select-all"
                      />
                    </div>
                    
                    <button
                      type="button"
                      onClick={() => setShowApiKey(!showApiKey)}
                      className="bg-brand-black/5 hover:bg-brand-black/8 text-brand-muted hover:text-brand-black py-2.5 px-4.5 rounded-xl text-[12px] font-bold cursor-pointer transition-colors"
                      id="api-show-btn"
                    >
                      {showApiKey ? "Hide" : t.showKey}
                    </button>
                    
                    <button
                      type="button"
                      onClick={copyKeyToClipboard}
                      className="bg-brand-black text-white hover:bg-accent py-2.5 px-5 rounded-xl text-[12px] font-bold cursor-pointer transition-colors shrink-0"
                      id="api-copy-btn"
                    >
                      {apiKeyCopied ? "Success!" : "Copy"}
                    </button>
                  </div>

                  {apiKeyCopied && (
                    <div className="text-[11.5px] text-emerald-600 font-medium font-sans animate-bounce" id="api-copy-notification">
                      {t.copySuccess}
                    </div>
                  )}

                  <div className="text-[11px] text-brand-muted" id="api-creation-date">
                    {t.apiKeyCreated}: <strong className="text-brand-black font-semibold">18.06.2026</strong>
                  </div>
                </div>

                {/* Webhook form input */}
                <form onSubmit={saveWebhook} className="bg-white border border-brand-black/8 rounded-xl p-5 shadow-sm space-y-4" id="webhook-form">
                  <h3 className="text-[14px] font-bold text-brand-black flex items-center gap-2" id="webhook-title">
                    <Sliders size={16} className="text-accent" />
                    Incoming Automation Webhook Endpoint
                  </h3>
                  
                  <div className="space-y-1" id="webhook-textbox-wrap">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-brand-muted font-sans">
                      Target HTTP Ingest URL
                    </label>
                    <input 
                      type="url"
                      required
                      value={webhookUrl}
                      onChange={(e) => setWebhookUrl(e.target.value)}
                      className="w-full bg-brand-black/4 border border-brand-black/8 rounded-xl px-4 py-2.5 text-[13px] font-mono text-brand-black outline-none focus:border-accent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-brand-black text-white hover:bg-accent py-2.5 px-5 rounded-xl text-[12px] font-bold cursor-pointer transition-colors"
                    id="save-webhook-btn"
                  >
                    Save Webhook URL
                  </button>

                  {saveWebhookMsg && (
                    <div className="text-[11.5px] text-emerald-600 font-semibold font-sans animate-fade-in" id="webhook-success">
                      {saveWebhookMsg}
                    </div>
                  )}
                </form>
              </motion.div>
            )}

            {/* TAB 4: COMPLIANCE & DSGVO SECURITY LOGS */}
            {activeTab === 'compliance' && (
              <motion.div
                key="tab-compliance"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.15 }}
                className="space-y-6"
                id="panel-compliance"
              >
                <div>
                  <h2 className="font-display text-[22px] sm:text-[24px] font-black text-brand-black mb-1">{t.complianceCenter}</h2>
                  <p className="text-[13px] text-brand-muted font-sans font-light leading-relaxed">{t.complianceCenterDesc}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4" id="compliance-cards-grid">
                  <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-xl p-4.5 space-y-2" id="comp-widget-1">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                      <ShieldCheck size={18} />
                    </div>
                    <div className="text-[13px] font-bold text-brand-black">EU DSGVO Compliant</div>
                    <p className="text-[11px] text-brand-muted leading-relaxed font-sans">
                      All pipeline ingest nodes run full end-to-end data encryption in-transit and at-rest using AES-256 standards.
                    </p>
                  </div>

                  <div className="bg-accent-light/40 border border-accent/15 rounded-xl p-4.5 space-y-2" id="comp-widget-2">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <Database size={18} />
                    </div>
                    <div className="text-[13px] font-bold text-brand-black">Swiss Bank Hosting</div>
                    <p className="text-[11px] text-brand-muted leading-relaxed font-sans">
                      Information processed within secure container pods located in Geneva and Zurich, Switzerland. Zero US cloud leaks.
                    </p>
                  </div>

                  <div className="bg-brand-black/[2%] border border-brand-black/8 rounded-xl p-4.5 space-y-2" id="comp-widget-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-black/5 flex items-center justify-center text-brand-black">
                      <User size={18} />
                    </div>
                    <div className="text-[13px] font-bold text-brand-black">Human Validation Logs</div>
                    <p className="text-[11px] text-brand-muted leading-relaxed font-sans">
                      Audit access paths. Every automated correction below 95% SLA is directed to our secure, local operators for manual checks.
                    </p>
                  </div>
                </div>

                {/* Audit trail simulation lines */}
                <div className="bg-white border border-brand-black/8 rounded-xl p-5 shadow-sm space-y-3.5" id="compliance-logs-box">
                  <h3 className="text-[14.5px] font-bold text-brand-black flex items-center gap-2" id="logs-title">
                    <Activity size={15} className="text-emerald-500" />
                    Live Compliance Access Trail
                  </h3>

                  <div className="divide-y divide-brand-black/6 font-mono text-[10.5px] text-brand-muted space-y-2 pt-2" id="real-compliance-trails">
                    <div className="py-2 flex justify-between items-center" id="log-item-1">
                      <span>SEC_TLS_AUDIT: Key rotation successful. Encryption level verified across Geneva Node-4</span>
                      <span className="text-emerald-500 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">PASSED</span>
                    </div>
                    <div className="py-2 flex justify-between items-center" id="log-item-2">
                      <span>ANONYMIZER_PROC: Stripped business email pii components (beat.moreno@***.ch)</span>
                      <span className="text-emerald-500 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">SECURED</span>
                    </div>
                    <div className="py-2 flex justify-between items-center" id="log-item-3">
                      <span>PIPELINE_MUT_REST: User session token verify payload (Email Credentials)</span>
                      <span className="text-brand-black font-semibold bg-brand-black/5 px-1.5 py-0.5 rounded">AUTHENTICATED</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </main>
      </div>

      {/* FOOTER BAR */}
      <footer className="border-t border-brand-black/8 py-6.5 text-center text-[12px] text-brand-muted font-sans mt-auto" id="dashboard-footer">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>&copy; {new Date().getFullYear()} klar solution. Secure customer space.</span>
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck size={14} className="text-emerald-500" /> DSGVO/GDPR Compliant
            </span>
            <span>🇨🇭 Swiss Hub</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
