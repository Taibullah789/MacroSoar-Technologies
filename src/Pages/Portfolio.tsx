import React, { type JSX } from "react";
import "../Components/styleCss/Home.css";
import Footer from "../Components/homeComponents/Footer";
import HeaderInfo from "../Components/HeaderInfo";
import { Route, Routes, useLocation } from "react-router-dom";

import PortfolioDashboard from "../Components/PortfolioDashboard";
import WebPortfolio from "../Components/PortfoliosPages/WebPortfolio";
import AppPortfolio from "../Components/PortfoliosPages/AppPortfolio";




 




function Portfolio():JSX.Element {

const location = useLocation();

  // Check if we are inside a project detail page
  const isDetailPage = location.pathname === "/portfolio";

  return (
    <>
      
           {/* Show cards only on /portfolio */}
     
       {isDetailPage && ( <>
      <HeaderInfo header="Portfolio" description="What we have Done" />
        
        <div className="   bg-[#F9F5F0]"> <PortfolioDashboard /></div>
      
</>
            
        )
       }
      

      {/* Nested routes for project details */}
      <Routes>
        <Route path="web-portfolio" element={<WebPortfolio />} />
  <Route path="app-portfolio" element={<AppPortfolio />} />

        
      </Routes>  
      
      <Footer/>
     
    </>
  );
}

export default Portfolio;
