import React from 'react'
import '../styleCss/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faMobileAlt,
  faPaintBrush,
  faBullhorn,
  faShieldAlt,
  faVrCardboard,
  faLink,
  faRobot,
} from '@fortawesome/free-solid-svg-icons';

type CardProps = {
  title: string;
  description?: string;
  icon: string;
};

function getIcon(icon: string) {
  switch (icon) {
    case 'web': return faLaptopCode;
    case 'mobile': return faMobileAlt;
    case 'design': return faPaintBrush;
    case 'marketing': return faBullhorn;
    case 'security': return faShieldAlt;
    case 'arvr': return faVrCardboard;
    case 'blockchain': return faLink;
    case 'ai': return faRobot;
    default: return faLaptopCode;
  }
}


function Card({ title, description, icon }: CardProps) {
  return (
    <div className="card flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-3xl hover:shadow-xl transition-shadow duration-300 ">
      <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-100 mb-4 mt-2">
        <FontAwesomeIcon icon={getIcon(icon)} className="text-2xl text-emerald-400" />
      </div>
      <h6 className='text-1xl text-gray-650 font-bold mb-2 text-center'>{title}</h6>
      <p className="text-center text-gray-650">{description}</p>
    </div>
  )
}

export default Card