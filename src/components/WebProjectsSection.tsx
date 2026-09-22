"use client";

import React from 'react';
import { ArrowUpRight, Globe, CheckCircle2 } from 'lucide-react';
import { WEB_PRODUCTION_PROJECTS } from '../data/portfolioData';
import { usePreferences } from '@/context/PreferencesContext';
import { TRANSLATIONS } from '@/data/translations';

export default function WebProjectsSection() {
  const { language } = usePreferences();
  const t = TRANSLATIONS[language];

  return (
    <section id="web-platforms" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t hairline-border">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-gold font-semibold flex items-center gap-2">
            <Globe className="w-3.5 h-3.5" />
            {t.webSection.tag}
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[var(--text-primary)] font-light mt-1">
            {t.webSection.title}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-lg font-body">
          {t.webSection.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {WEB_PRODUCTION_PROJECTS.map((project, idx) => {
          const whatItDoes = language === 'pt' && project.whatItDoesPt ? project.whatItDoesPt : project.whatItDoes;
          const domain = language === 'pt' && project.domainPt ? project.domainPt : project.domain;
          const role = language === 'pt' && project.rolePt ? project.rolePt : project.role;
          const summary = language === 'pt' && project.summaryPt ? project.summaryPt : project.summary;
          const keyCapabilities = language === 'pt' && project.keyCapabilitiesPt ? project.keyCapabilitiesPt : project.keyCapabilities;

          return (
            <div
              key={project.id}
              id={`web-project-${project.id}`}
              className="bg-white dark:bg-[var(--card-bg-start)] p-6 sm:p-7 rounded-2xl border border-slate-200/90 dark:border-white/10 hover:border-blue-500/60 dark:hover:border-amber-gold/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl shadow-[0_2px_12px_rgba(0,0,0,0.04),0_10px_25px_-5px_rgba(0,0,0,0.03)] dark:shadow-none relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/[0.02] dark:bg-amber-gold/[0.015] rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/[0.05] dark:group-hover:bg-amber-gold/[0.05] transition-colors"></div>

              <div>
                {/* Header Tags */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-blue-50 text-blue-800 border border-blue-200/90 dark:bg-amber-gold/10 dark:text-amber-gold dark:border-amber-gold/25 uppercase tracking-wide">
                    {domain}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-[var(--text-tertiary)]">
                    {t.webSection.systemNum} #{idx + 1}
                  </span>
                </div>

                {/* Strict Rule: What it does (No internal/brand names) */}
                <h3 className="font-serif text-xl sm:text-2xl text-slate-900 dark:text-white font-normal group-hover:text-blue-600 dark:group-hover:text-amber-gold transition-colors mb-2.5 leading-snug">
                  {whatItDoes}
                </h3>

                <div className="mb-3.5 inline-block text-[11px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200/80 dark:text-emerald-400 dark:bg-emerald-500/10 px-2.5 py-1 rounded dark:border-emerald-500/30">
                  {role}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-[var(--text-secondary)] leading-relaxed mb-5 font-body">
                  {summary}
                </p>

                {/* Key Capabilities */}
                <div className="space-y-2 mb-6 pt-3.5 border-t border-slate-200/80 dark:border-white/10">
                  <span className="text-[10px] font-mono text-slate-400 dark:text-[var(--text-tertiary)] uppercase tracking-wider block">
                    {t.webSection.scopeTitle}
                  </span>
                  {keyCapabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-[var(--text-primary)]/90 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-amber-gold shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

            <div>
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-[var(--text-secondary)] border border-slate-200/80 dark:border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Live Project Action */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-blue-600 dark:bg-[var(--card-bg-start)] dark:text-[var(--text-primary)] font-mono text-xs dark:hover:bg-amber-gold dark:hover:text-black transition-all border border-slate-900 dark:border-white/10 group/btn shadow-sm"
              >
                <span>{t.webSection.inspectBtn}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}
