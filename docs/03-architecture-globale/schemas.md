---
## `docs/03-architecture-globale/schemas.md`

---


# Schémas

## Objectif de cette section

Cette page regroupe les schémas globaux du projet ONY.Ils permettent de visualiser rapidement :

- les blocs du système ;
- les flux principaux ;
- la chaîne de déploiement ;
- le cycle événement → billet → scan.

Ces schémas ne remplacent pas les descriptions détaillées des sections suivantes, mais servent de support de compréhension transversale.

---

## 1. Schéma macro du système

```mermaid
flowchart TD
    U[Utilisateur] --> WEB[Application ONY - Next.js]
    WEB --> AUTH[Supabase Auth]
    WEB --> DB[Supabase PostgreSQL]
    WEB --> API[Routes API internes]
    API --> STRIPE[Stripe]
    WEB --> MAP[Carte / géolocalisation]

    DEV[Développeur] --> GIT[GitLab]
    GIT --> PIPE[Pipeline CI/CD]
    PIPE --> PRE[Préproduction]
    PIPE --> PROD[Production]

    PROD --> PM2[PM2]
    PROD --> HC[Healthchecks]
    HC --> DISC[Discord]
    PROD --> ZBX[Zabbix]
```

### Lecture

Ce schéma montre les blocs structurants :

* interface applicative ;
* auth et données via Supabase ;
* services externes ;
* pipeline de déploiement ;
* supervision.

---

## 2. Schéma fonctionnel de découverte d’événements

```mermaid
flowchart LR
    A[Accueil / Events / Map] --> B[Chargement des événements]
    B --> C[Application des préférences]
    C --> D[Filtrage / catégories / proximité]
    D --> E[Cards / marqueurs / liste]
    E --> F[Résumé rapide]
    F --> G[Page détail]
```

### Lecture

La découverte d’événements est progressive :

* affichage initial ;
* personnalisation ;
* résumé ;
* détail.

Cette hiérarchie guide directement l’UX actuelle du produit.

---

## 3. Schéma billet / scan


```mermaid

flowchart TD
    E[Événement] --> A[Achat / réservation]
    A --> T[Ticket créé]
    T --> Q[QR code / billet]
    Q --> S[Scan]
    S --> V[Validation]
    S --> R[Refus / erreur]
```

Ce schéma résume le cycle de vie simplifié d’un billet dans ONY.

---

## 4. Schéma de déploiement atomique


```mermaid
flowchart TD
    G[GitLab CI] --> S[Script serveur]
    S --> C[Clone du repo]
    C --> I[Installation npm]
    I --> B[Build Next.js]
    B --> R[Nouvelle release horodatée]
    R --> L[Switch du symlink current]
    L --> P[Restart PM2]
    P --> H[Healthcheck HTTP]
    H --> OK[Déploiement validé]
    H --> KO[Rollback automatique]
    KO --> PREV[Retour à la release précédente]
```

Ce schéma représente la logique actuelle de déploiement :

* release versionnée ;
* bascule atomique ;
* healthcheck ;
* rollback en cas d’échec.

---

## 5. Schéma carte / filtres / liste

La map n’est pas indépendante du reste :

```mermaid
flowchart LR
    U[Utilisateur] --> M[Map]
    U --> F[Filtres]
    F --> M
    M --> L[Liste Plus d'événements]
    L --> D[Détail événement]
    U --> P[Préférences utilisateur]
    P --> F
```

* les filtres modifient la carte ;
* la carte influence la liste ;
* les préférences alimentent les filtres ;
* la navigation mène au détail.

---

## 6. Schéma des couches techniques


```mermaid
flowchart TD
    UI[UI / Pages / Composants] --> APP[Logique applicative]
    APP --> DATA[Accès données]
    DATA --> SUPA[Supabase]
    APP --> EXT[Services externes]
    EXT --> STRIPE[Stripe]
    EXT --> GEO[Géolocalisation / géocodage]

    OPS[Exploitation] --> DEPLOY[Déploiement]
    OPS --> MON[Monitoring]
    OPS --> LOGS[Journalisation]
```

### Lecture

Ce schéma met en évidence les grandes couches :

* présentation ;
* logique ;
* données ;
* intégration ;
* exploitation.

---

## Bonnes pratiques pour la suite

Cette page a vocation à être enrichie au fur et à mesure de l’évolution du projet.

Les futurs schémas utiles à ajouter pourront inclure :

* schéma détaillé du parcours organisateur ;
* schéma ER complet de la base ;
* schéma des flux Stripe ;
* schéma de supervision prod / préprod ;
* schéma du cycle de test.

## Conclusion

Ces schémas servent de support de lecture rapide du projet.

Ils doivent rester :

* synthétiques ;
* lisibles ;
* cohérents avec l’état réel du système.

Les détails de chaque bloc sont ensuite documentés dans les sections suivantes.
