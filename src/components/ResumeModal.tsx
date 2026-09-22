"use client";

import React, { useState } from 'react';
import { X, Printer, Copy, Check, MapPin, Mail } from 'lucide-react';
import { usePreferences } from '@/context/PreferencesContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { language } = usePreferences();

  if (!isOpen) return null;

  const markdownResumeEn = `# MEGA AFÚ
Senior Software Engineer | Mobile & Distributed Systems
Maputo, Mozambique | Remote Globally
Email: hanselmega@gmail.com | Phone: +258 84 593 7271 | GitHub: github.com/megaafu

---

## PROFESSIONAL SUMMARY
Senior Software Engineer with 5+ years of production experience architecting resilient, offline-first mobile applications, high-throughput backend services, and pragmatic AI workflows. Specialized in African telecom constraints, mobile money rails (M-Pesa, e-Mola), hardware biometrics (NFC, Edge OCR), and clean architecture patterns. Lead Mentor at Flutter MZ having trained 100+ engineers.

---

## TECHNICAL SKILLS
- **Mobile & Edge:** Flutter, Dart, BLoC / Cubit, Hive, SQLite (SQLCipher), Android Native (Kotlin DSL, AGP 9.1), Hardware NFC, Edge Document OCR, Fastlane CI/CD.
- **Frontend:** Next.js 15, React 19, TypeScript, TailwindCSS, CASL RBAC, React Query, Zod.
- **Backend & Microservices:** Fastify, Node.js, PostgreSQL, Redis, Docker, RESTful APIs, Webhooks.
- **Fintech & Telecom:** M-Pesa API, e-Mola API, Deterministic SMS Parsing (<2ms), Carrier SIM Integration.
- **Agentic AI:** Cursor Rules, Claude Systems, Vercel AI SDK, Dual-Model Routing, Gemini API.

---

## EXPERIENCE
### Senior Full Stack & Mobile Developer | Digital Identity & Telecom Group
*Feb 2026 – Present | Maputo, Mozambique*
- Architected offline-first biometric onboarding Flutter client with contactless NFC card data extraction and edge document OCR.
- Built encrypted SQLite offline transactional store with automatic retry queues and zero data loss across 10,000+ field registrations.
- Engineered Fastify backend microservices and automated Fastlane CI/CD delivery pipeline reducing release cycles to 8 minutes.

### Software Developer | Fintech Rails & Enterprise Software Group
*Dec 2022 – Jan 2026 | Mozambique*
- Developed resilient mobile applications and Next.js backoffice command portals with role-based access control.
- Integrated automated database reconciliation jobs with telecom payment processors (Vodacom M-Pesa & Movitel e-Mola).
- Authored recursive zero-trust PII masking engine protecting customer identity across telemetry logs.

---

## LEADERSHIP & COMMUNITY
### Lead Mentor | Flutter MZ Community
*Maputo, Mozambique*
- Led 12+ technical workshop cohorts mentoring over 100 regional software developers on Flutter, Clean Architecture, and CI/CD pipelines.

---

## EDUCATION
- **Bachelor of Software Engineering** – Universidade São Tomás de Moçambique (USTM)
- **Technical Diploma in Computer Systems** – Instituto de Transportes e Comunicações (ITC)
`;

  const markdownResumePt = `# MEGA AFÚ
Engenheiro de Software Sénior | Sistemas Móveis & Distribuídos
Maputo, Moçambique | Disponível Globalmente
Email: hanselmega@gmail.com | Telemóvel: +258 84 593 7271 | GitHub: github.com/megaafu

---

## RESUMO PROFISSIONAL
Engenheiro de Software Sénior com mais de 5 anos de experiência em produção arquitetando aplicações móveis offline-first resilientes, serviços de backend de alto débito e fluxos de IA pragmáticos. Especializado em restrições de telecomunicações em África, rails de dinheiro móvel (M-Pesa, e-Mola), biometria por hardware (NFC, OCR) e Clean Architecture. Mentor Principal na comunidade Flutter MZ tendo formado mais de 100 engenheiros.

---

## COMPETÊNCIAS TÉCNICAS
- **Mobile & Dispositivos:** Flutter, Dart, BLoC / Cubit, Hive, SQLite (SQLCipher), Android Nativo (Kotlin DSL, AGP 9.1), Hardware NFC, OCR em Dispositivo, Fastlane CI/CD.
- **Frontend:** Next.js 15, React 19, TypeScript, TailwindCSS, CASL RBAC, React Query, Zod.
- **Backend & Microsserviços:** Fastify, Node.js, PostgreSQL, Redis, Docker, APIs RESTful, Webhooks.
- **Fintech & Telecomunicações:** M-Pesa API, e-Mola API, Parsing Determinístico de SMS (<2ms), Integração SIM de Operadoras.
- **IA Agêntica:** Regras de Cursor, Claude Systems, Vercel AI SDK, Roteamento Duplo de Modelos, Gemini API.

---

## EXPERIÊNCIA PROFISSIONAL
### Desenvolvedor Full Stack & Mobile Sénior | Grupo de Identidade Digital & Telecomunicações
*Fev 2026 – Presente | Maputo, Moçambique*
- Arquitetei cliente Flutter offline-first de registo biométrico com extração de dados de cartões NFC sem contacto e OCR em dispositivo.
- Desenvolvi base transacional SQLite cifrada offline com filas automáticas de sincronização, alcançando 0,00% de perda em 10.000+ registos.
- Projetei microsserviços Fastify e pipelines automatizados de entrega contínua Fastlane CI/CD reduzindo o ciclo de deploy para 8 minutos.

### Desenvolvedor de Software | Grupo de Software Empresarial & Rails FinTech
*Dez 2022 – Jan 2026 | Moçambique*
- Desenvolvi aplicações móveis resilientes e portais administrativos em Next.js com controlo granular de acesso (RBAC).
- Integrei rotinas de reconciliação automática de bases de dados com processadores de telecomunicações (M-Pesa e e-Mola).
- Desenvolvi motor recursivo zero-trust de mascaramento de dados confidenciais para proteção de identidade em telemetria.

---

## LIDERANÇA & COMUNIDADE
### Lead Mentor | Comunidade Flutter MZ
*Maputo, Moçambique*
- Liderei mais de 12 turmas de workshops técnicos formando mais de 100 desenvolvedores em Flutter, Clean Architecture e CI/CD.

---

## EDUCAÇÃO & FORMAÇÃO
- **Licenciatura em Engenharia Informática** – Universidade São Tomás de Moçambique (USTM)
- **Diploma Técnico em Sistemas Informáticos** – Instituto de Transportes e Comunicações (ITC)
`;

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(language === 'pt' ? markdownResumePt : markdownResumeEn);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="resume-modal-content"
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0c0e12] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Action Bar */}
        <div className="flex items-center justify-between border-b hairline-border pb-4 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider">
              {language === 'pt' ? 'Documento Curricular de Engenharia' : 'Executive Engineering Resume'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] text-xs font-mono text-[var(--text-primary)] hover:bg-slate-200 dark:hover:bg-white/[0.08] transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? (language === 'pt' ? 'Copiado!' : 'Copied!') : (language === 'pt' ? 'Copiar Markdown' : 'Copy Markdown')}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] text-xs font-mono text-[var(--text-primary)] hover:bg-slate-200 dark:hover:bg-white/[0.08] transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{language === 'pt' ? 'Imprimir / PDF' : 'Print / PDF'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-slate-200 dark:hover:bg-white/[0.08] transition-colors cursor-pointer"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="space-y-6 text-text-platinum font-sans print:text-black">
          {/* Resume Header */}
          <div className="space-y-2 border-b hairline-border pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="font-serif text-3xl sm:text-4xl text-text-platinum font-light tracking-tight">
                Mega Afú
              </h1>
              <span className="text-xs font-mono text-amber-gold font-semibold">
                {language === 'pt'
                  ? 'Engenheiro de Software Sénior • Sistemas Móveis & Distribuídos'
                  : 'Senior Software Engineer • Mobile & Distributed Systems'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-text-muted font-body leading-relaxed max-w-3xl">
              {language === 'pt'
                ? 'Mais de 5 anos arquitetando clientes móveis offline-first de missão crítica, parsers de webhooks de pagamento sub-2ms e portais web empresariais desenvolvidos sob restrições reais de telecomunicações e conformidade financeira na África Austral.'
                : '5+ years architecting mission-critical, offline-first mobile clients, sub-2ms payment webhook parsers, and enterprise web portals deployed under real African telecom and financial regulatory constraints.'}
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-text-muted">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-gold" /> Maputo, Mozambique
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-amber-gold" /> hanselmega@gmail.com
              </span>
            </div>
          </div>

          {/* Technical Core Summary */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-amber-gold font-semibold">
              {language === 'pt' ? 'Competências & Núcleo Técnico' : 'Technical Core & Competencies'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-surface border border-slate-200/80 dark:border-[var(--border-color)] space-y-1">
                <strong className="text-text-platinum block font-mono text-[11px]">
                  {language === 'pt' ? 'Engenharia Mobile & Dispositivos' : 'Mobile & Edge Engineering'}
                </strong>
                <p className="text-text-muted font-body leading-relaxed">
                  Flutter, Dart, BLoC / Cubit, Hive, SQLite (SQLCipher), Android Native (Kotlin DSL, AGP 9.1), Hardware NFC, Edge Document OCR, Fastlane CI/CD release pipelines.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-surface border border-slate-200/80 dark:border-[var(--border-color)] space-y-1">
                <strong className="text-text-platinum block font-mono text-[11px]">
                  {language === 'pt' ? 'Backend & Webhooks de Pagamento' : 'Backend & Payment Webhooks'}
                </strong>
                <p className="text-text-muted font-body leading-relaxed">
                  Fastify, Node.js, PostgreSQL, Redis, Docker, M-Pesa &amp; e-Mola APIs, deterministic sub-2ms regex parsing, zero-loss reconciliation.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-surface border border-slate-200/80 dark:border-[var(--border-color)] space-y-1">
                <strong className="text-text-platinum block font-mono text-[11px]">
                  {language === 'pt' ? 'Arquitetura Web & Segurança' : 'Web Architecture & Security'}
                </strong>
                <p className="text-text-muted font-body leading-relaxed">
                  Next.js 15, React 19, TypeScript, TailwindCSS, CASL RBAC (&lt;0.5ms rule eval), TanStack Virtual (100k+ smooth records), recursive zero-trust PII masking.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-surface border border-slate-200/80 dark:border-[var(--border-color)] space-y-1">
                <strong className="text-text-platinum block font-mono text-[11px]">
                  {language === 'pt' ? 'IA Agêntica & Operações de Desenvolvimento' : 'Agentic AI & Developer Ops'}
                </strong>
                <p className="text-text-muted font-body leading-relaxed">
                  Cursor Rules (571 rules), Claude systems, dual-model router (-65% token spend), Vercel AI SDK, Gemini API, WhatsApp Cloud API.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Experience */}
          <div className="space-y-4 pt-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-amber-gold font-semibold">
              {language === 'pt' ? 'Experiência Profissional em Produção' : 'Professional Production Experience'}
            </h2>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-surface/80 border border-slate-200/80 dark:border-[var(--border-color)] space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-text-platinum font-sans">
                    {language === 'pt'
                      ? 'Desenvolvedor Full Stack & Mobile Sénior — Grupo de Identidade Digital & Telecomunicações'
                      : 'Senior Full Stack & Mobile Developer — Digital Identity & Telecom Group'}
                  </h3>
                  <span className="text-[11px] font-mono text-amber-gold">
                    {language === 'pt' ? 'Fev 2026 – Presente | Maputo' : 'Feb 2026 – Present | Maputo'}
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs text-text-muted font-body list-disc list-inside">
                  {language === 'pt' ? (
                    <>
                      <li>Arquitetei cliente Flutter offline-first de registo biométrico com leitura de cartões NFC e OCR de documentos em dispositivo.</li>
                      <li>Construí base transacional SQLite offline cifrada com filas de sincronização em segundo plano, com 0,00% de perda em 10.000+ registos.</li>
                      <li>Desenvolvi microsserviços Fastify e pipelines Fastlane CI/CD, reduzindo os ciclos de deploy para 8 minutos.</li>
                    </>
                  ) : (
                    <>
                      <li>Architected offline-first biometric registration client with hardware NFC card reading and on-device document OCR.</li>
                      <li>Built encrypted SQLite offline transactional store with automatic background retry queues, achieving zero data loss across 10,000+ registrations.</li>
                      <li>Engineered Fastify microservices and Fastlane CI/CD delivery pipelines, cutting store release cycles from hours to 8 minutes.</li>
                    </>
                  )}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-surface/80 border border-slate-200/80 dark:border-[var(--border-color)] space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-text-platinum font-sans">
                    {language === 'pt'
                      ? 'Desenvolvedor de Software — Grupo de Software Empresarial & Rails FinTech'
                      : 'Software Developer — Fintech Rails & Enterprise Software Group'}
                  </h3>
                  <span className="text-[11px] font-mono text-amber-gold">
                    {language === 'pt' ? 'Dez 2022 – Jan 2026 | Moçambique' : 'Dec 2022 – Jan 2026 | Mozambique'}
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs text-text-muted font-body list-disc list-inside">
                  {language === 'pt' ? (
                    <>
                      <li>Desenvolvi aplicações móveis resilientes e portais administrativos em Next.js com controlo granular de acesso (CASL RBAC).</li>
                      <li>Integrei parsers automatizados de webhooks de pagamento para transações das operadoras M-Pesa e e-Mola.</li>
                      <li>Criei motor recursivo zero-trust de mascaramento de dados confidenciais protegendo números de identificação e PINs em logs.</li>
                    </>
                  ) : (
                    <>
                      <li>Built resilient mobile apps and Next.js backoffice command portals with CASL role-based access control.</li>
                      <li>Integrated automated payment webhook parsers for M-Pesa &amp; e-Mola carrier transactions.</li>
                      <li>Authored recursive zero-trust PII masking engine protecting customer national ID numbers and PINs from telemetry logs.</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Leadership */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-wider text-amber-gold font-semibold">
                {language === 'pt' ? 'Educação & Formação' : 'Education'}
              </h2>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-surface border border-slate-200/80 dark:border-[var(--border-color)] space-y-1 text-xs">
                <strong className="text-text-platinum block font-sans">
                  {language === 'pt' ? 'Licenciatura em Engenharia Informática' : 'Bachelor of Software Engineering'}
                </strong>
                <span className="text-text-dim font-mono block text-[11px]">Universidade São Tomás de Moçambique (USTM)</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-surface border border-slate-200/80 dark:border-[var(--border-color)] space-y-1 text-xs">
                <strong className="text-text-platinum block font-sans">
                  {language === 'pt' ? 'Diploma Técnico em Sistemas Informáticos' : 'Technical Diploma in Computer Systems'}
                </strong>
                <span className="text-text-dim font-mono block text-[11px]">Instituto de Transportes e Comunicações (ITC)</span>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-wider text-amber-gold font-semibold">
                {language === 'pt' ? 'Liderança & Comunidade' : 'Leadership & Community'}
              </h2>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-surface border border-slate-200/80 dark:border-[var(--border-color)] space-y-1 text-xs">
                <strong className="text-text-platinum block font-sans">
                  {language === 'pt' ? 'Lead Mentor @ Flutter MZ' : 'Lead Mentor @ Flutter MZ'}
                </strong>
                <span className="text-text-dim font-mono block text-[11px]">Maputo, Mozambique</span>
                <p className="text-text-muted font-body text-[11px] pt-1">
                  {language === 'pt'
                    ? 'Orientei mais de 100 engenheiros de software moçambicanos em mais de 12 turmas sobre Clean Architecture, Flutter BLoC e Fastlane CI/CD.'
                    : 'Mentored 100+ Mozambican software engineers across 12+ cohorts in Clean Architecture, Flutter BLoC, and Fastlane CI/CD.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Close */}
        <div className="border-t hairline-border pt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-amber-gold dark:hover:bg-amber-light dark:text-[#0c0e12] font-semibold text-xs transition-colors cursor-pointer"
          >
            {language === 'pt' ? 'Fechar Currículo' : 'Close Resume'}
          </button>
        </div>
      </div>
    </div>
  );
};
