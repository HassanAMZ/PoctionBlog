const SkillDetails = ({ title, description, subTitle, colSpan, rowSpan }) => {
  const customClasses = `p-0 mt-2 text-center rounded-sm col-span-1 row-span-2 sm:text-left sm:col-span-${colSpan} sm:row-span-${rowSpan} `
  return (
    <div className={customClasses}>
      <h3 className="ml-2 mr-2 text-sm sm:text-lg">
        {title}
        <span>{subTitle}</span>
      </h3>

      <p className="ml-2 mr-2 mb-2 text-sm sm:text-lg">{description}</p>
    </div>
  )
}

export default SkillDetails
