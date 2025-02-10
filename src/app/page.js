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

import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Monitor, Users, Layout, Lightbulb, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ecom from '../app/public/ecom-redesign.jpeg';
import bank from '../app/public/banking-img.jpeg';
import dashboard from '../app/public/dashboard-img.jpeg';

const Home = () => {
  return (
    <div>
        {/* <Navbar /> */}

      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20 lg:py-32">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Crafting Exceptional User Experiences
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Where innovation meets design to create meaningful digital experiences that inspire and engage.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/portfolio"
                  className="bg-white text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
                >
                  View Our Work
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-secondary transition duration-300"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600">Comprehensive design solutions for your digital needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href="/services" className="text-secondary font-medium flex items-center hover:text-secondary">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
              <p className="text-xl text-gray-600">Some of our recent projects that made an impact</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600">Don&apos;t just take our word for it</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Digital Experience?</h2>
            <p className="text-xl text-indigo-100 mb-8">Let&apos;s create something amazing together</p>
            <Link
              href="/contact"
              className="inline-block bg-white text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Get Started Today
            </Link>
          </div>
        </section>
      </div>

      {/* <div>
        <Footer />
      </div> */}
    </div>
  )
}

export default Home