import React, { useState } from 'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();

  const [done,setDone] =useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7hx56ka', 'template_tppy2d4', form.current, 'iGJ2mgQS7muDdRbcY')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact-form' id='contact'>
      <div className='w-left'>
       <div className='awesome'>
       <span>Get in touch</span>
        <span>Contact me</span>
        <div className='blur s-blur1'
          style={{background: "#ABF1FF94"}}>
          </div>
       </div>
      </div>

      <div className='c-right'>
        <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='user-name' className='user' placeholder='Name' />
            <input type='email' name='user-email' className='user' placeholder='Email' />
            <textarea name='message' className='user' placeholder='Message' />
            <input style={{width: '140px'}} type='submit' value="Send" className='button' />
             <span>{done && "Thanks for contacting me!"}</span>
            <div className='blur s-blur1'
            style={{background: "var(purple)"}}>
          </div>

        </form>
      </div>

    </div>
  )
}

export default Contact
