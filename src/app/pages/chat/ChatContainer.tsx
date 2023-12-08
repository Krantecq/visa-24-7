import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import ChatInput from "./ChatInput";
import { v4 as uuidv4 } from "uuid";
import axiosInstance from '../../../app/helpers/axiosInstance';
import Cookies from 'js-cookie';
import { io, Socket } from "socket.io-client";

interface ChatContainerProps {
  currentChat?: any;
  socket?: React.MutableRefObject<any>;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ currentChat }) => {
  const [messages, setMessages] = useState<any[]>([]); // Initialize messages as an empty array
  const scrollRef = useRef<any>();
  const socketRef = useRef<Socket | null>(null);
  const [arrivalMessage, setArrivalMessage] = useState<any | null>();

  const handleSendMsg = async (msg: string) => {
    try {
      const userIdFromCookies = Cookies.get('user_id');

      let sendMessageRoute = "/backend/add_message";

      if (socketRef.current && userIdFromCookies) {
        const toId = "6523a9eed9be7d310661ecc4";

        socketRef.current.emit("send-msg", {
          to: toId,
          from: userIdFromCookies,
          msg,
        });

        await axiosInstance.post(sendMessageRoute, {
          from: userIdFromCookies,
          to: toId,
          message: msg,
        });

        const msgs = [...messages];
        msgs.push({ fromSelf: true, message: msg });
        setMessages(msgs);
        console.log('Updated Messages:', msgs);
      } else {
        console.error("Socket or user ID is not available.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    socketRef.current = io("http://localhost:5003", {
      withCredentials: true,
    });

    socketRef.current.on("connect", () => {
      // console.log("Connected to socket server");
    });

    socketRef.current.on("msg-recieve", (receivedMessage) => {
      // console.log("Received Message from Socket:", receivedMessage);
      setMessages((prevMessages) => [...prevMessages, { fromSelf: false, message: receivedMessage }]);
    });

    socketRef.current.on("disconnect", () => {
      // console.log("Disconnected from socket server");
    });

    socketRef.current.on("error", (error) => {
      // console.error("Socket error:", error);
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [messages, setMessages, socketRef.current]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userIdFromCookies = Cookies.get('user_id');
        // console.log('User ID from Cookies:', userIdFromCookies);
        let receiveMessageRoute = "/backend/get_message";
        
        if (receiveMessageRoute && currentChat) {
          const toId = currentChat._id; // Use currentChat to get the correct merchant's _id
          
          const messagesResponse = await axiosInstance.post(receiveMessageRoute, {
            from: toId, // This is now the merchant's _id
            to: userIdFromCookies, // This is now the user's _id
          });
  
          setMessages(messagesResponse.data.data);
          // console.log('Add Message Response:', messagesResponse.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [currentChat]);


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
            {/* <h3>Hello</h3> */}
          </div>
        </div>
      </div>
      <div className="chat-messages" ref={scrollRef}>
      {messages && messages.map((message) => (
        <div
          key={uuidv4()}
          className={`message ${message.fromSelf ? "sended" : "received"}`}
        >
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
      .content {
        background-color: #4f04ff21;
      }
    }
    
    .recieved {
      .content {
        background-color: #9900ff20;
      }
    }
  }
`;

export default ChatContainer;
