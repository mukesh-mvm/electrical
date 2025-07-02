import React from 'react'
import HeroSection from '../componets/HeroSection'
import ServiceGrid from '../componets/ServiceGrid'
import FeatureSection from '../componets/FeatureSection'
import ElectricalServices from '../componets/ElectricalServices'
import ContactSection from '../componets/ContactSection'
import ExperienceCentreBanner from '../componets/ExperienceCentreBanner'
import ExperienceStats from '../componets/ExperienceStats '


 const Home = () => {
  return (
    <div>
        <HeroSection/>
        <ServiceGrid/>
        <ExperienceStats/>
        <FeatureSection/>
        <ElectricalServices/>
        <ExperienceCentreBanner/>
        <ContactSection/>
       
       
    </div>
  )
}

export default Home
