---
title: PM2
---

# Supervision applicative avec PM2

## Objectif de cette section

Cette page présente l’usage de **PM2** dans l’infrastructure de **ONY**.

L’objectif est d’expliquer :
- Pourquoi PM2 est utilisé
- Son rôle dans l’exécution de l’application
- Les commandes principales à connaître
- En quoi il participe à la stabilité d’exploitation

## Rôle de PM2

**PM2** est utilisé comme superviseur de processus pour l’application.

Dans le cadre d’ONY, il permet de :

- démarrer l’application ;
- maintenir le processus en exécution ;
- redémarrer le service si nécessaire ;
- consulter les logs ;
- simplifier les opérations de maintenance.

PM2 agit donc comme une couche de pilotage entre le système et l’application Next.js.

## Pourquoi ce choix

Le recours à PM2 répond à un besoin concret de simplicité d’exploitation.

Ce choix permet de disposer rapidement :

- d’un démarrage standardisé ;
- d’un contrôle clair de l’état applicatif ;
- d’un accès pratique aux journaux ;
- d’une relance manuelle simple en cas d’ajustement ou d’incident.

Dans le contexte du projet, PM2 offre un bon compromis entre robustesse, lisibilité et rapidité de mise en œuvre.

## Périmètre d’usage

PM2 est utilisé sur les environnements d’exécution applicative, notamment :

- en préproduction ;
- en production.

L’objectif est de conserver un mode de fonctionnement homogène entre les environnements, afin de réduire les écarts entre validation et exploitation réelle.

## Ce que PM2 supervise

PM2 supervise principalement le processus applicatif lié à **ONY**.

Selon l’organisation du serveur, cela peut correspondre :

- à une application Next.js lancée en mode serveur ;
- à un script de démarrage dédié ;
- à une commande de lancement standardisée après build.

L’important n’est pas uniquement la commande elle-même, mais le fait que le processus soit :

- identifiable ;
- redémarrable ;
- observable ;
- maintenu de manière cohérente.

## Intérêt opérationnel

L’utilisation de PM2 apporte plusieurs bénéfices concrets :

- meilleure visibilité sur l’état du service ;
- démarrage simplifié après déploiement ;
- relance rapide en cas de besoin ;
- centralisation pratique des logs applicatifs ;
- continuité d’exécution plus fiable qu’un lancement manuel isolé.

PM2 participe donc directement à la maîtrise opérationnelle du projet.

## Commandes utiles

Les commandes suivantes sont particulièrement utiles dans l’exploitation courante :

```bash
pm2 list
pm2 status
pm2 logs
pm2 restart all
pm2 stop all
pm2 delete all
```

Selon la convention retenue côté serveur, il est préférable d’utiliser le nom exact du processus applicatif plutôt que des commandes globales lorsque cela est possible.

Lecture de l’état applicatif

PM2 permet de vérifier rapidement :

si le processus est démarré ;

s’il redémarre anormalement ;

s’il s’est arrêté ;

si des erreurs sont visibles dans les logs.

Il constitue donc un premier niveau de diagnostic avant d’aller plus loin dans l’analyse système, réseau ou applicative.

Limites de PM2

PM2 ne remplace pas à lui seul une stratégie complète de supervision.

Il permet de superviser l’exécution du processus, mais ne garantit pas à lui seul :

que l’application réponde fonctionnellement ;

que toutes les routes soient opérationnelles ;

que les dépendances externes soient joignables ;

que l’expérience utilisateur soit correcte.

C’est pour cela qu’il doit être complété par :

des healthchecks ;

des logs lisibles ;

des procédures de diagnostic ;

un minimum de monitoring applicatif.

Place dans l’infrastructure

Dans ONY, PM2 s’insère comme couche d’exécution locale côté serveur :

À retenir

PM2 joue un rôle important dans l’exploitation quotidienne d’ONY.

Il permet de :

lancer l’application de manière standardisée ;

maintenir le processus actif ;

observer son comportement ;

faciliter les redémarrages et le debug.

Il constitue une brique simple mais utile dans la stabilité de l’environnement d’exécution.
