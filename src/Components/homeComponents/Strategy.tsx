import React from 'react'
import '../styleCss/Home.css'
import strategyImg from '../../assets/main-image.png' ;
import { Link } from 'react-router-dom';

function Strategy() {
  return (
      
      <section className="section  bg-#20c997" style={{backgroundColor: '#20c997'}}>

<div className="rightContent" >
  <img src={strategyImg} alt="Strategy" className="w-full h-full rounded-lg shadow-lg" />
</div>

 <div className="leftContent section2-right ">
          <h1 className="text-5xl font-bold text-gray-800 mb-8 leading-tight">
            Manage your <br /> business strategy <br /> in one placeholder
            
          </h1>
          
          <p className="text-lg text-justify text-gray-600 mb-12 leading-relaxed max-w-lg">
            Our passion to work hard and deliver excellent results. It could solve the needs of our customers and develop innovation.</p>
          
         
         <Link to="/contact-us">
          <button className="bg-blue-800 contactBtn text-white  rounded-lg font-semibold text-lg mt-6 hover:bg-blue-900 transition-colors duration-200 flex items-center gap-3 shadow-lg">
            <svg className="w-6 h-6 " fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" className='btn' d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
            Talk To An Expert
          </button>
          </Link>
</div>

        </section>
  )
}

export default Strategy