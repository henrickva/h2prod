import { useState } from 'react';
import { Palette, Globe, Laptop, Camera, Code, Megaphone } from 'lucide-react';

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Logos',
    description: 'Criação de identidade visual única e memorável para sua marca',
    incard:'Aqui vai um texto um pouco mais elaborado, esse vai servir apenas pra eu ver'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Sites Interativos',
    description: 'Sites modernos e responsivos que convertem visitantes em clientes',
    incard:'Aqui vai um texto um pouco mais elaborado, esse vai servir apenas pra eu ver'
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'Interfaces intuitivas e experiências de usuário excepcionais',
    incard:'Aqui vai um texto um pouco mais elaborado, esse vai servir apenas pra eu ver'
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: 'Produção Visual',
    description: 'Conteúdo visual de alta qualidade para suas campanhas',
    incard:'Aqui vai um texto um pouco mais elaborado, esse vai servir apenas pra eu ver'
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Desenvolvimento',
    description: 'Soluções tecnológicas sob medida para seu negócio',
    incard:'Aqui vai um texto um pouco mais elaborado, esse vai servir apenas pra eu ver'
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: 'Marketing Digital',
    description: 'Estratégias eficientes para alcançar seu público-alvo',
    incard:'Aqui vai um texto um pouco mais elaborado, esse vai servir apenas pra eu ver'
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  return (
    <div className="bg-zinc-950 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-600">
          Nossos Serviços
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Oferecemos soluções completas para transformar sua presença digital
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-zinc-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-red-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <button 
                onClick={() => setSelectedService(index)}
                className="text-red-500 hover:text-orange-500 font-medium transition-colors duration-300"
              >
                Saiba mais →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService !== null && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-800 rounded-lg max-w-md w-full relative p-6">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
            <div className="text-red-500 text-4xl mb-4">
              {services[selectedService].icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {services[selectedService].title}
            </h3>
            <p className="text-gray-300">
              {services[selectedService].incard}
            </p>
            <div className="mt-6">
              <button
                onClick={() => setSelectedService(null)}
                className="w-full bg-red-500 hover:bg-orange-500 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
