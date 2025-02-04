import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast"; // Assurez-vous que ce hook fonctionne dans votre projet.

const Contact = () => {
  const { toast } = useToast(); // Hook pour les notifications.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page.

    // Créer une instance de FormData pour envoyer les données au serveur.
    const form = e.target;
    const data = new FormData(form);

    try {
      // Envoyer les données via fetch à Netlify.
      await fetch("/", {
        method: "POST",
        body: data,
      });

      // Réinitialiser le formulaire après soumission.
      setFormData({ name: "", email: "", message: "" });

      // Afficher une notification de succès.
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
    } catch (error) {
      // Gérer une éventuelle erreur et afficher une notification d'échec.
      toast({
        title: "Erreur lors de l'envoi",
        description: "Une erreur est survenue. Veuillez réessayer plus tard.",
      });
    }
  };

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
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Champ caché pour empêcher les bots */}
            <input type="hidden" name="form-name" value="contact" />

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
