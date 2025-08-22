import React from 'react'


import p1 from "../../assets/p1.png"
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";
import p7 from "../../assets/p7.png";
import p8 from "../../assets/p8.png";
import p9 from "../../assets/p9.png";
import p10 from "../../assets/p10.png";
import PortfolioCard from '../PortfolioCard';
import { useLocation } from 'react-router-dom';
import HeaderInfo from '../HeaderInfo';


type work = {
  title: string;
  description: string;
  img: string;
  path:string;
};

const works: work[] = [
  {  title: "The Econix", description: "VIEW",img: p1, path:"web-portfolio"},  
  {  title: "Macro Crypto News",description:"VIEW",img: p2, path:"web-portfolio"},
  {title: "My Mobiles Guru", description: "VIEW",img: p3, path:"web-portfolio"},
  {title: "Merab.B", description: "VIEW", img: p4, path:"web-portfolio"},
  {title: "Ideal Residencia Dashboard", description:"VIEW",img: p5, path:"web-portfolio"},
  {title: "My Mobiles Guru Dashboard",  description: "VIEW", img: p6, path:"web-portfolio"},
  {title: "Eagle Marketing",  description:  "VIEW", img: p7, path:"web-portfolio"},
  { title: "Ideal Residencia",  description:   "VIEW",img: p8, path:"web-portfolio"},
  { title: "Functional Supplements",  description:   "VIEW",img: p9, path:"web-portfolio"},
  { title: "Table App Website",  description:   "VIEW",img: p10, path:"web-portfolio"},
];

function WebPortfolio() {
return(
  
 <>
      <HeaderInfo header="Web Portfolio" description="Our Web Project" />

    
 <div>
      <div className="portFolio flex flex-wrap gap-6 bg-[#F9F5F0] p-6">
        {works.map((w, index) => (
          <PortfolioCard
            key={index}
            title={w.title}
            description={w.description}
            img={w.img}
            link={w.path}
            small={index % 2 === 1} />
        ))}
      </div>


    </div></>
)
}

export default WebPortfolio