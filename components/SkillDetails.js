import { Heading, Text, GridItem } from '@chakra-ui/react'
import { fontSizeHeading, fontSizeParagrapgh } from '@/components/FontSizes'

const SkillDetails = ({ title, description, subTitle, columnSpan, rowSpan }) => {
  return (
    <GridItem p={4} bg="white" borderRadius="20px" colSpan={columnSpan} rowSpan={rowSpan}>
      <Heading m={2} fontSize={fontSizeHeading}>
        {title}
        <span>{subTitle}</span>
      </Heading>

      <Text m={2} fontSize={fontSizeParagrapgh}>
        {description}
      </Text>
    </GridItem>
  )
}

export default SkillDetails
