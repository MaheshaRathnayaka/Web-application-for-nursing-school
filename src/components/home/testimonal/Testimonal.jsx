import React from "react"
import { testimonal } from "../../../dummydata"
//import Heading from "../../common/heading/Heading"
import "./style.css"
import Title from "../../common/title/Title"

const Testimonal = () => {
  return (
    <>
      <section className='testimonal padding'>
        <div className='container'>

          
          <Title  title='Our Successful Students' />

          <div className='content grid2'>
            {testimonal.map((val)=>(
              <div className='items shadow'>
                <div className='box1 flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonal