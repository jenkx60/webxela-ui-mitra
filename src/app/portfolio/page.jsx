import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "web",
      tags: ["UI/UX", "E-commerce"],
      stats: {
        conversionIncrease: "45%",
        userSatisfaction: "92%",
        loadingSpeed: "0.8s"
      }
    },
    {
      id: 2,
      title: "Financial Dashboard",
      description: "Modern analytics dashboard with real-time data visualization and intuitive controls.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "dashboard",
      tags: ["Dashboard", "Analytics"],
      stats: {
        dataAccuracy: "99.9%",
        userEfficiency: "65%",
        processingTime: "0.3s"
      }
    },
    {
      id: 3,
      title: "Healthcare Mobile App",
      description: "Patient-centric mobile application for healthcare management and appointment scheduling.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "mobile",
      tags: ["Mobile", "Healthcare"],
      stats: {
        userRetention: "78%",
        appointmentEfficiency: "85%",
        patientSatisfaction: "94%"
      }
    },
    {
      id: 4,
      title: "Brand Identity System",
      description: "Comprehensive brand identity design including logo, guidelines, and marketing materials.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "branding",
      tags: ["Branding", "Identity"],
      stats: {
        brandRecognition: "120%",
        marketingEfficiency: "75%",
        brandConsistency: "98%"
      }
    },
    {
      id: 5,
      title: "Social Media Platform",
      description: "Feature-rich social platform designed for creative professionals.",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "web",
      tags: ["Social", "Web App"],
      stats: {
        userEngagement: "89%",
        contentCreation: "156%",
        communityGrowth: "234%"
      }
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      description: "Intuitive mobile app for tracking workouts and maintaining fitness goals.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "mobile",
      tags: ["Mobile", "Health"],
      stats: {
        userRetention: "82%",
        goalCompletion: "67%",
        workoutFrequency: "3.5x"
      }
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
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      stats: {
        timeframe: "3 months",
        teamSize: "8 members",
        technologies: ["React", "Node.js", "AWS"]
      }
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
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      stats: {
        timeframe: "6 months",
        teamSize: "12 members",
        technologies: ["React Native", "Firebase", "HIPAA Compliance"]
      }
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-16">
      {/* Portfolio Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Explore our latest work and see how we've helped businesses transform their digital presence
          </p>
        </div>
      </section>

      {/* Interactive Filter Section */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter.id
                    ? 'bg-indigo-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery with Enhanced Interactions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg shadow-lg bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/75 to-transparent transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 bg-white/20 text-white rounded-full text-sm backdrop-blur-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-sm">
                        <div className="text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        <div className="font-semibold text-indigo-600">{value}</div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => openProjectModal(project)}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                  >
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies with Interactive Elements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Case Studies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCaseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2">
                        {study.stats.technologies.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-white/20 text-white rounded-full text-sm backdrop-blur-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 hover:text-indigo-600 transition-colors">
                    {study.title}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-indigo-600 mb-2">Challenge</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-indigo-600 mb-2">Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-indigo-600 mb-2">Results</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {study.results.map((result, i) => (
                          <li key={i}>{result}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-gray-100">
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <div className="text-sm text-gray-500">Timeline</div>
                          <div className="font-semibold">{study.stats.timeframe}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Team Size</div>
                          <div className="font-semibold">{study.stats.teamSize}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Stack</div>
                          <div className="font-semibold">{study.stats.technologies.length} Technologies</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={() => setIsModalOpen(false)}></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      {selectedProject.title}
                    </h3>
                    <div className="mt-4">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <p className="text-sm text-gray-500 mb-4">
                        {selectedProject.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(selectedProject.stats).map(([key, value]) => (
                          <div key={key} className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-sm text-gray-500 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                            <div className="font-semibold text-indigo-600">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Let's create something amazing together
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Let's Discuss Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
