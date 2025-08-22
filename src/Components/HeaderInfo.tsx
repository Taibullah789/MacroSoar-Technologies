import React from 'react'

type heading=
{
  header:string;
  description:string;
}

function HeaderInfo({header,description}:heading) {
  return (
    <div className="h-[30vh] bg-white flex flex-col ">
        {/* Orange Wave Header */}
        <div className="relative w-full h-56 bg-[#ff612f] relative top-4 flex flex-col justify-center items-center">
          <div className="absolute inset-0">
            <svg viewBox="0 0 1440 320" className="w-full h-full">
              <path
                fill="#f97316"
                fillOpacity="1"
                d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              ></path>
              <pattern
                id="waves"
                patternUnits="userSpaceOnUse"
                width="40"
                height="20"
              >
                <path
                  d="M0 10 Q 10 0 20 10 T 40 10"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1"
                />
              </pattern>
              <rect
                width="100%"
                height="100%"
                fill="url(#waves)"
                opacity="0.2"
              />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold text-white mb-2">{header}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
  )
}

export default HeaderInfo