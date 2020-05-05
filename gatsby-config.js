module.exports = {
  siteMetadata: {
    title: `Cherrie Tickles Her Francy`,
    siteUrl: `https://localhost:8000`,
    description: `Wedding website for Francis Calizo and Cherrie Sarmiento on February 6, 2021.`,
    author: "Francis Calizo",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-transformer-json`,
    `gatsby-plugin-favicon`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-nprogress`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/images/gallery`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `party`,
        path: `${__dirname}/src/components/wedding-party/data`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`raleway\:400,700`, `poppins`, `lato`, `alex brush`],
        display: "swap",
      },
    },
  ],
}
