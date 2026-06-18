import React, { useState, useEffect } from 'react';
import { 
  Lock, 
  Mail, 
  User, 
  Building2, 
  Eye, 
  EyeOff, 
  ArrowLeft, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Loader2,
  AlertCircle,
  X,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

interface AuthPageProps {
  currentLang: 'de' | 'en' | 'zh' | 'es' | 'fr';
  onClose: () => void;
  onAuthSuccess: (user: { name: string; email: string; company?: string; method: string }) => void;
}

const authTranslations = {
  de: {
    back: "Zurück zur Startseite",
    signInTitle: "Willkommen zurück",
    signInSubtitle: "Melden Sie sich an, um auf Ihre AI-Pipelines zuzugreifen.",
    signUpTitle: "Konto erstellen",
    signUpSubtitle: "Mensch-validierte AI-Automation für Ihr Unternehmen.",
    emailLabel: "Geschäftliche E-Mail",
    passwordLabel: "Passwort",
    nameLabel: "Vollständiger Name",
    companyLabel: "Firmenname (optional)",
    rememberMe: "Angemeldet bleiben",
    forgotPassword: "Passwort vergessen?",
    orContinueWith: "Oder weiter mit",
    noAccount: "Noch kein Konto?",
    haveAccount: "Bereits registriert?",
    signUpCTA: "Kostenlos registrieren",
    signInCTA: "Jetzt anmelden",
    agreeToTerms: "Ich stimme den Datenschutzbestimmungen und DSGVO-Richtlinien zu.",
    passwordRequirements: "Mindestens 8 Zeichen erforderlich",
    securingSession: "Sitzung wird gesichert...",
    successMessage: "Erfolgreich authentifiziert!",
    wrongPassword: "Ungültiges Passwort oder Benutzer nicht gefunden.",
    requiredFields: "Bitte alle Pflichtfelder ausfüllen.",
    connectingSSO: "Verbindung mit {provider} wird hergestellt...",
    ssoSuccess: "Über {provider} angemeldet!",
    chooseSSOAccount: "Konto auswählen",
    ssoHeader: "Sichere Einmalanmeldung",
    demoAccountNotice: "Tipp: Nutzen Sie admin@klar-solution.com / admin123 für den schnellen Test!"
  },
  en: {
    back: "Back to Home",
    signInTitle: "Welcome back",
    signInSubtitle: "Sign in to access your AI pipelines and dashboards.",
    signUpTitle: "Create Account",
    signUpSubtitle: "Human-in-the-loop AI automation tailored for you.",
    emailLabel: "Business Email",
    passwordLabel: "Password",
    nameLabel: "Full Name",
    companyLabel: "Company Name (optional)",
    rememberMe: "Keep me signed in",
    forgotPassword: "Forgot password?",
    orContinueWith: "Or continue with",
    noAccount: "Don't have an account?",
    haveAccount: "Already registered?",
    signUpCTA: "Create Account",
    signInCTA: "Sign In",
    agreeToTerms: "I agree to the privacy policy and GDPR terms.",
    passwordRequirements: "At least 8 characters required",
    securingSession: "Securing session...",
    successMessage: "Authentication successful!",
    wrongPassword: "Invalid credentials or user not found.",
    requiredFields: "Please fill in all required fields.",
    connectingSSO: "Connecting with {provider}...",
    ssoSuccess: "Connected via {provider}!",
    chooseSSOAccount: "Select Account",
    ssoHeader: "Secure Single Sign-On",
    demoAccountNotice: "Tip: Use admin@klar-solution.com / admin123 for a quick demo!"
  },
  zh: {
    back: "返回主页",
    signInTitle: "欢迎回来",
    signInSubtitle: "登录以管理您的 AI 自动化管道和仪表盘",
    signUpTitle: "创建您的账户",
    signUpSubtitle: "专属企业级人机协同 AI 流程优化平台",
    emailLabel: "企业邮箱",
    passwordLabel: "密码",
    nameLabel: "您的姓名",
    companyLabel: "公司名称 (选填)",
    rememberMe: "保持登录状态",
    forgotPassword: "忘记密码？",
    orContinueWith: "或者使用第三方一键登录",
    noAccount: "尚未拥有账户？",
    haveAccount: "已有账户？",
    signUpCTA: "注册账户",
    signInCTA: "立即登录",
    agreeToTerms: "我已阅读并同意隐私政策与 GDPR 条款",
    passwordRequirements: "密码长度需至少 8 位",
    securingSession: "安全配置会话中...",
    successMessage: "登录成功！",
    wrongPassword: "邮箱或密码错误，请重试",
    requiredFields: "请完整填写必填项",
    connectingSSO: "正在连接 {provider} 账户...",
    ssoSuccess: "已通过 {provider} 成功授权！",
    chooseSSOAccount: "选择要登录的账户",
    ssoHeader: "安全单点登录",
    demoAccountNotice: "提示：可使用 admin@klar-solution.com / admin123 快捷体验！"
  },
  es: {
    back: "Volver al inicio",
    signInTitle: "Bienvenido de nuevo",
    signInSubtitle: "Inicie sesión para acceder a sus flujos de IA.",
    signUpTitle: "Crear Cuenta",
    signUpSubtitle: "Automatización con IA human-in-the-loop elegida para ti.",
    emailLabel: "Email de empresa",
    passwordLabel: "Contraseña",
    nameLabel: "Nombre completo",
    companyLabel: "Nombre de empresa (opcional)",
    rememberMe: "Mantener sesión iniciada",
    forgotPassword: "¿Olvidó su contraseña?",
    orContinueWith: "O continuar con",
    noAccount: "¿No tienes cuenta?",
    haveAccount: "¿Ya tienes una cuenta?",
    signUpCTA: "Registrarse gratis",
    signInCTA: "Iniciar Sesión",
    agreeToTerms: "Acepto las políticas de privacidad y protección de datos.",
    passwordRequirements: "Mínimo 8 caracteres requeridos",
    securingSession: "Asegurando la sesión...",
    successMessage: "¡Autenticación con éxito!",
    wrongPassword: "Credenciales incorrectas o usuario no encontrado.",
    requiredFields: "Por favor, complete todos los campos obligatorios.",
    connectingSSO: "Conectando con {provider}...",
    ssoSuccess: "¡Conectado mediante {provider}!",
    chooseSSOAccount: "Seleccionar cuenta",
    ssoHeader: "Inicio de sesión seguro",
    demoAccountNotice: "Sugerencia: ¡Pruebe admin@klar-solution.com / admin123!"
  },
  fr: {
    back: "Retour à l'accueil",
    signInTitle: "Heureux de vous revoir",
    signInSubtitle: "Connectez-vous pour accéder à vos processus d'IA.",
    signUpTitle: "Créer un compte",
    signUpSubtitle: "L'automatisation IA validée par l'humain pour votre PME.",
    emailLabel: "Email professionnel",
    passwordLabel: "Mot de passe",
    nameLabel: "Nom complet",
    companyLabel: "Nom de l'entreprise (optionnel)",
    rememberMe: "Se souvenir de moi",
    forgotPassword: "Mot de passe oublié ?",
    orContinueWith: "Ou continuer avec",
    noAccount: "Pas encore de compte ?",
    haveAccount: "Déjà inscrit ?",
    signUpCTA: "S'inscrire gratuitement",
    signInCTA: "Se connecter",
    agreeToTerms: "J'accepte la politique de confidentialité et les directives RGPD.",
    passwordRequirements: "Au moins 8 caractères requis",
    securingSession: "Sécurisation de la session...",
    successMessage: "Authentification réussie !",
    wrongPassword: "Identifiants invalides ou utilisateur introuvable.",
    requiredFields: "Veuillez remplir tous les champs obligatoires.",
    connectingSSO: "Connexion à {provider}...",
    ssoSuccess: "Connecté via {provider} !",
    chooseSSOAccount: "Choisir un compte",
    ssoHeader: "Authentification unique sécurisée",
    demoAccountNotice: "Astuce : Utilisez admin@klar-solution.com / admin123 pour tester rapidement !"
  }
};

export default function AuthPage({ currentLang, onClose, onAuthSuccess }: AuthPageProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [companyInput, setCompanyInput] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  
  // UI states
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [authSuccess, setAuthSuccess] = useState(false);
  
  // SSO custom modal simulation
  const [ssoModalOpen, setSsoModalOpen] = useState(false);
  const [ssoProvider, setSsoProvider] = useState<'Google' | 'Facebook' | 'Apple' | null>(null);
  const [ssoStep, setSsoStep] = useState<'loading' | 'choose' | 'success'>('loading');

  const t = authTranslations[currentLang] || authTranslations.de;

  // Pre-seed demo user into localStorage if not already there
  useEffect(() => {
    const defaultUsers = localStorage.getItem('klar_solution_users');
    if (!defaultUsers) {
      const initial = [
        {
          name: "Klaus Rüegg",
          email: "admin@klar-solution.com",
          password: "admin123",
          company: "Rüegg & Partner AG"
        }
      ];
      localStorage.setItem('klar_solution_users', JSON.stringify(initial));
    }
  }, []);

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    
    if (!emailInput || !passwordInput || (isSignUp && !nameInput)) {
      setErrorMsg(t.requiredFields);
      return;
    }

    if (isSignUp && !agreeTerms) {
      setErrorMsg(currentLang === 'de' ? "Bitte stimmen Sie den Bestimmungen zu." : "Please agree to the privacy terms.");
      return;
    }

    setLoading(true);

    // Get current registered users
    const usersStr = localStorage.getItem('klar_solution_users') || '[]';
    const users = JSON.parse(usersStr);

    setTimeout(() => {
      if (isSignUp) {
        // Registering a new account
        const emailExists = users.some((u: any) => u.email.toLowerCase() === emailInput.toLowerCase());
        if (emailExists) {
          setErrorMsg(currentLang === 'de' ? "Ein Konto mit dieser E-Mail existiert bereits." : "An account with this email already exists.");
          setLoading(false);
          return;
        }

        const newUser = {
          name: nameInput,
          email: emailInput,
          password: passwordInput,
          company: companyInput || 'Klar Guest'
        };

        users.push(newUser);
        localStorage.setItem('klar_solution_users', JSON.stringify(users));
        
        setLoading(false);
        setAuthSuccess(true);
        setTimeout(() => {
          onAuthSuccess({
            name: newUser.name,
            email: newUser.email,
            company: newUser.company,
            method: 'Email Credentials'
          });
        }, 1000);
      } else {
        // Logging in
        const matchedUser = users.find(
          (u: any) => u.email.toLowerCase() === emailInput.toLowerCase() && u.password === passwordInput
        );

        if (matchedUser) {
          setLoading(false);
          setAuthSuccess(true);
          setTimeout(() => {
            onAuthSuccess({
              name: matchedUser.name,
              email: matchedUser.email,
              company: matchedUser.company,
              method: 'Email Credentials'
            });
          }, 1000);
        } else {
          setLoading(false);
          setErrorMsg(t.wrongPassword);
        }
      }
    }, 1200);
  };

  // Launch simulated SSO
  const triggerSSO = (provider: 'Google' | 'Facebook' | 'Apple') => {
    setSsoProvider(provider);
    setSsoStep('loading');
    setSsoModalOpen(true);

    // Step 1: Loading provider interface (simulate API redirect token fetch)
    setTimeout(() => {
      setSsoStep('choose');
    }, 1500);
  };

  const selectSSOProfile = (profileName: string, profileEmail: string) => {
    setSsoStep('success');
    
    setTimeout(() => {
      setSsoModalOpen(false);
      onAuthSuccess({
        name: profileName,
        email: profileEmail,
        company: `${profileName.split(' ')[0]} AG`,
        method: ssoProvider + ' SSO'
      });
    }, 1200);
  };

  const handleAutoFillDemo = () => {
    setEmailInput('admin@klar-solution.com');
    setPasswordInput('admin123');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#FBFBFA] flex items-center justify-center p-4 sm:p-6 overflow-hidden select-none" id="auth-main-container">
      {/* Background glow ornaments */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Centered minimalist responsive card */}
      <div className="bg-white w-full max-w-[420px] rounded-2xl border border-brand-black/8 shadow-xl flex flex-col relative z-10 overflow-hidden" id="auth-compact-card">
        
        {/* Top Header Controls */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-brand-black/5" id="auth-form-top-bar">
          <button 
            onClick={onClose}
            className="flex items-center gap-1.5 text-[12px] text-brand-muted hover:text-brand-black font-semibold cursor-pointer transition-colors"
            id="auth-back-home-btn"
          >
            <ArrowLeft size={14} />
            <span>{t.back}</span>
          </button>
          
          <div className="text-[10px] font-mono text-brand-muted bg-brand-black/5 px-2 py-0.5 rounded" id="auth-lang-indicator">
            Lang: <span className="font-extrabold text-brand-black uppercase">{currentLang}</span>
          </div>
        </div>

        {/* Content with no scroll */}
        <div className="p-5 flex-1 flex flex-col justify-between" id="auth-card-body">
          <div>
            {/* Centered Small Logo Icon */}
            <Logo className="justify-center mb-4 text-brand-black" />

            {/* Title & Subtitle */}
            <div className="text-center mb-4">
              <h1 className="font-display text-[20px] font-extrabold tracking-tight text-brand-black leading-tight" id="auth-main-title">
                {isSignUp ? t.signUpTitle : t.signInTitle}
              </h1>
              <p className="text-[12px] text-brand-muted font-sans mt-0.5 leading-normal" id="auth-main-subtitle">
                {isSignUp ? t.signUpSubtitle : t.signInSubtitle}
              </p>
            </div>

            {/* Auto-fill Helper Pill instead of big box */}
            {!isSignUp && (
              <button
                type="button"
                onClick={handleAutoFillDemo}
                className="w-full mb-3.5 p-2 bg-accent/4 hover:bg-accent/8 border border-accent/12 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer text-accent group"
                id="demo-autofill-button"
              >
                <AlertCircle size={13} className="shrink-0 animate-bounce group-hover:scale-110" />
                <span className="text-[10.5px] font-bold font-sans">
                  {currentLang === 'de' ? "Demo Auto-Fill (admin@klar-solution.com)" : "Autofill Demo (admin@klar-solution.com)"}
                </span>
              </button>
            )}

            {errorMsg && (
              <div className="mb-3 p-2.5 bg-red-50 border border-red-150 text-red-700 text-[11px] rounded-xl flex items-center gap-1.5 font-sans" id="auth-client-error">
                <AlertCircle size={13} className="shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleAuthSubmit} className="space-y-3" id="auth-core-form">
              {isSignUp && (
                <div className="grid grid-cols-2 gap-2.5" id="form-group-signup-split">
                  {/* Name input */}
                  <div className="relative group" id="form-group-name">
                    <label className="block text-[9.5px] font-bold uppercase tracking-wider text-brand-muted mb-1 font-sans">
                      {t.nameLabel} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted/70 group-focus-within:text-accent transition-colors">
                        <User size={13} />
                      </span>
                      <input 
                        type="text"
                        required
                        placeholder="Klaus Rüegg"
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        className="w-full bg-brand-black/4 border border-brand-black/8 rounded-xl pl-8 pr-2.5 py-1.5 text-[12.5px] font-sans text-brand-black placeholder-brand-black/25 placeholder:font-light outline-none focus:border-accent focus:ring-1 focus:ring-accent/10 transition-all"
                        id="auth-input-name"
                      />
                    </div>
                  </div>

                  {/* Company Input */}
                  <div className="relative group" id="form-group-company">
                    <label className="block text-[9.5px] font-bold uppercase tracking-wider text-brand-muted mb-1 font-sans">
                      {t.companyLabel.split(' ')[0]}
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted/70 group-focus-within:text-accent transition-colors">
                        <Building2 size={13} />
                      </span>
                      <input 
                        type="text"
                        placeholder="Rüegg AG"
                        value={companyInput}
                        onChange={(e) => setCompanyInput(e.target.value)}
                        className="w-full bg-brand-black/4 border border-brand-black/8 rounded-xl pl-8 pr-2.5 py-1.5 text-[12.5px] font-sans text-brand-black placeholder-brand-black/25 placeholder:font-light outline-none focus:border-accent focus:ring-1 focus:ring-accent/10 transition-all"
                        id="auth-input-company"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Email Input */}
              <div className="relative group" id="form-group-email">
                <label className="block text-[9.5px] font-bold uppercase tracking-wider text-brand-muted mb-1 font-sans">
                  {t.emailLabel} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted/70 group-focus-within:text-accent transition-colors">
                    <Mail size={13} />
                  </span>
                  <input 
                    type="email"
                    required
                    placeholder="name@company.ch"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full bg-brand-black/4 border border-brand-black/8 rounded-xl pl-8 pr-2.5 py-1.5 text-[12.5px] font-sans text-brand-black placeholder-brand-black/25 placeholder:font-light outline-none focus:border-accent focus:ring-1 focus:ring-accent/10 transition-all"
                    id="auth-input-email"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="relative group" id="form-group-password">
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-[9.5px] font-bold uppercase tracking-wider text-brand-muted font-sans">
                    {t.passwordLabel} <span className="text-red-500">*</span>
                  </label>
                  {!isSignUp && (
                    <button 
                      type="button"
                      onClick={() => alert("Simulated password reset email sent!")}
                      className="text-[9.5px] text-accent hover:underline cursor-pointer font-sans"
                      id="auth-forgot-pw-btn"
                    >
                      {t.forgotPassword}
                    </button>
                  )}
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted/70 group-focus-within:text-accent transition-colors">
                    <Lock size={13} />
                  </span>
                  <input 
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className="w-full bg-brand-black/4 border border-brand-black/8 rounded-xl pl-8 pr-8.5 py-1.5 text-[12.5px] font-sans text-brand-black placeholder-brand-black/25 placeholder:font-light outline-none focus:border-accent focus:ring-1 focus:ring-accent/10 transition-all"
                    id="auth-input-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-brand-muted/60 hover:text-brand-black cursor-pointer"
                    id="auth-password-toggle-eye"
                  >
                    {showPassword ? <EyeOff size={13} /> : <Eye size={13} />}
                  </button>
                </div>
              </div>

              {isSignUp ? (
                <div className="flex items-start gap-2 py-0.5" id="terms-agree-row">
                  <input 
                    type="checkbox"
                    required
                    id="agree-checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="w-3.5 h-3.5 rounded border-brand-black/20 focus:ring-accent text-accent cursor-pointer mt-0.5"
                  />
                  <label htmlFor="agree-checkbox" className="text-[10.5px] leading-tight text-brand-muted cursor-pointer select-none font-sans">
                    {t.agreeToTerms}
                  </label>
                </div>
              ) : (
                <div className="flex items-center justify-between py-0.5" id="remember-me-row">
                  <label className="flex items-center gap-1.5 text-[10.5px] text-brand-muted cursor-pointer select-none font-sans">
                    <input 
                      type="checkbox"
                      defaultChecked
                      className="w-3.5 h-3.5 rounded border-brand-black/20 focus:ring-accent text-accent cursor-pointer"
                    />
                    <span>{t.rememberMe}</span>
                  </label>
                </div>
              )}

              <button
                type="submit"
                disabled={loading || authSuccess}
                className="w-full bg-brand-black text-white hover:bg-accent py-2 px-4 rounded-xl text-[12.5px] font-bold transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 shadow-sm font-display"
                id="auth-submit-action-btn"
              >
                {loading ? (
                  <>
                    <Loader2 size={13} className="animate-spin" />
                    <span>{t.securingSession}</span>
                  </>
                ) : authSuccess ? (
                  <>
                    <Check size={13} className="text-emerald-400" />
                    <span>{t.successMessage}</span>
                  </>
                ) : (
                  <span>{isSignUp ? t.signUpCTA : t.signInCTA}</span>
                )}
              </button>
            </form>

            {/* Social SSO login dividers */}
            <div className="my-3 flex items-center gap-2 text-brand-muted text-[9.5px] font-bold uppercase tracking-wider font-sans" id="sso-divider">
              <span className="h-[0.5px] bg-brand-black/8 grow" />
              <span>{t.orContinueWith}</span>
              <span className="h-[0.5px] bg-brand-black/8 grow" />
            </div>

            {/* SSO integration buttons */}
            <div className="grid grid-cols-3 gap-2" id="sso-buttons-grid">
              {/* Google */}
              <button
                type="button"
                onClick={() => triggerSSO('Google')}
                className="flex items-center justify-center gap-1 py-1.5 px-2 bg-brand-white border border-brand-black/8 rounded-xl hover:bg-brand-black/3 cursor-pointer transition-all"
                id="sso-google-btn"
              >
                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M12 5.04c1.64 0 3.12.56 4.28 1.67L19.5 3.5C17.46 1.63 14.93.5 12 .5 7.37.5 3.4 3.17 1.5 7.07l3.78 2.93c.9-2.7 3.4-4.96 6.72-4.96z"/>
                  <path fill="#4285F4" d="M23.5 12.25c0-.84-.07-1.65-.22-2.42H12v4.58h6.47c-.28 1.48-1.12 2.73-2.38 3.58l3.78 2.93c2.2-2.03 3.63-5.02 3.63-8.67z"/>
                  <path fill="#FBBC05" d="M5.28 14.65c-.23-.7-.36-1.44-.36-2.2s.13-1.5.36-2.2L1.5 7.32C.54 9.17 0 11.23 0 13.4s.54 4.23 1.5 6.08l3.78-2.93z"/>
                  <path fill="#34A853" d="M12 23.5c3.24 0 5.97-1.08 7.96-2.92l-3.78-2.93c-1.1.74-2.52 1.18-4.18 1.18-3.32 0-5.82-2.26-6.72-4.96L1.5 16.8c1.9 3.9 5.87 6.7 10.5 6.7z"/>
                </svg>
                <span className="text-[11px] font-semibold text-brand-black">Google</span>
              </button>

              {/* Facebook */}
              <button
                type="button"
                onClick={() => triggerSSO('Facebook')}
                className="flex items-center justify-center gap-1 py-1.5 px-2 bg-brand-white border border-brand-black/8 rounded-xl hover:bg-brand-black/3 cursor-pointer transition-all"
                id="sso-facebook-btn"
              >
                <svg className="w-3.5 h-3.5 shrink-0 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-[11px] font-semibold text-brand-black">Facebook</span>
              </button>

              {/* Apple */}
              <button
                type="button"
                onClick={() => triggerSSO('Apple')}
                className="flex items-center justify-center gap-1 py-1.5 px-2 bg-brand-white border border-brand-black/8 rounded-xl hover:bg-brand-black/3 cursor-pointer transition-all"
                id="sso-apple-btn"
              >
                <svg className="w-3.5 h-3.5 shrink-0 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.1.09 2.23-.58 2.95-1.39z"/>
                </svg>
                <span className="text-[11px] font-semibold text-brand-black">Apple</span>
              </button>
            </div>
          </div>

          {/* Toggle link */}
          <div className="mt-4 text-center text-[12px] text-brand-muted font-sans" id="switch-auth-mode">
            {isSignUp ? (
              <span>
                {t.haveAccount} &nbsp;
                <button 
                  type="button" 
                  onClick={() => { setIsSignUp(false); setErrorMsg(''); }}
                  className="text-accent font-bold hover:underline cursor-pointer"
                  id="switch-to-signin-btn"
                >
                  {t.signInCTA}
                </button>
              </span>
            ) : (
              <span>
                {t.noAccount} &nbsp;
                <button 
                  type="button" 
                  onClick={() => { setIsSignUp(true); setErrorMsg(''); }}
                  className="text-accent font-bold hover:underline cursor-pointer"
                  id="switch-to-signup-btn"
                >
                  {t.signUpCTA}
                </button>
              </span>
            )}
          </div>
        </div>

        {/* Footer legal notes - extremely compact */}
        <div className="bg-brand-black/2 py-2 px-5 text-center text-[9.5px] text-brand-muted/70 font-sans border-t border-brand-black/5 flex items-center justify-between" id="auth-legal-footer">
          <span>&copy; {new Date().getFullYear()} klar.</span>
          <div className="flex gap-2.5">
            <a href="#" className="hover:text-brand-black hover:underline">DSGVO</a>
            <a href="#" className="hover:text-brand-black hover:underline">Impressum</a>
          </div>
        </div>
      </div>

      {/* SECURE POPUP MODAL FOR SSO CHOOSE ACCOUNT SIMULATION */}
      <AnimatePresence id="sso-sim-modal-presence">
        {ssoModalOpen && (
          <div className="fixed inset-0 z-[100] bg-brand-black/60 flex items-center justify-center p-4 backdrop-blur-sm" id="sso-simulation-overlay">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-brand-white w-full max-w-[420px] rounded-2xl shadow-2xl border border-brand-black/8 overflow-hidden font-sans"
              id="sso-sim-dialog"
            >
              {/* Header */}
              <div className="bg-brand-black text-brand-white p-5 flex items-center justify-between" id="sso-header-div">
                <div className="flex items-center gap-2" id="sso-header-logo">
                  <div className="w-5 h-5 rounded bg-accent flex items-center justify-center text-white text-[11px] font-bold">K</div>
                  <span className="font-display text-[15px] font-black">klar authentication</span>
                </div>
                <button 
                  onClick={() => setSsoModalOpen(false)} 
                  className="text-brand-white/70 hover:text-white cursor-pointer"
                  id="close-sso-provider"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6" id="sso-sim-body">
                {ssoStep === 'loading' && (
                  <div className="flex flex-col items-center justify-center py-10 text-center gap-4" id="sso-loading-container">
                    <Loader2 size={36} className="animate-spin text-accent" />
                    <div>
                      <div className="text-[13px] font-bold text-brand-black">
                        {t.connectingSSO.replace('{provider}', ssoProvider || '')}
                      </div>
                      <div className="text-[11px] text-brand-muted mt-1">{t.ssoHeader}</div>
                    </div>
                  </div>
                )}

                {ssoStep === 'choose' && (
                  <div id="sso-choose-container">
                    <div className="text-[13px] font-bold uppercase tracking-wider text-brand-muted mb-4 text-center">
                      {t.chooseSSOAccount}
                    </div>
                    
                    <div className="space-y-2.5" id="sso-sim-accounts-list">
                      {/* Sim profile 1 */}
                      <button 
                        onClick={() => selectSSOProfile('John Doe', 'john.doe@company.com')}
                        className="w-full flex items-center justify-between p-3 border border-brand-black/8 rounded-xl hover:bg-brand-black/4 text-left cursor-pointer transition-colors"
                        id="sso-acc-option-1"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-accent/20 text-accent font-bold flex items-center justify-center text-[12px]">
                            JD
                          </div>
                          <div>
                            <div className="text-[13px] font-bold text-brand-black">John Doe</div>
                            <div className="text-[11px] text-brand-muted">john.doe@company.com</div>
                          </div>
                        </div>
                        <ChevronRight size={14} className="text-brand-muted" />
                      </button>

                      {/* Sim profile 2 */}
                      <button 
                        onClick={() => selectSSOProfile('Klaus Rüegg', 'admin@klar-solution.com')}
                        className="w-full flex items-center justify-between p-3 border border-brand-black/8 rounded-xl hover:bg-brand-black/4 text-left cursor-pointer transition-colors"
                        id="sso-acc-option-2"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-600 font-bold flex items-center justify-center text-[12px]">
                            KR
                          </div>
                          <div>
                            <div className="text-[13px] font-bold text-brand-black">Klaus Rüegg</div>
                            <div className="text-[11px] text-brand-muted">admin@klar-solution.com</div>
                          </div>
                        </div>
                        <ChevronRight size={14} className="text-brand-muted" />
                      </button>

                      {/* Sim profile 3 */}
                      <button 
                        onClick={() => selectSSOProfile('Samantha Lee', 'samantha.lee@techsolutions.com')}
                        className="w-full flex items-center justify-between p-3 border border-brand-black/8 rounded-xl hover:bg-brand-black/4 text-left cursor-pointer transition-colors"
                        id="sso-acc-option-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-600 font-bold flex items-center justify-center text-[12px]">
                            SL
                          </div>
                          <div>
                            <div className="text-[13px] font-bold text-brand-black">Samantha Lee</div>
                            <div className="text-[11px] text-brand-muted">samantha.lee@techsolutions.com</div>
                          </div>
                        </div>
                        <ChevronRight size={14} className="text-brand-muted" />
                      </button>
                    </div>
                  </div>
                )}

                {ssoStep === 'success' && (
                  <div className="flex flex-col items-center justify-center py-10 text-center gap-4" id="sso-success-container">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <Check size={24} />
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-brand-black">
                        {t.ssoSuccess.replace('{provider}', ssoProvider || '')}
                      </div>
                      <div className="text-[11px] text-brand-muted mt-0.5">{t.securingSession}</div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
