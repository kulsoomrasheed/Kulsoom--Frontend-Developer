import React from 'react'
import Hero from '../Components/Hero'
import Intro from '../Components/Intro'
import Participate from '../Components/Participate'
import Token from '../Components/Token'
import Roadmap from '../Components/Roadmap'
import Faq from '../Components/Faq'
import Footer from '../Components/Footer'
import Hambg from '../Components/Hambg'
import HeroSmall from '../Components/HeroSmall'
import {Box} from '@chakra-ui/react'
const Home = () => {
  return (
    <Box w={"100%"} m={'auto'}>
        <Hero/>
        <Hambg/>
        <HeroSmall/>

        <Intro/>
        <Participate/>
        <Token/>
        <Roadmap/>
        <Faq/>
        <Footer/>
    </Box>
  )
}

export default Home

///https://saviour-task.netlify.app/