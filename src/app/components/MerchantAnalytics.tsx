import { HomeMainCard } from "./HomeMainCard";
import icon1 from '../../_metronic/assets/card/1.png'
import customer from '../../_metronic/assets/card/customersss.png'
import merchant from '../../_metronic/assets/card/visa.png'
import process from '../../_metronic/assets/card/processs.png'
import waiting from '../../_metronic/assets/card/waitings.png'
import transaction from '../../_metronic/assets/card/transactions.png'
import reject from '../../_metronic/assets/card/reject.png'
import React, { FC } from 'react';

type Props = {
  dashboardData: any
}


export function MerchantAnaltytics({dashboardData}) {
    return (
        <>
        <h1
    style={{
      marginTop:"20px",
      fontSize:"25px",
      fontWeight: "bold",
      marginBottom:"20px",
    }}
    >Analytics</h1>
    <div className='row g-5 g-xl-10'>
      {/* begin::Col */}
      {/* <div className=' col-md-6 col-lg-6 col-xl-6 col-xxl-3'>
        <HomeMainCard
          className='mb-5 mb-xl-10'
          description='Wallet Balance'
          color='#F0F0F0'
          icon={icon1}
          textColor='#071437'
          count={dashboardData?.wallet_balance}
        />
      </div> */}
      <div className=' col-md-6 col-lg-6 col-xl-6 col-xxl-3'>
        <HomeMainCard
          className='mb-5 mb-xl-10'
          description='Total Visa'
          color='#fff'
          icon={customer}
          textColor='#071437'
          count={dashboardData?.total_visa || 0}
        />
      </div>
      <div className=' col-md-6 col-lg-6 col-xl-6 col-xxl-3'>
        <HomeMainCard
          className='mb-5 mb-xl-10'
          description='Approved Visa'
          color='#fff'
          icon={merchant}
          textColor='#071437'
          count={dashboardData?.approved_visa || 0}
        />
      </div>
      <div className=' col-md-6 col-lg-6 col-xl-6 col-xxl-3'>
        <HomeMainCard
          className='mb-5 mb-xl-10'
          description='No. of Visa In-Process'
          color='#fff'
          icon={process}
          textColor='#071437'
          count={dashboardData?.in_process_visa || 0}
        />
      </div>
      <div className=' col-md-6 col-lg-6 col-xl-6 col-xxl-3 '>
        <HomeMainCard
          className='mb-5 mb-xl-10'
          description='No. of Visa In Waiting'
          color='#fff'
          icon={waiting}
          textColor='#071437'
          count={dashboardData?.waiting_visa || 0}
        />
      </div>
    </div>
    <div className='row g-5 g-xl-10'>
      <div className=' col-md-6 col-lg-6 col-xl-6 col-xxl-3 '>
        <HomeMainCard
          className='mb-5 mb-xl-10'
          description='No. of Visa Not Issued'
          color='#fff'
          icon={reject}
          textColor='#071437'
          count={dashboardData?.not_issued_visa || 0}
        />
      </div>
    </div>
    <hr/>
    <h1
    style={{
      marginTop:"20px",
      fontSize:"25px",
      fontWeight: "bold",
      marginBottom:"20px",
    }}
    >Today's Statistics</h1>
    <div className='row g-5 g-xl-10'>
      <div className=' col-md-6 col-lg-6 col-xl-6 col-xxl-3'>
        <HomeMainCard
          className='mb-5 mb-xl-10'
          description={`Today's Transactions`}
          color='#fff'
          icon={transaction}
          textColor='#071437'
          count={dashboardData?.today_total_transactions || 0}
        />
      </div>
      <div className=' col-md-6 col-lg-6 col-xl-6 col-xxl-3'>
        <HomeMainCard
          className='mb-5 mb-xl-10'
          description='Visa processed today'
          color='#fff'
          icon={merchant}
          textColor='#071437'
          count={dashboardData?.visa_processed_today || 0}
        />
      </div>
    </div>
        </>
    )
}