---
## `docs/05-application/lib-et-stores/category-presentation.md`
---
# Category presentation

## Objectif de cette section

Cette page documente la logique `categoryPresentation`, utilisée dans ONY pour harmoniser la présentation visuelle des catégories.

Cette brique est importante, car les catégories sont utilisées à la fois :

- comme filtres ;
- comme points d’entrée de navigation ;
- comme éléments de lisibilité du contenu ;
- comme composantes de l’identité visuelle du produit.

## Rôle du module

Le module `categoryPresentation` sert à centraliser la manière dont une catégorie est présentée dans l’interface.

Il peut permettre notamment :

- d’associer une catégorie à une icône ;
- de définir une logique de rendu cohérente ;
- d’uniformiser les libellés ou variantes visuelles ;
- d’éviter les différences de présentation selon les écrans.

## Pourquoi cette couche est utile

Les catégories apparaissent dans plusieurs zones :

- accueil ;
- map ;
- page `/events` ;
- filtres ;
- résumés ou détails d’événements.

Sans centralisation, il est facile de se retrouver avec :

- des icônes différentes pour une même catégorie ;
- des styles divergents ;
- des incohérences de lecture.

## Lien avec l’expérience utilisateur

La catégorie n’est pas un simple tag technique.
Dans ONY, elle sert aussi de repère visuel et de point d’exploration rapide.

Sa présentation doit donc rester :

- claire ;
- reconnaissable ;
- cohérente ;
- adaptée au mobile.

## Travail récent

La logique `categoryPresentation` a été particulièrement utile lors des travaux récents sur :

- la réintégration des catégories réelles depuis la BDD ;
- la navigation catégories → map ;
- l’harmonisation de l’iconographie ;
- la cohérence visuelle des sections de découverte.

Cette couche a contribué à rendre les catégories réellement exploitables dans le produit.

## Responsabilités principales

Le module peut notamment prendre en charge :

- l’association nom → icône ;
- l’association nom → couleur ou style ;
- la préparation de labels plus propres ;
- la standardisation du rendu à travers les composants.

## Relation avec les données

Les catégories sont stockées en base dans `categories`, puis reliées aux événements via `event_categories`.

`categoryPresentation` n’a pas vocation à modifier ces données.
Son rôle est uniquement de préparer une représentation frontend cohérente.

## Différence entre donnée et présentation

Il est important de distinguer :

- la catégorie comme donnée métier ;
- la catégorie comme objet visuel dans l’interface.

Le module `categoryPresentation` relève clairement de la seconde dimension.

## Points de vigilance

Pour la suite, il faudra veiller à :

- garder cette logique centralisée ;
- éviter de redéfinir localement l’iconographie ;
- maintenir la cohérence entre les écrans ;
- faire évoluer la présentation sans casser les usages existants.

## Schéma simplifié

```mermaid
flowchart TD
    CAT["Catégorie métier"] --> PRES["categoryPresentation"]
    PRES --> HOME["Accueil"]
    PRES --> MAP["Map"]
    PRES --> EVENTS["Page /events"]
    PRES --> FILTERS["Filtres"]
