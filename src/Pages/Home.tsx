import React from 'react'
import Navbar from '../Components/Navbar'
import Intro from '../Components/homeComponents/Intro'
import Strategy from '../Components/homeComponents/Strategy'
import Cards from '../Components/homeComponents/Cards'
import ProcessCard from '../Components/homeComponents/ProcessCard'
import Marketing from '../Components/homeComponents/Marketing'
import WebDevSection from '../Components/homeComponents/WebDevSection'
import AppDevSection from '../Components/homeComponents/AppDevSection'
import UiDevSection from '../Components/homeComponents/UiDevSection'
import CyberSecDev from '../Components/homeComponents/CyberSecDev'
import ArtificialDevSection from '../Components/homeComponents/ArtificialDevSection'
import ChooseUs from '../Components/homeComponents/ChooseUs'
import MeetExperts from '../Components/homeComponents/MeetExperts'
import ContactUs from '../Components/homeComponents/ContactUs'
import AboutMacroSoar from '../Components/homeComponents/AboutMacroSoar'
import Newsletter from '../Components/homeComponents/Newsletter'
import LogoSlider from '../Components/homeComponents/LogoSlider'
import Footer from '../Components/homeComponents/Footer'
import Success from '../Components/homeComponents/Success'
import ScrollCards from '../Components/homeComponents/ScrollCards'
import MvpMaintenanceCard from '../Components/homeComponents/MvpMaintenanceCard'

function Home () {
  return (
    <div className="m-0 p-0">
     <Intro/>
     <ScrollCards/>
     <MvpMaintenanceCard/>
     <Strategy/>
     <Cards/>
    
     {/* <Success/> */}
     <Marketing/>
     <WebDevSection/>
     <AppDevSection/>
     <UiDevSection/>
     <CyberSecDev/>
     <ArtificialDevSection/>
     <ChooseUs/>
     <MeetExperts/>
     <ContactUs/>
     <AboutMacroSoar/>
     <Newsletter/>
     <LogoSlider/>
     <Footer/>

    
      

    </div>
  )
}

export default Home

      

