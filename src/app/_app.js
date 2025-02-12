import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '@/app/styles/globals.css';
import Layout from './components/Layout';
import SEO from './components/SEO';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <SEO 
        title="UI Mitra - Your UI/UX Design Partner"
        description="UI Mitra provides top-notch UI/UX design services to help you create stunning and user-friendly interfaces."
        keywords="UI/UX, design, user experience, user interface, design services, web design, mobile design"
      />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
    </Layout>
  );
}

export default MyApp;