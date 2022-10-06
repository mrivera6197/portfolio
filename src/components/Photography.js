import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../App.css"
import img2 from "../assets/watercolor.jpg"
import img3 from "../assets/twerkonthatbeat.jpg"
import img4 from "../assets/step.jpg" 
import img7 from "../assets/tornadoes.jpg"
import img8 from "../assets/blackadnwhite.jpg"
import img5  from "../assets/blue.jpg" 
import Film from "./Film"
import Flume from "./Flume"


function Photography() {

  const [hover, setHover] = useState(false);


  return(
    <div className="photoPage gallery">
      <div className="">
      <div className="photoContainer">
        <div className="photos">
          
        </div>
      </div>
       <div className="photoGallery">
        <div className="contentVideo">
          <div className="wordContent">
          <h3></h3>
          <p className="hide"></p>
          </div>
          <button className="welcomeButton3 photoButton"></button>
          <iframe title="vimeo-player" src="https://player.vimeo.com/video/701274994?h=988e4441a8" width="640" height="640" frameborder="0" allowfullscreen></iframe>
  
        </div>
        <div className="mid-section">
        <button className="welcomeButton3 photoButton2"></button>
          <div className="mid-sub">
          </div> 
          <div className="mid-sub">
          </div> 
          <button className="welcomeButton3 photoButton2"></button>
          <div className="mid-sub">
          </div> 
          <div className="mid-sub">
          </div> 
          <button className="welcomeButton3 photoButton2"></button>
          <div className="mid-sub">
          </div> 
          <div className="mid-sub">
          </div>
          <div className="mid-sub">
          </div> 
          <div className="mid-sub">
          </div> 
          <div className="mid-sub">
          </div> 
          <div className="mid-sub">
          </div> 
          <div className="mid-sub">
          </div> 
          <div className="mid-sub">
          </div>
          <div className="mid-sub">
          </div> 
          <div className="mid-sub">
          </div> 
          <div className="mid-sub">
          </div> 
          <button className="welcomeButton3 photoButton2"></button>
          <div className="mid-sub">
          </div> 
          <div className="mid-sub">
          </div> 
          <div className="mid-sub">
          </div>
        </div>
        <div className="subSections">

  
          <div className="subSection">
           
            <button className="welcomeButton3 photoButton2"></button>
          </div> 

          <Film />

          <div className="contentVideo">
          <div className="wordContent">
          <h3></h3>
          <p className="hide"></p>
          </div>
          <button className="welcomeButton3 photoButton"></button>
          <iframe title="vimeo-player" src="https://player.vimeo.com/video/751411728?h=2f54f50057" width="640" height="640" frameborder="0" allowfullscreen></iframe>
        </div>

          <Flume />


          <div className="subSection">
           
            <button className="welcomeButton3 photoButton2"></button>
          </div>  

         
        </div>



          <div className="subSection">
           
          </div> 
          </div>
       </div>
       </div>
  )
}

export default Photography