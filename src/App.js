import React, { Component, useState, useEffect, Switch } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Photography from "./components/Photography";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Resume from "./components/Resume";
import Home from "./components/Home";
import BarLoader from "react-spinners/BarLoader";
import Film from "./components/Film"
import Interstellar from "./components/Interstellar"

function App() {
  const [loading, setloading] = useState(false)
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYoffset);

  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 2000)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div>
      {
        loading ? 
      <div className="fullApp">
      <BarLoader
          size={150}
          color={"#7ED321"}
          loading={loading}
          speedMultiplier={1}
        />
        </div>
        : 
        
    <Router>
      <div className="bigContainer"> 
      <nav className="nav2">
        <div className="flexEnd">
        <ul>
            <div className="subNav">
            <li>
            <Link className="link" to="/">Home</Link>
            </li>
            <li>
            <Link className="link" to="/about">Portal</Link>
            </li>
            </div>
            <div className="subNav">
            <li>
            <Link className="link" to="/photography">Gallery</Link>
            </li> 
            <li>
            <Link className="link" to="/interstellar">interstellar</Link>
            </li>
            <li>
            <Link className="link" to="/contact">Contact</Link>
            </li> 
            </div>
          </ul>

        </div>
        </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<ContactForm />}/>
        <Route path="/photography" element={<Photography />}/>
        <Route path="/resume" element={<Resume />}/> 
        <Route path="/interstellar" element={<Interstellar />}/>
      </Routes>
      </div>
    </Router>
        }
    </div>
  )
}
export default App