export const CLINIC_INFO = {
  name: "Centro Médico y Odontológico DENTIMEDIC",
  shortName: "DENTIMEDIC",
  slogan: "Tu salud es nuestra prioridad",
  phoneMain: "0990347911",
  whatsappMain: "593990347911",
  phoneCoordination: "+593 99 600 2626",
  coordinatorName: "Gissela",
  address: "Quito, Carapungo. Calle Alcalá OE6 11 y Alhambra.",
  sector: "Sector La Morenita",
  reference: "A dos cuadras de la agencia de la empresa eléctrica.",
  schedule: {
    weekdays: "Lunes a Viernes: 8:00 am a 7:00 pm",
    saturdays: "Sábados: 8:30 am a 5:00 pm",
    generalMedicineFixed: "Martes, Jueves y Sábados de 9:00 am a 2:00 pm (demás días y horarios previa cita)",
    continuousCare: "Odontología General y Ginecología/Obstetricia todo el tiempo"
  },
  promotions: {
    dentalConsultation: "GRATUITA",
    medicalConsultationPrice: "$10 USD"
  }
};

export const SPECIALTIES = [
  {
    id: "dermatologia",
    title: "Dermatología",
    category: "medicina",
    categoryLabel: "Especialidad Médica",
    badge: "Previa Cita",
    badgeType: "appointment",
    desc: "Acné, manchas, alergias cutáneas, hongos y lunares.",
    schedule: "Coordinación previa de horario",
    icon: "ShieldAlert"
  },
  {
    id: "gastroenterologia",
    title: "Gastroenterología",
    category: "medicina",
    categoryLabel: "Especialidad Médica",
    badge: "Previa Cita",
    badgeType: "appointment",
    desc: "Gastritis, Helicobacter pylori, reflujo y colon irritable.",
    schedule: "Coordinación previa de horario",
    icon: "Apple"
  },
  {
    id: "ginecologia",
    title: "Ginecología y Obstetricia",
    category: "medicina",
    categoryLabel: "Especialidad Médica",
    badge: "Atención Continua",
    badgeType: "continuous",
    desc: "Control prenatal, chequeo preventivo femenino y Papanicolaou.",
    schedule: "Atención continua todo el tiempo",
    icon: "Heart"
  },
  {
    id: "medicina-interna",
    title: "Medicina Interna",
    category: "medicina",
    categoryLabel: "Especialidad Médica",
    badge: "Previa Cita",
    badgeType: "appointment",
    desc: "Hipertensión, diabetes y manejo integral del paciente adulto.",
    schedule: "Coordinación previa de horario",
    icon: "ClipboardCheck"
  },
  {
    id: "otorrino",
    title: "Otorrinolaringología",
    category: "medicina",
    categoryLabel: "Especialidad Médica",
    badge: "Previa Cita",
    badgeType: "appointment",
    desc: "Oído, nariz, garganta, sinusitis y lavados óticos.",
    schedule: "Coordinación previa de horario",
    icon: "Ear"
  },
  {
    id: "traumatologia",
    title: "Traumatología y Ortopedia",
    category: "medicina",
    categoryLabel: "Especialidad Médica",
    badge: "Previa Cita",
    badgeType: "appointment",
    desc: "Fracturas, esguinces, dolores articulares y lumbalgia.",
    schedule: "Coordinación previa de horario",
    icon: "Bone"
  },
  {
    id: "nutricion",
    title: "Nutrición",
    category: "medicina",
    categoryLabel: "Especialidad Médica",
    badge: "Previa Cita",
    badgeType: "appointment",
    desc: "Planes nutricionales clínicos y control de peso.",
    schedule: "Coordinación previa de horario",
    icon: "Salad"
  },
  {
    id: "psicologia-clinica",
    title: "Psicología Clínica",
    category: "medicina",
    categoryLabel: "Salud Mental",
    badge: "Previa Cita",
    badgeType: "appointment",
    desc: "Psicoterapia para ansiedad, depresión, estrés y duelo.",
    schedule: "Coordinación previa de horario",
    icon: "Brain"
  },
  {
    id: "psicologia-infantil",
    title: "Psicología Infantil",
    category: "medicina",
    categoryLabel: "Salud Mental",
    badge: "Previa Cita",
    badgeType: "appointment",
    desc: "Apoyo en conducta, atención y desarrollo emocional infantil.",
    schedule: "Coordinación previa de horario",
    icon: "HeartHandshake"
  },
  {
    id: "pediatria",
    title: "Pediatría",
    category: "medicina",
    categoryLabel: "Especialidad Médica",
    badge: "Previa Cita",
    badgeType: "appointment",
    desc: "Control de crecimiento, vacunas y salud infantil.",
    schedule: "Coordinación previa de horario",
    icon: "Baby"
  },
  {
    id: "urologia",
    title: "Urología",
    category: "medicina",
    categoryLabel: "Especialidad Médica",
    badge: "Previa Cita",
    badgeType: "appointment",
    desc: "Vías urinarias masculinas y femeninas, próstata y riñones.",
    schedule: "Coordinación previa de horario",
    icon: "Cross"
  },
  {
    id: "neurologia",
    title: "Neurología",
    category: "medicina",
    categoryLabel: "Especialidad Médica",
    badge: "Previa Cita",
    badgeType: "appointment",
    desc: "Migrañas, dolores de cabeza, sistema nervioso y control neurológico.",
    schedule: "Coordinación previa de horario",
    icon: "Brain"
  },
  {
    id: "terapia-fisica",
    title: "Terapia Física",
    category: "terapias",
    categoryLabel: "Rehabilitación",
    badge: "Previa Cita",
    badgeType: "appointment",
    desc: "Rehabilitación muscular, contracturas y movilidad física.",
    schedule: "Coordinación previa de horario",
    icon: "Activity"
  },
  {
    id: "podologia",
    title: "Podología",
    category: "terapias",
    categoryLabel: "Cuidado Podológico",
    badge: "Previa Cita",
    badgeType: "appointment",
    desc: "Uña encarnada, callosidades y cuidado preventivo del pie.",
    schedule: "Coordinación previa de horario",
    icon: "Footprints"
  }
];

export const DIAGNOSTIC_SERVICES = [
  {
    title: "Laboratorio Clínico",
    desc: "Análisis clínicos automatizados con rapidez y máxima precisión para apoyar decisiones médicas acertadas.",
    bullets: ["Biometría hemática completa", "Glucosa, perfil lipídico y renal", "Pruebas hormonales y chequeos de rutina"],
    icon: "TestTubes"
  },
  {
    title: "Ecografías",
    desc: "Equipos de ultrasonido para valoración diagnóstica nítida y confiable sin radiación.",
    bullets: ["Ecografía obstétrica y monitoreo fetal", "Ecografía pélvica, transvaginal y abdominal", "Ecografía tiroidea y renal"],
    icon: "Activity"
  },
  {
    title: "Radiografías",
    desc: "Estudios radiográficos digitales con mínima emisión para diagnóstico dental y óseo instantáneo.",
    bullets: ["Radiografías dentales periapicales", "Evaluación ósea y articular", "Entrega y lectura inmediata"],
    icon: "ScanLine"
  }
];

export const PROCEDURE_SERVICES = [
  {
    title: "Toma de Signos Vitales",
    desc: "Monitoreo preventivo y control de presión arterial, saturometría, frecuencia cardíaca y glucometría capilar.",
    bullets: ["Presión arterial digital", "Saturación de oxígeno O2", "Glucemia al instante"],
    icon: "HeartPulse"
  },
  {
    title: "Inyecciones",
    desc: "Aplicación segura de medicamentos recetados bajo estrictos protocolos de bioseguridad y asepsia.",
    bullets: ["Vía intramuscular y subcutánea", "Vía intravenosa supervisada", "Material descartable esterilizado"],
    icon: "Syringe"
  },
  {
    title: "Nebulizaciones",
    desc: "Terapia respiratoria rápida y efectiva para aliviar cuadros de broncoespasmo, asma y congestión severa.",
    bullets: ["Nebulización pediátrica y adulta", "Broncodilatadores recetados", "Alivio respiratorio inmediato"],
    icon: "Wind"
  },
  {
    title: "Sueros Vitamínicos",
    desc: "Infusiones intravenosas revitalizantes formuladas para potenciar el sistema inmune y la energía vital.",
    bullets: ["Megadosis de Vitamina C", "Complejo B y oligoelementos", "Aplicación cómoda y asistida"],
    icon: "Sparkles"
  }
];

export const FACILITIES = [
  {
    title: "Póster Institucional Oficial",
    desc: "Documento oficial verificado con todas las especialidades, servicios y tarifas destacadas.",
    img: "/assets/poster_preview.png"
  },
  {
    title: "Consultorio Odontológico",
    desc: "Sillón ergonómico e instrumental esterilizado para profilaxis, ortodoncia, endodoncia y estética.",
    img: "/assets/facilities/dental_clinic.jpg"
  },
  {
    title: "Consultorio Médico y Ginecología",
    desc: "Ambiente privado y equipado para chequeos preventivos, medicina general y control prenatal.",
    img: "/assets/facilities/medical_consultation.jpg"
  },
  {
    title: "Laboratorio Clínico",
    desc: "Área de toma de muestras y procesamiento de exámenes clínicos con altos estándares.",
    img: "/assets/facilities/laboratory.jpg"
  },
  {
    title: "Recepción y Sala de Espera",
    desc: "Espacio amplio, limpio y cómodo para recibirte con atención cercana desde tu llegada.",
    img: "/assets/facilities/reception.jpg"
  },
  {
    title: "Área de Procedimientos y Sueroterapia",
    desc: "Zona acondicionada para aplicación tranquila de sueros vitamínicos, nebulizaciones e inyecciones.",
    img: "/assets/facilities/nursing_care.jpg"
  }
];

export const FAQS = [
  {
    q: "¿Cómo puedo agendar una cita médica u odontológica en DENTIMEDIC?",
    a: "Puedes agendar de forma inmediata por WhatsApp escribiendo al 0990347911 o llamando a nuestra coordinadora Gissela al +593 99 600 2626. También puedes llenar el formulario interactivo en esta página."
  },
  {
    q: "¿La consulta odontológica es realmente gratuita?",
    a: "¡Sí, totalmente gratuita! En DENTIMEDIC tu primera valoración y diagnóstico dental no tiene ningún costo. El especialista revisa tu estado bucal y te explica con claridad el tratamiento recomendado sin compromiso."
  },
  {
    q: "¿Cuáles son los horarios de atención y la disponibilidad por especialidad?",
    a: "Atendemos de lunes a viernes de 8:00 am a 7:00 pm y sábados de 8:30 am a 5:00 pm. Odontología General y Ginecología atienden de manera continua. Medicina General tiene horario fijo los Martes, Jueves y Sábados de 9:00 am a 2:00 pm (y previa cita el resto de días). Las demás especialidades se atienden bajo previa cita coordinada."
  },
  {
    q: "¿Cuál es el valor de la Consulta Médica General?",
    a: "La Consulta Médica General tiene una tarifa institucional oficial de solo $10 USD, permitiendo que las familias de Carapungo accedan a diagnóstico y tratamiento de calidad a un costo accesible."
  },
  {
    q: "¿Qué medios de pago aceptan?",
    a: "Aceptamos efectivo, transferencias bancarias y todas las tarjetas de crédito y débito: VISA, MasterCard, Diners Club International, American Express y Discover, con la plataforma segura Paymentez."
  },
  {
    q: "¿Dónde están ubicados y cuál es la referencia de llegada?",
    a: "Estamos ubicados en Quito, Carapungo, en la Calle Alcalá OE6 11 y Alhambra, Sector La Morenita. Como referencia principal, nos encontramos a exactamente dos cuadras de la agencia de la Empresa Eléctrica."
  }
];
