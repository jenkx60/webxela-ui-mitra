import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '@/app/styles/globals.css';
import Layout from './components/Layout';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
    </Layout>
  );
}

export default MyApp;