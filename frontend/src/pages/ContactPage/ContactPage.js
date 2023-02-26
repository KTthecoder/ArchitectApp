import React from 'react'
import '../ContactPage/ContactPage.css'
import { Link } from 'react-router-dom'
import mailIcon from '../../static/icons/mail.png'
import callIcon from '../../static/icons/call.png'

const ContactPage = () => {
  return (
    <div className='ContactContainer'>
       <div className='AboutUsHeader'>
        <h1>Contact</h1>
        <p>Let's find solution together</p>
      </div>
      <div className='AboutUsMain1'>
        <div className='AboutUsMain1S'>
          <div className='AboutUsMain1Map'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.635602237259!2d21.001515698621283!3d52.23183791522852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c92692e49%3A0xc2e97ae5311f2dc2!2sPa%C5%82ac%20Kultury%20i%20Nauki!5e0!3m2!1spl!2spl!4v1664053983226!5m2!1spl!2spl" width="100%" height="100%" style={{border: '2px solid #615C4A', padding: '1px'}}></iframe>
          </div>
          <div className='AboutUsMain1Text'>
              <h2 className='AboutUsSocialsH2'>Find Us</h2>
              <p>Aleje Jerozolimskie 23</p>
              <p>03-213 Warszawa</p>
              <p>Polska</p>
          </div>
        </div>
      </div>
      <div className='AboutUsMain'>
        <div className='AboutUsSocialsDiv'>
          <div className='AboutUsSocialsLeft'>
              <h2 className='AboutUsSocialsH2'>Socials</h2>
              <Link to='/' className='AboutUsSocialsLeftLink'>Instagram</Link>
              <Link to='/' className='AboutUsSocialsLeftLink'>Facebook</Link>
              <Link to='/' className='AboutUsSocialsLeftLink'>TokTok</Link>
              <Link to='/' className='AboutUsSocialsLeftLink'>Twitter</Link>
          </div>
          <div className='AboutUsSocialsRight'>
              <h2 className='AboutUsSocialsH2'>Get In Touch</h2>
              <div className='AboutUsSocialsBlock'>
                <img src={mailIcon} className='AboutUsSocialsIcon' />
                {/* <a href="https://www.flaticon.com/free-icons/mail" title="mail icons">Mail icons created by Freepik - Flaticon</a> */}
                <p>contact@interart.com</p>
              </div>
              <div className='AboutUsSocialsBlock'>
                <img src={mailIcon} className='AboutUsSocialsIcon' />
                {/* <a href="https://www.flaticon.com/free-icons/mail" title="mail icons">Mail icons created by Freepik - Flaticon</a> */}
                <p>info@interart.com</p>
              </div>
              <div className='AboutUsSocialsBlock'>
                <img src={callIcon} className='AboutUsSocialsIcon' />
                {/* <a href="https://www.flaticon.com/free-icons/phone" title="phone icons">Phone icons created by Freepik - Flaticon</a> */}
                <p>+48 785 843 901</p>
              </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ContactPage