import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 backdrop-blur-lg border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-2xl font-bold text-gradient">WebEngine</span>
              </motion.div>
            </Link>
            <p className="text-gray-400 text-sm">
              Création de sites web et applications sur mesure pour donner vie à vos projets digitaux.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Réseaux Sociaux</h3>
            <div className="flex flex-col space-y-3">
              <motion.a
                href="https://www.facebook.com/profile.php?id=61572934286958"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-neon-pink transition-colors group"
                whileHover={{ scale: 1.05 }}
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Facebook</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/fabien-culot-07922b347/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-neon-pink transition-colors group"
                whileHover={{ scale: 1.05 }}
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://x.com/WebEnginex"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-neon-pink transition-colors group"
                whileHover={{ scale: 1.05 }}
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Twitter</span>
              </motion.a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400 hover:text-neon-pink transition-colors group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>contact@webengine.fr</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 hover:text-neon-pink transition-colors group">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>+33 6 76 89 05 01</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 hover:text-neon-pink transition-colors group">
                <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Felleries, France</span>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/mentions-legales" className="text-gray-400 hover:text-neon-pink transition-colors">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="text-gray-400 hover:text-neon-pink transition-colors">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link to="/cgv" className="text-gray-400 hover:text-neon-pink transition-colors">
                  CGV
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {currentYear} WebEngine. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;