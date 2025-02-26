"use client"
import React from 'react';
import { Monitor, Users, Layout, Lightbulb, ArrowRight, Zap, Target, Search } from 'lucide-react';
import SplitText from '../components/SplitText';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import GradientText from '../components/GradientText';
import SpotlightCard from '../components/Spotlight';

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

    const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
    const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true });
    const { ref: processRef, inView: processInView } = useInView({ triggerOnce: true });
    const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true })
  
  return (
    <div className="pt-16">
      <SEO
        title="Our Services - UI Mitra"
        description="Discover the wide range of services we offer to help you create exceptional digital experiences."
        keywords="Services, UI Mitra, UI, UX, Design, Digital Experiences" 
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 150 }}
            transition={{ duration: 2 }}
            ref={heroRef}
          >
            <GradientText
              colors={['#ED184F', "#4079ff", '#ED184F', "#4079ff", '#ED184F']}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              <h1 className="text-4xl md:text-5xl font-bold ">Our Expertise in UI/UX Design</h1>
              {/* <SplitText
                text="Our Expertise in UI/UX Design"
                className="text-4xl md:text-5xl font-bold text-center"
                delay={100}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.3}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete} 
              /> */}
            </GradientText>
            
            <p className="text-xl max-w-3xl mx-auto mt-6">
              We offer end-to-end design solutions to elevate your user experience and transform your digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-110 hover:bg-primary hover:text-white">
                <SpotlightCard
                  className='custom-spotlight-card' spotlightColor='#ED184F'
                >
                  <div className="inline-block p-3 bg-red-100 rounded-full mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold pb-4">{service.title}</h3>
                  <p className="text-gray-600 pb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <ArrowRight className="h-4 w-4 text-secondary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: processInView ? 1 : 0, y: processInView ? 0 : 50 }}
            transition={{ duration: 2 }}
            ref={processRef}
          >
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-400">How we bring your vision to life</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: processInView ? 1 : 0, x: processInView ? 0 : 150 }}
            transition={{ duration: 2 }}
            ref={processRef}
          >
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
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 150 }}
            transition={{ duration: 2 }}
            ref={ctaRef}
          >
            Let's Transform Your Ideas into Reality!
          </motion.h2>
          <motion.a
            href="/contact"
            // className="inline-block bg-white text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            className='relative inline-block px-8 py-3 items-center justify-center overflow-hidden bg-red-50 text-secondary rounded-xl font-semibold shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-primary before:duration-100 before:ease-linear hover:bg-primary hover:text-white hover:shadow-red-600 hover:before:border-[25px]'
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 150 }}
            transition={{ duration: 2 }}
            ref={ctaRef}
          >
            <span className='relative z-10'>Start Your Project</span>
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Services;