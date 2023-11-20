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
      height: '180px',
      width:"280px",
    }}
  >
    <img src={icon} style={{width: 60, position: 'relative', left: "38%", top: "8%"}} />
    <div className='card-header pt-5 d-flex align-items-center justify-content-center' style={{position: 'relative', bottom: 10}}>
      <div className='card-title d-flex flex-column align-items-baseline'>
        <span className=' opacity-75 pt-1 fw-semibold fs-6' style={{color: textColor, justifyContent:"center", alignItems:"center !important", marginTop:"20px"}}>
          {description}{' '}
        </span>
        <span className='fw-bold  me-2 lh-1 ls-n2' style={{fontSize: '35px', color: textColor, marginTop:"10px"}}>
          {' '}
          {description === ('Payments Processed' || 'Visa 24/7 Wallet Balance') ? <>₹{' '}</> : null}
          {count}
        </span>
      </div>
    </div>
  </div>
)
export {HomeMainCard}
