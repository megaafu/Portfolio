"use client";

import React from 'react';
import { Smartphone, Monitor, Server, Bot } from 'lucide-react';
import { TECH_PILLARS } from '../data/portfolioData';
import { usePreferences } from '@/context/PreferencesContext';

const getPillarIcon = (iconName: string) => {
  switch (iconName) {
    case 'smartphone':
      return <Smartphone className="w-5 h-5 text-amber-gold" />;
    case 'monitor':
      return <Monitor className="w-5 h-5 text-amber-gold" />;
    case 'server':
      return <Server className="w-5 h-5 text-amber-gold" />;
    case 'bot':
      return <Bot className="w-5 h-5 text-amber-gold" />;
    default:
      return <Smartphone className="w-5 h-5 text-amber-gold" />;
  }
};

export default function TechStack() {
  const { language } = usePreferences();

  return (
    <section id="stack" className="py-16 sm:py-20 border-t hairline-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-gold font-semibold">
              {language === 'pt' ? 'Ferramentas de Produção' : 'Production Tooling'}
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-text-platinum font-light mt-1">
              {language === 'pt' ? 'Stack Técnico & Pilares Arquiteturais' : 'Technical Stack & Architectural Pillars'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-text-muted max-w-md font-body">
            {language === 'pt'
              ? 'Ferramentas testadas em campo em ambientes de produção com transações financeiras reais e operações de missão crítica.'
              : 'Field-tested tools used in production environments handling real financial transactions and mission-critical operations.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {TECH_PILLARS.map((pillar) => {
            const title = language === 'pt' && pillar.titlePt ? pillar.titlePt : pillar.title;
            const tag = language === 'pt' && pillar.tagPt ? pillar.tagPt : pillar.tag;
            const description = language === 'pt' && pillar.descriptionPt ? pillar.descriptionPt : pillar.description;
            const footerLeft = language === 'pt' && pillar.footerLeftPt ? pillar.footerLeftPt : pillar.footerLeft;
            const footerRight = language === 'pt' && pillar.footerRightPt ? pillar.footerRightPt : pillar.footerRight;

            return (
              <div
                key={pillar.id}
                id={`tech-pillar-${pillar.id}`}
                className="card-gradient p-6 rounded-2xl hairline-border hover:border-amber-gold/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-gold/[0.015] rounded-bl-full pointer-events-none group-hover:bg-amber-gold/[0.04]"></div>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-gold/10 hairline-border-gold flex items-center justify-center text-amber-gold group-hover:scale-105 transition-transform">
                      {getPillarIcon(pillar.iconName)}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-gold font-semibold">
                      {tag}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-text-platinum mb-2 group-hover:text-amber-gold transition-colors font-sans">
                    {title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed mb-4 font-body">
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {pillar.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-full bg-surface hairline-border text-[11px] font-mono text-text-platinum hover:border-amber-gold/40 hover:text-amber-gold transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="grid grid-cols-2 gap-2 py-2.5 mb-3 border-t hairline-border text-[10px] font-mono text-text-dim">
                    {pillar.metrics.map((m, idx) => (
                      <div key={idx}>
                        <span className="block text-[9px] text-text-dim uppercase tracking-wider">
                          {language === 'pt' && m.labelPt ? m.labelPt : m.label}
                        </span>
                        <span className="text-text-platinum font-medium">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2.5 border-t hairline-border text-[11px] font-mono text-text-muted flex justify-between items-center">
                    <span>{footerLeft}</span>
                    <span className="text-amber-gold font-medium">{footerRight}</span>
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
