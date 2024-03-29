# Guide d'installation

## Comment utiliser ce projet

Pour cloner et exécuter cette application, vous aurez besoin de [Git](https://git-scm.com) et de [Node.js](https://nodejs.org/fr/download/) (qui inclut [npm](http://npmjs.com)) installés sur votre ordinateur. À partir de votre ligne de commande :

```bash
# Clonez ce dépôt.
$ git clone https://github.com/Ctrix13/AvengersProject

# Accédez au Backend
$ cd backend

$ npm install

$ npm run start

# Accédez au Front
$ cd front

$ npm install

$ npm run start
```

## API

Cette application utilise l'API Marvel pour obtenir différentes informations des personnage de l'univers Marvel. 
Pour plus d'informations sur l'API Marvel, veuillez consulter leur documentation officielle : [https://developer.marvel.com/](https://developer.marvel.com/).

## Configuration des variables d'environnement (.env)

Pour configurer correctement l'application, vous devez créer un fichier `.env` à la racine du backend. Ce fichier contiendra les variables d'environnement nécessaires pour l'exécution de l'application. Un exemple de .env existe dans le dossier backend.


Assurez-vous de ne jamais partager ce fichier `.env` publiquement, car il contient des informations sensibles telles que les clés d'API et les URL de base.


