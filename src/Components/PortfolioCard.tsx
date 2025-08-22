import { div } from 'framer-motion/client';
import React from 'react'
import Footer from './homeComponents/Footer';
import { Link } from 'react-router-dom';

type portFolioProps={
    title:string;
    description:string;
    img:string;
    link:string;
    small:boolean;
}



function PortfolioCard({title,description,img,link,small}:portFolioProps) {

  return (

    <div className={`relative portCard border portborder ${small ? "h-[350px]" : "h-[400px]"}`} style={{marginTop:'50px' }}>
        
     <img src={img} alt="" style={{width:'100%',opacity:'', backgroundColor:'black', height:'70%', borderRadius:'15px'}} />
     <div className='h-[16vh]'>
        <h4 className=''>{title}</h4>

        {/* navigate to another page */}
       
    <Link to={`/portfolio/${link}`}>
        <button className='px-4 py-2 portbtn text-white bg-gray-300 rounded-lg transition'>{description}</button>
       </Link>    
       
    
       
    </div>
    </div>


    
  );
}







export default PortfolioCard