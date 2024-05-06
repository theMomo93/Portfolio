import Footer from '@/components/Footer'
import React from 'react'
import { PiMicrophoneSlashFill } from "react-icons/pi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { LiaGithubSquare } from "react-icons/lia";
import { CiLinkedin } from "react-icons/ci";
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
export default function Contact() {
 

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      });
    };
  }, []); // Empty dependency array en


  return (
    <div>
        <div >
          <Navbar/>
        <div className="container">
      <span className="big-circle"></span>
      <Image src="img/shape.png" class="square" alt="a round shape" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let us get in touch</h3>
          <p className="text">
            If you are interested contact me through this page, catch me on whats app or email me!  
          </p>

          <div className="info">
            <div className="information">
              <i className="text-xl"><FaRegAddressCard /> 
</i> 

              <p> 04319 Leipzig </p>
            </div>
            <div className="information">
              <i className="text-xl"><MdOutlineAlternateEmail />
</i>
              <p> mkaminska93@gmail.com </p>
            </div>
            <div className="information">
              <i className='text-xl' ><PiMicrophoneSlashFill /></i>
              <p> +49 178 30 90 202 </p>
            </div>
          </div>

          <div className="social-media">
            <p className='font-semibold'>Connect with me :</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/mknika21/">
                <i className='text-4xl text-black' ><CiInstagram/> </i>
              </a>
              <a href="https://github.com/theMomo93">
                <i className='text-4xl text-black'><LiaGithubSquare/></i>
              </a>
              <a href="https://www.linkedin.com/in/monikagenedl/">
                <i className='text-4xl text-black'><CiLinkedin/></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="mailto:mkaminska93@gmail.com?subject=Portfolio Monika Genedl" method="POST" encType="text/plain"  autoComplete="off">
            <h3 className="title">Contact me!</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" />
              <label htmlFor="">Full Name</label>
              <span>Full Name</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" class="input" />
              <label htmlFor="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" class="input"></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send"  className="btn" />
          </form>
        </div>
      </div>
    </div>
        </div>
        <Footer/>
    </div>
  )
}
