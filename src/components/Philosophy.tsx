"use client";

import React, { useState } from 'react';
import { Shield, Sparkles, CheckCircle2, ArrowRight, X } from 'lucide-react';
import { PROCESS_STAGES, CORE_PRINCIPLES, FLUTTER_MZ_METRICS } from '../data/portfolioData';
import { ProcessStage } from '../types';
import { usePreferences } from '../context/PreferencesContext';
import { TRANSLATIONS } from '../data/translations';

export default function Philosophy() {
  const { language } = usePreferences();
  const t = TRANSLATIONS[language].philosophySection;
  const [selectedStage, setSelectedStage] = useState<ProcessStage | null>(null);

  return (
    <section id="philosophy" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 border-t hairline-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Narrative & Interactive 6-Stage Workflow Pipeline */}
        <div className="lg:col-span-8 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-gold font-semibold">
                {t.tag}
              </span>
              <span className="text-text-dim">•</span>
              <span className="text-xs font-mono text-emerald-400">{t.subtag}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-text-platinum font-light leading-tight mb-4">
              {t.title}
            </h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-3xl font-body">
              {t.description}
            </p>
          </div>

          {/* 6-Stage Execution Process Interactive Stepper Grid */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2.5 border-b hairline-border">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-text-platinum font-semibold">
                  {t.processTitle}
                </span>
                <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/[0.03] text-text-dim hairline-border">
                  {t.sequentialPipeline}
                </span>
              </div>
              <span className="text-[11px] font-mono text-amber-gold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-gold animate-pulse"></span>
                {t.clickToInspect}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
              {PROCESS_STAGES.map((stage) => {
                const isSelected = selectedStage?.id === stage.id;
                const stagePhase = language === 'pt' && stage.phasePt ? stage.phasePt : stage.phase;
                const stageTitle = language === 'pt' && stage.titlePt ? stage.titlePt : stage.title;
                const stageDescription = language === 'pt' && stage.descriptionPt ? stage.descriptionPt : stage.description;
                const stageFriction = language === 'pt' && stage.frictionBoundaryPt ? stage.frictionBoundaryPt : stage.frictionBoundary;
                const stageSpec = language === 'pt' && stage.specTypePt ? stage.specTypePt : stage.specType;

                return (
                  <button
                    key={stage.id}
                    id={`stage-card-${stage.step}`}
                    onClick={() => setSelectedStage(isSelected ? null : stage)}
                    className={`card-gradient p-4 rounded-xl hairline-border text-left transition-all duration-300 group flex flex-col justify-between relative overflow-hidden cursor-pointer ${
                      isSelected
                        ? 'border-amber-gold shadow-[0_0_20px_rgba(226,184,115,0.2)] bg-[var(--card-bg-start)]'
                        : 'hover:border-amber-gold/50 hover:bg-black/5 dark:hover:bg-white/[0.03]'
                    }`}
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-amber-gold/[0.015] rounded-bl-full pointer-events-none group-hover:bg-amber-gold/[0.05]"></div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs font-bold text-amber-gold px-2 py-0.5 rounded bg-amber-gold/10 hairline-border-gold">
                          {stage.step}
                        </span>
                        <span className="text-[10px] font-mono text-text-dim uppercase tracking-wider">
                          {stagePhase}
                        </span>
                      </div>
                      <h3 className="text-xs font-semibold text-text-platinum tracking-wide mb-1.5 group-hover:text-amber-gold transition-colors flex items-center justify-between">
                        <span>{stageTitle}</span>
                        <ArrowRight className="w-3 h-3 text-text-dim group-hover:text-amber-gold transition-transform group-hover:translate-x-0.5" />
                      </h3>
                      <p className="text-[11px] text-text-muted leading-relaxed mb-3 font-body">
                        {stageDescription}
                      </p>
                    </div>
                    <div className="pt-2 border-t hairline-border text-[10px] font-mono text-text-dim flex items-center justify-between">
                      <span>{stageFriction}</span>
                      <span className="text-amber-gold/90 font-medium">{stageSpec}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Stage Inspection Expanded Drawer */}
            {selectedStage && (
              <div
                id="stage-inspection-details"
                className="mt-4 p-5 sm:p-6 rounded-2xl card-gradient border border-amber-gold/30 shadow-2xl space-y-4 animate-in fade-in duration-200"
              >
                <div className="flex items-center justify-between border-b hairline-border pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-amber-gold px-2.5 py-1 rounded bg-amber-gold/10 border border-amber-gold/30">
                      {selectedStage.step} — {language === 'pt' && selectedStage.phasePt ? selectedStage.phasePt : selectedStage.phase}
                    </span>
                    <h4 className="text-sm sm:text-base font-semibold text-text-platinum">
                      {(language === 'pt' && selectedStage.titlePt ? selectedStage.titlePt : selectedStage.title)}: {language === 'pt' ? 'Blueprint de Execução Técnica' : 'Technical Execution Blueprint'}
                    </h4>
                  </div>
                  <button
                    onClick={() => setSelectedStage(null)}
                    className="p-1 rounded-lg text-text-muted hover:text-text-platinum hover:bg-white/[0.05]"
                    aria-label="Close stage drawer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-amber-gold uppercase tracking-wider block font-medium">
                      {language === 'pt' ? 'Objetivos Principais' : 'Core Objectives'}
                    </span>
                    <ul className="space-y-1.5 text-text-muted font-body">
                      {(language === 'pt' && selectedStage.deepDive.objectivesPt ? selectedStage.deepDive.objectivesPt : selectedStage.deepDive.objectives).map((obj, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-amber-gold uppercase tracking-wider block font-medium">
                      {language === 'pt' ? 'Entregáveis Principais' : 'Key Deliverables'}
                    </span>
                    <ul className="space-y-1.5 text-text-muted font-body">
                      {(language === 'pt' && selectedStage.deepDive.deliverablesPt ? selectedStage.deepDive.deliverablesPt : selectedStage.deepDive.deliverables).map((del, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-amber-gold mt-0.5 shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-surface hairline-border space-y-1 text-xs">
                  <span className="text-[10px] font-mono text-text-dim uppercase tracking-wider block">
                    {language === 'pt' ? 'Validação Real em Campo:' : 'Real-World Field Validation:'}
                  </span>
                  <p className="text-text-platinum font-body leading-relaxed">
                    {language === 'pt' && selectedStage.deepDive.realWorldScenarioPt ? selectedStage.deepDive.realWorldScenarioPt : selectedStage.deepDive.realWorldScenario}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-gold/10 border border-amber-gold/25 text-xs text-amber-gold flex items-center gap-2">
                  <Shield className="w-4 h-4 shrink-0" />
                  <span className="font-mono text-[11px]">
                    <strong>{language === 'pt' ? 'Salvaguarda Estrita:' : 'Strict Guardrail:'}</strong>{' '}
                    {language === 'pt' && selectedStage.deepDive.guardrailsPt ? selectedStage.deepDive.guardrailsPt : selectedStage.deepDive.guardrails}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Core Principles & Mentorship */}
        <div className="lg:col-span-4 space-y-5">
          {/* Core Architectural Principles */}
          <div className="card-gradient p-5 rounded-2xl hairline-border space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-amber-gold font-semibold">
              {t.principlesTitle}
            </h3>
            <div className="space-y-3 text-xs">
              {CORE_PRINCIPLES.map((principle, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-surface hairline-border space-y-0.5">
                  <div className="font-semibold text-text-platinum font-sans flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-gold"></span>
                    <span>{language === 'pt' && principle.titlePt ? principle.titlePt : principle.title}</span>
                  </div>
                  <p className="text-text-muted font-body pl-3.5">
                    {language === 'pt' && principle.descPt ? principle.descPt : principle.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Flutter MZ Mentorship Spotlight Card */}
          <div className="card-gradient p-5 rounded-2xl hairline-border border-amber-gold/30 space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-gold/[0.03] rounded-full blur-xl pointer-events-none"></div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-gold font-semibold">
                {language === 'pt' && FLUTTER_MZ_METRICS.titlePt ? FLUTTER_MZ_METRICS.titlePt : FLUTTER_MZ_METRICS.title}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border hairline-border-emerald">
                {language === 'pt' && FLUTTER_MZ_METRICS.statusPt ? FLUTTER_MZ_METRICS.statusPt : FLUTTER_MZ_METRICS.status}
              </span>
            </div>
            <p className="text-xs text-text-muted font-body leading-relaxed">
              {language === 'pt' && FLUTTER_MZ_METRICS.summaryPt ? FLUTTER_MZ_METRICS.summaryPt : FLUTTER_MZ_METRICS.summary}
            </p>
            <div className="pt-2 border-t hairline-border flex items-center justify-between text-[11px] font-mono text-text-dim">
              <span>{language === 'pt' ? 'Impacto: ' : 'Impact: '}{language === 'pt' && FLUTTER_MZ_METRICS.cohortsPt ? FLUTTER_MZ_METRICS.cohortsPt : FLUTTER_MZ_METRICS.cohorts}</span>
              <span className="text-amber-gold">{language === 'pt' && FLUTTER_MZ_METRICS.automationPt ? FLUTTER_MZ_METRICS.automationPt : FLUTTER_MZ_METRICS.automation}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
