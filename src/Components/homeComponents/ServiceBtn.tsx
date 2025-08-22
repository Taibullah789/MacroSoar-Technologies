import React, { type JSX } from 'react'
import '../styleCss/Home.css';

type ServiceBtnProps = {
  title: string;    
};

function ServiceBtn({title}:ServiceBtnProps):JSX.Element {
  return (
    
    <div>
        <button 
          className=" text-black font-bold rounded hover:bg-green-600 hover:text-white  transition-colors duration-500">
          {title}
        </button>
    </div>
    
  )
}

export default ServiceBtn