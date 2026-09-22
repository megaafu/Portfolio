"use client";

import React, { useState, useEffect } from 'react';
import { MessageCircle, Mail, ArrowRight, X } from 'lucide-react';
import { usePreferences } from '@/context/PreferencesContext';
import { TRANSLATIONS } from '@/data/translations';

export default function FloatingStickyContactDock() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { language } = usePreferences();
  const t = TRANSLATIONS[language].floatingDock;

  useEffect(() => {
    const handleScroll = () => {
      // Show floating contact dock once the user has scrolled past 400px
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible || dismissed) return null;

  return (
    <aside
      id="floating-contact-dock"
      aria-label="Quick contact dock"
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300 pointer-events-auto"
    >
      <div className="flex items-center gap-2 p-1.5 sm:p-2 rounded-full bg-white/95 dark:bg-[#11141b]/95 backdrop-blur-xl border border-slate-200/90 dark:border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
        {/* Status indicator */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 text-xs font-mono text-slate-700 dark:text-slate-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-medium text-[11px]">{t.status}</span>
        </div>

        {/* WhatsApp 1-Tap button */}
        <a
          id="dock-whatsapp-btn"
          href={`https://wa.me/258845937271?text=${encodeURIComponent(
            language === 'pt'
              ? 'Olá Mega, estou a ver o teu portfólio e gostaria de falar diretamente contigo.'
              : 'Hi Mega, I am reviewing your portfolio and would like to connect directly.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-emerald-800 dark:text-emerald-400 hover:text-emerald-950 dark:hover:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300/80 dark:border-emerald-500/30 transition-all cursor-pointer shadow-sm"
          title="WhatsApp 1-Tap"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span className="text-[11px] hidden sm:inline">{t.whatsapp}</span>
        </a>

        {/* Email button */}
        <a
          id="dock-email-btn"
          href="mailto:hanselmega@gmail.com?subject=Senior%20Architecture%20Inquiry"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 transition-all"
          title="Direct Email"
        >
          <Mail className="w-3.5 h-3.5 text-amber-600 dark:text-amber-gold" />
          <span className="text-[11px] hidden sm:inline">{t.email}</span>
        </a>

        {/* Primary Contact CTA */}
        <a
          id="dock-talk-btn"
          href="#contact"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold text-[#0c0e12] bg-gradient-to-r from-amber-gold to-[#f0ca85] hover:brightness-105 transition-all shadow-[0_0_15px_rgba(226,184,115,0.35)]"
        >
          <span className="text-[11px]">{t.talk}</span>
          <ArrowRight className="w-3 h-3" />
        </a>

        {/* Dismiss trigger */}
        <button
          onClick={() => setDismissed(true)}
          className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors ml-0.5"
          aria-label="Dismiss quick contact dock"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
