import React, { useState } from 'react';
import Head from './Head';
import "./header.css";
import {Link} from "react-router-dom";

export const Header = () => {
  const[click, setClick] = useState(false)
  return (
    <>
        <Head/>
        <header>
          <nav className='flexSB'>
            <ul className= {click ? "mobile-nav" : "flexSB"} onClick = {() => setClick(false)}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">All Courses</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            
            <div className="start">
              
            </div>
            <button className='toggle' onClick={() => setClick(!click)}>
              {click ? <i className='fa fa-times'> </i> :<i className='fa fa-bars'> </i> }
            </button>
          </nav>
        </header>
    </>
  )
}

export default Header;
