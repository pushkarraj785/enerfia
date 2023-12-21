import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='LEGACY OF CHAMPIONS' title='ENERGIA 2024' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non perspiciatis asperiores in veniam, assumenda suscipit fugiat ad et deserunt?</p>
            <div className='button'>
              <button className='primary-btn'>
                REGISTER NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW EVENT <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
