"use client";

import React, { useState } from 'react';
import { Gamepad2, Dumbbell, Scissors, Brain, FlaskConical, Users, ChevronDown } from 'lucide-react';
import { CHARACTER_DISCIPLINES } from '../data/portfolioData';
import { usePreferences } from '@/context/PreferencesContext';

const getDisciplineIcon = (iconName: string) => {
  switch (iconName) {
    case 'gamepad':
      return <Gamepad2 className="w-5 h-5 text-amber-gold" />;
    case 'dumbbell':
      return <Dumbbell className="w-5 h-5 text-amber-gold" />;
    case 'scissors':
      return <Scissors className="w-5 h-5 text-amber-gold" />;
    case 'brain':
      return <Brain className="w-5 h-5 text-amber-gold" />;
    case 'flask':
      return <FlaskConical className="w-5 h-5 text-amber-gold" />;
    case 'users':
      return <Users className="w-5 h-5 text-amber-gold" />;
    default:
      return <Brain className="w-5 h-5 text-amber-gold" />;
  }
};

export default function BeyondCode() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { language } = usePreferences();

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="beyond-code" className="py-16 sm:py-20 border-t hairline-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-gold font-semibold">
                {language === 'pt' ? 'Caráter Autêntico' : 'Authentic Character'}
              </span>
              <span className="opacity-20">•</span>
              <span className="text-xs font-mono text-emerald-500">
                {language === 'pt' ? 'Rigor de Engenharia' : 'Engineering Rigor'}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-text-platinum font-light mt-1">
              {language === 'pt' ? 'Além do Código: Sistemas, Estratégia & Disciplina' : 'Beyond Code: Systems, Strategy & Discipline'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-text-muted max-w-md font-body">
            {language === 'pt'
              ? 'O mesmo reconhecimento de padrões, disciplina física e rigor estético que orientam decisões de arquitetura sob pressão.'
              : 'The same pattern recognition, physical discipline, and aesthetic restraint that dictate architectural decisions under pressure.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {CHARACTER_DISCIPLINES.map((discipline) => {
            const isExpanded = expandedId === discipline.id;
            const number = language === 'pt' && discipline.disciplineNumberPt ? discipline.disciplineNumberPt : discipline.disciplineNumber;
            const title = language === 'pt' && discipline.titlePt ? discipline.titlePt : discipline.title;
            const description = language === 'pt' && discipline.descriptionPt ? discipline.descriptionPt : discipline.description;
            const leadership = language === 'pt' && discipline.leadershipBridgePt ? discipline.leadershipBridgePt : discipline.leadershipBridge;
            const insight = language === 'pt' && discipline.extendedInsightPt ? discipline.extendedInsightPt : discipline.extendedInsight;

            return (
              <div
                key={discipline.id}
                id={`discipline-card-${discipline.id}`}
                onClick={() => toggleExpand(discipline.id)}
                className={`card-gradient p-5 sm:p-6 rounded-2xl hairline-border transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:shadow-xl relative overflow-hidden ${
                  isExpanded ? 'border-amber-gold shadow-md' : 'hover:border-amber-gold/40'
                }`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-gold/[0.015] rounded-bl-full pointer-events-none group-hover:bg-amber-gold/[0.05]"></div>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-amber-gold/10 hairline-border-gold flex items-center justify-center text-amber-gold group-hover:scale-105 transition-transform">
                      {getDisciplineIcon(discipline.iconName)}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-dim">
                      {number}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-text-platinum mb-2 group-hover:text-amber-gold transition-colors font-sans flex items-start justify-between">
                    <span>{title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-text-dim group-hover:text-amber-gold transition-transform duration-200 shrink-0 mt-0.5 ${
                        isExpanded ? 'rotate-180 text-amber-gold' : ''
                      }`}
                    />
                  </h3>

                  <p className="text-xs text-text-muted leading-relaxed mb-4 font-body">
                    {description}
                  </p>

                  {isExpanded && (
                    <div className="p-3 mb-3 rounded-xl bg-surface/90 hairline-border text-[11px] text-amber-gold/90 font-body leading-relaxed animate-in fade-in duration-200">
                      <span className="font-mono text-[10px] text-text-dim block mb-1 uppercase tracking-wider">
                        {language === 'pt' ? 'Tradução Arquitetural:' : 'Architectural Translation:'}
                      </span>
                      {insight}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t hairline-border">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-text-dim">
                      {language === 'pt' ? 'Ponte de Liderança' : 'Leadership Bridge'}
                    </span>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full badge-glass text-[11px] font-mono text-amber-gold group-hover:border-amber-gold/30 transition-all">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-gold"></span>
                      <span>{leadership}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
