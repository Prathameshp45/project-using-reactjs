import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import About from './components/About';
// import UserContextExample from './Hooks/UserContextExample';
import Home from './pages/Home';


function App() {
  return (
   

    <BrowserRouter>
    <Navbar/>
    <Routes>
      {/* <Route path='/' element={<h1>Home</h1>}></Route> */}
      <Route path='/' element={<Home />}></Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      {/* <Route path='/UserContextExample' element={<UserContextExample />} /> */}
 
     
    </Routes>

    </BrowserRouter>
  
  );
}

export default App;

