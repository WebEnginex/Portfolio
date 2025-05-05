import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section id="contact" className="py-20 bg-black/30">
      <div className="container px-4 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Contactez <span className="text-gradient">Nous</span>
          </h2>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Une idée de projet ? N'hésitez pas à nous contacter pour en discuter.
          </p>
        </motion.div>

        <div className="glass p-6 rounded-lg max-w-2xl mx-auto">
          <form
            action="https://formspree.io/f/mwpoovyj" // URL Formspree
            method="POST"
            className="space-y-6"
          >
            {/* Nom */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-lg glass text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-neon-pink"
                placeholder="Votre nom complet"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-lg glass text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-neon-pink"
                placeholder="votre@email.com"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg glass text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-neon-pink"
                placeholder="Décrivez votre projet..."
              />
            </div>

            {/* Bouton */}
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-neon-pink text-white font-medium hover:bg-neon-pink/90 transition-colors flex items-center justify-center gap-2"
            >
              Envoyer
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
