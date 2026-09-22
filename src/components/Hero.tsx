"use client";

import React, { useState } from 'react';
import { ArrowDown, Copy, Check, MessageCircle } from 'lucide-react';
import { usePreferences } from '@/context/PreferencesContext';
import { TRANSLATIONS } from '@/data/translations';

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { language } = usePreferences();
  const t = TRANSLATIONS[language];

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('hanselmega@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const statMetrics = [
    {
      value: '5+',
      label: language === 'pt' ? 'Anos em Missão Crítica' : 'Years Experience',
      sublabel: language === 'pt' ? 'Telecom, Fintech & Biometria' : 'Full-Stack & Mobile Systems',
    },
    {
      value: '100k+',
      label: language === 'pt' ? 'Utilizadores em Produção' : 'Active App Users',
      sublabel: language === 'pt' ? 'Aplicações Google Play Store' : 'Public Google Play Apps',
    },
    {
      value: '<2ms',
      label: language === 'pt' ? 'Latência de Webhooks' : 'Webhook Latency',
      sublabel: language === 'pt' ? 'Rails M-Pesa & e-Mola' : 'Deterministic Fintech Rails',
    },
    {
      value: '100%',
      label: language === 'pt' ? 'Disponibilidade Offline' : 'Offline-First SLA',
      sublabel: language === 'pt' ? 'Biometria & Sync Resiliente' : 'Encrypted Biometric Clients',
    },
  ];

  return (
    <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 pt-8 sm:pt-14 lg:pb-16 lg:pt-16">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Location Badge */}
        <div
          id="location-badge"
          className="inline-flex items-center justify-center gap-2.5 px-3.5 py-1.5 rounded-full border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#12151c]/90 text-[11px] font-mono text-slate-700 dark:text-slate-300 mb-6 backdrop-blur-md shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 animate-pulse"></span>
          <span className="tracking-wide text-slate-900 dark:text-white font-semibold">{t.hero.locationBadge}</span>
          <span className="opacity-30">•</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">{t.hero.remote}</span>
        </div>

        {/* Executive Headline with Clean Semantic Block Hierarchy */}
        <h1
          id="hero-title"
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-slate-900 dark:text-white tracking-tight leading-[1.18] mb-6 max-w-4xl px-2"
        >
          <span className="block">{t.hero.headlinePart1}</span>
          <span className="block my-1 sm:my-1.5">
            <em className="font-serif italic font-normal text-blue-600 dark:text-amber-gold pr-1">
              {t.hero.headlinePart2}
            </em>
          </span>
          <span className="block text-slate-800 dark:text-slate-100 font-light opacity-95">
            {t.hero.headlinePart3}
          </span>
        </h1>

        {/* Subheading Narrative */}
        <p
          id="hero-summary"
          className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300/90 max-w-3xl leading-relaxed mb-8 font-body px-2"
        >
          {t.hero.subheadline}
        </p>

        {/* Clean 2-Action Strip: Explore Work & Direct Contact */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 w-full sm:w-auto px-2">
          {/* Primary Action: View Work */}
          <a
            id="hero-cta-work"
            href="#web-platforms"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-sans font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-[#e2b873] dark:text-[#0c0e12] dark:hover:bg-[#ebd09e] transition-all shadow-[0_4px_14px_rgba(0,0,0,0.12)] dark:shadow-[0_0_25px_rgba(226,184,115,0.4)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{language === 'pt' ? 'Explorar Sistemas em Produção' : 'Explore Selected Work'}</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          {/* Secondary Action: WhatsApp / Direct Discussion */}
          <a
            id="hero-cta-contact"
            href={`https://wa.me/258845937271?text=${encodeURIComponent(
              language === 'pt'
                ? 'Olá Mega, analisei a sua arquitetura de engenharia e gostaria de falar sobre um projeto.'
                : 'Hi Mega, I reviewed your portfolio and would like to discuss a project/role.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-sans font-medium text-emerald-800 bg-emerald-50 border border-emerald-300/80 hover:bg-emerald-100/70 dark:text-slate-100 dark:bg-[#12151c] dark:border-white/10 dark:hover:border-amber-gold/40 transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{language === 'pt' ? 'Conversar via WhatsApp' : 'Get in Touch (WhatsApp)'}</span>
          </a>
        </div>

        {/* Minimal Direct Email Copy Pill & Verified Hardware Badges */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <button
            id="hero-copy-email-btn"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">{t.hero.ctaCopied}</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-blue-600 dark:text-amber-gold" />
                <span>hanselmega@gmail.com</span>
              </>
            )}
          </button>

          {/* Core Hardware & Telecom Capability Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-[10px] font-mono">
            <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300">
              {language === 'pt' ? 'Ponte Hardware NFC' : 'Hardware NFC Bridge'}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300">
              {language === 'pt' ? 'APIs M-Pesa & e-Mola' : 'M-Pesa & e-Mola APIs'}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300">
              {language === 'pt' ? 'SQLite Offline Cifrado' : 'Encrypted Offline SQLite'}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300">
              AGP 9.1 Kotlin DSL
            </span>
          </div>
        </div>

        {/* High-Impact 4-Metric Grid (Luminous in Light Mode, Radiant in Dark Mode) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full text-left">
          {statMetrics.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#11141b]/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-blue-500/60 dark:border-white/[0.08] dark:hover:border-amber-gold/50 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_10px_25px_-5px_rgba(0,0,0,0.03)] dark:shadow-none flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 dark:via-amber-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-2xl sm:text-3xl font-serif font-light text-blue-600 dark:text-amber-gold tracking-tight mb-1 tabular-nums">
                {stat.value}
              </div>
              <div>
                <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white font-sans leading-snug">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-body mt-0.5 leading-tight">
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
