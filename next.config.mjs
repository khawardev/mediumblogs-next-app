import tailwindcss from 'tailwindcss-highlights';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    plugins: [tailwindcss],
};

export default nextConfig;
