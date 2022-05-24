# Le DOM en JavaScript

Le DOM est un **arbre** de **noeuds**. Chaque noeud est défini par un **type** et une **liste de propriétés**. Les propriétés sont des **valeurs**. Les types de noeuds sont définis par des **noms**. Les noms de noeuds sont des **identifiants**. Les identifiants sont des **chaines de caractères**, comme `div`, `p`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `a`, `img`, `span`, `ul`, `li`, `ol`, `table`, `tr`, `td`, `th`, `thead`, `tbody`, `tfoot`, `caption`, `colgroup`, `col`, `form`, `input`, `textarea`, `select`, `option`, `button`, `label`, `fieldset`, `legend`, `script`, `style`, `link`, `meta`, `title`, `head`, `body`, `html`.

C'est par le biais du DOM qu'on manipule les pages web. On peut créer des noeuds, les ajouter à un noeud parent, les manipuler, etc. Pour créer un noeud, on utilise la méthode `document.createElement()`.

```javascript
const p = document.createElement('p')
```

Il est également possbile de cibler des balises HTML par leur identifiant, leur classe ou leur id.

```javascript
let p = document.querySelector('p')
let container = document.querySelector('.container')
let logo = document.querySelector('#logo')
```

Noter l'utilisation de la méthode `querySelector` au lieu de `getElementById` car celle-ci permet également la sélection d'un élément avec un `id`, mais aussi d'une `class` ou encore d'une balise HTML.  

La variante `querySelectorAll()` retourne un tableau de noeuds. Elle permet de sélectionner plusieurs éléments.

```javascript
let menuItems = document.querySelectorAll('.menu li a')
```

Ici on sélectionne tous les éléments `a` qui sont dans les éléments `li` qui sont dans les éléments `ul` qui sont dans la balise `.menu`. En effet il est possible de cibler des éléments de plusieurs niveaux comme en CSS.

Dans l'exemple suivant, nous allons sélectionner un élément h1 et lui ajouter un attribut `class` avec la valeur `title`.

```javascript
let h1 = document.querySelector('h1')
h1.setAttribute('class', 'title')
```

Ici nous avons utilisé la méthode `setAttribute` pour ajouter un attribut `class` à l'élément h1. Dans le cas d'un attribut `class`, il est possible d'ajouter plusieurs classes en les séparant par des espaces.

```javascript
h1.setAttribute('class', 'title big')
```

Plus communément, on utilise la méthode `classList` pour ajouter une classe à un élément. Cela peut se faire au travers l'appel d'une fonction qui se lancerait suite à un événement.

```javascript
h1.addEventListener('click', function() {
  h1.classList.add('big')
})
```

Autre syntaxe plus courante :

```javascript
h1.addEventListener('click', e => {
  h1.classList.add('big')
})
```

`e =>` est une syntaxe spéciale qui permet de définir une fonction anonyme. Cette syntaxe est équivalente à `function(e) { ... }`. On appelle cette manière de définir une fonction anonyme une **fonction fléchée**.  

Noter que dans l'écriture d'une fonction classique, il n'est pas obligatoire de rédiger le script entre les accolades.

```javascript
h1.addEventListener('click', addBig() => {})
function addBig() {
  h1.classList.add('big')
}
```

Savoir manipuler les éléments du DOM est très important. On peut ajouter des éléments, les manipuler, etc. C'est une compétence très importante pour les développeurs(euses) web. Cela permet d'enrichir le contenu de la page web et de créer des intéractions avec l'utilisateur.  

Dans d'autre cas de figure, cela permet de faire du scraping. C'est une technique qui permet de récupérer des informations d'un site web. Ou encore du tracking, c'est une technique qui permet de suivre les utilisateurs sur un site web. Ce sont là 2 exemples d'utilisation courantes du DOM.  
