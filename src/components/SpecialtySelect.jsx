import React, { useState, useRef, useEffect } from 'react';

export const SPECIALTY_GROUPS = [
  {
    category: 'odontologia',
    label: 'Odontología',
    icon: '🦷',
    items: [
      { value: 'Odontología General (Consulta Gratuita)', label: 'Odontología General', badge: 'Consulta Gratuita', badgeType: 'free', hint: 'Chequeo bucal sin costo y limpieza' },
      { value: 'Ortodoncia (Brackets)', label: 'Ortodoncia', badge: 'Previa Cita', hint: 'Brackets metálicos, estéticos y alineación' },
      { value: 'Endodoncia', label: 'Endodoncia', badge: 'Previa Cita', hint: 'Tratamiento de conductos y dolor dental' },
      { value: 'Estética Dental', label: 'Estética Dental', badge: 'Previa Cita', hint: 'Diseño de sonrisa y blanqueamiento' },
      { value: 'Cirugía Oral y Maxilofacial', label: 'Cirugía Oral', badge: 'Previa Cita', hint: 'Extracción de muelas del juicio y cirugías' },
      { value: 'Rehabilitación Oral (Prótesis)', label: 'Rehabilitación Oral', badge: 'Previa Cita', hint: 'Prótesis fijas, removibles y coronas' },
      { value: 'Periodoncia', label: 'Periodoncia', badge: 'Previa Cita', hint: 'Tratamiento de encías y sarro profundo' },
      { value: 'Odontopediatría', label: 'Odontopediatría', badge: 'Previa Cita', hint: 'Atención dental infantil y adaptada' },
      { value: 'Patología Oral', label: 'Patología Oral', badge: 'Previa Cita', hint: 'Lesiones bucales, aftas y encías' },
    ]
  },
  {
    category: 'medicina',
    label: 'Medicina',
    icon: '🩺',
    items: [
      { value: 'Consulta Médica General ($10 USD)', label: 'Medicina General', badge: 'Solo $10 USD', badgeType: 'price', hint: 'Atención primaria y recetas (Mar, Jue, Sáb)' },
      { value: 'Ginecología y Obstetricia', label: 'Ginecología y Obstetricia', badge: 'Atención Continua', badgeType: 'continuous', hint: 'Control prenatal, Papanicolaou y chequeo' },
      { value: 'Pediatría', label: 'Pediatría', badge: 'Previa Cita', hint: 'Control de crecimiento, vacunas y salud infantil' },
      { value: 'Dermatología', label: 'Dermatología', badge: 'Previa Cita', hint: 'Acné, manchas, alergias y hongos' },
      { value: 'Gastroenterología', label: 'Gastroenterología', badge: 'Previa Cita', hint: 'Gastritis, reflujo, Helicobacter y colon' },
      { value: 'Medicina Interna', label: 'Medicina Interna', badge: 'Previa Cita', hint: 'Hipertensión, diabetes y salud del adulto' },
      { value: 'Otorrinolaringología', label: 'Otorrinolaringología', badge: 'Previa Cita', hint: 'Oído, nariz, garganta y lavados' },
      { value: 'Traumatología y Ortopedia', label: 'Traumatología', badge: 'Previa Cita', hint: 'Fracturas, dolor articular y columna' },
      { value: 'Urología', label: 'Urología', badge: 'Previa Cita', hint: 'Vías urinarias masculinas y femeninas' },
      { value: 'Neurología', label: 'Neurología', badge: 'Previa Cita', hint: 'Migrañas, sistema nervioso y cefaleas' },
      { value: 'Nutrición Clínica', label: 'Nutrición', badge: 'Previa Cita', hint: 'Planes nutricionales y control de peso' },
      { value: 'Psicología Clínica', label: 'Psicología Clínica', badge: 'Previa Cita', hint: 'Terapia adultos: ansiedad y estrés' },
      { value: 'Psicología Infantil', label: 'Psicología Infantil', badge: 'Previa Cita', hint: 'Conducta, atención y emociones en niños' },
    ]
  },
  {
    category: 'servicios',
    label: 'Laboratorio y Terapias',
    icon: '🔬',
    items: [
      { value: 'Laboratorio Clínico', label: 'Laboratorio Clínico', badge: 'Exámenes', hint: 'Sangre, orina, perfiles y chequeos' },
      { value: 'Ecografías', label: 'Ecografías', badge: 'Diagnóstico', hint: 'Ultrasonidos diagnósticos nítidos' },
      { value: 'Sueros Vitamínicos (Megadosis C)', label: 'Sueros Vitamínicos', badge: 'Megadosis', hint: 'Vitamina C e inmunidad' },
      { value: 'Terapia Física', label: 'Terapia Física', badge: 'Rehabilitación', hint: 'Rehabilitación física y masajes' },
      { value: 'Terapia del Lenguaje', label: 'Terapia del Lenguaje', badge: 'Rehabilitación', hint: 'Pronunciación y estimulación del habla' },
      { value: 'Podología', label: 'Podología', badge: 'Cuidado del pie', hint: 'Uña encarnada y pie diabético' },
      { value: 'Nebulizaciones / Inyecciones', label: 'Procedimientos Menores', badge: 'Enfermería', hint: 'Inyectables y nebulizaciones' },
    ]
  }
];

export default function SpecialtySelect({ value, onChange, required = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const containerRef = useRef(null);
  const searchInputRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  // Find current selected item
  let selectedItem = null;
  for (const group of SPECIALTY_GROUPS) {
    const found = group.items.find(i => i.value === value || i.label === value);
    if (found) {
      selectedItem = { ...found, categoryIcon: group.icon, categoryName: group.label };
      break;
    }
  }

  // Filter groups and items
  const filteredGroups = SPECIALTY_GROUPS
    .filter(group => activeTab === 'all' || group.category === activeTab)
    .map(group => {
      const items = group.items.filter(item => {
        if (!searchTerm.trim()) return true;
        const q = searchTerm.toLowerCase();
        return (
          item.label.toLowerCase().includes(q) ||
          item.value.toLowerCase().includes(q) ||
          (item.hint && item.hint.toLowerCase().includes(q))
        );
      });
      return { ...group, items };
    })
    .filter(group => group.items.length > 0);

  const handleSelect = (itemValue) => {
    onChange({ target: { name: 'specialty', value: itemValue } });
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="relative" ref={containerRef}>
      {/* Botón Principal Disparador */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 rounded-xl border text-left flex items-center justify-between transition-all bg-white shadow-2xs ${
          isOpen
            ? 'border-brand-500 ring-2 ring-brand-500/20'
            : 'border-slate-200 hover:border-slate-300'
        }`}
      >
        <div className="flex items-center gap-2.5 min-w-0 pr-2">
          {selectedItem ? (
            <>
              <span className="text-base shrink-0">{selectedItem.categoryIcon}</span>
              <div className="truncate">
                <span className="text-xs sm:text-sm font-bold text-slate-900 block truncate">
                  {selectedItem.label}
                </span>
                <span className="text-[11px] text-slate-500 block truncate">
                  {selectedItem.hint || selectedItem.categoryName}
                </span>
              </div>
            </>
          ) : value ? (
            <span className="text-xs sm:text-sm font-bold text-slate-800 truncate">
              {value}
            </span>
          ) : (
            <span className="text-xs sm:text-sm text-slate-400">
              Selecciona una especialidad médica u odontológica...
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {selectedItem?.badge && (
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border hidden sm:inline-block ${
              selectedItem.badgeType === 'free' 
                ? 'bg-amber-100 text-amber-900 border-amber-300' 
                : selectedItem.badgeType === 'continuous'
                ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                : selectedItem.badgeType === 'price'
                ? 'bg-cyan-100 text-cyan-900 border-cyan-300'
                : 'bg-slate-100 text-slate-700 border-slate-200'
            }`}>
              {selectedItem.badge}
            </span>
          )}
          <svg
            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-600' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Input oculto para validación de formulario nativo */}
      <input
        type="text"
        name="specialty"
        value={value}
        required={required}
        onChange={() => {}}
        className="sr-only"
        tabIndex={-1}
      />

      {/* Menú Desplegable Moderno y Estilizado */}
      {isOpen && (
        <div className="absolute z-50 left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in duration-150">
          
          {/* Cabecera con Buscador y Filtros */}
          <div className="p-3 bg-slate-50 border-b border-slate-200/80 space-y-2.5">
            {/* Buscador */}
            <div className="relative">
              <svg 
                className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Escribe para filtrar (ej: brackets, ginecología, ecografía...)"
                className="w-full pl-9 pr-8 py-2 text-xs bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold p-1"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Pestañas de Categoría */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`text-[11px] font-bold px-3 py-1 rounded-lg transition-all shrink-0 ${
                  activeTab === 'all'
                    ? 'bg-brand-dark text-white shadow-2xs'
                    : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
                }`}
              >
                Todas
              </button>
              {SPECIALTY_GROUPS.map((grp) => (
                <button
                  key={grp.category}
                  type="button"
                  onClick={() => setActiveTab(grp.category)}
                  className={`text-[11px] font-bold px-3 py-1 rounded-lg transition-all flex items-center gap-1 shrink-0 ${
                    activeTab === grp.category
                      ? 'bg-brand-dark text-white shadow-2xs'
                      : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
                  }`}
                >
                  <span>{grp.icon}</span>
                  <span>{grp.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Lista de Opciones */}
          <div className="max-h-72 overflow-y-auto p-2 divide-y divide-slate-100">
            {filteredGroups.length === 0 ? (
              <div className="text-center py-8 px-4 text-xs text-slate-500">
                No encontramos especialidades con "<strong>{searchTerm}</strong>".
              </div>
            ) : (
              filteredGroups.map((group) => (
                <div key={group.category} className="py-2 first:pt-0 last:pb-0">
                  <div className="px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <span>{group.icon}</span>
                    <span>{group.label}</span>
                  </div>

                  <div className="mt-1 space-y-0.5">
                    {group.items.map((item) => {
                      const isSelected = value === item.value || value === item.label;
                      return (
                        <button
                          key={item.value}
                          type="button"
                          onClick={() => handleSelect(item.value)}
                          className={`w-full px-3 py-2 rounded-xl text-left flex items-center justify-between gap-2 transition-all ${
                            isSelected
                              ? 'bg-brand-50 border border-brand-200 text-brand-900 font-bold'
                              : 'hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <div className="min-w-0">
                            <span className="text-xs font-bold block truncate">
                              {item.label}
                            </span>
                            {item.hint && (
                              <span className="text-[11px] text-slate-500 block truncate">
                                {item.hint}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            {item.badge && (
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                                item.badgeType === 'free'
                                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                                  : item.badgeType === 'continuous'
                                  ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                                  : item.badgeType === 'price'
                                  ? 'bg-cyan-100 text-cyan-900 border-cyan-300'
                                  : 'bg-slate-100 text-slate-600 border-slate-200'
                              }`}>
                                {item.badge}
                              </span>
                            )}
                            {isSelected && (
                              <svg className="w-4 h-4 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                              </svg>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pie informativo */}
          <div className="p-2.5 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
            <span>¿No encuentras lo que buscas?</span>
            <span className="text-brand-600 font-semibold">Te orientamos por WhatsApp</span>
          </div>

        </div>
      )}
    </div>
  );
}