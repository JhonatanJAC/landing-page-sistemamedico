import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/medicalData';
import SpecialtySelect from './SpecialtySelect';

export default function Contact({ prefilledSpecialty }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    specialty: prefilledSpecialty || '',
    date: '',
    time: '',
    notes: ''
  });

  // Update when prefilledSpecialty changes
  React.useEffect(() => {
    if (prefilledSpecialty) {
      setFormData(prev => ({ ...prev, specialty: prefilledSpecialty }));
    }
  }, [prefilledSpecialty]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.specialty) {
      alert('Por favor completa tu nombre, teléfono y la especialidad deseada.');
      return;
    }

    let message = `*SOLICITUD DE CITA - DENTIMEDIC*\n\n`;
    message += `Hola, deseo agendar una cita médica/odontológica con los siguientes datos:\n\n`;
    message += `👤 *Paciente:* ${formData.name}\n`;
    message += `📱 *Teléfono:* ${formData.phone}\n`;
    message += `🩺 *Especialidad:* ${formData.specialty}\n`;
    if (formData.date) message += `📅 *Fecha sugerida:* ${formData.date}\n`;
    if (formData.time) message += `⏰ *Horario sugerido:* ${formData.time}\n`;
    if (formData.notes) message += `📝 *Observaciones:* ${formData.notes}\n\n`;
    message += `Agradezco su confirmación y detalles de atención.`;

    const url = `https://wa.me/${CLINIC_INFO.whatsappMain}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
            Contacto y Citas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Estamos Listos Para Atenderte
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Comunícate por WhatsApp, llámanos o completa el formulario para coordinar tu cita en Carapungo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Columna Izquierda: Información de Contacto (Sin íconos decorativos) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Dirección */}
            <div className="bg-white p-6 rounded-2xl border-l-4 border-l-brand-500 border border-slate-200 shadow-sm">
              <h4 className="text-sm font-extrabold text-slate-900 mb-1">Dirección y Referencia</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {CLINIC_INFO.address}
              </p>
              <p className="text-xs font-bold text-brand-600 mt-1">
                {CLINIC_INFO.sector} — {CLINIC_INFO.reference}
              </p>
            </div>

            {/* Teléfonos */}
            <div className="bg-white p-6 rounded-2xl border-l-4 border-l-brand-dark border border-slate-200 shadow-sm">
              <h4 className="text-sm font-extrabold text-slate-900 mb-1">Teléfono y Citas</h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Línea de Citas WhatsApp:{' '}
                <a href={`https://wa.me/${CLINIC_INFO.whatsappMain}`} target="_blank" rel="noopener noreferrer" className="font-bold text-brand-600 hover:underline">
                  {CLINIC_INFO.phoneMain}
                </a>
              </p>
            </div>

            {/* Métodos de Pago Aceptados */}
            <div className="bg-white p-6 rounded-2xl border-l-4 border-l-emerald-500 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-extrabold text-slate-900">
                  Métodos de Pago Aceptados
                </h4>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  100% Seguro
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                Aceptamos <strong>todas las tarjetas</strong> de crédito y débito (corriente y diferido):
              </p>

              {/* Grid de Tarjetas Oficiales */}
              <div className="grid grid-cols-5 gap-2 mb-3.5">
                {/* Visa */}
                <div className="h-10 bg-slate-50 hover:bg-white rounded-xl border border-slate-200 flex items-center justify-center p-1.5 transition-all shadow-xs hover:shadow-sm" title="Visa">
                  <svg viewBox="0 0 40 14" className="h-3 sm:h-3.5 w-auto" fill="none">
                    <path d="M14.2 0.4L9.3 11.6H6.3L3.8 2.6C3.7 1.9 3.5 1.6 3 1.3C2.1 0.7 0.8 0.3 0 0.1L0.1 0.4H5.3C6 0.4 6.7 0.9 6.8 1.8L8.1 8.3L11.2 0.4H14.2ZM26.6 7.9C26.6 4.9 22.5 4.7 22.6 3.4C22.6 3 23 2.5 23.9 2.4C24.3 2.3 25.5 2.3 26.8 2.9L27.3 0.5C26.6 0.2 25.7 0 24.6 0C21.6 0 19.5 1.7 19.5 4.1C19.5 5.9 21 6.9 22.1 7.5C23.3 8.1 23.7 8.5 23.7 9.1C23.7 9.9 22.7 10.3 21.9 10.3C20.3 10.3 19.4 9.9 18.7 9.5L18.2 12C18.9 12.3 20.3 12.6 21.6 12.6C24.8 12.6 26.7 10.9 26.6 7.9ZM34.7 11.6H37.3L35 0.4H32.6C32 0.4 31.5 0.7 31.3 1.3L26.7 11.6H29.9L30.5 9.8H34.3L34.7 11.6ZM31.4 7.4L33 2.8L33.9 7.4H31.4ZM18.8 0.4L16.4 11.6H13.5L15.9 0.4H18.8Z" fill="#1434CB"/>
                  </svg>
                </div>

                {/* Mastercard */}
                <div className="h-10 bg-slate-50 hover:bg-white rounded-xl border border-slate-200 flex items-center justify-center p-1.5 transition-all shadow-xs hover:shadow-sm" title="Mastercard">
                  <svg viewBox="0 0 34 22" className="h-4.5 w-auto" fill="none">
                    <circle cx="11" cy="11" r="10" fill="#EB001B"/>
                    <circle cx="23" cy="11" r="10" fill="#F79E1B"/>
                    <path d="M17 3.6a9.96 9.96 0 00-3.9 7.4 9.96 9.96 0 003.9 7.4 9.96 9.96 0 003.9-7.4A9.96 9.96 0 0017 3.6z" fill="#FF5F00"/>
                  </svg>
                </div>

                {/* Diners Club */}
                <div className="h-10 bg-slate-50 hover:bg-white rounded-xl border border-slate-200 flex items-center justify-center p-1.5 transition-all shadow-xs hover:shadow-sm" title="Diners Club">
                  <svg viewBox="0 0 34 22" className="h-4 sm:h-4.5 w-auto" fill="none">
                    <circle cx="17" cy="11" r="10" fill="#0079BE"/>
                    <path d="M15.5 6.5h-1c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5h1V6.5z" fill="#FFFFFF"/>
                    <path d="M18.5 6.5h1c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5h-1V6.5z" fill="#FFFFFF"/>
                    <path d="M16 6.5h2v9h-2z" fill="#0079BE"/>
                  </svg>
                </div>

                {/* American Express */}
                <div className="h-10 bg-[#006FCF] hover:bg-[#005fb3] rounded-xl flex items-center justify-center p-1.5 transition-all shadow-xs hover:shadow-sm" title="American Express">
                  <span className="text-[10px] sm:text-[11px] font-black text-white tracking-wider">AMEX</span>
                </div>

                {/* Discover */}
                <div className="h-10 bg-slate-50 hover:bg-white rounded-xl border border-slate-200 flex items-center justify-center p-1 transition-all shadow-xs hover:shadow-sm" title="Discover">
                  <div className="flex items-center text-[9px] font-extrabold text-slate-800 tracking-tight">
                    <span>DISC</span>
                    <span className="w-2 h-2 rounded-full bg-[#FF6000] mx-0.5 inline-block"></span>
                    <span>VER</span>
                  </div>
                </div>
              </div>

              {/* Seguridad Paymentez y Modalidades */}
              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                  <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd"/>
                  </svg>
                  <span>Con la seguridad de <strong className="text-teal-700 font-bold">paymentez</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">
                    Efectivo
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">
                    Transferencia
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Formulario Interactivo */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Agendar Cita Médica u Odontológica
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Completa tus datos y la solicitud se enviará de inmediato al WhatsApp de atención al paciente.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Nombre Completo *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej: Carmen Morales"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Teléfono / WhatsApp *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ej: 0991234567"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Especialidad o Servicio Requerido *
                </label>
                <SpecialtySelect 
                  value={formData.specialty}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Fecha Sugerida</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Horario Preferido</label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 bg-white"
                  >
                    <option value="">Cualquier horario disponible</option>
                    <option value="Mañana (8:00am - 12:00pm)">Mañana (8:00am - 12:00pm)</option>
                    <option value="Mediodía (12:00pm - 3:00pm)">Mediodía (12:00pm - 3:00pm)</option>
                    <option value="Tarde (3:00pm - 7:00pm)">Tarde (3:00pm - 7:00pm)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Observaciones o motivo (Opcional)</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="2"
                  placeholder="Ej: Dolor dental agudo, control mensual de embarazo, etc."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center bg-whatsapp hover:bg-whatsapp-dark text-white font-bold text-base py-3.5 rounded-2xl shadow-lg shadow-whatsapp/25 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Enviar Solicitud a WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
