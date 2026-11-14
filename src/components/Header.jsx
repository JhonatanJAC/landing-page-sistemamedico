import React, { useState, useEffect } from 'react';
import { X, Phone, Clock, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/medicalData';

export default function Header({ onOpenAppointment }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INICIO', href: '#inicio' },
    { name: 'NOSOTROS', href: '#nosotros' },
    { name: 'ESPECIALIDADES', href: '#especialidades' },
    { name: 'SERVICIOS', href: '#servicios' },
    { name: 'PREGUNTAS FRECUENTES', href: '#faq' },
    { name: 'CONTACTO', href: '#contacto' },
  ];

  return (
    <>
      <header className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-sm border-b border-slate-200 py-3' : 'py-4 border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Lado Izquierdo: Logotipo DENTIMEDIC */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <img 
              src="/assets/logo.png" 
              alt={CLINIC_INFO.name} 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
            />
          </a>

          {/* Lado Derecho: Navegación */}
          <div className="flex items-center">
            
            {/* Navegación Desktop: visible solo en pantallas grandes */}
            <nav className="hidden lg:flex items-center space-x-7 text-[12px] sm:text-[13px] font-bold tracking-wider text-slate-500">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-brand-500 transition-colors uppercase py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Botón Hamburguesa: SOLO visible en teléfonos / dispositivos móviles (lg:hidden) */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-1.5 rounded-md hover:bg-slate-100 text-slate-600 transition-colors flex flex-col justify-center items-center gap-1 w-9 h-9"
              aria-label="Abrir menú de navegación"
            >
              <div className="flex flex-col gap-1 w-5">
                <span className="h-[2px] w-5 bg-slate-700 rounded-full"></span>
                <span className="h-[2px] w-5 bg-slate-700 rounded-full"></span>
                <span className="h-[2px] w-5 bg-slate-700 rounded-full"></span>
              </div>
            </button>

          </div>

        </div>
      </header>

      {/* Menú Móvil Lateral (Solo se activa al abrir desde el teléfono) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Fondo oscuro traslúcido */}
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Menú que desliza desde la derecha en móviles (más compacto y estilizado) */}
          <div className="fixed top-0 right-0 h-full w-72 max-w-[78vw] bg-white shadow-2xl p-5 flex flex-col justify-between z-50 overflow-y-auto">
            
            <div>
              {/* Cabecera del menú móvil */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <img 
                  src="/assets/logo.png" 
                  alt={CLINIC_INFO.name} 
                  className="h-8 w-auto object-contain"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Lista de enlaces móviles */}
              <nav className="flex flex-col space-y-1.5 pt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xs font-bold text-slate-700 hover:text-brand-500 hover:bg-slate-50 px-3 py-2 rounded-lg transition-all uppercase tracking-wider"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Pie del menú móvil con contacto y botón de citas */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenAppointment();
                }}
                className="w-full text-center bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-md transition-all"
              >
                Agendar Cita
              </button>

              <div className="text-[11px] text-slate-500 space-y-1.5 pt-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3 text-brand-500 shrink-0" />
                  <span>Citas: <strong>{CLINIC_INFO.phoneMain}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3 text-brand-500 shrink-0" />
                  <span>Lun - Vie: 8am - 7pm | Sáb: 8:30am - 5pm</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3 h-3 text-brand-500 shrink-0 mt-0.5" />
                  <span className="leading-tight">Carapungo, Calle Alcalá OE6 11 y Alhambra</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
