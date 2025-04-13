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
            <p className='footer-paragraph'>Space Alpha is a learning platform dedicated to space enthusiastic students.
            Here, you can explore a wide range of topics related to space research, featuring information from space agencies around the world.</p>
          </div>
          <div className='footer-div1-el'>
            <h4 className='footer-headings'>DEVELOPER TEAM</h4> <br />
            <p className='fa'>&#xf0e0; space.alpha11@gmail.com</p>
            <p className='footer-paragraph'>Developer</p>
            <p className='footer-paragraph'><a href ="https://github.com/nirupam2602" rel="noreferrer" target="_blank">Nirupam Kumar</a></p>
          </div>
        </div>
        <span className='scl-head'>Our Social Media Handles </span>
        <div className="socialmedia-handles">
          <a href="/" className="fa fa-facebook"> </a>
          <a href="/" className="fa fa-twitter"> </a>
          <a href="/" className="fa fa-instagram"> </a>
          <a href="/" className="fa fa-youtube"> </a>
        </div>
        <p className='copyright-p'>&copy; space-alpha.in || All Right Reserved</p><br />
      </footer>
    </> 
  );
}