---
title: Déploiement atomique
---

# Déploiement atomique

## Objectif de cette section

Cette page présente la logique de **déploiement atomique** utilisée pour **ONY**.

L’objectif est d’expliquer :

- le principe général ;
- la structure sur laquelle il s’appuie ;
- ses avantages concrets ;
- son intérêt en cas d’erreur ou de rollback.

## Définition

Un déploiement atomique consiste à préparer une nouvelle version dans un emplacement séparé, puis à basculer vers cette version d’un seul coup lorsque celle-ci est prête.

L’idée principale est d’éviter :

- d’écraser directement la version en cours ;
- de laisser l’application dans un état intermédiaire instable ;
- de mélanger ancienne et nouvelle version pendant l’opération.

Ce mode de déploiement est particulièrement utile lorsque l’on cherche à conserver un minimum de robustesse opérationnelle.

## Application au projet ONY

Dans ONY, cette logique repose sur une structure de type :

- un dossier `releases` contenant les versions déployées ;
- un lien symbolique `current` pointant vers la version active.

Cette organisation a déjà été retenue dans l’arborescence serveur documentée précédemment.

## Séquence générale

Le principe de fonctionnement est le suivant :

1. une nouvelle release est préparée dans un dossier dédié ;
2. cette release est construite et rendue prête à l’exécution ;
3. des vérifications peuvent être réalisées ;
4. le lien symbolique `current` est basculé vers la nouvelle version ;
5. l’application est relancée sur cette base.

La bascule est donc nette et lisible.

## Pourquoi ce choix

Le déploiement atomique a été retenu pour plusieurs raisons :

- il évite les modifications destructives sur la version active ;
- il facilite les retours arrière ;
- il rend le déploiement plus compréhensible ;
- il améliore le diagnostic en cas de problème ;
- il cadre bien avec une logique de scripts d’exploitation.

Ce choix reste cohérent avec la taille actuelle du projet tout en apportant de vraies garanties pratiques.

## Avantages concrets

### Réduction du risque pendant le déploiement

La version active n’est pas modifiée directement pendant la préparation de la nouvelle release.

Cela limite les risques de casser l’application pendant une étape intermédiaire.

### Lisibilité

La séparation entre les versions rend l’état du serveur plus lisible.

Il devient plus simple de savoir :

- quelle version est active ;
- quelles versions ont déjà été déployées ;
- vers quoi un rollback peut être effectué.

### Rollback facilité

En cas de problème, le retour arrière peut être réalisé plus simplement en rebasculant le lien symbolique vers une release précédente, sous réserve que cette release soit toujours disponible et compatible.

### Meilleure discipline d’exploitation

Cette approche encourage une organisation plus propre :

- scripts de déploiement structurés ;
- versions isolées ;
- logs exploitables ;
- contrôles post-déploiement plus clairs.

## Conditions de réussite

Pour qu’un déploiement atomique soit réellement utile, plusieurs éléments doivent être présents :

- une arborescence propre ;
- des scripts cohérents ;
- des versions isolées ;
- une relance applicative maîtrisée ;
- des vérifications après bascule.

Sans cela, le simple usage d’un dossier `releases` ne suffit pas à garantir la qualité du processus.

## Schéma simplifié

```mermaid
flowchart LR
    SRC[Nouvelle version] --> REL[Création d'une release]
    REL --> CHECK[Vérifications]
    CHECK --> LINK[Bascule du lien current]
    LINK --> PM2[Redémarrage / prise en compte]
    PM2 --> LIVE[Version active]
Limites

Le déploiement atomique n’élimine pas tous les risques.

Par exemple, une bascule propre ne garantit pas à elle seule :

l’absence de bug fonctionnel ;

la compatibilité totale avec les variables d’environnement ;

la disponibilité des services tiers ;

la validité d’une migration ou d’un changement externe.

Il doit donc être complété par :

des contrôles ;

du monitoring ;

de la journalisation ;

une stratégie de rollback.

Place dans l’infrastructure

Dans le cadre d’ONY, le déploiement atomique s’inscrit naturellement entre :

le pipeline CI/CD ;

l’arborescence serveur ;

PM2 ;

les procédures d’exploitation.

Il constitue un mécanisme central de fiabilisation du passage d’une version à une autre.

À retenir

Le déploiement atomique permet à ONY de disposer d’une méthode de mise à jour plus propre et plus sûre.

Il repose sur un principe simple :

préparer séparément ;

basculer proprement ;

garder la possibilité de revenir en arrière.

C’est une approche très pertinente pour conserver une exploitation lisible et maîtrisée.