import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../App.css"
import img from "../assets/bridge.jpg"
import img2 from "../assets/watercolor.jpg"
import img3 from "../assets/twerkonthatbeat.jpg"

function Photography() {

  return(
    <div className="photoPage">
      <div className="photoContainer">
        <div className="photos">
          
        </div>
      </div>
       <div className="photoGallery">
          <div className="subSection">
            <img src={img}/>
          </div> 
          <div className="subSection">
            <img src={img2}/>
          </div> 
          <div className="subSection">
            <img src={img3}/>
          </div>  
          <div className="subSection">
            <img src={img}/>
          </div> 
          <div className="subSection">
            <img src={img2}/>
          </div> 
          <div className="subSection">
            <img src={img3}/>
          </div> 
          <div className="subSection">
            <img src={img}/>
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