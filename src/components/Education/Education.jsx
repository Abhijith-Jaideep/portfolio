import React from 'react'
import "./education.css"

const Education = () => {
  return (
    <div className='main-container'>
      <div className='container'>
        <h2>Education</h2>
        <table style={{marginTop:'2%'}}>
          <tr>
            <th>Course</th>
            <th>Branch/Subjects</th>
            <th>University/Board</th>
            <th>Name of the institution</th>
            <th>Year of passing</th>
            <th>Score</th>
          </tr>
          <tr>
            <td>B.Tech</td>
            <td>Computer Science and Engineering</td>
            <td>APJ Abdul Kalam Techonological University Kerala</td>
            <td>Adi Shankara Institute Of Engineering And Technology</td>
            <td>2023</td>
            <td>8.75 cgpa</td>
          </tr>
          <tr>
            <td>Higher Secondary Education (12th)</td>
            <td>Physics,Chemistry,Mathematics,English and Computer Science</td>
            <td>Central Board of Secondary Education(CBSE)</td>
            <td>Viswajyoti CMI Public School Angamaly </td>
            <td>2019</td>
            <td>74%</td>
          </tr>
          <tr>
            <td>Secondary Education (10th)</td>
            <td>Physics,Chemistry,Mathematics,English and General Subjects</td>
            <td>Central Board of Secondary Education(CBSE)</td>
            <td>New Al-Wurood International School,Jeddah,Kingdom of Saudi Arabia</td>
            <td>2017</td>
            <td>89.3%</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Education