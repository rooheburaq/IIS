import React from "react"
import Layout from "../components/layouts/layout"
import styles from "../components/container.module.css"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default ({ data }) => {
  const page = data.allWpPage.edges[0].node
  const textal = page.PoeticalPage.contentAlignment;
  const transliterationText = page.PoeticalPage.transliterationRomanUrdu;
  const topBanner = data.allWpPage.edges[0].node.featuredImage  
  console.log(topBanner)
  console.log(page)
  return (
    <>
      <Layout>
      {
        topBanner !== null ?
        <GatsbyImage image={getImage(topBanner.node.localFile)} alt="Top Banner"/> : null      
      }
        <div className={styles.container} style={{textAlign:`${textal}`}}>
          <h1>Baal-e-Jibreel Pages</h1>
          <div className={styles.poeticalContent}>
            <div className="originalText">
              <h1 className="urduFont">{page.PoeticalPage.originalTitleOfPoemGhazelRubai}</h1>
              <div dangerouslySetInnerHTML={{ __html: page.content }} />
            </div>
            {
              transliterationText !== null ?
              <div className="transliterationText">
                <h1>{page.PoeticalPage.romanTitleOfPoemGhazelRubai}</h1>
                <div dangerouslySetInnerHTML={{ __html: page.PoeticalPage.transliterationRomanUrdu }} />
              </div> : null
            }
          </div>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWpPage(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          slug
          content
          parentId
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
`