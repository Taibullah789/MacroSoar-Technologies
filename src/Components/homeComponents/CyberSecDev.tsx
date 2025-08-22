import React from 'react'
import ServiceBtn from './serviceBtn'
import '../styleCss/Home.css';
import cyberSecImg from '../../assets/Cyber-img.png'; // Assuming you have a cyber security image

type service = { 
     title: string;
};
 let services:service[]=[
{title:"Pentesting"},
{title:"SIEM development and soC Services"}, 
{title:" DevSecOps"},
{title:"Malware Analysis"},
{title:"Incident Responses"},
{title:" Cyber Security Awareness"},
{title:"Threat Intelligence"},
{title:"CTF platform and challenges development Trainings"}, 
{title:" Ethical Hacking"},
{title:"Security Operation Centre"},
{title:"Secure Software Development"},                



]

function CyberSecDev() {
  return (
         <section className="section" style={{backgroundColor:'#fff'}}>
        <div className="leftContent section2-right cyber-serviceSecU">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 leading-tight">
           Cyber Security
          </h1>
          
          <p className="text-lg text-justify text-gray-600 mb-12 leading-relaxed max-w-lg">
          We provide wide range of cyber security services. Our security team will help you quantify and prioritize your risks, help detect and respond to threats, unify your organization on security priorities to accelerate business transformation.</p>
          
          <div className="servicesBtn serviceBtnUpdate servicebtnU2  ">
            {services.map((service,index)=>{
              return (
            <ServiceBtn key={index} title={service.title}/>

               ) 
            })}
            
          </div>
</div>

<div className="rightContent rightAnimation">
  <img src={cyberSecImg} alt="cyberSecurity" className='w-[80%] h-[80%] relative left-30'  />
</div>
        </section>
  )
}

export default CyberSecDev