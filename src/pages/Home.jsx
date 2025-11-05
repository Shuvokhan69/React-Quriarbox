import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import Service from '../Components/Service/Service'
import Counter from '../Components/Counter/Counter'
import Video from '../Components/Video/Video'
import Testimonial from '../Components/Testimonial/Testimonial'
import Contact from '../Components/Contact/Contact'
import Location from '../Components/Location/Location'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
  <>
        <Navbar/>
        <Banner/>
        <Service/>
        <Counter/>
        <Video/>
        <Testimonial/>
        <Contact/>
        <Location/>
        <Footer/>
  </>
  )
}

export default Home