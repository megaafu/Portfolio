"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';
export type Language = 'en' | 'pt';

interface PreferencesContextType {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // 1. Determine Initial Language: Saved preference -> Browser language -> 'en'
    const savedLang = localStorage.getItem('portfolio-lang') as Language | null;
    if (savedLang === 'en' || savedLang === 'pt') {
      setLanguageState(savedLang);
    } else {
      const browserLang = typeof navigator !== 'undefined' ? navigator.language.toLowerCase() : 'en';
      const detected = browserLang.startsWith('pt') ? 'pt' : 'en';
      setLanguageState(detected);
    }

    // 2. Determine Initial Theme: Saved preference -> OS preference -> 'dark'
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme | null;
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setThemeState(savedTheme);
      applyTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setThemeState(initialTheme);
      applyTheme(initialTheme);
    }

  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    if (newTheme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    localStorage.setItem('portfolio-lang', newLang);
    document.documentElement.lang = newLang;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <PreferencesContext.Provider
      value={{
        theme,
        language,
        toggleTheme,
        setTheme,
        setLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error('usePreferences must be used within a PreferencesProvider');
  }
  return context;
}
