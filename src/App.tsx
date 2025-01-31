import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import AgeVerification from './components/AgeVerification';

function App() {
  const [isVerified, setIsVerified] = useState<boolean>(false);

  // Verificar se o usuário já confirmou a idade anteriormente
  useEffect(() => {
    const verified = localStorage.getItem('ageVerified');
    if (verified === 'true') {
      setIsVerified(true);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem('ageVerified', 'true');
    setIsVerified(true);
  };

  return (
    <div className="bg-black text-white">
      {!isVerified ? (
        <AgeVerification onVerify={handleVerify} />
      ) : (
        <>
          <Hero />
          <Services />
          <Portfolio />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;