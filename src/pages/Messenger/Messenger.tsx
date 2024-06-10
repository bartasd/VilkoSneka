import MessengerContainer from "./MessengerContainer";
import { useNavigate } from "react-router-dom";
import { KeyboardEvent, useEffect, useRef } from "react";
import socket from "../../sockets/socket";
import { messageCreateUrl } from "../../constants/back_constants";
import axios from "axios";

const token = localStorage.getItem("VS_token");

const Messenger = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/VilkoSneka");
  };

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

  const inputRef = useRef<HTMLTextAreaElement | null>(null);

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
      // const item = document.createElement("li");
      // item.textContent = msg;
      // messages.appendChild(item);
      // window.scrollTo(0, document.body.scrollHeight);
      console.log(msg);
    });
    // Clean up on component unmount
    return () => {
      socket.off("connect");
      socket.off("message");
    };
  }, []);

  return (
    <MessengerContainer>
      <div className="chat-cont">
        <div className="chat">
          {/* // append p messages here
            // users messages shows to the right;
            // other messages shows to the left; */}
          <p className="isUser">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
            distinctio.
          </p>
          <p className="isUser">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            cumque placeat iste dolor commodi nulla!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
            eveniet fugit quibusdam animi sequi!
          </p>
          <p className="isUser">Lorem ipsum dolor sit.</p>
          <p className="isUser">Lorem ipsum dolor sit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
            quisquam ab expedita laboriosam eaque at omnis dolor.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
            quisquam ab expedita laboriosam eaque at omnis dolor.
          </p>
          <p className="isUser">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <p>Lorem, ipsum dolor.</p>
          <p className="isUser">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="isUser">Lorem ipsum dolor sit.</p>
          <p className="isUser">Lorem ipsum dolor sit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
            quisquam ab expedita laboriosam eaque at omnis dolor.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
            quisquam ab expedita laboriosam eaque at omnis dolor.
          </p>
          <p className="isUser">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <p>Lorem, ipsum dolor.</p>
          <p className="isUser">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="isUser">Lorem ipsum dolor sit.</p>
          <p className="isUser">Lorem ipsum dolor sit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
            quisquam ab expedita laboriosam eaque at omnis dolor.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
            quisquam ab expedita laboriosam eaque at omnis dolor.
          </p>
          <p className="isUser">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <p>Lorem, ipsum dolor.</p>
          <p className="isUser">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
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
