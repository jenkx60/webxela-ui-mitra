"use client"
import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import BlurText from '../components/BlurText';
import GradientText from '../components/GradientText';
import SpotlightCard from '../components/Spotlight';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);


const contact = () => {
  const [ formData, setFormData ] = useState({ firstname: "", lastname: "", email: "", subject: "", message: "" });
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    inputRef.current.reset();

    const { data, error } = await supabase.from('contact').insert([formData]);
    if(error) {
      console.log("Error inserting data:", error);
    } else {
      alert("Message sent successfully", data);
      // setFormData({ firstname: "", lastname: "", email: "", subject: "", message: ""});
    }
  };

  const handleAnimationComplete = () => {
    console.log("Animation Complete")
  };

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true });
  const { ref: contactInfoRef, inView: contactInfoInView } = useInView({ triggerOnce: true });
  const { ref: faqRef, inView: faqInView } = useInView({ triggerOnce: true });

  return (
    <div className="pt-16">
      <SEO
        title="Contact Us - UI Mitra"
        description="Get in touch with UI Mitra for all your UI/UX design needs. We're here to help you create stunning and user-friendly interfaces."
        keywords="contact, UI/UX, design, user experience, user interface, design services, web design, mobile design" 
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div 
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 150 }}
          transition={{ duration: 2 }}
          ref={heroRef}
        >
          <div className="text-center">

            <GradientText
              colors={['#ED184F', "#4079ff", '#ED184F', "#4079ff", '#ED184F']}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
              {/* <BlurText
                text="Get in Touch!"
                delay={100}
                animateBy="letter"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-4xl md:text-5xl font-bold mb-6 text-center flex justify-center" 
              /> */}
            </GradientText>
            
            <motion.p 
              className="text-xl max-w-3xl mx-auto"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: heroInView ? 1 : 0, x: heroInView ? 0 : -100 }}
              transition={{ duration: 2 }}
              ref={heroRef}
            >
              We'd love to hear from you. Let's create something amazing together.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: contactInView ? 1 : 0, x: contactInView ? 0 : -200 }}
              transition={{ duration: 2 }}
              ref={contactRef}
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Send Us a Message</h2>
              <form onSubmit={handleSubmit} ref={inputRef} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-secondary mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="bg-transparent w-full px-4 py-2 rounded-lg border border-dashed focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="John"
                      onChange={handleChange}
                      // value={formData.firstname}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-secondary mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="bg-transparent w-full px-4 py-2 rounded-lg border border-dashed focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Doe"
                      onChange={handleChange}
                      // value={formData.lastname}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-transparent w-full px-4 py-2 rounded-lg border border-dashed focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="john@example.com"
                    onChange={handleChange}
                    // value={formData.email}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="bg-transparent w-full px-4 py-2 rounded-lg border border-dashed focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="How can we help?"
                    onChange={handleChange}
                    // value={formData.subject}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="bg-transparent w-full px-4 py-2 rounded-lg border border-dashed focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Tell us about your project..."
                    onChange={handleChange}
                    // value={formData.message}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: contactInfoInView ? 1 : 0, y: contactInfoInView ? 0 : 100 }}
              transition={{ duration: 2 }}
              ref={contactInfoRef}
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-secondary mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-secondary">Our Location</h3>
                    <p className="text-gray-400">
                      123 Design Street<br />
                      Creative City, DC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-secondary mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-secondary">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-secondary mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-secondary">Email</h3>
                    <p className="text-gray-400">hello@uimitra.com</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-8">
                  <h3 className="font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-secondary transition duration-300">
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-secondary transition duration-300">
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-secondary transition duration-300">
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-secondary transition duration-300">
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div className="pt-8">
                  <div className="w-full h-64 rounded-lg">
                    {/* Replace with actual map implementation */}
                    <div className="w-full h-full flex items-center justify-center">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15546.316502736297!2d77.73035634791978!3d13.062440346179292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1000dceb6d6d%3A0xf03b96c66e9c5be2!2sBengaluru%20East%2C%20Bengaluru%2C%20Karnataka%20562129%2C%20India!5e0!3m2!1sen!2sng!4v1740482126614!5m2!1sen!2sng" width="600" height="260" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{borderRadius: '1rem'}}></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: faqInView ? 1 : 0, y: faqInView ? 0 : 150 }}
            transition={{ duration: 2 }}
            ref={faqRef}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-gray-400">Find answers to common questions about our services</p>
          </motion.div>
          <div className="max-w-3xl mx-auto">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: faqInView ? 1 : 0, x: faqInView ? 0 : 150 }}
                transition={{ duration: 2 }}
                ref={faqRef}
              >
                {[
                  {
                    question: "What is your typical process for new projects?",
                    answer: "Our process typically involves an initial consultation, research phase, design exploration, development, and final delivery. We maintain clear communication throughout to ensure your vision is achieved."
                  },
                  {
                    question: "How long does a typical project take?",
                    answer: "Project timelines vary depending on scope and complexity. A typical website design project might take 6-8 weeks, while a complex application could take 3-4 months."
                  },
                  {
                    question: "Do you offer ongoing support?",
                    answer: "Yes, we offer various support packages to ensure your digital product continues to perform optimally after launch."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-primary p-6 rounded-lg shadow-md">
                    <SpotlightCard
                      className='custom-spotlight-card' spotlightColor='#ED184F'
                    >
                      <h3 className="font-semibold text-lg mb-2 text-white">{faq.question}</h3>
                      <p className="text-gray-400">{faq.answer}</p>
                    </SpotlightCard>
                  </div>
                ))}
              </motion.div>
            
          </div>
        </div>
      </section>
    </div>
  )
};

export default contact;