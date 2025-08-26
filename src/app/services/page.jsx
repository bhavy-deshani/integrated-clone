import { ShieldCheck, Building, Users, Briefcase, Wrench, Sparkles } from 'lucide-react';

export default function ServicesPage() {
  const serviceList = [
    { icon: <ShieldCheck size={40} className="text-secondary" />, title: 'Manned Guarding', description: 'Professional security personnel for corporate, industrial, and residential properties.' },
    { icon: <Building size={40} className="text-secondary" />, title: 'Housekeeping Services', description: 'Comprehensive cleaning and maintenance services for a pristine environment.' },
    { icon: <Users size={40} className="text-secondary" />, title: 'Payroll & Compliance', description: 'Efficient payroll processing and statutory compliance management.' },
    { icon: <Briefcase size={40} className="text-secondary" />, title: 'Electronic Security', description: 'Advanced CCTV, access control, and alarm systems for modern security needs.' },
    { icon: <Wrench size={40} className="text-secondary" />, title: 'Technical Services', description: 'Maintenance of electrical, plumbing, and HVAC systems.' },
    { icon: <Sparkles size={40} className="text-secondary" />, title: 'Pest Control', description: 'Effective and safe pest management solutions for all types of facilities.' },
  ];

  return (
    <div>
      <section className="bg-light-bg py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-2xl font-bold">Our Services</h1>
          <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">A complete suite of solutions to meet your business needs, delivered with professionalism and excellence.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceList.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-secondary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="mb-5">{service.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-text-secondary flex-grow">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}