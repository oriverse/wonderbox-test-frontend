# Test technique Wonderbox

  - **Auteur** : Geoffrey Corme

## Temps écoulé sur les tâches
  - **Préparation du projet :** environ 1h (parcel, postcss, eslint, prettier, plugins, fontawesome, etc.)
  - **Structure HTML :** environ 1h30
  - **CSS :** environ 6h
  - **Javascript :** environ 2h30
  - **Documentation :** 1h

## Stack Technique
  - **Editeur de code :** Visual Studio Code.
  - **Gestion de dépendances (Package Manager) :** Yarn.
  - **Outil de build :** Parcel (très minimaliste et simple à configurer).
  - **Code linter** (pour vérifier les erreurs et garder une homogénéité dans le code) : Eslint + Prettier.
  - **HTML :** HTML5.
  - **CSS :** PostCSS/SugarSS (pour sa simplicité d'utilisation et le fait qu'il n'y ait pas besoin de compiler comme d'autres préprocesseurs).
  - **JS :** Vanilla Javascript, découpage en modules pour plus de lisibilité. Utilisation de Swiper.js, l'un des scripts de carousels les plus complets et efficaces actuellement.
  - **Versionning et outil de dépot :** Git.

## Détail du projet
Le projet ayant été crée avec [**Yarn**](https://yarnpkg.com/), il est d'abord important de bien télécharger les dépendances en utilisant la commande `yarn` à la racine du projet, après l'avoir téléchargé.
De plus, le projet dispose de 2 commandes importantes à utiliser à la racine :
  - `yarn run start` pour lancer le projet sur un environnement de développement qui prendra tous les fichiers compris dans le dossier `src`.
  - `yarn run build` qui compilera le projet et compressera les fichiers dans un dossier `dist` à la racine.
    - <span style="color: red;">**/!\\**</span> La compilation du projet insère tous les fichiers et assets à la racine du dossier de build, c'est un comportement par défault de **Parcel** qui n'a pas de réelle solution à l'heure actuelle.

J'ai choisi le gestionnaire de dépendances [**Parcel**](https://parceljs.org/) car il est très épuré et permet des configurations faciles. De plus, étant donné que j'utilise du [**PostCSS**](https://postcss.org/), **Parcel** est déjà préconfiguré avec des options pratiques comme le nesting ou les custom-properties.\
À la suite de cela, plusieurs autres dépendances pour **PostCSS** ont été ajoutées, tout d'abord le language [**SugarSS**](https://github.com/postcss/sugarss), basé comme du Python par exemple sur les indentations. Pour compléter, j'ai utilisé d'autres dépendances, comme la capacité de mieux gérer les fonts, l'ajout de mixins et même la capacité d'utiliser la méthodologie [**BEM**](https://en.bem.info/methodology/) en complétion de **SugarSS**.

Toujours sur la méthodologie, j'ai choisi l'approche &laquo; **mobile-first** &raquo; car je la trouve mieux pensée pour réécrire le moins de code possible et éviter les conflits entre propriétés CSS.

En ce qui concerne le **Javascript**, je suis parti sur du **Javascript** de base avec des modules pour gérer chacune des différentes fonctionnalités indépendamment les unes des autres, que j'importe ensuite dans un fichier global `main.js` qui lui est appelé par le **HTML**.

Enfin, pour les carousels, j'ai choisi [**Swiper.js**](https://swiperjs.com/) qui est à mon sens le meilleur plugin de création et gestion de carousels à l'heure actuelle. J'ai pu l'utiliser très facilement pour les options qui étaient imposées.\
Je tiens cependant à souligner que le système de *breakpoints* de **Swiper** ne fonctionne pas pour gérer des changements de navigation. Je me suis donc assuré de simplement cacher la pagination/navigation en **CSS** selon le média demandé.
