const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const PORT = 3000;

// Connexion à la DB
const dbPath = path.join(__dirname, "data", "audience.db");
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Erreur de connexion SQLite :", err.message);
    } else {
        console.log("Connecté à la base SQLite.");
    }
});

// Route racine qui affiche un tableau HTML
app.get("/", (req, res) => {
    const query = "SELECT * FROM audience";
    db.all(query, [], (err, rows) => {
        if (err) {
            return res.status(500).send("Erreur lors de la récupération des données.");
        }

        // Construire le tableau HTML
        let html = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <title>Liste Audience</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
          th { background: #f4f4f4; }
          tr:nth-child(even) { background: #fafafa; }
        </style>
      </head>
      <body>
        <h1>Liste des entrées Audience</h1>
        <table>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Name</th>
            <!--<th>URL</th>-->
            <th>Counter</th>
          </tr>`;

        rows.forEach((row) => {
            html += `
        <tr>
          <td>${row.id}</td>
          <td>${row.type}</td>
          <td>${row.name}</td>
           <!--<td><a href="${row.url}" target="_blank">${row.url}</a></td>-->
          <td>${row.counter}</td>
        </tr>`;
        });

        html += `
        </table>
      </body>
      </html>`;

        res.send(html);
    });
});

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
