# Utilise Node.js 22 officiel
FROM node:22

# Créer et définir le répertoire de travail
WORKDIR /usr/src/app

# Copier package.json et installer dépendances
COPY package*.json ./
RUN npm install

# Copier le reste du projet
COPY . .

# Exposer le port
EXPOSE 3000

# Commande de démarrage
CMD ["node", "app.js"]
