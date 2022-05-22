## Introduction

Shell est un langage de script très utilisé dans les systèmes d'exploitation. Il est très simple à apprendre et à utiliser.

Il permet de créer des scripts qui sont légèrement plus complexes qu'un script en Python. Mais qui sont plus faciles à lire et à utiliser. Débutons par la rédaction d'un script qui va afficher la date et l'heure.

Tout d'abord, on crée un fichier `date.sh` qui va contenir le script.

```
    touch date.sh
```

Rendons-nous dans ce fichier et écrivons le script.

```
    nano date.sh
```

Ce script va afficher la date et l'heure en utilisant la commande `date`. Pour afficher la date, il faut utiliser la commande `date` avec le paramètre `+%d/%m/%Y`. Pour afficher l'heure, il faut utiliser la commande `date` avec le paramètre `+%H:%M:%S`.

```
    #!/bin/bash
    date +%d/%m/%Y
    date +%H:%M:%S
```

Nous avons créé un fichier `date.sh` qui contient le script. Nous allons maintenant l'exécuter.

```
    chmod +x date.sh
    ./date.sh
```

Avec la commande `chmod`, nous avons changé les permissions du fichier `date.sh` pour qu'il soit exécutable. Nous avons ensuite exécuté le script en utilisant la commande `./date.sh`.

```
    ls -l date.sh
    -rwxr-xr-x 1 root root 0 Jan  1  1970 date.sh
```

À partir de là, on comprend qu'il est possible de créer des scripts de manière simple. Nous allons à présent créer un script qui va afficher le contenu d'un fichier.

```
    touch affiche.sh
    nano affiche.sh
````

Maintenant, écrivez à l'intérieur le code suivant :

```
    #!/bin/bash
    cat $1
```

Remarquez que nous avons utilisé la commande `$1` pour indiquer que le premier paramètre du script est le fichier à afficher.

```
    chmod +x affiche.sh
    ./affiche.sh fichier.txt
```

-----

# Exercices Shell

Réalisez cette série de 3 exercices pour découvrir et mieux comprendre la programmation avec Shell. Pour avoir accès aux consignes, copier-coller le script suivant dans un fichier en .sh puis rendez-le exécutable et lancez le script. Suivez les instructions à la fin de l'exécution du script "Shell-Scripting.sh".

````
#!/bin/bash

mkdir Exercises
cd Exercises
touch Exercise_1
echo "Réalisez un script permettant de : 
1 - Télécharger une archive zip
2 - Le décompresser
3 - Renommer le dossier extrait par le nom de votre choix
4 - Le déplacer dans un autre dossier

Vous êtes totalement libres dans votre écriture de script" >> Exercise_1

echo "Prochain exercice en préparation"
sleep 5

touch Exercise_2
echo "Réalisez un script permettant de : 
1 - Créer un dossier appelé 'Poème'
2 - Créer 5 fichiers nommées 'p1', 'p2', 'p3', 'p4' et 'p5'
3 - Écrire dans chacun de ces fichiers un paragraphe du poème 'À ma Femme endormie' de Charles Clos
4 - Afficher le poème complet dans le terminal 

Vous êtes totalement libres dans votre écriture de script" >> Exercise_2

echo "Prochain exercice en préparation"
mkdir shellGame
cd shellGame
mkdir d1 d2 d3 d4 d5 d6 d7 d8 d9 d10
touch d1/texte d2/texte d3/texte d4/texte d5/texte d6/texte d7/texte d8/texte d9/texte d10/texte
echo "CyberNanas" >> d1/texte && echo "CyberNanas" >> d2/texte && echo "CyberNanas" >> d3/texte && echo "CyberNanas" >> d4/texte && echo "CyberNanas" >> d5/texte && echo "CyberNanas" >> d6/texte && echo "CyberNanas" >> d7/texte && echo "CyberNanas" >> d8/texte && echo "CyberNanas" >> d9/texte && echo "CyberNanas" >> d10/texte
cd ..
sleep 5

touch Exercise_3
echo "Réalisez un script permettant de : 
1 - Trouver tous les fichiers contenant le mot 'CyberNanas'
2 - Enregistrer les résultats trouvés dans un fichier appelé 'Résultats'

Vous êtes totalement libres dans votre écriture de script" >> Exercise_3

echo "Ne vous prenez pas la tête à réfléchir à des algorithmes complexes, vous réussirez à réaliser ces exercices avec vos connaissances de l'administration Linux"
echo "Tapez 'cd Exercices' puis 'ls' pour voir les exercices disponibles"

````

-----

# Exercice Final

Pour consolider vos connaissances, voici un exercice final.

En groupe, vous devez réaliser un algorithme qui permette de contrôler l'accès à un dossier caché.
Une fois terminé, vous devez implémenter ce code dans Shell.

Donner le nom que vous souhaitez au dossier caché et un fichier à l'intérieur.
Dispatchez-vous les tâches pour que vous puissiez travailler en groupe (recherche d'information, écriture de l'algorithme, implémentation dans Shell etc...).