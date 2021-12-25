import Wave from 'react-wavify'

const StyleWaves = () => {
  return (
    <div className="grid grid-rows-1 grid-cols-1 h-12">
      <Wave fill="url(#gradient)" className="col-start-1 col-end-1 row-start-1 row-end-1">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor="#2DD4BF" />
          </linearGradient>
        </defs>
      </Wave>
      {/* <Wave mask="url(#mask2)" fill="red" className="col-start-1 col-end-1 row-start-1 row-end-1 ">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(45)">
            <stop offset="0" stopColor="white" />
            <stop offset="10" stopColor="black" />
          </linearGradient>
          <mask id="mask2">
            <rect x="0" y="0" width="100%" height="100" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave> */}
    </div>
  )
}
export default StyleWaves
