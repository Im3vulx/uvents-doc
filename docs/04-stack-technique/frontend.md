---
title: Frontend
---
# Frontend

## Objectif de cette section

Cette page présente les technologies, principes et choix d’implémentation utilisés côté frontend dans ONY.

Le frontend constitue la partie visible du produit. Il porte :

- les parcours utilisateur ;
- la logique d’affichage ;
- la navigation ;
- une partie de la logique applicative ;
- l’intégration avec la carte, l’authentification, la billetterie et les services externes.

## Technologie principale

Le frontend d’ONY repose sur **Next.js 14** avec **React 18** et **TypeScript**.

Ce choix permet de bénéficier :

- d’un framework moderne et structurant ;
- d’un routing intégré ;
- de possibilités de rendu variées ;
- d’une bonne intégration avec des routes API ;
- d’un socle cohérent pour un produit web évolutif.

## App Router

Le projet utilise l’**App Router** de Next.js, ce qui se reflète dans la structure du dossier `app/`.

Cette approche permet :

- une organisation claire par route ;
- une séparation plus naturelle des pages et segments ;
- une meilleure lisibilité de l’application ;
- l’intégration de layouts, sous-routes et groupes de routes.

## Langage et typage

Le projet est développé en **TypeScript**.

L’usage de TypeScript répond à plusieurs objectifs :

- améliorer la lisibilité du code ;
- limiter certaines erreurs de typage ;
- mieux documenter les structures manipulées ;
- sécuriser les échanges entre composants, données et services.

## Bibliothèques frontend principales

Le frontend s’appuie notamment sur :

- **React** pour la construction de l’interface ;
- **Next.js** pour le framework global ;
- **Tailwind CSS** pour le styling ;
- **Lucide React** pour les icônes ;
- **Leaflet / React-Leaflet** pour la carte ;
- **Zustand** pour certaines logiques d’état ;
- **Supabase JS** pour l’authentification et les données ;
- **Stripe** pour les parcours de paiement ou de billetterie.

## Styling

Le projet utilise **Tailwind CSS** comme base de style.

Ce choix permet :

- une intégration rapide dans les composants ;
- une cohérence plus facile à maintenir ;
- un contrôle précis des espacements, tailles et variantes ;
- une évolution fluide de l’UI.

La refonte récente du front a consolidé plusieurs principes visuels :

- forte dominance orange ONY ;
- contraste marqué ;
- interface mobile-first ;
- cartes arrondies ;
- composants compacts ;
- hiérarchie de lecture renforcée.

## Logique de composants

Le frontend est structuré autour de plusieurs niveaux de composants :

### 1. Pages

Ce sont les routes principales rendues par l’App Router.

### 2. Composants de module

Exemples :

- cartes d’événements ;
- drawers ;
- recherche ;
- filtres ;
- bottom bar ;
- profil ;
- billets.

### 3. Composants partagés

Exemples :

- navigation basse ;
- bouton retour ;
- composants de résumé ;
- éléments d’overlay ;
- composants liés à la carte.

## Approche UX

Le frontend a été pensé selon une logique :

- **mobile-first**
- **map-first**
- **parcours courts**
- **découverte progressive**
- **cohérence visuelle entre écrans**

L’objectif n’est pas de proposer une interface dense ou administrative, mais une expérience :

- rapide ;
- lisible ;
- contextuelle ;
- agréable à utiliser sur mobile.

## Intégration avec les données

Le frontend ne se contente pas d’afficher des maquettes statiques.Il repose sur les vraies données du projet, notamment via :

- Supabase ;
- les relations entre événements, lieux et catégories ;
- les préférences utilisateur ;
- les billets et scans.

Une partie du travail récent a justement consisté à remplacer de nombreux contenus codés en dur par des données réelles issues de la base.

## Rôle du frontend dans l’architecture

Le frontend ONY concentre une part importante de la logique d’orchestration du produit :

- récupération et transformation de données ;
- affichage contextualisé ;
- logique de filtres ;
- interactions carte / liste ;
- transitions entre aperçu, détail et action.

Il joue donc un rôle plus large qu’un simple habillage visuel.

## Forces actuelles du frontend

À ce stade, le frontend dispose déjà de plusieurs points forts :

- structure claire par routes ;
- refonte UI largement avancée ;
- cohérence visuelle améliorée ;
- intégration réelle avec les données ;
- logique de carte centralisée ;
- navigation principale déjà solide.

## Points de vigilance

Les principaux points à surveiller pour la suite sont :

- maintenir la cohérence visuelle dans les futures évolutions ;
- éviter la duplication de logique dans certains composants ;
- stabiliser les zones encore moins abouties, notamment organisateur ;
- renforcer progressivement la couverture de test.

## Conclusion

Le frontend d’ONY constitue aujourd’hui l’un des blocs les plus avancés du projet.Il porte à la fois :

- l’expérience utilisateur ;
- une grande partie de l’orchestration applicative ;
- la cohérence produit.

Les pages suivantes détaillent les briques spécialisées comme la carte, les données, l’état applicatif et les outils d’exécution.
