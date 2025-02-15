import { ChevronDown } from 'lucide-react';
import foto from '../../assets/logoH2.png';
import foto2 from '../../assets/teste4.png'


export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-zinc-800">
      <div className={`absolute inset-0 bg-cover bg-center opacity-10`} style={{ backgroundImage: `url('${foto2}')` }}></div> 
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <img className='m-auto my-2 w-1/3'src={foto}/>
        <h1 className="text-6xl md:text-7xl font-bold  text-white uppercase">
         Produções
        </h1>
        <p className="text-zinc-300 text-xl md:text-2xl mb-8">
          O design +18 de uma forma que você nunca viu
        </p>
        <a href='#serviços'>
        <button className="bg-black hover:bg-gradient-to-r ease-in-out from-red-400 to-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
          Conheça meu trabalho
        </button>
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400 w-8 h-8" />
      </div>
    </div>
  );
}