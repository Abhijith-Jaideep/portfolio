import React from 'react'
import "./skill.css"

const Skills = () => {
    return (
        <div className='main-container'>
            <div className='container'>
                <h2>Skills</h2>
                <div className='skill'>
                    <li>C Language <i class="fa-solid fa-c"></i></li>
                    <li>Python <i class="fa-brands fa-python"></i></li>
                    <li>MongoDB <i class="fa-solid fa-database"></i></li>
                    <li>Express js <i class="fa-solid fa-e"></i><i class="fa-solid fa-xmark"></i></li>
                    <li>React js <i class="fa-brands fa-react"></i></li>
                    <li>Node js <i class="fa-brands fa-node-js"></i></li>
                    <li>SQL<i class="fa-brands fa-database"></i></li>
                    <li>Java <i class="fa-solid fa-square-j"></i></li>
                </div>
            </div>
        </div>
    )
}

export default Skills