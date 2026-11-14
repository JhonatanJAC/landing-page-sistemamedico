import React from 'react';
import { CLINIC_INFO } from '../data/medicalData';

export default function Hero({ onOpenAppointment }) {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-blue-50/60 pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Luces sutiles de fondo */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-dark/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Columna Texto */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center bg-brand-500/10 border border-brand-500/30 text-brand-700 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full">
              <span>Centro Médico y Odontológico en Carapungo, Quito</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Tu salud integral y bienestar en{' '}
              <span className="text-brand-500">
                DENTIMEDIC
              </span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-brand-dark italic font-heading">
              "{CLINIC_INFO.slogan}"
            </p>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Atención médica, odontológica y de especialidades con calidez humana, tecnología moderna y tarifas al alcance de toda la familia en el sector La Morenita, Carapungo.
            </p>

            {/* Tarjetas de Promoción y Tarifas Oficiales */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {/* Tarjeta 1: Medicina General y Ginecología */}
              <div className="bg-white p-3.5 sm:p-4 rounded-2xl border-2 border-brand-400 shadow-sm text-left flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-brand-700 block">Tarifa Preferencial</span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 block mt-1 leading-snug">
                    Medicina General & Ginecología
                  </span>
                </div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-xl font-black text-brand-600">$10</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">USD c/u</span>
                </div>
              </div>

              {/* Tarjeta 2: Consulta Odontológica */}
              <div className="bg-white p-3.5 sm:p-4 rounded-2xl border-2 border-amber-300 shadow-sm text-left flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-amber-700 block">Evaluación Bucal</span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 block mt-1 leading-snug">
                    Consulta Odontológica
                  </span>
                </div>
                <div className="mt-2">
                  <span className="inline-block bg-amber-100 text-amber-900 text-xs font-black px-2.5 py-0.5 rounded-md">
                    ¡GRATUITA!
                  </span>
                </div>
              </div>

              {/* Tarjeta 3: Demás Especialidades */}
              <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200 shadow-sm text-left flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 block">Especialistas</span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 block mt-1 leading-snug">
                    Demás Especialidades
                  </span>
                </div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-xl font-black text-slate-800">$30</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">USD</span>
                </div>
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappMain}?text=Hola%20DENTIMEDIC,%20quisiera%20agendar%20una%20cita%20m%C3%A9dica%20u%20odontol%C3%B3gica%20en%20Carapungo.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-whatsapp hover:bg-whatsapp-dark text-white font-bold text-base px-7 py-3.5 rounded-full shadow-lg shadow-whatsapp/30 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Agendar por WhatsApp</span>
              </a>

              <a
                href="#especialidades"
                className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-brand-dark font-bold text-base px-6 py-3.5 rounded-full border border-slate-300 shadow-sm hover:border-brand-dark transition-all duration-200"
              >
                <span>Ver Especialidades</span>
              </a>
            </div>

          </div>

          {/* Columna Ubicación en Google Maps (Sin cuadro de texto / Solo mapa limpio) */}
          <div className="lg:col-span-6 relative flex flex-col justify-center w-full">
            <div className="relative w-full h-[440px] sm:h-[500px] lg:h-[530px] rounded-3xl bg-white shadow-2xl border-4 border-white overflow-hidden">
              <iframe
                title="Ubicación DENTIMEDIC Alhambra 11 Carapungo"
                src="https://maps.google.com/maps?q=Alhambra+11,+170204+Quito,+Ecuador&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[calc(100%+120px)] -mt-[115px] border-none"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
