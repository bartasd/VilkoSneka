import styled from "styled-components";
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(
      to bottom,
      rgba(253, 185, 19, 0.7),
      rgba(0, 106, 68, 0.7),
      rgba(193, 39, 45, 0.7)
    ),
    #fff;
  height: 100vh;

  & h1 {
    font-size: 3rem;
    font-family: Chevy;
    background: linear-gradient(to right, #711a79, #f97c5c, #17b7e9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 50px;
  }

  & form {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    gap: 100vw;
    transition: transform 0.3s linear;

    & div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  & input,
  button {
    height: 2.5rem;
    width: 250px;
    border: none;
    margin-bottom: 20px;
    border-radius: 5px;
  }

  & input {
    outline-color: #17b7e9;
    color: #17b7e9;
    font-style: italic;
    text-align: center;
  }
  & button {
    background-color: #efeae7;
    font-family: Chevy;
    font-size: 1.5rem;
  }
  & button:hover {
    box-shadow: 0 0 5px 5px white;
    cursor: pointer;
  }
`;
