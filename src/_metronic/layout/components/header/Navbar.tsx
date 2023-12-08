import clsx from 'clsx'
import { KTIcon, toAbsoluteUrl } from '../../../helpers'
import { HeaderNotificationsMenu, HeaderUserMenu, Search, ThemeModeSwitcher } from '../../../partials'
import { useLayout } from '../../core'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import axiosInstance from '../../../../app/helpers/axiosInstance'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import chat from '../../../assets/card/chat (1).png'

const itemClass = 'ms-1 ms-md-4'
const btnClass =
  'btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px'
const userAvatarClass = 'symbol-35px'
const btnIconClass = 'fs-2'

const Navbar = () => {
  const { config } = useLayout();
  const [currentWallet, setCurrentWallet] = useState('');
  const [profile, setProfile] = useState({
    merchant_email_id: '',
    merchant_name: '',
    merchant_profile_photo:'',
    super_admin_profile_photo:'',
    super_admin_name:'',
    super_admin_email:''
  });

  const user_type = Cookies.get('user_type');
  useEffect(() => {
    if (user_type == 'merchant') {
      fetchwallet();
      fetchProfileData()
      const intervalId = setInterval(fetchwallet, 7000);
      return () => {
        clearInterval(intervalId);
      };
    }
    else{
      fetchData();
    }
  }, [])
  const fetchData = async () => {
    try {
      const user_id = Cookies.get('user_id')

      axiosInstance.post('/backend/fetch_super_admin', {
        id: user_id
      })
        .then((response) => {
          // console.log('profile response-->',response.data.data)
          const responseData = response.data.data;
          setProfile(responseData[0])
        })
        .catch((error) => {
          console.error('Error fetching VISA 247 data:', error);
        });


    } catch (error) {
      console.error('Error:', error);
    }
  };
  const fetchwallet = async () => {
    try {
      const user_id = Cookies.get('user_id');
      const postData = {
        id: user_id
      }
      const response = await axiosInstance.post("/backend/fetch_single_merchant_user", postData);
      // console.log("response issss----->", response)
      if (response.status == 203) {
        toast.error("Please Logout And Login Again", {
          position: 'top-center'
        });
      }
      // Assuming the response contains the profile data, update the state with the data
      setCurrentWallet(response.data.data.wallet_balance);
    } catch (error) {
      console.error("Error fetching profile data:", error);
      // Handle error (e.g., show an error message)
    }
  };
  const fetchProfileData = async () => {
    try {
      const user_id = Cookies.get('user_id')
      const postData = {
        id: user_id,
      }
      const response = await axiosInstance.post('/backend/fetch_single_merchant_user', postData)

      if (response.status == 203) {
        toast.error('Please Logout And Login Again', {
          position: 'top-center',
        })
      }
      // Assuming the response contains the profile data, update the state with the data
      setProfile(response.data.data)
    } catch (error) {
      console.error('Error fetching profile data:', error)
      // Handle error (e.g., show an error message)
    }
  }
  return (
    <div className='app-navbar flex-shrink-0'>

      {user_type == 'merchant' &&
        <div className={clsx('app-navbar-item', itemClass)}>
          <div className='d-flex align-items-center flex-grow-1 flex-lg-grow-0' style={{ backgroundColor: '#f5f5f5', padding: 10, borderRadius: 10, marginRight: 30 }}>
            <KTIcon iconName='wallet' className={btnIconClass} />

            <span className='menu-title' style={{ fontWeight: 'bold', marginLeft: 5, }}>{currentWallet} /-</span>
          </div>
        </div>
      }

      {user_type == "merchant" ?
        <Link to={'/merchant/chat'} >
          <img
            style={{
              height: "35px",
              width: "35px",
              marginTop: "17px",
              marginRight: "20px",
            }}
            src={chat}
          />
        </Link>
        :
        <Link to={'/superadmin/chat'} >
          <img
            style={{
              height: "35px",
              width: "35px",
              marginTop: "17px",
              marginRight: "20px",
            }}
            src={chat}
          />
        </Link>
      }

      <div className={clsx('app-navbar-item', itemClass)}>
        
        <div
          className={clsx('cursor-pointer symbol', userAvatarClass)}
          data-kt-menu-trigger="{default: 'click'}"
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
        >
          <img style={{borderRadius:"50%", width:"40px", height:"40px"}} src={profile.merchant_profile_photo || profile.super_admin_profile_photo} alt='Profile' />
        </div>
        <HeaderUserMenu profile={profile} />
        
      </div>

      {config.app?.header?.default?.menu?.display && (
        <div className='app-navbar-item d-lg-none ms-2 me-n3' title='Show header menu'>
          <div
            className='btn btn-icon btn-active-color-primary w-35px h-35px'
            id='kt_app_header_menu_toggle'
          >
            <KTIcon iconName='text-align-left' className={btnIconClass} />
          </div>
        </div>
      )}
    </div>
  )
}

export { Navbar }
