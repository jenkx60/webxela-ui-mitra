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

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-16">
      {/* Portfolio Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Explore our latest work and see how we've helped businesses transform their digital presence
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-secondary text-white'
                    : 'bg-white text-gray-600 hover:bg-red-50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg bg-white">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Case Studies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCaseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Let's create something amazing together
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Let's Discuss Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;