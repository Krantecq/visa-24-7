import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../../../_metronic/assets/icons/logo.png";
import axiosInstance from '../../../app/helpers/axiosInstance';
import { v4 as uuidv4 } from "uuid";
import Cookies from 'js-cookie';
import { toast } from 'react-toastify'

interface ContactsProps {
  contacts: any[];
  changeChat: (contact: any) => void;
}

const Contacts: React.FC<ContactsProps> = ({ contacts, changeChat }) => {
  const [currentUserName, setCurrentUserName] = useState<string | undefined>(undefined);
  const [currentUserImage, setCurrentUserImage] = useState<string | undefined>(undefined);
  const [currentSelected, setCurrentSelected] = useState<number | undefined>(undefined);
  const [merchants, setMerchants] = useState<any[]>([]);
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
      
      fetchProfileData()
    }
    else{
      fetchData();
    }
  }, [])
  const fetchProfileData = async () => {
    try {
      const user_id = Cookies.get('user_id');
      const postData = { id: user_id };

      const response = await axiosInstance.post('/backend/fetch_single_merchant_user', postData);

      if (response.status === 203) {
        toast.error('Please Logout And Login Again', { position: 'top-center' });
      }

      setProfile(response.data.data);
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };


  const fetchData = async () => {
    try {
      const user_id = Cookies.get('user_id')
      axiosInstance.post('/backend/fetch_super_admin', {
        id: user_id
      })
        .then((response) => {
          console.log('profile response-->',response.data.data)
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

  useEffect(() => {
  const fetchData = async () => {
    try {
      const localStorageData = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY || 'localhost:5003');
      const data = localStorageData ? JSON.parse(localStorageData) : {};
      const response = await axiosInstance.post(`/backend/fetch_merchant_user`);
      // console.log('API Response:', response.data); 
      setMerchants(response.data);

      if (response.data.length > 0) {
        console.log('Setting initial chat:', response.data[0]);
        changeChat(response.data[0]);
      }

      if (user_type === 'super_admin') {
        setCurrentUserName(profile.super_admin_name);
        setCurrentUserImage(profile.super_admin_profile_photo);
      } else if (user_type === 'merchant') {
        setCurrentUserName(profile.merchant_name);
        setCurrentUserImage(profile.merchant_profile_photo);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, [changeChat, profile, user_type]);

  const changeCurrentChat = (index: number, contact: any) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  return (
    <>
      {currentUserImage && currentUserImage && (
        <Container>
        <div className="brand">
          <img src={Logo} alt="logo" />
        </div>
        <div className="contacts">
        {Array.isArray(merchants) &&
          merchants.map((merchantObject: any, index: number) => (
            <div
              key={merchantObject?.data?._id}
              className={`contact ${index === currentSelected ? "selected" : ""}`}
              onClick={() => changeCurrentChat(index, merchantObject?.data)}
            >
              <div className="avatar">
                <img src={merchantObject?.data?.merchant_profile_photo} alt="" />
              </div>
              <div className="username">
                <h3>{merchantObject?.data?.merchant_name}</h3>
              </div>
            </div>
          ))
        }
          </div>
        <div className="current-user">
          <div className="avatar">
          <img src={currentUserImage} alt="avatar" />
          </div>
          <div className="username">
            <h2>{currentUserName}</h2>
          </div>
        </div>
      </Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  background-color: #080420;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 2rem;
    }
    h3 {
      color: white;
      text-transform: uppercase;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: #ffffff34;
      cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      padding: 10px 15px;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
    .selected {
      background-color: #9a86f3;
    }
  }

  .current-user {
    background-color: #0d0d30;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .avatar {
      img {
        height: 4rem;
        max-inline-size: 100%;
      }
    }
    .username {
      h2 {
        color: white;
      }
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;


export default Contacts;
