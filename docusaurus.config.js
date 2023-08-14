const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Collaborate to Accelerate',
  tagline: 'Revolutionizing Enterprise App Dev at Scale',
  url: 'https://creatorworkflowsnow.github.io',
  baseUrl: '/lab-aemc-utah-v3/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'CreatorWorkflowsNow',
  projectName: 'lab-aemc-utah-v3',
  trailingSlash: true,

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
        },
        blog: false, // Optional: disable the blog plugin
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light', // Set the default mode
        disableSwitch: true, // Disable the dark mode toggle button
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Creator Workshop Lab Guides',
          src: 'img/servicenow-logo.png',
        },
        items: [{
          href: 'http://lowcodeworkshops.com/',
          label: 'LowCodeWorkshops.com',
          position: 'right',
        }, ],
      },
      footer: {
        style: 'light',
        links: [{
            title: 'Docs',
            items: [{
                label: 'Product Documentation',
                href: 'https://docs.servicenow.com/',
              },
              {
                label: 'Now Create',
                href: 'https://nowlearning.servicenow.com/nowcreate',
              },
              {
                label: 'Now Learning',
                href: 'https://nowlearning.servicenow.com/',
              },
            ],
          },
          {
            title: 'Community',
            items: [{
                label: 'ServiceNow Community',
                href: 'https://www.servicenow.com/community/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/servicenow',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/servicenow',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/user/servicenowinc',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/servicenow',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/servicenow/',
              },
              {
                label: 'TikTok',
                href: 'https://www.tiktok.com/@servicenow',
              },
            ],
          },
          {
            title: 'More',
            items: [{
                label: 'ServiceNow Developer',
                href: 'https://developer.servicenow.com/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/CreatorWorkflowsNow/',
              },
            ],
          },
          {
            title: 'Connect with Us',
            items: [{
                label: 'ServiceNow Developer',
                href: 'https://developer.servicenow.com/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/CreatorWorkflowsNow/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ServiceNow`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});