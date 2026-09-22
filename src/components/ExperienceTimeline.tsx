"use client";

import React from 'react';
import { TIMELINE_DATA } from '../data/portfolioData';
import { GraduationCap, Briefcase } from 'lucide-react';
import { usePreferences } from '@/context/PreferencesContext';

export default function ExperienceTimeline() {
  const { language } = usePreferences();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-gold font-semibold">
            {language === 'pt' ? 'Trajetória Profissional' : 'Career Trajectory'}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-text-platinum font-light mt-1">
            {language === 'pt' ? 'Experiência & Formação' : 'Experience & Education'}
          </h2>
        </div>
        <span className="text-xs font-mono text-text-muted">
          {language === 'pt' ? '+5 Anos Práticos' : '5+ Years Hands-On'}
        </span>
      </div>

      <div className="relative border-l hairline-border pl-6 ml-3 space-y-8">
        {TIMELINE_DATA.map((entry, idx) => {
          const role = language === 'pt' && entry.rolePt ? entry.rolePt : entry.role;
          const period = language === 'pt' && entry.periodPt ? entry.periodPt : entry.period;
          const summary = language === 'pt' && entry.summaryPt ? entry.summaryPt : entry.summary;
          const achievements = language === 'pt' && entry.achievementsPt ? entry.achievementsPt : entry.achievements;

          return (
            <div key={entry.id} id={`timeline-entry-${entry.id}`} className="relative group">
              {/* Timeline Bullet */}
              <div
                className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-4 border-[var(--surface-bg)] transition-colors ${
                  idx === 0
                    ? 'bg-amber-gold ring-2 ring-amber-gold/30'
                    : entry.isEducation
                    ? 'bg-slate-300 dark:bg-white/30 group-hover:bg-amber-gold/80'
                    : 'bg-amber-gold/70'
                }`}
              ></div>

              <div className="card-gradient p-5 rounded-2xl hairline-border group-hover:border-amber-gold/40 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    {entry.isEducation ? (
                      <GraduationCap className="w-4 h-4 text-text-dim" />
                    ) : (
                      <Briefcase className="w-4 h-4 text-amber-gold" />
                    )}
                    <h3 className="text-sm font-semibold text-text-platinum font-sans">{role}</h3>
                  </div>

                  <span
                    className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full ${
                      idx === 0
                        ? 'text-amber-gold bg-amber-gold/10 hairline-border-gold'
                        : 'text-slate-600 dark:text-text-muted bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5'
                    }`}
                  >
                    {period}
                  </span>
                </div>

                <div className="text-xs font-mono text-text-muted mb-2.5">
                  {entry.organization} • {entry.location}
                </div>

                <p className="text-xs text-text-muted leading-relaxed mb-3 font-body">
                  {summary}
                </p>

                {achievements && achievements.length > 0 && (
                  <ul className="mb-3 space-y-1 text-[11px] text-text-dim font-body">
                    {achievements.map((item, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-amber-gold/70 mt-1.5 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

              <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
                {entry.tags.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded bg-surface hairline-border text-text-platinum"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}
