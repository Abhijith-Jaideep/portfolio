import React from 'react'
import About from '../About/About'
import Education from '../Education/Education'
import Intro from '../Intro/Intro'
import NavBar from '../NavBar/NavBar'
import SideBar from '../Sidebar/SideBar'
import Skills from '../Skills/Skills'
import "./app.css"

const App = () => {
  return (
    <div>
      <NavBar />
      <div className='main-container'>
        <SideBar />
        <div style={{marginTop:'5%'}}>
          <Intro />
          <About />
          <Education />
          <Skills/>
        </div>
      </div>
    </div>
  )
}

export default App