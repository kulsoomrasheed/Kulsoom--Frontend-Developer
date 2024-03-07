import React from 'react'
import Hero from '../Components/Hero'
import Intro from '../Components/Intro'
import Participate from '../Components/Participate'
import Token from '../Components/Token'
import Roadmap from '../Components/Roadmap'
import Faq from '../Components/Faq'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Intro/>
        <Participate/>
        <Token/>
        <Roadmap/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default Home

///https://saviour-task.netlify.app/