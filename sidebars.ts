import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'introduction/index',

    {
      type: 'category',
      label: 'Contexte projet',
      items: [
        'contexte-projet/presentation',
        'contexte-projet/objectifs',
        'contexte-projet/perimetre-actuel',
        'contexte-projet/jalons-et-avancement',
        'contexte-projet/direction-artistique-et-ux',
      ],
    },

    {
      type: 'category',
      label: 'Vue fonctionnelle',
      items: [
        'vue-fonctionnelle/roles-et-profils',
        'vue-fonctionnelle/parcours-principaux',
        'vue-fonctionnelle/modules-fonctionnels',
        'vue-fonctionnelle/flux-metier',
      ],
    },

    {
      type: 'category',
      label: 'Architecture globale',
      items: [
        'architecture-globale/vue-densemble',
        'architecture-globale/flux-applicatifs',
        'architecture-globale/schemas',
      ],
    },

    {
      type: 'category',
      label: 'Stack technique',
      items: [
        'stack-technique/frontend',
        'stack-technique/cartographie-et-geolocalisation',
        'stack-technique/backend-logique',
        'stack-technique/donnees-et-auth',
        'stack-technique/etat-applicatif',
        'stack-technique/outils-run-et-deploiement',
      ],
    },

    {
      type: 'category',
      label: 'Application',
      items: [
        'application/structure-du-projet',
        'application/routing-applicatif',

        {
          type: 'category',
          label: 'Authentification',
          items: [
            'application/authentification/authentification',
          ],
        },

        {
          type: 'category',
          label: 'Accueil',
          items: [
            'application/accueil/accueil',
          ],
        },

        {
          type: 'category',
          label: 'Événements',
          items: [
            'application/events/listing-events',
            'application/events/detail-event',
            'application/events/creation-event',
            'application/events/achat-et-paiement',
          ],
        },

        {
          type: 'category',
          label: 'Carte',
          items: [
            'application/map/map-interactive',
          ],
        },

        {
          type: 'category',
          label: 'Tickets',
          items: [
            'application/tickets/tickets',
          ],
        },

        {
          type: 'category',
          label: 'Profil',
          items: [
            'application/profile/profile',
          ],
        },

        {
          type: 'category',
          label: 'Organisation',
          items: [
            'application/organization/organization',
          ],
        },

        {
          type: 'category',
          label: 'Scan',
          items: [
            'application/scan/scan-billet',
          ],
        },

        {
          type: 'category',
          label: 'API',
          items: [
            'application/api/api-routes',
          ],
        },

        {
          type: 'category',
          label: 'Composants partagés',
          items: [
            'application/composants-partages/bottom-nav',
            'application/composants-partages/event-drawer',
            'application/composants-partages/map-component',
            'application/composants-partages/search-et-filtres',
            'application/composants-partages/back-button',
          ],
        },

        {
          type: 'category',
          label: 'Libs et stores',
          items: [
            'application/lib-et-stores/supabase-client',
            'application/lib-et-stores/stripe',
            'application/lib-et-stores/event-summary',
            'application/lib-et-stores/category-presentation',
            'application/lib-et-stores/stores',
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'Base de données',
      items: [
        'base-de-donnees/vue-densemble',
        'base-de-donnees/tables-metier',
        'base-de-donnees/relations-et-logique-metier',
        'base-de-donnees/regles-de-securite',
        'base-de-donnees/schemas-mermaid',
      ],
    },

    {
      type: 'category',
      label: 'Infrastructure & déploiement',
      items: [
        'infrastructure-deploiement/vue-infra',
        'infrastructure-deploiement/environnements',
        'infrastructure-deploiement/arborescence-serveurs',
        'infrastructure-deploiement/pm2',
        'infrastructure-deploiement/gitlab-ci-cd',
        'infrastructure-deploiement/deploiement-atomique',
        'infrastructure-deploiement/variables-denvironnement',
      ],
    },

    {
      type: 'category',
      label: 'Exploitation & debug',
      items: [
        'exploitation-debug/monitoring',
        'exploitation-debug/alertes',
        'exploitation-debug/commandes-utiles',
        'exploitation-debug/procedures-de-diagnostic',
        'exploitation-debug/rollback',
        'exploitation-debug/journalisation',
      ],
    },

    {
      type: 'category',
      label: 'Workflow projet',
      items: [
        'workflow-projet/repositories',
        'workflow-projet/branches',
        'workflow-projet/merge-requests',
        'workflow-projet/board-et-statuts',
        'workflow-projet/ci-publication',
      ],
    },

    {
      type: 'category',
      label: 'Sécurité',
      items: [
        'securite/authentification',
        'securite/autorisation',
        'securite/secrets-et-env',
        'securite/paiement',
        'securite/geolocalisation-et-donnees-perso',
        'securite/exposition-reseau',
      ],
    },

    {
      type: 'category',
      label: 'Accessibilité & qualité',
      items: [
        'accessibilite-qualite/referentiels',
        'accessibilite-qualite/etat-actuel',
        'accessibilite-qualite/principes-ui-ux',
        'accessibilite-qualite/demarche-continue',
      ],
    },

    {
      type: 'category',
      label: 'Tests',
      items: [
        'tests/etat-actuel',
        'tests/strategie-de-test',
        'tests/playwright',
        'tests/recette',
        'tests/plan-devolution',
      ],
    },

    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'category',
          label: 'Guide utilisateur',
          items: [
            'guides/guide-utilisateur/creer-un-compte',
            'guides/guide-utilisateur/decouvrir-des-evenements',
            'guides/guide-utilisateur/filtrer-sur-la-map',
            'guides/guide-utilisateur/acheter-un-billet',
            'guides/guide-utilisateur/retrouver-ses-billets',
          ],
        },
        {
          type: 'category',
          label: 'Guide organisateur',
          items: [
            'guides/guide-organisateur/devenir-organisateur',
            'guides/guide-organisateur/creer-un-evenement',
            'guides/guide-organisateur/modifier-un-evenement',
            'guides/guide-organisateur/scanner-un-billet',
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'Annexes',
      items: [
        'annexes/glossaire',
        'annexes/liens-utiles',
        'annexes/historique',
      ],
    },
  ],
};

export default sidebars;