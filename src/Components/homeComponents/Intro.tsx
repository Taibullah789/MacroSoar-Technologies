import React, { useEffect, useState, type JSX } from 'react'
import '../styleCss/Home.css';
import bannerImg1 from '../../assets/banner-img1.jpg'; // Assuming you have a second banner image
import bannerImg2 from '../../assets/banner-img2.jpg'; // Assuming you have a banner image
import bannerImg3 from '../../assets/banner-img3.jpg'; // Assuming you have a third banner image
import { Link } from 'react-router-dom';


const images = [bannerImg1, bannerImg2, bannerImg3];

function Intro(): JSX.Element {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true); // true = visible, false = hidden

  useEffect(() => {
    const interval = setInterval(() => {
      // Step 1 → fade out
      setFade(false);

      // Step 2 → after fade-out (1s), change image and fade-in
      setTimeout(() => {
        setIndex((index) => (index+1) % images.length);
        setFade(true);
      }, 1000); // match CSS transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
 
       
     <section className="section sec1  "style={{backgroundColor:'#fff' }}>
        <div className="leftContent">
          <h1 className="text-5xl font-bold text-gray-800 mb-8 leading-tight">
            Solve Business <br /> Challenges With
            <br />
            <span className="text-5xl"> IT</span>
          </h1>
          
          <p className="text-lg text-justify text-gray-600 mb-12 leading-relaxed max-w-lg">
            Welcome to Macro Soar, your number one source for all products. We're dedicated to giving you the very best, with a focus on quality, versatility, reliability, trust and credibility. Founded in 2018, Macro Soar has come a long way from its beginnings in Islamabad. When we first started out, our passion for quality products drove us to do tons of research, so that Macro Soar can offer you the world's most advanced applications. We now serve customers all over the world and are thrilled that we're able to turn our passion into our own website.
          </p>
          
          {/* Call-to-Action Button */}
          <Link to='/contact-us'><button className="bg-blue-800 text-white contactBtn rounded-lg font-semibold text-lg mt-6 hover:bg-blue-900 transition-colors duration-200 flex items-center gap-3 shadow-lg">
            <svg className="w-6 h-6 " fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" className='btn' d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
            Contact Us
          </button>
          </Link>
</div>

<div className="rightContent relative ">
  <img src={images[index]} alt="" id='images' className={` absolute h-full w-full sliderTransition ${fade ? "show" : "hide"}`}/>
  
</div>
 

        </section>
  )
}

export default Intro