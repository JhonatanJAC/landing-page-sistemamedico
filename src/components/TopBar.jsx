import React from 'react';
import { CLINIC_INFO } from '../data/medicalData';

export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-brand-dark to-[#092c4e] text-white text-xs py-2 px-4 border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center space-x-6">
          <a 
            href={`https://wa.me/${CLINIC_INFO.whatsappMain}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-brand-300 transition-colors"
          >
            <span>Citas: <strong>{CLINIC_INFO.phoneMain}</strong></span>
          </a>
          <a 
            href={`tel:${CLINIC_INFO.phoneCoordination.replace(/\s+/g, '')}`}
            className="hover:text-brand-300 transition-colors"
          >
            <span>Coordinación: <strong>{CLINIC_INFO.phoneCoordination}</strong> ({CLINIC_INFO.coordinatorName})</span>
          </a>
          <div className="text-slate-300">
            <span>Carapungo: Calle Alcalá OE6 11 y Alhambra ({CLINIC_INFO.sector})</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-slate-300">
            <span>Lun - Vie: 8am - 7pm | Sáb: 8:30am - 5pm</span>
          </div>
          <span className="bg-brand-500/20 text-teal-300 border border-brand-500/40 px-2.5 py-0.5 rounded-full font-semibold">
            Consulta Dental Gratuita
          </span>
        </div>
      </div>
    </div>
  );
}
