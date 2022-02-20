import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import { GtmEvent } from '@/lib/googleTagManagerEvents'
import { useEffect } from 'react'

import { Flex } from '@chakra-ui/react'

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
      <Flex direction="column">
        <Flex direction="column">
          {projectsData.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
              pid={d.pid}
            />
          ))}
        </Flex>
      </Flex>
    </>
  )
}
export default Projects
