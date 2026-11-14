import React from 'react';
import { CLINIC_INFO } from '../data/medicalData';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t-4 border-brand-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Identidad */}
          <div className="space-y-4">
            <img 
              src="/assets/logo.png" 
              alt={CLINIC_INFO.name} 
              className="h-12 w-auto object-contain brightness-0 invert"
            />
            <p className="text-xs font-semibold text-brand-400 italic">
              "{CLINIC_INFO.slogan}"
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Centro médico y odontológico de referencia en Carapungo. Brindamos atención humana, especializada y con aranceles solidarios para toda la familia.
            </p>
          </div>

          {/* Col 2: Navegación Limpia */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-b border-brand-500/40 pb-2 inline-block">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#especialidades" className="hover:text-white transition-colors">Especialidades</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios Médicos</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto y Citas</a></li>
            </ul>
          </div>

          {/* Col 3: Áreas Destacadas */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-b border-brand-500/40 pb-2 inline-block">
              Áreas Destacadas
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#especialidades" className="hover:text-white transition-colors">Odontología General (Gratis)</a></li>
              <li><a href="#especialidades" className="hover:text-white transition-colors">Ginecología y Obstetricia</a></li>
              <li><a href="#especialidades" className="hover:text-white transition-colors">Medicina General ($10)</a></li>
              <li><a href="#especialidades" className="hover:text-white transition-colors">Ortodoncia y Estética Dental</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Laboratorio y Ecografías</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Sueros Vitamínicos</a></li>
            </ul>
          </div>

          {/* Col 4: Sede Carapungo */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4 border-b border-brand-500/40 pb-2 inline-block">
              Sede Carapungo
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <span className="font-semibold text-slate-300 block">Dirección:</span>
                <span>{CLINIC_INFO.address} ({CLINIC_INFO.sector}), a 2 cuadras de la Empresa Eléctrica.</span>
              </li>
              <li>
                <span className="font-semibold text-slate-300 block">Teléfonos:</span>
                <span>Citas: <strong>{CLINIC_INFO.phoneMain}</strong> | <strong>{CLINIC_INFO.phoneCoordination}</strong></span>
              </li>
              <li>
                <span className="font-semibold text-slate-300 block">Horarios:</span>
                <span>Lun - Vie: 8am - 7pm<br />Sábados: 8:30am - 5pm</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 2026 {CLINIC_INFO.name}. Todos los derechos reservados.</p>
          <p className="text-slate-400">
            Desarrollado por <span className="text-slate-300 font-semibold">Jaims Software Development</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
