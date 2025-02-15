"use client"
import React from 'react';
import { Monitor, Users, Layout, Lightbulb, ArrowRight, Zap, Target, Search } from 'lucide-react';
import SplitText from '../components/SplitText';

const Services = () => {
  const services = [
    {
      icon: <Layout className="h-8 w-8 text-secondary" />,
      title: "UI Design",
      description: "Creating beautiful, intuitive interfaces that users love to interact with. We focus on visual hierarchy, typography, and color theory to deliver stunning designs.",
      features: ["Custom Interface Design", "Design Systems", "Responsive Layouts"]
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "UX Research",
      description: "Understanding user behavior through comprehensive research to create meaningful and effective experiences.",
      features: ["User Interviews", "Usability Testing", "Analytics Review"]
    },
    {
      icon: <Monitor className="h-8 w-8 text-secondary" />,
      title: "Prototyping",
      description: "Bringing ideas to life with interactive prototypes that simulate the final product experience.",
      features: ["Interactive Wireframes", "High-fidelity Prototypes", "User Flow Mapping"]
    },
    {
      icon: <Search className="h-8 w-8 text-secondary" />,
      title: "Usability Testing",
      description: "Ensuring your product meets user needs through comprehensive testing and iteration.",
      features: ["A/B Testing", "User Feedback", "Heuristic Evaluation"]
    }
  ];

  const process = [
    {
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      title: "Discover",
      description: "Understanding your goals, users, and business requirements"
    },
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: "Design",
      description: "Creating intuitive and beautiful solutions"
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "Develop",
      description: "Building and iterating on the solution"
    },
    {
      icon: <ArrowRight className="h-8 w-8 text-white" />,
      title: "Deliver",
      description: "Launching and monitoring success"
    }
  ];

  const handleAnimationComplete = () => {
    console.log('All letter are animated')
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <SplitText
              text="Our Expertise in UI/UX Design"
              className="text-4xl md:text-5xl font-bold text-center"
              delay={200}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.3}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete} 
            />
            {/* <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise in UI/UX Design</h1> */}
            <p className="text-xl max-w-3xl mx-auto mt-6">
              We offer end-to-end design solutions to elevate your user experience and transform your digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-110 hover:bg-primary hover:text-white">
                <div className="inline-block p-3 bg-red-100 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-secondary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-400">How we bring your vision to life</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-secondary rounded-full mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-secondary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Let's Transform Your Ideas into Reality!</h2>
          <a
            href="/contact"
            className="inline-block bg-white text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;