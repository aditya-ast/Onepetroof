import React from 'react'
import ContactForm from './ContactForm'
import ContactStart from './ContactStart'
import ContactDetails from './ContactDetails'
import Footer from '../../components/footer/Footer'

const Contact = () => {
  return (
    <div>
        <ContactStart/>
        <ContactForm/>
        <ContactDetails/>
        <Footer/>
    </div>
  )
}

export default Contact