'use strict'

module.exports = `
    {
        allWpPage {
            nodes {
              title
              slug
              id
              content
            }
        }
        
        allWpPost {
            nodes {
              title
              slug
              id
              content
            }
        }
    }
`