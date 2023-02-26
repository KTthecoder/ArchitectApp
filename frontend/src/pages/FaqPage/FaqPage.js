import React, { useState } from 'react'
import '../FaqPage/FaqPage.css'
import arrowBot from '../../static/icons/arrowBot.png'

const FaqPage = () => {
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
        <div className='FaqContainer'>
            <div className='AboutUsHeader'>
                <h1>FAQ</h1>
                <p>Frequently Asked Questions Section</p>
            </div>
            <br/><br/><br/><br/>
            <section className='HomeFaq'>
                <section className='HomeFaqDiv'>
                    <div className='HomeFaqBlock'>
                        <article className='HomeFaqBlockH2'>
                            <h2>01. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                            <img src={arrowBot} className='HomeFaqBlockIcon' onClick={() => FaqToggle1(faqS1)} />
                        </article>
                        <article className='HomeFaqBlockP' style={faqS1 ? {animationName: 'growDown'} : {animationName: 'growUp'}}>
                            <p>Donec porttitor, lectus vel rutrum vestibulum, enim eros fringilla dolor, accumsan hendrerit nisl justo ac ligula. Integer fringilla dolor lectus, quis posuere felis finibus nec. Praesent in purus viverra, pharetra ante quis, cursus erat. Integer et mauris ut dolor iaculis rutrum. Vestibulum ultrices neque in enim sollicitudin, ac imperdiet nisl dignissim. Pellentesque commodo dui vitae felis cursus dignissim. </p>
                        </article>
                        <article className='HomeFaqBlockH2'>
                            <h2>02. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                            <img src={arrowBot} className='HomeFaqBlockIcon' onClick={() => FaqToggle2(faqS2)} />
                        </article>
                        <article className='HomeFaqBlockP' style={faqS2 ? {animationName: 'growDown'} : {animationName: 'growUp'}}>
                            <p>Donec porttitor, lectus vel rutrum vestibulum, enim eros fringilla dolor, accumsan hendrerit nisl justo ac ligula. Integer fringilla dolor lectus, quis posuere felis finibus nec. Praesent in purus viverra, pharetra ante quis, cursus erat. Integer et mauris ut dolor iaculis rutrum. Vestibulum ultrices neque in enim sollicitudin, ac imperdiet nisl dignissim. Pellentesque commodo dui vitae felis cursus dignissim. </p>
                        </article>
                        <article className='HomeFaqBlockH2'>
                            <h2>03. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                            <img src={arrowBot} className='HomeFaqBlockIcon' onClick={() => FaqToggle3(faqS3)} />
                        </article>
                        <article className='HomeFaqBlockP' style={faqS3 ? {animationName: 'growDown'} : {animationName: 'growUp'}}>
                            <p>Donec porttitor, lectus vel rutrum vestibulum, enim eros fringilla dolor, accumsan hendrerit nisl justo ac ligula. Integer fringilla dolor lectus, quis posuere felis finibus nec. Praesent in purus viverra, pharetra ante quis, cursus erat. Integer et mauris ut dolor iaculis rutrum. Vestibulum ultrices neque in enim sollicitudin, ac imperdiet nisl dignissim. Pellentesque commodo dui vitae felis cursus dignissim. </p>
                        </article>
                        <article className='HomeFaqBlockH2'>
                            <h2>04. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                            <img src={arrowBot} className='HomeFaqBlockIcon' onClick={() => FaqToggle4(faqS4)} />
                        </article>
                        <article className='HomeFaqBlockP' style={faqS4 ? {animationName: 'growDown'} : {animationName: 'growUp'}}>
                            <p>Donec porttitor, lectus vel rutrum vestibulum, enim eros fringilla dolor, accumsan hendrerit nisl justo ac ligula. Integer fringilla dolor lectus, quis posuere felis finibus nec. Praesent in purus viverra, pharetra ante quis, cursus erat. Integer et mauris ut dolor iaculis rutrum. Vestibulum ultrices neque in enim sollicitudin, ac imperdiet nisl dignissim. Pellentesque commodo dui vitae felis cursus dignissim. </p>
                        </article>
                        <article className='HomeFaqBlockH2'>
                            <h2>05. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                            <img src={arrowBot} className='HomeFaqBlockIcon' onClick={() => FaqToggle5(faqS5)} />
                        </article>
                        <article className='HomeFaqBlockP' style={faqS5 ? {animationName: 'growDown'} : {animationName: 'growUp'}}>
                            <p>Donec porttitor, lectus vel rutrum vestibulum, enim eros fringilla dolor, accumsan hendrerit nisl justo ac ligula. Integer fringilla dolor lectus, quis posuere felis finibus nec. Praesent in purus viverra, pharetra ante quis, cursus erat. Integer et mauris ut dolor iaculis rutrum. Vestibulum ultrices neque in enim sollicitudin, ac imperdiet nisl dignissim. Pellentesque commodo dui vitae felis cursus dignissim. </p>
                        </article>
                        <article className='HomeFaqBlockH2'>
                            <h2>06. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                            <img src={arrowBot} className='HomeFaqBlockIcon' onClick={() => FaqToggle6(faqS6)} />
                        </article>
                        <article className='HomeFaqBlockP' style={faqS6 ? {animationName: 'growDown'} : {animationName: 'growUp'}}>
                            <p>Donec porttitor, lectus vel rutrum vestibulum, enim eros fringilla dolor, accumsan hendrerit nisl justo ac ligula. Integer fringilla dolor lectus, quis posuere felis finibus nec. Praesent in purus viverra, pharetra ante quis, cursus erat. Integer et mauris ut dolor iaculis rutrum. Vestibulum ultrices neque in enim sollicitudin, ac imperdiet nisl dignissim. Pellentesque commodo dui vitae felis cursus dignissim. </p>
                        </article>
                        <article className='HomeFaqBlockH2'>
                            <h2>07. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                            <img src={arrowBot} className='HomeFaqBlockIcon' onClick={() => FaqToggle7(faqS7)} />
                        </article>
                        <article className='HomeFaqBlockP' style={faqS7 ? {animationName: 'growDown'} : {animationName: 'growUp'}}>
                            <p>Donec porttitor, lectus vel rutrum vestibulum, enim eros fringilla dolor, accumsan hendrerit nisl justo ac ligula. Integer fringilla dolor lectus, quis posuere felis finibus nec. Praesent in purus viverra, pharetra ante quis, cursus erat. Integer et mauris ut dolor iaculis rutrum. Vestibulum ultrices neque in enim sollicitudin, ac imperdiet nisl dignissim. Pellentesque commodo dui vitae felis cursus dignissim. </p>
                        </article>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default FaqPage