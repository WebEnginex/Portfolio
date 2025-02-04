import { MonitorSmartphone, Code, Database, Search, RefreshCw, Pen, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: MonitorSmartphone,
    title: 'Sites vitrines',
    description: 'Création de sites modernes et responsives pour mettre en avant votre activité.',
  },
  {
    icon: Code,
    title: 'Web apps',
    description: 'Développement d\'applications performantes adaptées à vos besoins spécifiques.',
  },
  {
    icon: Database,
    title: 'Sites e-commerce',
    description: 'Solutions personnalisées pour vendre vos produits en ligne efficacement.',
  },
  {
    icon: Search,
    title: 'Optimisation SEO',
    description: 'Amélioration de votre référencement naturel pour attirer plus de clients.',
  },
  {
    icon: RefreshCw,
    title: 'Maintenance',
    description: 'Suivi et mise à jour régulière pour garantir un site performant.',
  },
  {
    icon: Pen,
    title: 'Refonte de sites',
    description: 'Modernisation et optimisation des sites existants pour de meilleures performances.',
  },
  {
    icon: FileText,
    title: 'Intégration de contenu',
    description: 'Mise en place de vos textes, images, et médias pour un rendu professionnel.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Nos <span className="text-gradient">Services</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Des solutions sur mesure pour répondre à tous vos besoins digitaux
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass p-4 sm:p-6 rounded-2xl transition-all duration-300 group hover:scale-[1.02] hover:bg-white/10 hover:shadow-xl hover:shadow-white/5"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl glass flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-white/5">
                  <service.icon
                    className="w-6 h-6 sm:w-7 sm:h-7 text-neon-blue group-hover:text-neon-pink transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;