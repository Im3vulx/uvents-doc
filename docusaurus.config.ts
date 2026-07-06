import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ONY Docs',
  tagline: 'Documentation technique, fonctionnelle et d’exploitation du projet ONY',
  favicon: 'img/favicon.ico',

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  url: 'https://uvents-doc-5a21db.gitlab.io',
  baseUrl: '/',

  organizationName: 'julien-lesimple',
  projectName: 'uvents-doc',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://gitlab.com/julien-lesimple/uvents-doc/-/edit/main/',
        },
        pages: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } as Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ONY Docs',
      logo: {
        alt: 'Logo ONY',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: 'Accueil', position: 'left'},
        {to: '/contexte-projet/presentation', label: 'Contexte', position: 'left'},
        {to: '/architecture-globale/vue-densemble', label: 'Architecture', position: 'left'},
        {to: '/application/structure-du-projet', label: 'Application', position: 'left'},
        {to: '/infrastructure-deploiement/vue-infra', label: 'Infra', position: 'left'},
        {to: '/exploitation-debug/monitoring', label: 'Exploitation', position: 'left'},
        {to: '/tests/etat-actuel', label: 'Tests', position: 'left'},
        {
          href: 'https://gitlab.com/julien-lesimple/uvents-app/',
          label: 'GitLab App',
          position: 'right',
        },
        {
          href: 'https://gitlab.com/julien-lesimple/uvents-doc/',
          label: 'GitLab Doc',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Accueil', to: '/'},
            {label: 'Contexte projet', to: '/contexte-projet/presentation'},
            {label: 'Vue fonctionnelle', to: '/vue-fonctionnelle/roles-et-profils'},
            {label: 'Architecture globale', to: '/architecture-globale/vue-densemble'},
          ],
        },
        {
          title: 'Technique',
          items: [
            {label: 'Stack technique', to: '/stack-technique/frontend'},
            {label: 'Application', to: '/application/structure-du-projet'},
            {label: 'Base de données', to: '/base-de-donnees/vue-densemble'},
            {label: 'Infrastructure & déploiement', to: '/infrastructure-deploiement/vue-infra'},
          ],
        },
        {
          title: 'Exploitation',
          items: [
            {label: 'Monitoring', to: '/exploitation-debug/monitoring'},
            {label: 'Commandes utiles', to: '/exploitation-debug/commandes-utiles'},
            {label: 'Rollback', to: '/exploitation-debug/rollback'},
            {label: 'Workflow projet', to: '/workflow-projet/repositories'},
          ],
        },
        {
          title: 'Ressources',
          items: [
            {label: 'Guide utilisateur', to: '/guides/guide-utilisateur/creer-un-compte'},
            {label: 'Guide organisateur', to: '/guides/guide-organisateur/devenir-organisateur'},
            {label: 'Annexes', to: '/annexes/liens-utiles'},
            {label: 'Dépôt GitLab App', href: 'https://gitlab.com/julien-lesimple/uvents-app'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} ONY - Documentation interne.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } as Preset.ThemeConfig,
};

export default config;