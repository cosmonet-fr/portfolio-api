const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./videos.db', (err) => {
    if (err) {
        console.error("Erreur de connexion SQLite :", err.message);
    } else {
        console.log("Connecté à SQLite.");
    }
});

module.exports = db;
