import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'ui-design', label: 'UI Design' },
    { id: 'ux-trends', label: 'UX Trends' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'industry-insights', label: 'Industry Insights' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of UI Design: Trends to Watch in 2025",
      excerpt: "Explore the latest UI design trends that are shaping the future of digital experiences. From neomorphism to glassmorphism, we break down what's next in design.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Sarah Johnson",
      date: "March 15, 2025",
      readTime: "5 min read",
      category: "ui-design",
      tags: ["Design Trends", "UI", "Innovation"]
    },
    {
      id: 2,
      title: "Mastering User Research: A Comprehensive Guide",
      excerpt: "Learn how to conduct effective user research that leads to meaningful insights and better product decisions. A step-by-step guide for UX professionals.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Michael Chen",
      date: "March 12, 2025",
      readTime: "8 min read",
      category: "ux-trends",
      tags: ["UX Research", "Methodology", "Best Practices"]
    },
    {
      id: 3,
      title: "How We Increased Conversion Rates by 200%",
      excerpt: "A detailed case study on how we transformed an e-commerce platform's user experience to dramatically improve conversion rates.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Emily Rodriguez",
      date: "March 10, 2025",
      readTime: "10 min read",
      category: "case-studies",
      tags: ["Case Study", "E-commerce", "Conversion"]
    },
    {
      id: 4,
      title: "The Role of AI in Modern Design Systems",
      excerpt: "Discover how artificial intelligence is revolutionizing design systems and automating creative workflows for designers and developers.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Alex Thompson",
      date: "March 8, 2025",
      readTime: "6 min read",
      category: "industry-insights",
      tags: ["AI", "Design Systems", "Technology"]
    },
    {
      id: 5,
      title: "Creating Accessible Design: A Complete Guide",
      excerpt: "Learn how to design inclusive digital experiences that work for everyone. Best practices and guidelines for accessible design.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Maria Garcia",
      date: "March 5, 2025",
      readTime: "7 min read",
      category: "ui-design",
      tags: ["Accessibility", "Inclusive Design", "UI"]
    },
    {
      id: 6,
      title: "The Psychology of User Experience",
      excerpt: "Understanding how psychology principles influence user behavior and decision-making in digital products.",
      image: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "David Kim",
      date: "March 3, 2025",
      readTime: "9 min read",
      category: "ux-trends",
      tags: ["Psychology", "UX", "Behavior"]
    }
  ];

  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="pt-16">
      {/* Blog Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Insights, trends, and thought leadership from the world of design
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-indigo-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold mb-3 hover:text-indigo-600 transition duration-300">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest insights and trends delivered straight to your inbox
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
