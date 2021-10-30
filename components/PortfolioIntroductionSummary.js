import Image from 'next/image'

export default function PortfolioIntroductionSummary() {
  return (
    <>
      <div className="grid justify-items-center">
        <div className="w-64 m-4 col-start-1 col-end-1 row-start-1 row-end-2 sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-1">
          <Image
            className="object-cover object-center lg:h-48 md:h-36"
            layout="responsive"
            height={1000}
            width={1000}
            src="/static/images/logo.png"
            alt="Poction"
          />
        </div>
        <div className="m-0 col-start-1 col-end-1 row-start-2 row-end-3 sm:m-4 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2">
          <h2 className="text-xl text-center sm:text-3xl sm:text-left">
            Poction - Web & Server Analyst
          </h2>
          <p className="text-lg text-center hidden sm:text-lg sm:text-left sm:block">
            Plan, develop and manage web tracking for Facebook, Google, Pinterest, HotJar and other
            analytics using Google Tag Manager Web and Server Containers.
          </p>
          <p className="text-center sm:hidden">Plan, develop & Track</p>
        </div>
      </div>
    </>
  )
}
