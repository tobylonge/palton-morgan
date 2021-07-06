module.exports = {
  siteMetadata: {
    title: `Platon Morgan`,
    description: `A web app built for the sole purpose of communicating all Palton Morgan Companies and Projects to potential investors at events and activation locations like Airports, Malls etc.`,
    author: `@Platon Morgan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Carrois Gothic`],
        display: "swap",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Palton Morgan`,
        short_name: `Palton`,
        start_url: `/`,
        background_color: `#972665`,
        theme_color: `#972665`,
        display: `standalone`,
        icon: `src/images/palton_morgan_dark.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false,
        tailwind: true,
        ignore: [
          "/src/styles/slick-theme.scss",
          "/src/styles/slick.scss",
          "custom.scss",
        ],
      },
    },
    `gatsby-plugin-offline`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
