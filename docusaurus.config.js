/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Technical Essentials Handbook',
  tagline: 'Notes',
  url: 'https://technical-essentials-handbook.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ashishkharche', // Usually your GitHub org/user name.
  projectName: 'technical-essentials-handbook', // Usually your repo name.
  // customFields: {
  //   trailingSlash: true
  // },
  themeConfig: {
    navbar: {
      title: 'Technical Essentials Handbook',
      logo: {
        alt: 'Technical Essentials Handbook Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ashishkharche/technical-essentials-handbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    // algolia: {
    //   apiKey: "5470eae5ca52eb07867cedc3fdd33424",
    //   indexName: "awesome_piracy",
    // },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ashishkharche/technical-essentials-handbook',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Technical Essentials Handbook.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ashishkharche/technical-essentials-handbook/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ashishkharche/technical-essentials-handbook/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
