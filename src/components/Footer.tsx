"use client";

import React from 'react';
import { ArrowUp, Github, Mail, MessageCircle } from 'lucide-react';
import { usePreferences } from '@/context/PreferencesContext';

interface FooterProps {
  onOpenResume: () => void;
}

export default function Footer({ onOpenResume }: FooterProps) {
  const { language } = usePreferences();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="border-t hairline-border bg-[var(--surface-bg)] py-14 sm:py-16 text-xs font-mono text-text-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand & Persona */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-base tracking-wider font-semibold text-text-platinum">
                MEGA AFÚ
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-gold"></span>
            </div>
            <p className="text-xs text-text-dim max-w-sm font-body leading-relaxed">
              {language === 'pt'
                ? 'Engenheiro de Software Sénior projetando sistemas móveis offline-first resilientes, rails financeiros de alto débito e fluxos de IA pragmáticos.'
                : 'Senior Software Engineer architecting resilient offline-first mobile systems, high-throughput financial rails, and pragmatic AI developer workflows.'}
            </p>
            <div className="flex items-center gap-3 pt-2 text-text-dim text-[11px]">
              <span className="text-emerald-500 font-medium">Maputo, Mozambique</span>
              <span>•</span>
              <span>{language === 'pt' ? 'Disponível Globalmente' : 'Remote Worldwide'}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs">
            <div className="space-y-2.5">
              <span className="text-[10px] uppercase tracking-wider text-text-dim block">
                {language === 'pt' ? 'Trabalho em Produção' : 'Production Work'}
              </span>
              <ul className="space-y-2">
                <li>
                  <a href="#web-platforms" className="hover:text-amber-gold transition-colors">
                    {language === 'pt' ? 'Sistemas Web' : 'Web Systems'}
                  </a>
                </li>
                <li>
                  <a href="#mobile-ecosystem" className="hover:text-emerald-500 transition-colors">
                    {language === 'pt' ? 'Apps Play Store' : 'Play Store Apps'}
                  </a>
                </li>
                <li>
                  <a href="#impact" className="hover:text-amber-gold transition-colors">
                    {language === 'pt' ? 'Sistemas de Arquitetura' : 'Flagship Systems'}
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2.5">
              <span className="text-[10px] uppercase tracking-wider text-text-dim block">
                {language === 'pt' ? 'Engenharia & Contacto' : 'Engineering & Contact'}
              </span>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="hover:text-amber-gold transition-colors text-amber-gold/90 font-medium">
                    {language === 'pt' ? 'Serviços & Planos' : 'Services & Packages'}
                  </a>
                </li>
                <li>
                  <a href="#timeline" className="hover:text-amber-gold transition-colors">
                    {language === 'pt' ? 'Experiência' : 'Experience'}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-amber-gold transition-colors">
                    {language === 'pt' ? 'Contacto Direto' : 'Direct Contact'}
                  </a>
                </li>
                <li>
                  <button onClick={onOpenResume} className="hover:text-amber-gold transition-colors text-left cursor-pointer">
                    {language === 'pt' ? 'Currículo Completo' : 'Full Resume'}
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Back to top and instant channels */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between space-y-4">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl hairline-border bg-white/[0.02] hover:bg-white/[0.06] text-text-muted hover:text-amber-gold transition-all flex items-center gap-2 text-xs cursor-pointer"
            >
              <span>{language === 'pt' ? 'Voltar ao topo' : 'Back to top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/megaafu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface hairline-border hover:border-amber-gold/40 text-text-muted hover:text-amber-gold transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:hanselmega@gmail.com"
                className="p-2 rounded-lg bg-surface hairline-border hover:border-amber-gold/40 text-text-muted hover:text-amber-gold transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/258845937271"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface hairline-border hover:border-emerald-500/40 text-text-muted hover:text-emerald-400 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t hairline-border flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-text-dim">
          <div>
            © {new Date().getFullYear()} Mega Afú. {language === 'pt' ? 'Construído com clareza radical & rigor arquitetural com zero perdas.' : 'Built with radical clarity & zero-loss architectural rigor.'}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="text-text-muted">{language === 'pt' ? 'Todos os sistemas em produção operacionais' : 'All production systems operational'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
