import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-black">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8 text-gradient">Mentions Légales</h1>
        
        <div className="prose prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Informations légales</h2>
            <p>
              Le site webengine.fr est édité par la société WebEngine, Entrepreneur individuel (auto-entrepreneur).
              <br />
              Siège social : 14 Rue Maillaux, 59740 Felleries
              <br />
              SIRET : 940 330 863 00017
              <br />
              Capital social : Non applicable
              <br />
              Directeur de la publication : Fabien Culot
              <br />
              Contact : contact@webengine.fr
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Hébergement</h2>
            <p>
              Le site est hébergé par Netlify
              <br />
              Adresse : 2325 3rd Street, Suite 296, San Francisco, CA 94107, USA
              <br />
              Contact : support@netlify.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par le droit d'auteur. 
              Toute reproduction ou représentation, totale ou partielle, de ce site par quelque procédé que ce soit, 
              sans autorisation expresse de WebEngine, est interdite et constituerait une contrefaçon.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Données personnelles</h2>
            <p>
              Les informations concernant la collecte et le traitement des données personnelles sont détaillées 
              dans notre Politique de Confidentialité.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
