import React from 'react'
import {
  FeedsWidget2,
  FeedsWidget3,
  FeedsWidget4,
  FeedsWidget5,
  FeedsWidget6,
  ChartsWidget1,
  ListsWidget5,
  ListsWidget2,
} from '../../../../_metronic/partials/widgets'
import { HomeMainCard } from '../../../components/HomeMainCard'
import icon1 from '../../../../_metronic/assets/card/1.png'
import { ActivityCard } from '../../../components/ActivityCard'
// import icon1 from '../../../_metronic/assets/card/1.png'
export function Overview() {
  return (
    <>

      <div className='d-flex flex-wrap flex-stack mb-6' style={{paddingLeft:"30px"}}>
        <h3 className='fw-bolder my-2'>
          Activities
          <span className='fs-6 text-gray-400 fw-bold ml-10 mx-3'>30 days</span>
        </h3>
      </div>
      
    <div className='row g-5 g-xl-10'>
      <div className=' col-md-6 col-lg-6 col-xl-6 col-xxl-3 '>
        <ActivityCard
          className='mb-5 mb-xl-10'
          description='No. of Visa In-Process'
          color='#fff'
          icon={icon1}
          textColor='#071437'
          count='₹ 500.00'
        />
      </div>
      <div className=' col-md-6 col-lg-6 col-xl-6 col-xxl-3 '>
        <ActivityCard
          className='mb-5 mb-xl-10'
          description='No. of Visa Waiting for Approval'
          color='#fff'
          icon={icon1}
          textColor='#071537'
          count='75'
        />
      </div>
      <div className=' col-md-6 col-lg-6 col-xl-6 col-xxl-3 '>
        <ActivityCard
          className='mb-5 mb-xl-10'
          description='Atlys Wallet Balance'
          color='#fff'
          icon={icon1}
          textColor='#071537'
          count='1000'
        />
      </div>
    </div>
    </>
  )
}
