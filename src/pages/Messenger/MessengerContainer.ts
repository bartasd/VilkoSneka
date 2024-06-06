import styled from "styled-components";

const margin = 30;
const inputHeight = 3;

const MessengerContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  min-width: 720px;
  display: flex;
  background: linear-gradient(to right, #711a79, #f97c5c, #17b7e9);
  & .chat-cont {
    display: flex;
    flex-direction: column;
    width: calc(100% - 300px);
    height: 100vh;
    overflow: hidden;
    & .chat {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: calc(100% - 2 * ${margin}px - 2px);
      min-width: 300px;
      height: calc(100% - ${inputHeight}rem - 3 * ${margin}px - 2px);
      min-height: 200px;
      margin-left: ${margin}px;
      margin-top: ${margin}px;
      border-radius: 10px;
      border: 1px solid lightgrey;
      box-shadow: 3px 3px lightgrey;
      overflow: scroll;
      overflow-x: hidden;
      overflow-y: auto;
      & p:first-of-type {
        margin-top: ${margin}px;
      }
      & p {
        word-wrap: break-word;
        padding: 10px;
        max-width: 50%;
        height: auto;
        background-color: #17b7e9;
        margin-left: ${margin}px;
        border-radius: 15px;
        border-top-right-radius: 5px;
        border-bottom-left-radius: 0;
        align-self: start;
        text-align: justify;
      }
      & p.isUser {
        background-color: #711a79;
        align-self: end;
        margin-right: ${margin}px;
        border-radius: 15px;
        border-top-left-radius: 5px;
        border-bottom-right-radius: 0;
      }
    }
    /* width */
    & .chat::-webkit-scrollbar {
      width: 10px;
      border-radius: 30px;
    }

    /* Track */
    & .chat::-webkit-scrollbar-track {
      border-radius: 5px;
    }

    /* Handle */
    & .chat::-webkit-scrollbar-thumb {
      background: #4287f5;
    }

    /* Handle on hover */
    & .chat::-webkit-scrollbar-thumb:hover {
      background: #711a79;
    }
    & textarea {
      margin-top: ${margin}px;
      margin-left: ${margin}px;
      min-width: calc(100% - 2 * ${margin}px - 10px);
      max-width: calc(100% - 2 * ${margin}px - 10px);
      min-height: ${inputHeight}rem;
      max-height: ${inputHeight}rem;
      outline: none;
      border: none;
      font-size: 1rem;
      line-height: 3rem;
      padding-left: 10px;
      border-radius: 10px;
      box-shadow: 3px 3px lightgrey;
      font-family: CrimsonPro;
      resize: none;
    }
    & textarea::-webkit-scrollbar {
      display: none;
    }
    & textarea:hover {
      box-shadow: 0 0 5px 5px white;
    }
  }
  & .users-cont {
    width: 300px;
    display: flex;
    flex-direction: column;
    & .users {
      width: calc(100% - 2 * ${margin}px - 2px);
      height: calc(100% - ${inputHeight}rem - 3 * ${margin}px - 2px);
      min-height: 200px;
      margin-left: ${margin}px;
      margin-top: ${margin}px;
      border-radius: 10px;
      border: 1px solid lightgrey;
      box-shadow: 3px 3px lightgrey;
    }
    & button {
      width: 50%;
      height: 3rem;
      margin-top: ${margin}px;
      margin-left: 25%;
      border: none;
      border-radius: 10px;
      box-shadow: 3px 3px lightgrey;
      font-family: CrimsonPro;
      font-size: 32px;
      color: #4287f5;
    }
    & button:hover {
      box-shadow: 0 0 5px 5px white;
      cursor: pointer;
    }
  }
`;

export default MessengerContainer;
