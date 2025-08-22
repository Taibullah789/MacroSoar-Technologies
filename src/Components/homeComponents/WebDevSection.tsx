import React, { type JSX } from 'react'
import '../styleCss/Home.css';
import ServiceBtn from './serviceBtn';
import webDevImg from '../../assets/webImg.png'; // Assuming you have a web development image


type service = { 
     title: string;
};
 let services:service[]=[
{title:"Responsive Design"},
{title:"React Web Development"}, 
{title:"Laravel Web Development"},
{title:"WordPress Development"},
{title:"Angular Web Development"},
{title:"Node.js Development"},



]

function WebDevSection():JSX.Element {
  return (
     <section className="section" style={{backgroundColor:'#fff'}}>
        <div className="leftContent section2-right">
          <h1 className="text-5xl font-bold text-gray-800 mb-8 leading-tight">
           Web Development 
          </h1>
          
          <p className="text-lg text-justify text-gray-600 mb-12 leading-relaxed max-w-lg">
            Our dedicated team of experts has the necessary experience and expertise in website development that ensures high-performance and excellence. We work on offering unlimited possibilities to our customers with our highly scalable and robust applications.</p>
          
          <div className="servicesBtn serviceBtnUpdate  ">
            {services.map((service,index)=>{
              return (
            <ServiceBtn key={index} title={service.title}/>

               ) 
            })}
            
           
            


          </div>
          
</div>

<div className="rightContent rightAnimation">
  <img src={webDevImg} alt="Web Development" className="w-full h-full rounded-lg shadow-lg" />
  {/* You can add more content or images here if needed */}
</div>
        </section>
  )
}

export default WebDevSection