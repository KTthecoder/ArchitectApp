import React from 'react'
import '../footer/Footer.css'
import { Link } from 'react-router-dom'
import instaIcon from '../../static/icons/insta.png'
import fbIcon from '../../static/icons/fb.png'
import ttIcon from '../../static/icons/tt.png'
import twIcon from '../../static/icons/tw.png'

const Footer = () => {
  return (
    <div className='FooterContainer'>
        <div className='FooterDiv'>
            <div className='FooterDivBlock'>
                <h2>Links</h2>
                <Link to='/' className='FooterDivBlockLink'>Home</Link>
                <Link to='/about-us' className='FooterDivBlockLink'>About Us</Link>
                <Link to='/offer' className='FooterDivBlockLink1'>Offer</Link>
                <a href='https://unsplash.com/' className='FooterDivBlockLink1'>Images</a>
                <a href='https://pixabay.com/pl/' className='FooterDivBlockLink1'>Images</a>
            </div>
            <div className='FooterDivBlock'>
                <h2>Links</h2>
                <Link to='/portfolio' className='FooterDivBlockLink'>Portfolio</Link>
                <Link to='/faq' className='FooterDivBlockLink'>Faq</Link>
                <Link to='/contact' className='FooterDivBlockLink1'>Contact</Link>
                <a href='https://www.pexels.com/pl-pl/' className='FooterDivBlockLink1'>Images</a>
            </div>
        </div>
        <div className='FooterDiv'>
            <div className='FooterDivBlock1'>
                <h2>Socials</h2>
                <div className='FooterDivBlockk'>
                    <img src={instaIcon} className='FooterDivBlockIcon'/>
                    {/* <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by Prosymbols Premium - Flaticon</a> */}
                    <img src={fbIcon} className='FooterDivBlockIcon'/>
                    {/* <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">Facebook icons created by Freepik - Flaticon</a> */}
                    <img src={ttIcon} className='FooterDivBlockIcon'/>
                    {/* <a href="https://www.flaticon.com/free-icons/tiktok" title="tiktok icons">Tiktok icons created by Freepik - Flaticon</a> */}
                    <img src={twIcon} className='FooterDivBlockIcon'/>
                    {/* <a href="https://www.flaticon.com/free-icons/twitter" title="twitter icons">Twitter icons created by Pixel perfect - Flaticon</a> */}
                </div>
                
            </div>
        </div>
        <div className='FooterDivBig'>
            <p>2022 &copy; Website created by Ksawery Tkaczyk</p>
        </div>
    </div>
  )
}

export default Footer