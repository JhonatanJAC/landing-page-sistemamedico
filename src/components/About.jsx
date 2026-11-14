import React from 'react';
import { CLINIC_INFO } from '../data/medicalData';

export default function About() {
  return (
    <section id="nosotros" className="py-14 sm:py-16 bg-slate-50/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Imagen Institucional Proporcionada */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white">
              <img 
                src="/assets/centromedico.jpeg" 
                alt="Centro de Especialidades Médicas y Odontológicas DENTIMEDIC" 
                className="w-full h-[280px] sm:h-[340px] lg:h-[400px] object-cover"
              />
              <div className="p-4 sm:p-5 bg-slate-900 text-white">
                <p className="text-[10px] font-bold text-brand-300 uppercase tracking-widest">
                  Atención Integral y Calidez Humana
                </p>
                <h4 className="text-sm sm:text-base font-extrabold text-white mt-0.5">
                  {CLINIC_INFO.name}
                </h4>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  {CLINIC_INFO.address} ({CLINIC_INFO.sector})
                </p>
              </div>
            </div>
          </div>

          {/* Contenido Institucional Dimensionado */}
          <div className="lg:col-span-7 space-y-4">
            
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-3 py-0.5 rounded-full inline-block">
                Sobre Nosotros
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight mt-1.5 leading-snug">
                CENTRO DE ESPECIALIDADES MÉDICAS Y ODONTOLÓGICAS DENTIMEDIC
              </h2>
            </div>

            {/* Texto de Presentación Oficial */}
            <div className="text-xs sm:text-[13px] text-slate-600 leading-relaxed text-justify">
              <p>
                Es un placer presentarles al centro de especialidades médicas y odontológicas <strong>DENTIMEDIC</strong>, ubicada en el Norte de Quito, Carapungo. Calle Alcalá OE6-11 y Alhambra, somos un grupo de profesionales dedicados a la salud con el fin de ofrecer servicios médicos y odontológicos de calidad con un enfoque especializado en la salud y atención integral para toda la familia. Nuestro equipo de profesionales altamente capacitados se compromete en brindar un cuidado médico y odontológico personalizado y eficiente, con instalaciones de calidad y trato humano excepcional.
              </p>
            </div>

            {/* Tarjetas de Misión y Visión Lado a Lado (Sin hacer scroll infinito) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              
              {/* Misión */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border-l-4 border-l-brand-500 border border-slate-200 shadow-sm hover:border-brand-300 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                    <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                      MISIÓN
                    </h3>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed mb-2 text-justify">
                    Mediante un mejor conocimiento del cliente/paciente, conseguir la mejor asistencia médica y ética, que nos permita crecer, mejorar en eficacia y eficiencia, y ser reconocidos por nuestros usuarios por la calidad en los servicios y atención.
                  </p>
                </div>
                <p className="text-[11px] font-bold text-brand-dark leading-snug pt-2 border-t border-slate-100">
                  Compromiso total para cumplir y, si es posible, sobrepasar las expectativas del cliente.
                </p>
              </div>

              {/* Visión */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border-l-4 border-l-teal-500 border border-slate-200 shadow-sm hover:border-teal-300 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                    <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                      VISIÓN
                    </h3>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed text-justify">
                    Prestar servicios de salud, y dar atención no sólo a personas con enfermedad sino también a otros aspectos físicos y psíquicos que producen bienestar a éstas, abarcando todos los segmentos de edad de la población, y ejerciendo actividades específicas y concretas.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
