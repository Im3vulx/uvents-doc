---
title: Glossaire
---
# Glossaire

## Objectif de cette section

Cette page regroupe les principaux termes utilisés dans la documentation de **ONY**.

L’objectif est de faciliter la lecture globale du projet en donnant une définition simple, claire et cohérente des notions les plus fréquentes.

Ce glossaire ne vise pas à être encyclopédique, mais à offrir un référentiel commun pour comprendre la documentation fonctionnelle, technique et d’exploitation.

## A

### Accessibilité

Capacité d’une interface ou d’un service à être utilisé par le plus grand nombre, y compris par des personnes pouvant rencontrer des limitations visuelles, motrices, cognitives ou contextuelles.

### API

Interface permettant à différents composants logiciels de communiquer entre eux de manière structurée.

### Authentification

Mécanisme permettant de vérifier l’identité d’un utilisateur avant de lui ouvrir une session ou un accès à une partie protégée de l’application.

### Autorisation

Contrôle permettant de déterminer ce qu’un utilisateur authentifié a réellement le droit de consulter ou de faire.

## B

### Backend

Partie serveur de l’application, responsable notamment de la logique métier, du traitement des données et des échanges avec les services externes.

### Branche

Version parallèle d’un dépôt Git permettant d’isoler un travail, une évolution ou un niveau de stabilité donné.

### Build

Étape de préparation de l’application avant exécution ou déploiement, souvent associée à la compilation, à l’assemblage des fichiers ou à la génération des ressources nécessaires au runtime.

## C

### CI

Abréviation de **Continuous Integration**. Désigne les mécanismes d’intégration continue permettant d’automatiser certaines vérifications ou actions à partir du dépôt Git.

### CI/CD

Ensemble des mécanismes reliant intégration continue et déploiement ou livraison continue.

### Cloudflare Tunnel

Mécanisme permettant d’exposer un service via Cloudflare sans ouvrir directement le service applicatif de manière brute sur Internet.

### Composant

Élément réutilisable d’interface ou de logique dans l’application.

## D

### Déploiement atomique

Méthode de déploiement consistant à préparer une nouvelle version séparément avant de basculer proprement vers elle, afin de faciliter la stabilité et le rollback.

### Documentation technique

Ensemble des pages décrivant l’architecture, les composants, les choix techniques, l’exploitation et les logiques de fonctionnement du projet.

## E

### Environnement

Contexte d’exécution donné de l’application, par exemple la préproduction ou la production.

### Exploitation

Ensemble des actions liées au fonctionnement réel du service : supervision, diagnostic, maintenance, redémarrage, surveillance, rollback.

## F

### Frontend

Partie visible de l’application, utilisée directement par l’utilisateur.

## G

### GitLab CI/CD

Mécanisme d’automatisation associé au dépôt GitLab pour exécuter des jobs techniques, vérifier un état ou piloter un déploiement.

## H

### Healthcheck

Vérification technique permettant de confirmer qu’un service ou une application répond correctement après déploiement ou pendant l’exploitation.

## I

### Infrastructure

Ensemble des briques techniques qui hébergent, exécutent et exposent l’application.

## L

### LXC

Type de conteneur léger utilisé ici pour isoler des environnements ou services dans l’infrastructure.

### Logs

Traces écrites produites par l’application, les scripts ou l’environnement technique pour suivre un comportement ou diagnostiquer un problème.

## M

### Merge Request

Proposition formalisée d’intégration d’une branche dans une autre, généralement accompagnée d’une relecture ou d’une validation.

### Monitoring

Surveillance de l’état d’un service, d’un processus ou d’un environnement afin de détecter des anomalies ou des dégradations.

## O

### ONY

Nom actuel du projet. Certaines références techniques plus anciennes peuvent encore utiliser l’ancien nom **Uvents**.

## P

### Pipeline

Chaîne d’étapes automatisées exécutées dans le cadre de la CI/CD.

### PM2

Gestionnaire de processus utilisé pour lancer, maintenir et observer l’application côté serveur.

### Préproduction

Environnement de validation utilisé pour tester et vérifier les évolutions avant mise en production.

### Production

Environnement stable exposé pour l’usage réel du service.

## R

### Release

Version déployée de l’application, conservée dans l’arborescence serveur pour permettre une activation propre et éventuellement un retour arrière.

### Rollback

Retour à une version précédente lorsqu’une nouvelle version déployée pose problème.

## S

### Secret

Information sensible, comme une clé ou un identifiant technique, qui ne doit pas être exposée publiquement.

### Session

État de connexion associé à un utilisateur authentifié.

### Sidebar

Structure de navigation utilisée dans Docusaurus pour organiser les pages de la documentation.

### Supabase

Service externe utilisé dans le projet pour la couche données et l’authentification.

## T

### Tailscale

Solution d’accès privé permettant de rejoindre certains environnements sans les exposer publiquement.

## U

### Uvents

Ancien nom du projet, encore visible dans certaines références techniques, scripts, dépôts ou URLs historiques.

## À retenir

Ce glossaire sert de base de lecture pour toute la documentation ONY.

Il doit rester :

- simple ;
- cohérent ;
- utile ;
- aligné avec les termes réellement employés dans le projet.

Il peut être enrichi progressivement à mesure que la documentation se précise.
