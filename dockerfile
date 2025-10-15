# Dockerfile
FROM node:20

# Crée un dossier pour l'app
WORKDIR /app

# Copie package.json / lock puis installe
COPY package*.json ./
RUN npm ci --omit=dev

# Copie le reste du code
COPY . .

# Expose le port de l'API
EXPOSE 3000

# Lance l'app
CMD ["node", "app.js"]