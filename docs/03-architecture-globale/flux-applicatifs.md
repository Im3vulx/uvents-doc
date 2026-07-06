---
## `docs/03-architecture-globale/flux-applicatifs.md`

---
# Flux applicatifs

## Objectif de cette section

Cette page décrit les grands flux applicatifs d’ONY, c’est-à-dire la manière dont les données et les actions circulent entre :

- l’utilisateur ;
- le frontend ;
- les routes applicatives ;
- Supabase ;
- Stripe ;
- l’infrastructure d’exploitation.

L’objectif est de rendre lisibles les interactions majeures du projet avant de détailler chaque partie dans les sections suivantes.

## Vue générale

Dans ONY, les flux applicatifs se structurent autour de quelques scénarios récurrents :

1. affichage d’un événement
2. exploration filtrée sur la carte
3. authentification
4. achat / génération d’un billet
5. scan d’un ticket
6. supervision et santé applicative
7. déploiement

---

## 1. Flux de consultation d’un événement

### Déclencheur

L’utilisateur ouvre l’accueil, la page events ou la carte.

### Séquence générale

1. le frontend charge la vue ;
2. les données événements sont récupérées ;
3. des informations liées aux lieux, catégories et préférences peuvent être croisées ;
4. l’utilisateur voit une liste, une carte ou un résumé ;
5. un clic mène à un détail plus complet.

### Données impliquées

- `events`
- `places`
- `categories`
- `event_categories`
- éventuellement `user_preferences`

### Remarque

Ce flux constitue le cœur de l’usage quotidien de l’application.

---

## 2. Flux de filtrage et de proximité

### Déclencheur

L’utilisateur :

- arrive sur la map ;
- applique un filtre ;
- clique sur une catégorie ;
- réapplique ses préférences.

### Séquence générale

1. récupération de la position utilisateur ou d’un centre de carte ;
2. lecture des préférences ou filtres actifs ;
3. calcul ou application de la pertinence ;
4. affichage des résultats filtrés ;
5. tri par proximité ou ordre contextuel ;
6. synchronisation avec la liste visible.

### Données impliquées

- `places`
- `events`
- `event_categories`
- `user_preferences`

### Particularité

ONY distingue les préférences persistées et les filtres temporaires de navigation.

---

## 3. Flux d’authentification

### Déclencheur

L’utilisateur s’inscrit ou se connecte.

### Séquence générale

1. l’utilisateur accède à la page d’auth ;
2. le frontend déclenche un flux Supabase Auth ;
3. la session est créée ;
4. le profil et les préférences peuvent être récupérés ;
5. l’utilisateur est redirigé vers une zone pertinente de l’application.

### Données impliquées

- `auth.users`
- `profiles`
- `user_preferences`

### Particularité

Le projet prend aussi en charge un flux OAuth, notamment Google.

---

## 4. Flux d’achat / génération de billet

### Déclencheur

L’utilisateur choisit d’obtenir un billet pour un événement.

### Séquence générale

1. consultation de la page événement ;
2. action d’achat ou de réservation ;
3. interaction éventuelle avec une route API côté app ;
4. intégration Stripe si nécessaire ;
5. création du ticket ;
6. affichage dans l’espace billets.

### Données impliquées

- `events`
- `tickets`
- `profiles` / `auth.users`
- `ticket_scans` ensuite dans le cycle de vie

### Particularité

Le projet est déjà câblé avec Stripe côté infrastructure applicative, même si tous les usages ne sont pas encore au même niveau de maturité.

---

## 5. Flux de scan

### Déclencheur

Un billet est présenté à un point de contrôle.

### Séquence générale

1. l’écran de scan est ouvert ;
2. le ticket ou QR code est lu ;
3. le ticket est identifié ;
4. la validité est vérifiée ;
5. un enregistrement de scan peut être créé ;
6. le résultat est renvoyé visuellement à l’opérateur.

### Données impliquées

- `tickets`
- `ticket_scans`
- `events`

---

## 6. Flux de supervision et santé applicative

### Déclencheur

Exécution régulière d’un script ou besoin de contrôle ponctuel.

### Séquence générale

1. appel à un endpoint de santé comme `/api/health` ;
2. vérification de l’état applicatif ;
3. vérification de services externes comme Supabase et Stripe ;
4. génération d’un message ou d’un embed Discord ;
5. exploitation éventuelle pour la supervision.

### Particularité

Le projet dispose d’au moins deux logiques complémentaires :

- heartbeat applicatif ;
- healthcheck système / PM2 / port / HTTP.

---

## 7. Flux de déploiement

### Déclencheur

Push / merge sur une branche cible (`dev` ou `main`).

### Séquence générale

1. GitLab CI déclenche un job de déploiement ;
2. le runner exécute un script serveur ;
3. les variables critiques sont vérifiées ;
4. un nouveau dossier de release est créé ;
5. le repo est cloné ;
6. les dépendances sont installées ;
7. le build est généré ;
8. le symlink `current` est basculé vers la nouvelle release ;
9. PM2 est redémarré ;
10. un healthcheck valide ou invalide la release ;
11. en cas d’échec, rollback automatique ;
12. notification Discord de succès ou d’échec.

### Particularité

Ce flux est déjà relativement robuste pour un projet de cette taille.

---

## Schéma des flux principaux

```mermaid
flowchart LR
    U[Utilisateur] --> FE[Frontend Next.js]
    FE --> DB[Supabase / PostgreSQL]
    FE --> API[API Routes Next.js]
    API --> DB
    API --> ST[Stripe]
    FE --> MAP[Map / géolocalisation]

    FE --> H[/api/health]
    H --> DIS[Discord]

    GIT[GitLab] --> CI[Pipeline CI/CD]
    CI --> DEPLOY[Script de déploiement]
    DEPLOY --> REL[Release courante]
    REL --> PM2[PM2]
    PM2 --> FE
```
