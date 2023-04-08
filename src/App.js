import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Friends from './components/Friends';
import Messages from './components/Messages';
import Notification from './components/Notification';
import YourFriends from './components/YourFriends';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="friends" element={<Friends />} />
        <Route path="messages" element={<Messages />} />
        <Route path="notification" element={<Notification />} />
        <Route path="yourFriends" element={<YourFriends />} />
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
