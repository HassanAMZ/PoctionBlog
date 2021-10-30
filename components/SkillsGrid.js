import { Heading, Grid, GridItem } from '@chakra-ui/react'
import SkillDetails from '@/components/SkillDetails'
const SkillsGrid = () => {
  return (
    <>
      <Grid
        gap={4}
        templateColumns={['repeat( auto-fit, minmax(250px, 1fr) )']}
        autoFlow="dense"
        autoRows="repeat( auto-fit, minmax(20px, 1fr) )"
      >
        <SkillDetails
          title="Facebook conversion API. "
          subTitle="Server tracking."
          description="The Conversions API allows advertisers to send web events from their servers directly to Facebook. Server events are linked to a pixel and are processed like browser pixel events."
          columnSpan={1}
          rowSpan={1}
        />

        <SkillDetails
          title=""
          subTitle=""
          description=""
          columnSpan={[1, 1, 2]}
          rowSpan={[1, 2, 2]}
        />

        <SkillDetails
          title="Google tag mananger. "
          subTitle="Web & server tracking."
          description=""
          columnSpan={1}
          rowSpan={1}
        />
        <SkillDetails
          title=""
          subTitle=""
          description=""
          columnSpan={[1, 1, 1]}
          rowSpan={[1, 2, 2]}
        />
        <SkillDetails
          title="One step solution. "
          subTitle="For your analytics."
          description="Complete & efficient control over your content. And with dedicated tags and data, your team can take marketing to the next level."
          columnSpan={1}
          rowSpan={1}
        />
        <SkillDetails
          title=""
          subTitle=""
          description=""
          columnSpan={[1, 1, 1]}
          rowSpan={[1, 3, 3]}
        />
        <SkillDetails
          title="Latest web standards. "
          subTitle=""
          description=""
          columnSpan={[1]}
          rowSpan={[1]}
        />

        <SkillDetails
          title="The basics. "
          subTitle="Of course."
          description="Web Analytics with Google Tag Manager, for Google analytics and Facebook pixel."
          columnSpan={1}
          rowSpan={1}
        />

        <SkillDetails
          title="You're in good company. "
          subTitle=" Satisfied customers."
          description=""
          columnSpan={[1, 2, 1]}
          rowSpan={[1]}
        />
      </Grid>
    </>
  )
}

export default SkillsGrid
