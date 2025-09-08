const Audience = require("../models/audienceModel");

// Retourne l'URL et incrémente le compteur
exports.getAudience = (req, res) => {
    const id = req.params.id;

    Audience.findById(id, (err, resource) => {
        if (err) return res.status(500).send("Erreur serveur.");
        if (!resource) return res.status(404).send("Ressource non trouvée.");

        Audience.incrementCounter(id, (err2) => {
            if (err2) return res.status(500).send("Erreur lors de l'incrément.");
            res.send(resource.url);
        });
    });
};

// Retourne uniquement le compteur
exports.getCounter = (req, res) => {
    const id = req.params.id;

    Audience.getCounter(id, (err, row) => {
        if (err) return res.status(500).send("Erreur serveur.");
        if (!row) return res.status(404).send("Ressource non trouvée.");

        res.json({ id, counter: row.counter });
    });
};

// Liste toutes les ressources
exports.getAll = (req, res) => {
    Audience.findAll((err, rows) => {
        if (err) return res.status(500).send("Erreur serveur.");
        res.json(rows);
    });
};
