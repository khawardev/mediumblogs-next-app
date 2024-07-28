/** @type {import('next').NextConfig} */
// import flowbite from "flowbite-react/tailwind";

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },

};

export default nextConfig;
