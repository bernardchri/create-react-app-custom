# create-react-app-custom
custom create-react-app 



```
npx create-react-app htdocs
cd htdocs
npm install react-router-dom axios node-sass env-cmd react-app-polyfill eslint-plugin-react-hooks
touch .env .env_sample .gitignore

```


## Rendre compatible IE 11

```
npm install react-app-polyfill
rm -rf node_module
npm install 
```
**rm -rf node_module** supprimer le dosser, mais surtout supprimer les .cache dans le dossier nod_module

- Ajouter au tout début d'index.js :  
```
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
```

- changer dans package.json : 
 ```
"browserslist": {
	"production": [
	">0.2%",
	"not dead",
	"not op_mini all",
	"ie 11"
	],
	"development": [
	"last 1 chrome version",
	"last 1 firefox version",
	"last 1 safari version",
	"ie 11"
	]
}
```


## Création d'un .env
- installation de env-cmd via npm
- changer dans package.json par ceci 
```
"scripts": {
	"start": "env-cmd react-scripts start",
	"build": "env-cmd react-scripts build",
	"test": "env-cmd react-scripts test",
	"eject": "react-scripts eject"
}
```
- création d'une fichier .env + .env_sample pour modèle
- exemple : 
```
#use = {process.env.REACT_APP_NAME}
REACT_APP_NAME = Nom de mon app
REACT_APP_APP = '../app'
REACT_APP_URL = http://localhost:3000
```

- Pour appeler une des variable dans le code faire {process.env.REACT_APP_NAME}


## Changer le nom du dossier de "build" par autre chose.

reprendre le fichier package.json, et changer la sortie du script build par ceci ( le env-cmd est du à la manip précédente, le nom de fichier ici sera "docs") [https://github.com/facebook/create-react-app/issues/1354]()

```
"build": "env-cmd react-scripts build && rm -rf docs && mv build docs"
```

## .gitignore
ignorer le fichier **.env** le dossier de build également