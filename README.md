# 🤖 Sara Version FGZ - Lakay AI

<div align="center">

![Sara AI Logo](https://img.shields.io/badge/Sara-AI%20Assistant-blue?style=for-the-badge&logo=react)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel)

**Assistant IA intelligent avec intégrations Gmail, Outlook, SharePoint et plus**

[🚀 Demo Live](https://sara-version-fgz.vercel.app) | [📖 Documentation](#features) | [🛠 Installation](#installation)

</div>

## ✨ Fonctionnalités

### 🔗 Intégrations MCP
- **📧 Gmail** - Envoi, lecture, gestion des emails
- **📬 Outlook** - Calendrier, contacts, messages
- **📁 SharePoint** - Gestion documents et listes
- **✅ Google Tasks** - Gestion des tâches et listes
- **🔍 Search** - Recherche multi-sources (Google, DuckDuckGo, Tavily)
- **💼 LinkedIn** - Création posts, infos entreprises
- **🎥 YouTube** - Gestion contenu vidéo

### 🎨 Interface Utilisateur
- **🎨 Canvas Interactif** - Interface visuelle avec CopilotKit
- **🎤 Reconnaissance Vocale** - Commandes vocales intégrées
- **👤 Authentification** - Système sécurisé avec Supabase
- **📱 Design Responsif** - Interface moderne et adaptative
- **🌙 Mode Sombre** - Expérience utilisateur optimisée

### 🛠 Fonctionnalités Techniques
- **⚡ Next.js 15** - Framework React performant
- **🔧 TypeScript** - Développement type-safe
- **🎯 CopilotKit** - IA conversationnelle intégrée
- **🔐 Variables d'environnement** - Configuration sécurisée
- **📊 Debugging** - Outils de dépannage intégrés

## 🚀 Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn
- Compte GitHub (pour déploiement)

### 1. Cloner le repository
```bash
git clone https://github.com/Bellamy509/Sara-Version-FGZ.git
cd Sara-Version-FGZ
```

### 2. Installer les dépendances
```bash
npm install
# ou
yarn install
```

### 3. Configuration environnement
```bash
cp env.example .env.local
```

Configurez vos clés API dans `.env.local` :
```env
# Choisissez l'une des options :
OPENAI_API_KEY=your_openai_api_key
# OU
NEXT_PUBLIC_COPILOT_CLOUD_API_KEY=your_copilot_cloud_key
```

### 4. Lancer en développement
```bash
npm run dev
```

Visitez [http://localhost:3000](http://localhost:3000)

## 🌐 Déploiement Vercel

### Automatique (Recommandé)
1. Fork ce repository
2. Connectez-vous à [vercel.com](https://vercel.com)
3. Importez votre fork
4. Configurez les variables d'environnement
5. Déployez !

### Via CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

## 📋 Structure du Projet

```
Sara-Version-FGZ/
├── src/
│   ├── app/                  # Pages Next.js App Router
│   │   ├── api/             # API routes
│   │   ├── canvas/          # Interface Canvas
│   │   └── login/           # Authentification
│   ├── components/          # Composants React
│   │   ├── mcp-config-modal.tsx  # Configuration MCP
│   │   ├── canvas.tsx       # Interface Canvas
│   │   └── chat-window.tsx  # Chat IA
│   ├── hooks/              # Custom hooks
│   └── lib/                # Utilitaires
├── vercel.json             # Configuration Vercel
├── .vercelignore          # Fichiers ignorés
└── package.json           # Dépendances
```

## 🔧 Configuration MCP

### Services Disponibles

| Service | Description | Actions |
|---------|-------------|---------|
| 📧 **Gmail** | Gestion emails | Envoi, lecture, réponse, contacts |
| 📬 **Outlook** | Calendrier & emails | Événements, contacts, drafts |
| 📁 **SharePoint** | Documents | Dossiers, listes, utilisateurs |
| ✅ **Google Tasks** | Tâches | CRUD tâches et listes |
| 🔍 **Search** | Recherche | Multi-sources, actualités, cartes |
| 💼 **LinkedIn** | Réseau pro | Posts, infos entreprises |
| 🎥 **YouTube** | Vidéos | Sous-titres, vignettes |

### Gestion des Identifiants
- **Customer ID** : Identifiant unique utilisateur
- **Agent ID** : Identifiant de l'agent IA
- **Régénération** : Bouton pour créer de nouveaux IDs

## 🛠 Dépannage

### Gmail ne se connecte pas ?
1. Cliquez sur "Régénérer Gmail"
2. Utilisez le bouton test (🔍)
3. Vérifiez la console (F12)

### Erreurs de build ?
```bash
npm run build
# Vérifier les erreurs TypeScript
```

### Variables d'environnement manquantes ?
- Vérifiez `.env.local`
- Configurez sur Vercel Dashboard

## 📚 Technologies Utilisées

- **Framework** : Next.js 15
- **Language** : TypeScript
- **UI** : React, Tailwind CSS, Lucide Icons
- **IA** : CopilotKit, OpenAI
- **Auth** : Supabase
- **Déploiement** : Vercel
- **MCP** : Composio Integrations

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir `LICENSE` pour plus d'informations.

## 👨‍💻 Auteur

**Bellamy509** - [GitHub](https://github.com/Bellamy509)

---

<div align="center">

**⭐ N'oubliez pas de donner une étoile si ce projet vous a aidé ! ⭐**

Made with ❤️ using Next.js and CopilotKit

</div>
