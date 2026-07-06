---
title: Jalons et avancement
---
# Jalons et avancement

## Logique générale

Le projet a été structuré autour d’une logique de **jalons MVP**, permettant de découper le développement en blocs lisibles et progressifs.

Cette approche présente plusieurs avantages :

- meilleure priorisation ;
- vision claire des dépendances ;
- suivi plus simple dans le board GitLab ;
- possibilité de valider un socle avant d’ouvrir des chantiers plus avancés.

## Jalons MVP définis

Les jalons structurants identifiés dans la documentation technique sont les suivants :

### Jalon 1 — Socle technique + Authentification

Ce jalon couvre :

- mise en place du socle applicatif ;
- authentification ;
- gestion de base des profils ;
- premiers fondements de l’architecture technique.

### Jalon 2 — Consultation

Ce jalon couvre principalement :

- carte interactive ;
- consultation d’événements ;
- fiches événements ;
- premiers parcours de découverte.

### Jalon 3 — Parcours organisateur

Ce jalon couvre :

- logique organisateur ;
- création et gestion d’événements ;
- structuration des parcours métier côté publication.

### Jalon 4 — Billetterie simulée + QR Code + Scan

Ce jalon couvre :

- génération de billets ;
- logique de réservation simulée ;
- QR code ;
- scan ;
- validation à l’entrée.

## État actuel par jalon

## Jalon 1 — Socle technique + Authentification

**État : largement avancé**

Le socle technique est en place et la partie authentification a été renforcée récemment :

- auth fonctionnelle ;
- pages login/register harmonisées ;
- branding ONY intégré ;
- base technique plus stable ;
- documentation en cours de remise à niveau.

## Jalon 2 — Consultation

**État : très avancé**

C’est aujourd’hui l’un des blocs les plus solides du projet.

Les éléments déjà largement avancés incluent :

- accueil ;
- page events ;
- catégories ;
- carte interactive ;
- filtres ;
- listing ;
- détail événement ;
- tri par proximité ;
- overlays résumés ;
- amélioration importante de la cohérence UI.

## Jalon 3 — Parcours organisateur

**État : partiellement avancé**

La logique existe dans le projet, mais ce jalon reste à consolider :

- certaines bases sont déjà présentes ;
- l’organisation métier demande encore d’être mieux pensée ;
- cette zone nécessitera probablement des ajustements côté logique et backend.

## Jalon 4 — Billetterie simulée + QR Code + Scan

**État : bien avancé**

Le projet dispose déjà :

- d’un système de billets ;
- d’un affichage de tickets retravaillé ;
- d’une logique de scan ;
- d’un socle QR code / validation.

La finition fonctionnelle et documentaire devra encore être consolidée, mais le socle existe.

## Avancement transversal

Au-delà des jalons fonctionnels, le projet a aussi beaucoup progressé sur des dimensions transverses :

### 1. Harmonisation UI/UX

Le front visible a fait l’objet d’un gros travail de remise au propre :

- auth ;
- accueil ;
- page events ;
- map ;
- filtres ;
- overlays ;
- profil ;
- bottom bar ;
- billets ;
- détails événement.

### 2. Infrastructure et exploitation

Le projet est déjà structuré sur des bases d’exploitation sérieuses :

- CI/CD ;
- déploiement atomique ;
- PM2 ;
- healthchecks ;
- alertes Discord ;
- logique de rollback ;
- monitoring.

### 3. Documentation

La documentation Docusaurus est en reconstruction pour devenir la référence technique unique du projet.

## Mode de suivi

Le suivi du projet repose principalement sur :

- les Merge Requests ;
- le board Kanban GitLab ;
- les statuts de travail ;
- la documentation technique ;
- les échanges de priorisation au fil des jalons.

L’objectif est de garder une lecture simple de l’avancement sans dépendre uniquement d’un livrable figé.

## Synthèse

À ce stade :

- le **socle de consultation** est solide ;
- le **socle technique** est réel ;
- la **partie UI/front** a été très fortement renforcée ;
- la **billetterie simulée** est bien engagée ;
- la **partie organisateur** reste l’un des grands blocs à consolider ;
- la **documentation** doit désormais rattraper le niveau réel du projet.

## Orientation pour la suite

Les prochaines priorités documentaires et techniques s’orientent autour de :

- la consolidation de la documentation ;
- la stabilisation des workflows ;
- la clarification des zones organisateur / notifications / préférences ;
- la mise à niveau progressive des tests ;
- la poursuite de la qualité d’exploitation.
