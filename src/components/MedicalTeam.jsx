import React from 'react';
import { CLINIC_INFO } from '../data/medicalData';

export default function MedicalTeam({ onOpenAppointment }) {
  return (
    <section id="equipo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
            Cuerpo Profesional y Horarios
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Nuestro Equipo Médico y Disponibilidad Confirmada
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Organización transparente de la atención médica y odontológica para garantizar tu puntualidad y comodidad.
          </p>
        </div>

        {/* Esquema de Disponibilidad */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200/70 rounded-3xl p-6 sm:p-8 mb-12 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
              Esquema Oficial de Atención por Especialidad
            </h3>
            <p className="text-xs text-slate-500">Datos verificados del establecimiento en Carapungo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-black px-2.5 py-0.5 rounded-full mb-3">
                Atención Continua Todo el Tiempo
              </span>
              <h4 className="text-base font-bold text-slate-900 mb-1">Odontología y Ginecología</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Disponibilidad continua de lunes a viernes (8am a 7pm) y sábados (8:30am a 5pm) para consultas, chequeos preventivos y tratamientos.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <span className="inline-block bg-cyan-100 text-cyan-900 text-xs font-black px-2.5 py-0.5 rounded-full mb-3">
                Horario Fijo Presencial ($10)
              </span>
              <h4 className="text-base font-bold text-slate-900 mb-1">Medicina General</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Horario fijo confirmado los <strong>Martes, Jueves y Sábados de 9:00 am a 2:00 pm</strong>. El resto de días y horarios se atiende bajo previa cita.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <span className="inline-block bg-slate-100 text-slate-700 text-xs font-black px-2.5 py-0.5 rounded-full mb-3">
                Previa Cita Coordinada
              </span>
              <h4 className="text-base font-bold text-slate-900 mb-1">Especialidades Médicas</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pediatría, Dermatología, Traumatología, Gastroenterología, Urología y Terapias atienden con turno reservado previamente.
              </p>
            </div>

          </div>
        </div>

        {/* Tarjetas del Equipo y Coordinación (Sin íconos de avatar) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Tarjeta 1: Odontología */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="bg-gradient-to-br from-brand-50 to-teal-50/30 p-6 text-center border-b border-slate-100">
              <h4 className="text-xl font-bold text-slate-900">Equipo Odontológico</h4>
              <p className="text-xs font-bold uppercase tracking-wider text-brand-600 mt-1">
                Odontología General & Especialistas
              </p>
            </div>
            <div className="p-6 space-y-3 text-xs sm:text-sm text-slate-600 flex-grow">
              <p>• <strong>Disponibilidad:</strong> Atención continua en horario regular.</p>
              <p>• <strong>Especialidades:</strong> Ortodoncia, Endodoncia, Estética Dental, Cirugía Maxilofacial, Prótesis y Odontopediatría.</p>
              <p>• <strong>Beneficio:</strong> Primera consulta diagnóstica Gratuita.</p>
            </div>
            <div className="p-6 pt-0">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappMain}?text=Hola,%20deseo%20agendar%20mi%20Consulta%20Odontol%C3%B3gica%20Gratuita.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center text-xs font-bold text-brand-600 hover:text-white bg-brand-50 hover:bg-brand-500 py-3 rounded-xl transition-all"
              >
                <span>Agendar Odontología</span>
              </a>
            </div>
          </div>

          {/* Tarjeta 2: Médica y Ginecológica */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/30 p-6 text-center border-b border-slate-100">
              <h4 className="text-xl font-bold text-slate-900">Área Médica y Ginecológica</h4>
              <p className="text-xs font-bold uppercase tracking-wider text-brand-dark mt-1">
                Ginecología, Obstetricia & Medicina General
              </p>
            </div>
            <div className="p-6 space-y-3 text-xs sm:text-sm text-slate-600 flex-grow">
              <p>• <strong>Ginecología y Obstetricia:</strong> Atención continua todo el tiempo.</p>
              <p>• <strong>Medicina General:</strong> Fijo Mar, Jue y Sáb (9am - 2pm), demás previa cita.</p>
              <p>• <strong>Valor Oficial:</strong> Consulta Médica General por solo $10 USD.</p>
            </div>
            <div className="p-6 pt-0">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappMain}?text=Hola,%20deseo%20agendar%20una%20consulta%20en%20Ginecolog%C3%ADa%20o%20Medicina%20General.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center text-xs font-bold text-brand-dark hover:text-white bg-blue-50 hover:bg-brand-dark py-3 rounded-xl transition-all"
              >
                <span>Agendar Área Médica</span>
              </a>
            </div>
          </div>

          {/* Tarjeta 3: Coordinación y Citas (Gissela) */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50/30 p-6 text-center border-b border-slate-100">
              <h4 className="text-xl font-bold text-slate-900">{CLINIC_INFO.coordinatorName}</h4>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-600 mt-1">
                Coordinación de Citas y Especialidades
              </p>
            </div>
            <div className="p-6 space-y-3 text-xs sm:text-sm text-slate-600 flex-grow">
              <p>• <strong>Línea de Coordinación:</strong> {CLINIC_INFO.phoneCoordination}</p>
              <p>• <strong>Función:</strong> Coordinar turnos con especialistas, ecografías y dudas sobre la atención.</p>
              <p>• <strong>Horario:</strong> De lunes a sábado en horario institucional.</p>
            </div>
            <div className="p-6 pt-0">
              <a
                href={`https://wa.me/${CLINIC_INFO.phoneCoordination.replace(/\D/g, '')}?text=Hola%20${CLINIC_INFO.coordinatorName},%20te%20escribo%20desde%20la%20web%20para%20coordinar%20una%20cita%20m%C3%A9dica.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center text-xs font-bold text-amber-800 hover:text-white bg-amber-50 hover:bg-amber-600 py-3 rounded-xl transition-all"
              >
                <span>Contactar a Coordinación</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
