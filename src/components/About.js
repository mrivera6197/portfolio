import React, { useState, useEffect} from "react";
import { Navigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import "../App.css"

function About() { 
  const [redirect, setRedirect] = useState(false); 

  if (redirect) {
    return <Navigate to='/photography' />
}


  return( 
    <div className="photoPage">
    <div className="smallContainer flexy"> 
    <div className="container1">  
    <button className="welcomeButton3 colorize"></button>
    <button className="welcomeButton3 colorize"></button>
    <div className="container2">
    <button className="welcomeButton3 colorize"></button>
    <button className="welcomeButton3 colorize"></button>
    <div className="container3"> 
    <button className="welcomeButton3 colorize"></button>
    <div className="container4">
    <button className="welcomeButton3 colorize"></button>
    <button className="welcomeButton3 colorize"></button>
    <button className="welcomeButton3 colorize"></button> 
    <div className="container5"> 
    <button className="escapeButton" onClick={() => {setRedirect(true)}}>...</button>
     </div>
     </div>
     
     </div>
     
     </div>
     
      </div>   
      </div>
      </div>
  )
}

export default About 