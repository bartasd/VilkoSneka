import MessengerContainer from "./MessengerContainer";
import { useNavigate } from "react-router-dom";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import socket from "../../sockets/socket";
import {
  ServerData,
  ResponseData,
  MessageType,
} from "../../types/reducerTypes";
import {
  getMessagesUrl,
  messageCreateUrl,
} from "../../constants/back_constants";
import axios from "axios";

const Messenger = () => {
  const [messages, setMessages] = useState<MessageType[]>([]); // perleisti i redux

  const navigate = useNavigate();

  const logout = () => {
    navigate("/VilkoSneka");
  };

  const [magic, setMagic] = useState(0);

  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const token = localStorage.getItem("VS_token");
  const userData = JSON.parse(atob((token as string).split(".")[1]));
  const user = userData.username;

  const saveMessage = async (message: string) => {
    try {
      const response = await axios.post(
        messageCreateUrl,
        { message },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    } catch (error) {
      throw new Error("Failed to save message");
    }
  };

  const getMessages = async () => {
    const response: ResponseData = await axios.get(getMessagesUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data: ServerData[] = response.data;

    setMessages(
      data.map((item) => ({
        username: item.username,
        message: item.message,
        timestamp: item.timestamp,
        timestampDate: new Date(item.timestamp),
      }))
    );
  };

  const enterMessage = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    let message = "";
    if (event.key === "Enter" && inputRef.current !== null) {
      event.preventDefault();
      message += inputRef.current.value;
      inputRef.current.value = "";
      socket.emit("chat message", message);
      saveMessage(message);
    }
  };

  useEffect(() => {
    // Connect to the server
    socket.on("connect", () => {
      console.log("Connected to the server");
    });

    socket.on("message", (msg) => {
      console.log(msg);
      setMessages((old) => [
        ...old,
        {
          username: msg.user,
          message: msg.message,
          timestamp: msg.timestamp,
          timestampDate: new Date(msg.timestamp),
        },
      ]);
      setMagic((old) => old + 1);
    });

    // Clean up on component unmount
    return () => {
      socket.off("connect");
      socket.off("message");
    };
  }, []);

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <MessengerContainer>
      <div className="chat-cont">
        <div className="chat">
          {messages.map((message: MessageType, index: number) => (
            <p
              key={index}
              className={message.username === user ? "isUser" : ""}
            >
              {message.message}
            </p>
          ))}
        </div>
        <textarea ref={inputRef} onKeyDown={enterMessage} />
      </div>
      <div className="users-cont">
        <div className="users">
          {/* // append online users here;
            // append offline users here;
            // think of how position them; */}
        </div>
        <button type="button" onClick={logout}>
          Atsijungti
        </button>
      </div>
    </MessengerContainer>
  );
};

export default Messenger;
