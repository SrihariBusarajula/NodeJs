import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react'
import './App.css';
import Header from './header.jsx';
import Home from './home.jsx';
import Footer from './footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login.jsx';
import Registration from './registration.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
