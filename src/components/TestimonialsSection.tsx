import React from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote, Home, CheckCircle2 } from 'lucide-react';

interface TestimonialsProps {
  language: Language;
}

export const TestimonialsSection: React.FC<TestimonialsProps> = ({ language }) => {
  const t = translations[language].testimonials;

  return (
    <section className="py-20 bg-stone-950 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-2">
            {t.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight [text-wrap:balance]">
            {t.title}
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base font-normal">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 bg-stone-900 border border-stone-800 rounded-lg flex flex-col justify-between hover:border-stone-700 transition-colors shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-stone-600" />
                </div>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed italic mb-6">
                  "{language === 'en' ? item.quoteEn : item.quoteEs}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-bold text-white">
                    {item.name}
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Job
                  </span>
                </div>
                <div className="text-xs text-stone-400 mt-0.5">
                  {item.neighborhood}
                </div>
                <div className="text-[11px] text-amber-400 font-medium mt-1 flex items-center gap-1">
                  <Home className="w-3 h-3 text-stone-500" />
                  <span>{item.serviceType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
