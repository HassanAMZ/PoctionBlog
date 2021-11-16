import PageTitle from '@/components/PageTitle'
import SectionContainerPost from '@/components/SectionContainerPost'
import { PageSEO } from '@/components/SEO'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from '@/components/NewsletterForm'
import YoutubeEmbed from '@/components/YoutubeEmbed'
import { useEffect } from 'react'
import Link from 'next/link'

const WebinarSimple = ({
  title,
  description,
  imgSrc,
  href,
  date,
  time,
  host,
  speaker,
  wid,
  embedId,
  presentation,
}) => {
  let YoutubeVideo = ''
  if (embedId === 'null') {
    YoutubeVideo = (
      <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">
        <Image alt={title} src={imgSrc} width={1080} height={1080} />
      </div>
    )
  } else {
    YoutubeVideo = (
      <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">
        <YoutubeEmbed embedId={embedId} />
      </div>
    )
  }
  return (
    <SectionContainerPost>
      <PageSEO title={title} description={description} />
      <article>
        <div>
          <header>
            <div className="pb-10 space-y-1 text-center border-b border-gray-200 dark:border-gray-700">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <br /> <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle> Webniar ID: {wid}
              </div>
            </div>
          </header>
          <div
            className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
              {YoutubeVideo}
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">
                <h3>Presentation Slides</h3>
                <Link href={presentation}>
                  <a> {title} </a>
                </Link>
              </div>
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none ">
                <div>
                  <h5>Title:</h5>
                  {title}
                </div>
                <div>
                  <h5>Date:</h5> {date}
                </div>
                <div>
                  <h5>Time: </h5> {time}
                </div>
                <div>
                  <h5> Host:</h5> {host}
                </div>
                <div>
                  <h5>Speaker:</h5> {speaker}
                </div>
              </div>
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">
                {' '}
                <h3>Event Detail</h3>
                {description}
              </div>
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">
                {siteMetadata.newsletter.provider !== '' && (
                  <div className="flex items-center justify-center pt-4">
                    <NewsletterForm />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </SectionContainerPost>
  )
}

export default WebinarSimple
