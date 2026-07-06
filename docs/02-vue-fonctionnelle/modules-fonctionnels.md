---
## `docs/02-vue-fonctionnelle/modules-fonctionnels.md`
---


# Modules fonctionnels

## Objectif de cette section

Cette page présente les principaux **modules fonctionnels** du projet **ONY**.

L’objectif est de décrire les grandes briques métier visibles du produit, c’est-à-dire les ensembles cohérents de fonctionnalités qui structurent l’expérience utilisateur et organisateur.

Cette lecture permet de comprendre ce que fait le produit, indépendamment du détail technique de son implémentation.

## Principe général

ONY n’est pas constitué d’une seule fonctionnalité isolée, mais de plusieurs modules fonctionnels qui coopèrent entre eux.

Chaque module répond à un besoin précis :

- découvrir ;
- filtrer ;
- consulter ;
- réserver ;
- retrouver ;
- gérer ;
- contrôler.

L’intérêt de cette section est de poser une cartographie claire des grandes fonctions portées par l’application.

## 1. Authentification

Le module d’authentification gère l’entrée utilisateur dans l’application.

Il couvre notamment :

- la connexion ;
- l’inscription ;
- la reconnexion ;
- la déconnexion ;
- l’accès aux zones réservées.

Ce module est central, car plusieurs fonctionnalités du produit dépendent de l’état connecté de l’utilisateur.

## 2. Découverte d’événements

Le module de découverte permet à l’utilisateur d’explorer les événements proposés dans l’application.

Il s’appuie sur plusieurs points d’entrée :

- l’accueil ;
- la page événements ;
- la carte ;
- les catégories ;
- les recommandations ou sélections visibles.

Ce module constitue le cœur d’usage principal du produit.

## 3. Carte interactive

La carte représente un module fonctionnel majeur dans ONY.

Elle permet :

- d’explorer les événements dans leur contexte géographique ;
- de visualiser les événements proches ;
- d’interagir avec des marqueurs ;
- de filtrer visuellement l’offre ;
- de lier la découverte à la proximité ou au territoire.

Ce module donne au produit une logique d’exploration plus intuitive qu’un simple catalogue.

## 4. Filtres et préférences

Ce module permet d’affiner l’expérience de découverte.

Il couvre notamment :

- les filtres temporaires de navigation ;
- les catégories actives ;
- la recherche contextuelle ;
- les préférences utilisateur persistées.

Il joue un rôle important pour rendre l’exploration plus pertinente sans imposer une navigation rigide.

## 5. Consultation du détail événement

Ce module permet de passer d’une découverte rapide à une compréhension complète d’un événement.

Il regroupe l’affichage :

- du titre ;
- du lieu ;
- de la date ;
- du prix ;
- de la description ;
- des actions principales possibles.

Il constitue le point de décision avant passage à l’achat, à la réservation ou à une autre action.

## 6. Billetterie

Le module de billetterie couvre la logique de récupération ou de génération d’un billet.

Il inclut notamment :

- le déclenchement du parcours d’achat ou de réservation ;
- la création du billet ;
- le rattachement au bon événement ;
- la mise à disposition dans l’espace utilisateur.

Ce module prolonge l’expérience au-delà de la simple consultation.

## 7. Espace billets

Ce module permet à l’utilisateur de retrouver les billets obtenus.

Il sert à :

- consulter ses tickets ;
- accéder aux informations essentielles ;
- retrouver un QR code ou un identifiant utile ;
- préparer l’accès à un événement.

Il constitue la continuité logique du module de billetterie.

## 8. Scan et contrôle

Le module de scan permet le contrôle d’un billet dans un contexte d’accès à un événement.

Il couvre notamment :

- la lecture du billet ;
- la vérification de validité ;
- la confirmation ou le refus ;
- la lisibilité du résultat du scan.

Ce module fait le lien entre la billetterie et l’usage opérationnel côté événement.

## 9. Profil utilisateur

Le module profil regroupe les fonctionnalités liées à l’identité et aux réglages de l’utilisateur.

Il peut couvrir :

- les informations personnelles ;
- les préférences ;
- l’accès à certains raccourcis ;
- les éléments liés au compte.

Il participe à la personnalisation globale de l’expérience.

## 10. Espace organisateur

Le module organisateur porte les usages liés à la création ou à la gestion d’événements.

Il couvre, selon l’état d’avancement du projet :

- la demande ou la reconnaissance du statut organisateur ;
- l’accès à une zone dédiée ;
- la création d’un événement ;
- la modification d’un événement ;
- certaines logiques de gestion liées à la publication.

Ce module ouvre ONY à une logique plus complète que la simple consommation d’événements.

## 11. Navigation et composants transverses

Certains éléments ne sont pas des modules métier autonomes, mais jouent un rôle transversal important dans le fonctionnement du produit.

On retrouve notamment :

- la navigation basse ;
- les composants de résumé ;
- les boutons de retour ;
- les composants de recherche ;
- certains composants partagés de carte ou de liste.

Ces briques participent fortement à la cohérence d’ensemble.

## Relations entre modules

Les modules fonctionnels ne sont pas isolés.

Par exemple :

- la découverte mène au détail ;
- le détail mène à la billetterie ;
- la billetterie mène à l’espace billets ;
- le billet peut être utilisé dans le module de scan ;
- le profil influence l’expérience via les préférences ;
- l’organisateur agit sur les événements visibles dans les modules de découverte.

Cette articulation fait d’ONY un système cohérent plutôt qu’une juxtaposition de pages.

## Point d’attention

Tous les modules n’ont pas forcément le même niveau de maturité à ce stade du projet.

Certains sont déjà bien présents dans l’expérience utilisateur.
D’autres, notamment certains usages organisateur ou certaines logiques avancées, restent encore à consolider.

Il est donc important de lire cette cartographie comme une structure fonctionnelle cible, déjà largement engagée mais encore en évolution sur certains points.

## Schéma simplifié

```mermaid
flowchart TD
    AUTH[Authentification] --> DISC[Découverte]
    DISC --> MAP[Carte]
    DISC --> DETAIL[Détail événement]
    DETAIL --> TICK[Billetterie]
    TICK --> MYT[Mes billets]
    MYT --> SCAN[Scan]

    AUTH --> PROFIL[Profil]
    PROFIL --> PREF[Préférences]

    AUTH --> ORGA[Espace organisateur]
    ORGA --> CREATE[Création / gestion d'événement]
    CREATE --> DISC