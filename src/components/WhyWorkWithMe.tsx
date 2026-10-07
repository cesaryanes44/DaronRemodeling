import React from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { PhoneCall, ShieldCheck, UserCheck, DollarSign, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface WhyWorkWithMeProps {
  language: Language;
}

export const WhyWorkWithMe: React.FC<WhyWorkWithMeProps> = ({ language }) => {
  const t = translations[language].whyMe;

  const icons = [
    <PhoneCall className="w-5 h-5 text-amber-500" key="1" />,
    <UserCheck className="w-5 h-5 text-amber-500" key="2" />,
    <DollarSign className="w-5 h-5 text-amber-500" key="3" />,
    <HeartHandshake className="w-5 h-5 text-amber-500" key="4" />,
  ];

  return (
    <section className="py-20 bg-stone-900 border-b border-stone-800">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.points.map((pt, idx) => (
            <div
              key={idx}
              className="p-6 bg-stone-950 rounded-lg border border-stone-800 hover:border-amber-500/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded bg-stone-900 flex items-center justify-center border border-stone-800 mb-4">
                  {icons[idx]}
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {pt.title}
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {pt.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-900 text-[11px] font-bold text-amber-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Guaranteed by Daron' : 'Garantizado por Daron'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
