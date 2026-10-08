import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { Send, CheckCircle2, Phone, MessageSquare, MapPin, Clock, AlertCircle } from 'lucide-react';
import { CallOptionsButton } from './CallOptionsButton';

interface ContactProps {
  language: Language;
  initialValues?: {
    serviceType?: string;
    notes?: string;
  };
}

export const ContactSection: React.FC<ContactProps> = ({
  language,
  initialValues,
}) => {
  const t = translations[language].contact;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Asphalt Shingle Roof Repair',
    address: '',
    timeframe: 'As soon as possible / Emergency',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialValues) {
      setFormData((prev) => ({
        ...prev,
        serviceType: initialValues.serviceType || prev.serviceType,
        notes: initialValues.notes
          ? `${prev.notes ? prev.notes + '\n' : ''}${initialValues.notes}`
          : prev.notes,
      }));
    }
  }, [initialValues]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg(
        language === 'en'
          ? 'Please provide at least your name and phone number so Daron can reach you.'
          : 'Por favor ingresa al menos tu nombre y número de teléfono para que Daron pueda contactarte.'
      );
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceType: 'Asphalt Shingle Roof Repair',
      address: '',
      timeframe: 'As soon as possible / Emergency',
      notes: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-stone-900 border-b border-stone-800">
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

        {/* Quick Call Box at Top */}
        <div className="mb-10 p-5 bg-amber-500/10 border border-amber-500/40 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-stone-950 font-bold shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                {t.directCallTitle}
              </span>
              <span className="text-sm font-semibold text-white">
                {language === 'en'
                  ? 'Speak directly with Daron right now for emergencies or quick questions.'
                  : 'Habla directamente con Daron ahora mismo para emergencias o dudas rápidas.'}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <CallOptionsButton
              language={language}
              label={language === 'en' ? 'Call Now' : 'Llamar Ahora'}
              wrapperClassName="flex-1 sm:flex-none"
              className="w-full px-4 py-2.5 text-xs font-black uppercase tracking-wider text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors text-center whitespace-nowrap shadow"
            >
              <Phone className="w-3.5 h-3.5" />
              {language === 'en' ? 'Call Now' : 'Llamar Ahora'}
            </CallOptionsButton>
            <a
              href="sms:+12816624097"
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-200 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-md transition-colors text-center whitespace-nowrap"
            >
              {language === 'en' ? 'Send Text' : 'Enviar SMS'}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-stone-950 border border-stone-800 rounded-lg p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="py-8 text-center space-y-5 animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {t.successTitle}
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  {t.successMessage}
                </p>
                <div className="p-3 bg-stone-900 rounded border border-stone-800 max-w-sm mx-auto text-left text-xs space-y-1 text-stone-300">
                  <div>Name: {formData.name}</div>
                  <div>Phone: {formData.phone}</div>
                  <div>Service: {formData.serviceType}</div>
                </div>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors cursor-pointer"
                >
                  {t.resetBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-white mb-2">
                  {t.formTitle}
                </h3>

                {errorMsg && (
                  <div className="p-3 bg-red-950/80 border border-red-700/60 rounded text-xs text-red-200 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-xs font-bold text-stone-300 uppercase tracking-wider block mb-1.5">
                      {t.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.namePlaceholder}
                      className="w-full px-3 py-2 bg-stone-900 border border-stone-700 rounded-md text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-300 uppercase tracking-wider block mb-1.5">
                      {t.phoneLabel} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.phonePlaceholder}
                      className="w-full px-3 py-2 bg-stone-900 border border-stone-700 rounded-md text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-xs font-bold text-stone-300 uppercase tracking-wider block mb-1.5">
                      {t.emailLabel}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.emailPlaceholder}
                      className="w-full px-3 py-2 bg-stone-900 border border-stone-700 rounded-md text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-300 uppercase tracking-wider block mb-1.5">
                      {t.serviceTypeLabel}
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3 py-2 bg-stone-900 border border-stone-700 rounded-md text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500"
                    >
                      {t.serviceOptions.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-xs font-bold text-stone-300 uppercase tracking-wider block mb-1.5">
                      {t.addressLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder={t.addressPlaceholder}
                      className="w-full px-3 py-2 bg-stone-900 border border-stone-700 rounded-md text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-300 uppercase tracking-wider block mb-1.5">
                      {t.timeframeLabel}
                    </label>
                    <select
                      value={formData.timeframe}
                      onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                      className="w-full px-3 py-2 bg-stone-900 border border-stone-700 rounded-md text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500"
                    >
                      {t.timeframeOptions.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-300 uppercase tracking-wider block mb-1.5">
                    {t.notesLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={t.notesPlaceholder}
                    className="w-full px-3 py-2 bg-stone-900 border border-stone-700 rounded-md text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-5 text-xs sm:text-sm font-black uppercase tracking-wider text-stone-950 bg-amber-500 hover:bg-amber-400 disabled:bg-amber-600 rounded-md transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  {isSubmitting ? (
                    <span>{t.submitting}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.submitBtn}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-stone-950 border border-stone-800 rounded-lg p-6 space-y-5">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                {language === 'en' ? 'Direct Contractor Info' : 'Datos del Contratista'}
              </h4>

              <div className="space-y-4 text-xs sm:text-sm text-stone-300">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">
                      {language === 'en' ? 'Call or Text Daron' : 'Llama o Manda Mensaje'}
                    </span>
                    <CallOptionsButton
                      language={language}
                      label={language === 'en' ? 'Call or Text' : 'Llamar o Enviar Mensaje'}
                      className="text-amber-400 font-mono font-bold hover:underline"
                    >
                      {language === 'en' ? 'Choose a phone number' : 'Elige un número'}
                    </CallOptionsButton>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">
                      {language === 'en' ? 'Service Area' : 'Área de Trabajo'}
                    </span>
                    <span className="text-stone-400">
                      {language === 'en'
                        ? 'Houston, TX and nearby communities'
                        : 'Houston, TX y comunidades cercanas'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">
                      {language === 'en' ? 'Working Hours' : 'Horario de Atención'}
                    </span>
                    <span className="text-stone-400 text-xs">
                      {t.directHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Free In-Person Estimate badge */}
            <div className="p-4 bg-stone-950 border border-stone-800 rounded-lg text-xs space-y-2">
              <div className="flex items-center gap-2 font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>
                  {language === 'en' ? '100% Free In-Person Estimates' : 'Estimados 100% Gratis en Persona'}
                </span>
              </div>
              <p className="text-stone-400 leading-relaxed text-[11px]">
                {language === 'en'
                  ? 'I come by your house, measure your roof or rooms, discuss your goals, and give you a written estimate on the spot with zero obligation.'
                  : 'Voy a tu casa, mido el techo o las áreas a pintar, platicamos de lo que necesitas y te doy el presupuesto por escrito sin ningún compromiso.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
