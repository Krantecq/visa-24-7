/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { useIntl } from 'react-intl'
import { toAbsoluteUrl } from '../../../_metronic/helpers'
import { PageTitle } from '../../../_metronic/layout/core'
import {
  StatisticsWidget4,
  StatisticsWidget6,
} from '../../../_metronic/partials/widgets'
import React, { useState, useEffect } from 'react';
import icon1 from '../../../_metronic/assets/card/1.png'
import customer from '../../../_metronic/assets/card/customer.png'
import icustomer from '../../../_metronic/assets/card/3dcustom.webp'
import relations from '../../../_metronic/assets/card/3dretailer.webp'
import process from '../../../_metronic/assets/card/3dproces.webp'
import waiting from '../../../_metronic/assets/card/3dwaiting.webp'
import transaction from '../../../_metronic/assets/card/3dtransaction.webp'
import revenue from '../../../_metronic/assets/card/3drevenue.webp'
import done from '../../../_metronic/assets/card/3dvisa.webp'
import rejected from '../../../_metronic/assets/card/3drej.webp'
import customers from '../../../_metronic/assets/card/3dpartner.webp'
import issued from '../../../_metronic/assets/card/3dissued2.webp'
import merchant from '../../../_metronic/assets/card/merchant.png'
import wallet from '../../../_metronic/assets/card/wallet.png'
import { HomeMainCard } from '../../components/HomeMainCard'
import axios from 'axios';
import Loader from '../../components/Loader'
import axiosInstance from '../../helpers/axiosInstance'

type Props = {
  customer_user: string | number
  merchant_user: string | number
  in_process_visa: string | number
  not_applied: string | number
  visa_rejected:string | number
  api:string | number
  processed:string | number
  waiting:string | number
  today_total_transactions:string | number
  visa_processed_today:string | number
  revenue:string |number
}


const DashboardPage: FC<Props> = (data) => (
  
  
  <>
    {/* begin::Row */}
    <div className='row gx-0 gy-5'>
      {/* begin::Col */}
      <div className=' col-md-6 col-lg-4 col-xl-3 col-xxl-3 '>
        <HomeMainCard
          className='mb-5 mb-xl-10'
          description='Revenue generated'
          color='#fff'
          too='/superadmin/revenue'
          icon={revenue}
          textColor='#071437'
          count={data.revenue}
        />
      </div>
      <div className=' col-md-6 col-lg-4 col-xl-3 col-xxl-3'>
        <HomeMainCard
          className='mb-6 mb-xl-10'
          description='Total Partners'
          color='#fff'
          too='/superadmin/issueApi'
          icon={customers}
          textColor='#071437'
          count={data.api}
        />
      </div>
      <div className=' col-md-6 col-lg-4 col-xl-3 col-xxl-3'>
        <HomeMainCard
          className='mb-6 mb-xl-10'
          description='Total Retailers'
          color='#fff'
          too='/superadmin/merchants'
          icon={relations}
          textColor='#071437'
          count={data.merchant_user}
        />
      </div>
      <div className=' col-md-6 col-lg-4 col-xl-3 col-xxl-3'>
        <HomeMainCard
          className='mb-6 mb-xl-10'
          description='Individual Customers'
          color='#fff'
          too='/superadmin/partners'
          icon={icustomer}
          textColor='#071437'
          count={data.customer_user}
        />
      </div>
    </div>
    <div className='row gx-1 gy-5'>
    <div className=' col-md-6 col-lg-4 col-xl-3 col-xxl-3'>
        <HomeMainCard
          className='mb-6 mb-xl-10'
          description='Visa Issued'
          color='#fff'
          too='/superadmin/processed'
          icon={issued}
          textColor='#071437'
          count={data.processed}
        />
      </div>
      <div className=' col-md-6 col-lg-4 col-xl-3 col-xxl-3 '>
        <HomeMainCard
          className='mb-5 mb-xl-10'
          description='Waiting for Approval'
          color='#fff'
          too='/superadmin/in-process'
          icon={waiting}
          textColor='#071437'
          count={data.waiting}
        />
      </div>
      <div className=' col-md-6 col-lg-4 col-xl-3 col-xxl-3 '>
        <HomeMainCard
          className='mb-5 mb-xl-10'
          description='Visa In-Process'
          color='#fff'
          too='/superadmin/waiting-for-approval'
          icon={process}
          textColor='#071437'
          count={data.in_process_visa}
        />
      </div>
      <div className=' col-md-6 col-lg-4 col-xl-3 col-xxl-3'>
        <HomeMainCard
          className='mb-6 mb-xl-10'
          description='Visa Rejected'
          color='#fff'
          too='/superadmin/rejected'
          icon={rejected}
          textColor='#071437'
          count={data.visa_rejected}
        />
      </div>
    </div>
    <h1
      style={{
        marginTop:"-10px",
        marginBottom:"30px",
        fontSize:"19px"
    }}
    >Today's Statistics</h1>
    <div className='row gx-1 gy-5'>
      <div className=' col-md-6 col-lg-4 col-xl-3 col-xxl-3'>
          <HomeMainCard
            className='mb-5 mb-xl-10'
            description='Total transactions'
            color='#fff'
            too='/superadmin/wallet'
            icon={transaction}
            textColor='#071437'
            count={data.today_total_transactions}
          />
      </div>
      <div className=' col-md-6 col-lg-4 col-xl-3 col-xxl-3'>
          <HomeMainCard
            className='mb-5 mb-xl-10'
            description='Visa processed today'
            color='#fff'
            too='/superadmin/processed'
            icon={done}
            textColor='#071437'
            count={data.visa_processed_today}
          />
      </div>
    </div>
    {/* <div className='row g-5 g-xl-8'>
      <div className='col-xl-4'>
        <StatisticsWidget4
          className='card-xl-stretch mb-xl-8'
          svgIcon='basket'
          color='info'
          description='Sales Change'
          change='+256'
        />
      </div>

      <div className='col-xl-4'>
        <StatisticsWidget4
          className='card-xl-stretch mb-xl-8'
          svgIcon='element-11'
          color='success'
          description='Weekly Income'
          change='750$'
        />
      </div>

      <div className='col-xl-4'>
        <StatisticsWidget4
          className='card-xl-stretch mb-5 mb-xl-8'
          svgIcon='briefcase'
          color='primary'
          description='New Users'
          change='+6.6K'
        />
      </div>
    </div>
    <div className='row g-5 g-xl-8'>
      <div className='col-xl-4'>
        <StatisticsWidget6
          className='card-xl-stretch mb-xl-8'
          color='success'
          title='Avarage'
          description='Project Progress'
          progress='50%'
        />
      </div>

      <div className='col-xl-4'>
        <StatisticsWidget6
          className='card-xl-stretch mb-xl-8'
          color='warning'
          title='48k Goal'
          description='Company Finance'
          progress='15%'
        />
      </div>

      <div className='col-xl-4'>
        <StatisticsWidget6
          className='card-xl-stretch mb-xl-8'
          color='primary'
          title='400k Impressions'
          description='Marketing Analysis'
          progress='76%'
        />
      </div>
    </div> */}
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  const [dashData, setDashData] = useState<Props>({
    customer_user: '',
    merchant_user: '',
    in_process_visa: '',
    not_applied: '',
    visa_rejected: '',
    api:'',
    processed:'',
    waiting:'',
    today_total_transactions:'',
    visa_processed_today:'',
    revenue:'',
  });
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a Get request to your API endpoint
        axiosInstance.get('/backend/super_admin_dashboard')
          .then((response) => {
            console.log(response.data)
            setDashData(response.data.data);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching Atlys data:', error);
            setLoading(false);
          });
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
      {/* <DashboardPage {...dashData}/> */}
      {loading ?
      <Loader loading={loading} />
      :
      <DashboardPage {...dashData}/>
}
    </>
  )
}

export { DashboardWrapper }
