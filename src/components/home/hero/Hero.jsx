import React from 'react'
import "./hero.css"
import Title from '../../common/title/Title'




const Hero = () => {
  return (
    <>
        <section className='hero'>
            <div className="container">
                <div className="row">
                    <Title subtitle="WELCOME TO ISIWARA NURSING SCHOOL" title="Best Nursing Education"/>
                    <p>Isiwara Nursing School, one of Sri Lanka's premier institutions, is renowned for its exceptional nursing courses.
                       With modern facilities, the school prepares students for successful careers in healthcare.
                      Graduates of Isiwara Nursing School are highly skilled and ready to excel in their profession.</p>    
                </div>
               

            </div>
        </section>
        <div className="margin"></div>
    </>
  )
}

export default Hero