import React, { useState, useEffect } from 'react';
import './Chef.css';
import './App.css';
import Navbar from "./components/Navbar";
import Body from './components/Body';
import axios from 'axios';
import Cuisine from './pages/Cuisine';
import Reservation from './pages/Reservation';
import Home from './pages/Home';
import Chef from './pages/Chef';
import Login from './pages/Login';
function App() {
  console.log(window.location);
  let Component;
  switch (window.location.pathname){
    case "/home":
      Component = Home
      break
    case "/chef":
      Component = Chef
      break
    case "/cuisine":
      Component = Cuisine
      break
    case "/reservation":
      Component = Reservation
      break
    default:
      Component = Login
      break
  }
  
  return (
    <div className="App">
         
      <Component />
    </div>
  );
}

export default App;
