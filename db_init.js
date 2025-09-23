const db = require("./config/database");

db.serialize(() => {
  db.run("DROP TABLE IF EXISTS audience");
  db.run(`
    CREATE TABLE audience (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      type TEXT NOT NULL,
      name TEXT NOT NULL,
      url TEXT NOT NULL,
      counter INTEGER DEFAULT 0
    )
  `);

  const stmt = db.prepare("INSERT INTO audience (type, name, url, counter) VALUES (?, ?, ?, ?)");
  stmt.run("Vidéo", "Vidéo 40 ans FSF", "https://fsf40.billois.org/ENTRETIEN%20STALLMAN%20-%2040%20ANS%20FSF.webm", 0);
  stmt.run("Audio", "Audio 40 ans FSF", "https://videos.billois.org/fsf-40-audio.ogg", 0);
  stmt.run("PDF", "CV", "https://www.billois.org/cv_sbillois.pdf", 0);
  stmt.run("Page web", "Home page", "...", 0);
  stmt.finalize();

  console.log("Table 'audience' créée avec données initiales.");
});

db.close();
