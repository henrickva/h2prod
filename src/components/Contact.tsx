import React, { useRef, useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [nameInput, setNameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [messageInput, setMessageInput] = useState<string>("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_s6wgo3b', 'template_ztarfaf', form.current, {
          publicKey: '2aQ3Krv854d1PWPsD',
        })
        .then(
          () => {
            setNameInput("");
            setEmailInput("");
            setMessageInput("");
            console.log('SUCCESSO!');
            alert('Mensagem enviada com sucesso!!')
          },
          (error) => {
            console.log('FALHA...', error.text);
          },
        );
    }
  };

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
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome
                </label>
                <input
                  value={nameInput}
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-zinc-800 border border-red-500 rounded-lg focus:outline-none text-white"
                  placeholder="Seu nome"
                  onChange={(e) => setNameInput(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  E-mail
                </label>
                <input
                  value={emailInput}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-zinc-800 border border-red-500 rounded-lg focus:outline-none text-white"
                  placeholder="seu@email.com"
                  onChange={(e) => setEmailInput(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  value={messageInput}
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-800 border border-red-500 rounded-lg focus:outline-none text-white"
                  placeholder="Sua mensagem"
                  onChange={(e) => setMessageInput(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-black ease-in-out duration-300 hover:bg-gradient-to-r from-red-400 to-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all">
                Enviar mensagem
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <a href="mailto:hk.prod23@gmail.com" className="flex items-center text-gray-400 hover:text-red-500 transition-colors">
                  <Mail className="w-5 h-5 mr-3" />
                  E-mail
                </a>
                <a href="tel:+5524992547460" className="flex items-center text-gray-400 hover:text-red-500 transition-colors">
                  <Phone className="w-5 h-5 mr-3" />
                  Celular
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a target='_blank' href="https://t.me/hk2098" className="text-gray-400 hover:text-red-500 transition-colors">
                  <RiTelegram2Fill className="w-6 h-6" />
                </a>
                <a target='_blank' href="https://x.com/hk2design" className="text-gray-400 hover:text-red-500 transition-colors">
                  <FaXTwitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}