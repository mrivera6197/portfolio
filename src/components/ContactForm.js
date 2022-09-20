import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import "../App.css"
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sn9aiph', 'template_ay4e8op', form.current, 'hR1-Bc4NvvTvKRGuf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return(
    <div className="photoPage">
    <div className="formPage">
      <div className="formContainer"> 
      <div className="formTitle">
      <h2>Say Hi Here</h2>
      </div>
      <form ref={form} onSubmit={sendEmail}>
      <div className="flex">
        <input type="text" name="name" placeholder="name" required></input>
        <input type="email" name="email" placeholder="email" required></input>
      </div>
      <div className="col">
      <input type="text" name="subject" placeholder="subject"></input>
      <textarea name="message" placeholder="" row="10"></textarea>
      <button className="contactButton" type="submit">send</button>
      </div>
      </form>
      <div className="nav3">

      </div>
      </div>
    </div> 
    </div>
  )
}

export default ContactForm 