import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faSmile, faChartBar, faTrophy } from '@fortawesome/free-solid-svg-icons';
import '../styleCss/Home.css'


const stats = [
  {
    icon: faCheckCircle,
    value: 50,
    label: 'Completed Projects',
    color: 'text-green-500',
  },
  {
    icon: faSmile,
    value: 50,
    label: 'Happy Clients',
    color: 'text-emerald-400',
  },
  {
    icon: faChartBar,
    value: 10,
    label: 'Ongoing Projects',
    color: 'text-cyan-400',
  },
  {
    icon: faTrophy,
    value: 20,
    label: 'Winning Awards',
    color: 'text-teal-500',
  },
];

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return isIntersecting;
}

function Counter({ end, inView }: { end: number; inView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(end / (duration / 16));
    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [end, inView]);
  return <span>{count}+</span>;
}

function ChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className="py-16 bg-white relative left-16  " style={{backgroundColor:'#fff'}}>
      <h2 className="text-4xl relative right-20 font-bold text-center mb-12">Why choose us</h2>
      <div className="  chooseView gap-6 max-w-5xl mx-auto  relative z-10">
        {stats.map((stat, idx) => (
          <div 
            key={stat.label}
            className="bg-white cardHeightChoose rounded-xl shadow-md flex flex-col items-center p-8 w-64 transition-transform hover:scale-105 border border-gray-100"
          >
            <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-gray-50 mb-4 text-3xl ${stat.color}`}>
              <FontAwesomeIcon icon={stat.icon} />
            </div>
            <div className="text-3xl font-bold text-orange-500 mb-2">
              <Counter end={stat.value} inView={inView} />
            </div>
            <div className="text-gray-700 text-lg text-center">{stat.label}</div>
          </div>
        ))}
      </div>
     
    </section>
  );
}

export default ChooseUs;