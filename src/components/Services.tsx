import { useState } from 'react';
import { Palette, Globe, Camera } from 'lucide-react';
import { FaVideo } from "react-icons/fa";

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Designs em Geral',
    description: 'Criação de banners, capas e logos para seu perfil ficar mais atraente',
    incard: `
      <p><strong>Serviços Oferecidos:</strong></p>
      <p>Banner, Capas de perfil e Catálogos. Para algum serviço que não listo aqui, basta me mandar uma mensagem para ver a viabilidade de entrega</p>
      <br />
      <p>No mundo digital em que vivemos, a identidade visual de uma marca é um dos elementos mais importantes para se destacar e conquistar o público. É aí que entra o meu trabalho: criar banners e logos que não apenas chamem a atenção, mas também transmitam a essência da sua marca de forma clara e impactante.</p>
      <br />
      <br />
      <p><strong>Criação de Banners</strong></p>
      <p>Os banners são peças fundamentais para a comunicação visual nas redes sociais, sites e campanhas publicitárias. Eles servem como cartões de visita digitais, atraindo o olhar do público e transmitindo mensagens de forma rápida e eficiente. No meu trabalho, eu foco em:</p>
      <ul>
        <li><strong>Design Atraente e Moderno</strong> - Utilizo técnicas de design gráfico para criar banners que sejam visualmente agradáveis e alinhados com as tendências atuais.</li>
        <li><strong>Identidade Visual Consistente</strong> - Todos os banners são criados para reforçar a identidade da sua marca, utilizando cores, tipografias e elementos que estejam alinhados com o seu branding.</li>
      </ul>
      <br />
      <p><strong>Criação de Logos</strong></p>
      <p>O logo é a face da sua marca, o símbolo que vai te representar em todos os lugares. Um bom logo é memorável, versátil e capaz de transmitir os valores da sua empresa em um único olhar. No meu processo de criação de logos, eu sigo estas etapas:</p>
      <ul>
        <li><strong>Briefing e Pesquisa</strong> - Antes de começar, eu busco entender profundamente as ideias que você deseja transmitir. Isso garante que o logo seja personalizado e único.</li>
        <li><strong>Conceito e Desenvolvimento</strong> - Com base nas informações coletadas, eu crio conceitos visuais que combinam simplicidade e significado. O objetivo é criar um logo que seja fácil de reconhecer e que funcione em diferentes tamanhos e aplicações.</li>
      </ul>
      <br />
      <br />
      <p>Se você está buscando uma identidade visual forte e impactante para sua marca, ou precisa de banners que realmente convertam, estou aqui para ajudar. Vamos juntos transformar suas ideias em designs incríveis que vão te destacar.</p>
    `
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Sites Interativos',
    description: 'Sites modernos e responsivos que convertem visitantes em clientes',
    incard: `
      <p><strong>Serviços Oferecidos:</strong></p>
      <p>Sites feitos por programação e sites com Wordpress</p>
      <br />
      <br />
      <p><strong>Sites no geral</strong></p>
      <p>Programo sites modernos, responsivos e funcionais, focados em resultados. Meu trabalho inclui:</p>
      <ul>
        <li><strong>Design Atraente</strong> - Interfaces limpas e intuitivas, adaptadas ao público adulto.</li>
        <li><strong>Responsividade</strong> -  Sites que funcionam perfeitamente em celulares, tablets e desktops.</li>
        <li><strong>Otimização</strong> -  Sites rápidos, seguros e otimizados para SEO.</li>

      </ul>
      <br />
      <br />
      <p>Desenvolvo soluções personalizadas que unem design moderno e alta performance, garantindo uma experiência incrível para seus usuários.</p>
    `
  },
  {
    icon: <FaVideo className="w-8 h-8" />,
    title: 'Edições de Video',
    description: 'A qualidade que você precisa na internet passa pela edição',
    incard: `
      <p><strong>Serviços Oferecidos:</strong></p>
      <p>Edições e cortes de video, produção de prévias, borrar rostos ou tatuagens.Para algum serviço que não listo aqui, basta me mandar uma mensagem para ver a viabilidade de entrega</p>
      <br />
      <br />
      <p>Atualmente, os vídeos são uma das formas mais eficazes de engajar o público e promover perfis. Meu trabalho é criar edições de vídeos criativas e profissionais, especialmente pensadas para redes sociais,onde chamam a atenção e geram resultados.</p>
      <br />
      <p><strong>Edição de Video</strong></p>
      <p>A edição de vídeo é o processo onde de corto, organizo e aprimoro gravações para criar um conteúdo final envolvente.</p>
      <ul>
        <li><strong>Cortes e Transições</strong> - Remover partes desnecessárias e adicionar transições suaves</li>
        <li><strong>Efeitos Visuais</strong> -  Inserir textos, animações e gráficos para destacar informações.</li>
        <li><strong>Correção de Cor</strong> -  Ajustar cores e iluminação para melhorar a qualidade visual.</li>
      </ul>
      <br />
      <p><strong>Produção de Prévias</strong></p>
      <p>A partir de um video completo, pode ser de uma produção bruta ou já editada, faço um video curto mostrando apenas algumas cenas de forma bem rápida mas ainda visivel, instigando ainda mais o comprador a adquirir o video original.</p>
      <br />
      <br />
      <p>Se você busca vídeos que se destaquem nas redes sociais, estou aqui para ajudar. Vamos transformar suas ideias em conteúdo visual incrível! </p>
    `
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: 'Fotografia',
    description: 'Conteúdo visual de alta qualidade para seus perfis mais quentes',
    incard: `
      <p><strong>Serviços Oferecidos:</strong></p>
      <p>Ensaios sensuais e ensaios para plataformas como Onlyfans, Privacy e etc...</p>
      <br />
      <br />
      <p><strong>Ensaios Fotográficos</strong></p>
      <p>A fotografia é a arte de capturar momentos e transformá-los em imagens que contam histórias. Meu trabalho inclui:</p>
      <ul>
        <li><strong>Composição Criativa</strong> - Enquadrar cenas de forma harmoniosa e impactante.</li>
        <li><strong>Efeitos Visuais</strong> -  Ajustar cores, contraste e nitidez para realçar a beleza das fotos.</li>
      </ul>
      <br />
      <br />
      <p>Os ensaios fotográficos são feitos em temporadas e na cidade de São Paulo. Para mais detalhes entrar em contato nos endereços mencionados no final da página.</p>
    `
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
          Aqui você pode ver os serviços que ofereço e caso encontre algo que tenha interesse, basta preencher o formulário no final da página pedindo por um orçamento.
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
