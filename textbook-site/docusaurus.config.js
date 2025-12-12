// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI Native Software Development',
  tagline: 'Colearning Agentic AI with Python and TypeScript',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-site-url.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        indexDocs: true,
        indexBlog: false,
        language: "en",
        // Removed "forceIgnoreNoIndex" to fix the crash
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/your-repo/edit/main/',
        },
        blog: {
          showReadingTime: true,
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
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },

      image: 'img/docusaurus-social-card.jpg',
      
      navbar: {
        title: 'AI Native',
        /* Logo removed as requested */
        /*
        logo: {
          alt: 'AI Native Logo',
          src: 'img/logo.svg',
        },
        */
        items: [
          // {
          //   to: '/book',
          //   position: 'left',
          //   label: 'Book',
          //   activeBaseRegex: 'docs/|book',
          // },
          {
            type: 'docSidebar',
            sidebarId: 'chaptersSidebar', // Links directly to the sidebar
            position: 'left',
            label: 'Book',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/your-repo',
            label: 'GitHub',
            position: 'right',
          },
          // Search bar is auto-injected, but you can force it here if needed
        ],
      },
      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              { label: 'Start Reading', to: '/docs/intro' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
              { label: 'Twitter', href: 'https://twitter.com/docusaurus' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Panaversity AI Native. Built with Docusaurus.`,
      },
      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;