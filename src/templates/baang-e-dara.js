import React from "react"
import BangEDaraLayout from "../components/layouts/BangEDaraLayout";
import BaangEDaraSidebar from "../components/sidebars/BaangEDaraSidebar";

import { graphql, Link } from "gatsby";
import ReactAudioPlayer from 'react-audio-player';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Collapsible from 'react-collapsible';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

//Styles
import styles from "../styles/poetryPage/poetrypage.module.css";
import "../styles/poetryPage/poetrypage.css";
import '../styles/tabs.css';

export default ({ data }) => {
  const page = data.allWpPage.edges[0].node
  const textal = page.PoeticalPage.contentAlignment;
  const allVerses = page.PoeticalPage.sherVerseCoupletStanza;
  const transliterationText = page.PoeticalPage.transliterationRomanUrdu;
  const englishTranslation = page.PoeticalPage.englishTranslation;
  const explanationTashreeh = page.PoeticalPage.explanationTashreeh;
  const wordMeanings = page.PoeticalPage.wordMeanings;
  const wallpapers = page.PoeticalPage.wallpapers;
  const videos = page.PoeticalPage.videos;
  const pdfs = page.PoeticalPage.pdfFiles;
  const audios = page.PoeticalPage.audios;
  

  let plainTitles = null
  let paraLength = null
  if (allVerses !== null){
      plainTitles = allVerses.map((item) =>
      <div dangerouslySetInnerHTML={{ __html: item.originalText}}/>)
      paraLength = Math.max(...plainTitles.map(item=>item.props.dangerouslySetInnerHTML.__html.length))
  }
  paraLength = paraLength+200
  console.log(page);
  let videoURLs = null
  let videoIDS = null
  if(videos !== null){
    videoURLs = videos.map(vid => {
      return vid.videoUrl;
    });
    videoIDS = videoURLs.map(myurl=>{
      let url = myurl.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
      return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
    })
  }

  const topBanner = data.allWpPage.edges[0].node.featuredImage;
  return (
    <>
      <BangEDaraLayout>
        {
          topBanner !== null ?
          <GatsbyImage image={getImage(topBanner.node.localFile)} alt="Top Banner"/> : null      
        }
        <div className={styles.TitleSec}>
          <div className={`${styles.TitleWrap} ${styles.container}`}>
            <h1 className={`${styles.originalTitleOfPoemGhazelRubai} ${styles.urduFont}`}>{page.PoeticalPage.originalTitleOfPoemGhazelRubai}</h1>
            <div className={styles.subTitles}>
                <h2>{page.PoeticalPage.romanTitleOfPoemGhazelRubai}</h2>
                <span>/</span>
                <h2>{page.PoeticalPage.englishTitleOfPoemGhazelRubai}</h2>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.poeticalContent}>
            <div className={styles.mainPoeticalContent} style={{textAlign:`${textal}`}}>
            <Tabs forceRenderTabPanel={true} className={styles.urduFont}>
                <TabList className={styles.topTabs}>
                  <Tab>????????</Tab>
                  {
                    transliterationText !== null ?
                    <Tab>?????? ????????</Tab>
                    : null
                  }
                  {
                    englishTranslation !== null ?
                    <Tab>?????????????? ??????????</Tab>
                    : null
                  }
                  {
                    wordMeanings !== null ?
                    <Tab>?????????? ??????????</Tab>
                    : null
                  }
                  {
                    explanationTashreeh !== null ?
                    <Tab>??????</Tab>
                    : null
                  }
                  {
                    videos !== null ?
                    <Tab>??????????</Tab>
                    : null
                  }
                  {
                    audios !== null ?
                    <Tab>??????????</Tab>
                    : null
                  }
                  {
                    wallpapers !== null ?
                    <Tab>?????? ????????</Tab>
                    : null
                  }
                  {
                    pdfs !== null ?
                    <Tab>???? - ????????</Tab>
                    : null
                  }
                </TabList>

                <TabPanel>
                {
                  allVerses !== null ?
                  <div className={styles.newLayout}>
                  {   
                      allVerses.map((singleSher, i) => 
                      <Collapsible
                        trigger={plainTitles[i]}
                        triggerTagName="h3"
                        triggerClassName={styles.verseTitle}
                        triggerOpenedClassName={styles.verseTitle}
                        transitionTime={200}
                      >
                        {
                          singleSher.transliterationRomanUrdu !== null ?
                              <div className={`${styles.transliterationText} ${styles.centerTableContent}`}>
                                <div dangerouslySetInnerHTML={{ __html: singleSher.transliterationRomanUrdu}} />
                              </div> : null
                        }
                        {
                          singleSher.englishTranslation !== null ?
                            <div className={`${styles.englishTranslation} ${styles.centerTableContent}`}>
                              <div className={styles.centerTableContentInner} dangerouslySetInnerHTML={{ __html: singleSher.englishTranslation }} />
                            </div> : null
                        }
                        {
                          singleSher.wordMeanings !== null ?
                            <div className={`${styles.wordMeanings} ${styles.rightText}`}>
                              <div className={styles.urduFont} dangerouslySetInnerHTML={{ __html: singleSher.wordMeanings }} />
                            </div> : null
                        }
                        {
                          singleSher.explanationTashreehSection !== null ?
                            <div className={styles.explanationTashreeh}>
                            {
                              singleSher.explanationTashreehSection.map((singleSharah) => 
                                <div className={`${styles.rightText} ${styles.urduFont} ${styles.sharahBox}`}>
                                  <Collapsible trigger={singleSharah.writerName}>
                                    <div dangerouslySetInnerHTML={{ __html: singleSharah.explanationTashreeh }} />
                                  </Collapsible>
                                </div>
                              )
                            }
                            </div> : null
                        }
                      </Collapsible>
                      )
                  }
                  </div> : null
                }
                </TabPanel>
                {
                  transliterationText !== null ?
                    <TabPanel>
                      <div className={`${styles.transliterationText} ${styles.centerTableContent}`}>
                        <div className={styles.centerTableContentInner} dangerouslySetInnerHTML={{ __html: page.PoeticalPage.transliterationRomanUrdu }} />
                      </div> 
                    </TabPanel> : null
                }
                {
                  englishTranslation !== null ?
                  <TabPanel>
                    <div className={`${styles.englishTranslation} ${styles.centerTableContent}`}>
                      <div className={styles.centerTableContentInner} dangerouslySetInnerHTML={{ __html: page.PoeticalPage.englishTranslation }} />
                    </div>
                  </TabPanel> : null
                }
                {
                  wordMeanings !== null ?
                  <TabPanel>
                    <div className={`${styles.wordMeanings} ${styles.rightText}`}>
                      <div className={styles.urduFont} dangerouslySetInnerHTML={{ __html: page.PoeticalPage.wordMeanings }} />
                    </div>
                  </TabPanel> : null
                }
                {
                  explanationTashreeh !== null ?
                  <TabPanel>
                    <div className={styles.explanationTashreeh}>
                      <div className={styles.rightText} dangerouslySetInnerHTML={{ __html: page.PoeticalPage.explanationTashreeh }} />
                    </div>
                  </TabPanel> : null
                }
                {
                  videos !== null ?
                  <TabPanel>
                    <div className={styles.videos}>
                      {
                        videoIDS.map(item => 
                          <iframe 
                          src={`https://www.youtube.com/embed/${item}`}
                          width="700"
                          height="394"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen />
                        )
                      }
                    </div>
                  </TabPanel> : null
                }
                {
                  audios !== null ?
                  <TabPanel>
                    <div className={styles.audios}>
                      {
                        audios.map(audio => 
                          <div>
                          <p className={styles.audioTitle}>{audio.audioTitle}</p>
                          <ReactAudioPlayer className="playerStyles"
                            src={`${audio.audio.localFile.publicURL}`}
                            controls="true"
                          />
                          </div>
                        )
                      }
                      
                    </div>
                  </TabPanel> : null
                }
                {
                  wallpapers !== null ?
                  <TabPanel>
                    <div className={styles.wallpapers}>
                      {
                        wallpapers.map(wallpaper => 
                        <GatsbyImage image={getImage(wallpaper.wallpaperImage.localFile)} className={styles.wallpaperImage} alt="Wallpaper"/>
                      )
                      }
                    </div>
                  </TabPanel> : null
                }
                {
                  pdfs !== null ?
                  <TabPanel>
                    <div className={styles.pdfs}>
                      <div>
                        {
                          pdfs.map(pdf => <p><a href={pdf.pdfFile.localFile.publicURL} target="_blank">{pdf.pdfTitle}</a></p>
                          )
                        }
                      </div>
                    </div>
                  </TabPanel> : null
                }
              </Tabs>
            <style dangerouslySetInnerHTML={{__html: `
                    .Collapsible__trigger div {
                        text-align-last: justify;
                        max-width: 293px;
                        margin: 0px auto;
                    }`}} />
            </div>
            <div className={styles.poeticalSidebar}>
                <BaangEDaraSidebar/>
            </div>
          </div>
        </div>
      </BangEDaraLayout>
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
            englishTitleOfPoemGhazelRubai
            englishTranslation
            explanationTashreeh
            wordMeanings
            wallpapers {
              wallpaperImage {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            videos {
              videoUrl
              videoTitle
            }
            audios {
              audioTitle
              audio {
                localFile {
                  publicURL
                }
              }
            }
            pdfFiles {
              pdfTitle
              pdfFile {
                localFile {
                  publicURL
                  url
                }
              }
            }
            sherVerseCoupletStanza {
              originalText
              transliterationRomanUrdu
              englishTranslation
              wordMeanings
              explanationTashreehSection {
                writerName
                explanationTashreeh
              }
            }
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