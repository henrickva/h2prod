import { useState } from 'react';
import { Palette, Globe, Camera } from 'lucide-react';
import { FaVideo } from "react-icons/fa";

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Designs em Geral',
    description: 'Criação de banners, capas e logos para seu perfil ficar da hora',
    incard: `
      <p>No mundo digital em que vivemos, a identidade visual de uma marca é um dos elementos mais importantes para se destacar e conquistar o público. É aí que entra o meu trabalho: criar banners e logos que não apenas chamem a atenção, mas também transmitam a essência da sua marca de forma clara e impactante.</p>
      <br />
      <p><strong>Criação de Banners</strong></p>
      <p>Os banners são peças fundamentais para a comunicação visual nas redes sociais, sites e campanhas publicitárias. Eles servem como cartões de visita digitais, atraindo o olhar do público e transmitindo mensagens de forma rápida e eficiente. No meu trabalho, eu foco em:</p>
      <ul>
        <li><strong>Design Atraente e Moderno</strong>: Utilizo técnicas de design gráfico para criar banners que sejam visualmente agradáveis e alinhados com as tendências atuais.</li>
        <li><strong>Comunicação Clara</strong>: Garanto que a mensagem principal seja transmitida de forma direta, com hierarquia de informações e uso estratégico de cores e fontes.</li>
        <li><strong>Adaptação para Diferentes Plataformas</strong>: Seja para Instagram, Facebook, LinkedIn ou outras redes, eu ajusto o formato e o layout dos banners para que eles se encaixem perfeitamente em cada plataforma.</li>
        <li><strong>Identidade Visual Consistente</strong>: Todos os banners são criados para reforçar a identidade da sua marca, utilizando cores, tipografias e elementos que estejam alinhados com o seu branding.</li>
      </ul>
      <br />
      <p><strong>Criação de Logos</strong></p>
      <p>O logo é a face da sua marca, o símbolo que vai representar o seu negócio em todos os lugares. Um bom logo é memorável, versátil e capaz de transmitir os valores da sua empresa em um único olhar. No meu processo de criação de logos, eu sigo estas etapas:</p>
      <ul>
        <li><strong>Briefing e Pesquisa</strong>: Antes de começar, eu busco entender profundamente o seu negócio, o público-alvo e os valores que você deseja transmitir. Isso garante que o logo seja personalizado e único.</li>
        <li><strong>Conceito e Desenvolvimento</strong>: Com base nas informações coletadas, eu crio conceitos visuais que combinam simplicidade e significado. O objetivo é criar um logo que seja fácil de reconhecer e que funcione em diferentes tamanhos e aplicações.</li>
        <li><strong>Versatilidade</strong>: Um bom logo precisa funcionar em qualquer contexto, desde um cartão de visita até um outdoor. Por isso, eu entrego versões adaptáveis para diferentes usos, como versões simplificadas, ícones e variações de cores.</li>
        <li><strong>Entrega Completa</strong>: Além do arquivo final, eu forneço um manual de uso básico, explicando como aplicar o logo de forma correta, garantindo que a identidade visual da sua marca seja mantida em todas as situações.</li>
      </ul>
      <br />
      <p><strong>Por Que Escolher Meu Trabalho?</strong></p>
      <ul>
        <li><strong>Criatividade e Originalidade</strong>: Cada projeto é único, e eu me dedico a criar designs que reflitam a personalidade da sua marca.</li>
        <li><strong>Compromisso com o Cliente</strong>: Trabalho em estreita colaboração com você, garantindo que o resultado final atenda às suas expectativas e necessidades.</li>
        <li><strong>Qualidade Profissional</strong>: Utilizo ferramentas e técnicas profissionais para garantir que todas as peças tenham alta qualidade e estejam prontas para uso em qualquer plataforma.</li>
      </ul>
      <br />
      <p>Se você está buscando uma identidade visual forte e impactante para sua marca, ou precisa de banners que realmente convertam, estou aqui para ajudar. Vamos juntos transformar suas ideias em designs incríveis que vão destacar o seu negócio no mundo digital!</p>
    `
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Sites Interativos',
    description: 'Sites modernos e responsivos que convertem visitantes em clientes',
    incard: 'Aqui vai um texto um pouco mais elaborado, esse vai servir apenas pra eu ver'
  },
  {
    icon: <FaVideo className="w-8 h-8" />,
    title: 'Edições de Video',
    description: 'Interfaces intuitivas e experiências de usuário excepcionais',
    incard: 'Aqui vai um texto um pouco mais elaborado, esse vai servir apenas pra eu ver'
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: 'Fotografia',
    description: 'Conteúdo visual de alta qualidade para suas campanhas',
    incard: 'Aqui vai um texto um pouco mais elaborado, esse vai servir apenas pra eu ver'
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
            <div dangerouslySetInnerHTML={{ __html: services[selectedService].incard}} />
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
