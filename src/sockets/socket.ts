import { io } from "socket.io-client";

const token = localStorage.getItem("VS_token");
console.log("my-token: ", token);
const socket = io("http://localhost:3001", {
  transports: ["websocket"],
  auth: {
    token: token,
  },
  reconnection: true,
});

export default socket;
