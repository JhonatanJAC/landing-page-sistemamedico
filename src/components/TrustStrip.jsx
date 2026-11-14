import React from 'react';

export default function TrustStrip() {
  const items = [
    {
      title: "+15 Especialidades",
      desc: "Medicina, odontología integral y terapias"
    },
    {
      title: "Horarios Flexibles",
      desc: "Lun-Vie: 8am-7pm | Sáb: 8:30am-5pm"
    },
    {
      title: "Precios Accesibles",
      desc: "Medicina y Ginecología $10 | Tarifas transparentes"
    },
    {
      title: "Pagos Electrónicos",
      desc: "Visa, Mastercard, Diners, Amex y Discover"
    }
  ];

  return (
    <div className="bg-white border-y border-slate-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="border-l-4 border-brand-500 pl-4 py-1">
              <h4 className="text-base font-extrabold text-slate-900">{item.title}</h4>
              <p className="text-xs text-slate-500 leading-tight mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
