import { HomeMainCard } from "./HomeMainCard";
import icon1 from '../../_metronic/assets/card/1.png'
import customer from '../../_metronic/assets/card/customer.png'
import merchant from '../../_metronic/assets/card/merchant.png'

export function MerchantAnaltytics() {
    return (
        <>
   <div className='row g-5 g-xl-10'>
      {/* begin::Col */}
      <div className=' col-md-6 col-lg-6 col-xl-6 col-xxl-3'>
        <HomeMainCard
          className='mb-5 mb-xl-10'
          description='API Merchants'
          color='#F0F0F0'
          icon={icon1}
          textColor='#071437'
          count='2'
        />
      </div>
      <div className=' col-md-6 col-lg-6 col-xl-6 col-xxl-3'>
        <HomeMainCard
          className='mb-5 mb-xl-10'
          description='Individual Customers'
          color='#071537'
          icon={customer}
          textColor='#ffff'
          count={'12'}
        />
      </div>
      <div className=' col-md-6 col-lg-6 col-xl-6 col-xxl-3'>
        <HomeMainCard
          className='mb-5 mb-xl-10'
          description='Registered Merchants'
          color='#FFC703'
          icon={merchant}
          textColor='#FFFF'
          count={'20'}
        />
      </div>
      <div className=' col-md-6 col-lg-6 col-xl-6 col-xxl-3'>
        <HomeMainCard
          className='mb-5 mb-xl-10'
          description='No. of Visa Rejected'
          color='#7239EB'
          icon={icon1}
          textColor='#FFFF'
          count={'76'}
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
          count={'72'}
        />
      </div>
      <div className=' col-md-6 col-lg-6 col-xl-6 col-xxl-3 '>
        <HomeMainCard
          className='mb-5 mb-xl-10'
          description='No. of Visa Waiting for Approval'
          color='#071537'
          icon={customer}
          textColor='#ffff'
          count={'21'}
        />
      </div>
      <div className=' col-md-6 col-lg-6 col-xl-6 col-xxl-3 '>
        <HomeMainCard
          className='mb-5 mb-xl-10'
          description='Atlys Wallet Balance'
          color='#FFC703'
          icon={merchant}
          textColor='#FFFF'
          count={'21'}
        />
      </div>
    </div>
        </>
    )

}