import React from 'react'
import Navbar from '../Components/Navbar'
import Intro from '../Components/homeComponents/Intro'
import Strategy from '../Components/homeComponents/Strategy'
import Cards from '../Components/homeComponents/Cards'
import Marketing from '../Components/homeComponents/Marketing'
import WebDevSection from '../Components/homeComponents/WebDevSection'
import AppDevSection from '../Components/homeComponents/AppDevSection'
import UiDevSection from '../Components/homeComponents/UiDevSection'
import CyberSecDev from '../Components/homeComponents/CyberSecDev'
import ArtificialDevSection from '../Components/homeComponents/ArtificialDevSection'
import ChooseUs from '../Components/homeComponents/ChooseUs'
import Footer from '../Components/homeComponents/Footer'
import Success from '../Components/homeComponents/Success'

function Home () {
  return (
    <div className="m-0 p-0">
     <Intro/>
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
     <Footer/>

    
      

    </div>
  )
}

export default Home

      

