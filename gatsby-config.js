/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        "gatsby-plugin-sass",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Ryan Rushton",
                short_name: "RR",
                start_url: "/",
                background_color: "#000000",
                theme_color: "#000000",
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: "standalone",
                icon: "src/images/RR_Logo_Outlined.svg", // This path is relative to the root of the site.
                // An optional attribute which provides support for CORS check.
                // If you do not provide a crossOrigin option, it will skip CORS for manifest.
                // Any invalid keyword or empty string defaults to `anonymous`
                crossOrigin: `use-credentials`,
            },
        },
    ],
};
