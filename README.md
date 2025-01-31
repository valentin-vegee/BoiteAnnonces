📄 README.md
md
Copier
Modifier
# 📢 BoiteAnnonces - API Node.js

🚀 **BoiteAnnonces** est une plateforme permettant aux utilisateurs de publier des annonces sur leurs pages personnelles et de consulter celles des autres utilisateurs.  
Ce projet contient **l'API Backend** avec **Node.js, Express et MongoDB**, intégrant l'authentification **JWT & OAuth (Google, GitHub)**, ainsi que des fonctionnalités avancées comme **la gestion du cache et la limitation des requêtes**.

---

## 📌 **Table des matières**
- [📢 BoiteAnnonces - API Node.js](#-boiteannonces---api-nodejs)
- [🚀 Fonctionnalités](#-fonctionnalités)
- [🛠️ Installation & Configuration](#️-installation--configuration)
- [🔑 Authentification](#-authentification)
- [📡 API Endpoints](#-api-endpoints)
- [📝 Technologies utilisées](#-technologies-utilisées)
- [📜 Licence](#-licence)

---

## 🚀 **Fonctionnalités**
- ✅ **Inscription & Connexion des utilisateurs**
- 🔐 **Authentification via JWT**
- 🔗 **Connexion OAuth (Google, GitHub)**
- 📢 **Création, Modification, Suppression d'annonces**
- 📄 **Consultation des annonces**
- ⚡ **Limitation des requêtes pour éviter le spam**
- 🔄 **Gestion des sessions & Cache**


---

## 🛠️ **Installation & Configuration**
### 1️⃣ **Cloner le projet**
```sh
git clone https://github.com/toncompte/BoiteAnnonces.git
cd BoiteAnnonces
2️⃣ Installer les dépendances
sh
Copier
Modifier
npm install
3️⃣ Configurer .env
Crée un fichier .env et ajoute tes variables :

env
Copier
Modifier
# 🚀 Configuration du projet
PORT=5000
MONGO_URI=mongodb://localhost:27017/BoiteAnnonces

# 🔑 Clé secrète JWT
JWT_SECRET=supersecret

# 🌍 OAuth Google
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URI=http://localhost:5000/auth/google/callback

# 🐱 OAuth GitHub
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
4️⃣ Démarrer le serveur
sh
Copier
Modifier
node server.js
✅ L'API est maintenant accessible sur http://localhost:5000

🔑 Authentification
L'authentification supporte JWT & OAuth.

🔹 Inscription (JWT)
POST /api/auth/register

json
Copier
Modifier
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "johndoe@example.com",
  "password": "password123"
}
🔹 Connexion (JWT)
POST /api/auth/login

json
Copier
Modifier
{
  "email": "johndoe@example.com",
  "password": "password123"
}
🔹 Connexion avec Google
GET /auth/google

🔹 Connexion avec GitHub
GET /auth/github

🔹 Déconnexion
POST /api/auth/logout

📡 API Endpoints
Méthode	Route	Description	Auth
POST	/api/auth/register	Inscription d'un utilisateur	❌
POST	/api/auth/login	Connexion et récupération du token JWT	❌
POST	/api/auth/logout	Déconnexion	✅
GET	/auth/google	Connexion via Google OAuth	❌
GET	/auth/github	Connexion via GitHub OAuth	❌
POST	/api/annonces	Créer une annonce	✅
GET	/api/annonces	Récupérer toutes les annonces	❌
GET	/api/annonces/:id	Récupérer une annonce par ID	❌
PUT	/api/annonces/:id	Modifier une annonce	✅
DELETE	/api/annonces/:id	Supprimer une annonce	✅
📝 Technologies utilisées
🟢 Node.js - Serveur backend
⚡ Express.js - Framework pour l’API REST
🛢 MongoDB & Mongoose - Base de données NoSQL
🔐 JWT - Authentification sécurisée
🔗 OAuth (Google, GitHub) - Connexion via services externes
🛡 Rate-Limiting - Protection contre les abus
📜 Licence


📌 Auteur : vegee valentin
