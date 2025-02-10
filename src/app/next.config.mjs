/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/about',
                destination: 'about/page.jsx',
            },
        ];
    },
};

export default nextConfig;
