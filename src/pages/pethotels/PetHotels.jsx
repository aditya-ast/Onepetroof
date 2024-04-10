import React from 'react'
import Footer from '../../components/footer/Footer'
import Hotelcards from '../../components/cards/Hotelcards'
import PetHotelstart from './PetHotelstart'

const PetHotels = () => {
  return (
    <div>
      <PetHotelstart/>
      <Hotelcards/>
      <Footer/>
    </div>
  )
}

export default PetHotels