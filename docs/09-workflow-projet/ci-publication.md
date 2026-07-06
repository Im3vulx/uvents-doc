---
## `ci-publication.md`
---

# CI et publication

## Objectif de cette section

Cette page décrit le lien entre la **CI** et la **publication** dans le workflow global de **ONY**.

L’objectif est d’expliquer :

- comment l’automatisation s’insère dans le cycle projet ;
- en quoi elle soutient la publication des versions ;
- quel est son rôle vis-à-vis du code et de la documentation ;
- pourquoi cette étape est importante pour garder un projet cohérent.

## Rôle de la CI

La CI, ou intégration continue, permet d’automatiser certaines vérifications et certaines actions à partir du dépôt Git.

Dans un projet comme ONY, elle contribue à :

- structurer l’intégration des changements ;
- réduire certaines manipulations manuelles ;
- homogénéiser les étapes techniques ;
- fiabiliser une partie du passage entre modification et mise à disposition.

Elle constitue donc une brique de cohérence entre développement, validation et publication.

## Lien avec le pipeline

La documentation d’infrastructure prévoit déjà une page dédiée au pipeline **GitLab CI/CD**, ce qui montre que la logique de CI fait partie intégrante de l’architecture technique documentée.

Dans le workflow projet, cette dimension doit être comprise non seulement comme un mécanisme technique, mais aussi comme un outil de continuité entre le travail de développement et la mise en ligne.

## Publication applicative

Pour la partie applicative, la CI peut servir à :

- déclencher une séquence de build ;
- lancer un déploiement ;
- exécuter des vérifications ;
- confirmer qu’une version est prête à être exposée.

Elle permet donc d’encadrer la publication technique du projet.

## Publication documentaire

La documentation ONY est elle aussi intégrée à un dépôt distinct et à une structure Docusaurus complète. Le dépôt documentaire est configuré avec une URL publique dédiée et une logique de publication propre.

Cela implique que la publication documentaire fait également partie du workflow global, même si elle ne suit pas exactement le même cycle que l’application.

## Intérêt de la publication automatisée

Automatiser la publication apporte plusieurs bénéfices :

- meilleure reproductibilité ;
- moins d’erreurs manuelles ;
- publication plus régulière ;
- cohérence entre dépôt et version publiée ;
- meilleure traçabilité.

Cela vaut autant pour l’application que pour la documentation, dès lors que le mécanisme reste maîtrisé.

## Ce que la CI ne remplace pas

La CI et la publication automatisée ne remplacent pas :

- la relecture ;
- les validations fonctionnelles ;
- les tests utiles ;
- les décisions de mise en ligne ;
- la surveillance post-publication.

Une publication automatisée peut être techniquement réussie tout en révélant ensuite un problème fonctionnel ou métier.

## Lien avec le workflow global

Dans ONY, la CI et la publication s’insèrent naturellement dans la chaîne suivante :

```mermaid
flowchart LR
    CODE[Code ou documentation] --> GIT[Commit / push]
    GIT --> CI[CI]
    CI --> VALID[Validation technique]
    VALID --> PUB[Publication]
```
