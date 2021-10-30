const SkillDetails = ({ title, description, subTitle, span }) => {
  const colSpanning = {
    gridColumnStart: 1,
    gridColumnEnd: -1,
  }
  const rowSpanning = {
    gridRowStart: 1,
    gridRowEnd: -1,
  }

  if (span == 'colSpanning') {
    return (
      <div
        style={colSpanning}
        className="p-4 mt-2 bg-green-100 text-black text-center rounded-lg dark:bg-green-700 dark:text-white sm:text-left"
      >
        <h3 className="ml-2 mr-2 text-sm sm:text-lg">
          {title}
          <span>{subTitle}</span>
        </h3>

        <p className="ml-2 mr-2 mb-2 text-sm sm:text-lg">{description}</p>
      </div>
    )
  } else if (span == 'rowSpanning') {
    return (
      <div
        style={rowSpanning}
        className="p-4 mt-2 bg-green-100 text-black text-center rounded-lg dark:bg-green-700 dark:text-white sm:text-left"
      >
        <h3 className="ml-2 mr-2 text-sm sm:text-lg">
          {title}
          <span>{subTitle}</span>
        </h3>

        <p className="ml-2 mr-2 mb-2 text-sm sm:text-lg">{description}</p>
      </div>
    )
  }
}

export default SkillDetails
