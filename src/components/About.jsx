import React from 'react';
import { CLINIC_INFO } from '../data/medicalData';

export default function About() {
  const values = [
    {
      title: "Misión Institucional",
      desc: "Brindar atención médica y odontológica integral, oportuna y humana, garantizando la salud y bienestar de las familias de Carapungo y del norte de Quito."
    },
    {
      title: "Visión",
      desc: "Consolidarnos como el centro de salud de mayor confianza comunitaria por nuestra excelencia clínica, bioseguridad y accesibilidad económica."
    },
    {
      title: "Calidad y Calidez",
      desc: "Trato digno, cercano y personalizado para niños, jóvenes, mujeres gestantes y adultos mayores con vocación de servicio."
    },
    {
      title: "Compromiso Social",
      desc: "Tarifas solidarias oficiales (Consulta Dental Gratuita y Consulta Médica a $10) para cuidar la economía familiar sin sacrificar calidad."
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Imagen Institucional */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              <img 
                src="/assets/facilities/medical_consultation.jpg" 
                alt="Consultorio médico de DENTIMEDIC" 
                className="w-full h-[430px] object-cover"
              />
              <div className="p-6 bg-slate-900 text-white">
                <p className="text-xs font-bold text-brand-300 uppercase tracking-widest mb-1">Centro Médico y Odontológico</p>
                <h4 className="text-lg font-bold text-white mb-1">{CLINIC_INFO.name}</h4>
                <p className="text-xs text-slate-300">
                  {CLINIC_INFO.address} ({CLINIC_INFO.sector}) — {CLINIC_INFO.reference}
                </p>
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
                Sobre Nosotros
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                Salud y Odontología Integral con Calidez Humana
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {values.map((v, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border-l-4 border-l-brand-500 border border-slate-200 shadow-sm hover:border-brand-300 transition-colors">
                  <h4 className="text-sm font-extrabold text-slate-900 mb-1.5">{v.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
