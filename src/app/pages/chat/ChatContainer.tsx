import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';

import ChatInput from "./ChatInput";
import { v4 as uuidv4 } from "uuid";
import axiosInstance from '../../../app/helpers/axiosInstance'


interface ChatContainerProps {
  currentChat?: any;
  socket?: React.MutableRefObject<any>;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ currentChat, socket }) => {
  const [messages, setMessages] = useState<any[]>([]);
  const scrollRef = useRef<any>();
  const [arrivalMessage, setArrivalMessage] = useState<any | null>(null);

  const fetchData = async () => {
    try {
      const localStorageData = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY || 'http://localhost:3000');
      const data = localStorageData ? JSON.parse(localStorageData) : {};
  
        let receiveMessageRoute = "/backend/get_message";
        if (receiveMessageRoute) {
          const response = await axiosInstance.post(receiveMessageRoute, {
            from: data._id,
            to: currentChat._id,
          }); 
          setMessages(response.data);
        }
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSendMsg = async (msg: string) => {
    try {
      const localStorageData = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY || 'http://localhost:3000');
      const data = JSON.parse(localStorageData || "{}");
      let sendMessageRoute = "/backend/add_message";
      if (socket && socket.current) {
        socket.current.emit("send-msg", {
          to: currentChat?._id,
          from: data?._id,
          msg,
        });
      }
      await axiosInstance.post(sendMessageRoute, {
        from: data?._id,
        to: currentChat?._id,
        message: msg,
      });

      const msgs = [...messages];
      msgs.push({ fromSelf: true, message: msg });
      setMessages(msgs);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <Container>
      <div className="chat-header">
        <div className="user-details">
          <div className="avatar">
            {/* <img
              src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
              alt=""
            /> */}
          </div>
          <div className="username">
            <h3>Hello</h3>
          </div>
        </div>
      </div>
      <div className="chat-messages" ref={scrollRef}>
        {messages.map((message) => (
          <div key={uuidv4()} className={`message ${message.fromSelf ? "sended" : "recieved"}`}>
            <div className="content">
              <p>{message.message}</p>
            </div>
          </div>
        ))}
      </div>
      <ChatInput handleSendMsg={handleSendMsg} />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  gap: 0.1rem;
  width: 50vw;
  overflow: hidden;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 15% 70% 15%;
  }
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
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
  }
  .chat-messages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .message {
      display: flex;
      align-items: center;
      .content {
        max-width: 40%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        color: #d1d1d1;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          max-width: 70%;
        }
      }
    }
    .sended {
      justify-content: flex-end;
      .content {
        background-color: #4f04ff21;
      }
    }
    .recieved {
      justify-content: flex-start;
      .content {
        background-color: #9900ff20;
      }
    }
  }
`;

export default ChatContainer;
