import SkillsGrid from '@/components/SkillsGrid'
import PortfolioIntroductionSummary from '@/components/PortfolioIntroductionSummary'

const AuthorHead = (props) => {
  return (
    <>
      <PortfolioIntroductionSummary />
      <div>
        <div className="p-2">
          <SkillsGrid />
        </div>
      </div>
    </>
  )
}
export default AuthorHead
