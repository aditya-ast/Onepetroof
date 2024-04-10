import React from 'react'
import Footer from '../../components/footer/Footer'
import NGOcards from '../../components/cards/NGOcards'
import AnimNGOstart from './AnimNGOstart'

const AnimNGO = () => {
  return (
    <div>
      <AnimNGOstart/>
      <NGOcards/>
      <Footer/>
    </div>
  )
}

export default AnimNGO