---
title: Introduction
---
# ONY — Documentation projet

Bienvenue dans la documentation technique et fonctionnelle de **ONY**.

ONY est une **Progressive Web App (PWA)** dédiée à la découverte, à la consultation et à la gestion d’événements locaux. L’application repose sur une logique **map-first** : la carte interactive constitue le point d’entrée principal pour explorer les événements, les filtrer et accéder rapidement à leur détail.

Cette documentation a un double objectif :

- servir de **référence technique centralisée** pour le développement, le déploiement, la maintenance et le debug ;
- conserver un **rappel de contexte projet** utile pour comprendre la vision, le périmètre, les choix structurants et l’état d’avancement.

## Pourquoi cette documentation existe

La documentation du projet a été migrée vers **Docusaurus** afin de centraliser les informations qui étaient auparavant dispersées entre différents fichiers, documents exportés, notes techniques et éléments présents dans le code.

Cette base documentaire a vocation à devenir la **source de vérité** du projet pour :

- l’architecture applicative ;
- la base de données ;
- l’infrastructure et les déploiements ;
- les workflows de travail ;
- l’exploitation et la supervision ;
- les tests ;
- les guides d’usage.

## Philosophie documentaire

Cette documentation suit trois principes :

### 1. Réalité actuelle

Le contenu doit décrire **l’état réel du projet**, et non une cible théorique dépassée.
Quand un document plus ancien contient une information obsolète, la documentation Docusaurus doit refléter la version la plus à jour du projet.

### 2. Documentation vivante

La documentation est pensée pour être mise à jour **au fil du développement**, afin d’éviter un écart entre le code, l’infrastructure et la connaissance projet.

### 3. Scalabilité

La structure a été conçue pour rester exploitable jusqu’à la fin du projet et au-delà.
De nouvelles pages peuvent être ajoutées sans remettre en cause l’organisation globale.

## Contenu de la documentation

La documentation est organisée en grandes sections :

- **Contexte projet** : présentation, objectifs, périmètre, jalons, direction artistique
- **Vue fonctionnelle** : rôles, parcours, modules, flux métier
- **Architecture globale** : vue système, flux, schémas
- **Stack technique** : frontend, backend logique, auth, données, outils de run
- **Application** : structure du projet, routing, pages et composants clés
- **Base de données** : tables métier, relations, sécurité
- **Infrastructure & déploiement** : environnements, PM2, CI/CD, déploiement atomique
- **Exploitation & debug** : monitoring, alertes, commandes utiles, rollback, logs
- **Workflow projet** : repositories, branches, MR, board, publication
- **Sécurité** : auth, autorisation, secrets, paiement, données personnelles
