// import Link from 'next/link';
// import React from 'react';

// const NotFound = () => {
//   return (
//     <div className="pt-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <h1>404 - Page Not Found</h1>
//         <p>The page you're looking for doesn't exist.</p>
//         <Link href="/" className="text-secondary hover:text-red-700">Go back home</Link>
//       </div>
//     </div>
//   );
// };

// export default NotFound;

"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import SEO from './components/SEO';
import animation from '../app/public/Animation.gif';
import Image from 'next/image';

const NotFoundPage = () => {
  const router = useRouter();
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      setIsLoading(false)
    }, [3000]);

    const timeout = setTimeout(() => {
      router.push('/');
    }, 6000);

    return () => {
      clearTimeout(loadTimeout);
      clearTimeout(timeout);
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-center p-6">
        <motion.h1
          className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={animation}
            alt="Loading animation"
            width={200}
            height={200}
          />
        </motion.h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-center p-6">
      <SEO
        title="Page Not Found - UI Mitra"
        description="The page you are looking for does not exist. Please check the URL or return to the homepage."
        keywords="404, Not Found, UI Mitra" 
      />
      <motion.h1
        className="text-7xl font-bold text-gray-800 dark:text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Oops! The page you're looking for doesn't exist. Redirecting...
      </motion.p>
    </div>
  );
}

export default NotFoundPage;