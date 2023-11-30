type Props = {
  className: string
  description: string
  color: string
  icon?: string
  textColor: string
  count: number | string
}

const HomeMainCard = ({className, description, color, icon, textColor, count}: Props) => (
  <div
    className={`card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end ${className}`}
    style={{
      backgroundColor: color,
      height: '140px',
      width:"220px",
      marginBottom:"0px !important",
      boxShadow: '0px 0px 8px #d6e2cf',
      marginTop:"-10px"
    }}
  >
    <img src={icon} style={{ width: 60, position: 'relative', left: "35%", top: "6%", filter: "contrast(120%) drop-shadow(5px 5px 5px #c1d4b8)" }} />
    <div className='card-header pt-5 d-flex align-items-center justify-content-center' style={{position: 'relative', bottom: 5}}>
      <div className='card-title d-flex flex-column align-items-baseline'>
        <span className=' opacity-75 pt-1 fw-semibold fs-7' style={{color: textColor, justifyContent:"center", alignItems:"center !important", marginTop:"0px"}}>
          {description}{' '}
        </span>
        <span className='fw-bold  me-2 lh-1 ls-n2' style={{fontSize: '18px', color: textColor, marginTop:"10px"}}>
          {' '}
          {description === ('Payments Processed' || 'Visa 24/7 Wallet Balance') ? <>₹{' '}</> : null}
          {count}
        </span>
      </div>
    </div>
  </div>
)
export {HomeMainCard}
