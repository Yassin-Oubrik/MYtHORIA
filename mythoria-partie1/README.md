# MYtHORIA# MYTHORIA – Jeu de Cartes à Collectionner

## Présentation du projet

**Mythoria** est un site web interactif dédié à un jeu de cartes digitales à collectionner dans un univers Dark Fantasy.

Le projet permet aux joueurs de découvrir et acheter des boosters, ouvrir des packs pour obtenir des cartes, gérer leur collection dans un grimoire et créer leur propre deck pour préparer leurs futurs combats.

L'objectif est de proposer une expérience utilisateur immersive à travers une interface moderne, responsive et dynamique.

## Technologies utilisées

- HTML5
- CSS3
- Tailwind CSS
- JavaScript ES6
- LocalStorage
- JSON
- Git et GitHub
- Vercel

## Fonctionnalités principales

### 1. Page d'accueil – Home

- Présentation de l'univers Mythoria.
- Section Hero immersive.
- Navigation vers les différentes pages.
- Présentation des catégories de cartes.
- Présentation des boosters disponibles.
- Mise en avant des cartes légendaires.

### 2. Booster Shop – Boutique

La boutique permet aux joueurs de découvrir les différents boosters et de les ajouter à leur panier.

**Types de boosters :**

- Beginner Pack.
- Summoning of the Legends.
- Dark Summoning.
- Lucky Pack.

**Fonctionnalités :**

- Affichage des boosters avec leurs images, descriptions et prix.
- Affichage des catégories et du nombre de cartes.
- Ajout de boosters au panier.
- Gestion des quantités.
- Calcul automatique du total.
- Suppression d'un booster.
- Possibilité de vider le panier.
- Sauvegarde du panier avec LocalStorage.
- Simulation de validation de commande sans paiement réel.

### 3. Opening Chamber – Ouverture des boosters

Cette page permet aux joueurs d'ouvrir leurs boosters et de découvrir les cartes obtenues.

**Fonctionnalités :**

- Accès aux boosters disponibles.
- Ouverture des boosters.
- Révélation des cartes obtenues.
- Affichage des informations des cartes.
- Ajout des cartes obtenues à la collection.

**Remarque :** Le système de probabilités d'obtention des cartes selon le type de booster n'est pas encore implémenté. La sélection aléatoire avec des probabilités spécifiques reste à développer.

### 4. My Grimoire – Ma collection

Le Grimoire représente la collection personnelle du joueur sous la forme d'un ancien livre.

**Fonctionnalités :**

- Affichage des cartes obtenues.
- Présentation des cartes dans un livre illustré.
- Navigation dans la collection.
- Filtrage par type de carte :
  - Serviteurs de la Lumière.
  - Serviteurs des Ténèbres.
  - Minions.
  - Spells.
- Filtrage par rareté.
- Affichage des détails d'une carte au clic.
- Gestion de la collection avec LocalStorage.

### 5. My Deck – Création du deck

Cette page permet au joueur de préparer son deck à partir des cartes disponibles dans son Grimoire.

**Fonctionnalités :**

- Ajouter une carte au deck.
- Retirer une carte du deck.
- Afficher les cartes sélectionnées.
- Afficher le nombre total de cartes.
- Limiter la taille du deck à 20 cartes.
- Empêcher l'ajout lorsque le deck est complet.
- Afficher les statistiques générales du deck.
- Sauvegarder le deck avec LocalStorage.

**Règle de gestion :** Le deck peut contenir une seule copie de chaque carte unique, tandis que la collection peut contenir plusieurs exemplaires.

## Architecture du projet

Le projet est organisé en deux parties principales :

```text
MYTHORIA/
│
├── mythoria-partie1/
│   ├── index.html
│   ├── shop.html
│   ├── opening.html
│   ├── grimoire.html
│   ├── deck.html
│   │
│   ├── index.js
│   ├── shop.js
│   ├── opening.js
│   ├── grimoire.js
│   ├── deck.js
│   │
│   ├── README.md
│   └── assets/
│
└── mythoria-partie2/
    └── ...
```

## Gestion des données

Le projet utilise JavaScript et LocalStorage pour gérer les informations du joueur.

Les données conservées peuvent inclure :

- Les boosters disponibles.
- Le contenu du panier.
- Les cartes obtenues.
- La collection du joueur.
- Le deck sélectionné.

LocalStorage permet de conserver les données après l'actualisation de la page.

## Installation et lancement

### 1. Cloner le projet

```bash
git clone URL_DU_DEPOT
```

### 2. Accéder au dossier

```bash
cd MYTHORIA/mythoria-partie1
```

### 3. Ouvrir le projet

Ouvrir le dossier avec Visual Studio Code.

### 4. Lancer l'application

Utiliser l'extension **Live Server** pour lancer le fichier `index.html`.

## Fonctionnalités bonus

Les fonctionnalités bonus suivantes ne sont pas encore implémentées :

- [ ] Page détaillée pour chaque carte.
- [ ] Marché secondaire simulé pour acheter et vendre des cartes individuelles.
- [ ] Effets visuels distincts selon la rareté.
- [ ] Animations holographiques au survol.
- [ ] Historique des boosters ouverts.
- [ ] Compteur des cartes découvertes par rapport au catalogue total.
- [ ] Reçu de commande imprimable.
- [ ] Système de probabilités d'obtention des cartes selon le type de booster.

## Objectifs du projet

- Concevoir une interface web moderne et responsive.
- Manipuler dynamiquement les éléments du DOM.
- Gérer les événements et les interactions utilisateur.
- Utiliser JavaScript pour gérer les fonctionnalités du site.
- Manipuler et sauvegarder les données avec LocalStorage.
- Appliquer les bonnes pratiques du développement Front-end.
- Utiliser Git et GitHub pour le suivi du projet.

## Auteur

**Yassine Oubrik**

Projet réalisé dans le cadre de la formation Développement Web et Web Mobile.