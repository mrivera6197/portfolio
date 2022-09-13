import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../App.css"
import img2 from "../assets/watercolor.jpg"
import img3 from "../assets/twerkonthatbeat.jpg"
import img4 from "../assets/step.jpg" 
import img7 from "../assets/tornadoes.jpg"
import img8 from "../assets/blackadnwhite.jpg"


function Photography() {

  return(
    <div className="photoPage">
      <div className="mini-photoPage">
      <div className="photoContainer">
        <h2>2022 photo gallery</h2>
        <div className="photos">
          
        </div>
      </div>
       <div className="photoGallery">
        <div className="contentVideo">
        <h3>Summer 2022</h3>

          <iframe title="vimeo-player" src="https://player.vimeo.com/video/701274994?h=988e4441a8" width="640" height="640" frameborder="0" allowfullscreen></iframe>
  
        </div>
          <div className="subSection">
          <img src={img4}/>
          </div> 
          <div className="subSection">
            <img src={img3}/>
          </div> 
          <div className="subSection">
            <img src={img7}/>
          </div>  
          <div className="subSection">
            <img src={img7}/>
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
    </div>
  )
}

export default Photography