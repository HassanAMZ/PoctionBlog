import SkillDetails from '@/components/SkillDetails'
const SkillsGrid = () => {
  const mainGrid = {
    gridTemplateColumns: 'repeat( auto-fit, minmax(250px, 1fr))',
  }

  return (
    <>
      <div className="grid gap-1 sm:gap-4 " style={mainGrid}>
        <SkillDetails
          title="Facebook conversion API. "
          subTitle="Server tracking."
          description="The Conversions API allows advertisers to send web events from their servers directly to Facebook. Server events are linked to a pixel and are processed like browser pixel events."
          span="colSpanning"
        />
        <SkillDetails
          title="Google tag mananger. "
          subTitle="Web & server tracking."
          description=""
          span="rowSpanning"
        />
        <SkillDetails
          title="One step solution. "
          subTitle="For your analytics."
          description="Complete & efficient control over your content. And with dedicated tags and data, your team can take marketing to the next level."
          span="colSpanning"
        />
        <SkillDetails
          title="You're in good company. "
          subTitle=" Satisfied customers."
          description=""
          span="colSpanning"
        />
        <SkillDetails
          title="The basics. "
          subTitle="Of course."
          description="Web Analytics with Google Tag Manager, for Google analytics and Facebook pixel."
          span="rowSpanning"
        />
        <SkillDetails
          title="You're in good company. "
          subTitle=" Satisfied customers."
          description=""
          span="rowSpanning"
        />
      </div>
    </>
  )
}

export default SkillsGrid
