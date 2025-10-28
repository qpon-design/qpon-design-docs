// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Qpon Design',
  tagline: 'For Better Qpon',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://qpon.design',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'qpon-design', // Usually your GitHub org/user name.
  projectName: 'qpon-design-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'], /* 'id', 'zh-Hans' */
  },

  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/qpon-design/qpon-design-docs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/qpon-design/qpon-design-docs',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        docs: {
              routeBasePath: '/', // This removes the /docs prefix
              // ... other docs plugin options
            },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
      announcementBar: {
      id: 'support_us',
      content:
        'This docs already started on Oct 2025, visit <a target="_blank" rel="noopener noreferrer" href="https://qpon.id/about">About Qpon</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    },
      algolia: {
        // The application ID provided by Algolia
        appId: 'JMMNE2CXA9',

        // Public API key: it is safe to commit it
        apiKey: 'c67f80c69728c52cce2f3fe51918b52a',

        indexName: 'Qpon Design at Daeng',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
       replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        }, 

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,

        // Optional: whether you want to use the new Ask AI feature (undefined by default)
        askAi: 'YOUR_ALGOLIA_ASK_AI_ASSISTANT_ID',

        //... other Algolia params
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Qpon Design',
        logo: {
          alt: 'Qpon Design Logo',
          src: 'img/qpon-design.svg',
        },
        items: [
         /** {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Foundation',
          },  */
          {to: '/foundations', label: 'Foundations', position: 'left'},
          {to: '/brand', label: 'Brand', position: 'left'},
          // {to: '/docs/system', label: 'Design System', position: 'left'},
          {to: '/localization', label: 'Localization', position: 'left'},
          /**{to: '/blog', label: 'Blog', position: 'left'}, */
          {
            href: 'https://github.com/qpon-design/qpon-design-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Qpon Design',
            items: [
              {
                label: 'Getting Started',
                to: '/getting-started',
              },
              {
                label: 'Foundations',
                to: '/foundations',
              },
              {
                label: 'Localization',
                to: '/localization',
              },
              {
                label: 'Research',
                to: '/research',
              },
            ],
          },
          {
            title: 'Follow Qpon on:',
            items: [
              {
                label: 'TikTok',
                href: 'https://tiktok.com/@qpon.indonesia',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/qpon.indonesia',
              },
               {
                label: 'LinkedIn',
                href: 'https://linkedin.com/company/pt-qpon-digital-indonesia',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/qpon-design',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Qpon Design & Qpon User Growth team.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
