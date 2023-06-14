import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage'
import HomePage from '../pages/HomePage/HomePage'
import ContactPage from '../pages/ContactPage/ContactPage'
import PortfolioPage from '../pages/PortfolioPage/PortfolioPage'
import FaqPage from '../pages/FaqPage/FaqPage'

const Navigation = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about-us' element={<AboutUsPage/>} />
      <Route path='/portfolio' element={<PortfolioPage/>} />
      <Route path='/faq' element={<FaqPage/>} />
      <Route path='/contact' element={<ContactPage/>} />
    </Routes>
  )
}

export default Navigation