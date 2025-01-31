import { AlertTriangle } from 'lucide-react';

interface AgeVerificationProps {
  onVerify: () => void;
}

export default function AgeVerification({ onVerify }: AgeVerificationProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-zinc-950 rounded-lg max-w-md w-full p-8 text-center">
        <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-4">
          Verificação de Idade
        </h2>
        <p className="text-gray-300 mb-6">
          Este site contém conteúdo destinado apenas para maiores de 18 anos.
          Ao clicar em "Confirmar", você declara que tem 18 anos ou mais.
        </p>
        <div className="space-y-3">
          <button
            onClick={onVerify}
            className="w-full bg-black hover:bg-gradient-to-r from-red-400 to-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
          >
            Confirmar (Tenho 18 anos ou mais)
          </button>
          <a
            href="https://www.google.com"
            className="block w-full bg-zinc-900 hover:bg-zinc-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
          >
            Sair
          </a>
        </div>
      </div>
    </div>
  );
}