import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faBullhorn,
  faPaintBrush,
  faMobileAlt,
  faShieldAlt,
  faRobot,
  faVrCardboard,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Footer from '../Components/homeComponents/Footer';
import HeaderInfo from '../Components/HeaderInfo';

const services = [
  {
    icon: faLaptopCode,
    title: 'Web Development',
    desc: 'We provide creative and professional web applications to empower your business online. Combination of the latest technology and best development practice helps us to deliver efficient web applications.',
    color: 'bg-orange-100 text-orange-500',
    bgIcon: faLaptopCode,
  },
  {
    icon: faBullhorn,
    title: 'Digital Marketing',
    desc: 'Our marketing experts bring the most effective digital marketing solution that helps you get maximum numbers of subscribers for your brands. We guarantee an engaging experience for your customers and retain brand loyalty.',
    color: 'bg-pink-100 text-pink-500',
    bgIcon: faBullhorn,
  },
  {
    icon: faPaintBrush,
    title: 'Graphic Designing',
    desc: 'Our website design services can help you boost more revenue, greater brand engagement and higher conversions with measurable results. Our services may be just what you’re looking for.',
    color: 'bg-orange-100 text-orange-500',
    bgIcon: faPaintBrush,
  },
  {
    icon: faMobileAlt,
    title: 'Mobile App Development',
    desc: 'Our technically sound team of app developers have the best skills and proven track record of providing groundbreaking app development solutions to help you surge ahead of the competition.',
    color: 'bg-cyan-100 text-cyan-500',
    bgIcon: faMobileAlt,
  },
  {
    icon: faShieldAlt,
    title: 'Cyber Security',
    desc: 'We provide wide range of cyber security services. Our security solutions help you address your security priorities to accelerate business transformation.',
    color: 'bg-orange-100 text-orange-500',
    bgIcon: faShieldAlt,
  },
  {
    icon: faRobot,
    title: 'AI Development',
    desc: 'We provide wide range of cyber security services. Our security solutions help you address your security priorities to accelerate business transformation.',
    color: 'bg-cyan-100 text-cyan-500',
    bgIcon: faRobot,
  },
  {
    icon: faVrCardboard,
    title: 'AR/VR app development',
    desc: 'Our advanced team of app developers have the best skills for development and launch of cutting-edge/breakthrough applications tailored to help you surge ahead of the competition.',
    color: 'bg-orange-100 text-orange-500',
    bgIcon: faVrCardboard,
  },
  {
    icon: faLink,
    title: 'Blockchain Development',
    desc: 'Our advanced team of app developers have the best skills for development and launch of cutting-edge/breakthrough applications tailored to help you surge ahead of the competition.',
    color: 'bg-cyan-100 text-cyan-500',
    bgIcon: faLink,
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', bounce: 0.25, duration: 0.8 }
  }
};

const iconVariants = {
  offscreen: { scale: 0.7, opacity: 0 },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 400, damping: 20, duration: 0.5 }
  }
};

function Services() {
  return (
    <div className="min-h-screen bg-white flex flex-col ">
      {/* Orange Wave Header */}
      <HeaderInfo header="Services" description="Services
The ability to adapt, connecting opportunities."/>

      {/* Services Grid */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-16 relative top-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className="relative bg-white rounded-2xl shadow-md p-10 flex flex-col gap-3 border border-gray-100 min-h-[260px] overflow-hidden transition-transform hover:scale-[1.03]"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              {/* Background Icon */}
              <div className="absolute right-4 bottom-4 text-[90px] opacity-10 pointer-events-none select-none">
                <FontAwesomeIcon icon={service.bgIcon} />
              </div>
              {/* Main Icon above title */}
              <motion.div
                className={`mx-auto mb-3 w-16 h-16 flex items-center justify-center rounded-2xl text-4xl shadow-sm ${service.color}`}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={iconVariants}
              >
                <FontAwesomeIcon icon={service.icon} />
              </motion.div>
              <span className="text-xl font-bold text-gray-800 text-center mb-2">{service.title}</span>
              <div className="text-gray-700 text-base font-normal text-center px-2 pb-2">
                {service.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="relative top-50"> 
< Footer/>
</div>

    </div>
  );
}

export default Services;