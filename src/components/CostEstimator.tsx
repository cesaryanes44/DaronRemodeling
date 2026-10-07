import React, { useState, useMemo } from 'react';
import { Language, EstimatorState } from '../types';
import { translations } from '../i18n/translations';
import { Calculator, ArrowRight, CheckCircle2, Info, Sparkles, Home, Paintbrush, Hammer } from 'lucide-react';

interface CostEstimatorProps {
  language: Language;
  onTransferEstimate: (estimateData: {
    serviceType: string;
    scope: string;
    estimatedBudget: string;
    materials: string;
  }) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({
  language,
  onTransferEstimate,
}) => {
  const t = translations[language].estimator;

  const [state, setState] = useState<EstimatorState>({
    service: 'roofing',
    scopeTier: 'medium',
    materials: 'premium',
    urgency: false,
  });

  // Base pricing benchmark ranges for USA residential contractor
  const pricingMatrix: Record<
    EstimatorState['service'],
    Record<EstimatorState['scopeTier'], [number, number]>
  > = {
    roofing: {
      small: [6500, 8500],
      medium: [9000, 13000],
      large: [14000, 19500],
    },
    painting: {
      small: [1200, 2200],
      medium: [3000, 5200],
      large: [5800, 9500],
    },
    kitchen: {
      small: [4500, 7500],
      medium: [9500, 15500],
      large: [16000, 26000],
    },
    bathroom: {
      small: [3200, 5500],
      medium: [6800, 11000],
      large: [12000, 19000],
    },
  };

  const materialMultiplier = state.materials === 'premium' ? 1.18 : 1.0;

  const calculation = useMemo(() => {
    const [baseLow, baseHigh] = pricingMatrix[state.service][state.scopeTier];
    const totalLow = Math.round((baseLow * materialMultiplier) / 100) * 100;
    const totalHigh = Math.round((baseHigh * materialMultiplier) / 100) * 100;

    return {
      formattedLow: `$${totalLow.toLocaleString()}`,
      formattedHigh: `$${totalHigh.toLocaleString()}`,
      rawLow: totalLow,
      rawHigh: totalHigh,
    };
  }, [state, materialMultiplier]);

  const handleTransfer = () => {
    onTransferEstimate({
      serviceType: t.services[state.service],
      scope: t.sizes[state.service][state.scopeTier],
      estimatedBudget: `${calculation.formattedLow} – ${calculation.formattedHigh}`,
      materials: t.materials[state.materials],
    });
  };

  return (
    <section id="estimator" className="py-20 bg-stone-950 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Controls (7 cols) */}
          <div className="lg:col-span-7 bg-stone-900 border border-stone-800 rounded-lg p-5 sm:p-7 space-y-6">
            {/* Step 1: Service */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-stone-300 block mb-2.5">
                1. {t.serviceLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(['roofing', 'painting', 'kitchen', 'bathroom'] as const).map((srv) => (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => setState((s) => ({ ...s, service: srv }))}
                    className={`p-3 text-left rounded-md border text-xs font-bold transition-all cursor-pointer ${
                      state.service === srv
                        ? 'bg-amber-500 text-stone-950 border-amber-500 shadow-md font-black'
                        : 'bg-stone-950 text-stone-300 border-stone-800 hover:border-stone-700 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="truncate">{t.services[srv]}</span>
                      {state.service === srv && <Sparkles className="w-3.5 h-3.5 shrink-0 ml-1" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Size / Scope */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-stone-300 block mb-2.5">
                2. {t.sizeLabel}
              </label>
              <div className="space-y-2">
                {(['small', 'medium', 'large'] as const).map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setState((s) => ({ ...s, scopeTier: tier }))}
                    className={`w-full p-3 text-left rounded-md border transition-all cursor-pointer ${
                      state.scopeTier === tier
                        ? 'bg-amber-500/10 border-amber-500 text-white'
                        : 'bg-stone-950 border-stone-800 text-stone-400 hover:border-stone-700 hover:text-stone-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">
                        {t.sizes[state.service][tier]}
                      </span>
                      {state.scopeTier === tier && (
                        <span className="text-[10px] font-mono font-bold text-amber-400 uppercase">
                          Selected
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Material Quality */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-stone-300 block mb-2.5">
                3. {t.materialsLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(['standard', 'premium'] as const).map((mat) => (
                  <button
                    key={mat}
                    type="button"
                    onClick={() => setState((s) => ({ ...s, materials: mat }))}
                    className={`p-3 text-left rounded-md border text-xs transition-all cursor-pointer ${
                      state.materials === mat
                        ? 'bg-amber-500 text-stone-950 font-black border-amber-500 shadow-md'
                        : 'bg-stone-950 text-stone-300 border-stone-800 hover:border-stone-700 hover:text-white'
                    }`}
                  >
                    <span className="block font-bold">
                      {mat === 'standard' ? 'Standard Quality' : 'Premium Architectural'}
                    </span>
                    <span className={`text-[10px] block mt-0.5 ${state.materials === mat ? 'text-stone-900' : 'text-stone-400'}`}>
                      {t.materials[mat]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Output Card (5 cols) */}
          <div className="lg:col-span-5 bg-stone-900 border border-amber-500/50 rounded-lg p-6 sm:p-7 space-y-6 shadow-2xl relative">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 tracking-wider">
              <Calculator className="w-4 h-4" />
              <span>{t.summaryTitle}</span>
            </div>

            {/* Total Display */}
            <div className="p-5 bg-stone-950 rounded-md border border-stone-800 text-center sm:text-left">
              <span className="text-xs text-stone-400 font-medium block uppercase tracking-wider">
                {t.estimatedBudget}
              </span>
              <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono tabular-nums tracking-tight mt-1">
                {calculation.formattedLow} – {calculation.formattedHigh}
              </div>
              <div className="text-xs text-stone-400 mt-2">
                {language === 'en'
                  ? 'Includes all labor by Daron, quality materials & disposal'
                  : 'Incluye mano de obra de Daron, materiales y retiro de escombros'}
              </div>
            </div>

            {/* Checklist of what's included */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                {t.breakdownTitle}
              </span>
              <div className="space-y-2 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{t.materialsIncluded}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{t.laborIncluded}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{t.cleanupIncluded}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{t.warrantyIncluded}</span>
                </div>
              </div>
            </div>

            {/* Action Transfer */}
            <div className="pt-3 border-t border-stone-800 space-y-3">
              <button
                type="button"
                onClick={handleTransfer}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-black uppercase tracking-wider text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors shadow-lg cursor-pointer text-center"
              >
                <span>{t.transferBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-start gap-2 text-[11px] text-stone-400 leading-tight">
                <Info className="w-3.5 h-3.5 shrink-0 text-amber-500 mt-0.5" />
                <span>{t.estimateNotice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
