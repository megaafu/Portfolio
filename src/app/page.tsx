"use client";

import React, { useState } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WebProjectsSection from "@/components/WebProjectsSection";
import PlayStoreAppsSection from "@/components/PlayStoreAppsSection";
import FlagshipSystems from "@/components/FlagshipSystems";
import ServicesSection from "@/components/ServicesSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-[var(--surface-bg)] text-[var(--text-primary)] font-sans selection:bg-amber-gold/30 selection:text-amber-light relative overflow-x-hidden transition-colors duration-200">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-slate-900 focus:text-white dark:focus:bg-amber-gold dark:focus:text-[#0c0e12] focus:rounded-xl focus:shadow-xl focus:outline-none font-mono text-xs font-semibold tracking-wider"
      >
        Skip to Content (Enter)
      </a>

      {/* Background Ambience Layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-blue-600/[0.05] dark:from-amber-gold/[0.04] via-transparent to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] right-[-100px] w-[500px] h-[500px] bg-emerald-500/[0.04] dark:bg-emerald-500/[0.015] rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[-100px] w-[500px] h-[500px] bg-indigo-500/[0.04] dark:bg-amber-gold/[0.02] rounded-full blur-3xl"></div>
      </div>

      {/* Floating Executive Header */}
      <Header onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Area */}
      <main id="main-content" className="relative z-10 pt-16 sm:pt-20">
        {/* Executive Hero */}
        <Hero />

        {/* Live Web Production Platforms (Functional business descriptions, no brand names) */}
        <WebProjectsSection />

        {/* Public Google Play Store Mobile Applications */}
        <PlayStoreAppsSection />

        {/* Core Production Architectural Systems */}
        <FlagshipSystems />

        {/* Professional Services: Web & Mobile Engineering Proposal (Strictly No Prices) */}
        <ServicesSection />

        {/* Experience Timeline and Executive Contact Hub */}
        <section id="timeline" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t hairline-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <ExperienceTimeline />
            </div>
            <div className="lg:col-span-5" id="contact">
              <ContactSection />
            </div>
          </div>
        </section>
      </main>

      {/* Editorial Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Complete Executive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
