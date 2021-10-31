import React, { useEffect } from 'react'
const SkillDetails = ({ title, description, subTitle, colSpan, rowSpan }) => {
  const Spanning = {
    gridColumn: `${colSpan[0]} / ${colSpan[1]}`,
    gridRow: `${rowSpan[0]} / ${rowSpan[1]}`,
  }
  useEffect(() => {}, [])
  const spanningClass = `sm:col-end-${colSpan[1]} sm:col-start-${colSpan[0]} sm:row-start-${rowSpan[0]}  sm:row-end-${rowSpan[1]}`

  return (
    <>
      <style jsx>{`
        @media (min-width: 500px) {
          .SkillDetail {
            grid-column: ${colSpan[0]} / ${colSpan[1]};
            grid-row: ${rowSpan[0]} / ${rowSpan[1]};
          }
        }
      `}</style>
      <div
        className={`SkillDetail p-4 mt-2 bg-green-100 text-black text-center rounded-lg dark:bg-green-700 dark:text-white sm:text-left`}
      >
        <h3 className="ml-2 mr-2 text-sm sm:text-lg">
          {title}
          <span>{subTitle}</span>
        </h3>
        <p className="ml-2 mr-2 mb-2 text-sm sm:text-lg">{description}</p>
      </div>
    </>
  )
}

export default SkillDetails
