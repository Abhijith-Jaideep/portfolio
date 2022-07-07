import React from 'react'
import "./sidebar.css"

const SideBar = () => {
  return (
    <div className='flexbox'>
        <a rel="noreferrer" href="https://www.linkedin.com/in/abhijith-jaideep-80301b193/" target="_blank"><i class="fa-brands fa-linkedin fa-2x"></i></a>
        <a rel='noreferrer' href="https://github.com/Abhijith-Jaideep" target="_blank"><i class="fa-brands fa-github-square fa-2x"></i></a>
        <a rel='noreferrer' href='mailto:abhijithjaideep176@gmail.com' target="_blank"><i class="fa-solid fa-square-envelope fa-2x"></i></a>
        <a rel="noreferrer" href="https://www.instagram.com/_abhijith_j/" target="_blank"><i class="fa-brands fa-instagram-square fa-2x"></i></a>
    </div>
  )
}

export default SideBar