"use client"
import React, { useState } from 'react';
import { Monitor, Users, Layout, Lightbulb, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ecom from '../app/public/ecom-redesign.jpeg';
import bank from '../app/public/banking-img.jpeg';
import dashboard from '../app/public/dashboard-img.jpeg';
import test from '../app/public/undraw_testimonials_4c7y-2.svg';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Particles from './components/Particles';
// import SpotlightCard from './components/Spotlight';
// import RotatingText from './components/TrueFocus';
import TrueFocus from './components/TrueFocus';
import SEO from './components/SEO';
import SpotlightCard from './components/Spotlight';
import ScrollVelocity from './components/ScrollVelocity';
import GradientText from './components/GradientText';
// import FallingText from './components/FallingText';
// import Aurora from './components/Aurora';

const Home = () => {

  const testimonials = [
    {
      quote: "Working with UI Mitra was a game-changer for our product. Their attention to detail and user-centric approach helped us create an exceptional experience for our customers.",
      author: "Sarah Johnson",
      role: "Product Manager",
      company: "TechStart Inc."
    },
    {
      quote: "The team's creativity and technical expertise are unmatched. They didn't just design our interface; they transformed our entire digital presence.",
      author: "Michael Chen",
      role: "CEO",
      company: "Innovation Labs"
    },
    {
      quote: "Professional, responsive, and incredibly talented. UI Mitra delivered beyond our expectations and helped us achieve our business goals.",
      author: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Global Solutions"
    },
    {
      quote: "UI Mitra's design work is exceptional. They truly understand the needs of our users and have created a seamless experience.",
      author: "David Lee",
      role: "CTO",
      company: "FinTech Solutions"
    },
    {
      quote: "Their innovative approach to design has helped us stand out in a crowded market. We couldn't be happier with the results.",
      author: "Jessica Brown",
      role: "Marketing Manager",
      company: "Creative Agency"
    },
    {
      quote: "UI Mitra's team is incredibly talented and professional. They delivered beyond our expectations.",
      author: "John Doe",
      role: "CEO",
      company: "Tech Innovators"
    },
    {
      quote: "The design solutions provided by UI Mitra have significantly improved our user engagement.",
      author: "Jane Smith",
      role: "Product Owner",
      company: "Digital Solutions"
    }
  ];

  // const [ scrollPosition, setScrollPosition ] = useState(0);

  // const handleScroll = (direction) => {
  //   if (direction === 'left') {
  //     setScrollPosition(scrollPosition - 200);
  //   } else if (direction === 'right') {
  //     setScrollPosition(scrollPosition + 200);
  //   }
  // };

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true });
  const { ref: workRef, inView: workInView } = useInView({ triggerOnce: true });
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({ triggerOnce: true });
  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true })

  const fadeInUp = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1 }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 }
  };
  
  return (
      <div className="pt-16 bg-primary">
        <SEO
          title="UI Mitra - Crafting Exceptional User Experiences"
          description="Where innovation meets design to create meaningful digital experiences that inspire an engage."
          keywords="UI, UX, UI/UX, Design, Digital Experiences, Innovation."
        />
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20 lg:py-32">
          <div className="absolute inset-0 bg-black opacity-50">
            <Particles 
              particleColors={['#ED184F', '#ffffff']}
              particleCount={250}
              particleSpread={10}
              speed={0.6}
              particleBaseSize={200}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className='text-center'
                initial={{ opacity: 0, y: 250 }}
                // initial="initial"
                animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 250 }}
                // animate={heroInView ? "animate" : "initial"}
                // variants={fadeInUp}
                transition={{ duration: 2 }}
                ref={heroRef}
              >
                <TrueFocus
                  sentence="Crafting Exceptional User Experiences"
                  manualMode={false}
                  blurAmount={3}
                  borderColor="red"
                  animationDuration={1.5}
                  pauseBetweenAnimations={0.5}
                  className="text-xl md:text-5xl lg:text-6xl font-bold mb-10" 
                />
                {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Crafting Exceptional User Experiences
                </h1> */}
                {/* <FallingText
                  text={`Where innovation meets design to create meaningful digital experiences that inspire and engage.`}
                  highlightWords={['innovation', 'create', 'digital', 'experiences', 'inspire']}
                  highlightClass="highlighted"
                  trigger="hover"
                  backgroundColor="transparent"
                  wireframes={false}
                  gravity={0.56}
                  fontSize="2rem"
                  mouseConstraintStiffness={0.9} 
                /> */}
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto my-5">
                  Where innovation meets design to create meaningful digital experiences that inspire and engage.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="/portfolio"
                    // className="bg-white text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105 hover:shadow-lg"
                    className='relative flex px-8 py-3 items-center justify-center overflow-hidden bg-red-50 text-secondary rounded-xl font-semibold shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-secondary before:duration-100 before:ease-linear hover:bg-secondary hover:text-white hover:shadow-red-600 hover:before:border-[25px]'
                  >
                    <span className='relative z-10'>View Our Work</span>
                  </Link>
                  <Link
                    href="/contact"
                    // className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-secondary transition duration-300 transform hover:scale-105 hover:shadow-lg"
                    className='before:ease relative px-8 py-3 overflow-hidden border border-white shadow-2xl rounded-xl font-semibold text-secondary transition duration-300 transform hover:scale-105 before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-secondary before:transition-all before:duration-300 hover:text-white hover:shadow-secondary hover:before:-rotate-180'
                  >
                    <span className='relative z-10'>Let&apos;s Talk</span>
                  </Link>
                </div>
              </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className='text-center mb-16'
              initial={{ opacity: 0 }}
              // initial="initial"
              animate={{ opacity: servicesInView ? 1 : 0 }}
              // animate={servicesInView ? "animate" : "initial"}
              transition={{ duration: 2 }}
              // variants={fadeIn}
              ref={servicesRef}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-300 mb-4"
                initial={{ opacity: 0, y: 350 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                ref={servicesRef}
              >
                Our Services
              </motion.h2>

              <motion.p 
                className="text-xl text-gray-300"
                initial={{ opacity: 0, y: 250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                ref={servicesRef}
              >
                Comprehensive design solutions for your digital needs
              </motion.p>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: servicesInView ? 1 : 0, x: servicesInView ? 0 : 200 }}
              transition={{ duration: 2 }}
              ref={servicesRef}
            >
              {[
                {
                  icon: <Layout className="h-8 w-8 text-secondary" />,
                  title: 'UI Design',
                  description: 'Creating beautiful, intuitive interfaces that users love to interact with.'
                },
                {
                  icon: <Users className="h-8 w-8 text-secondary" />,
                  title: 'UX Research',
                  description: 'Understanding user behavior to create meaningful experiences.'
                },
                {
                  icon: <Monitor className="h-8 w-8 text-secondary" />,
                  title: 'Prototyping',
                  description: 'Bringing ideas to life with interactive prototypes and wireframes.'
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl duration-300 relative overflow-hidden border border-secondary text-secondary transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-700 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-700 hover:text-white hover:shadow-pink-400 hover:before:w-2/4 hover:before:bg-primary hover:after:w-2/4 hover:after:bg-primary">
                  <div className='relative z-10'>
                    {/* <SpotlightCard className="custom-spotlight-card" spotlightColor="#ED184F"> */}
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link href="/services" className="text-secondary font-medium flex items-center hover:text-secondary">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                  {/* </SpotlightCard> */}
                </div>
              ))}
            </motion.div>
            </div>
        </section>

        {/* Featured Work */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: workInView ? 1 : 0 }}
              transition={{ duration: 2 }}
              ref={workRef}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-300 mb-4"
                initial={{ opacity: 0, y: 300 }}
                animate={{ opacity: workInView ? 1 : 0, y: workInView ? 0 : 300 }}
                transition={{ duration: 2 }}
                ref={workRef}
              >
                Featured Work
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300"
                initial={{ opacity: 0, y: 250 }}
                animate={{ opacity: workInView ? 1 : 0, y: workInView ? 0 : 250 }}
                transition={{ duration: 2 }}
                ref={workRef}
              >
                Some of our recent projects that made an impact
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: workInView ? 1 : 0, x: workInView ? 0 : 200 }}
              transition={{ duration: 2 }}
              ref={workRef}
            >
              {[
                {
                  image: ecom.src,
                  title: "E-commerce Redesign",
                  category: "UI/UX Design"
                },
                {
                  image: bank.src,
                  title: "Banking App",
                  category: "Mobile Design"
                },
                {
                  image: dashboard.src,
                  title: "Analytics Dashboard",
                  category: "Web Application"
                }
              ].map((project, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                    width={150}
                    height={80}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent">
                    <div className="absolute bottom-0 left-0 p-6">
                      <p className="text-sm text-secondary mb-2">{project.category}</p>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <Link
                        href="/portfolio"
                        className="text-white flex items-center hover:text-secondary transition duration-300"
                      >
                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          {/* <GradientText
            colors={['#ED184F', "#4079ff", '#ED184F', "#4079ff", '#ED184F']}
            animationSpeed={3}
            // showBorder={false}
            className="custom-class"
          > */}
          <div className='mt-20'>
            <ScrollVelocity
                texts={[ 'UI Mitra', 'UI/UX Design' ]} 
                velocity={100} 
                className="custom-scroll-text text-8xl"
            />
          </div>
            
          {/* </GradientText> */}
          
        </section>

        {/* Testimonials */}
        <section className="pt-20 pb-40 bg-primary relative">
          <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 250 }}
              animate={{ opacity: testimonialsInView ? 1 : 0, y: testimonialsInView ? 0 : 300 }}
              transition={{ duration: 2 }}
              ref={testimonialsRef}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-300">Don&apos;t just take our word for it</p>
            </motion.div>
            
            {/* <div className="flex overflow-x-scroll space-x-8 pb-4"> */}
              <motion.div 
                  // className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                  className="flex overflow-x-scroll stacked-fractions space-x-8 pb-14 px-5"
                  initial={{ opacity: 0, y: -200 }}
                  animate={{ opacity: testimonialsInView ? 1 : 0, y: testimonialsInView ? 0 : -200 }}
                  transition={{ duration: 2 }}
                  ref={testimonialsRef}
                >
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-primary p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-secondary hover:scale-100 transition duration-300 min-w-[300px] flex-shrink border-2 border-secondary">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, index) => (
                            <Star key={index} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-400 mb-6">{testimonial.quote}</p>
                        <div>
                          <p className="font-bold text-gray-200">{testimonial.author}</p>
                          <p className="text-gray-300">{testimonial.role}</p>
                          <p className="text-secondary">{testimonial.company}</p>
                        </div>
                    </div>
                  ))}
              </motion.div>
            {/* </div> */}
                        
          </div>

          <motion.div 
            className='mx-auto relative'
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: testimonialsInView ? 1 : 0, x: testimonialsInView ? 0 : -200 }}
            transition={{ duration: 2, delay: 0.5 }}
            ref={testimonialsRef}
          >
              <Image 
                src={test}
                alt='testimonials'
                width={300}
                height={400}
                className='absolute right-12 -bottom-32 mx-auto sm:w-48'
              />
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 250 }}
                animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 200 }}
                transition={{ duration: 2 }}
                ref={ctaRef}
              >
                Ready to Transform Your Digital Experience?
            </motion.h2>
            <motion.p 
                className="text-xl text-indigo-100 mb-8"
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 100 }}
                transition={{ duration: 2 }}
                ref={ctaRef}
              >
                Let&apos;s create something amazing together
            </motion.p>
            <Link
              href="/contact"
              // className="inline-block bg-white text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
              className='relative inline-block px-8 py-3 items-center justify-center overflow-hidden bg-red-50 text-secondary rounded-xl font-semibold shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-primary before:duration-100 before:ease-linear hover:bg-primary hover:text-white hover:shadow-red-600 hover:before:border-[25px]'
            >
              <span className='relative z-10'>Get Started Today</span>
            </Link>
          </div>
        </section>
      </div>
  )
}

export default Home