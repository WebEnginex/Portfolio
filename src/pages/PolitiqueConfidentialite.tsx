import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-black">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8 text-gradient">Politique de Confidentialité</h1>
        
        <div className="prose prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Collecte des données</h2>
            <p>
              Nous collectons les informations que vous nous fournissez directement, notamment :
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Informations relatives à votre projet</li>
            </ul>
            <p>
              Des données peuvent également être collectées automatiquement lorsque vous naviguez sur notre site :
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Adresse IP</li>
              <li>Type de navigateur et version</li>
              <li>Pages consultées et durée des visites</li>
              <li>Données de localisation approximative</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Utilisation des données</h2>
            <p>
              Les données collectées sont utilisées pour :
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Répondre à vos demandes de contact</li>
              <li>Personnaliser votre expérience utilisateur</li>
              <li>Vous envoyer des informations sur nos services ou nos offres</li>
              <li>Améliorer notre site et nos services</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Protection des données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données 
              personnelles contre tout accès, modification, divulgation ou destruction non autorisée, 
              notamment par :
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>L'utilisation de protocoles de sécurité (HTTPS)</li>
              <li>Le stockage sécurisé des données</li>
              <li>La limitation des accès aux données aux seules personnes autorisées</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Partage des données</h2>
            <p>
              Vos données personnelles ne sont pas vendues, échangées ou louées. Cependant, elles peuvent être partagées avec des tiers dans les cas suivants :
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Pour respecter une obligation légale ou une demande judiciaire</li>
              <li>Pour fournir des services en notre nom (par exemple, l'hébergement ou l'analyse du site)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Droit d'accès : Obtenir une copie des données que nous détenons à votre sujet</li>
              <li>Droit de rectification : Corriger des informations inexactes ou incomplètes</li>
              <li>Droit à l'effacement : Demander la suppression de vos données</li>
              <li>Droit à la limitation : Restreindre le traitement de vos données</li>
              <li>Droit à la portabilité : Recevoir vos données dans un format structuré et lisible</li>
              <li>Droit d'opposition : Refuser l'utilisation de vos données dans certains cas</li>
            </ul>
            <p>
              Pour exercer ces droits, veuillez nous contacter à l'adresse : <strong>contact@webengine.fr</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
            <p>
              Les cookies sont de petits fichiers texte enregistrés sur votre appareil lorsque vous visitez un site web. 
              Nous utilisons des cookies pour améliorer votre expérience utilisateur et analyser l’utilisation de notre site.
            </p>
            <h3 className="text-xl font-semibold mt-4">6.1 Types de cookies utilisés</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <strong>Cookies nécessaires :</strong> Ces cookies sont essentiels pour permettre le fonctionnement du site et 
                ne peuvent pas être désactivés.
              </li>
              <li>
                <strong>Cookies de performance :</strong> Ces cookies nous aident à comprendre comment les visiteurs interagissent 
                avec notre site en collectant des informations anonymes.
              </li>
              <li>
                <strong>Cookies de fonctionnalité :</strong> Ces cookies permettent d’améliorer les fonctionnalités et la personnalisation 
                de votre expérience sur le site.
              </li>
            </ul>
            <h3 className="text-xl font-semibold mt-4">6.2 Gestion des cookies</h3>
            <p>
              Vous pouvez gérer ou désactiver les cookies directement depuis les paramètres de votre navigateur. Voici comment procéder 
              sur les principaux navigateurs :
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <strong>Google Chrome :</strong> 
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" className="text-blue-400 underline">Instructions</a>
              </li>
              <li>
                <strong>Mozilla Firefox :</strong> 
                <a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" className="text-blue-400 underline">Instructions</a>
              </li>
              <li>
                <strong>Microsoft Edge :</strong> 
                <a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" className="text-blue-400 underline">Instructions</a>
              </li>
              <li>
                <strong>Safari :</strong> 
                <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" className="text-blue-400 underline">Instructions</a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
            <p>
              Pour toute question concernant cette Politique de Confidentialité, vous pouvez nous contacter :
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Par email : <strong>contact@webengine.fr</strong></li>
              <li>Par courrier : 14 Rue Maillaux, 59740 Felleries</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
