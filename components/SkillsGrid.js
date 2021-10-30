import SkillDetails from '@/components/SkillDetails'
const SkillsGrid = () => {
  return (
    <>
      <div className="grid gap-1 grid-flow-dense grid-cols-1 sm:gap-4 sm:grid-cols-3">
        <SkillDetails
          title="Facebook conversion API. "
          subTitle="Server tracking."
          description="The Conversions API allows advertisers to send web events from their servers directly to Facebook. Server events are linked to a pixel and are processed like browser pixel events."
          colSpan="2"
          rowSpan="1"
        />

        <SkillDetails
          title="Google tag mananger. "
          subTitle="Web & server tracking."
          description=""
          colSpan="1"
          rowSpan="1"
        />

        <SkillDetails
          title="One step solution. "
          subTitle="For your analytics."
          description="Complete & efficient control over your content. And with dedicated tags and data, your team can take marketing to the next level."
          colSpan="1"
          rowSpan="2"
        />
        <SkillDetails
          title="You're in good company. "
          subTitle=" Satisfied customers."
          description=""
          colSpan="2"
          rowSpan="1"
        />
        <SkillDetails
          title="The basics. "
          subTitle="Of course."
          description="Web Analytics with Google Tag Manager, for Google analytics and Facebook pixel."
          colSpan="2"
          rowSpan="1"
        />

        <SkillDetails
          title="You're in good company. "
          subTitle=" Satisfied customers."
          description=""
          colSpan="2"
          rowSpan="1"
        />
      </div>
    </>
  )
}

export default SkillsGrid
