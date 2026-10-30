# MYTHORIA ARENA

## Présentation du projet

Mythoria Arena est la deuxième partie du projet Mythoria. Il s'agit d'un jeu de cartes stratégique dans lequel le joueur utilise les cartes de sa collection et le deck créé dans la première partie pour affronter un adversaire contrôlé par une intelligence artificielle simple.

Le jeu se déroule localement, sans mode multijoueur en ligne.

## Technologies utilisées

- HTML5
- CSS3
- Tailwind CSS
- JavaScript ES6
- JSON
- Git et GitHub

## Fonctionnalités principales

### 1. Interface de combat

- Zone de l'adversaire.
- Champ de bataille avec les emplacements des cartes.
- Main du joueur.
- Zone du deck.
- Affichage des points de vie.
- Affichage du tour actuel.
- Historique des actions.
- Bouton pour terminer le tour.

### 2. Initialisation de la partie

- Détermination aléatoire du premier joueur.
- Choix du camp : Lumière ou Ténèbres.
- Attribution automatique du camp opposé à l'adversaire.
- Initialisation des points de vie à 3000 HP.
- Distribution de 5 cartes à chaque joueur.

### 3. Gestion des cartes

- Chargement des données des cartes depuis un fichier JSON.
- Récupération du deck du joueur créé dans la première partie.
- Gestion de la pioche.
- Invocation des cartes depuis la main vers le champ de bataille.
- Limitation de la main à 5 cartes.

### 4. Compatibilité des factions

- Possibilité d'utiliser les cartes des deux factions.
- Conservation des statistiques normales pour les cartes de la même faction.
- Application d'une pénalité de 20 % sur l'attaque et les points de vie effectifs des cartes de la faction opposée.
- Conservation des statistiques originales dans le Grimoire.

### 5. Système de combat

- Sélection des créatures attaquantes et des cibles.
- Calcul des dégâts.
- Mise à jour des points de vie.
- Destruction des créatures dont les HP atteignent zéro.
- Possibilité d'attaquer directement l'adversaire lorsqu'aucune créature adverse ne protège son terrain.
- Une seule attaque par créature et par tour.

### 6. Gestion des tours et de l'adversaire

- Alternance entre le joueur et l'adversaire.
- Gestion des actions autorisées.
- Réinitialisation des possibilités d'attaque au début d'un nouveau tour.
- Actions automatiques de l'adversaire.

### 7. Fin de partie

- Détection de la victoire et de la défaite.
- Arrêt du combat lorsque les conditions de fin sont atteintes.
- Affichage du résultat final.

## Architecture du projet

Le projet est organisé selon la structure suivante :

```text
mythoria-partie2/
│
├── arena.html
├── cards.js
├── cards.json
├── combat.js
├── main.js
├── opponent.js
├── state.js
├── turns.js
├── ui.js
├── utils.js
├── README.md
│
├── assets/
│   ├── images/
│   ├── sounds/
│   └── styles/
│       └── style.css
│
└── node_modules/
```

## Rôle des fichiers JavaScript

| Fichier | Description |
|---|---|
| `cards.js` | Gestion des cartes, de la main et du deck |
| `combat.js` | Gestion des attaques, des dégâts et des points de vie |
| `main.js` | Point d'entrée de l'application |
| `opponent.js` | Logique de l'adversaire |
| `state.js` | Gestion de l'état du jeu et du LocalStorage |
| `turns.js` | Gestion des tours et du lancer de pièce |
| `ui.js` | Gestion de l'affichage de l'interface |
| `utils.js` | Fonctions utilitaires |
| `cards.json` | Données des cartes |

## Installation et lancement

### 1. Cloner le projet

```bash
git clone URL_DU_DEPOT
```

### 2. Accéder au dossier

```bash
cd mythoria-partie2
```

### 3. Ouvrir le projet

Ouvrir le dossier avec Visual Studio Code.

### 4. Lancer l'application

Utiliser l'extension **Live Server** pour ouvrir `arena.html`.

> Remarque : un serveur local est nécessaire pour charger correctement les fichiers JSON et les modules JavaScript ES6.

## Modularisation JavaScript ES6

Le code JavaScript est séparé en plusieurs fichiers afin d'organiser les responsabilités du projet.

Les modules utilisent les instructions `import` et `export`.

La balise script utilise `type="module"` :

```html
<script type="module" src="./main.js"></script>
```

Les modules obligatoires du brief sont :

- `ui.js` : fonctions `renderList()` et `clearForm()`.
- `state.js` : fonctions `addItem()`, `loadItems()` et `saveItems()`.
- `utils.js` : fonctions `formatDate()` et `generateId()`.

## Fonctionnalités bonus

Les fonctionnalités bonus ne sont pas encore implémentées.

- [ ] Ajouter des animations de dégâts, d'invocation et de destruction.
- [ ] Améliorer la stratégie de l'intelligence artificielle.
- [ ] Ajouter une condition de victoire alternative lorsqu'un joueur ne peut plus piocher.
- [ ] Améliorer l'historique de combat et l'écran des résultats.

## Objectifs du projet

- Développer une interface web interactive et responsive.
- Manipuler dynamiquement les éléments du DOM.
- Gérer les événements et les interactions utilisateur.
- Organiser le code avec les modules JavaScript ES6.
- Appliquer les bonnes pratiques du développement Front-end.
- Utiliser Git et GitHub pour le suivi du projet.

## Auteur

**Yassine Oubrik**

Projet réalisé dans le cadre de la formation Développement Web et Web Mobile.