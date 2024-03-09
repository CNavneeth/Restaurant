import React from 'react'
import Navbar from './Navbar'
import video1 from "../assets/bg.mp4";
import img1 from "../assets/food1.jpg";
import img2 from "../assets/food2.jpg";
import img3 from "../assets/food3.jpg";
import img4 from "../assets/food4.jpg";
import img5 from "../assets/food5.jpg";
import img6 from "../assets/food6.jpg";
import { Link, animateScroll as scroll } from 'react-scroll';

function Body() {
  return (
    <div>
        <div className="page1">
        <Navbar />
        <div className="container">
            <h1>
              Restaurant Manager
            </h1>
            
        </div>
        <div>
            <Link to="scroll-to-element" smooth={true} duration={500} className="home_button">Explore</Link>
        </div>
        <video src={video1} autoPlay loop muted playsInline className="bg_video" />
     </div>
     <div className="page2" >
      <div className="left" id="scroll-to-element">
          <h1>Michelin Star Cuisines</h1>
          <p>A Michelin Star is awarded to restaurants offering outstanding cooking. We take into account five universal criteria: the quality of the ingredients, the harmony of flavours, the mastery of techniques, the personality of the chef as expressed through their cuisine and, just as importantly, consistency both across the entire menu and over time. A Michelin star rating is one of the most prestigious honors a restaurant can receive. Learn how restaurants get stars and how the Michelin Guide started.</p>
      </div>
      <div className="right">
        <div className="right_content">
          <img src={img1} className="images"/>
        </div>
        <div className="right_content">
          <img src={img2} className="images"/>
        </div>
        <div className="right_content">
          <img src={img3} className="images"/>
        </div>
        <div className="right_content">
          <img src={img4} className="images"/>
        </div>
        <div className="right_content">
          <img src={img5} className="images"/>
        </div>
        <div className="right_content">
          <img src={img6} className="images"/>
        </div>
      </div>

     </div>
     <div className="page3">
        
     </div>
    </div>
  )
}

export default Body