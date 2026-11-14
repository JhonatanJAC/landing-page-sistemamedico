import React, { useState } from 'react';
import { SPECIALTIES } from '../data/medicalData';

export default function Specialties({ onSelectSpecialty }) {
  const [search, setSearch] = useState('');

  const filtered = SPECIALTIES.filter(s => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return s.title.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q);
  });

  return (
    <section id="especialidades" className="py-16 sm:py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de Sección */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full inline-block">
            Cartera de Especialistas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2.5">
            Especialidades Médicas
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
            Atención personalizada con profesionales calificados en el sector La Morenita, Carapungo.
          </p>
        </div>

        {/* Buscador Rápido y Contador */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8 max-w-4xl mx-auto">
          <div className="text-xs text-slate-500 font-medium">
            Mostrando <strong className="text-slate-900">{filtered.length}</strong> de {SPECIALTIES.length} especialidades
          </div>

          <div className="w-full sm:w-72">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar especialidad (ej: ginecología, pediatría...)"
              className="w-full px-3.5 py-2 text-xs rounded-full border border-slate-200 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 shadow-2xs"
            />
          </div>
        </div>

        {/* Grilla Limpia de las 11 Especialidades Oficiales */}
        {filtered.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 max-w-md mx-auto p-6">
            <p className="text-sm font-semibold text-slate-700">No se encontraron resultados</p>
            <p className="text-xs text-slate-500 mt-1">Intenta con otro término de búsqueda.</p>
            <button
              onClick={() => setSearch('')}
              className="mt-3 text-xs font-bold text-brand-600 hover:underline"
            >
              Ver todas las especialidades
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((item) => {
              const isContinuous = item.badgeType === 'continuous';
              const badgeClass = isContinuous
                ? "bg-emerald-100 text-emerald-800 border-emerald-300 font-bold"
                : "bg-slate-100 text-slate-600 border-slate-200";

              return (
                <div 
                  key={item.id}
                  className="bg-white rounded-xl border border-slate-200/90 p-4 sm:p-5 flex flex-col justify-between hover:border-brand-400 hover:shadow-md transition-all duration-200 group"
                >
                  <div>
                    {/* Header de la tarjeta */}
                    <div className="flex items-start justify-between gap-1.5 mb-2">
                      <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-brand-dark transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border shrink-0 ${badgeClass}`}>
                        {item.badge}
                      </span>
                    </div>

                    {/* Descripción concisa */}
                    <p className="text-xs text-slate-500 leading-relaxed mb-3">
                      {item.desc}
                    </p>
                  </div>

                  {/* Pie de la tarjeta */}
                  <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[10px] font-semibold text-slate-400">
                      {item.schedule.includes('continua') ? (
                        <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60 font-bold">
                          Atención continua
                        </span>
                      ) : (
                        'Previa Cita'
                      )}
                    </span>

                    <button
                      onClick={() => onSelectSpecialty && onSelectSpecialty(item.title)}
                      className="text-xs font-bold text-brand-600 hover:text-brand-800 inline-flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Agendar</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
