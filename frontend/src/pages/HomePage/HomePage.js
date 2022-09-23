import React, { useState } from 'react'
import '../HomePage/HomePage.css'
import { Link } from 'react-router-dom'
import img1 from '../../static/images/img1.jpg'
import img2 from '../../static/images/img2.jpg'
import img3 from '../../static/images/img3.jpg'
import img5 from '../../static/images/img5.jpg'
import img6 from '../../static/images/img6.jpg'
import img7 from '../../static/images/img7.jpg'
import arrowBot from '../../static/icons/arrowBot.png'

const HomePage = () => {
    const [faqS1, setFaqS1] = useState(true)
    const [faqS2, setFaqS2] = useState(false)
    const [faqS3, setFaqS3] = useState(false)
    const [faqS4, setFaqS4] = useState(false)
    const [faqS5, setFaqS5] = useState(false)
    const [faqS6, setFaqS6] = useState(false)
    const [faqS7, setFaqS7] = useState(false)

    const FaqToggle1 = (value) => {
        if (value === false){
            setFaqS1(true)
        }
        else{
            setFaqS1(false)
        }
    }

    const FaqToggle2 = (value) => {
        if (value === false){
            setFaqS2(true)
        }
        else{
            setFaqS2(false)
        }
    }

    const FaqToggle3 = (value) => {
        if (value === false){
            setFaqS3(true)
        }
        else{
            setFaqS3(false)
        }
    }

    const FaqToggle4 = (value) => {
        if (value === false){
            setFaqS4(true)
        }
        else{
            setFaqS4(false)
        }
    }

    const FaqToggle5 = (value) => {
        if (value === false){
            setFaqS5(true)
        }
        else{
            setFaqS5(false)
        }
    }

    const FaqToggle6 = (value) => {
        if (value === false){
            setFaqS6(true)
        }
        else{
            setFaqS6(false)
        }
    }

    const FaqToggle7 = (value) => {
        if (value === false){
            setFaqS7(true)
        }
        else{
            setFaqS7(false)
        }
    }

    return (
        <div className='HomeContainer'>
            <div className='HomeHeader'>
                <div className='HomeHeaderTop'>
                    <h1>ARCHITECTURAL MODERN SOLUTIONS</h1>
                </div>
                <div className='HomeHeaderBottom'>
                    <Link to='/' className='HomeAboutRightLink'>CONTACT US</Link>
                    <p>HOME DESIGN SINCE 2012</p>
                </div>
            </div>
            <div className='HomeHeaderImgDiv'>
                <img src={img1} className='HomeHeaderImg' />
                {/* Photo by <a href="https://unsplash.com/@spacejoy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Spacejoy</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
            </div>
            <div className='HomeAbout'>
                <div className='HomeAboutLeft'>
                    <h1 className='HomeH1'>About Our Work</h1>
                </div>  
                <div className='HomeAboutRight'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor, lectus vel rutrum vestibulum, enim eros fringilla dolor, accumsan hendrerit nisl justo ac ligula. Integer fringilla dolor lectus, quis posuere felis finibus nec. Praesent in purus viverra, pharetra ante quis, cursus erat. Integer et mauris ut dolor iaculis rutrum. Vestibulum ultrices neque in enim sollicitudin, ac imperdiet nisl...</p>
                    <div className='HomeAboutRightLinkDiv'>
                        <Link to='/' className='HomeAboutRightLink'>READ MORE</Link>
                    </div>       
                </div>
            </div>
            <div className='HomePortfolio'>
                <div className='HomePortfolioHeader'>
                    <h1 className='HomePortfolioH1'>Selected Designs</h1>
                </div>
                <div className='HomePortfolioDiv'>
                    <div className='HomePortfolioBlock'>
                        <img src={img1} className='HomePortfolioImg' />
                        {/* Photo by <a href="https://unsplash.com/@spacejoy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Spacejoy</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
                        <div className='HomePortfolioBlock1'>
                            <h1>01.</h1>
                        </div>
                        <div className='HomePortolioHover'>
                            <div className='HomePortfolioHoverTop'>
                                <p>Project name</p>
                                <h1>Sed dignissim neque at ex vehicula facilisis.</h1>
                            </div>
                            <div className='HomePortfolioHoverBottom'>
                                <Link to='/' className='HomePortfolioHoverBottomLink'>See Project</Link>
                            </div>
                        </div>
                    </div>
                    <div className='HomePortfolioBlock'>
                        <img src={img2} className='HomePortfolioImg' />
                        {/* Photo by <a href="https://unsplash.com/@sidekix?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sidekix Media</a> on <a href="https://unsplash.com/s/photos/interior-design?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
                        <div className='HomePortfolioBlock1'>
                            <h1>02.</h1>
                        </div>
                        <div className='HomePortolioHover'>
                            <div className='HomePortfolioHoverTop'>
                                <p>Project name</p>
                                <h1>Sed dignissim neque at ex vehicula facilisis.</h1>
                            </div>
                            <div className='HomePortfolioHoverBottom'>
                                <Link to='/' className='HomePortfolioHoverBottomLink'>See Project</Link>
                            </div>
                        </div>
                    </div>
                    <div className='HomePortfolioBlock'>
                        <img src={img3} className='HomePortfolioImg' />
                        {/* Photo by <a href="https://unsplash.com/@iwood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">刘 强</a> on <a href="https://unsplash.com/s/photos/interior-design?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
                        <div className='HomePortfolioBlock1'>
                            <h1>03.</h1>
                        </div>
                        <div className='HomePortolioHover'>
                            <div className='HomePortfolioHoverTop'>
                                <p>Project name</p>
                                <h1>Sed dignissim neque at ex vehicula facilisis.</h1>
                            </div>
                            <div className='HomePortfolioHoverBottom'>
                                <Link to='/' className='HomePortfolioHoverBottomLink'>See Project</Link>
                            </div>
                        </div>
                    </div>           
                    <div className='HomePortfolioBlock'>
                        <img src={img5} className='HomePortfolioImg' />
                        {/* Zdjęcie dodane przez Victoria Akvarel : https://www.pexels.com/pl-pl/zdjecie/sofa-krzesla-w-salonie-1648776/ */}
                        <div className='HomePortfolioBlock1'>
                            <h1>04.</h1>
                        </div>
                        <div className='HomePortolioHover'>
                            <div className='HomePortfolioHoverTop'>
                                <p>Project name</p>
                                <h1>Sed dignissim neque at ex vehicula facilisis.</h1>
                            </div>
                            <div className='HomePortfolioHoverBottom'>
                                <Link to='/' className='HomePortfolioHoverBottomLink'>See Project</Link>
                            </div>
                        </div>
                    </div>
                    <div className='HomePortfolioBlock'>
                        <img src={img7} className='HomePortfolioImg' />
                        {/* Zdjęcie dodane przez Vecislavas Popa: https://www.pexels.com/pl-pl/zdjecie/wlaczony-inteligentny-telewizor-z-plaskim-ekranem-w-kolorze-szarym-1571459/ */}
                        <div className='HomePortfolioBlock1'>
                            <h1>05.</h1>
                        </div>
                        <div className='HomePortolioHover'>
                            <div className='HomePortfolioHoverTop'>
                                <p>Project name</p>
                                <h1>Sed dignissim neque at ex vehicula facilisis.</h1>
                            </div>
                            <div className='HomePortfolioHoverBottom'>
                                <Link to='/' className='HomePortfolioHoverBottomLink'>See Project</Link>
                            </div>
                        </div>
                    </div>
                    <div className='HomePortfolioBlock'>
                        <img src={img6} className='HomePortfolioImg' />
                        {/* Zdjęcie dodane przez Pixabay: https://www.pexels.com/pl-pl/zdjecie/sofa-narozna-z-brazowej-tkaniny-275484/ */}
                        <div className='HomePortfolioBlock1'>
                            <h1>06.</h1>
                        </div>
                        <div className='HomePortolioHover'>
                            <div className='HomePortfolioHoverTop'>
                                <p>Project name</p>
                                <h1>Sed dignissim neque at ex vehicula facilisis.</h1>
                            </div>
                            <div className='HomePortfolioHoverBottom'>
                                <Link to='/' className='HomePortfolioHoverBottomLink'>See Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='HomePortfolioBottom'>
                    <div className='HomePortfolioBottomText'>
                        <h2>Our Projects</h2>
                        <p>Sed dignissim neque at ex vehicula facilisis. Proin metus ex, iaculis sit amet nulla quis, mattis tempus enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce quis tellus id lorem ultrices suscipit luctus ut sapien. Ut in iaculis neque. Suspendisse varius ipsum non metus laoreet, sed cursus est eleifend.</p>
                    </div>
                    <div className='HomePortfolioBottomBtnDiv'>
                        <Link to='/' className='HomePortfolioBottomBtn'>SEE MORE PROJECTS</Link>
                    </div>
                </div>
            </div>
            <div className='HomeFaq'>
                <div className='HomeFaqHeader'>
                    <h1 className='HomeFaqH1'>FAQ Section</h1>
                </div>
                <div className='HomeFaqDiv'>
                    <div className='HomeFaqBlock'>
                        <div className='HomeFaqBlockH2'>
                            <h2>01. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                            <img src={arrowBot} className='HomeFaqBlockIcon' onClick={() => FaqToggle1(faqS1)} />
                        </div>
                        <div className='HomeFaqBlockP' style={faqS1 ? {display: 'flex'} : {display: 'none'}}>
                            <p>Donec porttitor, lectus vel rutrum vestibulum, enim eros fringilla dolor, accumsan hendrerit nisl justo ac ligula. Integer fringilla dolor lectus, quis posuere felis finibus nec. Praesent in purus viverra, pharetra ante quis, cursus erat. Integer et mauris ut dolor iaculis rutrum. Vestibulum ultrices neque in enim sollicitudin, ac imperdiet nisl dignissim. Pellentesque commodo dui vitae felis cursus dignissim. </p>
                        </div>
                        <div className='HomeFaqBlockH2'>
                            <h2>02. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                            <img src={arrowBot} className='HomeFaqBlockIcon' onClick={() => FaqToggle2(faqS2)} />
                        </div>
                        <div className='HomeFaqBlockP' style={faqS2 ? {display: 'flex'} : {display: 'none'}}>
                            <p>Donec porttitor, lectus vel rutrum vestibulum, enim eros fringilla dolor, accumsan hendrerit nisl justo ac ligula. Integer fringilla dolor lectus, quis posuere felis finibus nec. Praesent in purus viverra, pharetra ante quis, cursus erat. Integer et mauris ut dolor iaculis rutrum. Vestibulum ultrices neque in enim sollicitudin, ac imperdiet nisl dignissim. Pellentesque commodo dui vitae felis cursus dignissim. </p>
                        </div>
                        <div className='HomeFaqBlockH2'>
                            <h2>03. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                            <img src={arrowBot} className='HomeFaqBlockIcon' onClick={() => FaqToggle3(faqS3)} />
                        </div>
                        <div className='HomeFaqBlockP' style={faqS3 ? {display: 'flex'} : {display: 'none'}}>
                            <p>Donec porttitor, lectus vel rutrum vestibulum, enim eros fringilla dolor, accumsan hendrerit nisl justo ac ligula. Integer fringilla dolor lectus, quis posuere felis finibus nec. Praesent in purus viverra, pharetra ante quis, cursus erat. Integer et mauris ut dolor iaculis rutrum. Vestibulum ultrices neque in enim sollicitudin, ac imperdiet nisl dignissim. Pellentesque commodo dui vitae felis cursus dignissim. </p>
                        </div>
                        <div className='HomeFaqBlockH2'>
                            <h2>04. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                            <img src={arrowBot} className='HomeFaqBlockIcon' onClick={() => FaqToggle4(faqS4)} />
                        </div>
                        <div className='HomeFaqBlockP' style={faqS4 ? {display: 'flex'} : {display: 'none'}}>
                            <p>Donec porttitor, lectus vel rutrum vestibulum, enim eros fringilla dolor, accumsan hendrerit nisl justo ac ligula. Integer fringilla dolor lectus, quis posuere felis finibus nec. Praesent in purus viverra, pharetra ante quis, cursus erat. Integer et mauris ut dolor iaculis rutrum. Vestibulum ultrices neque in enim sollicitudin, ac imperdiet nisl dignissim. Pellentesque commodo dui vitae felis cursus dignissim. </p>
                        </div>
                        <div className='HomeFaqBlockH2'>
                            <h2>05. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                            <img src={arrowBot} className='HomeFaqBlockIcon' onClick={() => FaqToggle5(faqS5)} />
                        </div>
                        <div className='HomeFaqBlockP' style={faqS5 ? {display: 'flex'} : {display: 'none'}}>
                            <p>Donec porttitor, lectus vel rutrum vestibulum, enim eros fringilla dolor, accumsan hendrerit nisl justo ac ligula. Integer fringilla dolor lectus, quis posuere felis finibus nec. Praesent in purus viverra, pharetra ante quis, cursus erat. Integer et mauris ut dolor iaculis rutrum. Vestibulum ultrices neque in enim sollicitudin, ac imperdiet nisl dignissim. Pellentesque commodo dui vitae felis cursus dignissim. </p>
                        </div>
                        <div className='HomeFaqBlockH2'>
                            <h2>06. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                            <img src={arrowBot} className='HomeFaqBlockIcon' onClick={() => FaqToggle6(faqS6)} />
                        </div>
                        <div className='HomeFaqBlockP' style={faqS6 ? {display: 'flex'} : {display: 'none'}}>
                            <p>Donec porttitor, lectus vel rutrum vestibulum, enim eros fringilla dolor, accumsan hendrerit nisl justo ac ligula. Integer fringilla dolor lectus, quis posuere felis finibus nec. Praesent in purus viverra, pharetra ante quis, cursus erat. Integer et mauris ut dolor iaculis rutrum. Vestibulum ultrices neque in enim sollicitudin, ac imperdiet nisl dignissim. Pellentesque commodo dui vitae felis cursus dignissim. </p>
                        </div>
                        <div className='HomeFaqBlockH2'>
                            <h2>07. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                            <img src={arrowBot} className='HomeFaqBlockIcon' onClick={() => FaqToggle7(faqS7)} />
                        </div>
                        <div className='HomeFaqBlockP' style={faqS7 ? {display: 'flex'} : {display: 'none'}}>
                            <p>Donec porttitor, lectus vel rutrum vestibulum, enim eros fringilla dolor, accumsan hendrerit nisl justo ac ligula. Integer fringilla dolor lectus, quis posuere felis finibus nec. Praesent in purus viverra, pharetra ante quis, cursus erat. Integer et mauris ut dolor iaculis rutrum. Vestibulum ultrices neque in enim sollicitudin, ac imperdiet nisl dignissim. Pellentesque commodo dui vitae felis cursus dignissim. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage