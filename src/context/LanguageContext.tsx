'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale, defaultLocale, getLanguage } from '@/config/i18n';
import { useTranslation } from '@/dictionaries';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dir: 'ltr' | 'rtl';
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: defaultLocale,
  setLocale: () => {},
  dir: 'ltr',
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr');

  const t = useTranslation(locale);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('alquresh_locale', newLocale);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('alquresh_locale') as Locale;
      if (savedLocale && ['en', 'ar', 'de', 'ja', 'zh', 'ru', 'fr', 'es', 'it'].includes(savedLocale)) {
        setLocaleState(savedLocale);
      }
    }
  }, []);

  useEffect(() => {
    const langInfo = getLanguage(locale);
    setDir(langInfo.dir);
    if (typeof document !== 'undefined') {
      document.documentElement.dir = langInfo.dir;
      document.documentElement.lang = locale;
    }
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, dir, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
