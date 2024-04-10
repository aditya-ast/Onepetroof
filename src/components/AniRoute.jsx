import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Services from '../pages/services/Services'
import Contact from '../pages/contact/Contact'
import AnimNGO from '../pages/animalNGO/AnimNGO'
import PetHotels from '../pages/pethotels/PetHotels'
import NGOcity from './common/NGOcity'
import Petlive from './common/Petlive'
import Blog from '../pages/blogs/Blog'

const AniRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/blogs' element={<Blog/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/ngo' element={<AnimNGO/>}/>
            <Route path='/hotels' element={ <PetHotels/>}/>
            <Route path='/cityngo' element={<NGOcity/>}/>
            <Route path='/cityhotels' element={ <Petlive/>}/>
        </Routes>

    </div>
  )
}

export default AniRoute