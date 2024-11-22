import React from 'react'
import './contact.css'
import Back from '../common/back/Back'

const contact = () => {
    const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63480.83754039442!2d80.17079687775808!3d6.055975350635329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173bb6932fce3%3A0x4a35b903f9c64c03!2sGalle!5e0!3m2!1sen!2slk!4v1709534036849!5m2!1sen!2slk", width="600" ,height="450", style="border:0;", allowfullscreen="", loading="lazy" ,referrerpolicy="no-referrer-when-downgrade"
  return (
    <div>
        <Back title ="Contact Us"/>
        <section className='contact padding'>
            <div className='container shadow flexSB'>
                <div className='left row'>
                    <iframe src={map}> </iframe>
                </div>
                <div className='right row'>
                    <h1>Contact Us</h1>
                    <p> Feel free to reach out with any suggestions or just for a casual chat. </p>

                    <div className='items grid2'>
                        <div className='box'>
                            <h4> ADDRESS : </h4>
                                <p>138-B, Galle, Sri Lanka</p>
                        </div>
                        <div className='box'> 
                           <h4>Email : </h4>

                                <p>isiwara@gmail.com</p>
                        </div>

                        <div className='box'> 
                           <h4>PHONE : </h4>
                                <p> 091 2569336</p>
                        </div>

                    </div>
  
                </div>

            </div>
        
        </section>
    </div>
  )
}

export default contact

