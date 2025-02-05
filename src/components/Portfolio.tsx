import { useState } from 'react';
import { X } from 'lucide-react';
import test1 from '../../assets/teste3.png';
import test2 from '../../assets/maryanaSite.png';
import test3 from '../../assets/sevenSite.png';
import test4 from '../../assets/mirandaSite.png'
import portif from '../../assets/nannaBanner.png'
import portif2 from '../../assets/agiBanner.png'
import portif3 from '../../assets/dominaxBanner.png'
import previa1 from  '../../assets/LovezinMeduza.mp4'
import previa2 from  '../../assets/previa2.mp4'
import previa3 from  '../../assets/previa1.mp4'
import capa from '../../assets/Capa-1.png'

const projects = [
  {
    title1: 'Sites',
    category:'Mostrando ao publico pra que veio',
    image: test1,
    description: 'Clique na imagem para ser redirecionado para o site',
    link:'https://dommeseventrix.vercel.app/',
    link2:'https://rainhamaryana.vercel.app/',
    link3:'https://rainhamiranda.vercel.app/',
    image1: test3,
    image2: test2,
    image3: test4,
    
  },
  {
    title: 'Banners Redes Sociais',
    category:'Apresetando de forma rápida',
    image: test2,
    description: 'Clique na imagem para ser redirecioando para o perfil relacionado. Caso tenha interesse em ver mais imagens, basta me enviar uma mensagem',
    link: 'https://dommeseventrix.vercel.app/',
    link2:'https://rainhamaryana.vercel.app/',
    link3:'https://rainhamiranda.vercel.app/',
    image1: portif,
    image2: portif2,
    image3: portif3,
  },
  {
    title: 'Prévias de Video',
    category: 'Dando alguns spoilers',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
    description: 'Aplicativo mobile para gestão empresarial',
    video:previa1,
    video2:previa2,
    video3:previa3,
  },
  {
    title: 'Catálogos',
    category: 'Listando seus serviços',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2070&auto=format&fit=crop',
    description: 'Criação de marca para startup de tecnologia',
    image1: capa,
    image2: capa,
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-600">
          Portfólio
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Conheça alguns dos meus projetos mais recentes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title || project.title1 }</h3>
                    <p className="text-gray-300">{project.category}</p>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className= {`bg-zinc-800 rounded-lg ${selectedProject.title1 ? 'max-w-xl':'w-11/12'} h-[80vh] scrollbar flex flex-col relative p-6 overflow-y-auto`}>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title1 ? selectedProject.title1 :selectedProject.title }</h3>
            <p className='my-4'>{selectedProject.description ? selectedProject.description : selectedProject.title }</p>
            <div className={`grid gap-8 ${selectedProject.title1 ? 'grid-cols-1 ':'grid-cols-1 md:grid-cols-3'} ${selectedProject.image3 ? 'grid grid-cols-1':'flex w-full items-center justify-center'}`}>
              <a target='_blank' href={selectedProject.link2 ? selectedProject.link2 : selectedProject.image}>
                {selectedProject.video ? <video className='rounded-lg' autoPlay loop muted type="video/mp4" src={selectedProject.video}></video> : <img
                  src={selectedProject.image1}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-lg mb-4"
                />}
              </a>
              <a target='_blank' href={selectedProject.link2 ? selectedProject.link2 : selectedProject.image}>
                {selectedProject.video2 ? <video className='rounded-lg' autoPlay loop muted type="video/mp4" src={selectedProject.video2}></video> : <img
                  src={selectedProject.image2}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-lg mb-4"
                />}
              </a>
              <a className={` ${selectedProject.image3 || selectedProject.video3? 'block':'hidden'}`} target='_blank' href={selectedProject.link2 ? selectedProject.link2 : selectedProject.image}>
                {selectedProject.video3 ? <video className='rounded-lg' autoPlay loop muted type="video/mp4" src={selectedProject.video3}></video> : <img
                  src={selectedProject.image3}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-lg mb-4"
                />}
              </a>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}

