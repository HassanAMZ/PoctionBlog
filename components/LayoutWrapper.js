import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import PortfolioIntroductionSummary from '@/components/PortfolioIntroductionSummary'

const LayoutWrapper = ({ children }) => {
  return (
    <div className="flex flex-col">
      <SectionContainer>
        <div className="flex flex-col justify-between">
          <header
            style={{ display: 'flex' }}
            className="flex-row justify-between items-center  sm:pt-10 py-5"
          >
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="py-2 font-medium text-gray-900 sm:pr-4  dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </header>
          <PortfolioIntroductionSummary />
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    </div>
  )
}

export default LayoutWrapper
