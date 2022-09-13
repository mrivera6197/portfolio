import React, { useState, useEffect} from "react";
import { Navigate } from 'react-router-dom';
import "../App.css"


function Home() {
    const [offsetY, setOffsetY] = useState(0);
    const [redirect, setRedirect] = useState(false);
    const handleScroll = () => setOffsetY(window.pageYoffset);

    if (redirect) {
        return <Navigate to='/about' />
    }


  return(
    <>
    <div className="title" >
          <h3>lemoncub</h3>
        </div>
    <div className="smallContainer" >
          <div className="homeContent">
            <div className="homeSub">
            </div>
            <div className="homeSub">
    
            </div>
            <div className="homeSub">
                
            </div >
            <div className="homeSub">
                
            </div>
          </div>
          <div className="imgContainer" >
          {/* <img className="back-img" src={logo} /> */}
          <div className="imgContainer2">
            <div className="btnContainer">
              <p className="help">follow the ...</p>
            <button className="welcomeButton3"></button>
            <button  onClick={() => {setRedirect(true)}} className="welcomeButton">...</button>
            <button className="welcomeButton2"></button>
            </div>
          </div>
          </div>
    </div>
    </>
  )
}

export default Home