// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Novabolt',
    tagline: 'Documentation for Novabolt products',
    favicon: 'img/logo.png',

    // Set the production url of your site here
    url: 'https://docs.novabolt.dev',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'novaboltlabs', // Usually your GitHub org/user name.
    projectName: 'docs.novabolt.dev', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    id: 'cartify',
                    path: 'docs/cartify',
                    routeBasePath: 'cartify',
                    sidebarPath: require.resolve('./sidebarsCartify.js'),
                    breadcrumbs: false,
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'ticksify',
                path: 'docs/ticksify',
                routeBasePath: 'ticksify',
                sidebarPath: require.resolve('./sidebarsTicksify.js'),
                breadcrumbs: false,
            },
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/cartify/social-card.jpg',
            navbar: {
                title: 'Novabolt Docs',
                logo: {
                    alt: 'Novabolt Logo',
                    src: 'img/logo.svg',
                },
                hideOnScroll: true,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['php'],
            },
        }),
};

module.exports = config;
