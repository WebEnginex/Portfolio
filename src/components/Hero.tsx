import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 md:pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="flex flex-col gap-3 md:gap-4 mb-6">
            <motion.span 
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-gradient">WebEngine</span>
            </motion.span>
            <motion.span 
              className="text-2xl md:text-4xl lg:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              L'Agence Web Qui Transforme Vos Idées en Réalité
            </motion.span>
          </h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Des solutions modernes, performantes et adaptées pour booster votre présence en ligne.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a
              href="#services"
              className="w-full sm:w-auto group px-6 py-3 rounded-full bg-neon-pink text-white font-medium hover:bg-neon-pink/90 transition-all duration-300 hover:scale-105"
            >
              Découvrez Nos Services
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 rounded-full glass text-white font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Demander un Devis
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;