const transporter = require("../config/mailer");

exports.sendContact = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Tous les champs sont requis" });
    }

    try {
        await transporter.sendMail({
            from: `"billois.org | Contact" <${process.env.SMTP_USER}>`,
            to: process.env.MAIL_TO,
            subject: "Nouveau message billois.org",
            text: `Nom: ${name}\nEmail: ${email}\n\n${message}`,
            html: `<p><b>Nom:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Message:</b></p>
             <p>${message}</p>`,
        });

        res.json({ success: true, message: "Message envoyé avec succès !" });
    } catch (error) {
        console.error("Erreur envoi email:", error);
        res.status(500).json({ error: "Erreur lors de l’envoi de l’email" });
    }
};

// Pour tester la config SMTP
exports.testContact = async (req, res) => {
    try {
        await transporter.sendMail({
            from: `"billois.org | Contact" <${process.env.SMTP_USER}>`,
            to: process.env.MAIL_TO,
            subject: "Test de configuration SMTP",
            text: "Ceci est un email de test depuis l’API.",
        });
        res.json({ success: true, message: "Email de test envoyé !" });
    } catch (error) {
        console.error("Erreur test email:", error);
        res.status(500).json({ error: "Erreur lors du test SMTP" });
    }
};
