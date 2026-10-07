import React from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { HERO_IMAGE } from '../data/mockData';
import { Calculator, ArrowRight, ShieldCheck, Phone, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  language: Language;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onNavigate }) => {
  const t = translations[language].hero;

  return (
    <section id="home" className="relative min-h-[88vh] flex flex-col justify-between overflow-hidden bg-stone-950">
      {/* Background Residential Remodel Image with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Beautiful renovated American home with new roof and fresh paint"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
        />
        {/* Measured dark architectural scrims for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/85 to-stone-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Unboxed trust indicator */}
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase font-bold tracking-widest text-amber-400 mb-4">
            <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
            <span>{t.badge}</span>
            <span aria-hidden="true" className="text-stone-600 hidden sm:inline">·</span>
            <span className="text-stone-300 font-medium hidden sm:inline">Free Estimates</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] mb-5 [text-wrap:balance]">
            {t.titleLine1}{' '}
            <span className="text-amber-500 underline decoration-amber-500/50 decoration-wavy decoration-2">
              {t.titleHighlight}
            </span>
            <br />
            {t.titleLine2}
          </h1>

          {/* Value Proposition */}
          <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-2xl font-normal mb-8 [text-wrap:balance]">
            {t.subtitle}
          </p>

          {/* Quick 3-Pill Specialties preview */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-stone-300 font-medium mb-8">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              {language === 'en' ? 'USA Asphalt Shingle Roofs' : 'Techos de Tejas Asfálticas'}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              {language === 'en' ? 'Interior & Exterior Painting' : 'Pintura Interior y Exterior'}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              {language === 'en' ? 'Kitchens, Baths & Flooring' : 'Cocinas, Baños y Pisos'}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <button
              onClick={() => onNavigate('estimator')}
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-xs font-extrabold uppercase tracking-wider text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-all shadow-xl hover:shadow-amber-500/25 cursor-pointer"
            >
              <Calculator className="w-4 h-4" />
              <span>{t.ctaQuote}</span>
            </button>

            <a
              href="tel:5557892041"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-stone-100 hover:text-white bg-stone-900/90 hover:bg-stone-800 border border-stone-700 rounded-md transition-all backdrop-blur-sm cursor-pointer"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{t.ctaCall}</span>
            </a>

            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-stone-400 hover:text-stone-200 transition-colors cursor-pointer"
            >
              <span>{t.ctaProjects}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Proof Bar */}
      <div className="relative z-10 border-t border-stone-800/80 bg-stone-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="border-l-2 border-amber-500 pl-3 sm:pl-4">
              <div className="text-xl sm:text-2xl font-black text-white font-mono tabular-nums">
                {t.stat1Number}
              </div>
              <div className="text-[11px] sm:text-xs text-stone-400 font-medium uppercase mt-0.5">
                {t.stat1Label}
              </div>
            </div>

            <div className="border-l-2 border-amber-500 pl-3 sm:pl-4">
              <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono tabular-nums">
                {t.stat2Number}
              </div>
              <div className="text-[11px] sm:text-xs text-stone-400 font-medium uppercase mt-0.5">
                {t.stat2Label}
              </div>
            </div>

            <div className="border-l-2 border-amber-500 pl-3 sm:pl-4">
              <div className="text-xl sm:text-2xl font-black text-white font-mono tabular-nums">
                {t.stat3Number}
              </div>
              <div className="text-[11px] sm:text-xs text-stone-400 font-medium uppercase mt-0.5">
                {t.stat3Label}
              </div>
            </div>

            <div className="border-l-2 border-amber-500 pl-3 sm:pl-4">
              <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono tabular-nums">
                {t.stat4Number}
              </div>
              <div className="text-[11px] sm:text-xs text-stone-400 font-medium uppercase mt-0.5">
                {t.stat4Label}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
