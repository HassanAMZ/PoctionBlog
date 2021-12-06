import Image from 'next/image'
export default function PortfolioIntroductionSummary() {
  return (
    <>
      <div className="flex flex-col item-left sm:items-center sm:flex-row-reverse py-2">
        <div className="w-32 sm:w-64">
          <Image
            height={1000}
            width={1000}
            src="/static/images/avatar.png"
            alt="ShahzadaAliHassan"
          />
        </div>
        <div className="">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Shahzada A. Hassan
          </h2>
          <div className="mb-2">
            Top Rated Freelancer at&nbsp;
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.upwork.com/freelancers/~015b35831b56606433?utm_source=ShahzadaAliHassan&utm_medium=Organic&utm_campaign=ShahzadaAliHassanBlog&utm_term=ShahzadaAliHassan&utm_content=FreelancerAtUpwork"
              className="font-bold "
            >
              Upwork
            </a>
          </div>
          <p className="font-light text-gray-500  dark:text-gray-400 text-sm sm:text-base">
            Helping students learn freelancing. Teaching about web development, web analytics, and
            freelancing.
          </p>
        </div>
      </div>
    </>
  )
}
