"use client";

import React from 'react';
import { Layers } from 'lucide-react';
import { FLAGSHIP_SYSTEMS } from '../data/portfolioData';
import { usePreferences } from '@/context/PreferencesContext';

export default function FlagshipSystems() {
  const { language } = usePreferences();

  return (
    <section id="impact" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t hairline-border">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-gold font-semibold flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            {language === 'pt' ? 'Arquiteturas em Produção' : 'Production Architectures'}
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[var(--text-primary)] font-light mt-1">
            {language === 'pt' ? 'Sistemas Centrais em Produção' : 'Featured Production Systems'}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-lg font-body">
          {language === 'pt'
            ? 'Arquiteturas de missão crítica projetadas para resiliência sob rigorosa conformidade regulatória, conectividade intermitente e alto impacto financeiro.'
            : 'Mission-critical architectures engineered for resilience under strict regulatory compliance, low-bandwidth constraints, and high financial stakes.'}
        </p>
      </div>

      {/* Balanced 5-Element Grid: Top 2 Enterprise Flagships (col-span-3), Bottom 3 Distributed Rails (col-span-2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6">
        {FLAGSHIP_SYSTEMS.map((system, idx) => {
          const isTopFeatured = idx < 2;
          return (
            <div
              key={system.id}
              id={`flagship-card-${system.id}`}
              className={`bg-white dark:bg-[var(--card-bg-start)] p-6 sm:p-7 rounded-2xl border border-slate-200/90 dark:border-white/10 hover:border-blue-500/60 dark:hover:border-amber-gold/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl shadow-[0_2px_12px_rgba(0,0,0,0.04),0_10px_25px_-5px_rgba(0,0,0,0.03)] dark:shadow-none relative overflow-hidden ${
                isTopFeatured
                  ? 'lg:col-span-3'
                  : 'lg:col-span-2'
              } ${idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/[0.02] dark:bg-amber-gold/[0.015] rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/[0.05] dark:group-hover:bg-amber-gold/[0.05] transition-colors"></div>

              <div>
                {/* Category & Status */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-blue-50 text-blue-800 border border-blue-200/90 dark:bg-amber-gold/10 dark:text-amber-gold dark:border-amber-gold/25 uppercase tracking-wide">
                    {language === 'pt' && system.categoryPt ? system.categoryPt : system.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50/80 dark:bg-emerald-500/5 px-2 py-0.5 rounded-full border border-emerald-200/60 dark:border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                    {language === 'pt' && system.statusTextPt ? system.statusTextPt : system.statusText}
                  </span>
                </div>

                {/* Title (What it does) */}
                <h3 className="font-serif text-lg sm:text-xl text-slate-900 dark:text-white font-normal group-hover:text-blue-600 dark:group-hover:text-amber-gold transition-colors mb-2.5 leading-snug">
                  {language === 'pt' && system.titlePt ? system.titlePt : system.title}
                </h3>

                {/* Functional Summary */}
                <p className="text-xs sm:text-[13px] text-slate-600 dark:text-[var(--text-secondary)] leading-relaxed mb-4 font-body">
                  {language === 'pt' && system.summaryPt ? system.summaryPt : system.summary}
                </p>

                {/* Key Metrics Box */}
                <div className="bg-slate-50/90 dark:bg-black/30 border border-slate-200/80 dark:border-white/5 rounded-xl p-3 mb-4 flex flex-wrap items-center gap-x-4 gap-y-1.5">
                  {system.metrics.slice(0, 2).map((m, mIdx) => (
                    <div key={mIdx} className="inline-flex items-center gap-1.5 text-[11px] font-mono">
                      <span className="text-slate-500 dark:text-[var(--text-tertiary)]">
                        {language === 'pt' && m.labelPt ? m.labelPt : m.label}:
                      </span>
                      <span className="text-blue-600 dark:text-amber-gold font-bold">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {system.techStack.slice(0, isTopFeatured ? 5 : 4).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-black/30 border border-slate-200/80 dark:border-white/5 text-[10px] font-mono text-slate-700 dark:text-[var(--text-secondary)]"
                  >
                    {tech}
                  </span>
                ))}
                {system.techStack.length > (isTopFeatured ? 5 : 4) && (
                  <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-400 dark:text-[var(--text-tertiary)]">
                    +{system.techStack.length - (isTopFeatured ? 5 : 4)}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
