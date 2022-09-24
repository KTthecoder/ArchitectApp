import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage'
import HomePage from '../pages/HomePage/HomePage'

const Navigation = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about-us' element={<AboutUsPage/>} />
    </Routes>
  )
}

export default Navigation