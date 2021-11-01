import SkillDetails from '@/components/SkillDetails'
const SkillsGrid = () => {
  const gridSpanning = {
    gridTemplateColumns: 'repeat( auto-fit, minmax(200px, 1fr))',
  }
  return (
    <>
      <div className="grid SkillsGrid gap-1  sm:gap-4 " style={gridSpanning}>
        <SkillDetails
          title="Facebook conversion API. "
          subTitle="Server tracking."
          description="The Conversions API allows advertisers to send web events from their servers directly to Facebook. Server events are linked to a pixel and are processed like browser pixel events."
          colSpan="13"
          rowSpan="12"
        />
        <SkillDetails
          title="Google tag mananger. "
          subTitle="Web & server tracking."
          description=""
          colSpan="34"
          rowSpan="12"
        />
        <SkillDetails
          title="One step solution. "
          subTitle="For your analytics."
          description="Complete & efficient control over your content. And with dedicated tags and data, your team can take marketing to the next level."
          colSpan="12"
          rowSpan="24"
        />
        <SkillDetails
          title="You're in good company. "
          subTitle=" Satisfied customers."
          description=""
          colSpan="24"
          rowSpan="23"
        />
        <SkillDetails
          title="The basics. "
          subTitle="Of course."
          description="Web Analytics with Google Tag Manager, for Google analytics and Facebook pixel."
          colSpan="24"
          rowSpan="34"
        />
        <SkillDetails
          title="You're in good company. "
          subTitle=" Satisfied customers."
          description=""
          colSpan="14"
          rowSpan="45"
        />
      </div>
    </>
  )
}

export default SkillsGrid
