// import React from 'react'

// const page = () => {
//   return (
//     <div>page</div>
//   )
// }

// export default page
"use client"
import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


const Contact = () => {
  const [ formData, setFormData ] = useState({ firstname: "", lastname: "", email: "", subject: "", message: "" });
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.firstname]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    inputRef.current.reset();

    const { data, error } = await supabase.from("contacts").insert([formData]);
    if(error) {
      console.log("Error inserting data:", error);
    } else {
      alert("Message sent successfully", data);
      setFormData({ firstname: "", lastname: "", email: "", subject: "", message: ""});
    }
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We'd love to hear from you. Let's create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} ref={inputRef} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="John"
                      onChange={handleChange}
                      // value={formData.firstname}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Doe"
                      onChange={handleChange}
                      // value={formData.lastname}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="john@example.com"
                    onChange={handleChange}
                    // value={formData.email}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="How can we help?"
                    onChange={handleChange}
                    // value={formData.subject}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-secondary"
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
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-secondary mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold">Our Location</h3>
                    <p className="text-gray-600">
                      123 Design Street<br />
                      Creative City, DC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-secondary mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-secondary mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">hello@designcraft.com</p>
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
                  <div className="w-full h-64 bg-gray-200 rounded-lg">
                    {/* Replace with actual map implementation */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      Map placeholder
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find answers to common questions about our services</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
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
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;