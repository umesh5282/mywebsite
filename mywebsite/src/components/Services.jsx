import React from 'react';
import { BrainCircuit, Globe, Rocket, Users } from 'lucide-react'; // or use Heroicons or SVGs

const services = [
  {
    title: 'AI & IT Solutions',
    description: 'Cutting-edge AI technologies and IT services tailored to optimize your business operations.',
    icon: <BrainCircuit size={28} />,
  },
  {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to enhance your online presence and reach.',
    icon: <Globe size={28} />,
  },
  {
    title: 'SAAS & MVP Products',
    description: 'Rapidly develop and launch innovative software products and minimum viable products.',
    icon: <Rocket size={28} />,
  },
  {
    title: 'Staffing Solutions',
    description: 'Connect with top-tier professionals in the IT and digital marketing domains.',
    icon: <Users size={28} />,
  },
];

const Services = () => {
  return (
    <section className="bg-slate-700 text-white py-16 px-4 " >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          We offer comprehensive solutions to help your business thrive in the digital landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index} style={{ backgroundColor: 'rgb(37, 46, 55)' }} 
            className=" rounded-xl border border-gray-400 p-6 shadow-lg hover:shadow-blue-500/20 transition"
          >
            <div className="bg-teal-100 text-teal-600 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
            <a href="#" className="text-teal-400 hover:underline font-medium text-sm inline-flex items-center gap-1">
              Learn More →
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
          View All Services
        </button>
      </div>
    </section>
  );
};

export default Services;
