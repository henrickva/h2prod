import { useState } from 'react';
import { Palette, Globe, Laptop, Camera } from 'lucide-react';
import { FaVideo } from "react-icons/fa";

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Designs em Geral',
    description: 'Criação de banners, capas e logos para seu perfil ficar da hora',
    incard:'No mundo digital em que vivemos, a identidade visual de uma marca é um dos elementos mais importantes para se destacar e conquistar o público. É aí que entra o meu trabalho: criar banners e logos que não apenas chamem a atenção, mas também transmitam a essência da sua marca de forma clara e impactante. No mundo digital em que vivemos, a identidade visual de uma marca é um dos elementos mais importantes para se destacar e conquistar o público. É aí que entra o meu trabalho: criar banners e logos que não apenas chamem a atenção, mas também transmitam a essência da sua marca de forma clara e impactante. No mundo digital em que vivemos, a identidade visual de uma marca é um dos elementos mais importantes para se destacar e conquistar o público. É aí que entra o meu trabalho: criar banners e logos que não apenas chamem a atenção, mas também transmitam a essência da sua marca de forma clara e impactante. No mundo digital em que vivemos, a identidade visual de uma marca é um dos elementos mais importantes para se destacar e conquistar o público. É aí que entra o meu trabalho: criar banners e logos que não apenas chamem a atenção, mas também transmitam a essência da sua marca de forma clara e impactante.'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Sites Interativos',
    description: 'Sites modernos e responsivos que convertem visitantes em clientes',
    incard:'Aqui vai um texto um pouco mais elaborado, esse vai servir apenas pra eu ver'
  },
  {
    icon: <FaVideo className="w-8 h-8" />,
    title: 'Edições de Video',
    description: 'Interfaces intuitivas e experiências de usuário excepcionais',
    incard:'Aqui vai um texto um pouco mais elaborado, esse vai servir apenas pra eu ver'
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: 'Fotografia',
    description: 'Conteúdo visual de alta qualidade para suas campanhas',
    incard:'Aqui vai um texto um pouco mais elaborado, esse vai servir apenas pra eu ver'
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  return (
    <div id='serviços' className="bg-zinc-950 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-600">
          Nossos Serviços
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Oferecemos soluções completas para transformar sua presença digital
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          <div className=" bg-zinc-800 rounded-lg max-w-md w-full h-[80vh] scrollbar flex flex-col relative p-6 overflow-y-auto">
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
