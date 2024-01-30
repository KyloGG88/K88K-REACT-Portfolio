import React from 'react';
import Skills from '../components/Skills/Skills'
import "./Homepage.css"
import { NavLink } from 'react-router-dom'

function Homepage() {
  return (
    <div className='homepage-container'>
      <div className='hero-section'>
        <h1>KYLE C GOLIATH</h1>
      </div>
      <div className='brand-statement'>
        <h2>Welcome to my portfolio!!</h2>
        <p>I am an aspiring Junior Web Developer with a IT Support experience and a love for Graphics Design.</p>
        <p>Small splurb about me..</p>
      </div>
      <Skills />
      <div className='buttons-container'>
        <NavLink className='button' to='projects'>Projects</NavLink>
        <NavLink className='button' to='contact'>Contact</NavLink>
      </div>
    </div>
  )
}

export default Homepage