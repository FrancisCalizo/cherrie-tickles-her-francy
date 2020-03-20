module.exports = {
  siteMetadata: {
    title: `Cherrie Tickles Her Francy`,
    siteUrl: `https://localhost:8000`,
    description: `Francis and Cherrie's Wedding 2021`,
    author: "Francis Calizo",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Raleway:400,700", "Poppins", "Lato", "Alex Brush"],
        },
      },
    },
  ],
}
