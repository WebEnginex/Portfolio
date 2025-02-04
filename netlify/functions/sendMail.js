const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Tous les champs sont requis." }),
      };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // true pour 465, false pour les autres ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
        from: process.env.SMTP_USER, // Pas d'alias
        to: "contact@webengine.fr", // Adresse email du destinataire
        subject: `Message de ${name}`,
        text: `De : ${name}\nEmail : ${email}\nMessage : ${message}`,
      };
      
      

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email envoyé avec succès !" }),
    };
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Échec de l'envoi de l'email." }),
    };
  }
};
