import React from 'react';
import '../App.css';
import { Link} from 'react-router-dom';

function Navbar() {
  
  return (
    <div>
        <div className="navBar">
        
      
            <h1>Restaurant Management </h1>
            <ul>
            <div className="colorr"><li><a href="/home">Home</a></li></div>
            <div className="colorr"><li><a href="/chef">Chef</a></li></div>
            <div className="colorr"><li><a href="/cuisine">Cuisines</a></li></div>
            <div className="colorr"><li><a href="/reservation">Reservation</a></li></div>
            
            </ul>
        </div>
    </div>
  )
}

export default Navbar