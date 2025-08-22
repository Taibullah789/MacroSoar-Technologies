import React from 'react'
import ServiceBtn from './serviceBtn'
import appIMG from '../../assets/appIMG.png'

type service = { 
     title: string;
};
 let services:service[]=[
{title:"Responsive Design"},
{title:"Native iOS Development"}, 
{title:"Native Android Development"},
{title:"Flutter Development"},
{title:"React Native Development"},
{title:"3D Modeling"},



]

function AppDevSection() {
  return (
    <section className="section" style={{backgroundColor:'#fff'}}>
        <div className="leftContent section2-right">
          <h1 className="text-5xl font-bold text-gray-800 mb-8 leading-tight">
             Mobile Apps Development 
          </h1>
          
          <p className="text-lg text-justify text-gray-600 mb-12 leading-relaxed max-w-lg">
           Our dedicated team of experts has the necessary experience and expertise in web & mobile app development that ensures high-performance and excellence. We work on offering unlimited possibilities to our customers with our highly scalable and robust applications.</p>
          
          <div className="servicesBtn serviceBtnUpdate  ">
            {services.map((service,index)=>{
              return (
            <ServiceBtn key={index} title={service.title}/>

               ) 
            })}
    
          </div>        
</div>

<div className="rightContent rightAnimation">
<img src={appIMG} alt="" className='w-full h-full' />
</div>
        </section>
  )
}

export default AppDevSection