import React from 'react'
import '../AboutUsPage/AboutUsPage.css'
import img1 from '../../static/images/img1.webp'
import img8 from '../../static/images/img8.webp'

const AboutUsePage = () => {
  return (
    <div className='AboutUsContainer'>
      <div className='AboutUsHeader'>
        <h1>About Us</h1>
        <p>Few important informations about us</p>
      </div>
      <div className='AboutUsMain'>
        <div className='AboutUsText'>
          <div className='AboutUsTextPDiv'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis lectus at neque elementum vestibulum. In hac habitasse platea dictumst. Nulla aliquam, nisi nec laoreet efficitur, quam enim feugiat est, consequat euismod turpis urna at leo. Nam convallis non urna et molestie. Nunc pretium ac velit in egestas. Vestibulum nec turpis orci. Praesent et risus vel enim commodo malesuada non ut quam. Nullam ipsum est, dignissim eu malesuada a, luctus vitae odio. Ut feugiat ante lacus, at finibus nunc condimentum eget.</p>
          </div>
          <img src={img1} className='AboutUsImg' alt='Spacejoy on Unsplash'/>
        </div>
        <div className='AboutUsBanner'></div>
        <div className='AboutUsText'>
          <img src={img8} className='AboutUsImg1' alt='Zdjęcie dodane przez Houzlook .com'/>
          {/* Zdjęcie dodane przez Houzlook .com: https://www.pexels.com/pl-pl/zdjecie/szary-stol-pod-lampy-wiszace-3356416/ */}
          <div className='AboutUsTextPDiv1'>
            <p>Duis pellentesque felis a ultricies ultrices. Etiam mollis semper sapien, consectetur tincidunt metus venenatis a. Nunc suscipit pulvinar est. Aenean dictum sapien hendrerit ligula imperdiet, et vestibulum risus ultrices. Ut ac leo consectetur nunc venenatis lobortis vel imperdiet sem. Donec sed interdum nisi, nec dignissim ante. Etiam consequat ligula vitae cursus cursus. Duis nec leo finibus, dignissim leo tempus, sagittis lorem. Curabitur non interdum dui. Morbi in metus condimentum, mattis dolor id, dignissim neque. Integer dapibus hendrerit condimentum. Sed sed erat sagittis, ornare sapien vitae, pharetra nulla.</p>
            <p>Sed id nunc ut arcu volutpat eleifend. Nam lacinia est aliquet elit mattis, id imperdiet velit accumsan. Vivamus mattis iaculis neque, ut pharetra neque semper suscipit.</p>
            <p>Pellentesque in eleifend nibh. Mauris in tincidunt nibh, sit amet ultricies nisl. Mauris sit amet egestas felis, non fringilla erat. Suspendisse eget dolor felis. Nulla facilisi. Praesent interdum quam nunc, nec varius arcu tempus vitae. Ut tincidunt, ligula non dictum suscipit, libero ipsum sagittis ex, non volutpat massa nunc et quam. Aenean ultrices tortor ac ligula volutpat ultrices.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsePage