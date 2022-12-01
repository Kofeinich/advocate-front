module.exports = {
    siteMetadata: {
        title: `Юрист в Новороссийске`,
        description: ``,
        author: `@Kofeinich`,
        siteUrl: `https://advocate-etalon.ru/`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-smoothscroll`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `white`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`,
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /svg/
                }
            }
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://advocate-etalon.ru',
                sitemap: 'https://advocate-etalon.ru/sitemap/sitemap-0.xml',
            }
        },
        {
            resolve: '@chakra-ui/gatsby-plugin',
            options: {
                resetCSS: true,
                isUsingColorMode: true,
            },
        },
    ],
}
