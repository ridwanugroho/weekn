// @ts-check
const config = {
  title: 'weekn Project',
  tagline: 'Weekend writer',
  url: 'https://github.com',
  baseUrl: '/weekn/',
  favicon: 'img/favicon.ico',
  organizationName: 'ridwanugroho', // Usually your GitHub org/user name.
  projectName: 'weekn', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'weekn Project',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'homeProjectSidebar',
          position: 'left',
          label: 'Home Projects',
        },
        {
          type: 'docSidebar',
          sidebarId: 'onJobProjectSidebar',
          position: 'left',
          label: 'On Job Projects',
        }
      ],
    },
  },
};

module.exports = config;
