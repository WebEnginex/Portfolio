import {
  MonitorSmartphone,
  Code,
  Database,
  Search,
  RefreshCw,
  Pen,
  FileText,
  Activity,
  Layout,
} from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: MonitorSmartphone,
    title: 'Sites vitrines',
    description: 'Création de sites modernes, élégants et responsives pour mettre en avant votre activité et attirer vos clients.',
  },
  {
    icon: Database,
    title: 'Sites e-commerce',
    description: 'Solutions sur mesure pour vendre vos produits en ligne efficacement et booster vos ventes.',
  },
  {
    icon: Code,
    title: 'Web apps',
    description: 'Développement d\'applications performantes et personnalisées adaptées à vos besoins spécifiques.',
  },
  {
    icon: Search,
    title: 'Optimisation SEO',
    description: 'Amélioration de votre visibilité en ligne grâce à un référencement naturel optimisé.',
  },
  {
    icon: Activity,
    title: 'Audit de site',
    description: 'Analyse approfondie de votre site web pour identifier les améliorations en termes de performance, design et SEO.',
  },
  {
    icon: Layout,
    title: 'Création de landing pages',
    description: 'Conception de pages dédiées à vos campagnes marketing pour maximiser vos conversions.',
  },
  {
    icon: RefreshCw,
    title: 'Maintenance',
    description: 'Suivi régulier et mises à jour pour garantir un site sécurisé et performant.',
  },
  {
    icon: Pen,
    title: 'Refonte de sites',
    description: 'Modernisation et optimisation de votre site actuel pour un design et des performances au goût du jour.',
  },
  {
    icon: FileText,
    title: 'Intégration de contenu',
    description: 'Mise en place de textes, images et médias pour un rendu professionnel et attractif.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-20 bg-black/30">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-white">
            Nos <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Découvrez nos solutions adaptées pour répondre à tous vos besoins digitaux.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass p-6 rounded-2xl transition-all duration-300 group hover:scale-[1.02] hover:bg-white/10 hover:shadow-xl hover:shadow-white/5"
            >
              <div className="flex flex-col items-center text-center gap-4">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-white/5">
                  <service.icon
                    className="w-8 h-8 text-neon-blue group-hover:text-neon-pink transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                {/* Title and Description */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{service.title}</h3>
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
