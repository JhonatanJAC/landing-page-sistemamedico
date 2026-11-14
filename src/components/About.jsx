import React from 'react';
import { CLINIC_INFO } from '../data/medicalData';

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Imagen Institucional */}
          <div className="lg:col-span-5 relative sticky top-24">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              <img 
                src="/assets/centromedico.jpeg" 
                alt="Centro de Especialidades Médicas y Odontológicas DENTIMEDIC" 
                className="w-full h-[360px] sm:h-[420px] lg:h-[480px] object-cover"
              />
              <div className="p-6 bg-slate-900 text-white">
                <p className="text-xs font-bold text-brand-300 uppercase tracking-widest mb-1">
                  Atención Integral y Calidez Humana
                </p>
                <h4 className="text-lg font-bold text-white mb-1">
                  {CLINIC_INFO.name}
                </h4>
                <p className="text-xs text-slate-300">
                  {CLINIC_INFO.address} ({CLINIC_INFO.sector}) — {CLINIC_INFO.reference}
                </p>
              </div>
            </div>
          </div>

          {/* Contenido Institucional */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
                Sobre Nosotros
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                CENTRO DE ESPECIALIDADES MÉDICAS Y ODONTOLÓGICAS DENTIMEDIC
              </h2>
            </div>

            {/* Texto de Presentación Oficial */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
              <p>
                Es un placer presentarles al centro de especialidades médicas y odontológicas <strong>DENTIMEDIC</strong>, ubicada en el Norte de Quito, Carapungo. Calle Alcalá OE6-11 y Alhambra, somos un grupo de profesionales dedicados a la salud con el fin de ofrecer servicios médicos y odontológicos de calidad con un enfoque especializado en la salud y atención integral para toda la familia. Nuestro equipo de profesionales altamente capacitados se compromete en brindar un cuidado médico y odontológico personalizado y eficiente, con instalaciones de calidad y trato humano excepcional.
              </p>
              <p>
                En <strong>DENTIMEDIC</strong> entendemos que la salud es fundamental para el bienestar general, por lo que ofrecemos una amplia gama de servicios <strong>MÉDICOS</strong> (Medicina General, Medicina Interna, Ginecología y Obstetricia, Pediatría, Otorrinolaringología, Dermatología, Neurología, Nutrición, Gastroenterología, Urología, Traumatología y Ortopedia, Terapia Física, Terapia Del Lenguaje, Psicología Clínica, Psicología Infantil) y <strong>ODONTOLÓGICOS</strong> (Odontología General, Cirugía Oral y Maxilofacial, Odontopediatría, Rehabilitación Oral, Endodoncia, Ortodoncia, Periodoncia).
              </p>
            </div>

            {/* Tarjetas de Misión y Visión */}
            <div className="grid grid-cols-1 gap-5 pt-3">
              
              {/* Misión */}
              <div className="bg-white p-6 rounded-2xl border-l-4 border-l-brand-500 border border-slate-200 shadow-sm hover:border-brand-300 transition-all">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-500"></span>
                  <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-wider">
                    MISIÓN
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2 text-justify">
                  Mediante un mejor conocimiento del cliente/paciente, conseguir la mejor asistencia médica y ética, que nos permita crecer, mejorar en eficacia y eficiencia, y ser reconocidos por nuestros usuarios por la calidad en los servicios y atención.
                </p>
                <p className="text-xs sm:text-sm font-semibold text-brand-dark leading-relaxed">
                  Compromiso total para cumplir y, si es posible, sobrepasar las expectativas del cliente.
                </p>
              </div>

              {/* Visión */}
              <div className="bg-white p-6 rounded-2xl border-l-4 border-l-teal-500 border border-slate-200 shadow-sm hover:border-teal-300 transition-all">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
                  <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-wider">
                    VISIÓN
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2.5 text-justify">
                  Prestar servicios de salud, y dar atención no sólo a personas con enfermedad sino también a otros aspectos físicos y psíquicos que producen bienestar a éstas, abarcando todos los segmentos de edad de la población, y ejerciendo actividades específicas y concretas.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                  Para ello, pretendemos que <strong>DENTIMEDIC</strong> se distinga como un centro de referencia en el sector de la medicina privada para la asistencia ambulatoria de alta resolución y complejidad en todas las especialidades médicas y odontológicas, por su accesibilidad, lo que permitirá cumplir con las expectativas de nuestros pacientes.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
