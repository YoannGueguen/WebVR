# WebVR

## Présentation
Ce dépôt est un fork de proposition d'architecture du projet WebVR.

## Prérequis
- NodeJS

## Installation
Assurez-vous de respecter les prérequis avant d'entreprendre l'installation.

Pour installer le projet, il suffit de taper la commande suivante
et de suivre les différentes étapes des installateurs :
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
la page se raffraichit également automatiquement.
```bash
npm run dev-server
```

- Permet de compiler tous les fichiers et de les optimiser.
Cette commande est à lancer **en production**.
```bash
npm run build
```
