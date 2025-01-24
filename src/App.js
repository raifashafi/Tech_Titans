import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

// import Awareness from './components/Awareness';
// import LoginPage from './components/LoginPage';
// import RegistrationPage from './components/RegistrationPage';
import Homepage from './components/Homepage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Homepage/>} />
          {/* <Route path="/awareness" element={<Awareness/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegistrationPage/>} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
