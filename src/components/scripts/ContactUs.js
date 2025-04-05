import React from 'react';
import '../styles/Contact.css';

export default function ContactUs() {
  return (
    <div className="container-contact">
      <div className="card-container">
        <div className="doc-cards">
          <i className="fa fa-map-marker"></i>
          <h4>Location</h4>
          <p>Bhopal, Madhya Pradesh</p>
        </div>
        <div className="doc-cards">
          <i className="fa fa-phone"></i>
          <h4>Phone</h4>
          <p>+91123456789</p>
        </div>
        <div className="doc-cards">
          <i className="fa fa-telegram"></i>
          <h4>Telegram</h4>
          <p>@space-α</p>
        </div>
        <div className="doc-cards">
          <i className="fa fa-envelope"></i>
          <h4>Email</h4>
          <p>space@α.in</p>
        </div>
      </div>
      <div className="form-container">
        <div className="form">
          <form action="https://api.web3forms.com/submit" className='contact-form' method="POST">
            <input type="hidden" name="access_key" value="3e486d90-dbda-4e7b-a421-cf50012e8304"/>
            <input type="email" placeholder="Your Email" name ="Email Id"/>
            <input type="text" placeholder="Your Full Name" name="Full Name" />
            <textarea
              name="Message"
              placeholder="Enter Your Remarks"></textarea>
              <button type="submit"> Submit</button>
          </form>
        </div>
        <div className="about">
          <h1>Get in Touch🤌</h1>
          <p>
          Space Alpha is an innovative learning platform dedicated to exploring
            the vast field of cosmology and space research. Designed for
            enthusiasts and learners alike, the platform offers up-to-date,
            reliable information about the universe, space missions, and
            cutting-edge research, all sourced directly from NASA. Whether
            you're passionate about the mysteries of the universe or a student
            seeking a deeper understanding of space science, Space Alpha serves as
            a reliable resource to fuel your curiosity and expand your
            knowledge. 
          </p> 
        </div>
      </div>
    </div>
  );
}
