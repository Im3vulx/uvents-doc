---
## `docs/05-application/routing-applicatif.md`

---

# Routing applicatif

## Objectif de cette section

Cette page décrit l’organisation du routing dans ONY, c’est-à-dire la manière dont les routes applicatives sont structurées dans le projet.

Le projet utilise **Next.js App Router**, ce qui signifie que la structure du dossier `app/` reflète directement l’organisation des pages et des parcours.

## Principe général

Le routing applicatif d’ONY suit une logique orientée produit.Les routes principales sont organisées autour des grands modules fonctionnels de l’application :

- authentification
- accueil
- événements
- carte
- profil
- billets
- scan
- organisation
- API internes

Cette structure permet de relier directement :

- les routes visibles par l’utilisateur ;
- les zones métier du projet ;
- les groupes documentaires de cette documentation.

## Route racine

### `/`

La route racine correspond à la page d’accueil.

Cette page joue un rôle important dans la découverte :

- mise en avant d’événements ;
- recommandations ;
- catégories ;
- accès rapide aux parcours principaux.

Elle constitue l’un des premiers points d’entrée du produit.

## Routes d’authentification

Le projet regroupe les écrans d’authentification dans un groupe logique dédié.

### Exemples de parcours

- connexion
- inscription
- reset éventuel de mot de passe
- gestion de session initiale

Ces routes servent d’accès au contexte utilisateur et conditionnent certains comportements du reste de l’application.

## Routes événements

Les routes liées aux événements couvrent plusieurs besoins :

### Listing

- affichage de plusieurs événements
- découverte continue
- sections de recommandation et proximité

### Détail

- page dédiée à un événement précis
- chargement des données réelles associées

### Création / gestion

- création d’événement
- parcours liés à l’organisation

Le module événements constitue l’un des axes majeurs du routing.

## Routes carte

### `/map`

La route map correspond au cœur de l’expérience ONY.

Elle gère :

- l’affichage cartographique ;
- les filtres ;
- la recherche ;
- les événements proches ;
- la synchronisation entre carte et liste.

Cette route peut également recevoir un contexte depuis d’autres pages, par exemple :

- catégorie sélectionnée depuis l’accueil ;
- logique de recentrage ;
- exploration orientée proximité.

## Routes profil

### `/profile`

Cette route regroupe les fonctions liées à l’utilisateur connecté :

- consultation du profil ;
- préférences ;
- accès à certaines informations ou options du compte.

Elle joue un rôle de personnalisation et d’entrée secondaire vers des parcours plus personnels.

## Routes billets

### `/tickets`

Cette zone regroupe les billets associés à l’utilisateur.

Elle permet de :

- retrouver les tickets générés ;
- consulter leurs informations ;
- accéder à leur QR code ou équivalent.

## Routes scan

### `/scan`

Cette route correspond à l’écran de scan de billet.

Elle est utilisée dans le prolongement du parcours ticketing pour :

- lire un billet ;
- le valider ;
- contrôler l’accès à un événement.

## Routes organisation

### `/organization`

Cette zone regroupe les parcours liés à l’organisateur.

Elle couvre ou vise à couvrir :

- création d’événement ;
- gestion d’événement ;
- logique métier organisateur.

Cette partie existe déjà dans le code, mais reste l’une des zones les moins stabilisées fonctionnellement.

## Routes API internes

Le projet contient également des routes API internes dans le dossier `app/api`.

Elles servent notamment à :

- exposer un endpoint de santé ;
- gérer certaines intégrations Stripe ;
- gérer le géocodage ou des traitements techniques ;
- protéger certaines logiques qui ne doivent pas être traitées côté client.

Ces routes ne sont pas visibles comme des pages, mais elles font partie intégrante du routing du projet.

## Routes dynamiques

Le projet utilise aussi des routes dynamiques, notamment pour les détails d’événements.

### Exemple conceptuel

- `/events/[id]`

Cette logique permet de :

- charger un événement spécifique ;
- afficher un détail à partir de son identifiant ;
- réutiliser une structure unique pour plusieurs entités.

## Navigation transversale

Au-delà des routes elles-mêmes, plusieurs éléments participent à la navigation :

- bottom bar ;
- boutons retour ;
- overlays ;
- drawers ;
- redirections contextuelles ;
- boutons “Voir tout” ;
- navigation catégorie → map.

Le routing applicatif ne doit donc pas être lu comme une simple liste d’URLs, mais comme un système de parcours.

## Vue d’ensemble simplifiée

```mermaid
flowchart TD
    ROOT[Accueil] --> AUTH[Routes auth]
    ROOT --> EVENTS[Routes events]
    ROOT --> MAP[/map]
    ROOT --> PROFILE[/profile]
    ROOT --> TICKETS[/tickets]
    ROOT --> SCAN[/scan]
    ROOT --> ORGA[/organization]

    EVENTS --> DETAIL[/events/[id]]
    EVENTS --> CREATE[Création / gestion]
    MAP --> DETAIL
    PROFILE --> PREF[Préférences]
    ORGA --> CREATE

    API[app/api] --> HEALTH[/api/health]
    API --> STRIPE[/api/stripe/*]
    API --> GEO[/api/geocode]
```
