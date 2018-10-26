# WebVR
## Présentation
Ce dépôt est un fork pour la proposition d'architecture du projet WebVR.

## Prérequis
### Softwares
Voici la liste des logiciels à installer au préalable :
- [NodeJS](https://nodejs.org/en/download/)

### A noter
- Il est important de **ne jamais modifier manuellement** les fichiers suivants :
    - `yarn.lock`
    - Les dépendances du fichier `package.json`
    - Les fichiers contenu dans le dossier `public/`, sauf le fichier `index.html`
    - Les fichiers contenu dans le dossier `node_modules/`
- Assurez-vous que le fichier `.env` possède **toujours** le même nombre de clé que le fichier
`.env.dist`.
- Sur ce projet, nous n'utilisons pas `NPM`, mais bien `Yarn`. Pour les commmandes que vous trouverez
sur Internet, il est nécessaire de les transformer en commande [`Yarn`](https://yarnpkg.com/lang/en/docs/).

## Installation
Assurez-vous de respecter les prérequis avant d'entreprendre l'installation.

Pour installer le projet, il suffit de taper la commande suivante
et de suivre les différentes étapes des installateurs.
```bash
npm run install-dependencies
```

Assurez-vous de posséder le fichier `.env` à la racine du projet. S'il n'existe pas,
il suffit d'exécuter la commande suivante.
```bash
cp .env.dist .env
```

## Commandes
_Il existe plusieurs commandes pour lancer la compilation du projet._

- La commande suivante permet de compiler tous les fichiers et de watch ces derniers :
lorsqu'un fichier est modifié, le script se chargera de relancer la
compilation automatiquement.
```bash
yarn run dev
```

- La commande suivante permet de compiler tous les fichiers, de watch ces derniers et d'ouvrir un serveur
 à l'adresse suivante [http://localhost:9000/](http://localhost:9000/).
La compilation se fait automatiquement lorsqu'un fichier du projet est modifié. De plus,
la page se rafraichit également automatiquement.
```bash
yarn run dev-server
```

- La commande suivante permet de compiler tous les fichiers et de les optimises.
Cette commande est à lancer **en production**.
```bash
yarn run build
```

## Architecture
Le projet est composé de plusieurs dossiers regroupant les sources du projets.

- `assets/`: Regroupe tous les fichiers sources de l'application (scripts, styles, objects 3D, textures...).
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
        **Attention: les fichiers `.obj` et `.mtl` doivent avoir exactement le même
        nom pour être chargés.**
    - `sass/`: Contient tous les fichiers de style de l'application.
- `node_modules/`: Est un dossier généré par Yarn/NPM **a ne surtout pas modifier**. Il contient toutes
les dépendances JavaScript du projet.
- `public/`: Comme sur Symfony, le dossier public contient le point d'entrée de l'application (_index.html_)
ainsi que tous les fichiers finaux du projet (fichiers traités et optimisés).
- `webpack/`: Regroupe toute la configuration de Webpack.

## Technologies utilisées
- Styles
    - [SASS/SCSS](https://sass-lang.com/)
- Scripts
    - [TypeScript](https://tarh.developpez.com/articles/typescript/pourquoi-utiliser-typescript/)
    ([ES6](https://www.wanadev.fr/21-introduction-a-ecmascript-6-le-javascript-de-demain/) + typage)
    - [ThreeJS](https://threejs.org/)
    - [TypeScript IOC](https://github.com/thiagobustamante/typescript-ioc)
- Module Bundler
    - [Webpack 4](https://webpack.js.org/)
- Package Manager
    - [Yarn](https://yarnpkg.com/lang/en/)