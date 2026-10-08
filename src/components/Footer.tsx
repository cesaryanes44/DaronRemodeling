import React from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { Paintbrush, Globe, Phone, Mail, ShieldCheck } from 'lucide-react';

interface FooterProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onLanguageChange,
  onNavigate,
}) => {
  const t = translations[language];

  return (
    <footer className="bg-stone-950 border-t border-stone-800 text-stone-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-sm bg-amber-500 flex items-center justify-center text-stone-950 font-black">
                <Paintbrush className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span className="text-base font-extrabold uppercase tracking-tight text-white">
                DARON REMODELING
              </span>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              {t.footer.brandDesc}
            </p>

            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-[11px]">
              <ShieldCheck className="w-4 h-4" />
              <span>{t.footer.serviceArea}</span>
            </div>

            {/* Language toggle convenience */}
            <div className="pt-1 flex items-center gap-2 text-stone-400">
              <Globe className="w-3.5 h-3.5 text-amber-500" />
              <span>{t.nav.switchLanguage}:</span>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer ${
                  language === 'en' ? 'bg-amber-500 text-stone-950' : 'bg-stone-900 text-stone-400 hover:text-white'
                }`}
              >
                English
              </button>
              <button
                onClick={() => onLanguageChange('es')}
                className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer ${
                  language === 'es' ? 'bg-amber-500 text-stone-950' : 'bg-stone-900 text-stone-400 hover:text-white'
                }`}
              >
                Español
              </button>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {t.nav.projects}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Specialties (4 cols) */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-1.5 text-stone-400">
              {t.footer.specialties.map((specialty) => (
                <li key={specialty}>{specialty}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-400">
          <div>
            © 2026 DARON REMODELING. {t.footer.rights}
          </div>
          <div className="text-amber-400 font-medium">
            {t.footer.bilingualNotice}
          </div>
        </div>
      </div>
    </footer>
  );
};
