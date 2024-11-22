import React from 'react'
import  './footer.css'



const Footer = () => {
  return (
    <>

    <footer>
        <div className="container padding">
            <div className="box logo">
                <h1>    ISIWARA             </h1>
                <span>  NURSING SCHOOL      </span>
                <p>     We are the premier nursing school in Sri Lanka, dedicated to engaging prospective students, supporting current ones, and showcasing the achievements and resources of our institution and faculty.</p>
              
            </div>
          

            <div className='box link'>
              <h3>Quick Links</h3>
              <ul>

              <li> <a href="#" onClick={() => window.scrollTo(0, 0)}>Home       </a></li>
              <li> <a href="/about">      About Us                              </a></li>
              <li> <a href="/courses">    All Courses                           </a></li>
              <li> <a href="/contact">    Contact                               </a></li>
              
              </ul>
            </div>

            <div className="box last">
                <h3>Reach Out Us</h3>
                <ul>
                    <li>    <i className='fa fa-map'>         </i>
                      138-B, Galle, Sri Lanka
                    </li>
                    <li>    <i className='fa fa-phone-alt'>   </i>
                      091 2569336
                    </li>
                    <li>    <i className='fa fa-paper-plane'>  </i>
                      isiwara@gmail.com
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    <div className='legal'>
        <p className="end">
          Copyright ©2024 All rights reserved
        </p>
    </div>
    </>
  )
}

export default Footer
