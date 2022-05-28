## Introduction à l'algorithme

### Un peu d'histoire

Le mot "algorithme" est la version latinisée de "Al-Khwârismîn". C'était un mathématicien, géographe, astrologue et astronome persan. C'est une représentation d'une procédure de résolution d'un problème qui, à partir d'une entrée, produit une sortie.

-----

### Son champ d'application

En informatique, l'algorithme est utilisé pour créer des programmes, réaliser des calculs, déterminer des résultats, déterminer des règles de jeu, etc.
Entre autres, il s'agit de la base de la programmation. Elle précède l'écriture de code, le passage de l'algorithme au code est appelé implémentation.

Voici les différentes étapes de la réalisation d'un programme :

![algo](./img/algo.jpg "algo")

Pour écrire un algorithme, il faut connaitre les différents éléments qui composent un programme.

##### 1. Les variables

Les variables sont des moyens de stocker des données. Elles sont déclarées avec ou sans le mot-clé et suivies d'un nom.

Une variable reçoit une valeur lorsqu'elle est déclarée. Ces valeurs peuvent être de différents types.

+ Les entiers sont des nombres entiers (int ou integer).
+ Les réels sont des nombres à virgule flottante (float)
+ Les chaînes de caractères sont des chaînes de caractères (str ou string)
+ Les booléens sont des valeurs booléennes (bool ou boolean)
+ Les tableaux sont des tableaux de données (array)

Chaque langage de programmation possède ses propres types de données, celles-ci sont les plus courantes.
Une convention de nommage est utilisée pour définir les variables. Le nom de la variable doit être en minuscules, sans accent, sans espace et sans caractères spéciaux.

Le plus courant est le camelCase.

##### 2. Les opérateurs

Les opérateurs sont des moyens de manipuler des variables. Voici la liste de différents opérateurs :

| Symbole | Définition | | Utilisation | Résultat |
| :---: | :---: | :---: | :---: | :---: |
| `+` | addition | >>> | `10+2` | 12 |
| `-` | soustraction | >>> | `10-2` | 8 |
| `*` | multiplication | >>> | `10*2` | 20 |
| `/` | division | >>> | `10/2` | 5 |
| `%` | modulo (reste de la division) | >>> | `10%2` | 0 |
| `**` | puissance (exponentielle) | >>> | `10**2` | 100 |
| `++` | incrémentation | >>> | `10++` | 11 |
| `--` | décrémentation | >>> | `10--` | 9 |
| `=` | affectation | >>> | `nombre = 10` | La valeur 10 est affectée à la variable |
| `==` | égalité (comparaison) | >>> | `nombre == 10` | true (vrai) |
| `===` | égalité stricte (comparaison) | >>> | `nombre === "10"` | false (faux car le type est différent) |
| `!=` | différence d'égalité | >>> | `nombre != 20` | true (vrai) |
| `>` | supériorité stricte | >>> | `nombre > 20` | false (faux) |
| `<` | infériorité stricte | >>> | `nombre < 20` | true (vrai) |
| `>=` | supériorité ou égalité | >>> | `nombre >= 20` | false (faux) |
| `<=` | infériorité ou égalité | >>> | `nombre <= 20` | true (vrai) |
| `&&` | et logique (et) | >>> | `croissant && café` | croissant et café |
| `||` | ou logique (ou) | >>> | `croissant || café` | croissant ou café |
| `!` | non logique (non) | >>> | `!true` | false (faux, il fait l'inverse) |

Grâce aux opérateurs, on peut faire des calculs, des conditions, des opérations sur les variables, des comparaisons, etc. Donc varier la réalisation d'instructions multiples dans un programme.

##### 3. Les instructions

Les instructions sont des moyens de définir des actions à réaliser. Les instructions sont déclarées avec le mot clé `début` suivi d'une instruction. L'instruction est suivie d'un `fin`.

Par exemple :

```
Début
    nbrA = 1
    nbrB = nbrA + 1
    nbrC = nbrB + 1
Fin 
```

Q1 - La réponse est à la fin de la page.

Quelle est la valeur de la variable nbrC ?

##### 4. Les boucles

Les boucles sont des moyens de répéter des instructions. Les boucles sont déclarées avec le mot clé `début` suivi d'un mot clé `boucle` suivi d'un nom de variable. L'instruction est suivie d'un `fin`.

Il existe deux types de boucles : `tant que` (while) et `pour chaque` (for).

+ La boucle `tant que` est une boucle qui s'exécute tant que la condition est vraie.
Exemple :

```
Début
    nbrA = 1
    tant que nbrA < 10
        nbrA = nbrA + 1
    fin tant que
fin 
```

Q2 - La réponse est à la fin de la page.

Quelle est la valeur de la variable nbrA à la fin de la boucle ?

Attention, la boucle `tant que` ne fonctionne que si la condition est vraie au début. Cependant, assurez-vous que la condition puisse s'arrêter car cela peut devenir une boucle infinie.

+ La boucle `pour` est une boucle qui s'exécute une fois pour chaque élément d'un tableau.
Exemple :

```
Début
    nbrA = 1
    pour nbrA dans [1, 2, 3, 4, 5]
        nbrA = nbrA + 1
    fin pour
Fin 
```

Q3 - La réponse est à la fin de la page.

Quelle est la valeur de la variable nbrA à la fin de la boucle ?

##### 5. Les conditions

Les conditions sont des moyens de définir des actions à réaliser si une condition est vraie ou non. Les conditions sont déclarées avec le mot clé `début` suivi d'un mot clé `si` suivi d'une condition. L'instruction est suivie d'un mot clé `sinon` suivi d'une instruction. L'instruction est suivie d'un mot clé `fin`.

Exemple :

```
Début
    nbrA = 1
    si nbrA < 10
        nbrA = nbrA + 1
    sinon
        nbrA = nbrA - 1
    fin si
Fin
```

##### 6. Les fonctions

Les fonctions sont des moyens de définir des actions à réaliser. Les fonctions sont déclarées avec le mot clé `début` suivi d'un mot clé `fonction` suivi d'un nom de fonction. L'instruction est suivie d'un mot clé `fin`.

L'objectif de la fonction est de réaliser une ou une série d'actions.
Par exemple :

```
Début
    fonction calculer(nbr)
        nbrA = nbr + 1
        nbrB = nbrA + 1
        resultat = nbrB + 1
    fin fonction
    afficher(resultat)
Fin
```

À la différence d'une instruction, une fonction peut être un ensemble d'instructions et se déclencher à l'aide du mot clé `appeler`. Nous pouvons créer plusieurs fonctions dans un programme qui ne s'exécuteront pas en même temps.

-----

### Exemples d'algorithmes

Pour illustrer la réalisation d'un algorithme, voici 2 exemples :

##### L'achat d'un produit en magasin

Lorsque vous achetez un produit dans un magasin, vous devez payer une somme d'argent. Le problème à résoudre ici et l'achat d'un produit.

Définissons d'abord les variables :

+ **produit** : le produit que vous achetez
+ **prix** : le prix du produit
+ **quantité** : la quantité de produit acheté
+ **tva** : le taux de la TVA
+ **paiement** : le montant du paiement

Débutons notre algorithme :

```
Début
    produit = "chaussures"
    prix = 100
    quantité = 2
    tva = 1.2
    paiement = prix * quantité * tva
Fin
```

À ce stade vous êtes en mesure de facilement comprendre l'algorithme.

##### Le Pass Navigo

Si vous êtes de Paris, vous connaissez le pass Navigo. Il vous permet de vous déplacer dans le réseau de transport en commun de la RATP et SNCF.

Le problème à résoudre ici est d'accéder à un moyen de transport en commun pour vous déplacer d'un point A à un point B.

Définissons d'abord les variables :

+ **pointA** : le point de départ
+ **pointB** : le point d'arrivée
+ **moyen** : le moyen de paiement
+ **passNavigo** : le pass Navigo

Débutons notre algorithme de recharge du pass Navigo :

```
Début
    Identifier passNavigo
        si passNavigo = "identifié" alors
            Proposer la sélection d'un forfait
                si forfait = 1 alors
                    zones = "4-5"
                    prix = 65.20
                sinon si forfait = 2 alors
                    zones = "2-3"
                    prix = 68.60
                sinon si forfait = 3 alors
                    zones = "3-4"
                    prix = 66.80
                sinon 
                    zones = "1-5"
                    prix = 75.20
                fin si
        sinon
            passNavigo non identifié
            Afficher "Veuillez vous rendre au guichet de la RATP"
        fin si
    Proposer un moyen de paiement
        si moyen = "carte bancaire" alors
            Afficher "Veuillez insérer votre carte bancaire"
                si paiement = "ok" alors
                Recharger le pass Navigo
                    Afficher "Votre pass a été rechargé"
                sinon
                    Afficher "Votre paiement à échoué, votre pass n'a pas été rechargé"
                fin si
        sinon
            moyen = "espèces"
            Afficher "Veuillez payer en espèces"
                si moyen > prix alors
                    Rendre la monnaie
                    Recharger le pass Navigo
                    Afficher "Votre pass a été rechargé"
                sinon
                    Afficher "Complétez votre paiement"
                fin si
         fin si
Fin
```

Maintenant, définissons l'algorithme d'accès au moyen de transport :

```
Début
    Entrer au pointA
    si passNavigo = "valide" Alors
        L'accès au moyen de transport est autorisé
        Entrer dans le moyen de transport
        Sortir du moyen de transport
        Sortir du pointB
    sinon
        L'accès au moyen de transport est refusé
        Afficher "Votre pass Navigo n'est pas valide"
    fin
Fin
```

Notez que cet algorithme ne prend pas en compte le zonage du pass Navigo. Nous pourrions le compléter en vérifiant que le pass Navigo est valide pour la zone de départ et la zone d'arrivée.

D'ailleurs ce que vous lisez est-ce qu'on nomme du **pseudo-code**, il s'agit d'une représentation d'un algorithme en langage naturel avant de l'implémenter en code informatique. Il est possible également de l'exprimer sous forme d'organigramme. Comme pour le pseudo-code, vous pouvez suivre ou ne pas suivre les conventions d'écriture, le plus important est que soient en mesure de créer un algorithme qui résolve un problème.

Exemple avec le dernier algorithme :

![organigramme](./img/organigramme.jpg "organigramme")

## Conclusion

L'algorithme est la base de tout programme. Il permet de définir des actions à réaliser afin de résoudre un problème, mais surtout d'en aborder tous les aspects dans le but de pouvoir réaliser des solutions adéquates.

###### Réponses aux questions des variables

Q1 : La valeur de nbrC est 3
Q2 : La valeur de nbrA est 9
Q3 : La valeur de nbrA est 6

-----

## Exercices

1. Créer un algorithme qui calcule la somme des nombres des départements de France, en utilisant une boucle.
2. Créer un algorithme qui affiche un message de bienvenue à l'utilisateur lorsqu'il se connecte à son compte.
3. Créer un algorithme qui calcule le prix d'un produit en fonction de sa quantité et de la TVA.
4. Créer un algorithme de connexion à un serveur.
5. Créer un algorithme qui permet de déterminer si un nombre est pair ou impair.
6. Créer un algorithme qui calcule de l'aire d'un triangle.
7. Créer un algorithme qui calcule le volume d'un parallélogramme.
8. Créer un algorithme qui calcule le volume d'un parallélépipède.
9. Créer un algorithme qui calcule le volume d'un cube.
10. Créer un algorithme qui calcule le volume d'un rectangle.
11. Créer un algorithme qui change la chaîne d'une télévision.
12. Créer un algorithme représentant l'utilisation d'un ascenseur.
13. Créer un algorithme qui permet de déterminer si une année est bissextile.
14. Créer un algorithme qui permet de d'afficher le jour de la semaine d'une et de la date d'aujourd'hui.
15. Créer un algorithme qui annonce la météo d'une ville.
16. Créer un algorithme qui contrôle l'accès à un site web.
