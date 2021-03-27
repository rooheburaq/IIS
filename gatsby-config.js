/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
	siteMetadata: {
	    title: `International Iqbal Society`,
	    description: `Sourcing data from Local IIS Site`,
	  },
    plugins: [
      {
        resolve: `gatsby-source-wordpress`,
        options: {
          /*
           * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
           * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
           */
          url: `http://iis.local/graphql`,
          protocol: `http`,
          hostingWPCOM: false,
          useACF: true,
        },
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "fonts",
          path: `${__dirname}/src/fonts/`
        }
      },
      {
	      resolve: `gatsby-plugin-typography`,
	      options: {
	        pathToConfigModule: `src/utils/typography`,
	      },
	    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-sharp`, 
    `gatsby-plugin-react-helmet`,
  ],
}