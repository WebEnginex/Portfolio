import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const projects = [
  {
    id: 1,
    title: "Site Immobilier Professionnel",
    description: "Site immobilier moderne pour un agent immobilier",
    thumbnail: "/projets/estate/Estate_Website.webp",
    images: [
      "/projets/estate/Estate_Website.webp",
      "/projets/estate/Estate_Website_2.webp",
      "/projets/estate/Estate_Website_3.webp",
      "/projets/estate/Estate_Website_4.webp",
      "/projets/estate/Estate_Website_5.webp"
    ],
    tags: ["React", "TypeScript", "Tailwind Css", "Node.js", "Supabase"],
    fullDescription: "Ce site immobilier moderne est conçu pour les agents immobiliers souhaitant présenter leurs biens et attirer de nouveaux clients. Il propose une mise en page optimisée pour les annonces, des animations fluides pour améliorer l'expérience utilisateur, et des options de personnalisation avancées. Le site inclut des sections dédiées aux biens mis en avant, des témoignages clients, et un formulaire de contact pour générer des leads efficacement.",
  },
  {
    id: 2,
    title: "Site Vitrine Supercross",
    description: "Site vitrine moderne pour un évenement de Supercross",
    thumbnail: "/projets/sxtourdouai/Supercross_Douai_Preview.webp",
    images: [
      "/projets/sxtourdouai/Supercross_Douai_Preview.webp",
      "/projets/sxtourdouai/Supercross_Douai_Pilotes.webp",
      "/projets/sxtourdouai/Supercross_Douai_Programme.webp",
      "/projets/sxtourdouai/Supercross_Douai_Billeterie.webp",
      "/projets/sxtourdouai/Supercross_Douai_Contact.webp",
      "/projets/sxtourdouai/Supercross_Douai_Dashboard.webp",
      "/projets/sxtourdouai/Supercross_Douai_Messages.webp"
    ],
    tags: ["React", "TypeScript", "Tailwind Css", "Node.js", "Supabase"],
    fullDescription: "Ce site vitrine met en avant l'événement Supercross à Douai avec des sections pour le programme, les pilotes, et une billetterie. Il inclut un tableau de bord permettant de suivre les statistiques du site (visites, clics) et de répondre directement aux messages des utilisateurs pour une gestion efficace.",
  },
  {
    id: 3,
    title: "Application SaaS Analytics",
    description: "Application SaaS Analytics",
    thumbnail: "/projets/webapp/Web_App_Dashboard.webp",
    images: [
      "/projets/webapp/Web_App_Dashboard.webp",
      "/projets/webapp/Web_App_Analytics.webp",
      "/projets/webapp/Web_App_Transactions.webp",
      "/projets/webapp/Web_App_Notifications.webp",
      "/projets/webapp/Web_App_Profile.webp",
      "/projets/webapp/Web_App_Settings.webp"
    ],
    tags: ["Next.js", "Supabase", "Tailwind"],
    fullDescription: "Une application web moderne conçue pour les entreprises SaaS et les applications métiers. Cette plateforme offre un design épuré et des fonctionnalités avancées pour l'analyse de données, la gestion des utilisateurs et la génération de rapports. Optimisée pour visualiser les métriques de performance de votre entreprise, l'application inclut des tableaux de bord interactifs, des outils de reporting détaillés, et un espace utilisateur complet. Grâce à une interface intuitive et un design professionnel, cette application permet aux entreprises de prendre des décisions éclairées et d'améliorer leur efficacité opérationnelle.",
  },
];

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Notre <span className="text-gradient">Portfolio</span>
          </h2>
          
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Découvrez nos dernières réalisations et laissez-vous inspirer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl"
              onClick={() => navigate('/projects')}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 bg-black/20">
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;