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
      console.log("Connected to socket server");
    });

    socketRef.current.on("msg-recieve", (receivedMessage) => {
      console.log("Received Message from Socket:", receivedMessage);
      setMessages((prevMessages) => [...prevMessages, { fromSelf: false, message: receivedMessage }]);
      // Scroll to the bottom when a new message is received
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    });

    socketRef.current.on("disconnect", () => {
      console.log("Disconnected from socket server");
    });

    socketRef.current.on("error", (error) => {
      console.error("Socket error:", error);
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [messages, setMessages, socketRef.current]);

  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching data...');
      try {
        const userIdFromCookies = Cookies.get('user_id');
        console.log('User ID from Cookies:', userIdFromCookies);
        let receiveMessageRoute = "/backend/get_message";
  
        if (receiveMessageRoute) {
          // Assuming currentChat._id represents the merchant's ID
          const toId = '6523a9eed9be7d310661ecc4';
          console.log(currentChat)
          // Update the condition to fetch messages for merchants only
            const messagesResponse = await axiosInstance.post(receiveMessageRoute, {
              from: userIdFromCookies,
              to: toId,
            });
  
            const msgs = messagesResponse.data.data;
            setMessages(msgs);
            console.log('Updated Messages:', msgs);
  
            // Scroll to the bottom when messages are updated
            scrollRef.current?.scrollIntoView({ behavior: "smooth" });
          
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
          {/* <div className="avatar">
            <img
              src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
              alt=""
            />
          </div> */}
          <div className="username">
            <h3>Chatting With Superadmin !</h3>
          </div>
        </div>
      </div>
      <div className="chat-messages" ref={scrollRef}>
        {messages.map((message) => (
          <div
            key={uuidv4()}
            className={`message ${message.fromSelf ? "sended" : "received"}`}
          >
            <div className="content">
              <p>{message.message}</p>
            </div>
          </div>
        ))}
        {/* Dummy element for scrolling to the bottom */}
        <div ref={scrollRef}></div>
      </div>
      <ChatInput handleSendMsg={handleSendMsg} />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  gap: 0.1rem;
  width: 80vw;
  overflow: hidden;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 15% 70% 15%;
  }
  .chat-header {
    display: flex;
    justify-content: center;
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
          color: Black;
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
        padding: 10px 20px 0px 20px;
        font-size: 1.1rem;
        border-radius: 1rem;
        color: #000;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          max-width: 70%;
        }
      }
    }
    
    .sended {
      .content {
        background-color: #f4f4f4;
        margin-right: auto;
        border-radius: 15px 5px 15px 5px;
      }
    }
  
    .received {
      .content {
        background-color: #dbfbcc;
        border-radius: 5px 15px 5px 10px;
        margin-left: auto; // Adjusted line to margin-left
      }
    }
  }
`;
export default ChatContainer;
