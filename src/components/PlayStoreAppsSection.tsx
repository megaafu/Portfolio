"use client";

import React from 'react';
import { Smartphone, ExternalLink, ShieldCheck } from 'lucide-react';
import { PUBLIC_MOBILE_APPS } from '../data/portfolioData';
import { usePreferences } from '@/context/PreferencesContext';
import { TRANSLATIONS } from '@/data/translations';

export default function PlayStoreAppsSection() {
  const { language } = usePreferences();
  const t = TRANSLATIONS[language];

  return (
    <section id="mobile-ecosystem" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t hairline-border">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-500 font-semibold flex items-center gap-2">
            <Smartphone className="w-3.5 h-3.5" />
            {t.playStoreSection.tag}
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[var(--text-primary)] font-light mt-1">
            {t.playStoreSection.title}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-lg font-body">
          {t.playStoreSection.description}
        </p>
      </div>

      {/* Balanced 5-Element Grid: Top 2 Featured Ecosystem (col-span-3), Bottom 3 Specialized Apps (col-span-2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6">
        {PUBLIC_MOBILE_APPS.map((app, idx) => {
          const isTopFeatured = idx < 2;
          return (
            <div
              key={app.id}
              id={`playstore-app-${app.id}`}
              className={`bg-white dark:bg-[var(--card-bg-start)] p-6 sm:p-7 rounded-2xl border border-slate-200/90 dark:border-white/10 hover:border-emerald-500/60 dark:hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl shadow-[0_2px_12px_rgba(0,0,0,0.04),0_10px_25px_-5px_rgba(0,0,0,0.03)] dark:shadow-none relative overflow-hidden ${
                isTopFeatured
                  ? 'lg:col-span-3'
                  : 'lg:col-span-2'
              } ${idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/[0.03] dark:bg-emerald-500/[0.02] rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/[0.08] transition-colors"></div>

              <div>
                {/* Category & Verified Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/90 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30 uppercase tracking-wide">
                    {language === 'pt' && app.categoryPt ? app.categoryPt : app.category}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50/80 dark:bg-emerald-500/5 px-2 py-0.5 rounded-full border border-emerald-200/60 dark:border-emerald-500/20 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    {t.playStoreSection.verifiedBadge}
                  </span>
                </div>

                {/* Public App Title */}
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <h3 className="font-serif text-xl sm:text-2xl text-slate-900 dark:text-white font-normal group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {app.name}
                  </h3>
                  {isTopFeatured && (
                    <span className="hidden sm:inline-block text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-white/10">
                      {language === 'pt' ? 'Frota de Mobilidade' : 'Mobility Fleet'}
                    </span>
                  )}
                </div>

                {/* Package ID Pill */}
                <div className="font-mono text-[10px] text-slate-500 dark:text-[var(--text-tertiary)] mb-2.5 select-all bg-slate-100/90 dark:bg-black/40 px-2 py-0.5 rounded inline-block border border-slate-200/60 dark:border-white/5">
                  {app.packageId}
                </div>

                {/* Architectural Role */}
                <div className="text-xs font-sans text-blue-600 dark:text-amber-gold font-medium mb-3">
                  {language === 'pt' && app.rolePt ? app.rolePt : app.role}
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-[var(--text-secondary)] leading-relaxed mb-5 font-body">
                  {language === 'pt' && app.summaryPt ? app.summaryPt : app.summary}
                </p>

                {/* Key Capabilities */}
                <div className="space-y-2 mb-6 pt-3.5 border-t border-slate-200/80 dark:border-white/10">
                  <span className="text-[10px] font-mono text-slate-400 dark:text-[var(--text-tertiary)] uppercase tracking-wider block">
                    {t.playStoreSection.featuresTitle}
                  </span>
                  {(language === 'pt' && app.keyCapabilitiesPt ? app.keyCapabilitiesPt : app.keyCapabilities).slice(0, isTopFeatured ? 4 : 3).map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-[var(--text-primary)]/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5"></span>
                      <span className="leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {app.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-[var(--text-secondary)] border border-slate-200/80 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Play Store Link Button */}
                <a
                  href={app.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs transition-all group/btn font-medium shadow-sm bg-slate-900 text-white hover:bg-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border dark:border-emerald-500/30 dark:hover:bg-emerald-500 dark:hover:text-black cursor-pointer"
                >
                  <span>{t.playStoreSection.storeBtn}</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
