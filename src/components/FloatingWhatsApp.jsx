import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/medicalData';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Contacto directo por WhatsApp">
      <a
        href={`https://wa.me/${CLINIC_INFO.whatsappMain}?text=Hola%20DENTIMEDIC,%20quisiera%20consultar%20por%20una%20cita%20m%C3%A9dica%20u%20odontol%C3%B3gica.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-whatsapp hover:bg-whatsapp-dark text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
        aria-label="Abrir chat de WhatsApp para citas"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          ¡Escríbenos para tu cita médica o dental!
        </span>
      </a>
    </aside>
  );
}
