/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['www.medium.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],

    },


};

export default nextConfig;
