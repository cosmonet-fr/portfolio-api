const Audience = require("../models/audienceModel");

// Retourne l'URL et incrémente le compteur
exports.getAudience = (req, res) => {
    const id = req.params.id;

    Audience.findById(id, (err, resource) => {
        if (err) return res.status(500).send("Erreur serveur.");
        if (!resource) return res.status(404).send("Ressource non trouvée.");

        Audience.incrementCounter(id, (err2) => {
            if (err2) return res.status(500).send("Erreur lors de l'incrément.");
            res.json({
                name: resource.name,
                url: resource.url
            });
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

// Liste toutes les ressources (JSON)
exports.getAll = (req, res) => {
    Audience.findAll((err, rows) => {
        if (err) return res.status(500).send("Erreur serveur.");
        res.json(rows);
    });
};

// Liste toutes les ressources (HTML)
exports.renderHtmlTable = (req, res) => {
    Audience.findAll((err, rows) => {
        if (err) return res.status(500).send("Erreur de lecture DB");

        let html = `
        <html>
        <head>
          <title>Audience</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            table { border-collapse: collapse; width: 100%; }
            th, td { border: 1px solid #ddd; padding: 8px; }
            th { background: #f4f4f4; }
          </style>
        </head>
        <body>
          <h1>Liste Audience</h1>
          <table>
            <tr><th>ID</th><th>Type</th><th>Name</th><th>URL</th><th>Counter</th></tr>
        `;

        rows.forEach(row => {
            html += `<tr>
              <td>${row.id}</td>
              <td>${row.type}</td>
              <td>${row.name}</td>
              <td><a href="${row.url}" target="_blank">${row.url}</a></td>
              <td>${row.counter}</td>
            </tr>`;
        });

        html += `</table></body></html>`;
        res.send(html);
    });
};
