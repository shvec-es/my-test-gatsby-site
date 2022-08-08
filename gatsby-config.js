module.exports = {
  siteMetadata: {
    title: "My Test Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    `gatsby-plugin-netlify-cms`,
    // {
    //   resolve: `gatsby-plugin-intl`,
    //   options: {
    //     path: `${__dirname}/src/intl`,
    //     languages: [`uk`, `en`],
    //     defaultLanguage: `uk`,
    //     redirect: true,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/locales`,
    //     name: `locale`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-react-i18next`,
    //   options: {
    //     localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
    //     languages: [`uk`, `ru`],
    //     defaultLanguage: `uk`,
    //     siteUrl: `https://moonlit-tiramisu-221451.netlify.app/`,
    //     // you can pass any i18next options
    //     i18nextOptions: {
    //       interpolation: {
    //         escapeValue: false, // not needed for react as it escapes by default
    //       },
    //       keySeparator: false,
    //       nsSeparator: false,
    //     },
    //     pages: [
    //       {
    //         matchPath: "/:lang?/blog/:uid",
    //         getLanguageFromPath: true,
    //       },
    //       {
    //         matchPath: "/preview",
    //         languages: ["uk"],
    //       },
    //     ],
    //   },
    // },
  ],
};
