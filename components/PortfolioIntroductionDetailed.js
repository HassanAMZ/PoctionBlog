import { Paragrapgh } from '@/components/Paragrapgh'
import { Link } from 'next/link'
export default function PortfolioIntroductionDetailed() {
  return (
    <>
      <Paragrapgh type="p">
        Hey, I'm a developer, writer and creator. I work at Upwork as a Developer and Web Analytics.
        You have found my personal webiste, share your word on our
        <Link href="/">
          <a>hope wall</a>
        </Link>
        .
      </Paragrapgh>
      <br />
      <Paragrapgh type="p">
        I have worked on 100+ websites and stores across the globe and helped hundred of clients
        solve their problems related to front-end development, wordpress, next js, google tag
        manager and analytics, facebook pixel.
      </Paragrapgh>
      <br />
      <Paragrapgh type="p">
        I grew up in Punjab-Pakistan, and lived 8 Years in Sharjah-UAE. I went to school at GCU
        lahore, Graduated with a degree in Electrical Engineering. I spend my free time watching
        anime, creating videos, and enjoying time with friends and family is Sheikhupura.
      </Paragrapgh>
    </>
  )
}
