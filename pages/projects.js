import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import { GtmEvent } from '@/lib/googleTagManagerEvents'
import { useEffect } from 'react'

import { Container, Grid, GridItem } from '@chakra-ui/react'

const Projects = () => {
  const [allKeys, allTitle, allDescription, allImgSrc, allHref, allPid] = [[], [], [], [], [], []]
  projectsData.map(({ key, title, description, imgSrc, href, pid }, index) => {
    allKeys[index] = key
    allTitle[index] = title
    allDescription[index] = description
    allImgSrc[index] = imgSrc
    allHref[index] = href
    allPid[index] = pid
  })
  useEffect(() => {
    GtmEvent('allProjects', 'projectPage', allPid, {
      allKeys,
      allTitle,
      allImgSrc,
      allHref,
      allPid,
    })
  }, [])

  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <Container maxW="container.xl" p={{ base: '0', sm: 'auto' }}>
        <Grid
          templateColumns="repeat(auto-fit, minmax(300px, 1fr));"
          justify="center"
          align="left"
          placeContent="center"
          gap={6}
        >
          {projectsData.map(({ title, description, imgSrc, href, price, pid }) => (
            <GridItem bg="teal.50" p={{ base: '0', sm: '1' }} key={title}>
              <Card
                key={pid}
                title={title}
                description={description}
                imgSrc={imgSrc}
                href={href}
                pid={pid}
                price={price}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </>
  )
}
export default Projects
