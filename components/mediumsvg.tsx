
const Mediumsvg = ({ clasName, size }: any) => {
  return (
    <div className={`${clasName}   flex-center text-center `}>
      <svg className="svgIcon-use" height={`${size}`} viewBox="0 0 1100 610" >
        <path d="M594.79 308.2c0 163.76-131.85 296.52-294.5 296.52S5.8 472 5.8 308.2 137.65 11.69 300.29 11.69s294.5 132.75 294.5 296.51"></path>
        <path d="M917.86 308.2c0 154.16-65.93 279.12-147.25 279.12s-147.25-125-147.25-279.12S689.29 29.08 770.61 29.08s147.25 125 147.25 279.12"></path>
        <path d="M1050 308.2c0 138.12-23.19 250.08-51.79 250.08s-51.79-112-51.79-250.08 23.19-250.08 51.8-250.08S1050 170.09 1050 308.2"></path>
      </svg>
    </div>
  )
}

export default Mediumsvg