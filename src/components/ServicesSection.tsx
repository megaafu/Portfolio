"use client";

import React, { useState } from 'react';
import {
  Globe,
  Smartphone,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
  Zap,
  Building2,
  Crown,
  ShoppingBag,
  Database,
  ShieldCheck,
  Clock,
  Shield,
  Layers,
  Code2,
  MessageCircle,
  Cpu
} from 'lucide-react';
import { SERVICE_PLANS } from '../data/portfolioData';
import { usePreferences } from '@/context/PreferencesContext';
import { TRANSLATIONS } from '@/data/translations';
import { ServicePlan } from '@/types';

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<'web' | 'app'>('web');
  const { language } = usePreferences();
  const t = TRANSLATIONS[language];

  const filteredPlans = SERVICE_PLANS.filter((plan) => plan.category === activeCategory);

  const getTierIcon = (iconType?: ServicePlan['iconType']) => {
    switch (iconType) {
      case 'zap':
        return <Zap className="w-4 h-4 text-amber-500 dark:text-amber-400" />;
      case 'globe':
        return <Globe className="w-4 h-4 text-blue-500 dark:text-blue-400" />;
      case 'building':
        return <Building2 className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />;
      case 'crown':
        return <Crown className="w-4 h-4 text-amber-gold" />;
      case 'cart':
        return <ShoppingBag className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />;
      case 'smartphone':
        return <Smartphone className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />;
      case 'database':
        return <Database className="w-4 h-4 text-violet-500 dark:text-violet-400" />;
      case 'shield':
        return <ShieldCheck className="w-4 h-4 text-amber-gold" />;
      default:
        return <Code2 className="w-4 h-4 text-amber-gold" />;
    }
  };

  const getWhatsAppLink = (planName: string) => {
    const text = language === 'pt'
      ? `Olá Mega, analisei os seus pacotes de engenharia e gostaria de solicitar um orçamento/proposta técnica para o plano: *${planName}*.`
      : `Hi Mega, I reviewed your engineering packages and would like to request a technical proposal for the plan: *${planName}*.`;
    return `https://wa.me/258845937271?text=${encodeURIComponent(text)}`;
  };

  const guarantees = [
    {
      icon: <ShieldCheck className="w-4 h-4 text-emerald-500" />,
      title: language === 'pt' ? '100% Propriedade Intelectual' : '100% IP & Code Ownership',
      desc: language === 'pt' ? 'Transferência total do repositório Git sem lock-in ou dependência de fornecedor.' : 'Full Git repo transfer with zero vendor lock-in or licensing fees.',
    },
    {
      icon: <Cpu className="w-4 h-4 text-blue-500" />,
      title: language === 'pt' ? 'Pipelines CI/CD Automatizados' : 'Automated CI/CD Delivery',
      desc: language === 'pt' ? 'Testes automatizados e publicação assistida para produção contínua.' : 'Automated testing and continuous release pipelines for staging & prod.',
    },
    {
      icon: <Layers className="w-4 h-4 text-amber-gold" />,
      title: language === 'pt' ? 'Clean Architecture & Zero Débito' : 'Clean Architecture & 0 Debt',
      desc: language === 'pt' ? 'Separação estrita de camadas, código tipado e documentação para equipas.' : 'Strict separation of concerns, strict typing, and full documentation.',
    },
    {
      icon: <Clock className="w-4 h-4 text-indigo-500" />,
      title: language === 'pt' ? 'SLA de Resposta Direta < 2h' : 'Direct Founder SLA < 2h',
      desc: language === 'pt' ? 'Acesso direto ao Arquiteto Responsável sem intermediários ou gestores de conta.' : 'Direct access to the lead software architect with zero junior dilution.',
    },
  ];

  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t hairline-border">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-gold font-semibold flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            {t.servicesSection.tag}
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-slate-900 dark:text-white font-light mt-1">
            {t.servicesSection.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-[var(--text-secondary)] mt-2 max-w-xl font-body leading-relaxed">
            {t.servicesSection.description}
          </p>
        </div>

        {/* High-Contrast Interactive Category Switcher Tabs */}
        <div className="category-switcher-bar inline-flex p-1.5 rounded-2xl backdrop-blur-md self-start md:self-auto">
          <button
            onClick={() => setActiveCategory('web')}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-mono text-xs transition-all duration-200 cursor-pointer ${
              activeCategory === 'web'
                ? 'tab-active-web'
                : 'tab-inactive-btn'
            }`}
          >
            <Globe className="w-4 h-4 text-current shrink-0" />
            <span className="font-bold tracking-tight">{t.servicesSection.tabWeb}</span>
            <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono font-bold ${
              activeCategory === 'web'
                ? 'tab-badge-active-web'
                : 'tab-badge-inactive'
            }`}>
              5
            </span>
          </button>
          <button
            onClick={() => setActiveCategory('app')}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-mono text-xs transition-all duration-200 cursor-pointer ${
              activeCategory === 'app'
                ? 'tab-active-app'
                : 'tab-inactive-btn'
            }`}
          >
            <Smartphone className="w-4 h-4 text-current shrink-0" />
            <span className="font-bold tracking-tight">{t.servicesSection.tabApp}</span>
            <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono font-bold ${
              activeCategory === 'app'
                ? 'tab-badge-active-app'
                : 'tab-badge-inactive'
            }`}>
              5
            </span>
          </button>
        </div>
      </div>

      {/* Professional In-Charge Card with Live SLA Beacon */}
      <div className="bg-white dark:bg-[#12151e]/90 p-5 sm:p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] dark:shadow-none mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/[0.02] dark:bg-amber-gold/[0.02] rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex items-center gap-3.5 sm:gap-4 relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-amber-gold/20 dark:to-transparent border border-blue-200 dark:border-amber-gold/40 flex items-center justify-center text-blue-600 dark:text-amber-gold font-mono font-bold text-lg shrink-0 shadow-sm">
            MA
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-serif text-base sm:text-lg text-slate-900 dark:text-white font-normal">Mega Afú</span>
              <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200/80 dark:text-emerald-400 dark:bg-emerald-500/10 px-2.5 py-0.5 rounded-full dark:border-emerald-500/30 font-medium">
                {t.servicesSection.inCharge.role}
              </span>
              <span className="text-[10px] font-mono text-blue-700 bg-blue-50 border border-blue-200/80 dark:text-amber-gold dark:bg-amber-gold/10 px-2 py-0.5 rounded-full dark:border-amber-gold/30 hidden sm:inline-block">
                {language === 'pt' ? 'Execução Direta • Sem Terceirização' : 'Direct Execution • 0 Outsourcing'}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-[var(--text-secondary)] font-sans mt-0.5">
              {t.servicesSection.inCharge.exp}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs font-mono text-slate-700 dark:text-[var(--text-primary)] relative z-10">
          <a
            href="https://wa.me/258845937271"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200/80 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30 hover:bg-emerald-100 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>WhatsApp Direct</span>
          </a>
          <a
            href="tel:+258845937271"
            className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-amber-gold transition-colors px-2 py-1"
          >
            <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-amber-gold" />
            <span>+258 84 593 7271</span>
          </a>
          <a
            href="mailto:hanselmega@gmail.com"
            className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-amber-gold transition-colors px-2 py-1"
          >
            <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-amber-gold" />
            <span>hanselmega@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Plans Grid (STRICTLY NO PRICING AS INSTRUCTED) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-14 sm:mb-16 items-stretch">
        {filteredPlans.map((plan, pIdx) => {
          const isFlagship = plan.highlight !== undefined;
          const planTitle = language === 'pt' && plan.namePt ? plan.namePt : plan.name;
          const planTagline = language === 'pt' && plan.taglinePt ? plan.taglinePt : (plan.taglineEn || plan.tagline);
          const planIdealFor = language === 'pt' && plan.idealForPt ? plan.idealForPt : (plan.idealForEn || plan.idealFor);
          const planFeatures = language === 'pt' && plan.featuresPt ? plan.featuresPt : (plan.featuresEn || plan.features);

          return (
            <div
              key={plan.id}
              className={`bg-white dark:bg-[#12141c] p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between group hover:shadow-xl relative overflow-hidden ${
                isFlagship
                  ? 'border-blue-500/80 dark:border-amber-gold/60 shadow-[0_4px_20px_rgba(37,99,235,0.08)] dark:shadow-[0_0_30px_rgba(226,184,115,0.12)]'
                  : 'border-slate-200/90 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-amber-gold/40 shadow-[0_2px_12px_rgba(0,0,0,0.04),0_10px_25px_-5px_rgba(0,0,0,0.03)] dark:shadow-none'
              }`}
            >
              {/* Subtle ambient gradient spotlight */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/[0.03] to-emerald-500/[0.03] dark:from-amber-gold/[0.03] dark:to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>

              <div>
                {/* Top Badge Strip: Tier Index, Icon & Highlight Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 flex items-center justify-center">
                      {getTierIcon(plan.iconType)}
                    </div>
                    <span className="text-[11px] font-mono font-bold text-blue-600 dark:text-amber-gold tracking-wider">
                      Tier 0{pIdx + 1}
                    </span>
                  </div>

                  {plan.highlight ? (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-600 text-white dark:bg-amber-400 dark:text-slate-950 shadow-sm">
                      {language === 'pt' ? plan.highlightPt : plan.highlight}
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-white/5">
                      {plan.category === 'web' ? (language === 'pt' ? 'Solução Web' : 'Web Solution') : (language === 'pt' ? 'Plataforma Mobile' : 'Mobile Platform')}
                    </span>
                  )}
                </div>

                {/* Plan Title & Timeline Pill */}
                <div className="space-y-1 mb-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-slate-900 dark:text-white font-normal group-hover:text-blue-600 dark:group-hover:text-amber-gold transition-colors leading-snug">
                    {planTitle}
                  </h3>

                  {plan.timeline && (
                    <div className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-200/60 dark:border-emerald-500/20">
                      <Clock className="w-3 h-3" />
                      <span>{language === 'pt' ? plan.timelinePt : plan.timeline}</span>
                    </div>
                  )}
                </div>

                {/* Tagline */}
                <p className="text-xs text-slate-600 dark:text-slate-300 font-sans mb-4 leading-relaxed">
                  {planTagline}
                </p>

                {/* Ideal For Card */}
                <div className="p-3.5 rounded-xl bg-slate-50/90 dark:bg-black/30 border border-slate-200/80 dark:border-white/5 text-xs text-slate-700 dark:text-[var(--text-secondary)] mb-5">
                  <span className="text-[10px] font-mono text-slate-400 dark:text-[var(--text-tertiary)] block uppercase tracking-wider mb-1 font-semibold">
                    {t.servicesSection.idealForTitle}
                  </span>
                  <p className="font-body text-slate-800 dark:text-slate-200 leading-relaxed">{planIdealFor}</p>
                </div>

                {/* SLA Guarantee Strip */}
                {plan.slaGuarantee && (
                  <div className="mb-5 px-3 py-1.5 rounded-lg bg-blue-50/80 dark:bg-white/[0.03] border border-blue-200/60 dark:border-white/5 flex items-center gap-2 text-[11px] font-mono text-blue-800 dark:text-amber-gold/90">
                    <Shield className="w-3.5 h-3.5 shrink-0" />
                    <span>{language === 'pt' ? plan.slaGuaranteePt : plan.slaGuarantee}</span>
                  </div>
                )}

                {/* Core Inclusions Checklist */}
                <div className="space-y-2.5 mb-5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-[var(--text-tertiary)] block font-semibold">
                    {t.servicesSection.deliverablesTitle}
                  </span>
                  <ul className="space-y-2">
                    {planFeatures.map((feature, fIdx) => (
                      <li key={fIdx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                {/* Tech Stack Chips */}
                {plan.techStack && plan.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-100 dark:border-white/5">
                    {plan.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-[10px] font-mono text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Dual Conversion Actions: Direct WhatsApp Request + Contact Jump */}
                <div className="space-y-2 pt-1">
                  <a
                    href={getWhatsAppLink(planTitle)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-mono text-xs transition-all group/btn font-semibold shadow-sm cursor-pointer ${
                      isFlagship
                        ? 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-amber-400 dark:text-slate-950 dark:hover:bg-amber-300 font-bold shadow-md'
                        : 'bg-slate-900 text-white hover:bg-blue-600 dark:bg-white/10 dark:text-white dark:hover:bg-amber-400 dark:hover:text-slate-950'
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{t.servicesSection.orderBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </a>

                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center text-[11px] font-mono text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-amber-gold transition-colors py-1 cursor-pointer"
                  >
                    {language === 'pt' ? 'Ou envie mensagem por email →' : 'Or send inquiry via email →'}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* "All Engagements Include" 4-Pillar Enterprise Guarantee Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#11131a] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 dark:border-white/10 pb-4">
          <div>
            <h3 className="font-serif text-lg sm:text-xl text-slate-900 dark:text-white font-normal">
              {language === 'pt' ? 'Padrões Fundamentais em Todos os Pacotes' : 'Core Standards in Every Engagement'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sans mt-0.5">
              {language === 'pt'
                ? 'Sem custos ocultos, sem código descartável, sem retenção de propriedade intelectual.'
                : 'Zero hidden fees, zero throwaway code, zero intellectual property retention.'}
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-800 dark:text-slate-200 hover:border-blue-500 dark:hover:border-amber-gold transition-colors shrink-0 cursor-pointer"
          >
            <span>{language === 'pt' ? 'Consultar Âmbito Personalizado' : 'Custom Enterprise Scope'}</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {guarantees.map((item, gIdx) => (
            <div key={gIdx} className="space-y-1.5">
              <div className="flex items-center gap-2">
                {item.icon}
                <h4 className="text-xs font-semibold text-slate-900 dark:text-white font-sans">
                  {item.title}
                </h4>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed font-body">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
