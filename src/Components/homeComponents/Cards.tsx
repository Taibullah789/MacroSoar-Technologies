import React from 'react'
import Card from './Card'
import '../styleCss/Home.css'

type CardItem = {
  title: string,
  description: string,
  icon: string,
}

const Cards: React.FC = () => {
  const cardContent: CardItem[] = [
    { title: "Web Development", description: "We provide creative and professional web applications to empower your business online. Combination of the latest technology and best development practice helps us to deliver efficient web applications.", icon: 'web' },
    { title: "Mobile App Development", description: "Our technically sound team of app developers have the best skills set and proven track record of providing groundbreaking app development solutions to help you surge ahead of the competition.", icon: 'mobile' },
    { title: "Graphic Designing", description: "Our website design services can help you boost more revenue, greater brand engagement and higher conversions with measurable results. Our services may be just what you’re looking for.", icon: 'design' },
    { title: "Digital Marketing", description: "Our marketing experts bring the most effective digital marketing solution that helps you get maximum numbers of subscribers for your brands. We guarantee an engaging experience for your customers and retain brand loyalty.", icon: 'marketing' },
    { title: "Cyber Security", description: "We provide wide range of cyber security services. Our security team will help you quantify and prioritize your risks, help detect and respond to threats, unify your organization on security priorities to accelerate business transformation.", icon: 'security' },
    { title: "AR/VR App Development", description: "Our technically sound team of AR/VR developers have the best skills set and proven track record of providing groundbreaking AR/VR development solutions to help you surge ahead of the competition.", icon: 'arvr' },
    { title: "Blockchain Development", description: "We offer a wide range of blockchain development services and cryptocurrency solutions development. We offer data-driven solutions to match your business needs.", icon: 'blockchain' },
    { title: "Artificial Intelligence", description: "We are offering different type of AI services for mobile and web apps. We will help you in solution of AI and will help you build apps with pre-trained AI capabilities. We have experts in machine learning algorithms, and deep learning architectures.", icon: 'ai' },
  ]

  return (
    <section className="section">
      <div className="cardContainer">
        {cardContent.map((card, index) => (
          <Card 
            key={index} 
            title={card.title} 
            description={card.description}  
            icon={card.icon}
          />
        ))}
      </div>
    </section>
  )
}

export default Cards
