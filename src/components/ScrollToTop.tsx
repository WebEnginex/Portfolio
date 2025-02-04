import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } fixed bottom-8 right-8 z-50 p-4 rounded-full glass hover:bg-white/10 transition-all duration-300 group`}
      aria-label="Retour en haut de la page"
    >
      <ChevronUp 
        className="w-6 h-6 text-neon-pink group-hover:scale-110 transition-transform duration-300" 
      />
    </button>
  );
};

export default ScrollToTop;