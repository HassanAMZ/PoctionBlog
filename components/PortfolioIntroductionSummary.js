import Image from 'next/image'

export default function PortfolioIntroductionSummary() {
  return (
    <>
      <div className="grid justify-items-center">
        <div className="floating w-auto m-4 col-start-1 col-end-1 row-start-1 row-end-2  sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-1">
          <Image
            height={1000}
            width={1000}
            src="/static/images/summaryPhoto.png"
            alt="ShahzadaAliHassan"
          />
          <a className="hidden freepik" href="https://www.freepik.com/vectors/creative">
            Creative vector created by pikisuperstar - www.freepik.com
          </a>
        </div>
        <div className="m-0 flex flex-col justify-center text-center col-start-1 col-end-1 row-start-2 row-end-3 sm:text-left sm:m-4 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2">
          <div className="sm:mb-8">
            <h2 className="text-xl text-center sm:text-3xl sm:text-left">
              ShahzadaAliHassan - Web & Server Analyst
            </h2>
            <span className="text-sm text-center sm:text-md sm:text-left">
              Plan, develop & Track
            </span>
          </div>
          <p className="text-lg text-center hidden sm:text-lg sm:text-left sm:block">
            Plan, develop and manage web tracking for Facebook, Google, Pinterest, HotJar and other
            analytics using Google Tag Manager Web and Server Containers.
          </p>
        </div>
      </div>
    </>
  )
}
