import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <Link href="/" className="text-secondary hover:text-red-700">Go back home</Link>
      </div>
    </div>
  );
};

export default NotFound;