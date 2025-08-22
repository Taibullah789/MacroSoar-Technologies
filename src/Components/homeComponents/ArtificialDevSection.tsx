import React from 'react'
import ServiceBtn from './serviceBtn';
import '../styleCss/Home.css';
import aiImg from '../../assets/Ai.jpg'; // Assuming you have an AI image

type service = { 
     title: string;
};
 let services:service[]=[
{title:"Internet of Things"},
{title:"Object Detection"}, 
{title:"Fleet Optimization"},
{title:"Bio-signal Processing"},




]

function ArtificialDevSection() {
  return (
     <section className="section" style={{backgroundColor:'#fff'}}>
        <div className="leftContent section2-right">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 leading-tight">
          Artificial Intellegence
          </h1>
          
          <p className="text-lg text-justify text-gray-600 mb-12 leading-relaxed max-w-lg">
          We are offering different type of AI services for mobile and web apps. We will help you in solution of AI and will help you build apps with pre-trained AI capabilities. We have experts in machine learning algorithms, and deep learning architectures.</p>
          
          <div className="servicesBtn Ai-ServiceBtnU   ">
            {services.map((service,index)=>{
              return (
            <ServiceBtn key={index} title={service.title}/>

               ) 
            })}
            
           
            


          </div>
          
</div>

<div className="rightContent rightAnimation">
  <img src={aiImg} alt="ux=image" className='w-[80%] h-[80%] relative left-30'  />
</div>
        </section>
  )
}

export default ArtificialDevSection