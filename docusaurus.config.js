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

  plugins: ['docusaurus-plugin-sass'],

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
          customCss: [
            require.resolve('./src/css/custom.scss')
          ],
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      /*
      announcementBar: {
        id: 'survey',
        content:
          'Please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
        backgroundColor: '#DD7178',
        textColor: '#FFFFFF',
        isCloseable: false,
      },
      */
      colorMode: {
        defaultMode: 'light', // Set the default mode
        disableSwitch: true, // Disable the dark mode toggle button
        respectPrefersColorScheme: false, // If you only want to support one color mode, you likely want to ignore user system preferences.
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Creator Workshop Lab Guides',
          src: 'img/servicenow-logo.png',
          href: 'https://creatorworkflowsnow.github.io/',
          target: '_self',
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
    }),
});