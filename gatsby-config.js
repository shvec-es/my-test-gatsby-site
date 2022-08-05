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
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`uk`, `en`],
        defaultLanguage: `uk`,
        redirect: true,
      },
    },
  ],
};
