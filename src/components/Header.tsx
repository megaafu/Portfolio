"use client";

import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  Github,
  FileText,
  Check,
  Copy,
  Sun,
  Moon,
  Globe,
  Sparkles
} from 'lucide-react';
import { usePreferences } from '@/context/PreferencesContext';
import { TRANSLATIONS } from '@/data/translations';

interface HeaderProps {
  onOpenResume: () => void;
}

export default function Header({ onOpenResume }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const { theme, toggleTheme, language, toggleLanguage } = usePreferences();
  const t = TRANSLATIONS[language];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      // Dynamic active section detection
      const sections = ['web-platforms', 'mobile-ecosystem', 'impact', 'services', 'timeline'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hanselmega@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <header
      id="main-header"
      className="fixed top-2.5 sm:top-4 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none"
    >
      <div
        className={`pointer-events-auto max-w-6xl mx-auto rounded-2xl sm:rounded-full glass-header hairline-border transition-all duration-300 relative overflow-hidden ${
          scrolled
            ? 'py-2 sm:py-2.5 px-3.5 sm:px-5 shadow-[0_12px_40px_rgba(0,0,0,0.2)] dark:shadow-[0_16px_50px_rgba(0,0,0,0.65)] border-amber-gold/25'
            : 'py-2.5 sm:py-3 px-4 sm:px-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.45)]'
        }`}
      >
        {/* Subtle dynamic scroll progress hairline indicator */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-amber-gold to-emerald-400 opacity-70 transition-all duration-150 ease-out"
          style={{ width: `${Math.min(Math.max(scrollProgress, 0), 100)}%` }}
        />

        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Monogram & Live Architectural Status */}
          <a
            id="brand-logo"
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none shrink-0"
            aria-label="Mega Afú Home"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-gold/25 via-amber-gold/10 to-transparent border hairline-border-gold flex items-center justify-center font-mono font-bold text-xs text-amber-gold group-hover:scale-105 group-hover:border-amber-gold transition-all duration-200 shadow-sm">
              MA
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-sm sm:text-base tracking-wider font-bold text-[var(--text-primary)] group-hover:text-amber-gold transition-colors">
                  MEGA AFÚ
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono text-amber-gold/80 px-1.5 py-0.2 rounded bg-amber-gold/10 border hairline-border-gold">
                  ARCHITECT
                </span>
              </div>
              <span className="hidden md:inline-flex items-center gap-1.5 text-[10px] font-mono text-[var(--text-secondary)]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span>
                  {language === 'pt' ? 'Disponível • Resposta < 2h' : 'Available • < 2h Response SLA'}
                </span>
              </span>
            </div>
          </a>

          {/* Central High-Impact Navigation (Desktop - xl screens) */}
          <nav
            id="desktop-nav"
            className="hidden xl:flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--card-bg-start)] hairline-border text-xs text-[var(--text-secondary)] shadow-sm"
          >
            <a
              href="#web-platforms"
              className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                activeSection === 'web-platforms'
                  ? 'text-amber-gold font-medium bg-amber-gold/10 hairline-border-gold'
                  : 'hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {language === 'pt' ? 'Plataformas Web' : 'Web Systems'}
            </a>
            <a
              href="#mobile-ecosystem"
              className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all duration-200 ${
                activeSection === 'mobile-ecosystem'
                  ? 'text-emerald-500 font-medium bg-emerald-500/10 hairline-border-emerald'
                  : 'hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <span>{language === 'pt' ? 'Apps Play Store' : 'Play Store Apps'}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            </a>
            <a
              href="#impact"
              className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                activeSection === 'impact'
                  ? 'text-amber-gold font-medium bg-amber-gold/10 hairline-border-gold'
                  : 'hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {language === 'pt' ? 'Arquitetura' : 'Architecture'}
            </a>
            <a
              href="#services"
              className={`px-3 py-1.5 rounded-full flex items-center gap-1 transition-all duration-200 ${
                activeSection === 'services'
                  ? 'text-amber-gold font-medium bg-amber-gold/15 hairline-border-gold'
                  : 'text-amber-gold/90 hover:text-amber-gold hover:bg-amber-gold/10'
              }`}
            >
              <Sparkles className="w-3 h-3 text-amber-gold" />
              <span>{t.nav.services}</span>
            </a>
            <a
              href="#timeline"
              className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                activeSection === 'timeline'
                  ? 'text-amber-gold font-medium bg-amber-gold/10 hairline-border-gold'
                  : 'hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {t.nav.experience}
            </a>
          </nav>

          {/* Unified Action Dock: Controls, Resume, and Direct Contact */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Unified Preferences Capsule (Locale + Theme Switcher) */}
            <div className="flex items-center p-0.5 rounded-full bg-[var(--card-bg-start)] hairline-border shadow-sm">
              {/* Language Switch */}
              <button
                onClick={toggleLanguage}
                id="lang-toggle-btn"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono text-[var(--text-secondary)] hover:text-amber-gold hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer"
                title={`Switch to ${language === 'en' ? 'Português' : 'English'}`}
                aria-label="Toggle language"
              >
                <Globe className="w-3.5 h-3.5 text-amber-gold" />
                <span className="font-semibold uppercase text-[11px]">{language}</span>
              </button>

              <span className="w-px h-3.5 bg-[var(--border-color)] mx-0.5" />

              {/* Dark / Light Theme Toggle */}
              <button
                onClick={toggleTheme}
                id="theme-toggle-btn"
                className="p-1 sm:p-1.5 rounded-full text-[var(--text-secondary)] hover:text-amber-gold hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer focus:outline-none"
                title={theme === 'dark' ? t.theme.toggleToLight : t.theme.toggleToDark}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-3.5 h-3.5 text-amber-gold" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-slate-700" />
                )}
              </button>
            </div>

            {/* GitHub Quick Link */}
            <a
              id="header-github-btn"
              href="https://github.com/megaafu"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex p-1.5 sm:p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-amber-gold/40 bg-[var(--card-bg-start)] hairline-border transition-all shadow-sm"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Resume Trigger Pill */}
            <button
              id="header-resume-btn"
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-[var(--text-primary)] hover:text-amber-gold bg-[var(--card-bg-start)] hairline-border hover:border-amber-gold/40 transition-all shadow-sm cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-amber-gold" />
              <span>{t.nav.resume}</span>
            </button>

            {/* Let's Talk Magnetic CTA */}
            <a
              id="header-talk-btn"
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-sans font-bold transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98] bg-slate-900 text-white hover:bg-blue-600 dark:bg-[#e2b873] dark:text-[#0c0e12] dark:hover:bg-[#ffd48e] dark:shadow-[0_0_20px_rgba(226,184,115,0.45)] cursor-pointer"
            >
              <span>{t.nav.contact}</span>
              <ArrowRight className="w-3 h-3" />
            </a>

            {/* Mobile & Tablet Hamburger Toggle */}
            <button
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 sm:p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--card-bg-start)] hairline-border focus:outline-none cursor-pointer"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 text-amber-gold" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Mobile / Tablet Sheet Drawer */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[-1] xl:hidden pointer-events-auto animate-in fade-in duration-150"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-nav-panel"
            className="pointer-events-auto xl:hidden mt-2 max-w-6xl mx-auto p-5 rounded-2xl bg-[var(--card-bg-start)] hairline-border shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200"
          >
          <div className="flex items-center justify-between pb-3 border-b hairline-border">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-mono text-[var(--text-secondary)]">
                {t.nav.status}
              </span>
            </div>
            <span className="text-xs font-mono text-amber-gold">Maputo, Mozambique</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm font-mono text-[var(--text-secondary)]">
            <a
              href="#web-platforms"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:text-amber-gold hover:bg-black/5 dark:hover:bg-white/[0.04] transition-colors flex items-center justify-between"
            >
              <span>01 — {language === 'pt' ? 'Plataformas Web' : 'Web Systems'}</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-40" />
            </a>
            <a
              href="#mobile-ecosystem"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:text-emerald-500 hover:bg-black/5 dark:hover:bg-white/[0.04] transition-colors flex items-center justify-between"
            >
              <span>02 — {language === 'pt' ? 'Apps Play Store' : 'Play Store Apps'}</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-40" />
            </a>
            <a
              href="#impact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:text-amber-gold hover:bg-black/5 dark:hover:bg-white/[0.04] transition-colors flex items-center justify-between"
            >
              <span>03 — {language === 'pt' ? 'Sistemas & Arquitetura' : 'Architecture'}</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-40" />
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-amber-gold hover:bg-amber-gold/10 transition-colors font-medium flex items-center justify-between"
            >
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                04 — {t.nav.services}
              </span>
              <ArrowRight className="w-3.5 h-3.5 opacity-60" />
            </a>
            <a
              href="#timeline"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:text-amber-gold hover:bg-black/5 dark:hover:bg-white/[0.04] transition-colors flex items-center justify-between"
            >
              <span>05 — {t.nav.experience}</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-40" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:text-amber-gold hover:bg-black/5 dark:hover:bg-white/[0.04] transition-colors flex items-center justify-between"
            >
              <span>06 — {t.nav.contact}</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-40" />
            </a>
          </div>

          <div className="pt-3 border-t hairline-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl hairline-border bg-black/5 dark:bg-white/[0.03] text-xs font-mono text-[var(--text-primary)] hover:border-amber-gold/40 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-amber-gold" />
              <span>{t.nav.resume}</span>
            </button>

            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 text-xs font-mono text-amber-gold hover:underline cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500">{t.hero.ctaCopied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>hanselmega@gmail.com</span>
                </>
              )}
            </button>
          </div>
        </div>
        </>
      )}
    </header>
  );
}
