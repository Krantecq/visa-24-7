import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { io, Socket } from "socket.io-client";
import styled from "styled-components";
import ChatContainer from "./ChatContainer";
import Contacts from "./Contact";
import Cookies from 'js-cookie';
import axiosInstance from '../../../app/helpers/axiosInstance';

const Chat: React.FC = () => {
  const navigate = useNavigate();
  const socket = useRef<Socket<any, any>>(io());
  const [currentUser, setCurrentUser] = useState<any | undefined>(undefined);
  const [currentChat, setCurrentChat] = useState<any | undefined>(undefined);
  const [merchantList, setMerchantList] = useState<any[]>([]);

  useEffect(() => {
    const user = {
      user_type: Cookies.get('user_type'),
    };
    
    // console.log('Cookies Data:', document.cookie);
    setCurrentUser(user);
    // console.log('Socket Connection:', socket.current);
  }, []);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.post(`/backend/fetch_merchant_user`);
        setMerchantList(response.data);

        if (response.data.length > 0) {
          setCurrentChat(response.data[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [currentUser]);

  const handleChatChange = (chat: any) => {
    setCurrentChat(chat);
  };
  
  
  return (
      <>
          <Container>
              <div className="container">
                  {currentUser && currentUser.user_type !== 'merchant' && (
                      <Contacts contacts={merchantList} changeChat={handleChatChange} />
                  )}
                  <ChatContainer currentChat={currentChat} socket={socket} />
              </div>
          </Container>
      </>
  );
};

// interface ChatContainerProps {
//     currentChat?: any;
//     socket?: Socket | null;
// }

const Container = styled.div`
    height: 100%;
    width: 100%;
    margin-top: -50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background-color: #131324;
    .container {
        height: 85vh;
        width: 85vw;
        background-color: #00000076;
        display: grid;
        grid-template-columns: 25% 75%;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
            grid-template-columns: 35% 65%;
        }
    }
`;

export default Chat;
