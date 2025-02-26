"use client"
import React from 'react';
import { Users, Heart, Zap, Target, Award, Smile } from 'lucide-react';
import emily from '@/app/public/emily.jpeg';
import micheal from '@/app/public/micheal.jpeg';
import sarah from '@/app/public/sarah.jpeg';
import team from '@/app/public/team.jpeg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TiltedCard from '../components/TiltedCard';
import CountUp from '../components/CountUp';
import SEO from '../components/SEO';
import GradientText from '../components/GradientText';

const About = () => {
  const coreValues = [
    {
      icon: <Heart className="h-8 w-8 text-secondary" />,
      title: "Collaboration",
      description: "We believe in the power of working together to achieve exceptional results."
    },
    {
      icon: <Zap className="h-8 w-8 text-secondary" />,
      title: "Innovation",
      description: "Pushing boundaries and exploring new possibilities in design."
    },
    {
      icon: <Target className="h-8 w-8 text-secondary" />,
      title: "Growth",
      description: "Continuous learning and improvement in everything we do."
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Lead Designer",
      image: sarah.src,
      quote: "Design is not just what it looks like, it's how it works."
    },
    {
      name: "Michael Chen",
      role: "UX Researcher",
      image: micheal.src,
      quote: "Understanding users is the key to great design."
    },
    {
      name: "Emily Rodriguez",
      role: "UI Designer",
      image: emily.src,
      quote: "Simplicity is the ultimate sophistication."
    }
  ];

  const achievements = [
    { number: "50+", label: "Happy Clients" },
    { number: "100+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "15+", label: "Design Awards" }
  ];

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: introRef, inView: introInView } = useInView({ triggerOnce: true });
  const { ref: coreRef, inView: coreInView } = useInView({ triggerOnce: true });
  const { ref: teamRef, inView: teamInView } = useInView({ triggerOnce: true });
  const { ref: achievementRef, inView: achievementInView } = useInView({ triggerOnce: true });
  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true });

  return (
    <div className="pt-16">
      <SEO
        title="About Us - UI Mitra"
        description="Learn more about UI Mitra and our mission to create exceptional user experiences."
        keywords="About, UI Mitra, User Experiences, UI, UX, Design" 
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 100 }}
            transition={{ duration: 2 }}
            ref={heroRef}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Our Story:</h1>
            <GradientText
              colors={['#ED184F', "#4079ff", '#ED184F', "#4079ff", '#ED184F']}
              animationSpeed={8}
              showBorder={false}
              className="custom-class"
            >
              <h1 className='text-4xl md:text-5xl font-bold mb-6'> Where Friendship Meets Growth</h1>
            </GradientText>
            <p className="text-xl max-w-3xl mx-auto">
              We're more than just a design agency – we're a community of passionate creators dedicated to crafting exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: introInView ? 1 : 0, y: introInView ? 0 : 150 }}
              transition={{ duration: 2 }}
              ref={introRef}
            >
              {/* <GradientText
                colors={['#ED184F', "#4079ff", '#ED184F', "#4079ff", '#ED184F']}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >
                <p className='bg-transparent text-xl'>Welcome to UI Mitra</p>
              </GradientText> */}
              <h2 className="text-3xl font-bold mb-6 text-gray-100">Who We Are</h2>
              <p className="text-gray-400 mb-6">
                Founded in 2018, UI Mitra has grown from a small team of passionate designers to a full-service UI/UX design agency. Our journey is built on the foundation of collaboration, innovation, and continuous growth.
              </p>
              <p className="text-gray-400">
                We believe that great design has the power to transform businesses and enhance people's lives. Our community-driven approach ensures that we not only deliver exceptional results but also foster lasting relationships with our clients.
              </p>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: introInView ? 1 : 0, x: introInView ? 0 : 150 }}
              transition={{ duration: 2 }}
              ref={introRef}
            >
              <Image
                src={team}
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
                loading='lazy'
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-200"
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: coreInView ? 1 : 0, y: coreInView ? 0 : 150 }}
              transition={{ duration: 2 }}
              ref={coreRef}
            >
              Our Core Values
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: coreInView ? 1 : 0, y: coreInView ? 0 : 150 }}
              transition={{ duration: 2 }}
              ref={coreRef}
            >
              The principles that guide everything we do
            </motion.p>
          </div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: coreInView ? 1 : 0, x: coreInView ? 0 : 150 }}
            transition={{ duration: 2 }}
            ref={coreRef}
          >
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl duration-300 relative overflow-hidden text-secondary transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-700 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-700 hover:text-white hover:shadow-pink-400 hover:before:w-2/4 hover:before:bg-primary hover:after:w-2/4 hover:after:bg-primary">
                <div className='relative z-10'>
                  <div className="inline-block p-3 bg-red-100 rounded-full mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
                
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: teamInView ? 1 : 0, y: teamInView ? 0 : 150 }}
            transition={{ duration: 2 }}
            ref={teamRef}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-200">Meet Our Team</h2>
            <p className="text-xl text-gray-400">The creative minds behind our success</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:scale-110 hover:bg-secondary hover:text-white"
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: teamInView ? 1 : 0, x: teamInView ? 0 : 100 }}
                transition={{ duration: 2 }}
                ref={teamRef}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={50}
                  loading='lazy'
                  className="w-full h-64 object-cover"
                />
                {/* <TiltedCard 
                  imageSrc={member.image}
                  altText={member.name}
                  captionText={member.name}
                  containerHeight="300px"
                  containerWidth="300px"
                  imageHeight="300px"
                  imageWidth="300px"
                  rotateAmplitude={12}
                  scaleOnHover={1.2}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <p className="tilted-card-demo-text">
                      {member.name}
                    </p>
                  }
                /> */}
                <div className="p-6 flex flex-col justify-center place-items-center align-middle">
                  <GradientText
                    colors={['#ED184F', "#4079ff", '#ED184F', "#4079ff", '#ED184F']}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class"
                  >
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  </GradientText>
                  <p className="mb-4">{member.role}</p>
                  <p className="text-gray-600 italic">"{member.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-7xl font-bold mb-2">
                  <CountUp
                    from={0}
                    to={achievement.number}
                    separator=","
                    direction="up"
                    duration={2}
                    className="count-up-text" 
                  />
                </div>
                <div className="text-indigo-200 text-xl">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 150}}
            transition={{ duration: 2 }}
            ref={ctaRef}
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.a
            href="/contact"
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: ctaInView ? 1 : 0, x: ctaInView ? 0 : -150 }}
            transition={{ duration: 2 }}
            ref={ctaRef}
            // className="inline-block bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition duration-300"
            className='relative inline-block px-8 py-3 items-center justify-center overflow-hidden bg-secondary text-primary rounded-xl font-semibold shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-primary before:duration-100 before:ease-linear hover:bg-primary hover:text-white hover:shadow-primary hover:before:border-[25px]'
          >
            <span className='relative z-10'>Let's Work Together</span>
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default About;