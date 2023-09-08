/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget6,
  TablesWidget5,
  TablesWidget10,
  MixedWidget8,
  CardsWidget7,
  CardsWidget17,
  ListsWidget26,
  EngageWidget10,
  StatisticsWidget4,
  StatisticsWidget6,
} from '../../../_metronic/partials/widgets'

import icon1 from '../../../_metronic/assets/card/1.png'
import customer from '../../../_metronic/assets/card/customer.png'
import merchant from '../../../_metronic/assets/card/merchant.png'
import payment from '../../../_metronic/assets/card/payment.png'
import wallet from '../../../_metronic/assets/card/wallet.png'
import customer2 from '../../../_metronic/assets/card/customer.svg'
import {HomeMainCard} from '../../components/HomeMainCard'

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row g-5 g-xl-10'>
      {/* begin::Col */}
      <div className=' col-md-6 col-lg-6 col-xl-6 col-xxl-3'>
        <HomeMainCard
          className='mb-5 mb-xl-10'
          description='Active Projects'
          color='#F0F0F0'
          icon={icon1}
          textColor='#071437'
          count='30'
        />
      </div>
      <div className=' col-md-6 col-lg-6 col-xl-6 col-xxl-3'>
        <HomeMainCard
          className='mb-5 mb-xl-10'
          description='Individual Customers'
          color='#071537'
          icon={customer}
          textColor='#ffff'
          count='30'
        />
      </div>
      <div className=' col-md-6 col-lg-6 col-xl-6 col-xxl-3'>
        <HomeMainCard
          className='mb-5 mb-xl-10'
          description='Registered Merchants'
          color='#FFC703'
          icon={merchant}
          textColor='#FFFF'
          count='50'
        />
      </div>
      <div className=' col-md-6 col-lg-6 col-xl-6 col-xxl-3'>
        <HomeMainCard
          className='mb-5 mb-xl-10'
          description='Payments Processed'
          color='#7239EB'
          icon={wallet}
          textColor='#FFFF'
          count='50,000'
        />
      </div>
    </div>
    <div className='row g-5 g-xl-10'>
      <div className=' col-md-6 col-lg-6 col-xl-6 col-xxl-3 '>
        <HomeMainCard
          className='mb-5 mb-xl-10'
          description='No. of Visa In-Process'
          color='#F0F0F0'
          icon={icon1}
          textColor='#071437'
          count='23'
        />
      </div>
      <div className=' col-md-6 col-lg-6 col-xl-6 col-xxl-3 '>
        <HomeMainCard
          className='mb-5 mb-xl-10'
          description='No. of Visa Waiting for Approval'
          color='#071537'
          icon={customer}
          textColor='#ffff'
          count='30'
        />
      </div>
      <div className=' col-md-6 col-lg-6 col-xl-6 col-xxl-3 '>
        <HomeMainCard
          className='mb-5 mb-xl-10'
          description='Atlys Wallet Balance'
          color='#FFC703'
          icon={merchant}
          textColor='#FFFF'
          count='12,000'
        />
      </div>
    </div>
    <div className='row g-5 g-xl-8'>
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
    </div>
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
