import React from 'react'
import ServiceBtn from './serviceBtn';
import '../styleCss/Home.css';
import uxImg from '../../assets/uxDevImg.png'

type service = { 
     title: string;
};
 let services:service[]=[
{title:"Mobile App Design"},
{title:"Web Design"}, 
{title:"eCommerce Design"},
{title:"Product Design"},
{title:"UX / UI Design"},
{title:"Business Card Design"},



]

function UiDevSection() {
  return (
     <section className="section" style={{backgroundColor:'#fff'}}>
        <div className="leftContent section2-right">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 leading-tight">
            UX / UI Design
          </h1>
          
          <p className="text-lg text-justify text-gray-600 mb-12 leading-relaxed max-w-lg">
          Our designing team is highly skilled, experience and listens to our clients’ design requirements very carefully to bring up a design solution that really meet their expectations. Our design services can help you boost more revenue, greater brand engagement and higher conversions with measurable results. Really need some design inspiration? Someone who can use their creative skills to make a design that will really pop? These graphic design services may be just what you’re looking for.</p>
          
          <div className="servicesBtn serviceBtnUpdate  serviceBtnUpdateUx  ">
            {services.map((service,index)=>{
              return (
            <ServiceBtn key={index} title={service.title}/>

               ) 
            })}
            
           
            


          </div>
          
</div>

<div className="rightContent rightAnimation">
  <img src={uxImg} alt="ux=image" className='w-[80%] h-[80%] relative left-30'  />
</div>
        </section>
  )
}

export default UiDevSection