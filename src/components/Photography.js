import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../App.css"
import img from "../assets/bridge.jpg"
import img2 from "../assets/watercolor.jpg"
import img3 from "../assets/twerkonthatbeat.jpg"
import img4 from "../assets/step.jpg" 
import img5 from "../assets/fadedoranfe.jpg" 
import img7 from "../assets/cubey.jpg"


function Photography() {

  return(
    <div className="photoPage">
      <div className="photoContainer">
        <div className="photos">
          
        </div>
      </div>
       <div className="photoGallery">
          <div className="subSection">
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/701274994?h=988e4441a8" width="640" height="640" frameborder="0" allowfullscreen></iframe>
          </div> 
          <div className="subSection">
            <img src={img3}/>
          </div> 
          <div className="subSection">
            <img src={img5}/>
          </div>  
          <div className="subSection">
            <img src={img3}/>
          </div> 
          <div className="subSection">
            <img src={img2}/>
          </div> 
          <div className="subSection">
            <img src={img3}/>
          </div> 
          <div className="subSection">
            <img src={img3}/>
          </div> 
          <div className="subSection">
            <img src={img2}/>
          </div> 
          <div className="subSection">
            <img src={img3}/>
          </div>
       </div>
    </div>
  )
}

export default Photography