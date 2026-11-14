import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import Specialties from './components/Specialties';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import AppointmentModal from './components/AppointmentModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const handleOpenAppointment = (specialty = '') => {
    setSelectedSpecialty(specialty);
    setModalOpen(true);
  };

  const handleSelectSpecialtyFromCard = (specialtyTitle) => {
    setSelectedSpecialty(specialtyTitle);
    // Desplazamiento suave al formulario de contacto
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-brand-500 selection:text-white">
      {/* Header Minimalista con Menú Lateral Elegante */}
      <Header onOpenAppointment={() => handleOpenAppointment()} />

      {/* Hero Section */}
      <Hero onOpenAppointment={() => handleOpenAppointment()} />

      {/* Trust Stats Bar */}
      <TrustStrip />

      {/* Nosotros Section */}
      <About />

      {/* Especialidades Médicas & Odontológicas */}
      <Specialties onSelectSpecialty={handleSelectSpecialtyFromCard} />

      {/* Servicios Médicos y Procedimientos */}
      <Services onOpenAppointment={() => handleOpenAppointment()} />

      {/* Preguntas Frecuentes */}
      <FAQ />

      {/* Contacto, Formulario y Ubicación */}
      <Contact prefilledSpecialty={selectedSpecialty} />

      {/* Footer */}
      <Footer />

      {/* Botones Flotantes */}
      <FloatingWhatsApp />
      <ScrollToTop />

      {/* Modal de Agendamiento Rápido */}
      <AppointmentModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        defaultSpecialty={selectedSpecialty}
      />
    </div>
  );
}
