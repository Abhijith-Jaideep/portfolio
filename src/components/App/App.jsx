import React from 'react'
import About from '../About/About'
import Education from '../Education/Education'
import Intro from '../Intro/Intro'
import NavBar from '../NavBar/NavBar'
import "./app.css"

const App = () => {
  return (
    <div>
        <NavBar/>
        <Intro/>
        <About/>
        <Education/>
    </div>
  )
}

export default App