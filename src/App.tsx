import "./App.css";
import Login from "./pages/Login/Login";
import Messenger from "./pages/Messenger/Messenger";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/VilkoSneka" element={<Login />} />
        <Route path="/messenger" element={<Messenger />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
