const SkillDetails = ({ title, description, subTitle, colSpan, rowSpan }) => {
  const Spanning = {
    gridColumn: `${colSpan[0]} / ${colSpan[1]}`,
    gridRow: `${rowSpan[0]} / ${rowSpan[1]}`,
  }
  const spanningClass = `p-4 mt-2 bg-green-100 text-black text-center rounded-lg dark:bg-green-700 dark:text-white sm:text-left sm:col-start-${colSpan[0]} sm:row-start-${rowSpan[0]} sm:col-end-${colSpan[1]} sm:row-end-${rowSpan[1]}`
  return (
    <div className={spanningClass}>
      <h3 className="ml-2 mr-2 text-sm sm:text-lg">
        {title}
        <span>{subTitle}</span>
      </h3>
      <p className="ml-2 mr-2 mb-2 text-sm sm:text-lg">{description}</p>
    </div>
  )
}

export default SkillDetails
