import React, { type JSX } from 'react';
import '../styleCss/Home.css';
import ServiceBtn from './serviceBtn'; 
import marketingImg from '../../assets/marketingimg.png'; // Assuming you have a marketing image  


type service = { 
     title: string;
};
 let services:service[]=[
{title:"Facebook Marketing"},
{title:"Email Marketing"},
{title:"Instagram Marketing"},
{title:"Snapchat Marketing"},
{title:"LinkedIn Marketing"},
{title:"YouTube Marketing"},
{title:"SEO"},
{title:"Twitter Marketing"},


]

function Marketing():JSX.Element {
  return (
    <section className="section "style={{backgroundColor:'#f4f6fc'}}>

<div className="rightContent">
  <img src={marketingImg} alt="" />
</div>

 <div className="leftContent section2-right " style={{backgroundColor:'#f4f6fc'}}>
          <h1 className="text-5xl font-bold text-gray-800 mb-8 leading-tight">
            Digital Marketing 
          </h1>
          
          <p className="text-lg text-justify text-gray-600 mb-12 leading-relaxed max-w-lg">
            Our passion to work hard and deliver excellent results. It could solve the needs of our customers and develop innovation.</p>
          
          <div className="servicesBtn">
            {services.map((service,index)=>{
              return (
            <ServiceBtn key={index} title={service.title}/>

               ) 
            })}
            
           
            


          </div>
          
</div>

        </section>
  )
}

export default Marketing