import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact,
  FaNodeJs, 
  FaWordpress,
  FaShopify,
  FaFigma 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiShadcnui, 
  SiSupabase,
  SiNetlify,
  SiPostgresql
} from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';
import { motion } from 'framer-motion';

const skills = [
  // Langages de base
  { name: "HTML/CSS", icon: FaHtml5, color: "#E34F26" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  
  // Frameworks & Libraries Front-end
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "ShadCN", icon: SiShadcnui, color: "#ffffff" },
  
  // Base de données & Backend
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "SQL", icon: SiPostgresql, color: "#336791" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  
  // CMS & E-commerce
  { name: "WordPress", icon: FaWordpress, color: "#21759B" },
  { name: "Shopify", icon: FaShopify, color: "#7AB55C" },
  
  // Déploiement & Design
  { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  { name: "UI/UX", icon: MdDesignServices, color: "#FF69B4" }
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 md:py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Nos <span className="text-gradient">Compétences</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg mb-4">
            Les technologies que nous maîtrisons pour donner vie à vos projets
          </p>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
            Notre expertise technique nous permet de créer des solutions web performantes et innovantes
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl glass flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-white/5 transition-all duration-300">
                  <Icon 
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-all duration-300"
                    style={{ color: skill.color }}
                  />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors text-xs sm:text-sm text-center font-medium">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;