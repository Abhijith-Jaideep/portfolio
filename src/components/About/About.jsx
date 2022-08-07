import React from 'react'
import pic from "./Profile.jpg"
import "./about.css"

const About = () => {
    return (
        <div className='main-container'>
            <div className='container'>
                <h2>About Me</h2>
                
                <p className='myimage'>

                    <div className='description'>
                        <p>
                            I am a Computer Science Engineering Student who is passionate and dedicated to learning
                            and honing my skills in Full Stack Web Development, During my journey of
                            learning this trade, I learnt how the web works,what constitutes
                            a good User Experience and broadened my horizons to learning new technologies.
                        </p>

                        <p style={{marginTop:'5%'}}>
                            I am currently pursuing my B.Tech from Adi Shankara Institute Of Engineering and
                            Technology ,Kerala
                        </p>
                    </div>

                    <div className='border'>
                        <img src={pic} alt="My profile" />
                    </div>

                </p>
            </div>
        </div>
    )
}

export default About