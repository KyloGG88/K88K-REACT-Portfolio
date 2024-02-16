import React from 'react';
import "./Contact.css";
import SocialMedia from '../components/SocialMedia/SocialMedia';

function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact-wrapper'>
        <h2>Get in Touch</h2>
        <p>I am available through my social media links below OR send me a message via the form below.</p>
        <div className='social-media'>
          <SocialMedia />
        </div>
      </div>
    </div>
  )
}

export default Contact