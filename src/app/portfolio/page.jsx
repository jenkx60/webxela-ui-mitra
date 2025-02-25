"use client"
import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import ecom from '../public/ecom-redesign.jpeg';
import dashboard from '../public/dashboard-img.jpeg';
import health from '../public/health-mobile.jpeg';
import brand from '../public/brand-id.jpeg';
import social from '../public/social-plat.jpeg';
import fitness from '../public/fitness.jpeg';
import Image from 'next/image';
import SplitText from '../components/SplitText';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import GradientText from '../components/GradientText';
import SpotlightCard from '../components/Spotlight';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Design' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'branding', label: 'Branding' },
    { id: 'dashboard', label: 'Dashboards' }
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      description: "Complete redesign of a major e-commerce platform focusing on user experience and conversion optimization.",
      image: ecom.src,
      category: "web",
      tags: ["UI/UX", "E-commerce"]
    },
    {
      id: 2,
      title: "Financial Dashboard",
      description: "Modern analytics dashboard with real-time data visualization and intuitive controls.",
      image: dashboard.src,
      category: "dashboard",
      tags: ["Dashboard", "Analytics"]
    },
    {
      id: 3,
      title: "Healthcare Mobile App",
      description: "Patient-centric mobile application for healthcare management and appointment scheduling.",
      image: health.src,
      category: "mobile",
      tags: ["Mobile", "Healthcare"]
    },
    {
      id: 4,
      title: "Brand Identity System",
      description: "Comprehensive brand identity design including logo, guidelines, and marketing materials.",
      image: brand.src,
      category: "branding",
      tags: ["Branding", "Identity"]
    },
    {
      id: 5,
      title: "Social Media Platform",
      description: "Feature-rich social platform designed for creative professionals.",
      image: social.src,
      category: "web",
      tags: ["Social", "Web App"]
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      description: "Intuitive mobile app for tracking workouts and maintaining fitness goals.",
      image: fitness.src,
      category: "mobile",
      tags: ["Mobile", "Health"]
    }
  ];

  const featuredCaseStudies = [
    {
      title: "E-commerce Platform Redesign",
      challenge: "The client's existing platform had a high cart abandonment rate and poor mobile experience.",
      solution: "We implemented a streamlined checkout process and responsive design, resulting in a 40% reduction in cart abandonment.",
      results: [
        "45% increase in mobile conversions",
        "40% reduction in cart abandonment",
        "60% improvement in page load speed"
      ],
      image: ecom.src
    },
    {
      title: "Healthcare Mobile App",
      challenge: "Patients struggled with complicated appointment booking and medical record access.",
      solution: "Created an intuitive mobile app with simplified booking flow and secure health record management.",
      results: [
        "90% user satisfaction rate",
        "50% reduction in booking time",
        "200% increase in patient engagement"
      ],
      image: health.src
    }
  ];

  const { ref: portfolioRef, inView: portfolioInView } = useInView({ triggerOnce: true });
  const { ref: filterRef, inView: filterInView } = useInView({ triggerOnce: true });
  const { ref: projectRef, inView: projectInView } = useInView({ triggerOnce: true });
  const { ref: filteredProjectsRef, inView: filteredProjectsInView } = useInView({ trackVisibility: true });
  const { ref: caseStudyRef, inView: caseStudyInView } = useInView({ triggerOnce: true });
  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true }); 

  const handleAnimationComplete = () => {
    console.log('All letter are animated')
  }

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-16">
      <SEO
        title="Our Portfolio - UI Mitra"
        description="Explore our portfolio to see the exceptional digital experiences we've crafted for our clientts."
        keywords="Portfolio, UI Mitra, UI, UX, Design, Digital Experiences" 
      />
      {/* Portfolio Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: portfolioInView ? 1 : 0, y: portfolioInView ? 0 : 150 }}
          transition={{ duration: 2 }}
          ref={portfolioRef}
        >
          <GradientText
            colors={['#ED184F', "#4079ff", '#ED184F', "#4079ff", '#ED184F']}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            {/* <SplitText
              text="Our Portfolio"
              className="text-4xl md:text-5xl font-bold text-center"
              delay={200}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.3}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete} 
            /> */}
          </GradientText>
          
          
          <p className="text-xl text-red-100 max-w-3xl mx-auto mt-6">
            Explore our latest work and see how we've helped businesses transform their digital presence
          </p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gradient-to-tr from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map(filter => (
              <motion.button
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: filterInView ? 1 : 0, x: filterInView ? 0 : 200 }}
                transition={{ duration: 1 }}
                ref={filterRef}
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-secondary text-white'
                    : 'bg-white text-gray-600 hover:bg-red-300'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: projectInView ? 1 : 0, x: projectInView ? 0 : 200 }}
            transition={{ duration: 2 }}
            ref={projectRef}
          >
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className="group relative overflow-hidden rounded-lg shadow-lg bg-white transform hover:scale-110 hover:bg-primary hover:text-white"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    width={300}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <SpotlightCard  
                  className='custom-spotlight-card' spotlightColor='#ED184F'
                >
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-red-50 text-secondary rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Link
                      href={`/case-study/${project.id}`}
                      className="inline-flex items-center text-secondary hover:text-secondary font-medium"
                    >
                      View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </SpotlightCard>
                
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: caseStudyInView ? 1 : 0, y: caseStudyInView ? 0 : 150 }}
            transition={{ duration: 2 }}
            ref={caseStudyRef}
          >
            Featured Case Studies
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: caseStudyInView ? 1 : 0, x: caseStudyInView ? 0 : 200 }}
            transition={{ duration: 2 }}
            ref={caseStudyRef}
          >
            {featuredCaseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-110 hover:bg-primary hover:text-white">
                <div className="h-64 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-secondary mb-2">Challenge</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-secondary mb-2">Solution</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Results</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {study.results.map((result, i) => (
                        <li key={i}>{result}</li>
                      ))}
                    </ul>
                  </div>
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
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 200 }}
            transition={{ duration: 2 }}
            ref={ctaRef}
          >
            Have a Project in Mind?
          </motion.h2>
          <motion.p 
            className="text-xl text-indigo-100 mb-8"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 200 }}
            transition={{ duration: 2 }}
            ref={ctaRef}
          >
            Let's create something amazing together
          </motion.p>
          <Link
            href="/contact"
            // className="inline-block bg-white text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            className='relative inline-block px-8 py-3 items-center justify-center overflow-hidden bg-red-50 text-secondary rounded-xl font-semibold shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-primary before:duration-100 before:ease-linear hover:bg-primary hover:text-white hover:shadow-red-600 hover:before:border-[25px]'
          >
            <span className='relative z-10'>Let's Discuss Your Project</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;