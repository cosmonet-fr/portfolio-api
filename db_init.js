const db = require("./config/database");

db.serialize(() => {
    db.run("DROP TABLE IF EXISTS videos");
    db.run(`
    CREATE TABLE videos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      url TEXT NOT NULL,
      counter INTEGER DEFAULT 0
    )
  `);

    const stmt = db.prepare("INSERT INTO videos (url, counter) VALUES (?, ?)");
    stmt.run("https://example.com/video1", 0);
    stmt.run("https://example.com/video2", 0);
    stmt.finalize();

    console.log("Table 'videos' créée avec données initiales.");
});

db.close();
