import React, { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';
import { FACILITIES } from '../data/medicalData';

export default function Facilities() {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <section id="instalaciones" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
            Nuestros Espacios
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Instalaciones Modernas, Higiénicas y Confortables
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Espacios diseñados bajo estrictas normas de bioseguridad, esterilización y calidez para tu tranquilidad.
          </p>
        </div>

        {/* Grilla de Galería */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((f, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImg(f)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-60 overflow-hidden bg-slate-200">
                <img 
                  src={f.img} 
                  alt={f.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-white">
                  <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">
                    <ZoomIn className="w-4 h-4" />
                    <span>Ampliar</span>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h4 className="text-base font-bold text-slate-900 mb-1">{f.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImg && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveImg(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImg(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors"
              aria-label="Cerrar vista"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[70vh] bg-slate-900 flex items-center justify-center overflow-hidden">
              <img 
                src={activeImg.img} 
                alt={activeImg.title} 
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="p-6 bg-white">
              <h4 className="text-lg font-bold text-slate-900 mb-1">{activeImg.title}</h4>
              <p className="text-xs sm:text-sm text-slate-600">{activeImg.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
