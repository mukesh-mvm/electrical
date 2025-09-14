import React from 'react'
import HeroSection from '../componets/HeroSection'
import ServiceGrid from '../componets/ServiceGrid'
import FeatureSection from '../componets/FeatureSection'
import ElectricalServices from '../componets/ElectricalServices'
import ContactSection from '../componets/ContactSection'
import ExperienceCentreBanner from '../componets/ExperienceCentreBanner'
import ExperienceStats from '../componets/ExperienceStats '
import HelpBrands from '../componets/HomePageService'
import OfficeWiringPage from '../componets/office/OfficeWiringPage'


 const Home = () => {
  return (
    <div>
        <HeroSection/>
        {/* <ServiceGrid/> */}
        <ExperienceStats/>
        <HelpBrands/>
        <FeatureSection/>
        {/* <ElectricalServices/> */}
        <ExperienceCentreBanner/>
        <ContactSection/>
       
       
       
    </div>
  )
}

export default Home
