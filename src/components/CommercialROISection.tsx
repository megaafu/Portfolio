"use client";

import React from 'react';
import { ShieldAlert, TrendingUp, CheckCircle2, ArrowRight, Zap, Database, Cpu, Rocket } from 'lucide-react';
import { usePreferences } from '@/context/PreferencesContext';
import { TRANSLATIONS } from '@/data/translations';

export default function CommercialROISection() {
  const { language } = usePreferences();
  const t = TRANSLATIONS[language].growthSection;

  const icons = [Database, ShieldAlert, Cpu, Rocket];

  return (
    <section id="commercial-roi" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 border-t hairline-border">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold mb-3">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>{t.tag}</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white font-light tracking-tight leading-tight mb-4">
          {t.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300/90 leading-relaxed font-body">
          {t.subtitle}
        </p>
      </div>

      {/* 4 Commercial ROI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
        {t.pillars.map((pillar, idx) => {
          const IconComponent = icons[idx] || Zap;
          return (
            <div
              key={idx}
              className="bg-white/95 dark:bg-[#11141b]/95 backdrop-blur-md p-6 rounded-2xl border border-slate-200/90 dark:border-white/[0.08] hover:border-amber-500/50 dark:hover:border-amber-gold/50 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:shadow-xl hover:-translate-y-0.5 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/[0.02] dark:bg-amber-gold/[0.02] rounded-full blur-xl pointer-events-none group-hover:bg-amber-500/[0.06] transition-all"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20">
                    {pillar.badge}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:text-amber-600 dark:group-hover:text-amber-gold transition-colors">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                <div className="font-mono text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-gold transition-colors">
                  {pillar.metric}
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 font-sans">
                  {pillar.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-body">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/80 dark:border-white/[0.06] flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{language === 'pt' ? 'Verificado em Produção' : 'Verified in Production'}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Commercial Conversion Banner */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-gold/5 to-emerald-500/10 dark:from-amber-gold/10 dark:via-transparent dark:to-emerald-500/10 border border-amber-500/25 dark:border-amber-gold/25 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 text-center md:text-left">
          <h4 className="font-serif text-xl sm:text-2xl text-slate-900 dark:text-white font-medium">
            {language === 'pt' ? 'Pronto para Acelerar a sua Entrega Técnica?' : 'Ready to Accelerate Your Product Timeline?'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-body max-w-xl">
            {t.scheduleSubtitle}
          </p>
        </div>

        <a
          id="roi-consultation-btn"
          href="#contact"
          className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-sans font-semibold text-[#0c0e12] bg-gradient-to-r from-amber-gold to-[#f0ca85] hover:brightness-105 transition-all shadow-[0_0_20px_rgba(226,184,115,0.35)] hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>{t.consultationCta}</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
