// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
const simplePlantUML = require("@akebifiky/remark-simple-plantuml");
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Build Finder',
  tagline: 'Документация проекта Build Finder',
  favicon: 'img/favicon.ico',
  url: 'https://kamiladmitr.github.io',
  baseUrl: 'BuildFinder',
  organizationName: 'kamiladmitr', // Usually your GitHub org/user name.
  projectName: 'BuildFinder', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
 //подключаем плагин для drawio
 plugins: [
  ['drawio', {}]
],
presets: [
  [
    'classic',
    /** @type {import('@docusaurus/preset-classic').Options} */
    ({
      docs: {
        sidebarPath: './sidebars.js',
        routeBasePath: '/',
        editUrl:
          'https://github.com/kamiladmitr/BuildFinder',
        remarkPlugins: [simplePlantUML], //подключаем плагин для plantuml
      },
      blog: false,
      theme: {
        customCss: './src/css/custom.css',
      },
    }),
  ],
  // подключаем плагин для OPENAPI
  [
    'redocusaurus',
    {
      specs: [
        {
          id: 'petstore',
          spec: 'api_specs/openapi.yaml',
        },
      ],
      theme: {
        primaryColor: '#1890ff',
      },
    }
  ],
],

themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'BuildFinder', //Название на навбаре
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg', //Логотип на навбаре
      },
      // тут можно настроить элементы навбара
      items: [
        {
          href: '/',
          label: 'Документация',
          position: 'right',
        },
        {
          href: 'https://github.com/kamiladmitr/BuildFinder',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    // тут можно настроить элементы футера
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} BuildFinder, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;