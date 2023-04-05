import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SetAvatar from "./pages/SetAvatar";
import Calendar from "./pages/Calendar";

export default function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/" element={<Chat />}/>
      <Route path="/setAvatar" element={<SetAvatar/>}/>
      <Route path="/calendar" element={<Calendar />}/>
      </Routes>
  </BrowserRouter>
)}