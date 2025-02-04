import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CGV = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-black">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8 text-gradient">Conditions Générales de Vente</h1>
        
        <div className="prose prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Objet</h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) définissent les modalités de 
              fourniture des services de création et développement web par WebEngine à ses clients.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Prix et modalités de paiement</h2>
            <p>
              Les prix des prestations sont établis sur la base des tarifs de WebEngine en vigueur au jour de la commande. 
              Un devis détaillé est communiqué au client avant toute prestation. Un acompte de 30% est exigé à la commande, 
              le solde étant payable selon l'échéancier convenu entre les parties. 
            </p>
            <p>
              Les paiements peuvent être effectués par virement bancaire ou tout autre mode de paiement accepté par WebEngine.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Délais de réalisation</h2>
            <p>
              Les délais de réalisation sont donnés à titre indicatif. WebEngine s'engage à respecter 
              les délais annoncés, sous réserve que le client fournisse en temps utile toutes les informations 
              nécessaires à la réalisation du projet. En cas de retard imputable au client, les délais peuvent être révisés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Propriété intellectuelle</h2>
            <p>
              Le transfert de propriété des droits d'auteur sur les livrables est effectif uniquement après le 
              paiement intégral de la commande. Jusqu'à cette date, les créations réalisées restent la propriété 
              exclusive de WebEngine.
            </p>
            <p>
              WebEngine se réserve le droit d'utiliser les créations réalisées à des fins de communication et de 
              promotion, sauf opposition écrite du client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Responsabilité</h2>
            <p>
              WebEngine s'engage à mettre en œuvre tous les moyens nécessaires pour assurer la qualité des prestations. 
              Sa responsabilité ne pourra être engagée qu'en cas de faute prouvée et dans la limite du montant de la 
              prestation facturée. WebEngine ne saurait être tenu responsable des pertes de données ou des dommages 
              causés par des tiers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Confidentialité</h2>
            <p>
              Les parties s'engagent mutuellement à préserver la confidentialité des informations échangées dans le 
              cadre de la prestation. WebEngine garantit que les informations communiquées par le client ne seront 
              utilisées que pour la réalisation du projet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Résiliation</h2>
            <p>
              En cas de non-respect des obligations par l'une des parties, le contrat peut être résilié de plein droit, 
              après une mise en demeure restée sans réponse pendant 15 jours. En cas de résiliation à l'initiative du 
              client, l'acompte versé reste acquis à WebEngine.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Litiges</h2>
            <p>
              Les présentes CGV sont soumises au droit français. En cas de litige, les parties s'engagent à rechercher 
              une solution amiable avant de recourir aux tribunaux compétents.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CGV;
