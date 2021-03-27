const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWpPost(sort: {fields: [date]}) {
        edges {
          node {
            title
            excerpt
            slug
            uri
            date(formatString: "MM-DD-YYYY")
          }
        }
      }
      allWpPage(sort: {fields: [date]}) {
          edges {
            node {
              title
              slug
              content
              parentId
              wpParent {
                node{
                    slug
                    databaseId
                  }
                }
              PoeticalPage {
                originalTitleOfPoemGhazelRubai
                romanTitleOfPoemGhazelRubai
                contentAlignment
                transliterationRomanUrdu
              }
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
        }
    }
  `).then(result => {
    result.data.allWpPost.edges.forEach(({ node }) => {
      createPage({
        // Decide URL structure
        path: decodeURIComponent(`/${node.slug}/`),
        // path to template
        component: path.resolve(`./src/templates/post.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
        },
      })
    })

    result.data.allWpPage.edges.forEach(({ node }) => 
      {
        if(node.wpParent == null){ //Simple Pages
          createPage({
            // Decide URL structure
            path: decodeURIComponent(`/${node.slug}/`),
            // path to template
            component: path.resolve(`./src/templates/page.js`),
            context: {
              // This is the $slug variable
              // passed to blog-post.js
              slug: node.slug,
            },
          })
        }else if (node.wpParent.node.databaseId == 4340){ // Baang-e-Dara Pages
          createPage({
            // Decide URL structure
            path: decodeURIComponent(`/baang-e-dara/${node.slug}/`),
            // path to template
            component: path.resolve(`./src/templates/baang-e-dara.js`),
            context: {
              // This is the $slug variable
              // passed to blog-post.js
              slug: node.slug,
            },
          })
        }else if (node.wpParent.node.databaseId == 4346){// Baal-e-Jibreel Pages
          createPage({
            // Decide URL structure
            path: decodeURIComponent(`/baal-e-jibreel/${node.slug}/`),
            // path to template
            component: path.resolve(`./src/templates/baal-e-jibreel.js`),
            context: {
              // This is the $slug variable
              // passed to blog-post.js
              slug: node.slug,
            },
          })
        }else if (node.wpParent.node.databaseId == 4359){ // Zarb-e-Kaleem Pages
          createPage({
            // Decide URL structure
            path: decodeURIComponent(`/zarb-e-kaleem/${node.slug}/`),
            // path to template
            component: path.resolve(`./src/templates/zarb-e-kaleem.js`),
            context: {
              // This is the $slug variable
              // passed to blog-post.js
              slug: node.slug,
            },
          })
        }else{ // Armaghan-e-Hijaz Urdu Pages
          createPage({
            // Decide URL structure
            path: decodeURIComponent(`/armaghan-e-hijaz-urdu/${node.slug}/`),
            // path to template
            component: path.resolve(`./src/templates/armaghan-e-hijaz-urdu.js`),
            context: {
              // This is the $slug variable
              // passed to blog-post.js
              slug: node.slug,
            },
          })
        }
      }

    )



  })



}