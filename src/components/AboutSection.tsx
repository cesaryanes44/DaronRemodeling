import React from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { PAINTING_IMAGE } from '../data/mockData';
import { CheckCircle2, UserCheck, Sparkles, Shield, Wrench } from 'lucide-react';

interface AboutProps {
  language: Language;
}

export const AboutSection: React.FC<AboutProps> = ({ language }) => {
  const t = translations[language].about;

  return (
    <section id="about" className="py-20 bg-stone-900 border-b border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-2">
            {t.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight [text-wrap:balance]">
            {t.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-200 leading-relaxed font-normal">
            {t.lead}
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Story + Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-stone-300 leading-relaxed text-sm sm:text-base">
              {t.body}
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {t.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-stone-950/70 rounded-md border border-stone-800 transition-colors hover:border-amber-500/50"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                    <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats proof */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-stone-800">
              <div>
                <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono tabular-nums">
                  {t.statsVal1}
                </div>
                <div className="text-xs text-stone-400 font-medium mt-0.5">
                  {t.statsLabel1}
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono tabular-nums">
                  {t.statsVal2}
                </div>
                <div className="text-xs text-stone-400 font-medium mt-0.5">
                  {t.statsLabel2}
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono tabular-nums">
                  {t.statsVal3}
                </div>
                <div className="text-xs text-stone-400 font-medium mt-0.5">
                  {t.statsLabel3}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Photo of Craftsman at Work */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-md overflow-hidden border border-stone-700/80 shadow-2xl bg-stone-950">
              <img
                src={PAINTING_IMAGE}
                alt="Deny A. working carefully on a residential home project"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="p-4 bg-stone-950/95 border-t border-stone-800 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Deny A. · Independent Contractor</span>
                  </div>
                </div>
                <p className="text-xs text-stone-400">
                  {language === 'en'
                    ? '“I don’t leave your house until you’re completely satisfied with the work.”'
                    : '“No me voy de tu casa hasta que estés completamente conforme con el trabajo.”'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
