// import React from 'react'

// const page = () => {
//   return (
//     <div>page</div>
//   )
// }

// export default page
"use client"
import React from 'react';
import { Users, Heart, Zap, Target, Award, Smile } from 'lucide-react';
import emily from '@/app/public/emily.jpeg';
import micheal from '@/app/public/micheal.jpeg';
import sarah from '@/app/public/sarah.jpeg';
import team from '@/app/public/team.jpeg';
import Image from 'next/image';
import TiltedCard from '../components/TiltedCard';

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

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story: Where Friendship Meets Growth</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We're more than just a design agency – we're a community of passionate creators dedicated to crafting exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2018, DesignCraft has grown from a small team of passionate designers to a full-service UI/UX design agency. Our journey is built on the foundation of collaboration, innovation, and continuous growth.
              </p>
              <p className="text-gray-600">
                We believe that great design has the power to transform businesses and enhance people's lives. Our community-driven approach ensures that we not only deliver exceptional results but also foster lasting relationships with our clients.
              </p>
            </div>
            <div className="relative">
              <Image
                src={team}
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="inline-block p-3 bg-red-100 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The creative minds behind our success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={50}
                  className="w-full h-64 object-cover"
                /> */}
                <TiltedCard 
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
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-secondary mb-4">{member.role}</p>
                  <p className="text-gray-600 italic">"{member.quote}"</p>
                </div>
              </div>
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
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-indigo-200">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Project?</h2>
          <a
            href="/contact"
            className="inline-block bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition duration-300"
          >
            Let's Work Together
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;