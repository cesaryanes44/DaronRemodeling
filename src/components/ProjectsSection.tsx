import React, { useState } from 'react';
import { Language, Project } from '../types';
import { translations } from '../i18n/translations';
import { PROJECTS } from '../data/mockData';
import { X, ArrowRight, CheckCircle2, MapPin, Calendar, Clock, Home } from 'lucide-react';

interface ProjectsProps {
  language: Language;
  onSelectProjectForEstimate: (projectName: string) => void;
}

export const ProjectsSection: React.FC<ProjectsProps> = ({
  language,
  onSelectProjectForEstimate,
}) => {
  const t = translations[language].projects;
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-stone-900 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
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

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-950 rounded-lg border border-stone-800 self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-amber-500 text-stone-950 shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              {t.filterAll}
            </button>
            <button
              onClick={() => setActiveFilter('roofing')}
              className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'roofing'
                  ? 'bg-amber-500 text-stone-950 shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              {t.filterRoofing}
            </button>
            <button
              onClick={() => setActiveFilter('painting')}
              className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'painting'
                  ? 'bg-amber-500 text-stone-950 shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              {t.filterPainting}
            </button>
            <button
              onClick={() => setActiveFilter('remodeling')}
              className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'remodeling'
                  ? 'bg-amber-500 text-stone-950 shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              {t.filterRemodeling}
            </button>
          </div>
        </div>

        {/* Projects 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-stone-950 border border-stone-800 rounded-lg overflow-hidden flex flex-col justify-between hover:border-amber-500/50 transition-all shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

                {/* Category label */}
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-stone-950/80 px-2 py-0.5 rounded border border-stone-800 backdrop-blur-sm">
                  <span>{project.category}</span>
                  <span aria-hidden="true" className="text-stone-500">·</span>
                  <span className="text-stone-300">{project.year}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2 group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Clean unboxed metadata */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-400 mb-3">
                    <span className="flex items-center gap-1 text-stone-300">
                      <MapPin className="w-3.5 h-3.5 text-amber-500" />
                      {project.location}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{project.scope}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed line-clamp-3 mb-4">
                    {language === 'en' ? project.descriptionEn : project.descriptionEs}
                  </p>
                </div>

                {/* Bottom link */}
                <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <span>{t.viewDetails}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-xs text-stone-400 font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3 text-stone-500" />
                    <span>{project.duration}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md overflow-y-auto animate-fade-in">
          <div className="relative w-full max-w-2xl bg-stone-900 border border-stone-700 rounded-lg shadow-2xl overflow-hidden my-8">
            <div className="flex items-center justify-between p-5 border-b border-stone-800 bg-stone-950">
              <div>
                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block">
                  {selectedProject.category} · {selectedProject.year}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white tracking-tight mt-0.5">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 text-stone-400 hover:text-white rounded-md hover:bg-stone-800 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-stone-950">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 space-y-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 bg-stone-950 rounded border border-stone-800 text-xs">
                <div>
                  <span className="text-[10px] font-mono text-stone-400 uppercase block">
                    {t.scopeLabel}
                  </span>
                  <span className="font-bold text-white mt-0.5 block">
                    {selectedProject.scope}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-stone-400 uppercase block">
                    {t.locationLabel}
                  </span>
                  <span className="font-bold text-stone-200 mt-0.5 block truncate">
                    {selectedProject.location}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-stone-400 uppercase block">
                    {t.durationLabel}
                  </span>
                  <span className="font-bold text-amber-400 mt-0.5 block">
                    {selectedProject.duration}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                  {language === 'en' ? selectedProject.descriptionEn : selectedProject.descriptionEs}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {t.highlightsTitle}
                </h4>
                <div className="space-y-2">
                  {(language === 'en' ? selectedProject.highlightsEn : selectedProject.highlightsEs).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-stone-300">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => {
                    onSelectProjectForEstimate(selectedProject.title);
                    setSelectedProject(null);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-black uppercase tracking-wider text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors cursor-pointer text-center"
                >
                  {language === 'en'
                    ? 'Ask Daron for Similar Project Estimate'
                    : 'Cotizar con Daron un Trabajo Parecido'}
                </button>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-400 hover:text-white bg-stone-800 rounded-md transition-colors cursor-pointer"
                >
                  {t.closeModal}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
