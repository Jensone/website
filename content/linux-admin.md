## Introduction

Linux est un système d'exploitation, il est utilisé pour gérer le matériel et les logiciels informatiques. C'est un système d'exploitation à usage général, utilisé sur une grande variété d'ordinateurs. Vous n'avez pas à payer pour utiliser Linux car il est gratuit. Vous pouvez télécharger Linux depuis https://www.linux.org/.

Il s'agit d'un système d'exploitation open source, que vous pouvez donc modifier selon vos besoins. Il y a beaucoup de logiciels que vous pouvez utiliser sur Linux, mais l'un de ses avantages est cette capacité à modifier le système et à l'adapter aux besoins de la programmation informatique.

Tout d'abord, vous devez installer ce système d'exploitation. Commençons ensemble le processus d'installation :

### Cas 1 : Installer Linux dans une machine virtuelle sur Windows ou Mac

    1. Téléchargez le [VM] (https://www.virtualbox.org/) ou [VMWare] (https://www.vmware.com/).
    2. Installez et configurez le logiciel de la machine virtuelle.
    3. Vous pouvez maintenant télécharger l'image ISO de la distribution Linux que vous souhaitez.
        3.1 Nous allons utiliser la distribution **Ubuntu** (https://www.ubuntu.com/). Elle est basée sur Debian, une distribution Linux populaire chez les administrateurs système.
    4. Installez la distribution Linux à travers le logiciel de la machine virtuelle.
    5. Suivez les instructions pendant l'installation.
    6. Après l'installation, vous pouvez utiliser le logiciel de la machine virtuelle pour démarrer la distribution Linux.

Pourquoi utiliser une machine virtuelle pour installer Linux ? C'est un bon moyen d'installer Linux, car c'est une machine virtuelle, donc plus sûre et vous pouvez installer plusieurs distributions Linux sur la même machine virtuelle.

### Cas 2 : Installer Linux sur une machine physique

Avant d'installer Linux, vous devez connaître les exigences minimales côté matériel :

+ 1 processeur au minimum de type Intel Pentium ou supérieur (équivalent AMD possible).
+ Pensez plutôt à disposer de 512 Mo, voire 1 Go pour une utilisation optimale.
+ Au moins 500 Mo d’espace disque pour une installation minimale (sans interface graphique et seulement les outils de base)
+ Prévoir 2,5 Go pour une installation standard, plus un espace pour les données de l’utilisateur (/home) et la partition d’échange (/swap).
+ Une carte graphique pour l’interface graphique.

Consultez la section [Configuration matérielle] (https://www.linux.org/download/) pour obtenir plus d'informations sur les pré-requis de la distribution que vous recherchez.

    1. Téléchargez l'image ISO de la distribution Linux que vous recherchez.
    2. Téléchargez Rufus (sur Windows) ou Etcher (sur Mac), pour créer une clé USB "bootable".
    3. Après avoir créé la clé USB, vous pouvez installer la distribution Linux.
    4. Pour cela, vous devez :
        4.1 Connectez la clé USB à l'ordinateur.
        4.2 Démarrez votre ordinateur et lancez le BIOS pour sélectionner la clé USB pour le démarrage.
    5. Maintenant suivez les instructions pour installer la distribution Linux.
    6. Une fois l'installation terminée, vous pouvez retirer la clé USB uniquement lorsque le système vous y invite.
    7. À présent vous pouvez vous connecter à votre compte et utiliser la distribution Linux.

-----

## La ligne de commande

Voici 35 commandes régulières dans Linux :

1. `pwd` : Affiche le répertoire courant.
2. `ls` : Lister les fichiers du répertoire courant.
3. `cd` : Changer le répertoire courant.
4. `mkdir` : Créer un nouveau répertoire.
5. `touch` : Créer un nouveau fichier.
6. `rm` : Supprimer un fichier.
7. `rm -r` : Supprimer un répertoire.
8. `rmdir` : Supprimer un répertoire vide.
9. `mv` : Déplacer un fichier ou un répertoire.
10. `cp` : Copier un fichier ou un répertoire.
11. `cat` : Afficher le contenu d'un fichier.
12. `head` : Afficher les premières lignes d'un fichier.
13. `tail` : Afficher les dernières lignes d'un fichier.
14. `nano` : Editeur de fichier.
15. `useradd` : Créer un nouvel utilisateur.
16. `userdel` : Supprimer un utilisateur.
17. `usermod` : Modifier un utilisateur.
18. `passwd` : Modifier le mot de passe d'un utilisateur.
19. `su` : Changer l'utilisateur.
20. `chmod` : Modifier les permissions d'un fichier ou d'un répertoire.
21. `chown` : Changer le propriétaire d'un fichier ou d'un répertoire.
22. `chgrp` : Changer le groupe d'un fichier ou d'un répertoire.
23. `chown` : Changer le propriétaire d'un fichier ou d'un répertoire.
24. `find` : Rechercher des fichiers.
25. `locate` : Rechercher des fichiers.
26. `grep` : Rechercher une chaîne de caractères dans un fichier.
27. `ssh` : Se connecter à un hôte distant.
28. `ssh-keygen` : Générer une paire de clés publiques/privées.
29. `ssh-copy-id` : Copier la clé publique sur l'hôte distant.
30. `ip` : Afficher l'adresse IP de l'ordinateur.
31. `ping` : Effectuer un ping sur un hôte distant.
32. `traceroute` : Tracer la route vers un hôte distant.
33. `netstat` : Afficher les connexions réseau.
34. `netstat -s` : Afficher les statistiques du réseau.
35. `netstat -t` : Afficher le trafic réseau.

Chaque commande a une syntaxe spécifique. Par exemple, `ls` est une commande qui liste les fichiers du répertoire courant, et `ls -l` est une commande qui liste les fichiers du répertoire courant, mais avec plus d'informations. Vous pouvez découvrir plus d'informations sur chaque commande en tapant `man <commande>` pour afficher le manuel de la commande.

Exemple :

```
$ man mv
```

-----

## Utilisateur et groupe

Pour créer un nouvel utilisateur, vous devez utiliser la commande `useradd`. Lorsque vous créez un nouvel utilisateur, vous devez spécifier le nom de l'utilisateur, le mot de passe et le groupe.

Par défaut, l'utilisateur est créé dans le groupe `users`. Vous pouvez changer 

+ le groupe en utilisant la commande `usermod`
+ le mot de passe de l'utilisateur à l'aide de la commande `passwd`
+ le groupe de l'utilisateur à l'aide de la commande `chgrp`
+ le propriétaire de l'utilisateur en utilisant la commande `chown`
+ les permissions de l'utilisateur à l'aide de la commande `chmod`

Il existe un groupe spécial appelé `root`. Il est le propriétaire de tous les fichiers et répertoires. Vous pouvez utiliser la commande `chown` pour changer le propriétaire d'un fichier ou d'un répertoire.

Exercice : Créez un nouvel utilisateur appelé `cybernana`.

    1. Créez un nouvel utilisateur appelé `cybernana`.
    2. Changez le mot de passe de l'utilisateur.
    3. Changez le groupe de l'utilisateur.
    4. Changer le propriétaire de l'utilisateur.
    5. Modifier les autorisations de l'utilisateur.

#### Les permissions

La lettre r correspond à read, w à write et x à execute. Vous pouvez gérer les permissions d'un fichier ou d'un répertoire en utilisant la commande `chmod`.

Exemple :

```
$ chmod 755 /home/cybernana
```

Cette commande modifie les permissions du fichier ou du répertoire `/home/cybernana` en 755.

Comprendre les permissions d'un fichier ou d'un répertoire :

    1. Le premier chiffre est pour le propriétaire.
    2. Le deuxième chiffre est pour le groupe.
    3. Le troisième chiffre est pour les autres.

Les nombres octaux sont utilisés pour représenter les permissions. Il existe un tableau des nombres octaux :

| Binaire | Octal | User | Group | Other |
| :---: | :---: | :---: | :---: | :---: |
| 000 | 0 | --- | --- | --- |
| 001 | 1 | r-- | r-- | r-- |
| 010 | 2 | -w- | -w- | -w- |
| 011 | 3 | r-w | r-w | r-w |
| 100 | 4 | -x- | -x- | -x- |
| 101 | 5 | r-x | r-x | r-x |
| 110 | 6 | rw- | rw- | rw- |
| 111 | 7 | rwx | rwx | rwx |
