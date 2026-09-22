"use client";

import React, { useState } from 'react';
import { Mail, MessageCircle, Github, Lock, CheckCircle2, Send, ExternalLink } from 'lucide-react';
import { ContactFormData } from '../types';
import { usePreferences } from '../context/PreferencesContext';
import { TRANSLATIONS } from '../data/translations';

export default function ContactSection() {
  const { language } = usePreferences();
  const t = TRANSLATIONS[language].contactSection;

  const [formData, setFormData] = useState<ContactFormData>({
    stakeholderType: 'Founder / Client',
    name: '',
    email: '',
    roleScope: 'Senior / Staff Full Stack Role',
    language: language === 'pt' ? 'Português (Mozambique / Global)' : 'English',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate sending transmission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      stakeholderType: 'Founder / Client',
      name: '',
      email: '',
      roleScope: 'Senior / Staff Full Stack Role',
      language: language === 'pt' ? 'Português (Mozambique / Global)' : 'English',
      message: ''
    });
  };

  const openDirectMailto = () => {
    const subject = encodeURIComponent(`[${formData.stakeholderType}] Architecture Inquiry: ${formData.roleScope}`);
    const body = encodeURIComponent(
      `Hi Mega,\n\nName: ${formData.name}\nEmail: ${formData.email}\nScope: ${formData.roleScope}\nLanguage: ${formData.language}\n\nProject Context:\n${formData.message}\n`
    );
    window.location.href = `mailto:hanselmega@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div id="contact" className="card-gradient p-7 sm:p-9 rounded-3xl hairline-border shadow-2xl relative overflow-hidden">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-gold/10 hairline-border-gold text-xs font-mono text-amber-gold">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-gold"></span>
          <span>{t.tag}</span>
        </div>
        <span className="text-xs font-mono text-text-muted">
          {language === 'pt' ? 'Resposta garantida < 24h' : 'Reply < 24h guaranteed'}
        </span>
      </div>

      <h3 className="font-serif text-2xl sm:text-3xl text-text-platinum font-light mb-2">
        {t.title}
      </h3>
      <p className="text-xs sm:text-sm text-text-muted mb-6 leading-relaxed font-body">
        {t.subtitle}
      </p>

      {/* 3 Instant Direct Reachout Channels */}
      <div className="grid grid-cols-3 gap-2.5 mb-6">
        <a
          id="contact-channel-email"
          href="mailto:hanselmega@gmail.com"
          className="p-3 rounded-xl bg-slate-50/80 dark:bg-[#11141b] border border-slate-200 dark:border-white/10 hover:border-amber-gold/40 transition-all flex flex-col items-center text-center gap-1.5 group"
        >
          <Mail className="w-5 h-5 text-amber-gold group-hover:scale-110 transition-transform" />
          <span className="text-[11px] font-medium text-slate-900 dark:text-slate-100 group-hover:text-amber-gold">
            {language === 'pt' ? 'Email Direto' : 'Email Direct'}
          </span>
        </a>

        <a
          id="contact-channel-whatsapp"
          href="https://wa.me/258845937271?text=Olá%20Mega,%20gostaria%20de%20conversar%20sobre%20arquitetura%20de%20sistemas"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-slate-50/80 dark:bg-[#11141b] border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 transition-all flex flex-col items-center text-center gap-1.5 group"
        >
          <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
          <span className="text-[11px] font-medium text-slate-900 dark:text-slate-100 group-hover:text-emerald-400">WhatsApp</span>
        </a>

        <a
          id="contact-channel-github"
          href="https://github.com/megaafu"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-slate-50/80 dark:bg-[#11141b] border border-slate-200 dark:border-white/10 hover:border-amber-gold/40 transition-all flex flex-col items-center text-center gap-1.5 group"
        >
          <Github className="w-5 h-5 text-amber-gold group-hover:scale-110 transition-transform" />
          <span className="text-[11px] font-medium text-slate-900 dark:text-slate-100 group-hover:text-amber-gold">GitHub</span>
        </a>
      </div>

      {submitted ? (
        <div
          id="contact-success-state"
          className="p-6 rounded-2xl card-gradient border hairline-border-emerald space-y-4 animate-in fade-in duration-300"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border hairline-border-emerald flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-text-platinum">
                {language === 'pt' ? 'Mensagem Enviada com Sucesso' : 'Message Dispatched Successfully'}
              </h4>
              <p className="text-xs text-text-muted font-body">
                {language === 'pt'
                  ? 'Encaminhada diretamente para o endereço pessoal (hanselmega@gmail.com).'
                  : 'Transmission routed directly to personal inbox (hanselmega@gmail.com).'}
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#11141b] border border-slate-200 dark:border-white/10 text-xs font-mono space-y-1 text-text-muted">
            <div><strong className="text-text-platinum">{language === 'pt' ? 'Nome:' : 'Name:'}</strong> {formData.name || (language === 'pt' ? 'Visitante Anónimo' : 'Anonymous Leader')}</div>
            <div><strong className="text-text-platinum">Email:</strong> {formData.email || 'N/A'}</div>
            <div><strong className="text-text-platinum">{language === 'pt' ? 'Âmbito:' : 'Focus:'}</strong> {formData.roleScope}</div>
            <div><strong className="text-text-platinum">{language === 'pt' ? 'Canal:' : 'Channel:'}</strong> {language === 'pt' ? 'Resposta executiva garantida em menos de 24 horas.' : 'Guaranteed executive response within 24 hours.'}</div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={openDirectMailto}
              className="px-4 py-2 rounded-full bg-amber-gold hover:bg-amber-light text-[#0c0e12] font-semibold text-xs transition-colors flex items-center gap-1.5"
            >
              <span>{language === 'pt' ? 'Abrir no App de Email' : 'Also Open in Email App'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-full hairline-border bg-white/[0.04] text-xs font-mono text-text-platinum hover:bg-white/[0.08]"
            >
              {language === 'pt' ? 'Enviar Outra Mensagem' : 'Send Another Inquiry'}
            </button>
          </div>
        </div>
      ) : (
        <form id="contact-inquiry-form" onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-wider text-text-muted font-semibold mb-2">
              {language === 'pt' ? 'Entrando em contacto como:' : 'I am reaching out as:'}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['Founder / Client', 'Recruiter / EM', 'Collaborator'] as const).map((type) => {
                const labelText =
                  type === 'Founder / Client'
                    ? language === 'pt'
                      ? 'Fundador / Cliente'
                      : 'Founder / Client'
                    : type === 'Recruiter / EM'
                    ? language === 'pt'
                      ? 'Recrutador / EM'
                      : 'Recruiter / EM'
                    : language === 'pt'
                    ? 'Colaborador'
                    : 'Collaborator';

                return (
                  <label
                    key={type}
                    className={`flex items-center justify-center gap-1.5 p-2.5 rounded-xl cursor-pointer text-xs font-medium transition-all ${
                      formData.stakeholderType === type
                        ? 'border border-amber-gold text-amber-gold bg-amber-gold/10'
                        : 'border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#11141b] text-slate-700 dark:text-slate-300 hover:border-amber-gold/40'
                    }`}
                  >
                    <input
                      type="radio"
                      name="stakeholder_type"
                      checked={formData.stakeholderType === type}
                      onChange={() => setFormData({ ...formData, stakeholderType: type })}
                      className="accent-amber-gold cursor-pointer"
                    />
                    <span className="truncate">{labelText}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-text-muted font-semibold mb-1">
                {language === 'pt' ? 'Seu Nome' : 'Your Name'}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={language === 'pt' ? 'Elena Santos' : 'Elena Santos'}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#11141b] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-slate-100 text-xs focus:border-amber-gold focus:ring-1 focus:ring-amber-gold/30 focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-text-muted font-semibold mb-1">
                {language === 'pt' ? 'Endereço de Email' : 'Email Address'}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={language === 'pt' ? 'elena@empresa.com' : 'elena@company.com'}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#11141b] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-slate-100 text-xs focus:border-amber-gold focus:ring-1 focus:ring-amber-gold/30 focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-text-muted font-semibold mb-1">
                {language === 'pt' ? 'Âmbito / Função Pretendida' : 'Role / Scope'}
              </label>
              <select
                value={formData.roleScope}
                onChange={(e) => setFormData({ ...formData, roleScope: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#11141b] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-slate-100 text-xs focus:border-amber-gold focus:ring-1 focus:ring-amber-gold/30 focus:outline-none transition-all cursor-pointer"
              >
                <option className="bg-white dark:bg-[#11141b] text-slate-900 dark:text-slate-100" value="Senior / Staff Full Stack Role">
                  {language === 'pt' ? 'Posição Senior / Staff Full Stack' : 'Senior / Staff Full Stack Role'}
                </option>
                <option className="bg-white dark:bg-[#11141b] text-slate-900 dark:text-slate-100" value="Mobile Architecture (Flutter / Offline-First)">
                  {language === 'pt' ? 'Arquitetura Mobile (Flutter / Offline-First)' : 'Mobile Architecture (Flutter / Offline-First)'}
                </option>
                <option className="bg-white dark:bg-[#11141b] text-slate-900 dark:text-slate-100" value="African Telecom & M-Pesa Integration">
                  {language === 'pt' ? 'Telecom Africana & Integração M-Pesa / e-Mola' : 'African Telecom & M-Pesa Integration'}
                </option>
                <option className="bg-white dark:bg-[#11141b] text-slate-900 dark:text-slate-100" value="Technical Advisory & Architecture Audit">
                  {language === 'pt' ? 'Consultoria Técnica & Auditoria de Arquitetura' : 'Technical Advisory & Architecture Audit'}
                </option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-text-muted font-semibold mb-1">
                {language === 'pt' ? 'Idioma de Comunicação' : 'Preferred Language'}
              </label>
              <select
                value={formData.language}
                onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#11141b] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-slate-100 text-xs focus:border-amber-gold focus:ring-1 focus:ring-amber-gold/30 focus:outline-none transition-all cursor-pointer"
              >
                <option className="bg-white dark:bg-[#11141b] text-slate-900 dark:text-slate-100">English</option>
                <option className="bg-white dark:bg-[#11141b] text-slate-900 dark:text-slate-100">Português (Mozambique / Global)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-mono uppercase tracking-wider text-text-muted font-semibold mb-1">
              {language === 'pt' ? 'Contexto do Projeto ou Missão' : 'Project or Mission Context'}
            </label>
            <textarea
              rows={3}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={
                language === 'pt'
                  ? 'Descreva os requisitos técnicos, desafios de arquitetura ou cronograma pretendido...'
                  : 'Tell me about your product requirements, stack challenges, or timeline...'
              }
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#11141b] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-slate-100 text-xs focus:border-amber-gold focus:ring-1 focus:ring-amber-gold/30 focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 text-xs text-text-dim font-mono">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{language === 'pt' ? 'Direto para a caixa de entrada pessoal' : 'Direct to personal inbox'}</span>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-slate-900 text-white hover:bg-blue-600 dark:bg-amber-gold dark:text-[#0c0e12] dark:hover:bg-amber-light font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(226,184,115,0.35)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" />
              <span>
                {submitting
                  ? language === 'pt'
                    ? 'A enviar...'
                    : 'Dispatching...'
                  : language === 'pt'
                  ? 'Transmitir Mensagem'
                  : 'Send Message'}
              </span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
