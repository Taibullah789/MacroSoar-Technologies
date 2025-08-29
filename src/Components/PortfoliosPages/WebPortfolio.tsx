import React from "react";
import { motion, useScroll } from "framer-motion";
import '../styleCss/Home.css'
import HeaderInfo from "../HeaderInfo";

import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";
import p7 from "../../assets/p7.png";
import p8 from "../../assets/p8.png";
import p9 from "../../assets/p9.png";
import p10 from "../../assets/p10.png";
import CustomCursor from "../CustomCursor";

type work = {
  title: string;
  description: string;
  img: string;
  path: string;
};

const works: work[] = [
  { title: "The Econix", description: "VIEW", img: p1, path: "web-portfolio" },
  { title: "Macro Crypto News", description: "VIEW", img: p2, path: "web-portfolio" },
  { title: "My Mobiles Guru", description: "VIEW", img: p3, path: "web-portfolio" },
  { title: "Merab.B", description: "VIEW", img: p4, path: "web-portfolio" },
  { title: "Ideal Residencia Dashboard", description: "VIEW", img: p5, path: "web-portfolio" },
  { title: "My Mobiles Guru Dashboard", description: "VIEW", img: p6, path: "web-portfolio" },
  { title: "Eagle Marketing", description: "VIEW", img: p7, path: "web-portfolio" },
  { title: "Ideal Residencia", description: "VIEW", img: p8, path: "web-portfolio" },
  { title: "Functional Supplements", description: "VIEW", img: p9, path: "web-portfolio" },
  { title: "Table App Website", description: "VIEW", img: p10, path: "web-portfolio" },
];

function WebPortfolio() {
  const { scrollYProgress } = useScroll();

  return (
    <>
    <CustomCursor/>
      <HeaderInfo header="Web Portfolio" description="Our Web Projects" />
      <div className="bg-black text-white overflow-hidden pt-20 pb-20" style={{ paddingTop: "20px" }}>

        {/* Cards + Timeline wrapper */}
        <div className="relative flex flex-col gap-20 px-8 mt-16">
          {/* Timeline Progress Line (centered in mid, not touching cards) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-300 z-0">
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="origin-top bg-yellow-500 w-full h-full"
            />
          </div>
                            
          {/* Cards */}
          {works.map((w, index) => (
            <div
              key={index}
              className={`flex items-center min-h-[60vh] relative ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Timeline Dot (only when card in view) */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
                className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-500 rounded-full z-20 shadow-md shadow-yellow-500/40"
              />

              {/* Title OUTSIDE with connector line */}
              <motion.div
                initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`absolute top-1/2 -translate-y-1/2 flex items-center z-30 max-w-[40vw] ${
                  index % 2 === 0
                    ? "left-1/2 pl-6 flex-row"
                    : "right-1/2 pr-6 flex-row-reverse"
                }`}
              >
                {/* connector line to timeline */}
                <div className="w-12 h-[2px] bg-yellow-500"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {w.title}
                </h2>
              </motion.div>

              {/* Card Content */}
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
                className="w-1/2 flex flex-col items-start gap-4 z-20"
              >
                <img
                  src={w.img}
                  alt={w.title}
                  className="rounded-xl shadow-lg w-[90%] object-cover"
                />
                <button className="text-gray-600 text-lg contactBtn" style={{marginLeft:'15px'}}>{w.description}</button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WebPortfolio;
