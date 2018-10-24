# WebVR

## Présentation
Ce dépôt est un fork de proposition d'architecture du projet WebVR.

## Prérequis
- [NodeJS](https://nodejs.org/en/download/)

## Installation
Assurez-vous de respecter les prérequis avant d'entreprendre l'installation.

Pour installer le projet, il suffit de taper la commande suivante
et de suivre les différentes étapes des installateurs.
```bash
npm run install-dependencies
```

## Commandes
_Il existe plusieurs commandes pour lancer la compilation du projet._

- Permet de compiler tous les fichiers et de watch ces derniers :
lorsqu'un fichier est modifié, le script se chargera de relancer la
compilation automatiquement.
```bash
npm run dev
```

- Permet de compiler tous les fichiers, de watch ces derniers et d'ouvrir un serveur
 à l'adresse suivante `http://localhost:9000/`.
La compilation se fait automatiquement lorsqu'un fichier du projet est modifié. De plus,
la page se rafraichit également automatiquement.
```bash
npm run dev-server
```

- Permet de compiler tous les fichiers et de les optimiser.
Cette commande est à lancer **en production**.
```bash
npm run build
```

## Architecture
Le projet est composé de plusieurs dossiers regroupant les sources du projets.

- `assets/`: Regroupe tous les fichiers sources de l'application (scripts, styles...).
    - `js/`: Contient tous les fichiers scripts de l'application.
        - `Controller/`: Contient les controlleurs de l'application. Un controlleur est créé pour chaque
        objet de la scene.
        - `Core/`: Comporte toutes les classes nécessaires au fonctionnement de base de l'application
        tels que les loaders d'objets, les fichiers de déclarations...
        - `Domain/`: Regroupe les classes correspondant au corps de métier tels que les
        objets (ex: `Room` pour une pièce...).
        - `Factory/`: Contient toutes les factories de l'application. Ce sont des classes
        permettant l'instanciation d'autres classes.
        - `Models/`: Comporte tous les objets 3D et textures du projet.
        Chaque objet et ses textures sont regroupés dans un dossier (ex: `Personnage1/Personnage1.obj` et `Personnage1/Personnage1.mtl`).
        **Attention: le fichier `.obj` et le fichier `.mtl` doivent avoir exactement le même
        nom de fichier pour être chargé.**
    - `sass/`: Contient tous les fichiers de style de l'application.
- `node_modules/`: Est un dossier généré par Yarn/NPM **a ne surtout pas modifier**. Il contient toutes
les dépendances JavaScript du projet.
- `public/`: Comme sur Symfony, le dossier public contient le point d'entrée de l'application (_index.html_)
ainsi que tous les fichiers finaux du projet (fichiers traités et optimisés).
- `webpack/`: Regroupe toute la configuration de Webpack.
