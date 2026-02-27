# 🚀 Guide de Déploiement sur Render

Ce guide vous explique comment déployer votre application Bio Sainte-Rose sur Render.

## 📋 Prérequis

1. Un compte GitHub (gratuit)
2. Un compte Render (gratuit) : [https://render.com](https://render.com)
3. Git installé sur votre ordinateur

## 🔧 Étape 1 : Préparer votre code pour Git

### 1.1 Initialiser Git (si pas déjà fait)

```bash
cd "B:\Action Programation\Bio_Ste_Rose"
git init
```

### 1.2 Créer un dépôt sur GitHub

1. Allez sur [github.com](https://github.com)
2. Cliquez sur "New repository"
3. Nom : `bio-ste-rose`
4. Choisissez "Private" ou "Public"
5. Ne cochez RIEN d'autre
6. Cliquez "Create repository"

### 1.3 Pousser votre code sur GitHub

```bash
# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - Application Bio Sainte-Rose"

# Lier au dépôt GitHub (remplacez VOTRE_USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/VOTRE_USERNAME/bio-ste-rose.git

# Pousser le code
git branch -M main
git push -u origin main
```

## 🌐 Étape 2 : Déployer sur Render

### 2.1 Créer un nouveau Web Service

1. Connectez-vous sur [render.com](https://render.com)
2. Cliquez sur "New +" puis "Web Service"
3. Connectez votre compte GitHub si ce n'est pas déjà fait
4. Sélectionnez le dépôt `bio-ste-rose`

### 2.2 Configuration du service

Remplissez les champs suivants :

| Champ | Valeur |
|-------|--------|
| **Name** | `bio-ste-rose` (ou votre choix) |
| **Region** | `Frankfurt (EU Central)` (le plus proche) |
| **Branch** | `main` |
| **Root Directory** | (laissez vide) |
| **Runtime** | `Python 3` |
| **Build Command** | `pip install -r requirements.txt` |
| **Start Command** | `gunicorn app:app` |
| **Instance Type** | `Free` |

### 2.3 Variables d'environnement (optionnel)

Cliquez sur "Advanced" puis "Add Environment Variable" :

| Key | Value |
|-----|-------|
| `SECRET_KEY` | (cliquez "Generate" pour créer une clé aléatoire) |
| `PYTHON_VERSION` | `3.11.0` |

### 2.4 Créer le service

Cliquez sur "Create Web Service"

Render va :
1. Cloner votre code
2. Installer les dépendances
3. Lancer l'application

⏱️ Cela prend environ 2-3 minutes.

## ✅ Étape 3 : Accéder à votre application

Une fois le déploiement terminé, votre application sera accessible à :

```
https://bio-ste-rose.onrender.com
```

(Le nom exact dépend du nom que vous avez choisi)

## 📂 Étape 4 : Gérer vos fichiers

### 4.1 Fichier Excel et Images

**⚠️ IMPORTANT** : Render utilise un système de fichiers éphémère. Les modifications du fichier Excel seront perdues lors du redémarrage !

**Solutions** :

#### Option A : Données initiales uniquement (lecture seule)
- Ajoutez `donnees.xlsx` et le dossier `images/` à votre Git
- Parfait pour consultation uniquement
- Les modifications seront temporaires

#### Option B : Base de données (recommandé pour production)
- Migrez vers PostgreSQL (gratuit sur Render)
- Nécessite des modifications du code
- Les données sont persistantes

#### Option C : Stockage externe
- Utilisez Google Sheets API
- Stockez les images sur Cloudinary ou AWS S3

### 4.2 Ajouter le fichier Excel à Git

Si vous choisissez l'option A :

```bash
# Modifier .gitignore pour inclure le fichier Excel
# Supprimez ou commentez la ligne "donnees.xlsx"

# Ajouter les fichiers
git add donnees.xlsx images/
git commit -m "Ajout des données et images"
git push
```

Render va automatiquement redéployer.

## 🔄 Mises à jour

Pour mettre à jour votre application en ligne :

```bash
# Faites vos modifications localement
# Puis :
git add .
git commit -m "Description de vos modifications"
git push
```

Render détecte automatiquement les changements et redéploie.

## 🐛 Dépannage

### L'application ne démarre pas

Consultez les logs dans Render :
1. Allez dans votre service
2. Cliquez sur "Logs"
3. Cherchez les erreurs en rouge

### Erreur "Module not found"

Vérifiez que `requirements.txt` contient toutes les dépendances.

### Les images ne s'affichent pas

- Vérifiez que le dossier `images/` est dans Git
- Vérifiez les chemins dans le code

### Le fichier Excel ne se met pas à jour

C'est normal avec Render Free. Utilisez une base de données ou un stockage externe.

## 💡 Conseils

1. **Sauvegarde** : Faites toujours une sauvegarde locale de vos données
2. **Logs** : Consultez régulièrement les logs Render
3. **Veille** : Le plan gratuit met l'app en veille après 15 min d'inactivité (premier accès = 30 sec de chargement)
4. **HTTPS** : Render fournit automatiquement un certificat SSL

## 📞 Support

- Documentation Render : [https://render.com/docs](https://render.com/docs)
- Community : [https://community.render.com](https://community.render.com)

---

## 🎯 Résumé rapide

```bash
# 1. Préparer Git
git init
git add .
git commit -m "Initial commit"

# 2. Pousser sur GitHub
git remote add origin https://github.com/VOTRE_USERNAME/bio-ste-rose.git
git push -u origin main

# 3. Sur Render.com
# - New Web Service
# - Sélectionner votre dépôt
# - Build: pip install -r requirements.txt
# - Start: gunicorn app:app
# - Déployer !
```

Votre application sera en ligne en quelques minutes ! 🎉
