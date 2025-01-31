import { Mail, Phone,  Linkedin, X } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-zinc-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-600">
          Entre em Contato
        </h2>
        <p className="text-zinc-300 text-center mb-12 max-w-2xl mx-auto">
          Vamos transformar sua ideia em realidade
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-zinc-800 border border-red-500 rounded-lg focus:outline-none text-white"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-zinc-800 border border-red-500 rounded-lg focus:outline-none text-white"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-800 border border-red-500 rounded-lg focus:outline-none text-white"
                  placeholder="Sua mensagem"
                ></textarea>
              </div>
              <button className="w-full bg-black ease-in-out duration-300 hover:bg-gradient-to-r from-red-400 to-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all">
                Enviar mensagem
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <a href="mailto:contato@h2productions.com" className="flex items-center text-gray-400 hover:text-red-500 transition-colors">
                  <Mail className="w-5 h-5 mr-3" />
                  contato@h2productions.com
                </a>
                <a href="tel:+5524992547460" className="flex items-center text-gray-400 hover:text-red-500 transition-colors">
                  <Phone className="w-5 h-5 mr-3" />
                  (24) 99254-7460
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <X className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}