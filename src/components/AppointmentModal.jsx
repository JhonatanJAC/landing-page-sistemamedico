import React, { useState } from 'react';
import { X } from 'lucide-react';
import { CLINIC_INFO } from '../data/medicalData';
import SpecialtySelect from './SpecialtySelect';

export default function AppointmentModal({ isOpen, onClose, defaultSpecialty }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [specialty, setSpecialty] = useState(defaultSpecialty || 'Odontología General (Consulta Gratuita)');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !specialty) {
      alert('Por favor completa tu nombre, teléfono y especialidad.');
      return;
    }

    let message = `*SOLICITUD DE CITA RÁPIDA - DENTIMEDIC*\n\n`;
    message += `👤 *Paciente:* ${name}\n`;
    message += `📱 *Teléfono:* ${phone}\n`;
    message += `🩺 *Especialidad:* ${specialty}\n`;
    if (date) message += `📅 *Fecha:* ${date}\n`;
    if (time) message += `⏰ *Horario:* ${time}\n`;
    if (notes) message += `📝 *Motivo:* ${notes}\n\n`;
    message += `Agradezco su atención.`;

    const url = `https://wa.me/${CLINIC_INFO.whatsappMain}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full border border-brand-200">
            DENTIMEDIC Carapungo
          </span>
          <h3 className="text-2xl font-extrabold text-slate-900 mt-2">Agendar Cita Directa</h3>
          <p className="text-xs text-slate-500 mt-0.5">Se enviará a nuestro WhatsApp oficial (0990347911)</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Nombre Completo *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej: David Salazar"
              required
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Teléfono o WhatsApp *</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Ej: 0990347911"
              required
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Especialidad Requerida *</label>
            <SpecialtySelect
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Fecha</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Horario</label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 bg-white"
              >
                <option value="">Cualquier hora</option>
                <option value="Mañana (8am - 12pm)">Mañana</option>
                <option value="Tarde (12pm - 7pm)">Tarde</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Nota adicional</label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Opcional: motivo o síntoma"
              className="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center bg-whatsapp hover:bg-whatsapp-dark text-white font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-whatsapp/30 transition-all hover:-translate-y-0.5"
          >
            <span>Enviar por WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
}
