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
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-center p-6">
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