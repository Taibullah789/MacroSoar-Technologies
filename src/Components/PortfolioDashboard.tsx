import React from 'react'
import PortfolioCard from './PortfolioCard'
 import webimg from '../assets/webImg.png'
import appimg from '../assets/appIMG.png'
import "../Components/styleCss/Home.css"
import marketing from "../assets/portMarketing.jpeg"
import designer from "../assets//uxdesign.jpeg"




type detail={
    title:string;
    description:string;
    img:string;
    link:string;
}

const services:detail[]=[
    {title:"Web Projects", description:"Visit", img:webimg, link:'web-portfolio',},
    {title:"App Projects", description:"Visit", img:appimg, link:'app-portfolio'},
    {title:"Digital Marketing", description:"Visit", img:marketing, link:'marketing-portfolio'},
    {title:"UI/UX Designing", description:"Visit", img:designer, link:'ui-portfolio'}

]


function PortfolioDashboard() {
  return (
    <div className='portFolio flex justify-around m-0  flex-wrap'  style={{height:'50%'}}>   
        {services.map((service)=>(
    <PortfolioCard title={service.title} img={service.img} description={service.description} link={service.link} />
))


        }
     
    </div>
  )
}

export default PortfolioDashboard