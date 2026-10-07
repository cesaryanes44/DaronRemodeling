/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Language } from './types';
import { translations } from './i18n/translations';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CostEstimator } from './components/CostEstimator';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  // English is the primary default language ("su idioma principal sea el ingles")
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('daron_lang');
    return saved === 'es' || saved === 'en' ? saved : 'en';
  });

  const [quotePrefill, setQuotePrefill] = useState<{
    serviceType?: string;
    scope?: string;
    estimatedBudget?: string;
    notes?: string;
  }>({});

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    localStorage.setItem('daron_lang', newLang);
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = translations[language].meta.title;
  }, [language]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTransferEstimate = (estimateData: {
    serviceType: string;
    scope: string;
    estimatedBudget: string;
    materials: string;
  }) => {
    setQuotePrefill({
      serviceType: estimateData.serviceType,
      estimatedBudget: estimateData.estimatedBudget,
      notes:
        language === 'en'
          ? `Estimated request: ${estimateData.serviceType} (${estimateData.scope}) using ${estimateData.materials}. Ballpark budget: ${estimateData.estimatedBudget}. Please schedule a free in-person estimate.`
          : `Solicitud estimada: ${estimateData.serviceType} (${estimateData.scope}) con calidad ${estimateData.materials}. Presupuesto aproximado: ${estimateData.estimatedBudget}. Favor de coordinar estimado gratis en persona.`,
    });
    scrollToSection('contact');
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setQuotePrefill({
      serviceType: serviceTitle,
      notes:
        language === 'en'
          ? `Hi Daron, I would like a free estimate for ${serviceTitle}.`
          : `Hola Daron, me gustaría un presupuesto gratis para ${serviceTitle}.`,
    });
    scrollToSection('contact');
  };

  const handleSelectProjectForEstimate = (projectName: string) => {
    setQuotePrefill({
      notes:
        language === 'en'
          ? `Hi Daron, I saw your job "${projectName}" and have a similar project for my house.`
          : `Hola Daron, vi tu trabajo "${projectName}" y tengo un proyecto similar en mi casa.`,
    });
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* Top Header with Prominent Language Switcher */}
      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
        onNavigate={scrollToSection}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          language={language}
          onNavigate={scrollToSection}
        />

        {/* About Daron (Independent Craftsman) */}
        <AboutSection
          language={language}
        />

        {/* Core Services: Painting, Roofing (USA style), Remodeling */}
        <ServicesSection
          language={language}
          onSelectServiceForQuote={handleSelectServiceForQuote}
        />

        {/* Real Jobs Portfolio */}
        <ProjectsSection
          language={language}
          onSelectProjectForEstimate={handleSelectProjectForEstimate}
        />

        {/* Ballpark Cost Estimator */}
        <CostEstimator
          language={language}
          onTransferEstimate={handleTransferEstimate}
        />

        {/* Why Work With Daron / The Independent Contractor Advantage */}
        <WhyWorkWithMe
          language={language}
        />

        {/* Homeowner Testimonials */}
        <TestimonialsSection
          language={language}
        />

        {/* Free Estimate Form & Direct Call */}
        <ContactSection
          language={language}
          initialValues={quotePrefill}
        />
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onLanguageChange={handleLanguageChange}
        onNavigate={scrollToSection}
      />
    </div>
  );
}
