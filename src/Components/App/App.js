import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:view/:id" element={<Home />} />
          <Route path="/:view/:id/album/:albumId" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
