import React from 'react'
import '../PortfolioPage/PortfolioPage.css'
import img1 from '../../static/images/img1.webp'
import img2 from '../../static/images/img2.webp'
import img3 from '../../static/images/img3.webp'
import img5 from '../../static/images/img5.webp'
import { Link } from 'react-router-dom'

const PortfolioPage = () => {
  return (
    <div className='PortfolioContainer'>
        <div className='AboutUsHeader'>
            <h1>Potfolio</h1>
            <p>List of our completed projects</p>
        </div>
        <div className='PortfolioDivBig'>
            <div className='PortfolioDivBig1'>
                <img className='PortfolioDivBig1Img' src={img1} />
                <div className='PortfolioDivBig1Bot'>
                    <div className='PortfolioDivBig1Left'>
                        <h3>PROJECT</h3>
                        <h1>01. LOREM IPSUM DOLOR SIT AMET</h1>
                    </div>
                    <div className='PortfolioDivBig1Right'>
                        <p>Etiam vulputate mi faucibus finibus condimentum. Donec at dictum risus, ut bibendum eros.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='PortfolioDivSmall'>
            <div className='PortfolioDivSmall1'></div>
            <div className='PortfolioDivSmall2'>
                <div className='PortfolioDivSmall2Left'>
                    <h3>PROJECT</h3>
                    <h1>02. LOREM IPSUM DOLOR SIT AMET</h1>
                    <p>Etiam vulputate mi faucibus finibus condimentum. Donec at dictum risus, ut bibendum eros.</p>
                </div>
                <div className='PortfolioDivSmall2Right'>
                    <div className='PortfolioDivSmall2RightBtnDiv'>
                        <Link to='/' className='PortfolioDivSmall2RightBtn'>See More</Link>
                    </div>
                    <div className='PortfolioDivSmall2RightCategoryDiv'>
                        <h3>Category</h3>
                        <p>Living Room</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='PortfolioDivSmallR'>
            <div className='PortfolioDivSmall2'>
                <div className='PortfolioDivSmall2LeftR'>
                    <h3>PROJECT</h3>
                    <h1>03. LOREM IPSUM DOLOR SIT AMET</h1>
                    <p>Etiam vulputate mi faucibus finibus condimentum. Donec at dictum risus, ut bibendum eros.</p>
                </div>
                <div className='PortfolioDivSmall2RightR'>
                    <div className='PortfolioDivSmall2RightBtnDivR'>
                        <Link to='/' className='PortfolioDivSmall2RightBtnR'>See More</Link>
                    </div>
                    <div className='PortfolioDivSmall2RightCategoryDivR'>
                        <h3>Category</h3>
                        <p>Living Room</p>
                    </div>
                </div>
            </div>
            <div className='PortfolioDivSmall1'></div>
        </div>
        <div className='PortfolioDivSmall'>
            <div className='PortfolioDivSmall1'></div>
            <div className='PortfolioDivSmall2'>
                <div className='PortfolioDivSmall2Left'>
                    <h3>PROJECT</h3>
                    <h1>04. LOREM IPSUM DOLOR SIT AMET</h1>
                    <p>Etiam vulputate mi faucibus finibus condimentum. Donec at dictum risus, ut bibendum eros.</p>
                </div>
                <div className='PortfolioDivSmall2Right'>
                    <div className='PortfolioDivSmall2RightBtnDiv'>
                        <Link to='/' className='PortfolioDivSmall2RightBtn'>See More</Link>
                    </div>
                    <div className='PortfolioDivSmall2RightCategoryDiv'>
                        <h3>Category</h3>
                        <p>Living Room</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='PortfolioDivBig'>
            <div className='PortfolioDivBig1'>
                <img className='PortfolioDivBig1Img' src={img1} />
                <div className='PortfolioDivBig1Bot'>
                    <div className='PortfolioDivBig1Left'>
                        <h3>PROJECT</h3>
                        <h1>05. LOREM IPSUM DOLOR SIT AMET</h1>
                    </div>
                    <div className='PortfolioDivBig1Right'>
                        <p>Etiam vulputate mi faucibus finibus condimentum. Donec at dictum risus, ut bibendum eros.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='PortfolioDivSmallR'>
            <div className='PortfolioDivSmall2'>
                <div className='PortfolioDivSmall2LeftR'>
                    <h3>PROJECT</h3>
                    <h1>06. LOREM IPSUM DOLOR SIT AMET</h1>
                    <p>Etiam vulputate mi faucibus finibus condimentum. Donec at dictum risus, ut bibendum eros.</p>
                </div>
                <div className='PortfolioDivSmall2RightR'>
                    <div className='PortfolioDivSmall2RightBtnDivR'>
                        <Link to='/' className='PortfolioDivSmall2RightBtnR'>See More</Link>
                    </div>
                    <div className='PortfolioDivSmall2RightCategoryDivR'>
                        <h3>Category</h3>
                        <p>Living Room</p>
                    </div>
                </div>
            </div>
            <div className='PortfolioDivSmall1'></div>
        </div>
        <div className='PortfolioDivSmall'>
            <div className='PortfolioDivSmall1'></div>
            <div className='PortfolioDivSmall2'>
                <div className='PortfolioDivSmall2Left'>
                    <h3>PROJECT</h3>
                    <h1>07. LOREM IPSUM DOLOR SIT AMET</h1>
                    <p>Etiam vulputate mi faucibus finibus condimentum. Donec at dictum risus, ut bibendum eros.</p>
                </div>
                <div className='PortfolioDivSmall2Right'>
                    <div className='PortfolioDivSmall2RightBtnDiv'>
                        <Link to='/' className='PortfolioDivSmall2RightBtn'>See More</Link>
                    </div>
                    <div className='PortfolioDivSmall2RightCategoryDiv'>
                        <h3>Category</h3>
                        <p>Living Room</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='PortfolioDivSmallR'>
            <div className='PortfolioDivSmall2'>
                <div className='PortfolioDivSmall2LeftR'>
                    <h3>PROJECT</h3>
                    <h1>08. LOREM IPSUM DOLOR SIT AMET</h1>
                    <p>Etiam vulputate mi faucibus finibus condimentum. Donec at dictum risus, ut bibendum eros.</p>
                </div>
                <div className='PortfolioDivSmall2RightR'>
                    <div className='PortfolioDivSmall2RightBtnDivR'>
                        <Link to='/' className='PortfolioDivSmall2RightBtnR'>See More</Link>
                    </div>
                    <div className='PortfolioDivSmall2RightCategoryDivR'>
                        <h3>Category</h3>
                        <p>Living Room</p>
                    </div>
                </div>
            </div>
            <div className='PortfolioDivSmall1'></div>
        </div>
        <div className='PortfolioDivSmall'>
            <div className='PortfolioDivSmall1'></div>
            <div className='PortfolioDivSmall2'>
                <div className='PortfolioDivSmall2Left'>
                    <h3>PROJECT</h3>
                    <h1>09. LOREM IPSUM DOLOR SIT AMET</h1>
                    <p>Etiam vulputate mi faucibus finibus condimentum. Donec at dictum risus, ut bibendum eros.</p>
                </div>
                <div className='PortfolioDivSmall2Right'>
                    <div className='PortfolioDivSmall2RightBtnDiv'>
                        <Link to='/' className='PortfolioDivSmall2RightBtn'>See More</Link>
                    </div>
                    <div className='PortfolioDivSmall2RightCategoryDiv'>
                        <h3>Category</h3>
                        <p>Living Room</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PortfolioPage