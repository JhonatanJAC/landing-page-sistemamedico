import React from 'react';
import { DIAGNOSTIC_SERVICES, PROCEDURE_SERVICES } from '../data/medicalData';

export default function Services({ onOpenAppointment }) {
  return (
    <section id="servicios" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
            Servicios Médicos y Procedimientos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Diagnóstico Preciso y Atención Ambulatoria
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Equipamiento de apoyo diagnóstico y personal de enfermería para brindarte una atención rápida, segura y confiable.
          </p>
        </div>

        {/* Bloque 1: Diagnóstico e Imágenes */}
        <div className="mb-14">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Servicios de Diagnóstico e Imágenes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DIAGNOSTIC_SERVICES.map((s, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mb-4">{s.desc}</p>
                </div>
                <ul className="space-y-2 border-t border-slate-100 pt-4">
                  {s.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="text-xs text-slate-600 flex items-start gap-2">
                      <span className="text-brand-500 font-bold">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bloque 2: Procedimientos de Enfermería */}
        <div className="mb-16">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Procedimientos Ambulatorios y Enfermería
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCEDURE_SERVICES.map((s, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">{s.title}</h4>
                  <p className="text-xs text-slate-600 mb-4">{s.desc}</p>
                </div>
                <ul className="space-y-1.5 border-t border-slate-100 pt-3">
                  {s.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="text-[11px] text-slate-600 flex items-start gap-2">
                      <span className="text-brand-500 font-bold">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
