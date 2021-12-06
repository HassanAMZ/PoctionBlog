import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import PortfolioIntroductionSummary from '@/components/PortfolioIntroductionSummary'

export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    instagram,
    github,
  } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2">
          <div className="flex flex-col items-center space-x-2">
            <PortfolioIntroductionSummary />
          </div>
          <div className="prose dark:prose-dark max-w-none sm:text-justify text-sm sm:text-base">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
