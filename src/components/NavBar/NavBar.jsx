import React from 'react'
import "./navbar.css"
import pic from "./Logo.png"

const NavBar = () => {
  return (
    <nav>
      <img src={pic} width='40' height='50' alt="logo"/>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Education</li>
        <li>Skills</li>
        <li>Projects</li>
        <button><a href="./Abhijith's Resume.pdf" download="Abhijith Jaideep.pdf"><i class="fa-solid fa-download" style={{color:'#0a192f'}}></i> RESUME</a></button>
      </ul>
    </nav>
  )
}

export default NavBar