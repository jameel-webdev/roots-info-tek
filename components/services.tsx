import { Network, Server, ShieldCheck, Building2, Wind, Box, Wrench } from 'lucide-react';

const services = [
  {
    icon: Network,
    title: "Network Infrastructure",
    description: "Supply and installation of network products including Structured Cabling and Fiber Cabling."
  },
  {
    icon: Server,
    title: "Computers & Servers",
    description: "Complete supply and installation setup for enterprise-grade computers and server systems."
  },
  {
    icon: ShieldCheck,
    title: "Security & Safety",
    description: "Fire Alarm Systems, PA systems, Access Control, CCTV, and other security infrastructure."
  },
  {
    icon: Building2,
    title: "Building Management",
    description: "Integrated Building Management Solutions for modern facility control."
  },
  {
    icon: Wind,
    title: "VAV Systems",
    description: "Supply and installation of Variable Air Volume (VAV) Systems for HVAC efficiency."
  },
  {
    icon: Box,
    title: "Cargo Containers",
    description: "Supply and installation of Cargo Containers for various industrial needs."
  },
  {
    icon: Wrench,
    title: "AMC & Support",
    description: "Annual Maintenance Contracts and preventive maintenance for IT and security infrastructure."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-brand-600 tracking-wide uppercase mb-3">Our Expertise</h2>
          <h3 className="text-3xl font-bold text-slate-900">Comprehensive IT & Infrastructure Services</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-slate-700" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
