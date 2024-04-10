import React from 'react'
import Testimonial from '../../components/common/Testimonial'
import Footer from '../../components/footer/Footer'
import Herosection from './Herosection'
import PageBlog from '../../components/blog/PageBlog'
import Heroabout from './Heroabout'
import Gallery from '../../components/gallery/Gallery'
import Calltoaction from '../../components/cta/Calltoaction'
import Servicesection from '../../components/service/Servicesection'

const Home = () => {
  return (
    <div className=''>
        <Herosection/>
        <Heroabout/>
        <Servicesection/>
        <Gallery/>
        <Calltoaction/>
        <PageBlog/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home