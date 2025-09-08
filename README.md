# Gestion de la base dans Docker

### 1. Initialiser la DB

La première fois, exécute le script de création de la table :

```bash
docker compose run --rm app node db_init.js
```

---

### 2. Entrer dans le shell SQLite

```bash
docker compose run --rm sqlite sqlite3 /data/audience.db
```

Tu arrives dans `sqlite>`.

---

### 3. Commandes utiles SQLite

* **Lister les tables**

```sql
.tables;
```

* **Voir la structure de la table audience**

```sql
.schema audience;
```

* **Lister toutes les entrées**

```sql
SELECT * FROM audience;
```

* **Ajouter une entrée**

```sql
INSERT INTO audience (type, name, url, counter) VALUES ('vidééo', 'Nouvelle vidéo', 'https://vidéo.com/xyz', 0);
```

* **Modifier une entrée**

```sql
UPDATE audience SET name = 'Vidéo modifiée' WHERE id = 1;
```

* **Supprimer une entrée**

```sql
DELETE FROM audience WHERE id = 2;
```

* **Quitter SQLite**

```sql
.exit
```

---

# Lancer le projet

```bash
docker compose up -d
```

* API dispo sur : [http://localhost:8585/audience](http://localhost:8585/audience)
* Base dispo via le conteneur `sqlite`

