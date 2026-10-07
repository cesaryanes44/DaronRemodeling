import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { Menu, X, Globe, Paintbrush, Phone } from 'lucide-react';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language].nav;

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-stone-900/95 backdrop-blur-md border-b border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark for DARON REMODELING */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
        >
          <div className="w-10 h-10 rounded-sm bg-amber-500 flex items-center justify-center text-stone-950 font-black shadow-md group-hover:bg-amber-400 transition-colors">
            <Paintbrush className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white block uppercase leading-none">
              DARON REMODELING
            </span>
            <span className="text-[10px] tracking-wider text-amber-400 font-semibold uppercase block mt-1">
              Painting · Remodeling · Roofing
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold tracking-wide">
          <button
            onClick={() => handleLinkClick('home')}
            className="text-stone-300 hover:text-amber-400 transition-colors whitespace-nowrap focus:outline-none cursor-pointer"
          >
            {t.home}
          </button>
          <button
            onClick={() => handleLinkClick('about')}
            className="text-stone-300 hover:text-amber-400 transition-colors whitespace-nowrap focus:outline-none cursor-pointer"
          >
            {t.about}
          </button>
          <button
            onClick={() => handleLinkClick('services')}
            className="text-stone-300 hover:text-amber-400 transition-colors whitespace-nowrap focus:outline-none cursor-pointer"
          >
            {t.services}
          </button>
          <button
            onClick={() => handleLinkClick('projects')}
            className="text-stone-300 hover:text-amber-400 transition-colors whitespace-nowrap focus:outline-none cursor-pointer"
          >
            {t.projects}
          </button>
          <button
            onClick={() => handleLinkClick('estimator')}
            className="text-stone-300 hover:text-amber-400 transition-colors whitespace-nowrap focus:outline-none cursor-pointer"
          >
            {t.estimator}
          </button>
          <button
            onClick={() => handleLinkClick('contact')}
            className="text-stone-300 hover:text-amber-400 transition-colors whitespace-nowrap focus:outline-none cursor-pointer"
          >
            {t.contact}
          </button>
        </nav>

        {/* Zone 3: Actions + Prominent Language Switcher */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Prominent Language Switcher Button in Top Corner */}
          <div
            className="flex items-center p-0.5 bg-stone-800 rounded-md border border-stone-700/80 shadow-inner"
            role="group"
            aria-label="Language selection"
          >
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold rounded transition-all whitespace-nowrap cursor-pointer ${
                language === 'en'
                  ? 'bg-amber-500 text-stone-950 shadow-sm font-black'
                  : 'text-stone-400 hover:text-white'
              }`}
              title="English (Default)"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>EN</span>
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('es')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold rounded transition-all whitespace-nowrap cursor-pointer ${
                language === 'es'
                  ? 'bg-amber-500 text-stone-950 shadow-sm font-black'
                  : 'text-stone-400 hover:text-white'
              }`}
              title="Español (Spanish)"
            >
              <span>ES</span>
            </button>
          </div>

          {/* Direct Call Action Button */}
          <a
            href="tel:5557892041"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-all shadow-md hover:shadow-amber-500/20 whitespace-nowrap cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>(555) 789-2041</span>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-400 hover:text-white rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col gap-2 text-base font-semibold">
            <button
              onClick={() => handleLinkClick('home')}
              className="text-left py-2 px-3 text-stone-200 hover:text-amber-400 hover:bg-stone-800/60 rounded"
            >
              {t.home}
            </button>
            <button
              onClick={() => handleLinkClick('about')}
              className="text-left py-2 px-3 text-stone-200 hover:text-amber-400 hover:bg-stone-800/60 rounded"
            >
              {t.about}
            </button>
            <button
              onClick={() => handleLinkClick('services')}
              className="text-left py-2 px-3 text-stone-200 hover:text-amber-400 hover:bg-stone-800/60 rounded"
            >
              {t.services}
            </button>
            <button
              onClick={() => handleLinkClick('projects')}
              className="text-left py-2 px-3 text-stone-200 hover:text-amber-400 hover:bg-stone-800/60 rounded"
            >
              {t.projects}
            </button>
            <button
              onClick={() => handleLinkClick('estimator')}
              className="text-left py-2 px-3 text-stone-200 hover:text-amber-400 hover:bg-stone-800/60 rounded"
            >
              {t.estimator}
            </button>
            <button
              onClick={() => handleLinkClick('contact')}
              className="text-left py-2 px-3 text-stone-200 hover:text-amber-400 hover:bg-stone-800/60 rounded"
            >
              {t.contact}
            </button>
          </nav>

          <div className="pt-3 border-t border-stone-800 flex flex-col gap-3">
            <div className="flex items-center justify-between px-2 text-sm text-stone-400">
              <span>{t.switchLanguage}:</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => onLanguageChange('en')}
                  className={`px-3 py-1 rounded text-xs font-bold ${
                    language === 'en' ? 'bg-amber-500 text-stone-950' : 'bg-stone-800 text-stone-300'
                  }`}
                >
                  English (EN)
                </button>
                <button
                  onClick={() => onLanguageChange('es')}
                  className={`px-3 py-1 rounded text-xs font-bold ${
                    language === 'es' ? 'bg-amber-500 text-stone-950' : 'bg-stone-800 text-stone-300'
                  }`}
                >
                  Español (ES)
                </button>
              </div>
            </div>

            <a
              href="tel:5557892041"
              className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Daron: (555) 789-2041</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
