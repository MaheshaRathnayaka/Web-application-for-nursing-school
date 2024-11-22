import React from 'react'
import { homeAbout } from "../../dummydata"
import "./about.css"
import Title from '../common/title/Title'

const AboutCard = () => {
  return (
    <>
        <section className='aboutHome'>
            <div className="container flexSB">
                <div className="left row">
                    <img src="./images/home.jpg" alt=""/>
                </div>

                <div className="right row">
                <Title  title ="Benefits About Learning with us."/>    
                    <div className="items">
                        {homeAbout.map((val) =>{
                        return (
                    
                        <div className="item flexSB">

                            <div className="img">
                                <img src={val.cover} alt=""/>
                            </div>

                            <div className="text">
                                <h2>{val.title}</h2>
                                <p>{val.desc}</p>
                            </div>
                        </div>
                        )
                        })}
                    </div>
                </div>
            </div>
            
            <div className="vision-and-mission-container">
                <div className="vision-box">
                    <h2>Our Vission</h2>
                    <p>Our vision is to Empowering Future Nurses with Striving for Excellence in Compassionate Care, Clinical Expertise, and Lifelong Learning. Dedicated to Advocacy, Innovation, and Impactful Healthcare Delivery</p>
                </div>
      
                <div className="mission-box">
                    <h2>Our Mission</h2>
                    <p>Our mission is to Educating and Nurturing Future Nurses to Excel in Compassionate Care, Evidence-Based Practice, and Interdisciplinary Collaboration. Fostering a Culture of Lifelong Learning, Advocacy, and Innovation to Transform Healthcare Delivery and Enhance Patient Lives</p>
                </div>
            </div>

        </section>
       
    </>
  )
}

export default AboutCard