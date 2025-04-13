import React from 'react'
import '../styles/Footer.css'
export default function Footer() {
  return (
    <>   
      <footer className='web-footer'>
        <div className='footer-div-1'>
          <div className='footer-div1-el'>
            <h4 className='footer-headings'>Space-Alpha</h4> <br />
            <p className='footer-paragraph'>High impact blog posts and Informations <br />
              Virtually connect with Universe in our events <br />
              Join a helpful community of Space-Alpha</p>
          </div>
          <div className='footer-div1-el'>
            <h4 className='footer-headings'>ABOUT</h4> <br />
            <p className='footer-paragraph'>Space-Alpha is a learning platform
              Here you can learn Cosmology & research
              We provide latest information about sapce
              Also we update information with time
              All informations are collected from NASA</p>
          </div>
          <div className='footer-div1-el'>
            <h4 className='footer-headings'>DEVELOPER TEAM</h4> <br />
            <p className='fa'>&#xf0e0; space.alpha@gmail.com</p>
            <p className='footer-paragraph'>Developer</p>
          </div>
        </div>
        <span className='scl-head'>Our Social Media Handles </span>
        <div className="socialmedia-handles">
          <a href="/" className="fa fa-facebook"> </a>
          <a href="/" className="fa fa-twitter"> </a>
          <a href="/" className="fa fa-instagram"> </a>
          <a href="/" className="fa fa-youtube"> </a>
        </div>
        <p className='copyright-p'>&copy; space-alpha2602.netlify.app/ || All Right Reserved</p><br />
      </footer>
    </> 
  );
}