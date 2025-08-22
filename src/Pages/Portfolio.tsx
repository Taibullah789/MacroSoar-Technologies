import React from "react";
import "../Components/styleCss/Home.css";

import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import p9 from "../assets/p9.png";
import p10 from "../assets/p10.png";

import PortfolioCard from "../Components/PortfolioCard";
import Footer from "../Components/homeComponents/Footer";
import HeaderInfo from "../Components/HeaderInfo";
import { Route, Routes, useLocation } from "react-router-dom";
import Econix from "../Components/PortfoliosPages/Econix";
import MacroCrypto from "../Components/PortfoliosPages/MacroCrypto";
import MobilesGuru from "../Components/PortfoliosPages/MobilesGuru";
import Merabb from "../Components/PortfoliosPages/Merabb";
import EagleMarketing from "../Components/PortfoliosPages/EagleMarketing";
import IdealResidencia from "../Components/PortfoliosPages/IdealResidencia";
import FucntionalComponents from "../Components/PortfoliosPages/FucntionalComponents";
import TableApp from "../Components/PortfoliosPages/TableApp";
import MobileGuruDashboard from "../Components/PortfoliosPages/MobileGuruDashboard";
import ResidenciaDashboard from "../Components/PortfoliosPages/ResidenciaDashboard";

type work = {
  title: string;
  description: string;
  img: string;
  path:string;
};

const works: work[] = [
  {  title: "The Econix", description: "VIEW",img: p1, path:"econix"  },
  {  title: "Macro Crypto News",description:"VIEW",img: p2, path:"macro-crypto-news"},
  {title: "My Mobiles Guru", description: "VIEW",img: p3, path:"mobiles-guru"},
  {title: "Merab.B", description: "VIEW", img: p4, path:"/merab-b"},
  {title: "Ideal Residencia Dashboard", description:"VIEW",img: p5, path:"ideal-reidencia-dashboard"},
  {title: "My Mobiles Guru Dashboard",  description: "VIEW", img: p6, path:"mobiles-guru-dashboard"},
  {title: "Eagle Marketing",  description:  "VIEW", img: p7, path:"eagle-marketing"},
  { title: "Ideal Residencia",  description:   "VIEW",img: p8, path:"ideal-residencia"},
  { title: "Functional Supplements",  description:   "VIEW",img: p9, path:"functional-supplements"},
  { title: "Table App Website",  description:   "VIEW",img: p10, path:"table-app"}
];




function Portfolio() {

const location = useLocation();

  // Check if we are inside a project detail page
  const isDetailPage = location.pathname !== "/portfolio";

  return (
    <>
      <HeaderInfo header="Porfolio" description="What we hava Done" />
      
           {/* Show cards only on /portfolio */}
      {!isDetailPage && (
        <div className="portFolio flex flex-wrap gap-6 bg-gray-200 p-6">
          {works.map((w, index) => (
            <PortfolioCard
              key={index}
              title={w.title}
              description={w.description}
              img={w.img}
              link={w.path}
              small={index % 2===1}
            />
          ))}
        </div>
      )}

      

      {/* Nested routes for project details */}
      <Routes>
        <Route path="econix" element={<Econix />} />
  <Route path="macro-crypto-news" element={<MacroCrypto />} />
  <Route path="mobiles-guru" element={<MobilesGuru />} />
  <Route path="merab-b" element={<Merabb />} />
  <Route path="ideal-residencia-dashboard" element={<ResidenciaDashboard />} />
  <Route path="mobiles-guru-dashboard" element={<MobileGuruDashboard />} />
  <Route path="eagle-marketing" element={<EagleMarketing />} />
  <Route path="ideal-residencia" element={<IdealResidencia />} />
  <Route path="functional-supplements" element={<FucntionalComponents />} />
  <Route path="table-app" element={<TableApp />} />
        
      </Routes>  
      
      <Footer/>
     
    </>
  );
}

export default Portfolio;
