import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y">
        <div className="pb-6 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            A quick intro
          </h1>
        </div>
        <div className="items-start space-y-2 ">
          <div className="prose dark:prose-dark max-w-none sm:text-justify text-sm sm:text-base py-4">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
