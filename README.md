# 🐠 Bio Sainte-Rose - Application de Biodiversité Marine

Application web Flask pour la gestion et la consultation de fiches descriptives de biodiversité marine.

## 📋 Prérequis

- Python 3.8 ou supérieur
- Un fichier Excel `donnees.xlsx` avec la structure suivante
- Un répertoire `images/` contenant vos photos

## 📊 Structure du fichier Excel (donnees.xlsx)

Le fichier Excel doit contenir les colonnes suivantes dans cet ordre :

| ID | nom | catégorie | especes | image | description |
|----|-----|-----------|---------|-------|-------------|
| 1  | Poisson-perroquet | Poissons | Scarus vetula | perroquet.jpg | Description du poisson |
| 2  | Tortue verte | Reptiles | Chelonia mydas | tortue.jpg | Description de la tortue |

### Colonnes :
- **ID** : Identifiant unique (nombre entier)
- **nom** : Nom commun de l'espèce
- **catégorie** : Catégorie (Poissons, Coraux, Mollusques, etc.)
- **especes** : Nom scientifique de l'espèce
- **image** : Nom du fichier image (doit correspondre au fichier dans le dossier `images/`)
- **description** : Description de l'espèce (peut être vide initialement)

## 🚀 Installation

### 1. Installer Python
Si ce n'est pas déjà fait, téléchargez Python depuis [python.org](https://www.python.org/downloads/)

### 2. Installer les dépendances
Ouvrez un terminal dans le dossier du projet et exécutez :

```bash
pip install -r requirements.txt
```

### 3. Vérifier la structure des fichiers
Assurez-vous d'avoir :
```
Bio_Ste_Rose/
├── app.py
├── donnees.xlsx          # Votre fichier Excel
├── requirements.txt
├── images/               # Vos photos
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── ...
├── templates/
│   ├── index.html
│   ├── especes.html
│   └── fiche.html
└── static/
    ├── css/
    │   └── style.css
    └── js/
        └── script.js
```

## ▶️ Lancement de l'application

### Sur votre ordinateur :
```bash
python app.py
```

L'application sera accessible à l'adresse : **http://localhost:5000**

### Accès depuis votre mobile :

1. **Sur votre ordinateur**, trouvez votre adresse IP locale :
   - Windows : `ipconfig` (cherchez "Adresse IPv4")
   - Mac/Linux : `ifconfig` ou `ip addr`

2. **Sur votre mobile** (connecté au même réseau Wi-Fi) :
   - Accédez à : **http://[VOTRE_IP]:5000**
   - Exemple : `http://192.168.1.100:5000`

3. **Astuce** : Ajoutez cette adresse aux favoris de votre navigateur mobile !

## 🎯 Utilisation

### Navigation
1. **Page d'accueil** : Affiche toutes les catégories disponibles
2. **Page catégorie** : Liste des espèces dans une catégorie
3. **Fiche espèce** : Détails complets avec possibilité de modifier la description

### Modification des descriptions
1. Cliquez sur une espèce pour voir sa fiche
2. Modifiez la description dans la zone de texte
3. Cliquez sur "💾 Enregistrer"
4. Les modifications sont sauvegardées dans le fichier Excel

## 🔧 Configuration

### Changer le port
Dans `app.py`, ligne finale, modifiez :
```python
app.run(host='0.0.0.0', port=5000, debug=True)
```

### Mode production
Pour un usage sans debugging :
```python
app.run(host='0.0.0.0', port=5000, debug=False)
```

## 📱 Optimisations mobiles

L'application est entièrement responsive et optimisée pour :
- Smartphones (iPhone, Android)
- Tablettes
- Ordinateurs de bureau

## 🐛 Dépannage

### L'application ne démarre pas
- Vérifiez que Python est installé : `python --version`
- Vérifiez que les dépendances sont installées : `pip list`

### Les images ne s'affichent pas
- Vérifiez que les noms de fichiers dans Excel correspondent exactement aux fichiers dans `images/`
- Les noms sont sensibles à la casse (majuscules/minuscules)

### Erreur "Le fichier donnees.xlsx n'existe pas"
- Créez le fichier Excel avec la structure indiquée ci-dessus
- Placez-le à la racine du projet (même dossier que `app.py`)

### Impossible d'accéder depuis le mobile
- Vérifiez que l'ordinateur et le mobile sont sur le même réseau Wi-Fi
- Vérifiez que le pare-feu n'bloque pas le port 5000
- Utilisez l'adresse IP locale (pas localhost)

## 📝 Notes

- **Sauvegarde** : Il est recommandé de faire des sauvegardes régulières de votre fichier `donnees.xlsx`
- **Images** : Utilisez des formats JPEG ou PNG. Optimisez la taille des images pour de meilleures performances
- **Encodage** : Le fichier Excel doit être au format `.xlsx` (pas `.xls`)

## 🎨 Personnalisation

### Couleurs
Modifiez les variables CSS dans `static/css/style.css` :
```css
:root {
    --primary-color: #0077be;
    --secondary-color: #00a8e8;
    /* ... */
}
```

### Logo/Titre
Modifiez dans `templates/index.html` :
```html
<h1>🐠 Biodiversité Marine</h1>
<p class="subtitle">Sainte-Rose, Guadeloupe</p>
```

## 📞 Support

Pour toute question ou problème, vérifiez :
1. Que Python 3.8+ est installé
2. Que toutes les dépendances sont installées
3. Que la structure du fichier Excel est correcte
4. Que les chemins des images correspondent

## 🔐 Sécurité

⚠️ **Important** : Cette application est conçue pour un usage personnel/local.  
Pour une utilisation en production sur Internet, des mesures de sécurité supplémentaires sont nécessaires.

## 📄 Licence

Projet personnel - Bio Sainte-Rose

---

**Bon usage ! 🌊🐟🐠**
