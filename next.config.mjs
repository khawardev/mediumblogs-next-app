/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['www.medium.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],

    },

    fastRefresh: true,
    concurrentFeatures: true,

};

export default nextConfig;
