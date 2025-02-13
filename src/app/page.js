// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.js
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

"use client"
import React from 'react';
import { Monitor, Users, Layout, Lightbulb, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ecom from '../app/public/ecom-redesign.jpeg';
import bank from '../app/public/banking-img.jpeg';
import dashboard from '../app/public/dashboard-img.jpeg';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Particles from './components/Particles';
import SpotlightCard from './components/Spotlight';
import RotatingText from './components/TrueFocus';
import TrueFocus from './components/TrueFocus';
import FallingText from './components/FallingText';
import Aurora from './components/Aurora';

const Home = () => {

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice',
  //   }
  // };

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: false });
  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: false });
  const { ref: workRef, inView: workInView } = useInView({ triggerOnce: false });
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({ triggerOnce: false });
  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: false })

  const fadeInUp = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1 }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 }
  }
  return (
      <div className="pt-16">
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
                initial={{ opacity: 0, y: -100 }}
                // initial="initial"
                animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : -50 }}
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
        <section className="py-20 bg-gray-50">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600">Comprehensive design solutions for your digital needs</p>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: servicesInView ? 1 : 0 }}
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
              <p className="text-xl text-gray-600">Some of our recent projects that made an impact</p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: workInView ? 1 : 0 }}
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
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: testimonialsInView ? 1 : 0 }}
              transition={{ duration: 2 }}
              ref={testimonialsRef}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600">Don&apos;t just take our word for it</p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: testimonialsInView ? 1 : 0 }}
              transition={{ duration: 2 }}
              ref={testimonialsRef}
            >
              {[
                {
                  quote: "Working with DesignCraft was a game-changer for our product. Their attention to detail and user-centric approach helped us create an exceptional experience for our customers.",
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
                  quote: "Professional, responsive, and incredibly talented. DesignCraft delivered beyond our expectations and helped us achieve our business goals.",
                  author: "Emily Rodriguez",
                  role: "Marketing Director",
                  company: "Global Solutions"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-secondary">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 50 }}
                transition={{ duration: 2 }}
                ref={ctaRef}
              >
                Ready to Transform Your Digital Experience?
            </motion.h2>
            <motion.p 
                className="text-xl text-indigo-100 mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 50 }}
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