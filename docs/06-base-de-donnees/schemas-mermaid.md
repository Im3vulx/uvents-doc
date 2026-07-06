---
## `docs/06-base-de-donnees/schemas-mermaid.md`
---


# Schémas Mermaid de la base de données

## Objectif de cette section

Cette page regroupe des schémas Mermaid simplifiés de la base de données ONY.

L’objectif n’est pas de reproduire toute la DDL SQL brute, mais de fournir des vues lisibles et pédagogiques des grands sous-ensembles relationnels du projet.

Ces schémas complètent les sections précédentes :

- vue d’ensemble ;
- tables métier ;
- relations et logique métier ;
- règles de sécurité.

## Pourquoi plusieurs schémas

La base de données ONY reste de taille raisonnable, mais un schéma unique trop dense deviendrait vite illisible.

Le découpage en plusieurs vues permet de mieux faire apparaître :

- le pôle authentification et profil ;
- le cœur métier événementiel ;
- les interactions et la billetterie ;
- une vue transversale simplifiée.

## Schéma 1 — Authentification et profil

Ce premier schéma montre comment l’utilisateur authentifié est prolongé par plusieurs tables applicatives.

```mermaid
erDiagram
    AUTH_USERS ||--|| PROFILES : possede
    AUTH_USERS ||--|| USER_PREFERENCES : configure
    AUTH_USERS ||--o{ ORGANIZER_REQUESTS : soumet
    AUTH_USERS ||--o{ EVENT_FAVORITES : ajoute
    AUTH_USERS ||--o{ EVENT_PARTICIPANTS : rejoint
    AUTH_USERS ||--o{ EVENT_VIEWS : consulte
    AUTH_USERS ||--o{ TICKETS : detient
    AUTH_USERS ||--o{ NOTIFICATIONS : recoit
    AUTH_USERS ||--o{ TICKET_SCANS : effectue

    PROFILES {
        uuid id PK
        text username
        text full_name
        text role
        boolean organizer_verified
    }

    USER_PREFERENCES {
        uuid user_id PK
        text categories
        int max_distance
        boolean notifications_enabled
        boolean follow_location
    }

    ORGANIZER_REQUESTS {
        uuid id PK
        uuid user_id FK
        text identifier
        text identifier_type
        text status
    }
```

## Lecture du schéma

Ce bloc montre que `auth.users` reste la racine d’identité, tandis que les tables applicatives portent les informations métier, de personnalisation et d’interaction.

## Schéma 2 — Cœur métier événements

Ce second schéma se concentre sur les événements, leurs lieux, leurs catégories et leur organisateur.

```mermaid
erDiagram
    PROFILES ||--o{ EVENTS : organise
    PLACES ||--o{ EVENTS : accueille
    EVENTS ||--o{ EVENT_CATEGORIES : relie
    CATEGORIES ||--o{ EVENT_CATEGORIES : classe

    PROFILES {
        uuid id PK
        text username
        text role
    }

    PLACES {
        uuid id PK
        text name
        text address
        text city
        text postal_code
        float latitude
        float longitude
    }

    EVENTS {
        uuid id PK
        text title
        text description
        timestamptz start_at
        timestamptz end_at
        uuid place_id FK
        uuid organizer_id FK
        text visibility
        int capacity
        numeric price
    }

    CATEGORIES {
        uuid id PK
        text name
    }

    EVENT_CATEGORIES {
        uuid event_id PK
        uuid category_id PK
    }
```

## Lecture du schéma

Cette vue correspond au noyau du produit : un événement appartient à un lieu, peut relever de plusieurs catégories et peut être rattaché à un organisateur via `profiles`.

## Schéma 3 — Interactions et billetterie

Ce troisième schéma représente les usages utilisateur autour d’un événement.

```mermaid
erDiagram
    AUTH_USERS ||--o{ EVENT_FAVORITES : met_en_favori
    AUTH_USERS ||--o{ EVENT_PARTICIPANTS : participe
    AUTH_USERS ||--o{ EVENT_VIEWS : consulte
    AUTH_USERS ||--o{ NOTIFICATIONS : recoit
    AUTH_USERS ||--o{ TICKETS : detient
    AUTH_USERS ||--o{ TICKET_SCANS : effectue

    EVENTS ||--o{ EVENT_FAVORITES : est_favori
    EVENTS ||--o{ EVENT_PARTICIPANTS : accueille
    EVENTS ||--o{ EVENT_VIEWS : est_consulte
    EVENTS ||--o{ NOTIFICATIONS : declenche
    EVENTS ||--o{ TICKETS : genere

    TICKETS ||--o{ TICKET_SCANS : est_scane

    EVENT_FAVORITES {
        uuid user_id PK
        uuid event_id PK
        timestamptz created_at
    }

    EVENT_PARTICIPANTS {
        uuid event_id PK
        uuid user_id PK
        timestamptz created_at
    }

    EVENT_VIEWS {
        uuid id PK
        uuid event_id FK
        uuid user_id FK
        timestamptz viewed_at
    }

    NOTIFICATIONS {
        uuid id PK
        uuid user_id FK
        uuid event_id FK
        text type
        timestamptz read_at
    }

    TICKETS {
        uuid id PK
        uuid user_id FK
        uuid event_id FK
        text event_name
        timestamptz event_date
        text qr_code
    }

    TICKET_SCANS {
        uuid id PK
        uuid ticket_id FK
        uuid event_id FK
        uuid scanned_by FK
        timestamptz scanned_at
    }
```

## Lecture du schéma

Cette vue fait apparaître la progression fonctionnelle entre l’intérêt pour un événement, la détention d’un billet, puis le contrôle d’accès.

## Schéma 4 — Vue transverse simplifiée

Enfin, une vue plus compacte permet de retenir la structure générale.

```mermaid
flowchart TD
    AUTH["auth.users"] --> PROFILES["profiles"]
    AUTH --> PREFS["user_preferences"]
    AUTH --> ORGREQ["organizer_requests"]

    PROFILES --> EVENTS["events"]
    PLACES["places"] --> EVENTS
    EVENTS --> EC["event_categories"]
    CATEGORIES["categories"] --> EC

    AUTH --> FAV["event_favorites"]
    AUTH --> PART["event_participants"]
    AUTH --> VIEWS["event_views"]
    AUTH --> NOTIF["notifications"]
    EVENTS --> FAV
    EVENTS --> PART
    EVENTS --> VIEWS
    EVENTS --> NOTIF

    AUTH --> TICKETS["tickets"]
    EVENTS --> TICKETS
    TICKETS --> SCANS["ticket_scans"]
```