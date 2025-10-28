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
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
          {to: '/docs/foundations', label: 'Foundations', position: 'left'},
          {to: '/docs/brand', label: 'Brand', position: 'left'},
          {to: '/docs/system', label: 'Design System', position: 'left'},
          {to: '/docs/localization', label: 'Localization', position: 'left'},
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
                to: '/docs/getting-started',
              },
              {
                label: 'Foundations',
                to: '/docs/foundations',
              },
              {
                label: 'Localization',
                to: '/docs/localization',
              },
              {
                label: 'Research',
                to: '/docs/Research',
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
