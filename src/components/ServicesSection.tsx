import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { ROOFING_IMAGE, PAINTING_IMAGE, KITCHEN_IMAGE } from '../data/mockData';
import { 
  Home, 
  Paintbrush, 
  Hammer, 
  CheckCircle, 
  ArrowRight,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';
import { CallOptionsButton } from './CallOptionsButton';

interface ServicesProps {
  language: Language;
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({
  language,
  onSelectServiceForQuote,
}) => {
  const t = translations[language].services;
  const [activeTab, setActiveTab] = useState<string>('roofing');

  const iconMap: Record<string, React.ReactNode> = {
    roofing: <Home className="w-5 h-5" />,
    painting: <Paintbrush className="w-5 h-5" />,
    remodeling: <Hammer className="w-5 h-5" />,
  };

  const imageMap: Record<string, string> = {
    roofing: ROOFING_IMAGE,
    painting: PAINTING_IMAGE,
    remodeling: KITCHEN_IMAGE,
  };

  const selectedService = t.items.find((item) => item.id === activeTab) || t.items[0];

  return (
    <section id="services" className="py-20 bg-stone-950 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-2">
            {t.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight [text-wrap:balance]">
            {t.title}
          </h2>
          <p className="mt-3 text-stone-300 text-base font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* 3-Tab Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8 p-1.5 bg-stone-900 rounded-lg border border-stone-800">
          {t.items.map((item, index) => {
            const isActive = item.id === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-3 p-3.5 rounded-md transition-all text-left cursor-pointer focus:outline-none ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 font-bold shadow-md'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800/80'
                }`}
              >
                <div className={`p-2 rounded ${isActive ? 'bg-stone-950 text-amber-400' : 'bg-stone-800 text-amber-400'}`}>
                  {iconMap[item.id]}
                </div>
                <div className="min-w-0 flex-1">
                  <div className={`text-[10px] font-mono uppercase ${isActive ? 'text-stone-900 font-bold' : 'text-stone-400'}`}>
                    0{index + 1}
                  </div>
                  <div className="text-sm font-bold truncate">
                    {item.title.split('(')[0].trim()}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detail Panel */}
        <div className="bg-stone-900 border border-stone-800 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Column: Image with details */}
            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto min-h-[300px] bg-stone-950">
              <img
                src={imageMap[selectedService.id]}
                alt={selectedService.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-stone-950/90 rounded border border-stone-800 backdrop-blur-sm">
                <span className="text-[10px] uppercase font-mono text-amber-400 block font-bold">
                  {selectedService.metricLabel}
                </span>
                <span className="text-xl font-black text-white font-mono">
                  {selectedService.metric}
                </span>
              </div>
            </div>

            {/* Right Column: Descriptions & Checklist */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                  {selectedService.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
                  {selectedService.title}
                </h3>
                <p className="text-sm text-stone-300 leading-relaxed font-normal mb-6">
                  {selectedService.description}
                </p>

                {/* Materials used callout */}
                <div className="mb-6 p-3 bg-stone-950 rounded border border-stone-800 flex items-center gap-2.5 text-xs text-stone-300">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="font-bold text-white">
                      {language === 'en' ? 'Quality Brands Used: ' : 'Marcas que Utilizo: '}
                    </span>
                    <span className="text-amber-400 font-medium">{selectedService.materials}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    {language === 'en' ? 'What’s Included In My Service:' : 'Qué Incluye mi Trabajo:'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-stone-300 leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onSelectServiceForQuote(selectedService.title)}
                  className="px-5 py-3 text-xs font-black uppercase tracking-wider text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>
                    {language === 'en'
                      ? `Get Free Estimate for ${selectedService.title.split('(')[0].trim()}`
                      : `Cotización Gratis de ${selectedService.title.split('(')[0].trim()}`}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <CallOptionsButton
                  language={language}
                  label={language === 'en' ? 'Call Contractor' : 'Llamar al Contratista'}
                  className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  <span>{language === 'en' ? 'Call Contractor' : 'Llamar al Contratista'}</span>
                </CallOptionsButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
